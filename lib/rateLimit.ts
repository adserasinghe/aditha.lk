import { NextRequest, NextResponse } from 'next/server';

interface RateLimitOptions {
  /**
   * Time window in milliseconds (default: 60,000ms / 1 minute)
   */
  windowMs?: number;
  /**
   * Maximum allowed requests within the time window (default: 60)
   */
  maxRequests?: number;
  /**
   * Prefix for store keys to isolate limits across different endpoints
   */
  keyPrefix?: string;
}

interface RecordValue {
  count: number;
  resetTime: number;
}

// In-memory store for tracking IP request counts
const store = new Map<string, RecordValue>();

// Cleanup stale records every 5 minutes to prevent memory leaks
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of store.entries()) {
      if (now > record.resetTime) {
        store.delete(key);
      }
    }
  }, 5 * 60 * 1000);
}

/**
 * Extract client IP address from request headers with fallback.
 */
export function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const ip = forwardedFor.split(',')[0].trim();
    if (ip) return ip;
  }
  const realIp = req.headers.get('x-real-ip');
  if (realIp) return realIp.trim();

  const cfIp = req.headers.get('cf-connecting-ip');
  if (cfIp) return cfIp.trim();

  return '127.0.0.1';
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number; // Unix timestamp in seconds
  retryAfter: number; // Seconds to wait before retrying
}

/**
 * Check rate limit for a given request.
 */
export function checkRateLimit(
  req: NextRequest,
  options: RateLimitOptions = {}
): RateLimitResult {
  const {
    windowMs = 60 * 1000,
    maxRequests = 60,
    keyPrefix = 'global'
  } = options;

  const ip = getClientIp(req);
  const key = `${keyPrefix}:${ip}`;
  const now = Date.now();

  let record = store.get(key);

  if (!record || now > record.resetTime) {
    record = {
      count: 1,
      resetTime: now + windowMs,
    };
    store.set(key, record);
  } else {
    record.count += 1;
  }

  const success = record.count <= maxRequests;
  const remaining = Math.max(0, maxRequests - record.count);
  const resetSeconds = Math.ceil(record.resetTime / 1000);
  const retryAfter = Math.max(1, Math.ceil((record.resetTime - now) / 1000));

  return {
    success,
    limit: maxRequests,
    remaining,
    reset: resetSeconds,
    retryAfter,
  };
}

/**
 * Attach rate-limiting headers to a response object.
 */
export function applyRateLimitHeaders(
  response: NextResponse,
  result: RateLimitResult
): NextResponse {
  response.headers.set('X-RateLimit-Limit', result.limit.toString());
  response.headers.set('X-RateLimit-Remaining', result.remaining.toString());
  response.headers.set('X-RateLimit-Reset', result.reset.toString());

  if (!result.success) {
    response.headers.set('Retry-After', result.retryAfter.toString());
  }

  return response;
}

/**
 * Helper to construct a 429 Too Many Requests response with standard headers.
 */
export function createRateLimitErrorResponse(
  result: RateLimitResult,
  customMessage?: string
): NextResponse {
  const message = customMessage || `Too many requests. Please try again in ${result.retryAfter} second(s).`;

  const response = NextResponse.json(
    {
      error: 'Rate limit exceeded',
      message,
      retryAfter: result.retryAfter,
    },
    { status: 429 }
  );

  return applyRateLimitHeaders(response, result);
}

import { NextRequest, NextResponse } from 'next/server';

interface RateLimitOptions {
  windowMs: number;
  maxRequests: number;
  keyPrefix?: string;
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

// In-memory rate limiting map
const ipRequestCounts = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(req: NextRequest, options: RateLimitOptions): RateLimitResult {
  const { windowMs, maxRequests, keyPrefix = 'rl' } = options;
  const forwarded = req.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';
  const key = `${keyPrefix}:${ip}`;
  const now = Date.now();

  const record = ipRequestCounts.get(key);

  if (!record || now > record.resetTime) {
    ipRequestCounts.set(key, { count: 1, resetTime: now + windowMs });
    return {
      success: true,
      limit: maxRequests,
      remaining: maxRequests - 1,
      reset: Math.ceil((now + windowMs) / 1000),
    };
  }

  if (record.count >= maxRequests) {
    return {
      success: false,
      limit: maxRequests,
      remaining: 0,
      reset: Math.ceil(record.resetTime / 1000),
    };
  }

  record.count += 1;
  return {
    success: true,
    limit: maxRequests,
    remaining: maxRequests - record.count,
    reset: Math.ceil(record.resetTime / 1000),
  };
}

export function createRateLimitErrorResponse(result: RateLimitResult, message: string): NextResponse {
  const response = NextResponse.json({ error: message }, { status: 429 });
  return applyRateLimitHeaders(response, result);
}

export function applyRateLimitHeaders(response: NextResponse, result: RateLimitResult): NextResponse {
  response.headers.set('X-RateLimit-Limit', result.limit.toString());
  response.headers.set('X-RateLimit-Remaining', result.remaining.toString());
  response.headers.set('X-RateLimit-Reset', result.reset.toString());
  return response;
}

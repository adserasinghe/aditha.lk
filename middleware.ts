import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  checkRateLimit,
  applyRateLimitHeaders,
  createRateLimitErrorResponse,
} from './lib/rateLimit';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const origin = request.headers.get('origin') || '*';

  // Define CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization',
    'Access-Control-Max-Age': '86400',
    'Access-Control-Allow-Credentials': 'true',
  };

  // Handle OPTIONS preflight requests for CORS immediately
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  // 1. Differentiate backend API routes vs general pages
  const isApiRoute = pathname.startsWith('/api/');

  // Rate limit parameters:
  // - API routes: max 60 requests per minute per IP
  // - Web pages: max 120 requests per minute per IP
  const rateLimitOptions = isApiRoute
    ? { windowMs: 60 * 1000, maxRequests: 60, keyPrefix: 'api_global' }
    : { windowMs: 60 * 1000, maxRequests: 120, keyPrefix: 'web_global' };

  const rateLimitResult = checkRateLimit(request, rateLimitOptions);

  if (!rateLimitResult.success) {
    if (isApiRoute) {
      const errorResponse = createRateLimitErrorResponse(
        rateLimitResult,
        `API rate limit exceeded. Maximum ${rateLimitOptions.maxRequests} requests per minute allowed.`
      );
      Object.entries(corsHeaders).forEach(([key, value]) => {
        errorResponse.headers.set(key, value);
      });
      return errorResponse;
    }
    const response = new NextResponse('Too Many Requests. Please try again later.', { status: 429 });
    applyRateLimitHeaders(response, rateLimitResult);
    Object.entries(corsHeaders).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
    return response;
  }

  // 2. Pass request along & set security, CORS, and rate limit headers
  const response = NextResponse.next();

  // Attach rate limit headers to successful responses
  applyRateLimitHeaders(response, rateLimitResult);

  // Set CORS headers on response
  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // Set standard HTTP Security Headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), browsing-topics=()');
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data: https:; connect-src 'self' https:; frame-ancestors *;"
  );

  return response;
}

// Config to run on all paths including API routes, excluding static assets
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};


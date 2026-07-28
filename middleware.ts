import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Basic in-memory rate limiter (not persistent across serverless invocations)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const LIMIT = 100; // requests
const WINDOW_MS = 60 * 1000; // 1 minute

export function middleware(request: NextRequest) {
  // 1. Rate Limiting
  const forwardedFor = request.headers.get('x-forwarded-for');
  const ip = typeof forwardedFor === 'string' ? forwardedFor.split(',')[0] : 'anonymous';
  const now = Date.now();
  const userData = rateLimitMap.get(ip) || { count: 0, lastReset: now };

  if (now - userData.lastReset > WINDOW_MS) {
    userData.count = 1;
    userData.lastReset = now;
  } else {
    userData.count += 1;
  }
  rateLimitMap.set(ip, userData);

  if (userData.count > LIMIT) {
    return new NextResponse('Too Many Requests', { status: 429 });
  }

  // 2. Security Headers
  const response = NextResponse.next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;"
  );

  return response;
}

// Config to run on all paths except static files
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

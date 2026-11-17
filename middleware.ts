import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  const nonce = btoa(String.fromCharCode(...bytes));
  const isDev = process.env.NODE_ENV === 'development';

  const cspHeader = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ''} https://va.vercel-scripts.com`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: blob: https://6rhooijwwmhiclbs.public.blob.vercel-storage.com https://picsum.photos https://fastly.picsum.photos https://images.unsplash.com",
    "font-src 'self' data: https://fonts.gstatic.com",
    `connect-src 'self' https://formspree.io https://vitals.vercel-insights.com https://va.vercel-scripts.com https://6rhooijwwmhiclbs.public.blob.vercel-storage.com${isDev ? ' ws: wss:' : ''}`,
    "frame-src 'self' https://6rhooijwwmhiclbs.public.blob.vercel-storage.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://formspree.io",
    "frame-ancestors 'self' https://aistudio.google.com https://ai.studio https://*.google.com https://*.usercontent.goog",
    ...(!isDev ? ['upgrade-insecure-requests'] : []),
  ].join('; ');

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', cspHeader);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set('Content-Security-Policy', cspHeader);
  return response;
}

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};

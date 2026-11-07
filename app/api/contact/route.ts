import { NextRequest, NextResponse } from 'next/server';
import {
  checkRateLimit,
  createRateLimitErrorResponse,
  applyRateLimitHeaders,
} from '@/lib/rateLimit';

export async function POST(req: NextRequest) {
  // Enforce contact-specific rate limit: Max 5 submissions per 10 minutes per IP
  const rateLimitResult = checkRateLimit(req, {
    windowMs: 10 * 60 * 1000,
    maxRequests: 5,
    keyPrefix: 'contact_submit',
  });

  if (!rateLimitResult.success) {
    return createRateLimitErrorResponse(
      rateLimitResult,
      'You have sent too many contact requests recently. Please wait a few minutes before submitting again.'
    );
  }

  try {
    const body = (await req.json()) as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    };
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      const response = NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
      return applyRateLimitHeaders(response, rateLimitResult);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const response = NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
      return applyRateLimitHeaders(response, rateLimitResult);
    }

    // Log contact form submission server-side
    console.log('--- NEW CONTACT FORM SUBMISSION ---');
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject || 'No Subject'}`);
    console.log(`Message:\n${message}`);
    console.log('------------------------------------');

    // Simulate network delay for realistic feedback
    await new Promise((resolve) => setTimeout(resolve, 800));

    const response = NextResponse.json({
      success: true,
      message: `Thank you, ${name}! Your message has been received. Aditha will get back to you shortly.`
    });

    return applyRateLimitHeaders(response, rateLimitResult);
  } catch {
    const response = NextResponse.json(
      { error: 'Failed to process request. Please try again.' },
      { status: 500 }
    );
    return applyRateLimitHeaders(response, rateLimitResult);
  }
}

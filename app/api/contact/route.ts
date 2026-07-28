import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    // In a real deployed app, you can integrate Resend, SendGrid, or Nodemailer here.
    // For AI Studio build preview, we log the message server-side and confirm delivery.
    console.log('--- NEW CONTACT FORM SUBMISSION ---');
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject || 'No Subject'}`);
    console.log(`Message:\n${message}`);
    console.log('------------------------------------');

    // Simulate network delay for realistic feedback
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({
      success: true,
      message: `Thank you, ${name}! Your message has been received. Aditha will get back to you shortly.`
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to process request. Please try again.' },
      { status: 500 }
    );
  }
}

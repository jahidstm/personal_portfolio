import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/validations';

const resend = new Resend(process.env.RESEND_API_KEY);

// Basic IP rate limit tracking (in-memory for simple portfolio use case)
const rateLimit = new Map<string, { count: number; timestamp: number }>();

export async function POST(req: Request) {
  try {
    // 1. Rate Limiting Check
    const ip = req.headers.get('x-forwarded-for') || 'anonymous';
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    const maxRequests = 3;

    const requestData = rateLimit.get(ip) || { count: 0, timestamp: now };
    
    if (now - requestData.timestamp < windowMs) {
      if (requestData.count >= maxRequests) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }
      requestData.count += 1;
    } else {
      requestData.count = 1;
      requestData.timestamp = now;
    }
    rateLimit.set(ip, requestData);

    // 2. Parse and Validate Body
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    // 3. Check for Email config
    const contactEmail = process.env.CONTACT_EMAIL;
    if (!contactEmail) {
      console.error('CONTACT_EMAIL environment variable is missing.');
      return NextResponse.json(
        { error: 'Server configuration error. Contact email is not set.' },
        { status: 500 }
      );
    }

    // 4. Send Email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>', // Resend test domain
      to: [contactEmail],
      subject: `Portfolio Message: ${validatedData.subject}`,
      replyTo: validatedData.email,
      html: `
        <h2>New Message from ${validatedData.name}</h2>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <hr />
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { error: 'Failed to send email via Resend API.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully!', data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Contact Form Error:', error);
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}

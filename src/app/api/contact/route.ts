import { NextResponse } from 'next/server';

export async function POST() {
  // TODO: Implement contact form submission with Resend & Zod validation in Phase 4
  return NextResponse.json(
    { message: 'Contact endpoint placeholder — will be implemented in Phase 4' },
    { status: 200 }
  );
}

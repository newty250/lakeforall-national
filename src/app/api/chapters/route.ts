import { NextRequest, NextResponse } from 'next/server';
import type { ChapterApplication } from '@/types';

function validateApplication(data: unknown): data is ChapterApplication {
  if (typeof data !== 'object' || data === null) return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.lakeName === 'string' && d.lakeName.trim().length > 0 &&
    typeof d.location === 'string' && d.location.trim().length > 0 &&
    typeof d.contactName === 'string' && d.contactName.trim().length > 0 &&
    typeof d.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) &&
    typeof d.reason === 'string' && d.reason.trim().length > 0
  );
}

async function sendEmail(application: ChapterApplication) {
  const resendKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL || 'contact@lakeforall.org';

  if (!resendKey) {
    console.log('Chapter application received (email not configured):', application);
    return;
  }

  const body = {
    from: 'Lake For All <noreply@lakeforall.org>',
    to: [contactEmail],
    subject: `New Chapter Application: ${application.lakeName}`,
    html: `
      <h2>New Chapter Application</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px;font-weight:bold;background:#f3f4f6">Lake Name</td><td style="padding:8px">${application.lakeName}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f3f4f6">Location</td><td style="padding:8px">${application.location}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f3f4f6">Contact Name</td><td style="padding:8px">${application.contactName}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f3f4f6">Email</td><td style="padding:8px">${application.email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f3f4f6;vertical-align:top">Why Start a Chapter</td><td style="padding:8px">${application.reason}</td></tr>
      </table>
    `,
  };

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Email send failed: ${err}`);
  }
}

export async function POST(request: NextRequest) {
  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (!validateApplication(data)) {
    return NextResponse.json({ error: 'All fields are required and must be valid' }, { status: 422 });
  }

  try {
    await sendEmail(data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Chapter application error:', error);
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import type { MaterialsRequest } from '@/types';

const MATERIALS_LABELS: Record<MaterialsRequest['materials'], string> = {
  'wave-cards': 'WAVE Cards',
  signs: 'Lake Responsibly Signs',
  both: 'WAVE Cards + Lake Responsibly Signs',
};

function validate(data: unknown): data is MaterialsRequest {
  if (typeof data !== 'object' || data === null) return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.name === 'string' && d.name.trim().length > 0 &&
    typeof d.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) &&
    typeof d.chapterLake === 'string' && d.chapterLake.trim().length > 0 &&
    ['wave-cards', 'signs', 'both'].includes(d.materials as string) &&
    typeof d.message === 'string' && d.message.trim().length > 0
  );
}

async function sendEmail(req: MaterialsRequest) {
  const resendKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL || 'contact@lakeforall.org';

  if (!resendKey) {
    console.log('Materials request received (email not configured):', req);
    return;
  }

  const body = {
    from: 'Lake For All <noreply@lakeforall.org>',
    to: [contactEmail],
    subject: `Materials Request: ${req.chapterLake} — ${MATERIALS_LABELS[req.materials]}`,
    html: `
      <h2>Education Materials Request</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px;font-weight:bold;background:#f3f4f6">Name</td><td style="padding:8px">${req.name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f3f4f6">Email</td><td style="padding:8px">${req.email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f3f4f6">Chapter / Lake</td><td style="padding:8px">${req.chapterLake}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f3f4f6">Materials Needed</td><td style="padding:8px">${MATERIALS_LABELS[req.materials]}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f3f4f6;vertical-align:top">Message</td><td style="padding:8px">${req.message}</td></tr>
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

  if (!validate(data)) {
    return NextResponse.json({ error: 'All fields are required and must be valid' }, { status: 422 });
  }

  try {
    await sendEmail(data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Materials request error:', error);
    return NextResponse.json({ error: 'Failed to submit request' }, { status: 500 });
  }
}

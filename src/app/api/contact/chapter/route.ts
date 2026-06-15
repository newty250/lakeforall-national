import { NextRequest, NextResponse } from 'next/server';
import { resend, FROM_ADDRESS, TEAM_EMAIL } from '@/lib/resend';

interface ChapterPayload {
  lakeName: string;
  location: string;
  contactName: string;
  email: string;
  reason: string;
}

function validate(data: unknown): data is ChapterPayload {
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

function teamHtml(d: ChapterPayload) {
  return `<!DOCTYPE html><html><body style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#374151;">
  <div style="background:#1B3A6B;padding:20px;border-radius:8px 8px 0 0;">
    <h2 style="color:white;margin:0;font-size:20px;">New Chapter Application</h2>
  </div>
  <div style="border:1px solid #e5e7eb;border-top:none;padding:24px;border-radius:0 0 8px 8px;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr><td style="padding:10px 12px;background:#f9fafb;font-weight:600;width:150px;border-bottom:1px solid #e5e7eb;">Lake Name</td><td style="padding:10px 12px;background:#f9fafb;border-bottom:1px solid #e5e7eb;">${d.lakeName}</td></tr>
      <tr><td style="padding:10px 12px;font-weight:600;border-bottom:1px solid #e5e7eb;">Location</td><td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;">${d.location}</td></tr>
      <tr><td style="padding:10px 12px;background:#f9fafb;font-weight:600;border-bottom:1px solid #e5e7eb;">Contact Name</td><td style="padding:10px 12px;background:#f9fafb;border-bottom:1px solid #e5e7eb;">${d.contactName}</td></tr>
      <tr><td style="padding:10px 12px;font-weight:600;">Email</td><td style="padding:10px 12px;"><a href="mailto:${d.email}" style="color:#4A9FD4;">${d.email}</a></td></tr>
    </table>
    <div style="margin-top:20px;padding:16px;background:#f0f9ff;border-left:4px solid #4A9FD4;border-radius:4px;">
      <p style="font-weight:600;margin:0 0 8px;font-size:14px;">Why they want to start a chapter:</p>
      <p style="margin:0;line-height:1.7;font-size:14px;">${d.reason}</p>
    </div>
    <p style="margin-top:20px;font-size:12px;color:#9ca3af;">Submitted via lakeforall.org/chapters</p>
  </div>
</body></html>`;
}

function confirmHtml(d: ChapterPayload) {
  return `<!DOCTYPE html><html><body style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#374151;">
  <div style="background:#1B3A6B;padding:28px 24px;border-radius:8px 8px 0 0;text-align:center;">
    <h1 style="color:white;margin:0;font-size:22px;">Welcome to the Movement</h1>
  </div>
  <div style="border:1px solid #e5e7eb;border-top:none;padding:28px;border-radius:0 0 8px 8px;line-height:1.7;">
    <p>Hi ${d.contactName},</p>
    <p>Thank you for your interest in starting a Lake For All chapter at <strong>${d.lakeName}</strong>. You're joining a growing national movement to protect public water access for all Americans.</p>
    <p>We'll be in touch within 5 business days to discuss next steps.</p>
    <p>In the meantime, explore our educational resources at <a href="https://lakeforall.org/education" style="color:#4A9FD4;">lakeforall.org/education</a>.</p>
    <p style="margin-top:28px;">— The Lake For All Team</p>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;">
    <p style="font-size:12px;color:#9ca3af;text-align:center;">
      Lake For All &middot; <a href="mailto:info@lakeforall.org" style="color:#9ca3af;">info@lakeforall.org</a> &middot; lakeforall.org
    </p>
  </div>
</body></html>`;
}

export async function POST(request: NextRequest) {
  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  if (!validate(data)) {
    return NextResponse.json({ error: 'All fields are required and must be valid' }, { status: 422 });
  }

  try {
    const [r1, r2] = await Promise.all([
      resend.emails.send({
        from: FROM_ADDRESS,
        to: TEAM_EMAIL,
        subject: `New Chapter Application — ${data.lakeName}`,
        html: teamHtml(data),
      }),
      resend.emails.send({
        from: FROM_ADDRESS,
        to: data.email,
        subject: 'Welcome to the Lake For All Movement',
        html: confirmHtml(data),
      }),
    ]);

    if (r1.error) throw new Error(r1.error.message);
    if (r2.error) throw new Error(r2.error.message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Chapter application email error:', error);
    return NextResponse.json({ error: 'Email send failed' }, { status: 500 });
  }
}

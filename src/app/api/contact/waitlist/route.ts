import { NextRequest, NextResponse } from 'next/server';
import { resend, FROM_ADDRESS, TEAM_EMAIL } from '@/lib/resend';

function validate(data: unknown): data is { email: string } {
  if (typeof data !== 'object' || data === null) return false;
  const d = data as Record<string, unknown>;
  return typeof d.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email);
}

export async function POST(request: NextRequest) {
  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  if (!validate(data)) {
    return NextResponse.json({ error: 'A valid email address is required' }, { status: 422 });
  }

  const { email } = data;

  try {
    const [r1, r2] = await Promise.all([
      resend.emails.send({
        from: FROM_ADDRESS,
        to: TEAM_EMAIL,
        subject: `Shop Waitlist Signup — ${email}`,
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#374151;">
  <div style="background:#1B3A6B;padding:20px;border-radius:8px 8px 0 0;">
    <h2 style="color:white;margin:0;font-size:18px;">Shop Waitlist Signup</h2>
  </div>
  <div style="border:1px solid #e5e7eb;border-top:none;padding:24px;border-radius:0 0 8px 8px;">
    <p style="font-size:14px;"><strong>Email:</strong> <a href="mailto:${email}" style="color:#4A9FD4;">${email}</a></p>
    <p style="font-size:12px;color:#9ca3af;margin-top:16px;">Submitted via lakeforall.org/shop</p>
  </div>
</body></html>`,
      }),
      resend.emails.send({
        from: FROM_ADDRESS,
        to: email,
        subject: "You're on the Lake For All Shop Waitlist",
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#374151;">
  <div style="background:#1B3A6B;padding:28px 24px;border-radius:8px 8px 0 0;text-align:center;">
    <h1 style="color:white;margin:0;font-size:22px;">You're on the Waitlist!</h1>
  </div>
  <div style="border:1px solid #e5e7eb;border-top:none;padding:28px;border-radius:0 0 8px 8px;line-height:1.7;">
    <p>Thanks for your interest in Lake For All merchandise.</p>
    <p>You'll be the first to know when our shop launches. All proceeds support lake access advocacy nationwide.</p>
    <p style="margin-top:28px;">— The Lake For All Team</p>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;">
    <p style="font-size:12px;color:#9ca3af;text-align:center;">
      Lake For All &middot; <a href="mailto:info@lakeforall.org" style="color:#9ca3af;">info@lakeforall.org</a> &middot; lakeforall.org
    </p>
  </div>
</body></html>`,
      }),
    ]);

    if (r1.error) throw new Error(r1.error.message);
    if (r2.error) throw new Error(r2.error.message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist email error:', error);
    return NextResponse.json({ error: 'Email send failed' }, { status: 500 });
  }
}

import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

// TODO: Change FROM_ADDRESS to 'Lake For All <info@lakeforall.org>' after verifying
// lakeforall.org in the Resend dashboard (resend.com → Domains → Add Domain → verify DNS records)
export const FROM_ADDRESS = 'Lake For All <onboarding@resend.dev>';

export const TEAM_EMAIL = 'info@lakeforall.org';

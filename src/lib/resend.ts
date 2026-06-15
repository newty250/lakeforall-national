import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

// lakeforall.org is verified in Resend — safe to use as FROM domain
export const FROM_ADDRESS = 'Lake For All <info@lakeforall.org>';

export const TEAM_EMAIL = 'info@lakeforall.org';
export const CHAPTERS_EMAIL = 'chapters@lakeforall.org';
export const MEDIA_EMAIL = 'media@lakeforall.org';

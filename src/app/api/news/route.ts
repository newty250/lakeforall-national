import { NextResponse } from 'next/server';
import { getStoredNews } from '@/lib/news';

export const revalidate = 604800;

export async function GET() {
  try {
    const data = await getStoredNews();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to retrieve news:', error);
    return NextResponse.json({ error: 'Failed to retrieve news' }, { status: 500 });
  }
}

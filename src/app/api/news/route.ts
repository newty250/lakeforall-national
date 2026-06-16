import { NextResponse } from 'next/server';
import { getStoredNews, MOCK_NEWS } from '@/lib/news';

export const revalidate = 604800;

export async function GET() {
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.json({ articles: MOCK_NEWS, updatedAt: null });
  }

  try {
    const data = await getStoredNews();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to retrieve news:', error);
    return NextResponse.json({ error: 'Failed to retrieve news' }, { status: 500 });
  }
}

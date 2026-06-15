import { NextRequest, NextResponse } from 'next/server';
import { fetchNewsFromAI } from '@/lib/anthropic';
import { storeNews } from '@/lib/news';

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const articles = await fetchNewsFromAI();
    await storeNews(articles);

    return NextResponse.json({
      success: true,
      count: articles.length,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Cron news fetch failed:', error);
    return NextResponse.json(
      { error: 'News fetch failed', detail: String(error) },
      { status: 500 }
    );
  }
}

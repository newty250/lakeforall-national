import Anthropic from '@anthropic-ai/sdk';
import type { NewsArticle } from '@/types';

const NEWS_PROMPT = `Search for the latest news from the past 7 days about public lake access in the United States. Focus on these topics:

1. Federal waterway legislation and public access rights
2. US Army Corps of Engineers lake access policies and rule changes
3. Wake surfing and personal watercraft regulations by state
4. Economic impact studies of lake recreation nationwide
5. Lake access rights, lawsuits, and advocacy efforts
6. State-by-state regulatory updates affecting lake recreation
7. Public lake privatization — lakefront property owners or HOAs using regulatory processes to restrict public water access
8. No wake zone abuse — buoys placed for private property benefit rather than genuine public safety
9. Lakefront property rights vs. public water access legal disputes and court decisions
10. Homeowner association lake restrictions and private shoreline access conflicts
11. Public waterway access rights — federal and state law on navigable water access
12. Lake access legislation by state — new laws or regulations affecting public lake use
13. Fishing access restrictions on public lakes and rivers
14. Swimming hole and natural swimming area closures linked to private property claims
15. Kayak and paddleboard access restrictions on public waterways

After searching, return ONLY a valid JSON array (no markdown, no explanation) with exactly 8 news items in this format:
[
  {
    "id": "unique-slug-based-on-title",
    "title": "Full article title",
    "summary": "2-3 sentence summary of the article and its significance to lake access advocates",
    "source": "Publication or agency name",
    "date": "YYYY-MM-DD",
    "url": "https://full-url-to-article",
    "category": "legislation"
  }
]

Valid category values: legislation, policy, advocacy, economic, regulation

Return only the JSON array, nothing else.`;

export async function fetchNewsFromAI(): Promise<NewsArticle[]> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY is not configured');
  }

  const client = new Anthropic({ apiKey });

  const response = await client.messages.create({
    model: 'claude-haiku-4-5',
    max_tokens: 4096,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tools: [{ type: 'web_search_20250305', name: 'web_search' }] as any,
    messages: [{ role: 'user', content: NEWS_PROMPT }],
  });

  const textContent = response.content.find((block) => block.type === 'text');
  if (!textContent || textContent.type !== 'text') {
    throw new Error('No text response from AI');
  }

  const text = textContent.text.trim();
  const jsonMatch = text.match(/\[[\s\S]*\]/);
  if (!jsonMatch) {
    throw new Error('Could not parse JSON from AI response');
  }

  const articles = JSON.parse(jsonMatch[0]) as NewsArticle[];
  return articles;
}

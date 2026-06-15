import type { NewsArticle } from '@/types';

export const MOCK_NEWS: NewsArticle[] = [
  {
    id: 'army-corps-access-review-2024',
    title: 'Army Corps of Engineers Launches Nationwide Review of Lake Access Policies',
    summary:
      'The US Army Corps of Engineers has announced a comprehensive review of public access policies at its 400+ managed lakes and reservoirs across the country. The review follows mounting pressure from recreation advocacy groups and could affect access rights for millions of Americans who visit Corps-managed waters annually.',
    source: 'US Army Corps of Engineers',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    url: 'https://www.usace.army.mil',
    category: 'policy',
  },
  {
    id: 'wake-surfing-ban-challenge',
    title: 'Federal Court Hears Challenge to State Wake Surfing Restrictions',
    summary:
      'A federal appeals court is reviewing a challenge to blanket wake surfing prohibitions enacted by several states, with lake recreation advocates arguing the bans exceed state authority over federally navigable waters. The case could set a nationwide precedent for how states regulate watersports on public lakes.',
    source: 'Lake Recreation Law Review',
    date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    url: '#',
    category: 'legislation',
  },
  {
    id: 'recreation-economy-report-2024',
    title: 'New Report: Lake Recreation Generates $700 Billion Annually for US Economy',
    summary:
      'The Outdoor Recreation Roundtable released its comprehensive analysis of lake recreation\'s economic footprint, finding that Americans\' visits to public lakes and reservoirs generate over $700 billion in economic activity and support more than 1 million jobs nationwide. The report underscores the stakes for communities near restricted lakes.',
    source: 'Outdoor Recreation Roundtable',
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    url: 'https://www.outdoorrecreationroundtable.org',
    category: 'economic',
  },
  {
    id: 'congressional-lake-access-act',
    title: 'Bipartisan Bill Would Protect Public Access to Federal Waterways',
    summary:
      'A bipartisan group of senators has introduced the Public Waterway Access Protection Act, which would require federal agencies to maintain existing public access at all navigable waters on federal land and establish a review process for any proposed restrictions. Advocacy groups including Lake For All are urging swift passage.',
    source: 'Congressional Record',
    date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    url: '#',
    category: 'legislation',
  },
  {
    id: 'small-town-lake-economy',
    title: 'Study: Lake Access Restrictions Cost Rural Towns Millions in Tourism Revenue',
    summary:
      'An independent economic study of five rural communities that experienced lake access restrictions found average annual tourism revenue losses of $4.2 million per community. Local businesses — marinas, restaurants, lodging, and outfitters — bore the brunt of the declines, with some towns reporting 30% drops in seasonal employment.',
    source: 'Journal of Rural Economic Development',
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    url: '#',
    category: 'economic',
  },
  {
    id: 'usfws-lake-policy-comment',
    title: 'US Fish & Wildlife Opens Public Comment on Lake Recreation Guidelines',
    summary:
      'The US Fish and Wildlife Service is accepting public comments on proposed updates to its guidelines governing motorized recreation on National Wildlife Refuge lakes. Recreation advocates are mobilizing to ensure the guidelines protect existing access rights while addressing genuine conservation concerns.',
    source: 'US Fish & Wildlife Service',
    date: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    url: 'https://www.fws.gov',
    category: 'policy',
  },
  {
    id: 'grassroots-chapters-growing',
    title: 'Grassroots Lake Access Movement Grows to Chapters in 12 States',
    summary:
      'What began as a local advocacy effort at Virginia\'s Lake Anna has grown into a multistate movement, with lake access advocacy chapters forming from New England to the Pacific Northwest. Organizers credit the national Lake For All network with providing resources and legal support to local groups fighting restrictions.',
    source: 'Outdoor Recreation Industry News',
    date: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    url: '#',
    category: 'advocacy',
  },
  {
    id: 'wake-boat-regulation-toolkit',
    title: 'National Recreation Organizations Release Wake Boat Regulation Best Practices',
    summary:
      'A coalition of national recreation organizations has published a framework for science-based wake boat regulation that balances environmental concerns with public access rights. The toolkit is being distributed to state legislators and local governments as an alternative to blanket bans.',
    source: 'American Recreation Coalition',
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    url: '#',
    category: 'regulation',
  },
];

export async function getStoredNews(): Promise<{ articles: NewsArticle[]; updatedAt: string | null }> {
  try {
    if (
      process.env.KV_REST_API_URL &&
      process.env.KV_REST_API_TOKEN
    ) {
      const { kv } = await import('@vercel/kv');
      const stored = await kv.get<{ articles: NewsArticle[]; updatedAt: string }>('lfa_news');
      if (stored) return stored;
    }
  } catch {
    // KV not available — fall through to mock data
  }

  return { articles: MOCK_NEWS, updatedAt: null };
}

export async function storeNews(articles: NewsArticle[]): Promise<void> {
  if (
    !process.env.KV_REST_API_URL ||
    !process.env.KV_REST_API_TOKEN
  ) {
    return;
  }
  const { kv } = await import('@vercel/kv');
  await kv.set('lfa_news', { articles, updatedAt: new Date().toISOString() });
}

import type { Metadata } from 'next';
import NewsCard from '@/components/NewsCard';
import { getStoredNews } from '@/lib/news';

export const metadata: Metadata = {
  title: 'News & Updates',
  description:
    'AI-curated national news on lake access rights, federal waterway legislation, and watersports regulations across the US.',
};

export const revalidate = 3600;

const CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'legislation', label: 'Legislation' },
  { value: 'policy', label: 'Policy' },
  { value: 'advocacy', label: 'Advocacy' },
  { value: 'economic', label: 'Economic Impact' },
  { value: 'regulation', label: 'Regulation' },
] as const;

export default async function NewsPage() {
  const { articles, updatedAt } = await getStoredNews();

  const lastUpdated = updatedAt
    ? new Date(updatedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      })
    : null;

  return (
    <>
      {/* Hero */}
      <section className="wave-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sky-blue font-semibold uppercase tracking-wide text-sm mb-3">
              AI-Curated
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-4">
              Daily AI-curated news on public lake access rights, federal waterway legislation,
              Corps of Engineers policy changes, and watersports regulation debates across the US.
            </p>
            {lastUpdated && (
              <p className="text-sm text-gray-400">
                Last updated: {lastUpdated}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-sky-blue bg-opacity-5 border-b border-sky-blue border-opacity-10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-sky-blue rounded-full flex-shrink-0" />
            This feed is automatically updated daily by an AI agent using{' '}
            <strong className="text-navy">claude-sonnet-4-6</strong> with web search — curating the
            most relevant lake access news from across the country.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title mb-0">
              {articles.length} Recent Stories
            </h2>
          </div>

          {articles.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg font-medium mb-2">No news articles yet</p>
              <p className="text-sm">The AI news agent will populate this feed on its next daily run.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Coverage Topics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">What We Cover</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[
              { icon: '⚖️', title: 'Federal Waterway Legislation', desc: 'Congressional bills affecting navigable waterways and public lake access rights nationwide.' },
              { icon: '🏛️', title: 'Corps of Engineers Policies', desc: 'Policy changes at the US Army Corps of Engineers\' 400+ managed lakes and reservoirs.' },
              { icon: '🏄', title: 'Watersports Regulation Debates', desc: 'State-by-state debates over wake surfing, personal watercraft, and motorized recreation restrictions.' },
              { icon: '💰', title: 'Economic Impact Studies', desc: 'Research on the economic value of lake recreation and the cost of access restrictions to local communities.' },
              { icon: '📢', title: 'Advocacy & Legal Actions', desc: 'Lawsuits, public comment campaigns, and advocacy efforts protecting lake access rights.' },
              { icon: '🗺️', title: 'State Regulatory Updates', desc: 'New rules, proposed regulations, and legislative changes affecting lake access state by state.' },
            ].map((topic) => (
              <div key={topic.title} className="card p-5">
                <div className="text-2xl mb-3">{topic.icon}</div>
                <h3 className="font-bold text-navy mb-2">{topic.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

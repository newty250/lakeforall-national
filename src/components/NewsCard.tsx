import type { NewsArticle } from '@/types';

const CATEGORY_LABELS: Record<NewsArticle['category'], { label: string; color: string }> = {
  legislation: { label: 'Legislation', color: 'bg-blue-100 text-blue-800' },
  policy: { label: 'Policy', color: 'bg-purple-100 text-purple-800' },
  advocacy: { label: 'Advocacy', color: 'bg-green-100 text-green-800' },
  economic: { label: 'Economic Impact', color: 'bg-amber-100 text-amber-800' },
  regulation: { label: 'Regulation', color: 'bg-red-100 text-red-800' },
};

interface NewsCardProps {
  article: NewsArticle;
  compact?: boolean;
}

export default function NewsCard({ article, compact = false }: NewsCardProps) {
  const cat = CATEGORY_LABELS[article.category];
  const dateFormatted = new Date(article.date + 'T12:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="card flex flex-col h-full">
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${cat.color}`}>
            {cat.label}
          </span>
          <time dateTime={article.date} className="text-xs text-gray-400">
            {dateFormatted}
          </time>
        </div>

        <h3 className={`font-bold text-navy leading-snug mb-3 ${compact ? 'text-base' : 'text-lg'}`}>
          {article.url && article.url !== '#' ? (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-blue transition-colors"
            >
              {article.title}
            </a>
          ) : (
            article.title
          )}
        </h3>

        {!compact && (
          <p className="text-gray-600 text-sm leading-relaxed flex-1">{article.summary}</p>
        )}

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-400 font-medium">{article.source}</span>
          {article.url && article.url !== '#' && (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-sky-blue font-semibold hover:underline flex items-center gap-1"
            >
              Read more
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

import Link from 'next/link';
import type { Chapter } from '@/types';

interface ChapterCardProps {
  chapter: Chapter;
}

export default function ChapterCard({ chapter }: ChapterCardProps) {
  return (
    <div className="card p-6 flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-bold text-navy text-lg">{chapter.name}</h3>
          <p className="text-sm text-gray-500 mt-0.5">
            {chapter.lake} · {chapter.location}, {chapter.state}
          </p>
        </div>
        <span className="bg-sky-blue bg-opacity-10 text-sky-blue text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ml-2">
          Active
        </span>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed flex-1">{chapter.description}</p>

      {chapter.memberCount && (
        <p className="mt-3 text-xs text-gray-400">
          <span className="font-semibold text-navy">{chapter.memberCount.toLocaleString()}</span>{' '}
          members
        </p>
      )}

      {chapter.founded && (
        <p className="mt-1 text-xs text-gray-400">
          Founded <span className="font-semibold">{chapter.founded}</span>
        </p>
      )}

      <div className="mt-4 pt-4 border-t border-gray-100">
        <a
          href={chapter.url}
          target={chapter.url.startsWith('http') ? '_blank' : undefined}
          rel={chapter.url.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="btn-outline text-sm w-full text-center"
        >
          Visit Chapter Site →
        </a>
      </div>
    </div>
  );
}

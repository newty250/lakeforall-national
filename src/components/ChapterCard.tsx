import Link from 'next/link';
import type { Chapter } from '@/types';

interface ChapterCardProps {
  chapter: Chapter;
}

export default function ChapterCard({ chapter }: ChapterCardProps) {
  if (chapter.founding) {
    return (
      <div className="rounded-2xl overflow-hidden border-2 border-amber-400 shadow-lg bg-white flex flex-col">
        {/* Founding header bar */}
        <div className="bg-amber-400 px-6 py-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-amber-900 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-amber-900 font-black uppercase tracking-widest text-xs">Founding Chapter</span>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-bold text-navy text-lg">{chapter.name}</h3>
              <p className="text-sm text-gray-500 mt-0.5">
                {chapter.lake} · {chapter.location}, {chapter.state}
              </p>
            </div>
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ml-2">
              Active
            </span>
          </div>

          {chapter.foundingNote && (
            <p className="text-amber-800 text-sm leading-relaxed bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-3 italic">
              {chapter.foundingNote}
            </p>
          )}

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

          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2">
            <a
              href={chapter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm w-full text-center"
            >
              Visit Chapter Site →
            </a>
            {chapter.shopUrl && (
              <a
                href={chapter.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm w-full text-center"
              >
                Shop Lake Anna →
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

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

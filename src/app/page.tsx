import type { Metadata } from 'next';
import Link from 'next/link';
import NewsCard from '@/components/NewsCard';
import ChapterCard from '@/components/ChapterCard';
import WaveIcon from '@/components/WaveIcon';
import { MOCK_NEWS } from '@/lib/news';
import { CHAPTERS } from '@/lib/chapters';

export const metadata: Metadata = {
  title: 'Lake For All — Every Lake. Every American. Public Waters Stay Public.',
};

const STATS = [
  { value: '370M+', label: 'Recreational lake visits annually', source: 'US Army Corps of Engineers' },
  { value: '$700B+', label: 'Annual economic impact of lake recreation', source: 'Outdoor Recreation Roundtable' },
  { value: '1M+', label: 'Jobs supported by lake recreation', source: 'Bureau of Labor Statistics' },
  { value: '50,000+', label: 'Public lakes and reservoirs in the US', source: 'US Geological Survey' },
];

const WAVE_STEPS = [
  {
    letter: 'W',
    title: 'Waterway Access',
    description: 'Defend every American\'s right to access public lakes and waterways free from unnecessary restrictions.',
  },
  {
    letter: 'A',
    title: 'Advocacy',
    description: 'Fight for science-based, fair regulations at the federal, state, and local level.',
  },
  {
    letter: 'V',
    title: 'Voices',
    description: 'Amplify the voices of lake communities, businesses, and recreation families across the nation.',
  },
  {
    letter: 'E',
    title: 'Education',
    description: 'Inform the public and policymakers with data on the economic and social value of lake recreation.',
  },
];

export default function HomePage() {
  const previewNews = MOCK_NEWS.slice(0, 3);
  const previewChapters = CHAPTERS.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden wave-bg text-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <WaveIcon size={36} className="text-sky-blue" />
              <span className="text-sky-blue font-semibold text-lg tracking-wide uppercase">
                National Movement
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Every Lake.
              <br />
              <span className="text-sky-blue">Every American.</span>
              <br />
              Public Waters Stay Public.
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl">
              Lake For All is a national movement protecting public water access for all Americans
              — from wake surfers and water skiers to fishermen, swimmers, kayakers, and families
              just floating on a summer afternoon. Public lakes belong to everyone. We&apos;re
              fighting to keep them that way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/chapters" className="btn-secondary text-center text-lg px-8 py-4">
                Join the Movement
              </Link>
              <Link href="/donate" className="btn-primary text-center text-lg px-8 py-4">
                Donate Now
              </Link>
            </div>
          </div>
        </div>
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full">
            <path
              d="M0,30 C360,60 720,0 1080,30 C1260,45 1350,15 1440,30 L1440,60 L0,60 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">America Runs on Lakes</h2>
            <p className="section-subtitle mx-auto">
              Public lake access isn&apos;t just recreation — it&apos;s an economic lifeline for
              millions of Americans and communities across the country.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="bg-navy rounded-2xl p-6 text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-sky-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-200 leading-snug mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400">{stat.source}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/why-lakes-matter" className="btn-outline">
              See the Full Economic Case →
            </Link>
          </div>
        </div>
      </section>

      {/* WAVE Program */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-blue bg-opacity-10 text-sky-blue font-semibold px-4 py-2 rounded-full text-sm mb-4">
                <WaveIcon size={18} />
                Our Program
              </div>
              <h2 className="section-title">The WAVE Program</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                WAVE is Lake For All&apos;s national action framework — a four-pillar approach to
                protecting lake access for every American, at every public lake, across every state.
              </p>
              <Link href="/about" className="btn-outline">
                Learn About Our Mission →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {WAVE_STEPS.map((step) => (
                <div key={step.letter} className="card p-5">
                  <div className="w-10 h-10 bg-navy text-sky-blue rounded-xl flex items-center justify-center font-extrabold text-xl mb-3">
                    {step.letter}
                  </div>
                  <h3 className="font-bold text-navy mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-snug">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="section-title mb-1">Latest National News</h2>
              <p className="text-gray-500">AI-curated updates on lake access across the US</p>
            </div>
            <Link href="/news" className="btn-outline hidden sm:inline-block">
              All News →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {previewNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link href="/news" className="btn-outline">
              All News →
            </Link>
          </div>
        </div>
      </section>

      {/* Chapters Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="section-title mb-1">Our Chapters</h2>
              <p className="text-gray-500">Local advocates defending lake access nationwide</p>
            </div>
            <Link href="/chapters" className="btn-outline hidden sm:inline-block">
              All Chapters →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {previewChapters.map((chapter) => (
              <ChapterCard key={chapter.id} chapter={chapter} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/chapters#start" className="btn-primary">
              Start a Chapter at Your Lake →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="wave-bg py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <WaveIcon size={48} className="text-sky-blue mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Fight for Your Lake?
          </h2>
          <p className="text-xl text-gray-200 mb-10">
            Join the movement today. Find your local chapter, start a new one, or support our
            national advocacy work with a donation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chapters" className="btn-secondary text-center text-lg px-8 py-4">
              Join the Movement
            </Link>
            <Link href="/donate" className="btn-primary text-center text-lg px-8 py-4">
              Donate Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

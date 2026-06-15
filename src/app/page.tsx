import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import NewsCard from '@/components/NewsCard';
import ChapterCard from '@/components/ChapterCard';
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


export default function HomePage() {
  const previewNews = MOCK_NEWS.slice(0, 3);
  const previewChapters = CHAPTERS.slice(0, 3);
  const hasHeroVideo = fs.existsSync(path.join(process.cwd(), 'public', 'videos', 'hero.mp4'));
  const hasHeroImage = fs.existsSync(path.join(process.cwd(), 'public', 'images', 'hero.jpg'));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden wave-bg text-white">
        {/* Image background: all devices when no video; mobile-only when video exists */}
        {hasHeroImage && (
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat z-0${hasHeroVideo ? ' md:hidden' : ''}`}
            style={{ backgroundImage: "url('/images/hero.jpg')" }}
          />
        )}

        {/* Video background: desktop only (mobile uses image or gradient for performance) */}
        {hasHeroVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        )}

        {/* Dark overlay over whichever media is visible */}
        {(hasHeroVideo || hasHeroImage) && (
          <div
            className={`absolute inset-0 z-[1]${hasHeroVideo && !hasHeroImage ? ' hidden md:block' : ''}`}
            style={{ background: 'rgba(0,20,50,0.6)' }}
          />
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Preserving Access to
              <br />
              <span className="text-sky-blue">Every Public Lake. Every Water Activity.</span>
              <br />
              <span className="text-white text-6xl md:text-8xl">For All.</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl">
              Lake For All is a national movement protecting public water access for all Americans
              — from wake surfers and water skiers to fishermen, swimmers, kayakers, and families
              just floating on a summer afternoon. Public lakes belong to everyone. We&apos;re
              fighting to keep them that way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/chapters#join" className="btn-secondary text-center text-lg px-8 py-4">
                Join the Movement
              </Link>
              <Link href="/donate" className="btn-primary text-center text-lg px-8 py-4">
                Donate Now
              </Link>
            </div>
          </div>
        </div>
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '88px' }}>
          <svg viewBox="0 0 1440 88" preserveAspectRatio="none" className="w-full h-full">
            <path
              d="M0,44 C240,88 480,0 720,44 C960,88 1200,0 1440,44 L1440,88 L0,88 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* National Movement Stats Bar */}
      <div className="bg-sky-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold">1</span>
              <span className="text-sm font-medium text-white text-opacity-90">Founding Chapter</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white" style={{ opacity: 0.3 }} />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold">0</span>
              <span className="text-sm font-medium text-white text-opacity-90">Active Campaigns</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white" style={{ opacity: 0.3 }} />
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold">Growing</span>
              <span className="text-sm font-medium text-white text-opacity-90">Nationwide</span>
            </div>
          </div>
        </div>
      </div>

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

      {/* Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Approach: Education Over Restriction</h2>
            <p className="section-subtitle mx-auto">
              Lake For All believes that education — not bans — is the path to safe, enjoyable
              public lakes for everyone. We&apos;ve developed programs proven effective at Lake Anna
              that are now available to chapters nationwide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* WAVE Program Card */}
            <div className="bg-navy rounded-2xl p-8 text-white flex flex-col">
              <div className="w-12 h-12 bg-sky-blue bg-opacity-20 rounded-xl flex items-center justify-center mb-5">
                <img src="/images/logo.png" alt="" style={{ height: '28px', width: 'auto' }} />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3">The WAVE Program</h3>
              <p className="text-gray-300 leading-relaxed mb-5">
                WAVE — Watercraft, Appreciate, Value, Enjoy — is a four-principle guide for sharing
                public lakes safely and respectfully. Lake For All volunteers approach boaters on
                the water with WAVE cards, meeting people where they are before problems start.
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                {[
                  { letter: 'W', principle: 'Watercraft', rule: 'Maintain 200 feet of separation from shorelines, docks, and other vessels' },
                  { letter: 'A', principle: 'Appreciate', rule: 'Play music at reasonable levels and avoid content that may offend others' },
                  { letter: 'V', principle: 'Value', rule: 'Minimize repetitive passes along residential shorelines and community docks' },
                  { letter: 'E', principle: 'Enjoy', rule: 'Lake Anna safely and responsibly by avoiding congested areas' },
                ].map((item) => (
                  <li key={item.letter} className="flex gap-3 text-sm">
                    <span className="w-6 h-6 bg-sky-blue text-navy rounded-md flex items-center justify-center font-extrabold text-xs flex-shrink-0 mt-0.5">
                      {item.letter}
                    </span>
                    <span className="text-gray-300">
                      <strong className="text-white">{item.principle}:</strong> {item.rule}
                    </span>
                  </li>
                ))}
              </ul>
              <Link href="/education" className="btn-secondary text-center text-sm">
                Get WAVE Materials for Your Chapter →
              </Link>
            </div>

            {/* Lake Responsibly Card */}
            <div className="bg-navy rounded-2xl p-8 text-white flex flex-col">
              <div className="w-12 h-12 bg-sky-blue bg-opacity-20 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-sky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3">Lake Responsibly</h3>
              <p className="text-gray-300 leading-relaxed mb-5">
                Lake For All designs and installs educational signage at public marinas — informing
                boaters about safety guidelines before they enter the water, not after. Lake
                Responsibly signs are installed at multiple Lake Anna marinas and are available as a
                template for all chapters.
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                {[
                  '200+ feet of separation from shorelines and docks',
                  'Avoid repetitive passes along residential areas',
                  'Respect personal property',
                  'Under 13 require a life vest',
                  'Music at reasonable volumes',
                  'Discharge ballast when not in use',
                  'Boat operators must complete a DWR approved boater safety course',
                ].map((rule) => (
                  <li key={rule} className="flex gap-2 text-sm text-gray-300">
                    <span className="text-sky-blue font-bold flex-shrink-0">✓</span>
                    {rule}
                  </li>
                ))}
              </ul>
              <Link href="/education" className="btn-secondary text-center text-sm">
                Get Lake Responsibly Signs for Your Marina →
              </Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/education" className="btn-outline">
              Learn More About Our Education Programs →
            </Link>
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/images/logo.png" alt="Lake For All" style={{ height: '50px', width: 'auto' }} />
            <span className="text-white font-bold text-xl">Lake For All</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Fight for Your Lake?
          </h2>
          <p className="text-xl text-gray-200 mb-10">
            Join the movement today. Find your local chapter, start a new one, or support our
            national advocacy work with a donation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chapters#join" className="btn-secondary text-center text-lg px-8 py-4">
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

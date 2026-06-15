import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import ChapterCard from '@/components/ChapterCard';
import StartChapterForm from '@/components/StartChapterForm';
import { CHAPTERS } from '@/lib/chapters';

export const metadata: Metadata = {
  title: 'Chapters',
  description: 'Find a Lake For All chapter near you or start one at your lake.',
};

const USMap = dynamic(() => import('@/components/USMap'), {
  ssr: false,
  loading: () => (
    <div className="bg-blue-50 rounded-2xl h-80 flex items-center justify-center border border-blue-100">
      <p className="text-gray-400 text-sm">Loading map...</p>
    </div>
  ),
});

export default function ChaptersPage() {
  return (
    <>
      {/* Hero */}
      <section className="wave-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sky-blue font-semibold uppercase tracking-wide text-sm mb-3">
              The Network
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Chapters
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Lake For All chapters are the grassroots backbone of the movement — local advocates
              who know their lake, their community, and the stakes. Chapters fight for every lake
              user: anglers, swimmers, boaters, paddlers, and families. Find a chapter near you or
              start one at your lake.
            </p>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section id="join" className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="section-title">How to Join Lake For All</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lake For All is a chapter-based movement. Membership and local advocacy happen at the
              chapter level — where the real work gets done.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Find your lake below and connect with your local chapter. If your lake doesn&apos;t
              have a chapter yet, we&apos;d love your help starting one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#find" className="btn-primary text-center">
                Find My Chapter →
              </a>
              <a href="#start" className="btn-outline text-center">
                Start a Chapter →
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Not sure where to start?{' '}
              <a
                href="mailto:contact@lakeforall.org"
                className="text-sky-blue hover:underline font-medium"
              >
                Reach out to us at contact@lakeforall.org
              </a>{' '}
              and we&apos;ll help you find your people.
            </p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Chapters Across America</h2>
          <p className="section-subtitle text-center mx-auto">
            Our movement is growing. Each pin represents a community of lake advocates. Hover to
            learn more. Click to visit the chapter.
          </p>
          <div className="mt-8">
            <USMap chapters={CHAPTERS} />
          </div>
        </div>
      </section>

      {/* Chapter Directory */}
      <section id="find" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Chapter Directory</h2>
          <p className="text-gray-500 mb-8">
            {CHAPTERS.length} active chapter{CHAPTERS.length !== 1 ? 's' : ''} nationwide
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHAPTERS.map((chapter) => (
              <ChapterCard key={chapter.id} chapter={chapter} />
            ))}
          </div>

          {CHAPTERS.length === 1 && (
            <div className="mt-10 bg-sky-blue bg-opacity-5 border border-sky-blue border-opacity-20 rounded-xl p-8 text-center">
              <p className="text-navy font-semibold text-lg mb-2">
                Is public access at your lake under threat?
              </p>
              <p className="text-gray-600 mb-6">
                Any lake where lakefront property owners, homeowner associations, or local advisory
                councils are pushing to restrict public water access — through buoys, no-wake zones,
                permit requirements, or activity bans — is a candidate for a Lake For All chapter.
                Lake Anna is just the beginning.
              </p>
              <a href="#start" className="btn-primary">
                Start a Chapter
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Chapter Model */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title">How Chapters Work</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Each Lake For All chapter is an independent local organization advocating for full
                public access to their lake — for all users and all activities. Chapters fight for
                anglers, swimmers, wake surfers, kayakers, paddleboarders, and every American whose
                enjoyment of public water is threatened by arbitrary restrictions or the
                privatization of access.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Chapters operate autonomously but benefit from the national movement&apos;s
                resources, legal support network, and visibility.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Chapters organize local members, monitor legislation and regulatory proceedings,
                coordinate public comments, engage with local media, and connect lake users with the
                national advocacy community.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Apply', desc: 'Submit your chapter application below. Tell us about your lake and the access issues you\'re facing.' },
                { step: '2', title: 'Connect', desc: 'Our national team will reach out to discuss resources, legal support, and how to structure your chapter.' },
                { step: '3', title: 'Launch', desc: 'Build your local membership, create your chapter website, and begin advocacy at your lake.' },
                { step: '4', title: 'Grow', desc: 'Connect with other chapters nationally, amplify your message, and make your lake\'s voice heard.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-9 h-9 bg-navy text-sky-blue rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-bold text-navy">{item.title}</div>
                    <div className="text-sm text-gray-600 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Start a Chapter Form */}
      <section id="start" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Start a Chapter at Your Lake</h2>
            <p className="section-subtitle mx-auto">
              If public access to your lake is being restricted by private interests — through
              buoys, no-wake zones, activity bans, or regulatory processes driven by lakefront
              homeowners — Lake For All can help. Fill out this application and our national team
              will be in touch within 3–5 business days.
            </p>
          </div>
          <div className="card p-8">
            <StartChapterForm />
          </div>
        </div>
      </section>
    </>
  );
}

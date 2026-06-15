import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'The origin story of Lake For All — from a grassroots fight at Lake Anna, Virginia to a national movement for public lake access.',
};

const VALUES = [
  {
    title: 'Access for All Users',
    desc: 'Every American has the right to access public lakes — regardless of income, location, what they\'re doing on the water, or whether they own shoreline property. Anglers, swimmers, boaters, kayakers, and families floating on a Tuesday afternoon all have equal claim to public water.',
  },
  {
    title: 'Public Waters Are Public',
    desc: 'We oppose the privatization of public waters. Lakefront property ownership does not confer ownership of the water in front of it. We advocate for the removal of all buoys and restrictions not placed for genuine safety purposes — public lakes belong to all Americans.',
  },
  {
    title: 'Science-Based Policy',
    desc: 'We support evidence-based regulations that address genuine environmental concerns without using conservation as a pretext for recreational exclusion or private convenience.',
  },
  {
    title: 'Economic Justice',
    desc: 'Restrictions on lake access hurt working-class families and small businesses most — from bait shops to marinas to lakeside restaurants. We center the economic impact on communities in our advocacy.',
  },
];

const TIMELINE = [
  {
    year: '2024',
    title: 'The Fight Begins at Lake Anna',
    desc: 'Facing proposed restrictions on wake surfing at Lake Anna, Virginia, a group of local lake users forms Lake Anna 4 All — fighting back against blanket bans with data, community organizing, and legal advocacy.',
  },
  {
    year: '2024',
    title: 'Lake Anna 4 All Wins Its First Campaign',
    desc: 'Through public comment campaigns, economic data, and grassroots organizing, the Lake Anna chapter successfully challenges the proposed restrictions and preserves full lake access.',
  },
  {
    year: '2025',
    title: 'Lake For All Goes National',
    desc: 'Recognizing that the Lake Anna fight was just one front in a national battle for public lake access, the founders launch Lake For All as a national movement to connect and support local lake advocacy chapters across the US.',
  },
  {
    year: '2025',
    title: 'WAVE Program Launches',
    desc: 'The national movement introduces the WAVE framework — Waterway Access, Advocacy, Voices, Education — as a structured approach to protecting lake access at every level of government.',
  },
  {
    year: 'Future',
    title: 'Chapters at Every Public Lake',
    desc: 'The vision: a Lake For All chapter at every public lake in America — a nationwide network of advocates ensuring that no lake loses its public access without a fight.',
  },
];

const HOW_TO_HELP = [
  { icon: '📋', title: 'Start a Chapter', desc: 'Bring Lake For All to your lake.', link: '/chapters#start', cta: 'Apply Now' },
  { icon: '💰', title: 'Donate', desc: 'Fund advocacy work at the national and chapter level.', link: '/donate', cta: 'Donate Now' },
  { icon: '🛍️', title: 'Shop', desc: 'Buy movement merchandise and wear the cause.', link: '/shop', cta: 'Shop Now' },
  { icon: '📣', title: 'Spread the Word', desc: 'Share Lake For All with anyone who loves their lake.', link: '/', cta: 'Share' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="wave-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sky-blue font-semibold uppercase tracking-wide text-sm mb-3">
              Our Story
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">About Lake For All</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              What started as a local fight to save wake surfing at a Virginia lake became the seed
              of a national movement. This is our story.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">It Started at Lake Anna</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="leading-relaxed mb-4">
              The fight at Lake Anna began not with confrontation, but with a slow and largely
              unopposed process. The Lake Anna Civic Association (LACA) began advocating for
              restrictions on wake surfing, and with little organized opposition, secured a
              recommendation from the Lake Anna Advisory Council (LAAC) — which reports to the
              Virginia Department of Wildlife Resources (DWR). &ldquo;No Wake Surf Zone&rdquo;
              buoys went up on Virginia&apos;s second-largest recreational lake.
            </p>

            {/* Buoy type explainer */}
            <div className="not-prose my-6 grid sm:grid-cols-2 gap-4">
              {[
                {
                  label: 'TYPE 1 — "No Wake Surf Zone" Buoys',
                  color: 'border-amber-400 bg-amber-50',
                  badge: 'bg-amber-400 text-amber-900',
                  badgeText: 'Not recognized by DWR',
                  desc: 'Authorized through LAAC recommendation after lobbying by LACA and lakefront homeowners. No formal basis in Virginia DWR regulation as an official designation — yet they have closed large sections of public water.',
                },
                {
                  label: 'TYPE 2 — "No Wake Zone" Buoys',
                  color: 'border-red-300 bg-red-50',
                  badge: 'bg-red-400 text-white',
                  badgeText: 'DWR-recognized but misused',
                  desc: 'Formally recognized by Virginia DWR, but increasingly requested not for genuine safety purposes as regulations require — rather, to keep boaters away from privately owned docks and shoreline.',
                },
              ].map((b) => (
                <div key={b.label} className={`rounded-xl border-2 p-4 ${b.color}`}>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded mb-2 inline-block ${b.badge}`}>
                    {b.badgeText}
                  </span>
                  <div className="font-bold text-navy text-sm mb-2">{b.label}</div>
                  <p className="text-xs text-gray-600 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

            <p className="leading-relaxed mb-4">
              The buoys created real problems on the water. Responsible boaters would slow down
              to read them, disrupting traffic patterns and creating unsafe situations on a busy
              lake. Wake surf boaters trying to comply were pushed out of traditionally safe areas
              and into increasingly crowded zones, raising the risk of accidents. Meanwhile, the
              very boaters who disregard rules and etiquette ignored the buoys entirely — meaning
              the restrictions punished responsible users while doing nothing to address the actual
              source of problems.
            </p>
            <p className="leading-relaxed mb-4">
              When lake users recognized what was happening,{' '}
              <strong>Lake Anna Lake For All</strong> was formed to ensure that going forward, all
              voices would be heard — not just those advocating for restrictions. The organization
              took a multi-pronged approach:
            </p>
            <ul className="space-y-3 mb-6 pl-0 list-none">
              {[
                {
                  title: 'The WAVE Program',
                  desc: 'Volunteers approached boaters on the water with cards containing respectful guidelines for sharing the lake safely — meeting people where they are, before problems start.',
                },
                {
                  title: 'Lake Responsibly Signs',
                  desc: 'Designed and erected signage at public marinas around the lake, informing boaters about safety guidelines before they enter the water — not after.',
                },
                {
                  title: 'Advocacy to the Lake Anna Advisory Council',
                  desc: 'Made the case that boater education is a more effective solution than activity bans, because responsible boaters follow rules while visitors who cause problems ignore posted buoys anyway.',
                },
                {
                  title: 'Economic Impact Analysis',
                  desc: 'Submitted data showing the cost of access restrictions on local marinas, businesses, and communities.',
                },
                {
                  title: 'Public Comment Campaigns',
                  desc: 'Organized community members to submit comments and showed up to every advisory meeting, ensuring the voices of lake users were heard alongside those pushing for restrictions.',
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="text-sky-blue font-bold mt-0.5 flex-shrink-0">→</span>
                  <span>
                    <strong className="text-navy">{item.title}:</strong>{' '}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed mb-4">
              The fight is ongoing. LACA continues to push for a full ban on wake surfing at Lake
              Anna — or to limit the activity to the most congested areas of the lake, which would
              make it effectively impossible to enjoy safely. Lake For All&apos;s most recent
              action is a formal request for the removal of specific No Wake Surf buoys that
              restrict activity in areas large enough and lightly trafficked enough to safely
              accommodate wake surfing. This is the first step toward restoring full access to
              Lake Anna for all watercraft and all users.
            </p>
            <p className="leading-relaxed mb-4">
              The core argument remains: banning activities doesn&apos;t stop bad actors — it
              punishes responsible users. Education, visibility, and equally applied guidelines
              for all watercraft is the solution.
            </p>
            <p className="leading-relaxed mb-6 font-semibold text-navy">
              We&apos;re just getting started. The fight continues.
            </p>
            <p className="leading-relaxed mb-4">
              What began as a fight to protect wake surfing at Lake Anna became something much
              larger. As Lake Anna Lake For All organized, they realized the pattern extended
              beyond one activity and one lake. Lakefront property owners across America were
              using regulatory processes, homeowner associations, and local advisory councils to
              place buoys, establish no-wake zones, and restrict access to public waters — not
              for safety, but for privacy and property value. Public lakes were being slowly
              privatized, one buoy at a time.
            </p>
            <p className="leading-relaxed mb-4">
              The movement that started to protect wake surfers became a movement to protect
              every American&apos;s right to public water — fishermen, swimmers, kayakers,
              paddleboarders, families on inner tubes, and yes, wake surfers too. The threat of
              privatization of public waters affects every lake user, not just those on wake
              boats. Public lakes don&apos;t belong to the people who live next to them. They
              belong to everyone.
            </p>
            <p className="leading-relaxed font-semibold text-navy text-xl">
              Lake For All was born at Lake Anna. But the same battle is playing out at lakes
              across America — the same pressure tactics, the same threat to public access, the
              same isolation of local communities fighting alone. They needed a national movement.
              Now there is one.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Our Journey</h2>
          <div className="mt-10 relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-sky-blue bg-opacity-30" />
            <div className="space-y-8">
              {TIMELINE.map((event, i) => (
                <div key={i} className="relative pl-16">
                  <div
                    className={`absolute left-0 top-1 w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold ${
                      event.year === 'Future'
                        ? 'bg-gray-200 text-gray-500 border-2 border-dashed border-gray-300'
                        : 'bg-navy text-sky-blue'
                    }`}
                  >
                    {event.year === 'Future' ? '→' : event.year.slice(2)}
                  </div>
                  <div className="card p-5">
                    <div className="text-xs font-semibold text-sky-blue uppercase tracking-wide mb-1">
                      {event.year}
                    </div>
                    <h3 className="font-bold text-navy mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/images/logo.png" alt="Lake For All" style={{ height: '50px', width: 'auto' }} />
            <span className="text-navy font-bold text-xl">Lake For All</span>
          </div>
          <h2 className="section-title">The Vision</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            A Lake For All chapter at every public lake in America — a nationwide network of
            engaged, informed advocates ensuring that no lake loses its public access without a
            community standing up to defend it.
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            The chapter model is simple: local people who know their lake, their community, and
            the stakes are always the best advocates. The national movement provides resources,
            legal support, media amplification, and connections to the broader lake advocacy
            network. Together, we protect lake access for everyone.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">What We Stand For</h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
            {VALUES.map((v) => (
              <div key={v.title} className="card p-6">
                <h3 className="font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Leadership</h2>
          <p className="text-gray-500 mb-10">
            Lake For All is led by lake users, for lake users.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { role: 'National Director', placeholder: true },
              { role: 'Legal Counsel', placeholder: true },
              { role: 'Chapter Relations', placeholder: true },
            ].map((person) => (
              <div key={person.role} className="card p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <div className="font-bold text-navy text-sm">Position Open</div>
                <div className="text-sky-blue text-xs mt-1">{person.role}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-8">
            Interested in leading the movement?{' '}
            <a href="mailto:contact@lakeforall.org" className="text-sky-blue hover:underline">
              Get in touch.
            </a>
          </p>
        </div>
      </section>

      {/* How to Help */}
      <section className="wave-bg py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-10">How to Get Involved</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_TO_HELP.map((item) => (
              <div key={item.title} className="bg-white bg-opacity-10 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{item.desc}</p>
                <Link
                  href={item.link}
                  className="bg-sky-blue text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-sky-blue-dark transition-colors inline-block"
                >
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

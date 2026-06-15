import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Lakes Matter',
  description:
    'Data-driven case for protecting public lake access: economic impact, jobs, and what happens when access is restricted.',
};

const KEY_STATS = [
  { value: '370M+', label: 'Recreational visits to public lakes and reservoirs annually', source: 'US Army Corps of Engineers' },
  { value: '$700B+', label: 'Annual economic output from all lake recreation', source: 'Outdoor Recreation Roundtable' },
  { value: '54M+', label: 'Americans who fish on public lakes and waterways each year', source: 'US Fish & Wildlife Service' },
  { value: '1M+', label: 'US jobs directly supported by lake recreation', source: 'Bureau of Labor Statistics' },
  { value: '26M+', label: 'Americans who kayak, canoe, or paddleboard each year', source: 'Outdoor Industry Association' },
  { value: '$125B+', label: 'Annual state and local tax revenue from outdoor recreation', source: 'Outdoor Recreation Economy Report' },
  { value: '50,000+', label: 'Public lakes and reservoirs across the US', source: 'US Geological Survey' },
  { value: '40%', label: 'Of American adults visit a lake at least once per year', source: 'US Fish & Wildlife Service' },
  { value: '2.1%', label: 'Of US GDP contributed by outdoor recreation — more than mining and agriculture combined', source: 'Bureau of Economic Analysis' },
];

const CASE_STUDIES = [
  {
    title: 'Lake Anna, Virginia',
    subtitle: 'Access Restrictions Threaten a Whole Lake Economy',
    body: 'When efforts to restrict wake surfing and place no-wake buoys at Lake Anna began in 2023–2024, economic analyses projected annual losses of $8–12 million in tourism revenue for Spotsylvania and Louisa counties. The threat extends to all lake users — marinas, bait shops, boat dealers, vacation rentals, and restaurants all depend on open access for anglers, swimmers, boaters, and families alike. Lake Anna 4 All organized opposition defending access for all.',
    outcome: 'Fight ongoing — Lake Anna 4 All advocating for all users',
    outcomePositive: true,
  },
  {
    title: 'Lake Tahoe, California/Nevada',
    subtitle: 'Motorized Craft Restrictions Reshape Recreation',
    body: 'Staged restrictions on motorized watercraft at Lake Tahoe over the past decade — while aimed at protecting water clarity — have had measurable economic effects on Tahoe-area marinas and boat rental businesses. Some operators report 20–35% revenue declines in restricted zones, forcing consolidation and job losses in gateway communities.',
    outcome: 'Ongoing tension between conservation and recreation economics',
    outcomePositive: false,
  },
  {
    title: 'Mille Lacs Lake, Minnesota',
    subtitle: 'Fishing Restrictions Devastate Shoreline Businesses',
    body: 'When walleye fishing restrictions at Mille Lacs were dramatically tightened between 2013 and 2020, area resorts, bait shops, and guide services reported revenue drops of 30–60%. Several multi-generational family businesses closed permanently. The economic devastation prompted state legislators to re-examine the balance between conservation goals and community economic impact.',
    outcome: 'Long-term economic damage to rural communities',
    outcomePositive: false,
  },
];

const SOURCES = [
  { name: 'US Army Corps of Engineers', role: 'Manages 400+ lakes & reservoirs; publishes annual recreation statistics', url: 'https://www.usace.army.mil' },
  { name: 'US Fish & Wildlife Service', role: 'Tracks wildlife-associated recreation participation and economic impact', url: 'https://www.fws.gov' },
  { name: 'Outdoor Recreation Roundtable', role: 'Publishes comprehensive outdoor recreation economic reports', url: 'https://www.outdoorrecreationroundtable.org' },
  { name: 'Bureau of Economic Analysis', role: 'Measures outdoor recreation\'s contribution to US GDP', url: 'https://www.bea.gov' },
  { name: 'Bureau of Labor Statistics', role: 'Tracks employment in recreation and leisure industries', url: 'https://www.bls.gov' },
];

export default function WhyLakesMatterPage() {
  return (
    <>
      {/* Hero */}
      <section className="wave-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sky-blue font-semibold uppercase tracking-wide text-sm mb-3">
              The Data
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Why Lakes Matter
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Public lake access isn&apos;t just about recreation. It&apos;s a foundation of local
              economies, rural livelihoods, and the American outdoor tradition — backed by decades
              of data from federal agencies and independent researchers.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">The Numbers</h2>
          <p className="section-subtitle text-center mx-auto">
            Federal data paints a clear picture: lakes are critical infrastructure for recreation,
            commerce, and community wellbeing across the United States.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {KEY_STATS.map((stat) => (
              <div key={stat.value} className="card p-6 text-center">
                <div className="text-4xl font-extrabold text-sky-blue mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-navy leading-snug mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title">The Economic Stakes</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Lake recreation is a massive economic driver — not just for large resort communities,
                but for small rural towns where a single lake may be the primary economic engine.
                Marinas, bait shops, boat dealers, kayak and paddleboard rentals, campgrounds,
                restaurants, and lodging all depend on free and open lake access — for every kind
                of user.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The economic case spans all activities. Fishing alone generates over $50 billion
                annually and supports hundreds of thousands of rural jobs. Paddling and
                non-motorized recreation has grown into a multi-billion dollar industry. Swimming
                and family lake recreation drives tourism in communities across the country that
                have few other economic anchors.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When access is restricted — whether through blanket bans on certain watercraft,
                buoys that push users out of safe areas, or regulations that effectively close
                sections of public water — the economic damage flows to everyone: marina owners
                and bait shop operators, seasonal workers, and the rural communities that depend
                on lake tourism to survive.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Marina & Boat Services', value: '$180B+', desc: 'Annual economic output from the boating industry' },
                { title: 'Lake Tourism & Lodging', value: '$95B+', desc: 'Hotel, rental, and hospitality revenue tied to lake destinations' },
                { title: 'Fishing & Tackle', value: '$50B+', desc: 'Economic impact of recreational fishing, including guides, licenses, and equipment' },
                { title: 'Local Food & Beverage', value: '$60B+', desc: 'Restaurant and bar revenue in lake recreation communities' },
                { title: 'Paddling & Non-Motorized Recreation', value: '$20B+', desc: 'Kayak, canoe, paddleboard rentals, outfitters, and guided experiences' },
              ].map((item) => (
                <div key={item.title} className="card p-5 flex gap-4 items-start">
                  <div className="text-2xl font-extrabold text-sky-blue whitespace-nowrap">{item.value}</div>
                  <div>
                    <div className="font-bold text-navy text-sm">{item.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Happens When Access Is Restricted */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">When Access Is Restricted</h2>
          <p className="section-subtitle text-center mx-auto">
            Real case studies from across the country show what happens to communities when lake
            access is curtailed — often with irreversible consequences.
          </p>
          <div className="grid lg:grid-cols-3 gap-8 mt-10">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.title} className="card p-6 flex flex-col">
                <h3 className="font-bold text-navy text-lg mb-1">{cs.title}</h3>
                <p className="text-sky-blue text-sm font-medium mb-4">{cs.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{cs.body}</p>
                <div
                  className={`mt-4 pt-4 border-t text-xs font-semibold flex items-center gap-2 ${
                    cs.outcomePositive
                      ? 'text-green-700 border-green-100'
                      : 'text-red-700 border-red-100'
                  }`}
                >
                  <span>{cs.outcomePositive ? '✓' : '⚠'}</span>
                  {cs.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Privatization Threat */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-10 text-sky-blue font-semibold px-4 py-2 rounded-full text-sm mb-6">
            Core Advocacy Principle
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Privatization Threat
          </h2>
          <p className="text-lg text-sky-blue font-medium mb-8">
            How Lakefront Property Owners Are Closing Public Waters — One Buoy at a Time
          </p>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="text-gray-200 leading-relaxed mb-4">
                Across America, lakefront property owners — organized through homeowners
                associations, civic groups, and local advisory councils — are using regulatory
                and quasi-regulatory processes to place buoys and restrictions on public water.
                The stated reason is usually safety or environmental protection. The actual
                effect is the same: sections of public water are closed to the public to serve
                private interests.
              </p>
              <p className="text-gray-200 leading-relaxed mb-4">
                The pattern is predictable. A lakefront homeowners group lobbies a local advisory
                council. The council makes a recommendation to a state agency. Buoys go in. Public
                access is reduced. The people who complained get quieter water in front of their
                docks. The people who lost access — anglers, swimmers, families, paddlers, boaters
                — have to adjust their routines, or stop coming entirely.
              </p>
              <p className="text-gray-200 leading-relaxed">
                This is happening at lakes across America. The tools vary by state — advisory
                councils, watershed authorities, county ordinances, HOA agreements with local
                governments — but the mechanism is the same: private interests using public
                regulatory processes to claim public water.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg mb-4">Two Types of Buoys Being Used</h3>

              <div className="bg-amber-900 bg-opacity-40 border border-amber-500 border-opacity-40 rounded-xl p-5">
                <div className="flex items-start gap-3 mb-3">
                  <span className="bg-amber-500 text-amber-900 text-xs font-bold px-2 py-0.5 rounded mt-0.5 whitespace-nowrap">TYPE 1</span>
                  <div className="font-bold text-white">&ldquo;No Wake Surf Zone&rdquo; Buoys</div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-2">
                  These buoys are <strong className="text-amber-400">not recognized by Virginia DWR regulation</strong> as
                  a standard category. They were authorized through a recommendation by the Lake Anna
                  Advisory Council (LAAC) after lobbying by lakefront homeowners and the Lake Anna
                  Civic Association — closing large sections of Lake Anna that can safely and legally
                  support wake surfing.
                </p>
                <p className="text-gray-400 text-xs">
                  Impact: Public access removed based on private property interests, not safety science.
                </p>
              </div>

              <div className="bg-red-900 bg-opacity-30 border border-red-400 border-opacity-30 rounded-xl p-5">
                <div className="flex items-start gap-3 mb-3">
                  <span className="bg-red-400 text-red-900 text-xs font-bold px-2 py-0.5 rounded mt-0.5 whitespace-nowrap">TYPE 2</span>
                  <div className="font-bold text-white">&ldquo;No Wake Zone&rdquo; Buoys</div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-2">
                  These buoys <strong className="text-red-400">are recognized by Virginia DWR</strong>. However, their
                  placement is increasingly requested not for genuine safety purposes as DWR
                  regulations require, but to keep boaters away from privately owned docks and
                  shoreline — legitimate legal tools being used for privatization purposes.
                </p>
                <p className="text-gray-400 text-xs">
                  Impact: A legitimate safety mechanism weaponized against public access.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 rounded-2xl p-6 mb-10 backdrop-blur-sm">
            <h3 className="font-bold text-white text-lg mb-3">Lake For All&apos;s Position</h3>
            <p className="text-gray-200 leading-relaxed mb-2">
              We support properly placed safety buoys that protect all lake users. We oppose any
              buoy placement — authorized or not — that serves private property interests rather
              than genuine public safety as defined by DWR regulation. Owning property along a
              shoreline does not confer ownership of the water in front of it.
            </p>
            <p className="text-sky-blue font-semibold">
              Public lakes belong to all Americans.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Anglers', icon: '🎣', desc: 'Lose productive fishing areas to no-wake zones placed for private convenience, not safety' },
              { label: 'Families & Swimmers', icon: '🏊', desc: 'Find traditional swimming coves and floating spots blocked or restricted by private buoys' },
              { label: 'Boaters & Paddlers', icon: '🚣', desc: 'Are pushed into crowded corridors as private buoys claim sections of public water' },
            ].map((u) => (
              <div key={u.label} className="bg-white bg-opacity-10 rounded-xl p-5 backdrop-blur-sm">
                <div className="text-2xl mb-2">{u.icon}</div>
                <div className="font-bold text-white mb-1">{u.label}</div>
                <div className="text-xs text-gray-300 leading-relaxed">{u.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-6">Cited Sources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOURCES.map((source) => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-4 hover:border-sky-blue border border-transparent transition-colors block"
              >
                <div className="font-bold text-navy text-sm">{source.name}</div>
                <div className="text-xs text-gray-500 mt-1">{source.role}</div>
                <div className="text-xs text-sky-blue mt-2 font-medium">Visit source →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wave-bg py-16 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Help Us Protect These Lakes</h2>
          <p className="text-gray-200 mb-8">
            The data is clear. Now we need your voice. Join the movement or support our advocacy work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chapters" className="btn-secondary text-center">
              Find Your Chapter
            </Link>
            <Link href="/donate" className="btn-primary text-center">
              Donate to Lake For All
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

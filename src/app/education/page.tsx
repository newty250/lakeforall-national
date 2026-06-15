import type { Metadata } from 'next';
import Link from 'next/link';
import WaveIcon from '@/components/WaveIcon';
import RequestMaterialsForm from '@/components/RequestMaterialsForm';

export const metadata: Metadata = {
  title: 'Education Programs',
  description:
    'Lake For All\'s education-first approach to lake safety and access. Learn about the WAVE Program and Lake Responsibly signage — proven programs for chapters nationwide.',
};

const WAVE_PRINCIPLES = [
  {
    letter: 'W',
    title: 'Watercraft',
    rule: 'Maintain 200 feet of separation from shorelines, docks, and other vessels',
    detail:
      'Adequate separation protects shoreline environments, reduces wake impact on docks and moored boats, and gives everyone — swimmers, kayakers, fishermen — the space they need to enjoy the lake safely.',
  },
  {
    letter: 'A',
    title: 'Appreciate',
    rule: 'Play music at reasonable levels and avoid content that may offend others',
    detail:
      'The lake is a shared public space. Volume and content awareness allows everyone — including families, children, and those seeking quiet recreation — to coexist comfortably on the water.',
  },
  {
    letter: 'V',
    title: 'Value',
    rule: 'Minimize repetitive passes along residential shorelines and community docks',
    detail:
      'Repeated wake impacts degrade shorelines, damage docks, and create cumulative noise impacts on neighborhoods. One or two passes is recreation; ten is a nuisance that invites the very bans we oppose.',
  },
  {
    letter: 'E',
    title: 'Enjoy',
    rule: 'Lake Anna safely and responsibly by avoiding congested areas',
    detail:
      'Congested coves and narrow channels are not the place for high-speed activity. Choosing open water to enjoy wake sports keeps everyone safer and defuses conflict before it starts.',
  },
];

const MARINA_RULES = [
  { icon: '📏', rule: '200+ feet of separation from shorelines and docks' },
  { icon: '🔄', rule: 'Avoid repetitive passes along residential areas' },
  { icon: '🏠', rule: 'Respect personal property' },
  { icon: '🦺', rule: 'Under 13 require a life vest at all times' },
  { icon: '🔊', rule: 'Music at reasonable volumes' },
  { icon: '💧', rule: 'Discharge ballast when not in use' },
  { icon: '📚', rule: 'Boat operators must complete a DWR approved boater safety course' },
];

export default function EducationPage() {
  return (
    <>
      {/* Hero */}
      <section className="wave-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sky-blue font-semibold uppercase tracking-wide text-sm mb-3">
              Our Approach
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Education Over Restriction
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Lake For All doesn&apos;t just oppose bad regulations — we build alternatives. Our
              education programs address real safety concerns through outreach and signage, proving
              that informed lake users are safer lake users. Every lake is different. Every
              community is different. But the principle is the same: meet people where they are
              before problems start.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Why Education First?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most lake conflicts don&apos;t start with bad intentions — they start with a gap in
                awareness. A boater who doesn&apos;t know their wake is hitting a dock fifteen times
                an afternoon. A wake surfer who doesn&apos;t realize how close 50 feet actually is
                to a swimmer. A family playing music that&apos;s louder than they realize on the
                open water.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Blanket bans don&apos;t solve the awareness gap — they eliminate public access to
                close it. Lake For All takes a different path: put the information directly in front
                of lake users, in the right place at the right time, in plain language.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                This approach also changes the political dynamic. When a lake community can point
                to tangible education efforts — signage at every marina, volunteer outreach on the
                water — it reframes the debate. Restrictions become the last resort rather than the
                first response.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5">
              {[
                {
                  title: 'Proven at Lake Anna',
                  desc: 'Both programs originated at Lake Anna and have been running since 2024. Real implementation, real results, available to your chapter.',
                },
                {
                  title: 'Positions chapters as responsible advocates',
                  desc: 'Education programs show regulators and legislators that lake users take safety seriously — without surrendering access.',
                },
                {
                  title: 'Scalable to any lake',
                  desc: 'The WAVE card and Lake Responsibly sign templates are adaptable. Change the lake name, add local rules, and deploy them at your marina.',
                },
                {
                  title: 'Addresses the real complaint',
                  desc: 'Most restriction campaigns are triggered by specific behavior — excessive wakes, loud music, reckless driving. Education targets the behavior, not the activity.',
                },
              ].map((item) => (
                <div key={item.title} className="card p-5 border-l-4 border-sky-blue">
                  <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WAVE Program */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-sky-blue bg-opacity-20 rounded-xl flex items-center justify-center">
              <WaveIcon size={28} className="text-sky-blue" />
            </div>
            <span className="text-sky-blue font-semibold uppercase tracking-wide text-sm">
              Program 1
            </span>
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4">The WAVE Program</h2>
          <p className="text-gray-300 leading-relaxed max-w-2xl mb-12">
            WAVE stands for Watercraft, Appreciate, Value, Enjoy — four behavioral principles for
            sharing public lakes safely and respectfully. Lake For All volunteers approach boaters
            on the water with WAVE cards, delivering the message person-to-person before a conflict
            has a chance to escalate into a regulatory petition.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {WAVE_PRINCIPLES.map((item) => (
              <div key={item.letter} className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10">
                <div className="w-12 h-12 bg-sky-blue text-navy rounded-xl flex items-center justify-center font-extrabold text-2xl mb-4">
                  {item.letter}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sky-blue text-sm font-medium mb-3 leading-snug">{item.rule}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">How the WAVE Program Works</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: '1',
                  title: 'Chapter trains volunteers',
                  desc: 'Lake For All provides WAVE card print templates and talking points. Chapter coordinators brief volunteers on respectful, non-confrontational outreach.',
                },
                {
                  step: '2',
                  title: 'Volunteers go on the water',
                  desc: 'Trained volunteers in recognizable Lake For All gear approach boaters at launches and on the water to distribute WAVE cards and have friendly conversations.',
                },
                {
                  step: '3',
                  title: 'Document and report',
                  desc: 'Chapters log outreach activity — contacts made, cards distributed, issues observed. This documentation supports future advocacy before regulatory bodies.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-9 h-9 bg-sky-blue text-navy rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1">{item.title}</div>
                    <div className="text-sm text-gray-400 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white border-opacity-10">
              <Link href="/chapters#start" className="btn-secondary inline-block">
                Request WAVE Materials for Your Chapter →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lake Responsibly */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-sky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-sky-blue font-semibold uppercase tracking-wide text-sm">
              Program 2
            </span>
          </div>
          <h2 className="section-title">Lake Responsibly Signage</h2>
          <p className="section-subtitle max-w-2xl mb-12">
            Lake For All designs and installs educational signage at public marinas — informing
            boaters about safety guidelines before they enter the water, not after. Our Lake
            Responsibly signs have been installed at multiple Lake Anna marinas and are available as
            a print-ready template for all chapters.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-xl font-bold text-navy mb-6">Rules Featured on Signs</h3>
              <div className="space-y-3">
                {MARINA_RULES.map((item) => (
                  <div key={item.rule} className="flex gap-4 items-start bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <span className="text-gray-700 leading-snug">{item.rule}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="card p-7">
                <h3 className="text-xl font-bold text-navy mb-4">Why Marina Signage?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A boater who reads rules at the launch ramp is far more likely to follow them than
                  one who encounters enforcement mid-lake. The marina is the chokepoint — every
                  boater passes through it. Lake Responsibly signs put the guidelines in the one
                  place everyone sees before they push off.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Signs are designed in Lake For All&apos;s brand language — professional,
                  community-oriented, and emphatically not regulatory in tone. They explain the
                  &quot;why&quot; behind each rule, not just the rule itself.
                </p>
              </div>

              <div className="card p-7">
                <h3 className="text-xl font-bold text-navy mb-4">Get Signs for Your Marina</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Lake For All provides print-ready sign files, installation guidelines, and
                  coordination support. Chapters work directly with marina operators to arrange
                  installation. Cost is typically under $200 for a full marina installation.
                </p>
                <div className="space-y-3">
                  {[
                    'Contact Lake For All national team via chapter application',
                    'Receive print-ready PDF with your lake name and local rules',
                    'Coordinate with marina operator for placement',
                    'Document installation for chapter advocacy record',
                  ].map((step, i) => (
                    <div key={step} className="flex gap-3 text-sm">
                      <span className="w-6 h-6 bg-navy text-sky-blue rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-gray-600">{step}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/chapters#start" className="btn-primary inline-block">
                    Request Signs for Your Marina →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Materials Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Request Materials for Your Chapter</h2>
            <p className="section-subtitle mx-auto">
              WAVE cards and Lake Responsibly sign templates are available at no cost to all Lake
              For All chapters. Fill out this form and our national team will follow up within 3–5
              business days with print-ready files and installation guidance.
            </p>
          </div>
          <div className="card p-8">
            <RequestMaterialsForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wave-bg py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <WaveIcon size={48} className="text-sky-blue mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Bring These Programs to Your Lake
          </h2>
          <p className="text-xl text-gray-200 mb-10">
            Both the WAVE Program and Lake Responsibly signage are available to all Lake For All
            chapters at no cost. Start a chapter or connect with our national team to get
            materials for your lake.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chapters#start" className="btn-secondary text-center text-lg px-8 py-4">
              Start a Chapter
            </Link>
            <Link href="/donate" className="btn-primary text-center text-lg px-8 py-4">
              Support the Movement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

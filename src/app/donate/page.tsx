import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support the Lake For All movement. Your donation funds lake access advocacy, education, and chapter support.',
};

const TIERS = [
  {
    amount: 10,
    label: 'Supporter',
    icon: '🌊',
    description: 'Help cover the cost of monitoring lake access legislation and regulatory proceedings at the state and federal level.',
    perks: ['Movement newsletter', 'Digital Lake For All badge'],
  },
  {
    amount: 25,
    label: 'Advocate',
    icon: '🏄',
    description: 'Fund a chapter organizer\'s time for a day — attending public meetings, submitting comments, and mobilizing members.',
    perks: ['Everything in Supporter', 'Annual impact report', 'Chapter spotlight newsletter'],
  },
  {
    amount: 50,
    label: 'Champion',
    icon: '⚖️',
    description: 'Help fund legal research and expert testimony on lake access rights — the backbone of effective advocacy.',
    perks: ['Everything in Advocate', 'Champion recognition on website', 'Early access to reports'],
    highlight: true,
  },
  {
    amount: 100,
    label: 'Guardian',
    icon: '🏛️',
    description: 'Sponsor an entire public comment campaign or local event, amplifying lake advocacy voices at a critical moment.',
    perks: ['Everything in Champion', 'Monthly strategy call with team', 'Guardian recognition'],
  },
];

const USES = [
  { title: 'Legislative Monitoring', desc: 'Tracking federal and state bills that affect lake access and mobilizing timely responses.', pct: 35 },
  { title: 'Legal Support', desc: 'Research, expert testimony, and support for legal challenges to unjust access restrictions.', pct: 25 },
  { title: 'Chapter Development', desc: 'Helping new chapters launch, organize, and advocate effectively for their local lake.', pct: 25 },
  { title: 'Public Education', desc: 'Publishing research, producing media, and educating the public on lake access rights.', pct: 15 },
];

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="wave-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sky-blue font-semibold uppercase tracking-wide text-sm mb-3">
              Support the Cause
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">Donate</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Lake For All is a grassroots movement powered by people who love their lakes. Your
              donation funds advocacy, education, legal support, and the growth of chapters at
              lakes across the country.
            </p>
          </div>
        </div>
      </section>

      {/* What Donations Fund */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Where Your Money Goes</h2>
          <p className="section-subtitle text-center mx-auto">
            100% of donations go directly to lake access advocacy. We&apos;re a grassroots movement
            — no big salaries, no corporate overhead.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mt-10 max-w-3xl mx-auto">
            {USES.map((use) => (
              <div key={use.title} className="card p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-navy">{use.title}</h3>
                  <span className="text-2xl font-extrabold text-sky-blue">{use.pct}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-3">
                  <div
                    className="bg-sky-blue rounded-full h-2 transition-all"
                    style={{ width: `${use.pct}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{use.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Choose Your Level</h2>
          <p className="section-subtitle text-center mx-auto">
            Every dollar counts. Pick the level that works for you — or enter a custom amount.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {TIERS.map((tier) => (
              <div
                key={tier.label}
                className={`card p-6 flex flex-col ${tier.highlight ? 'ring-2 ring-sky-blue' : ''}`}
              >
                {tier.highlight && (
                  <div className="bg-sky-blue text-white text-xs font-bold px-3 py-1 rounded-full text-center mb-4 -mt-1">
                    Most Popular
                  </div>
                )}
                <div className="text-3xl mb-3">{tier.icon}</div>
                <div className="text-3xl font-extrabold text-navy mb-1">${tier.amount}</div>
                <div className="text-sky-blue font-semibold text-sm mb-3 uppercase tracking-wide">
                  {tier.label}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">{tier.description}</p>
                <ul className="space-y-1 mb-6">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="text-xs text-gray-500 flex items-start gap-1.5">
                      <span className="text-sky-blue mt-0.5">✓</span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://opencollective.com/lake-for-all`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center text-sm font-semibold py-2.5 rounded-lg transition-colors ${
                    tier.highlight
                      ? 'bg-sky-blue text-white hover:bg-sky-blue-dark'
                      : 'border-2 border-navy text-navy hover:bg-navy hover:text-white'
                  }`}
                >
                  Donate ${tier.amount}
                </a>
              </div>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mt-8 card p-8 max-w-lg mx-auto text-center">
            <h3 className="font-bold text-navy text-lg mb-2">Custom Amount</h3>
            <p className="text-sm text-gray-600 mb-6">
              Give any amount you&apos;re comfortable with. Every dollar moves the needle.
            </p>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
                <input
                  type="number"
                  min="1"
                  placeholder="Amount"
                  className="w-full border border-gray-300 rounded-lg pl-7 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue"
                />
              </div>
              <a
                href="https://opencollective.com/lake-for-all"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-blue text-white font-semibold px-6 py-3 rounded-lg hover:bg-sky-blue-dark transition-colors text-sm"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Giving */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-title">Monthly Giving</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Monthly donors are the backbone of sustainable advocacy. A recurring contribution
                lets us plan ahead, hire seasonal advocates, and respond quickly to emerging
                threats to lake access.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Just <strong>$10/month</strong> — less than a marina snack bar run — provides
                consistent, reliable support for the movement all year long.
              </p>
              <a
                href="https://opencollective.com/lake-for-all"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Become a Monthly Donor →
              </a>
            </div>
            <div className="space-y-3">
              {[
                { amount: '$10/mo', impact: 'Funds daily legislative monitoring for one week' },
                { amount: '$25/mo', impact: 'Covers one public comment campaign per quarter' },
                { amount: '$50/mo', impact: 'Supports a chapter organizer\'s advocacy work for a month' },
                { amount: '$100/mo', impact: 'Funds legal research on one active access issue' },
              ].map((item) => (
                <div key={item.amount} className="flex gap-4 bg-gray-50 rounded-xl p-4">
                  <div className="font-extrabold text-sky-blue whitespace-nowrap">{item.amount}</div>
                  <div className="text-sm text-gray-600">{item.impact}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Collective */}
      <section className="wave-bg py-16 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Donate via Open Collective</h2>
          <p className="text-gray-200 mb-3">
            Lake For All processes donations through Open Collective — a transparent, trusted
            platform for grassroots organizations. Every contribution is publicly reported.
          </p>
          <p className="text-gray-300 text-sm mb-8">
            Open Collective provides full financial transparency: you can see exactly how funds
            are raised and spent. That&apos;s the grassroots way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://opencollective.com/lake-for-all"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center"
            >
              Open Collective →
            </a>
            <a
              href="mailto:contact@lakeforall.org"
              className="btn-primary text-center"
            >
              Other Ways to Give
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

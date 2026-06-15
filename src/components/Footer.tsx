import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Lake For All"
                style={{ height: '40px', width: 'auto' }}
              />
              <span className="text-white font-bold text-lg leading-none">Lake For All</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              A national grassroots movement protecting public access to America&apos;s lakes —
              for boaters, fishermen, swimmers, kayakers, paddleboarders, and every American who
              believes public waters belong to everyone.
            </p>
            <p className="mt-4 text-sky-blue font-semibold text-sm italic">
              Every Lake. Every Activity. For All.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Movement
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/why-lakes-matter', label: 'Why Lakes Matter' },
                { href: '/education', label: 'Education' },
                { href: '/chapters', label: 'Find a Chapter' },
                { href: '/chapters#start', label: 'Start a Chapter' },
                { href: '/news', label: 'News & Updates' },
                { href: '/about', label: 'About Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-sky-blue text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Support
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/donate', label: 'Donate' },
                { href: '/shop', label: 'Shop' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-sky-blue text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl p-4">
              <p className="text-white font-semibold text-sm mb-1">Ready to take action?</p>
              <p className="text-gray-400 text-xs mb-3 leading-snug">
                Find your local chapter or start one at your lake.
              </p>
              <div className="flex flex-col gap-2">
                <Link
                  href="/chapters#find"
                  className="text-center text-xs font-semibold bg-sky-blue text-white px-3 py-1.5 rounded-lg hover:bg-sky-blue-dark transition-colors"
                >
                  Find a Chapter
                </Link>
                <Link
                  href="/chapters#start"
                  className="text-center text-xs font-semibold border border-sky-blue text-sky-blue px-3 py-1.5 rounded-lg hover:bg-sky-blue hover:text-white transition-colors"
                >
                  Start a Chapter
                </Link>
              </div>
            </div>

            <h3 className="font-semibold text-white mt-6 mb-4 text-sm uppercase tracking-wide">
              Connect
            </h3>
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-sky-blue transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-sky-blue transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              {/* X/Twitter */}
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-sky-blue transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-sky-blue text-sm transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@lakeforall.org"
                  className="text-gray-300 hover:text-sky-blue text-sm transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:media@lakeforall.org"
                  className="text-gray-300 hover:text-sky-blue text-sm transition-colors"
                >
                  Media Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white border-opacity-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Lake For All. All rights reserved. A grassroots advocacy
            movement.
          </p>
          <Link
            href="/donate"
            className="bg-sky-blue text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-sky-blue-dark transition-colors"
          >
            Support the Movement
          </Link>
        </div>
      </div>
    </footer>
  );
}

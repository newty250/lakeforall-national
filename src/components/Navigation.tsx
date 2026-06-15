'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/why-lakes-matter', label: 'Why Lakes Matter' },
  { href: '/education', label: 'Education' },
  { href: '/chapters', label: 'Chapters' },
  { href: '/news', label: 'News' },
  { href: '/shop', label: 'Shop' },
  { href: '/donate', label: 'Donate' },
  { href: '/about', label: 'About' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-navy shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img
              src="/images/logo.png"
              alt="Lake For All"
              style={{ height: '40px', width: 'auto' }}
            />
            <span className="flex flex-col leading-none">
              <span className="text-white font-black uppercase tracking-widest" style={{ fontSize: '9px' }}>Lake</span>
              <span className="text-white font-black uppercase tracking-widest text-sm">For All</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-sky-blue bg-white bg-opacity-10'
                    : 'text-gray-200 hover:text-white hover:bg-white hover:bg-opacity-10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/chapters#join"
              className="ml-3 bg-sky-blue text-white font-semibold px-4 py-2 rounded-lg hover:bg-sky-blue-dark transition-colors text-sm"
            >
              Join the Movement
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-200 hover:text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy border-t border-white border-opacity-10">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-sky-blue bg-white bg-opacity-10'
                    : 'text-gray-200 hover:text-white hover:bg-white hover:bg-opacity-10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/chapters#join"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 bg-sky-blue text-white font-semibold px-4 py-2 rounded-lg text-center text-sm"
            >
              Join the Movement
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

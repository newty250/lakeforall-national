import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Lake For All — National Movement for Public Lake Access',
    template: '%s | Lake For All',
  },
  description:
    'Lake For All is a national movement against the privatization of public waters. Public lakes belong to all Americans — not to those who own property along the shoreline. We fight for fishermen, swimmers, boaters, kayakers, and every American\'s right to public water.',
  keywords: [
    'lake access',
    'public lakes',
    'lake recreation',
    'public waterway access',
    'lake for all',
    'fishing access',
    'swimming access',
    'kayaking',
    'paddleboarding',
    'wake surfing',
    'privatization of public waters',
    'lakefront property rights',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lakeforall.org',
    siteName: 'Lake For All',
    title: 'Lake For All — Public Waters Stay Public.',
    description:
      'Join the national movement against the privatization of public waters. Public lakes belong to all Americans — fishermen, swimmers, boaters, kayakers, and families. We\'re fighting to keep them that way.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

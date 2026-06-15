import type { Metadata } from 'next';
import Link from 'next/link';
import WaitlistForm from '@/components/WaitlistForm';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Lake For All branded merchandise. Proceeds support lake access advocacy nationwide.',
};

const PRODUCTS = [
  {
    name: 'Lake For All Classic Tee',
    description: 'Soft cotton tee with the Lake For All logo and wave design. Available in navy and white.',
    price: '$28',
    tags: ['Unisex', 'S–3XL'],
    badge: 'Coming Soon',
  },
  {
    name: 'Every Lake Hat',
    description: 'Structured 6-panel cap with embroidered "Every Lake. Every Sport. Every American." text.',
    price: '$32',
    tags: ['Adjustable', 'One Size'],
    badge: 'Coming Soon',
  },
  {
    name: 'Lake For All Wave Sticker Pack',
    description: 'Set of 4 vinyl stickers featuring the wave logo, slogan, and chapter-ready designs. Waterproof.',
    price: '$8',
    tags: ['4-pack', 'Waterproof'],
    badge: 'Coming Soon',
  },
  {
    name: 'Advocacy Hoodie',
    description: 'Premium fleece hoodie with embroidered chest logo. Perfect for early morning lake days.',
    price: '$65',
    tags: ['Unisex', 'S–2XL'],
    badge: 'Coming Soon',
  },
  {
    name: 'Lake Life Long Sleeve',
    description: 'Lightweight performance long sleeve with UPF 30+ sun protection. Built for the water.',
    price: '$42',
    tags: ['UPF 30+', 'S–3XL'],
    badge: 'Coming Soon',
  },
  {
    name: 'Grassroots Tote Bag',
    description: 'Heavy-duty canvas tote with the wave logo. Great for carrying gear to your favorite lake.',
    price: '$22',
    tags: ['Canvas', 'Large'],
    badge: 'Coming Soon',
  },
];

const CHAPTER_PRODUCTS = [
  { name: 'Lake Anna 4 All', lake: 'Lake Anna, VA', badge: 'Coming Soon' },
];

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="wave-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sky-blue font-semibold uppercase tracking-wide text-sm mb-3">
              Wear the Movement
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">Shop</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Every purchase supports lake access advocacy. Wear the movement on the water, on the
              dock, and everywhere in between.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <div className="bg-amber-50 border-b border-amber-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-amber-800 text-sm font-medium">
            🛍️ Our shop is launching soon via Printful. Join the waitlist to be notified and get{' '}
            <strong>10% off your first order</strong>.
          </p>
          <a href="#waitlist" className="bg-amber-700 text-white text-xs font-semibold px-4 py-2 rounded-lg whitespace-nowrap hover:bg-amber-800 transition-colors">
            Join Waitlist →
          </a>
        </div>
      </div>

      {/* National Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">National Collection</h2>
          <p className="section-subtitle">
            Lake For All branded gear. All proceeds support national lake access advocacy and chapter
            development.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <div key={product.name} className="card overflow-hidden">
                {/* Product image placeholder */}
                <div className="h-48 wave-bg flex items-center justify-center">
                  <div className="text-white text-center px-6">
                    <div className="text-4xl mb-2">🌊</div>
                    <div className="text-sm font-medium opacity-75">Product Preview</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-navy">{product.name}</h3>
                    <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded-full ml-2 whitespace-nowrap">
                      {product.badge}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    {product.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-navy">{product.price}</span>
                    <a
                      href="#waitlist"
                      className="btn-outline text-sm py-2 px-4"
                    >
                      Notify Me
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Chapter Collections</h2>
          <p className="section-subtitle">
            Support your local chapter with lake-specific merchandise. Proceeds go directly to
            chapter advocacy and operations.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHAPTER_PRODUCTS.map((cp) => (
              <div key={cp.name} className="card p-6 text-center">
                <div className="w-16 h-16 wave-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏔️</span>
                </div>
                <h3 className="font-bold text-navy mb-1">{cp.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{cp.lake}</p>
                <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {cp.badge}
                </span>
              </div>
            ))}
            <div className="card p-6 text-center border-2 border-dashed border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">+</span>
              </div>
              <h3 className="font-bold text-gray-400 mb-1">Your Chapter</h3>
              <p className="text-sm text-gray-400 mb-4">Start a chapter to unlock your own merchandise line</p>
              <Link href="/chapters#start" className="btn-outline text-sm py-2">
                Start a Chapter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Printful Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Powered by Printful</h2>
          <p className="text-gray-600 leading-relaxed mb-4 max-w-2xl mx-auto">
            Our merchandise is printed and shipped on demand through Printful — meaning no minimum
            orders, high-quality products, and direct shipping to your door. No inventory waste,
            and every item contributes directly to lake access advocacy.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-8 text-left">
            {[
              { title: 'Print on Demand', desc: 'No inventory — every item is made when you order it.' },
              { title: 'Quality Guaranteed', desc: 'Premium materials and direct-to-garment printing.' },
              { title: 'Advocacy Funded', desc: 'Profits go directly to national and chapter advocacy work.' },
            ].map((f) => (
              <div key={f.title} className="card p-5">
                <h3 className="font-bold text-navy mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="wave-bg py-16 text-white">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Get Early Access</h2>
          <p className="text-gray-200 mb-8">
            Join the waitlist to be notified when our shop launches and receive 10% off your first
            order.
          </p>
          <WaitlistForm />
          <p className="text-xs text-gray-400 mt-3">No spam. Just a launch notification and your discount code.</p>
        </div>
      </section>
    </>
  );
}

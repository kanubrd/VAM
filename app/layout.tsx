import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer/footer';
import { CookieConsent } from '@/components/ui/cookie-consent';
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll';
import './globals.css';

// Subset + display:swap eliminates render-blocking font flash
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2C3E50',
};

export const metadata: Metadata = {
  title: 'Valtrix Advance Material Pvt. Ltd',
  description: 'Leading manufacturer of advanced materials for industrial applications. Metals, composites, polymers, and specialty coatings.',
  openGraph: {
    title: 'Valtrix Advance Material Pvt. Ltd',
    description: 'Leading manufacturer of advanced materials for industrial applications.',
    url: 'https://vamvaltrix.com',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png',  media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Valtrix Advance Material Pvt. Ltd',
  url: 'https://vamvaltrix.com',
  logo: 'https://vamvaltrix.com/valtrix-logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91 98981 23983',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['en', 'hi'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '318, Fortune Gateway, Chhani',
    addressLocality: 'Vadodara',
    postalCode: '390024',
    addressRegion: 'Gujarat',
    addressCountry: 'India',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preload hero images */}
        <link rel="preload" as="image" href="/hero-bg.png" />
        <link rel="preload" as="image" href="/slide2.png" />
        <link rel="preload" as="image" href="/slide3.png" />

        {/* DNS prefetch for external origins used across the site */}
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.gstatic.com" />
        <link rel="dns-prefetch" href="https://valtrix-backend-y7df.vercel.app" />

        {/* Preconnect to font origin — eliminates connection latency */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured data — < escaped to \u003c to prevent script injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-[#1A1A1A]`}>
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

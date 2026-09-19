import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer/footer';
import { CookieConsent } from '@/components/ui/cookie-consent';
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll';
import { WebVitalsProvider } from '@/components/providers/web-vitals-provider';
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
  title: {
    default: 'Advanced Materials Supplier Vadodara | Valtrix Advance Material',
    template: '%s | Valtrix'
  },
  description: 'Valtrix Advance Material Pvt. Ltd. (VAM) is an ISO 9001:2024 certified specialty chemicals & industrial additives manufacturer in Vadodara, Gujarat. Delivering custom additive packages, biostable metalworking fluids, and corrosion-resistant coatings.',
  keywords: [
    'Advanced Materials Supplier Vadodara',
    'Valtrix Advance Material Pvt. Ltd',
    'industrial additives Vadodara',
    'specialty chemicals manufacturer Gujarat',
    'metalworking fluids',
    'electroplating brighteners',
    'surface treatment chemicals',
    'corrosion inhibitors',
    'ISO 9001:2024 certified chemical company',
    'Vadodara',
    'Gujarat',
    'India',
    'Valtriks',
    'Valtrixx',
    'Waltrix'
  ],
  authors: [{ name: 'Valtrix Advance Material Pvt. Ltd' }],
  creator: 'Valtrix Advance Material Pvt. Ltd',
  publisher: 'Valtrix Advance Material Pvt. Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.valtrixmaterials.com'),
  alternates: {
    canonical: 'https://www.valtrixmaterials.com',
    languages: {
      'en-IN': 'https://www.valtrixmaterials.com',
      'en-US': 'https://www.valtrixmaterials.com',
      'x-default': 'https://www.valtrixmaterials.com',
    },
  },
  openGraph: {
    title: 'Advanced Materials Supplier Vadodara | Valtrix Advance Material',
    description: 'Valtrix Advance Material Pvt. Ltd. (VAM) is an ISO 9001:2024 certified specialty chemicals & industrial additives manufacturer in Vadodara, Gujarat. Delivering custom additive packages, metalworking fluids, and corrosion-resistant coatings.',
    url: 'https://www.valtrixmaterials.com',
    siteName: 'Valtrix Advance Material Pvt. Ltd.',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.valtrixmaterials.com/valtrix-logo.png',
        width: 1200,
        height: 630,
        alt: 'Valtrix Advance Material - ISO 9001:2024 Certified Facility in Vadodara, Gujarat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced Materials Supplier Vadodara | Valtrix Advance Material',
    description: 'Valtrix Advance Material Pvt. Ltd. is an ISO 9001:2024 certified manufacturer of advanced industrial additives, metalworking fluids, and surface protection in Vadodara, Gujarat.',
    images: ['https://www.valtrixmaterials.com/valtrix-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png?v=3', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png?v=3',  media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png?v=3',
  },
  manifest: '/manifest.json',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.valtrixmaterials.com/#organization',
  name: 'Valtrix Advance Material Pvt. Ltd',
  legalName: 'Valtrix Advance Material Private Limited',
  alternateName: ['VAM VALTRIX', 'VALTRIX', 'Valtriks', 'Valtrixx', 'Waltrix', 'Baltrix', 'Valtrics'],
  url: 'https://www.valtrixmaterials.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.valtrixmaterials.com/valtrix-logo.png',
    width: 400,
    height: 120
  },
  description: 'Leading manufacturer of advanced materials, industrial chemicals & specialty additives for automotive, aerospace & manufacturing industries.',
  foundingDate: '2020',
  industry: [
    'Chemical Manufacturing',
    'Advanced Materials',
    'Industrial Chemicals',
    'Specialty Additives'
  ],
  products: [
    'Metalworking Fluids',
    'Electroplating Chemicals', 
    'Surface Treatment Solutions',
    'Corrosion Inhibitors',
    'Bio-based Polyols',
    'Rust Converters'
  ],
  areaServed: ['Vadodara', 'Gujarat', 'India', 'Worldwide'],
  serviceArea: {
    '@type': 'Country',
    name: 'India'
  },
  hasMap: 'https://maps.google.com/?q=Valtrix+Advance+Material+Vadodara',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-98981-23983',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      }
    },
    {
      '@type': 'ContactPoint',
      email: 'info@valtrixmaterials.com',
      contactType: 'sales'
    }
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '318, Fortune Gateway, Chhani',
    addressLocality: 'Vadodara',
    postalCode: '390024',
    addressRegion: 'Gujarat',
    addressCountry: 'India'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '22.3486',
    longitude: '73.1812'
  },
  sameAs: [
    'https://twitter.com/vamvaltrix',
    'https://linkedin.com/company/vamvaltrix',
    'https://instagram.com/vamvaltrix'
  ],
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.valtrixmaterials.com/solutions?search={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Valtrix Advance Material Pvt. Ltd.',
  image: 'https://www.valtrixmaterials.com/valtrix-logo.png',
  '@id': 'https://www.valtrixmaterials.com/#localbusiness',
  url: 'https://www.valtrixmaterials.com',
  telephone: '+91 98981 23983',
  email: 'info@valtrixmaterials.com',
  hasMap: 'https://maps.google.com/?q=Valtrix+Advance+Material+Vadodara',
  certifications: 'ISO 9001:2024 Certified',
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'ISO 9001:2024 Certification'
    }
  ],
  areaServed: ['Vadodara', 'Gujarat', 'India', 'Worldwide'],
  knowsAbout: [
    'Industrial Additive Packages',
    'Metalworking Fluids',
    'Electroplating Brighteners',
    'Surface Treatment Technology',
    'Custom Chemical Formulation',
    'Tribological Wear Protection'
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '318, Fortune Gateway, Chhani',
    addressLocality: 'Vadodara',
    postalCode: '390024',
    addressRegion: 'Gujarat',
    addressCountry: 'India'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '22.3486',
    longitude: '73.1812'
  },
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '24'
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00'
  },
  sameAs: [
    'https://twitter.com/vamvaltrix',
    'https://linkedin.com/company/vamvaltrix',
    'https://instagram.com/vamvaltrix'
  ]
};

import { WhatsAppChat } from '@/components/ui/whatsapp-chat';
import { StickyQuoteCTA } from '@/components/ui/sticky-quote-cta';
import { GoogleAnalytics } from '@/components/providers/google-analytics';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Suppress third-party browser extension errors (e.g. Bitdefender TrafficLight) from breaking dev overlay */}
        <Script src="/suppress-extension-errors.js" strategy="beforeInteractive" />

        {/* Preload critical hero image only (first slide) */}
        <link rel="preload" as="image" href="/hero-bg-teal.png" type="image/png" />

        {/* Preconnect to critical font origin — eliminates connection latency */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured data — < escaped to \u003c to prevent script injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-[#1A1A1A]`} suppressHydrationWarning>
        <div className="viewport-frame" />
        <GoogleAnalytics />
        <WebVitalsProvider />
        <Navbar />
        <SmoothScrollProvider>
          <main>{children}</main>
          <Footer />
          <CookieConsent />
          <WhatsAppChat />
          <StickyQuoteCTA />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

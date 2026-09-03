// Solutions index page listing specialty chemical solutions & custom industrial additives
import { Metadata } from 'next';
import { Suspense } from 'react';
import { SolutionsContent } from './solutions-content';
import { getSolutionsData } from '@/lib/content-utils';

export const metadata: Metadata = {
  title: 'Solutions | Valtrix Advance Material Pvt. Ltd. | Industrial Additives & Corrosion Protection',
  description: 'Valtrix Advance Material Pvt. Ltd. (also known as Valtriks, Valtrixx, Waltrix, Baltrix) delivers advanced industrial additives, corrosion-resistant coatings, and custom chemical solutions to reduce downtime, prevent sludge, and extend equipment life. Serving Vadodara, Gujarat with ISO-certified innovation.',
  keywords: [
    'Valtrix Advance Material Pvt. Ltd.',
    'Valtriks',
    'Valtrixx',
    'Waltrix',
    'Baltrix',
    'Valtrics',
    'industrial additives',
    'material protection',
    'corrosion resistance',
    'sludge prevention',
    'downtime reduction',
    'efficiency improvement',
    'custom additive packages',
    'metalworking fluid solutions',
    'electroplating solutions',
    'surface treatment additives',
    'Vadodara Gujarat chemical manufacturer',
    'ISO certified industrial additives',
    'suscat-i polymer',
    'vamshield-90 corrosion inhibitor',
    'suspol-125 polyol',
    'vam rc-01 rust converter',
    'vam hs-100 lubricant additive'
  ],
  openGraph: {
    title: 'Solutions | Valtrix Advance Material Pvt. Ltd. | Industrial Additives & Corrosion Protection',
    description: 'Valtrix Advance Material Pvt. Ltd. (also known as Valtriks, Valtrixx, Waltrix, Baltrix) delivers advanced industrial additives, corrosion-resistant coatings, and custom chemical solutions to reduce downtime, prevent sludge, and extend equipment life. Serving Vadodara, Gujarat with ISO-certified innovation.',
    url: 'https://www.valtrixmaterials.com/solutions',
    type: 'website',
    images: [
      {
        url: 'https://www.valtrixmaterials.com/suscat.png',
        width: 800,
        height: 600,
        alt: 'Valtrix Advance Material Pvt. Ltd. ISO-certified facility in Vadodara, also known as Valtriks/Valtrixx',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.valtrixmaterials.com/solutions',
  },
};

export default function SolutionsPage() {
  const solutionsData = getSolutionsData();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What causes oil sludge?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oil sludge is caused by oxidation, contamination, and breakdown of lubricants under high temperature and pressure. Valtrix Advance Material Pvt. Ltd. delivers advanced industrial additives that prevent sludge formation, ensuring smoother operations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do custom additive packages reduce downtime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Custom additive packages improve efficiency, reduce wear, and extend equipment life. By preventing sludge and corrosion, they minimize unexpected breakdowns and reduce downtime.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is corrosion resistance important in industrial systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Corrosion resistance is critical to protect machinery and extend service life. Valtrix Advance Material Pvt. Ltd. provides ISO-certified corrosion-resistant coatings and chemical solutions that safeguard equipment in demanding environments.',
        },
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Valtrix Advance Material Pvt. Ltd.',
    description: 'Valtrix Advance Material Pvt. Ltd. delivers advanced industrial additives, corrosion-resistant coatings, and custom chemical solutions to reduce downtime, prevent sludge, and extend equipment life. Serving Vadodara, Gujarat with ISO-certified innovation.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vadodara Industrial Area',
      addressLocality: 'Vadodara',
      addressRegion: 'Gujarat',
      postalCode: '390010',
      addressCountry: 'IN',
    },
    telephone: '+91-XXXXXXXXXX',
    email: 'info@valtrixmaterials.com',
    url: 'https://www.valtrixmaterials.com',
    logo: 'https://www.valtrixmaterials.com/logo.png',
    sameAs: [
      'https://www.linkedin.com/company/valtrixmaterials',
      'https://www.facebook.com/valtrixmaterials',
    ],
    openingHours: 'Mo-Fr 09:00-18:00',
    certifications: 'ISO Certified',
  };

  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'Advanced Industrial Additives & Corrosion-Resistant Coatings',
    brand: {
      '@type': 'Organization',
      name: 'Valtrix Advance Material Pvt. Ltd.',
    },
    description: 'Valtrix Advance Material Pvt. Ltd. delivers advanced industrial additives, corrosion-resistant coatings, and custom chemical solutions to reduce downtime, prevent sludge, and extend equipment life. Serving Vadodara, Gujarat with ISO-certified innovation.',
    sku: 'VAM-IND-ADD-001',
    mpn: 'VAM-COAT-002',
    image: 'https://www.valtrixmaterials.com/images/additives-coatings.jpg',
    url: 'https://www.valtrixmaterials.com/solutions',
    manufacturer: {
      '@type': 'Organization',
      name: 'Valtrix Advance Material Pvt. Ltd.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Vadodara Industrial Area',
        addressLocality: 'Vadodara',
        addressRegion: 'Gujarat',
        postalCode: '390010',
        addressCountry: 'IN',
      },
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.valtrixmaterials.com/contact',
      priceCurrency: 'INR',
      price: 'On Request',
      availability: 'https://schema.org/InStock',
    },
  };

  const productListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Valtrix Specialty Chemical Solutions & Custom Industrial Additives',
    description: 'Catalog of industrial additives and specialty chemicals engineered for material protection, corrosion resistance, and downtime reduction.',
    itemListElement: [
      {
        '@type': 'Product',
        position: 1,
        name: 'SusCat-I Cationic Polymer',
        description: 'High-performance cationic polymer for industrial formulations, levelling, and tramp oil separation.',
        brand: { '@type': 'Brand', name: 'Valtrix' },
      },
      {
        '@type': 'Product',
        position: 2,
        name: 'VAMShield-90 Corrosion Inhibitor',
        description: 'Ash-free multi-metal corrosion inhibitor providing low foaming and superior protection.',
        brand: { '@type': 'Brand', name: 'Valtrix' },
      },
      {
        '@type': 'Product',
        position: 3,
        name: 'SusPol-125 Bio-Polyol',
        description: 'Castor oil-derived solvent-free bio-polyol for flexible, weather-resistant industrial coatings.',
        brand: { '@type': 'Brand', name: 'Valtrix' },
      },
      {
        '@type': 'Product',
        position: 4,
        name: 'VAM RC-01 Rust Converter',
        description: 'Advanced rust converter additive converting ferric oxide into a stable protective layer.',
        brand: { '@type': 'Brand', name: 'Valtrix' },
      },
      {
        '@type': 'Product',
        position: 5,
        name: 'VAM HS-100 Lubricant Additive',
        description: 'Multifunctional lubricant additive offering lime soap dispersion, foam control, and rust prevention.',
        brand: { '@type': 'Brand', name: 'Valtrix' },
      },
      {
        '@type': 'Product',
        position: 6,
        name: 'Custom Industrial Additive Packages',
        description: 'Tailored chemical formulations engineered in Vadodara, Gujarat for sludge prevention, corrosion resistance, and downtime reduction.',
        brand: { '@type': 'Brand', name: 'Valtrix' },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[#17A2B8] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-[#6B7280]">Loading solutions...</p>
          </div>
        </div>
      }>
        <SolutionsContent solutionsData={solutionsData} />
      </Suspense>
    </>
  );
}


import { Metadata } from 'next';
import { getIndustries } from '@/lib/content-utils';
import { IndustriesContent } from './industries-content';

export const metadata: Metadata = {
  title: 'Automotive Manufacturing, Maintenance & Repair Industries | Valtrix Advance Material Pvt. Ltd.',
  description: 'Valtrix Advance Material Pvt. Ltd. delivers advanced industrial additives, corrosion-resistant coatings, and custom chemical solutions to reduce downtime, prevent sludge, and extend equipment life. Serving Vadodara, Gujarat with ISO-certified innovation.',
  keywords: [
    'Automotive Manufacturing',
    'Maintenance & Repair',
    'General Industrial',
    'Market Segments',
    'Rust Converter VAM RC 01',
    'Polyurethane Building Blocks',
    'High Build Coatings',
    'industrial additives',
    'Valtrix Advance Material Pvt. Ltd.',
    'Vadodara Gujarat',
    'ISO 9001:2015'
  ],
  openGraph: {
    title: 'Automotive Manufacturing, Maintenance & Repair Industries | Valtrix Advance Material Pvt. Ltd.',
    description: 'Valtrix Advance Material Pvt. Ltd. delivers advanced industrial additives, corrosion-resistant coatings, and custom chemical solutions to reduce downtime, prevent sludge, and extend equipment life. Serving Vadodara, Gujarat with ISO-certified innovation.',
    url: 'https://www.valtrixmaterials.com/industries',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.valtrixmaterials.com/industries',
  },
};

export default function IndustriesPage() {
  const industries = getIndustries();

  const localBusinessJsonLd = {
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
      addressCountry: 'IN'
    },
    telephone: '+91 98981 23983',
    email: 'info@valtrixmaterials.com',
    url: 'https://www.valtrixmaterials.com',
    certifications: 'ISO Certified'
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What market segments does Valtrix Advance Material Pvt. Ltd. serve?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Valtrix Advance Material Pvt. Ltd. serves Automotive Manufacturing, Maintenance & Repair, General Industrial, Metalworking Fluids, Electroplating, and Surface Treatment market segments across Vadodara, Gujarat, India, and global exports.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do Rust Converter VAM RC 01 and High Build Coatings help Maintenance & Repair?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Rust Converter VAM RC 01 converts surface rust into a stable protective layer, while High Build Coatings provide thick-film physical protection against chemical degradation, reducing downtime and extending machinery life.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Why are Polyurethane Building Blocks critical for Automotive Manufacturing?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Polyurethane Building Blocks deliver superior mechanical flexibility, high chemical resistance, and weatherability for automotive foams, adhesives, and protective coatings.'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <IndustriesContent industries={industries} />
    </>
  );
}

import { Metadata } from 'next';
import AboutContent from './about-content';

export const metadata: Metadata = {
  title: 'About Us | Valtrix Advance Material Pvt. Ltd. (Valtriks / Valtrixx / Waltrix)',
  description: 'Valtrix Advance Material Pvt. Ltd. (also known as Valtriks, Valtrixx, Waltrix, Baltrix) delivers advanced industrial additives, corrosion-resistant coatings, and custom chemical solutions to reduce downtime, prevent sludge, and extend equipment life. Serving Vadodara, Gujarat with ISO-certified innovation.',
  keywords: [
    'Valtrix Advance Material Pvt. Ltd.',
    'Valtriks',
    'Valtrixx',
    'Waltrix',
    'Baltrix',
    'Valtrics',
    'about valtrix',
    'advanced materials company',
    'industrial chemicals manufacturer',
    'Vadodara Gujarat'
  ],
  openGraph: {
    title: 'About Us | Valtrix Advance Material Pvt. Ltd. (Valtriks / Valtrixx / Waltrix)',
    description: 'Valtrix Advance Material Pvt. Ltd. (also known as Valtriks, Valtrixx, Waltrix, Baltrix) delivers advanced industrial additives, corrosion-resistant coatings, and custom chemical solutions to reduce downtime, prevent sludge, and extend equipment life. Serving Vadodara, Gujarat with ISO-certified innovation.',
    url: 'https://www.valtrixmaterials.com/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.valtrixmaterials.com/about',
  },
};

export default function AboutPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Is Valtriks the same company as Valtrix Advance Material Pvt. Ltd.?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, Valtriks (also written as Valtrixx, Waltrix, or Baltrix) is an alternative spelling for Valtrix Advance Material Pvt. Ltd., an ISO-certified industrial chemical manufacturer in Vadodara, Gujarat.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What does Valtrix Advance Material Pvt. Ltd. specialize in?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Valtrix Advance Material Pvt. Ltd. specializes in custom industrial additives, corrosion inhibitors, Rust Converter VAM RC 01, Polyurethane Building Blocks, and High Build Coatings.'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AboutContent />
    </>
  );
}

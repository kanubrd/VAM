// Contact Us page container importing the client-side content component
import { Metadata } from 'next';

import { ContactClient } from './contact-client';

export const metadata: Metadata = {
  title: 'Contact | Valtrix Advance Material Pvt. Ltd. | Vadodara Gujarat',
  description: 'Get in touch with Valtrix Advance Material Pvt. Ltd. for advanced industrial additives, corrosion-resistant coatings, and chemical solutions. Located in Vadodara, Gujarat with ISO-certified innovation.',
  keywords: [
    'Valtrix Advance Material Pvt. Ltd.',
    'Valtriks',
    'Valtrixx',
    'Waltrix',
    'Baltrix',
    'Valtrics',
    'Valtrix contact',
    'Valtriks contact',
    'industrial additives Vadodara',
    'contact valtrix',
    'chemical procurement quote',
    'Vadodara Gujarat'
  ],
  openGraph: {
    title: 'Contact | Valtrix Advance Material Pvt. Ltd. | Vadodara Gujarat',
    description: 'Get in touch with Valtrix Advance Material Pvt. Ltd. for advanced industrial additives, corrosion-resistant coatings, and chemical solutions. Located in Vadodara, Gujarat with ISO-certified innovation.',
    url: 'https://www.valtrixmaterials.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.valtrixmaterials.com/contact',
  },
};

export default function ContactPage() {
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Valtrix Advance Material Pvt. Ltd.',
    description: 'Get in touch with Valtrix Advance Material Pvt. Ltd. (also known as Valtriks, Valtrixx, Waltrix, Baltrix) for advanced industrial additives, corrosion-resistant coatings, and chemical solutions. Located in Vadodara, Gujarat with ISO-certified innovation.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '318, Fortune Gateway, Chhani, Vadodara Industrial Area',
      addressLocality: 'Vadodara',
      addressRegion: 'Gujarat',
      postalCode: '390024',
      addressCountry: 'IN'
    },
    telephone: '+91 98981 23983',
    email: 'info@valtrixmaterials.com',
    url: 'https://www.valtrixmaterials.com/contact',
    certifications: 'ISO 9001:2015 Certified',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '24'
    }
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Where is Valtrix Advance Material Pvt. Ltd. located?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Valtrix Advance Material Pvt. Ltd. is located at 318, Fortune Gateway, Chhani, Vadodara Industrial Area, Vadodara - 390024, Gujarat, India.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How can I contact Valtrix Advance Material Pvt. Ltd.?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You can contact Valtrix Advance Material Pvt. Ltd. via email at info@valtrixmaterials.com or by phone at +91 98981 23983.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is Valtrix ISO certified?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, Valtrix Advance Material Pvt. Ltd. is an ISO 9001:2015 certified manufacturer of industrial specialty chemicals, corrosion-resistant coatings, and custom additives.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is Valtriks or Valtrixx the same as Valtrix Advance Material Pvt. Ltd.?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, Valtriks, Valtrixx, Waltrix, Baltrix, and Valtrics are common alternative spellings and search terms for Valtrix Advance Material Pvt. Ltd., Vadodara, Gujarat.'
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
      <ContactClient />
    </>
  );
}

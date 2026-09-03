import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getIndustries, getIndustryBySlug } from '@/lib/content-utils';
import { IndustryPageContent } from '@/components/industries/IndustryPageContent';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const industries = getIndustries();
  return industries.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const industry = getIndustryBySlug(resolvedParams.slug);
  if (!industry) return {};

  const name = industry.title;
  const title = `${name} | Automotive Manufacturing, Maintenance & Repair | Valtrix Advance Material Pvt. Ltd.`;
  const description = `Valtrix Advance Material Pvt. Ltd. (also known as Valtriks, Valtrixx, Waltrix, Baltrix) delivers advanced industrial additives, corrosion-resistant coatings, and custom chemical solutions to reduce downtime, prevent sludge, and extend equipment life. Serving Vadodara, Gujarat with ISO-certified innovation.`;

  return {
    title,
    description,
    keywords: [
      industry.title,
      'Automotive Manufacturing',
      'Maintenance & Repair',
      'General Industrial',
      'Market Segments',
      'Rust Converter VAM RC 01',
      'Polyurethane Building Blocks',
      'High Build Coatings',
      'Valtrix Advance Material Pvt. Ltd.',
      'Valtriks',
      'Valtrixx',
      'Waltrix',
      'Baltrix',
      'Valtrics',
      'Vadodara Gujarat',
      'ISO 9001:2015'
    ],
    alternates: {
      canonical: `https://www.valtrixmaterials.com/industries/${resolvedParams.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.valtrixmaterials.com/industries/${resolvedParams.slug}`,
      type: 'website',
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const resolvedParams = await params;
  const industry = getIndustryBySlug(resolvedParams.slug);

  if (!industry) {
    notFound();
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.valtrixmaterials.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Industries',
        'item': 'https://www.valtrixmaterials.com/industries'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': industry.title,
        'item': `https://www.valtrixmaterials.com/industries/${resolvedParams.slug}`
      }
    ]
  };

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Valtrix Advance Material Pvt. Ltd.',
    description: 'Valtrix Advance Material Pvt. Ltd. (also known as Valtriks, Valtrixx, Waltrix) delivers advanced industrial additives, corrosion-resistant coatings, and custom chemical solutions to reduce downtime, prevent sludge, and extend equipment life. Serving Vadodara, Gujarat with ISO-certified innovation.',
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
    url: 'https://www.valtrixmaterials.com',
    certifications: 'ISO 9001:2015 Certified'
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': `Why choose Valtrix Advance Material Pvt. Ltd. for ${industry.title}?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `Valtrix Advance Material Pvt. Ltd. delivers ISO-certified industrial additives, corrosion-resistant coatings, and custom chemical formulations in Vadodara, Gujarat, engineered specifically to optimize ${industry.title} operations.`
        }
      },
      {
        '@type': 'Question',
        'name': 'How do Rust Converter VAM RC 01, Polyurethane Building Blocks, and High Build Coatings support Maintenance & Repair?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Rust Converter VAM RC 01 passivates surface oxidation, Polyurethane Building Blocks enhance chemical flexibility, and High Build Coatings provide heavy-duty physical barriers that reduce downtime and extend equipment service life.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Where is Valtrix Advance Material Pvt. Ltd. based in India?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Valtrix Advance Material Pvt. Ltd. operates a state-of-the-art chemical blending plant and R&D laboratory in Vadodara, Gujarat, India.'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <IndustryPageContent industry={industry} />
    </>
  );
}

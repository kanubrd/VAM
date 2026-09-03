import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProducts, getProductBySlug } from '@/lib/content-utils';
import { ProductPageContent } from '@/components/products/ProductPageContent';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getProducts();
  return products.map((prod) => ({
    slug: prod.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);
  if (!product) return {};

  const name = product.name;
  const title = `${name} | Valtrix Advance Material Pvt. Ltd. | Vadodara, Gujarat`;
  const description = `${product.name} manufactured by Valtrix Advance Material Pvt. Ltd. (also known as Valtriks, Valtrixx, Waltrix, Baltrix) in Vadodara, Gujarat. Advanced industrial additives, corrosion-resistant coatings, and custom chemical solutions to reduce downtime, prevent sludge, and extend equipment life.`;

  return {
    title,
    description,
    keywords: [
      product.name,
      'Valtrix Advance Material Pvt. Ltd.',
      'Valtriks',
      'Valtrixx',
      'Waltrix',
      'Baltrix',
      'Valtrics',
      'Vadodara Gujarat',
      'industrial additives',
      'corrosion protection',
      'ISO certified',
      ...(product.seo?.keywords || [])
    ],
    alternates: {
      canonical: `https://www.valtrixmaterials.com/products/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.valtrixmaterials.com/products/${product.slug}`,
      type: 'website',
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
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
        'name': 'Products',
        'item': 'https://www.valtrixmaterials.com/solutions'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': product.name,
        'item': `https://www.valtrixmaterials.com/products/${product.slug}`
      }
    ]
  };

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'description': product.description,
    'image': product.images?.product ? `https://www.valtrixmaterials.com${product.images.product}` : 'https://www.valtrixmaterials.com/valtrix-logo-teal.png',
    'brand': {
      '@type': 'Organization',
      'name': 'Valtrix Advance Material Pvt. Ltd.'
    },
    'manufacturer': {
      '@type': 'Organization',
      'name': 'Valtrix Advance Material Pvt. Ltd.',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Vadodara',
        'addressRegion': 'Gujarat',
        'addressCountry': 'IN'
      }
    },
    'offers': {
      '@type': 'AggregateOffer',
      'priceCurrency': 'INR',
      'lowPrice': '8000',
      'highPrice': '220000',
      'offerCount': '1',
      'priceRange': 'INR 8000 - INR 220000'
    }
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': `What is ${product.name}?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `${product.name} is a high-performance chemical formulation manufactured by Valtrix Advance Material Pvt. Ltd. in Vadodara, Gujarat, engineered for superior material protection, corrosion resistance, and operational efficiency.`
        }
      },
      {
        '@type': 'Question',
        'name': `How does ${product.name} reduce industrial equipment downtime?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `${product.name} stabilizes chemical equilibrium under extreme pressures and thermal loads, preventing sludge formation, micro-pitting, and wear to cut downtime by up to 45%.`
        }
      },
      {
        '@type': 'Question',
        'name': 'Where is Valtrix Advance Material Pvt. Ltd. located?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Valtrix Advance Material Pvt. Ltd. is located in Vadodara Industrial Area, Vadodara, Gujarat, India, operating under ISO 9001:2015 quality management certification.'
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ProductPageContent product={product} />
    </>
  );
}

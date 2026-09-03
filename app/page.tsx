import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/hero/hero-section';
import { TestimonialsSkeleton } from '@/components/skeletons/testimonials-skeleton';
import { CTASkeleton } from '@/components/skeletons/cta-skeleton';
import { PrefetchDynamicSections } from '@/components/prefetch-dynamic-sections';
import { HomeIndustriesSection } from '@/components/sections/home-industries';
import { getIndustries } from '@/lib/content-utils';

// Lazy-load below-the-fold sections — reduces initial JS bundle
const TestimonialsSection = dynamic(
  () => import('@/components/sections/testimonials').then((m) => m.TestimonialsSection),
  { ssr: true, loading: () => <TestimonialsSkeleton /> }
);

const CTABanner = dynamic(
  () => import('@/components/sections/cta-banner').then((m) => m.CTABanner),
  { ssr: true, loading: () => <CTASkeleton /> }
);

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Valtrix Advance Material Pvt. Ltd. | Industrial Additives & Coatings Vadodara',
  description: 'Valtrix Advance Material Pvt. Ltd. (also known as Valtriks, Valtrixx, Waltrix, Baltrix) delivers advanced industrial additives, corrosion-resistant coatings, and custom chemical solutions in Vadodara, Gujarat. ISO 9001:2015 certified.',
  keywords: [
    'Valtrix Advance Material Pvt. Ltd.',
    'Valtriks',
    'Valtrixx',
    'Waltrix',
    'Baltrix',
    'Valtrics',
    'industrial additives',
    'corrosion resistant coatings',
    'Rust Converter VAM RC 01',
    'Polyurethane Building Blocks',
    'High Build Coatings',
    'Vadodara Gujarat'
  ],
  openGraph: {
    title: 'Valtrix Advance Material Pvt. Ltd. | Industrial Additives & Coatings Vadodara',
    description: 'Valtrix Advance Material Pvt. Ltd. (also known as Valtriks, Valtrixx, Waltrix, Baltrix) delivers advanced industrial additives, corrosion-resistant coatings, and custom chemical solutions in Vadodara, Gujarat. ISO 9001:2015 certified.',
    url: 'https://www.valtrixmaterials.com',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.valtrixmaterials.com',
  },
};

export default function Home() {
  const industries = getIndustries();
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TestimonialsSection />
      <CTABanner />
      <HomeIndustriesSection industries={industries} />
      <PrefetchDynamicSections />
    </div>
  );
}

import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/hero/hero-section';
import { TestimonialsSkeleton } from '@/components/skeletons/testimonials-skeleton';
import { CTASkeleton } from '@/components/skeletons/cta-skeleton';
import { PrefetchDynamicSections } from '@/components/prefetch-dynamic-sections';

import { TrustedBy } from '@/components/sections/trusted-by';

// Lazy-load below-the-fold sections — reduces initial JS bundle
const TestimonialsSection = dynamic(
  () => import('@/components/sections/testimonials').then((m) => m.TestimonialsSection),
  { ssr: true, loading: () => <TestimonialsSkeleton /> }
);

const CTABanner = dynamic(
  () => import('@/components/sections/cta-banner').then((m) => m.CTABanner),
  { ssr: true, loading: () => <CTASkeleton /> }
);

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TrustedBy />
      <TestimonialsSection />
      <CTABanner />
      <PrefetchDynamicSections />
    </div>
  );
}

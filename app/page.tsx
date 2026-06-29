import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/hero/hero-section';
import { TestimonialsSkeleton } from '@/components/skeletons/testimonials-skeleton';
import { CTASkeleton } from '@/components/skeletons/cta-skeleton';
import { SectionSkeleton } from '@/components/skeletons/section-skeleton';
import { PrefetchDynamicSections } from '@/components/prefetch-dynamic-sections';

// Lazy-load below-the-fold sections — reduces initial JS bundle
const TestimonialsSection = dynamic(
  () => import('@/components/sections/testimonials').then((m) => m.TestimonialsSection),
  { ssr: true, loading: () => <TestimonialsSkeleton /> }
);

const SolutionsSection = dynamic(
  () => import('@/components/sections/solutions').then((m) => m.SolutionsSection),
  { ssr: true, loading: () => <SectionSkeleton /> }
);

const CTABanner = dynamic(
  () => import('@/components/sections/cta-banner').then((m) => m.CTABanner),
  { ssr: true, loading: () => <CTASkeleton /> }
);

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TestimonialsSection />
      <SolutionsSection />
      <CTABanner />
      <PrefetchDynamicSections />
    </div>
  );
}

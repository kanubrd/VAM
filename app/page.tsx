import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/hero/hero-section';

// Lazy-load below-the-fold sections — reduces initial JS bundle
const TestimonialsSection = dynamic(
  () => import('@/components/sections/testimonials').then((m) => m.TestimonialsSection),
  { ssr: true }
);

const CTABanner = dynamic(
  () => import('@/components/sections/cta-banner').then((m) => m.CTABanner),
  { ssr: true }
);

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TestimonialsSection />
      <CTABanner />
    </div>
  );
}

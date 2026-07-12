import { Metadata } from 'next';
import { Suspense } from 'react';
import { SolutionsContent } from './solutions-content';

export const metadata: Metadata = {
  title: 'Materials Sourcing Solutions | Supply Chain Intelligence – Valtrix (Vadodara, India)',
  description: 'Industrial materials sourcing and logistics coordination from Vadodara, India. Optimize your metals, polymers, and chemical procurement cadence.',
  keywords: [
    'materials sourcing',
    'metals sourcing',
    'polymers sourcing',
    'coatings chemicals',
    'materials compliance',
    'multi-site fulfillment',
    'predictive reorder',
    'inventory intelligence'
  ],
  openGraph: {
    title: 'Materials Sourcing Solutions | Supply Chain Intelligence – Valtrix (Vadodara, India)',
    description: 'Industrial materials sourcing and logistics coordination from Vadodara, India. Optimize your metals, polymers, and chemical procurement cadence.',
    url: 'https://www.valtrixmaterials.com/solutions',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.valtrixmaterials.com/solutions',
  },
};

export default function SolutionsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#17A2B8] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#6B7280]">Loading solutions...</p>
        </div>
      </div>
    }>
      <SolutionsContent />
    </Suspense>
  );
}

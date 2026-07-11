import { Metadata } from 'next';
import { Suspense } from 'react';
import { SolutionsContent } from './solutions-content';

export const metadata: Metadata = {
  title: 'Materials Sourcing Solutions & Supply Chain Intelligence',
  description: 'Explore VAM VALTRIX materials sourcing and supply chain intelligence: Metals & Alloys, Polymers & Composites, Coatings & Surface Chemicals, Compliance, Multi-Site Fulfillment, and Predictive Reorder.',
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
    title: 'Materials Sourcing Solutions & Supply Chain Intelligence | VAM VALTRIX',
    description: 'Explore VAM VALTRIX materials sourcing and supply chain intelligence: Metals & Alloys, Polymers & Composites, Coatings & Surface Chemicals, Compliance, Multi-Site Fulfillment, and Predictive Reorder.',
    url: 'https://vamvaltrix.com/solutions',
    type: 'website',
  },
  alternates: {
    canonical: 'https://vamvaltrix.com/solutions',
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

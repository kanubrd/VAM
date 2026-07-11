import { Metadata } from 'next';
import { IndustriesContent } from './industries-content';

export const metadata: Metadata = {
  title: 'Target Industries - Custom Additive Engineering',
  description: 'Explore the key industries VAM VALTRIX serves: Automotive, Metal Working Fluids & Lubricants, Electroplating, and Surface Treatment.',
  keywords: [
    'industries served',
    'valtrix industries',
    'automotive chemistry',
    'metalworking fluids target market',
    'surface treatment industries'
  ],
  openGraph: {
    title: 'Target Industries - Custom Additive Engineering | VAM VALTRIX',
    description: 'Explore the key industries VAM VALTRIX serves: Automotive, Metal Working Fluids & Lubricants, Electroplating, and Surface Treatment.',
    url: 'https://vamvaltrix.com/industries',
    type: 'website',
  },
  alternates: {
    canonical: 'https://vamvaltrix.com/industries',
  },
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}

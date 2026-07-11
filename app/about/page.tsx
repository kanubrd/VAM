import { Metadata } from 'next';
import AboutContent from './about-content';

export const metadata: Metadata = {
  title: 'About Us - Advanced Materials Innovation',
  description: 'Learn about VAM VALTRIX - pioneering advanced materials & industrial chemicals since 2020. Our mission, vision & commitment to sustainable innovation in manufacturing solutions.',
  keywords: [
    'about valtrix',
    'advanced materials company',
    'industrial chemicals manufacturer',
    'materials innovation',
    'vadodara chemicals company',
    'specialty additives manufacturer'
  ],
  openGraph: {
    title: 'About VAM VALTRIX - Advanced Materials Innovation',
    description: 'Pioneering advanced materials & industrial chemicals since 2020. Mission-driven innovation in manufacturing solutions.',
    url: 'https://vamvaltrix.com/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://vamvaltrix.com/about',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}

import { Metadata } from 'next';
import { ContactContent } from './contact-content';

export const metadata: Metadata = {
  title: 'Contact Us - Get Sourcing Quote',
  description: 'Submit your industrial chemical and advanced material sourcing request to VAM VALTRIX. Talk to a specialist and receive a customized quote.',
  keywords: [
    'contact valtrix',
    'sourcing request',
    'chemical procurement quote',
    'materials pricing request',
    'specialty chemicals support'
  ],
  openGraph: {
    title: 'Contact Us - Get Sourcing Quote | VAM VALTRIX',
    description: 'Submit your industrial chemical and advanced material sourcing request to VAM VALTRIX. Talk to a specialist and receive a customized quote.',
    url: 'https://vamvaltrix.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://vamvaltrix.com/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}

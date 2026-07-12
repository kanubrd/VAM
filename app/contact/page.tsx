import { Metadata } from 'next';
import { ContactContent } from './contact-content';

export const metadata: Metadata = {
  title: 'Contact Us | Get Sourcing Quote – Valtrix (Vadodara, India)',
  description: 'Submit your industrial chemical and advanced material sourcing request to Valtrix in Vadodara, India. Talk to a specialist and receive a customized quote.',
  keywords: [
    'contact valtrix',
    'sourcing request',
    'chemical procurement quote',
    'materials pricing request',
    'specialty chemicals support'
  ],
  openGraph: {
    title: 'Contact Us | Get Sourcing Quote – Valtrix (Vadodara, India)',
    description: 'Submit your industrial chemical and advanced material sourcing request to Valtrix in Vadodara, India. Talk to a specialist and receive a customized quote.',
    url: 'https://www.valtrixmaterials.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.valtrixmaterials.com/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}

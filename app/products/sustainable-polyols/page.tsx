import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ArrowRight, CheckCircle, FileText } from 'lucide-react';
import { Section } from '@/components/ui/section';

export const metadata: Metadata = {
  title: 'Bio Based Polyols Supplier India | Sustainable Specialty Polyols – Valtrix (Vadodara, India)',
  description: 'Valtrix is a leading bio based polyols supplier in India, manufacturing sustainable eco-polyols and green polymer additives in Vadodara.',
  keywords: [
    'Bio Based Polyols Supplier India',
    'Sustainable Polyols Vadodara',
    'cashew nutshell liquid polyols',
    'eco polyols supplier',
    'bio-polyurethane chemicals India'
  ],
  openGraph: {
    title: 'Bio Based Polyols Supplier India | Eco Polyols – Valtrix',
    description: 'Eco-friendly sustainable polyols, cashew nutshell liquid (CNSL) based polyols, and green polymer additives supplied by Valtrix in Vadodara, India.',
    url: 'https://www.valtrixmaterials.com/products/sustainable-polyols',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.valtrixmaterials.com/products/sustainable-polyols',
  },
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Bio-Based Sustainable Polyols',
  image: 'https://www.valtrixmaterials.com/valtrix-logo.png',
  description: 'Renewable CNSL-based cardanol polyols, castor-based polyols, and eco-friendly polyurethane raw materials.',
  brand: {
    '@type': 'Brand',
    name: 'Valtrix'
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '12000',
    highPrice: '380000',
    offerCount: '8',
    priceRange: 'INR 12000 - INR 380000'
  }
};

export default function SustainablePolyolsPage() {
  return (
    <div className="pt-20 sm:pt-24 bg-[#F8FAFB] min-h-screen">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 font-medium font-sans">
          <Link href="/" className="hover:text-[#17A2B8] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-gray-400">Products</span>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-[#2C3E50] truncate font-semibold">Sustainable Polyols</span>
        </nav>
      </div>

      {/* Hero Section */}
      <Section className="bg-white border-b border-gray-100 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F7FA] border border-[#D1F2F7] text-xs font-bold text-[#17A2B8] mb-4 uppercase tracking-wider font-sans">
            Green Chemistry Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2C3E50] mb-6 leading-tight tracking-tight">
            Bio Based Polyols Supplier India
          </h1>
          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed mb-8 max-w-3xl">
            Valtrix is a leading bio based polyols supplier in India, manufacturing sustainable specialty polyols derived from cashew nut shell liquid (CNSL) and castor oil. Sourced and processed in Vadodara, India, our polyols serve as highly resilient, eco-friendly replacements in polyurethane formulations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact?product=sustainable-polyols" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#17A2B8] hover:bg-[#0D7A8C] text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] min-h-[48px] text-sm ease-in-out"
            >
              Order Evaluation Sample <ArrowRight size={16} />
            </Link>
            <Link 
              href="/resources/downloads?product=polymers-composites"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-gray-300 text-[#2C3E50] hover:text-[#17A2B8] hover:border-[#17A2B8] font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] min-h-[48px] text-sm ease-in-out"
            >
              <FileText size={18} /> Download Tech Data Sheets
            </Link>
          </div>
        </div>
      </Section>

      {/* Main Specs & Applications */}
      <Section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Specifications */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-150 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 ease-in-out">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2C3E50] mb-6 border-b border-gray-100 pb-4">
              Technical Specifications
            </h2>
            <div className="space-y-4">
              {[
                'Bio-based Content: >75% renewable carbon source',
                'Hydroxyl Value: 180 to 290 mg KOH/g (custom grade)',
                'Viscosity Range: 1500 to 3500 cSt @ 25°C',
                'Water Content: Ultra-low moisture content (<0.08% wt)',
                'Functionality Index: Optimized diol/triol mix for high mechanical resilience'
              ].map((spec) => {
                const [label, ...valueParts] = spec.split(':');
                const value = valueParts.join(':');
                return (
                  <div key={spec} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#17A2B8] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-sans">
                      <strong className="text-[#2C3E50] font-bold">{label}:</strong>{value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Applications & Industries */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-150 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 ease-in-out flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#2C3E50] mb-6 border-b border-gray-100 pb-4">
                Key Applications
              </h2>
              <div className="grid sm:grid-cols-2 gap-3.5 mb-6">
                {['Polyurethane Foams', 'Sustainable Floor Coatings', 'Bio-based Elastomers', 'Green Adhesives & Sealants'].map((app) => (
                  <div key={app} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#F8FAFB] border border-gray-150">
                    <span className="w-2 h-2 rounded-full bg-[#17A2B8] shrink-0" />
                    <span className="text-sm font-bold text-[#2C3E50] leading-none">{app}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold text-[#2C3E50] mb-4">
                Target Industries Served
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed font-sans mb-4">
                Flexible and rigid polyurethane foam manufacturers, construction coating companies, shoe sole developers, and packaging materials compounding industries in India.
              </p>
            </div>
            
            <div className="p-4 bg-[#E6F7FA] border border-[#D1F2F7] rounded-xl text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              <strong>Looking for custom hydroxyl value specifications?</strong> Our green chemical R&D group in Vadodara can formulate custom polyols targeting specific curing rates.
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

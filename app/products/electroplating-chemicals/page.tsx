import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ArrowRight, CheckCircle, FileText } from 'lucide-react';
import { Section } from '@/components/ui/section';

export const metadata: Metadata = {
  title: 'Electroplating Chemicals Supplier India | Metal Plating & Finishing – Valtrix (Vadodara, India)',
  description: 'Valtrix is a trusted electroplating chemicals supplier in India, manufacturing premium acid zinc, nickel, copper, and tin plating solutions in Vadodara.',
  keywords: [
    'Electroplating Chemicals Supplier India',
    'Metal Plating Chemicals Vadodara',
    'zinc plating additives',
    'decorative nickel plating',
    'acid copper chemicals India'
  ],
  openGraph: {
    title: 'Electroplating Chemicals Supplier India | Plating Chemistry – Valtrix',
    description: 'High-purity electroplating additives, brighteners, and metal finishing chemicals manufactured by Valtrix in Vadodara, India.',
    url: 'https://www.valtrixmaterials.com/products/electroplating-chemicals',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.valtrixmaterials.com/products/electroplating-chemicals',
  },
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Electroplating Chemicals & Additives',
  image: 'https://www.valtrixmaterials.com/valtrix-logo.png',
  description: 'High-purity zinc, nickel, and copper plating additives, brighteners, and cleaners for metal finishing industries.',
  brand: {
    '@type': 'Brand',
    name: 'Valtrix'
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '7500',
    highPrice: '250000',
    offerCount: '15',
    priceRange: 'INR 7500 - INR 250000'
  }
};

export default function ElectroplatingChemicalsPage() {
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
          <span className="text-[#2C3E50] truncate font-semibold">Electroplating Chemicals</span>
        </nav>
      </div>

      {/* Hero Section */}
      <Section className="bg-white border-b border-gray-100 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F7FA] border border-[#D1F2F7] text-xs font-bold text-[#17A2B8] mb-4 uppercase tracking-wider font-sans">
            Precision Metal Finishing
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2C3E50] mb-6 leading-tight tracking-tight">
            Electroplating Chemicals Supplier India
          </h1>
          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed mb-8 max-w-3xl">
            Valtrix supplies high-purity electroplating salts, acid brighteners, post-treatment passivations, and surface preparation cleaners. Our chemical formulations ensure high thickness uniformity and superior corrosion resistance for plating workshops across India.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact?product=electroplating-chemicals" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#17A2B8] hover:bg-[#0D7A8C] text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] min-h-[48px] text-sm ease-in-out"
            >
              Request Catalog / Inquire <ArrowRight size={16} />
            </Link>
            <Link 
              href="/resources/downloads?product=coatings-chemicals"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-gray-300 text-[#2C3E50] hover:text-[#17A2B8] hover:border-[#17A2B8] font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] min-h-[48px] text-sm ease-in-out"
            >
              <FileText size={18} /> Download MSDS / SDS
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
                'Chemical Purity: >99.8% pure grade electro-salts',
                'Plating Thickness Range: 5 to 25 microns (customizable)',
                'Bath Stability Index: Extended life brighteners with high thermal stability',
                'pH Range Adaptability: Highly buffered formulas (pH 1.2 to 8.5)',
                'Metal Content: Strict quality-controlled elemental copper and zinc densities'
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
                {['Acid Zinc Plating', 'Decorative Nickel Coating', 'Acid Copper Plating', 'Industrial Tin Plating'].map((app) => (
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
                Automotive fasteners, electrical hardware manufacturers, jewelry plating, and anti-corrosive structural fittings builders.
              </p>
            </div>
            
            <div className="p-4 bg-[#E6F7FA] border border-[#D1F2F7] rounded-xl text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              <strong>Need help optimizing your bath setup parameters?</strong> Our electrochemistry experts in Vadodara provide full bath analysis and brightener calibration reports.
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

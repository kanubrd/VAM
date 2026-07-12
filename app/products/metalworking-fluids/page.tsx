import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ArrowRight, CheckCircle, FileText } from 'lucide-react';
import { Section } from '@/components/ui/section';

export const metadata: Metadata = {
  title: 'Metalworking Fluids Manufacturer India | Industrial Lubricants & Coolants – Valtrix (Vadodara, India)',
  description: 'Valtrix is a leading metalworking fluids manufacturer in India, offering high-performance industrial coolants, cutting fluids, and soluble oils in Vadodara.',
  keywords: [
    'Metalworking Fluids Manufacturer India',
    'Industrial Lubricants Vadodara',
    'soluble cutting oils',
    'synthetic coolants India',
    'machining fluids Vadodara'
  ],
  openGraph: {
    title: 'Metalworking Fluids Manufacturer India | Industrial Lubricants – Valtrix',
    description: 'High-performance metalworking coolants, soluble cutting oils, and synthetic lubricants manufactured by Valtrix in Vadodara, India.',
    url: 'https://www.valtrixmaterials.com/products/metalworking-fluids',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.valtrixmaterials.com/products/metalworking-fluids',
  },
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Industrial Metalworking Fluids',
  image: 'https://www.valtrixmaterials.com/valtrix-logo.png',
  description: 'Premium synthetic, semi-synthetic, and soluble cutting oils for heavy industrial metalworking operations.',
  brand: {
    '@type': 'Brand',
    name: 'Valtrix'
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '5000',
    highPrice: '150000',
    offerCount: '12',
    priceRange: 'INR 5000 - INR 150000'
  }
};

export default function MetalworkingFluidsPage() {
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
          <span className="text-[#2C3E50] truncate font-semibold">Metalworking Fluids</span>
        </nav>
      </div>

      {/* Hero Section */}
      <Section className="bg-white border-b border-gray-100 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F7FA] border border-[#D1F2F7] text-xs font-bold text-[#17A2B8] mb-4 uppercase tracking-wider font-sans">
            Specialty Industrial Chemistry
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2C3E50] mb-6 leading-tight tracking-tight">
            Metalworking Fluids Manufacturer India
          </h1>
          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed mb-8 max-w-3xl">
            Valtrix manufactures next-generation metalworking coolants, soluble cutting oils, and synthetic lubricants engineered for extreme pressure operations, high dilution stability, and maximum tool longevity. Sourced and processed at our state-of-the-art facility in Vadodara, Gujarat.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact?product=metalworking-fluids" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#17A2B8] hover:bg-[#0D7A8C] text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] min-h-[48px] text-sm ease-in-out"
            >
              Inquire Sourcing / Get Quote <ArrowRight size={16} />
            </Link>
            <Link 
              href="/resources/downloads?product=metals-alloys"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-gray-300 text-[#2C3E50] hover:text-[#17A2B8] hover:border-[#17A2B8] font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] min-h-[48px] text-sm ease-in-out"
            >
              <FileText size={18} /> Download Tech Sheets
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
                'Purity Index: Grade-A Synthetic base compounds',
                'Viscosity Range: Optimized 15 cSt to 45 cSt @ 40°C',
                'Corrosion Protection: >72 hours (ASTM D665)',
                'Dilution Ratio Stability: 1:10 to 1:30 in hard water',
                'Foam Control: Zero foam buildup in high pressure tooling'
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
                {['CNC Turning & Milling', 'High-Speed Drilling', 'Heavy Gear Grinding', 'Metal Broaching'].map((app) => (
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
                Automotive assembly lines, Tier-1 metal component fabricators, heavy equipment manufacturers, and defense production units across India.
              </p>
            </div>
            
            <div className="p-4 bg-[#E6F7FA] border border-[#D1F2F7] rounded-xl text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              <strong>Need a customized viscosity or anti-wear formulation?</strong> Our R&D center in Vadodara conducts specialized testing for specific manufacturing lines.
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

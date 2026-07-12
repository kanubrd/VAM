import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ArrowRight, CheckCircle, FileText } from 'lucide-react';
import { Section } from '@/components/ui/section';

export const metadata: Metadata = {
  title: 'Surface Treatment Chemicals India | Rust Preventives & Phosphating – Valtrix (Vadodara, India)',
  description: 'Valtrix is a leading manufacturer of surface treatment chemicals in India, producing zinc phosphating, rust converters, degreasers, and metal passivations in Vadodara.',
  keywords: [
    'Surface Treatment Chemicals India',
    'Rust Preventives Vadodara',
    'degreasing chemicals',
    'zinc phosphating India',
    'metal passivation chemicals'
  ],
  openGraph: {
    title: 'Surface Treatment Chemicals India | Passivation & Phosphating – Valtrix',
    description: 'Specialty surface treatment chemistry, rust preventives, and metal cleaning solutions manufactured by Valtrix in Vadodara, India.',
    url: 'https://www.valtrixmaterials.com/products/surface-treatments',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.valtrixmaterials.com/products/surface-treatments',
  },
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Surface Treatment Chemicals',
  image: 'https://www.valtrixmaterials.com/valtrix-logo.png',
  description: 'Zinc and manganese phosphating chemicals, rust preventives, degreasers, and pickling inhibitors.',
  brand: {
    '@type': 'Brand',
    name: 'Valtrix'
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '6000',
    highPrice: '180000',
    offerCount: '10',
    priceRange: 'INR 6000 - INR 180000'
  }
};

export default function SurfaceTreatmentsPage() {
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
          <span className="text-[#2C3E50] truncate font-semibold">Surface Treatments</span>
        </nav>
      </div>

      {/* Hero Section */}
      <Section className="bg-white border-b border-gray-100 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F7FA] border border-[#D1F2F7] text-xs font-bold text-[#17A2B8] mb-4 uppercase tracking-wider font-sans">
            Metal Surface Modification
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2C3E50] mb-6 leading-tight tracking-tight">
            Surface Treatment Chemicals India
          </h1>
          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed mb-8 max-w-3xl">
            Valtrix engineers specialized surface treatment chemistry, including rust convertors, heavy-duty alkaline degreasers, micro-crystalline zinc phosphating, and metal passivators to prepare metallic substrates for high-adhesion coating and painting.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact?product=surface-treatments" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#17A2B8] hover:bg-[#0D7A8C] text-white font-bold rounded-lg transition-colors min-h-[48px] shadow-sm text-sm"
            >
              Get Custom Quote / Contact Us <ArrowRight size={16} />
            </Link>
            <Link 
              href="/resources/downloads?product=coatings-chemicals"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-gray-200 text-[#2C3E50] hover:text-[#17A2B8] hover:border-[#17A2B8] font-bold rounded-lg transition-all min-h-[48px] text-sm"
            >
              <FileText size={18} /> Download Technical Sheets
            </Link>
          </div>
        </div>
      </Section>

      {/* Main Specs & Applications */}
      <Section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Specifications */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2C3E50] mb-6 border-b border-gray-100 pb-4">
              Technical Specifications
            </h2>
            <div className="space-y-4">
              {[
                'Coat Thickness: 1.5 to 4.5 g/m² Zinc Phosphate film',
                'Phosphating Type: Microcrystalline immersion & spray grades',
                'Salt Spray Resistance: Up to 240 hours (ASTM B117)',
                'Drying Speed: Rapid dry and flash rust preventive formula',
                'Substrate Compatibility: Iron, Carbon Steel, Aluminum, and Galvanized Sheet'
              ].map((spec) => (
                <div key={spec} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#17A2B8] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-sans font-medium">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications & Industries */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#2C3E50] mb-6 border-b border-gray-100 pb-4">
                Key Applications
              </h2>
              <div className="grid sm:grid-cols-2 gap-3.5 mb-6">
                {['Metal Degreasing', 'Zinc Phosphating', 'Acid De-rusting', 'Passivation Pre-treatment'].map((app) => (
                  <div key={app} className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-[#F8FAFB] border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-[#17A2B8] shrink-0" />
                    <span className="text-sm font-bold text-[#2C3E50] leading-none">{app}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold text-[#2C3E50] mb-4">
                Target Industries Served
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed font-sans mb-4">
                Steel mills, automotive body-in-white shops, appliance manufacturers, structural metal fabricators, and pipe manufacturers in India.
              </p>
            </div>
            
            <div className="p-4 bg-[#E6F7FA] border border-[#D1F2F7] rounded-xl text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              <strong>Need a REACH/RoHS-compliant hexavalent chromium-free passivation?</strong> Valtrix manufactures eco-safe trivalent chromium and completely chrome-free sealers.
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

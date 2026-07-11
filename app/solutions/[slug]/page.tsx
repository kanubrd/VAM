import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronRight, CheckCircle, FileText } from 'lucide-react';
import { Section } from '@/components/ui/section';

type ProductDetail = {
  id: string;
  title: string;
  category: string;
  overview: string;
  image: string;
  specs: string[];
  applications: string[];
};

const productsData: Record<string, ProductDetail> = {
  'metals-alloys': {
    id: 'metals-alloys',
    title: 'Metals & Alloys Sourcing',
    category: 'Sourcing Solutions',
    overview: 'Our metals & alloys sourcing covers the full spectrum of industrial-grade materials — from standard carbon steel to exotic titanium alloys. Every SKU comes with full mill certification and traceable heat numbers.',
    image: '/images/solutions/metals-alloys.jpg',
    specs: ['Carbon Steel (A36, A572)', 'Stainless Steel (304, 316, 17-4PH)', 'Aluminum (6061, 7075)', 'Titanium (Grade 2, Grade 5)', 'Nickel Alloys (Inconel, Hastelloy)'],
    applications: ['Structural fabrication', 'Aerospace components', 'Automotive parts', 'Pressure vessels'],
  },
  'polymers-composites': {
    id: 'polymers-composites',
    title: 'Polymers & Composites',
    category: 'Sourcing Solutions',
    overview: 'Engineering-grade thermoplastics and high-performance fiber-reinforced composites sourced from verified manufacturers with full spec documentation.',
    image: '/images/solutions/polymers-composites.jpg',
    specs: ['PEEK, PPS, PTFE', 'Carbon Fiber Reinforced Polymer', 'Glass Fiber Composites', 'Kevlar / Aramid', 'HDPE, UHMWPE'],
    applications: ['Aerospace structures', 'Automotive body panels', 'Marine components', 'Industrial machinery'],
  },
  'coatings-surface-chemicals': {
    id: 'coatings-surface-chemicals',
    title: 'Coatings & Surface Chemicals',
    category: 'Sourcing Solutions',
    overview: 'Industrial coatings, adhesives, sealants, and process chemicals from certified manufacturers — all with SDS documentation and compliance flags built in.',
    image: '/images/solutions/coatings-chemicals.jpg',
    specs: ['Epoxy coatings', 'Polyurethane topcoats', 'Thermal barrier coatings', 'Anti-corrosion primers', 'Industrial adhesives'],
    applications: ['Pipeline protection', 'Structural steel', 'Marine environments', 'High-temp equipment'],
  },
  'compliance-certification': {
    id: 'compliance-certification',
    title: 'Compliance & Certification Management',
    category: 'Supply Chain Intelligence',
    overview: 'Automated cert validation, conflict minerals reporting, REACH/RoHS flagging, and DFARS tracking — all managed in one place so your audits are always ready.',
    image: '/images/solutions/compliance-certs.jpg',
    specs: ['ISO 9001 documentation', 'REACH / RoHS compliance', 'DFARS material tracking', 'Conflict minerals (CMRT)', 'Mill test reports'],
    applications: ['Defense supply chains', 'Electronics manufacturing', 'Medical devices', 'Aerospace Tier suppliers'],
  },
  'multi-site-fulfillment': {
    id: 'multi-site-fulfillment',
    title: 'Multi-Site Fulfillment Coordination',
    category: 'Supply Chain Intelligence',
    overview: 'Coordinates split fulfillment, site-specific delivery scheduling, and unified invoicing across all your locations under a single account.',
    image: '/images/solutions/multi-site-fulfillment.jpg',
    specs: ['Split shipment coordination', 'Site-specific delivery windows', 'Unified invoicing', 'Multi-location tracking', 'Single account dashboard'],
    applications: ['National manufacturers', 'Construction project sites', 'Global OEMs', 'Distributed warehouses'],
  },
  'inventory-intelligence': {
    id: 'inventory-intelligence',
    title: 'Predictive Reorder & Inventory Intelligence',
    category: 'Supply Chain Intelligence',
    overview: 'Connect your production schedule to your procurement cadence — before a shortage hits your floor. Consumption-based alerts and reorder planning built in.',
    image: '/images/solutions/predictive-reorder.jpg',
    specs: ['Consumption-based alerts', 'Production schedule sync', 'Shortage risk flagging', 'Reorder cadence planning', 'Inventory intelligence dashboard'],
    applications: ['High-turnover production lines', 'JIT manufacturing', 'Seasonal demand planning', 'MRO management'],
  },
};

export function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData[slug];
  if (!product) return {};

  return {
    title: `${product.title} - Valtrix Sourcing Solutions`,
    description: product.overview,
    alternates: {
      canonical: `https://vamvaltrix.com/solutions/${slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = productsData[slug];

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-20 sm:pt-24 bg-[#F8FAFB] min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 font-medium font-sans">
          <Link href="/" className="hover:text-[#17A2B8] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-gray-400" />
          <Link href="/solutions" className="hover:text-[#17A2B8] transition-colors">Solutions</Link>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-[#2C3E50] truncate">{product.title}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <Section className="bg-white border-b border-gray-100 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Info */}
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F7FA] border border-[#D1F2F7] text-xs font-bold text-[#17A2B8] mb-4 uppercase tracking-wider font-sans">
              {product.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2C3E50] mb-6 leading-tight tracking-tight">
              {product.title}
            </h1>
            <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed mb-8">
              {product.overview}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#17A2B8] hover:bg-[#0D7A8C] text-white font-bold rounded-lg transition-colors min-h-[48px] shadow-sm"
              >
                Request a Quote <ArrowRight size={16} />
              </Link>
              <Link 
                href={`/resources/downloads?product=${product.id}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-gray-200 text-[#2C3E50] hover:text-[#17A2B8] hover:border-[#17A2B8] font-bold rounded-lg transition-all min-h-[48px]"
              >
                <FileText size={18} /> Download SDS / TDS
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-64 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden border-2 border-gray-100 shadow-sm bg-gray-50">
            <Image 
              src={product.image} 
              alt={product.title}
              fill
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Details Section */}
      <Section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Specifications */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2C3E50] mb-6 border-b border-gray-100 pb-4">
              Capabilities & Specifications
            </h2>
            <div className="space-y-4">
              {product.specs.map((spec) => (
                <div key={spec} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#17A2B8] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-sans font-medium">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2C3E50] mb-6 border-b border-gray-100 pb-4">
              Key Applications
            </h2>
            <div className="grid sm:grid-cols-2 gap-3.5">
              {product.applications.map((app) => (
                <div key={app} className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-[#F8FAFB] border border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-[#17A2B8] shrink-0" />
                  <span className="text-sm font-bold text-[#2C3E50] leading-none">{app}</span>
                </div>
              ))}
            </div>
            
            {/* Callout box */}
            <div className="mt-8 p-5 bg-[#E6F7FA] border border-[#D1F2F7] rounded-xl">
              <h3 className="font-bold text-[#2C3E50] text-sm sm:text-base mb-2">Need a custom specification?</h3>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                VAM VALTRIX offers specialty custom sourcing and formulation development for unique manufacturing tolerances or chemical purity requirements.
              </p>
              <Link href="/contact" className="mt-3.5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#17A2B8] hover:text-[#0D7A8C] transition-colors">
                Contact our sourcing team <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

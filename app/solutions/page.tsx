'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, SectionTitle } from '@/components/ui/section';
import { Reveal } from '@/components/animations/reveal';
import { solutions } from '@/data/solutions';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

const productImages: Record<string, string> = {
  'suscat-i':       '/suscat.jpg',
  'vamshield-90':   '/vamshield-90.png',
  'suspol-125':     '/suspol-125.png',
  'vam-rc-01':      '/vam-rc-01.png',
  'vam-bs-01':      '/vam-bs-01.png',
  'vam-ac-01-02':   '/placeholder.jpg',
};

const applicationImages: Record<string, string> = {
  'suscat-i':       '/suscat-application.png',
  'vamshield-90':   '/vamshield-90.png',
  'suspol-125':     '/suspol-125.png',
  'vam-rc-01':      '/vam-rc-01.png',
  'vam-bs-01':      '/vam-bs-01.png',
  'vam-ac-01-02':   '/placeholder.jpg',
};

const productDetails: Record<string, { overview: string; specs: string[]; applications: string[] }> = {
  'suscat-i': {
    overview: 'SusCat-I is a high-performance cationic polymer designed for industrial formulations requiring exceptional efficiency at low dosage levels. The product exhibits excellent water solubility and delivers superior performance across metalworking, electroplating, and oilfield applications.',
    specs: [
      'Product Type: Cationic Polymer',
      'Appearance: Clear to cloudy amber viscous liquid',
      'Solubility: Highly soluble in water',
      'Performance: Highly effective at very low dosage levels',
      'Application: Multiple industrial formulations',
    ],
    applications: [
      'Electroplating Industry (levelling & brightening agent)',
      'Metal Working Fluids (tramp oil separation)',
      'De-emulsifier Applications',
      'Oilfield Applications (scale & corrosion inhibition)',
      'Industrial Water Treatment',
      'Specialty Chemical Formulations',
    ],
  },
  'vamshield-90': {
    overview: 'VAMShield-90 is an advanced ash-free corrosion inhibitor designed for multi-metal systems and high-performance industrial fluid applications. It provides outstanding corrosion protection, excellent hard water compatibility, and superior efficiency even at low dosage levels.',
    specs: [
      'Product Type: Ash-Free Corrosion Inhibitor',
      'Appearance: White Powder/Granules',
      'Compatibility: Suitable for multi-metal systems',
      'Foam Characteristics: Extremely low foaming with excellent air release',
      'Water Compatibility: Excellent performance in hard water',
      'Efficiency: Highly effective at very low dosage levels',
    ],
    applications: [
      'Water-Based Lubricants',
      'Metal Working Fluids',
      'Biodegradable Hydraulic Fluids (HFS)',
      'Metalworking Industry',
      'Industrial Lubricants',
      'Hydraulic Systems',
      'Manufacturing & Machining',
      'Industrial Maintenance Fluids',
      'Specialty Chemical Formulations',
    ],
  },
  'suspol-125': {
    overview: 'SusPol-125 is a bio-based, castor oil-derived solvent-free polyol engineered to deliver exceptional flexibility, adhesion, and chemical resistance. Developed with sustainability at its core, it is an ideal solution for advanced coating and adhesive applications requiring high performance and environmental responsibility.',
    specs: [
      'Product Type: Bio-Based Solvent-Free Polyol',
      'Source: Renewable Castor Oil',
      'Viscosity: Medium Viscosity',
      'Chemical Structure: Contains both ether and ester functional groups',
      'Flexibility: Excellent',
      'Adhesion: Superior',
      'Chemical Resistance: High',
      'Sustainability: Eco-friendly composition',
    ],
    applications: [
      'Anti-Corrosion Coatings',
      'Industrial, Commercial & Residential Flooring',
      'Waterproof Coatings',
      'Adhesives & Sealants',
      'Protective Coatings',
      'Construction & Infrastructure',
      'Storage Tanks & Pipelines',
      'Sustainable Chemical Solutions',
    ],
  },
  'vam-rc-01': {
    overview: 'VAM RC-01 is an advanced rust converter and corrosion prevention additive that reacts directly with rust (ferric oxide) and converts it into a stable ferrous protective layer. It provides long-term passivation and enables effective coating application even on poorly prepared or rusted metal surfaces.',
    specs: [
      'Product Type: Rust Converter & Corrosion Protection Additive',
      'Appearance: Milky White Liquid',
      'Technology: Chemical rust conversion and passivation',
      'Compatibility: Suitable for waterborne coating systems',
      'Recommended for: Acrylic, Alkyd, Epoxy, PU coatings',
      'Surface Preparation: Minimal required',
      'Performance: Works on both rusted and clean metal surfaces',
    ],
    applications: [
      'Rusted Steel Structures',
      'Protective Coatings',
      'Industrial Maintenance',
      'Infrastructure & Heavy Equipment',
      'Bridges & Pipelines',
      'Industrial Machinery',
      'Storage Tanks',
      'Structural Steel',
      'Marine & Offshore',
      'Oil & Gas',
      'Heavy Equipment Manufacturing',
    ],
  },
  'vam-bs-01': {
    overview: 'VAM BS-01 is an advanced multifunctional additive designed to improve the performance, texture, and stability of personal care formulations. It enhances the sensory experience and provides excellent compatibility with various cosmetic ingredients.',
    specs: [
      'Product Type: Personal Care Additive',
      'Category: Cosmetic Ingredient',
      'Form: Liquid/Paste (depending on formulation)',
      'Compatibility: Suitable for various cosmetic formulations',
      'Function: Improves texture, stability, and performance',
      'Application: Rinse-off and leave-on formulations',
    ],
    applications: [
      'Skin Care Products (creams, lotions, moisturizers)',
      'Hair Care Products (shampoos, conditioners)',
      'Emulsions',
      'Premium Cosmetic Formulations',
      'Cosmetics',
      'Personal Care',
      'Skin Care',
      'Hair Care',
      'Specialty Formulations',
    ],
  },
  'vam-ac-01-02': {
    overview: 'VAM AC-01 and VAM AC-02 are high-performance methanation catalysts developed for efficient conversion of carbon monoxide (CO) and carbon dioxide (CO₂) with hydrogen into methane. These catalysts provide reliable operation, high conversion efficiency, and support sustainable energy systems.',
    specs: [
      'Product Type: Industrial Catalyst',
      'Category: Methanation Catalyst',
      'Function: Converts CO and CO₂ into methane',
      'Performance: High conversion efficiency and operational stability',
      'Application Environment: Industrial gas processing systems',
      'Variants: VAM AC-01 and VAM AC-02',
    ],
    applications: [
      'Biogas Upgrading',
      'Synthetic Natural Gas (SNG)',
      'Chemical Plants',
      'Renewable Energy Systems',
      'Power-to-Gas Technologies',
      'Carbon Utilization',
      'Gas Treatment',
      'Biogas Plants',
      'Synthetic Fuel Production',
      'Industrial Energy Systems',
    ],
  },
};

export default function SolutionsPage() {
  const [selected, setSelected] = useState<string | null>(null);

  const activeSolution = solutions.find((s) => s.id === selected);
  const activeDetails  = selected ? productDetails[selected] : null;
  const activeImage    = selected ? productImages[selected] : null;
  const activeApplicationImage = selected ? applicationImages[selected] : null;

  return (
    <div className="pt-16 sm:pt-20">

      {/* Hero */}
      <Section className="bg-white py-12 sm:py-16 md:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#E6F7FA] border border-[#D1F2F7] mb-5 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#17A2B8]" />
            <span className="text-sm font-medium text-[#2C3E50]">Our Product Range</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] mb-4 sm:mb-6 leading-tight">
            One Platform. Every Material.{' '}
            <span className="gradient-text">Full Visibility.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#6B7280]">
            Click any product below to explore full details, specifications, and applications.
          </p>
        </motion.div>
      </Section>

      {/* Main: List + Detail */}
      <Section className="bg-[#F8FAFB]" id="solutions">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* ── Left: Product List ── */}
          <div className="lg:w-80 shrink-0">
            <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-3 sm:mb-4">Select a Product</p>
            {/* Mobile: horizontal scroll row; Desktop: vertical stack */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0 lg:space-y-0 snap-x snap-mandatory lg:snap-none">
              {solutions.map((solution, idx) => {
                const Icon = solution.icon;
                const isActive = selected === solution.id;
                return (
                  <Reveal key={solution.id} delay={idx * 0.07}>
                    <motion.button
                      whileHover={{ x: 4 }}
                      onClick={() => setSelected(isActive ? null : solution.id)}
                      className={`w-64 lg:w-full shrink-0 snap-start text-left rounded-2xl border-2 transition-all duration-200 overflow-hidden group ${
                        isActive
                          ? 'border-[#17A2B8] bg-white shadow-md'
                          : 'border-gray-100 bg-white hover:border-[#D1F2F7] hover:shadow-sm'
                      }`}
                    >
                      {/* Card image strip */}
                      <div className={`relative h-24 sm:h-28 overflow-hidden bg-white flex items-center justify-center`}>
                        <img src={productImages[solution.id]} alt={solution.title} className={`w-full h-full object-contain ${solution.id === 'vamshield-90' ? 'p-1' : 'p-2'}`} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${isActive ? 'bg-[#E6F7FA]' : 'bg-gray-100'}`}>
                            <Icon size={20} className={isActive ? 'text-[#17A2B8]' : 'text-gray-600'} />
                          </div>
                        </div>
                      </div>
                      {/* Card text */}
                      <div className="p-3 sm:p-4 flex items-center justify-between">
                        <div className="min-w-0 flex-1">
                          <p className={`font-semibold text-sm ${isActive ? 'text-[#17A2B8]' : 'text-[#2C3E50]'}`}>{solution.title}</p>
                          <p className="text-xs text-[#6B7280] mt-0.5 line-clamp-1">{solution.description}</p>
                        </div>
                        <ArrowRight size={16} className={`shrink-0 ml-2 transition-transform duration-200 ${isActive ? 'text-[#17A2B8] translate-x-1' : 'text-gray-300 group-hover:text-[#17A2B8]'}`} />
                      </div>
                    </motion.button>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* ── Right: Detail Panel ── */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {!selected ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full min-h-[300px] sm:min-h-[400px] rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center p-8 sm:p-12"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#E6F7FA] flex items-center justify-center mb-4">
                    <ArrowLeft size={22} className="text-[#17A2B8]" />
                  </div>
                  <p className="text-base sm:text-lg font-semibold text-[#2C3E50] mb-2">Select a product</p>
                  <p className="text-sm text-[#6B7280]">Click any product card to view full details, specs, and applications.</p>
                </motion.div>
              ) : (
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-4"
                >
                  {/* ── Top block: Details left, Photo right ── */}
                  <div className="bg-white rounded-2xl border-2 border-[#D1F2F7] overflow-hidden shadow-sm">
                    <div className="grid md:grid-cols-2">
                      {/* Left: Product info */}
                      <div className="p-5 sm:p-8 border-b md:border-b-0 md:border-r border-[#E6F7FA]">
                        <div className="flex items-center gap-3 mb-4 sm:mb-5">
                          {activeSolution && (
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#E6F7FA] flex items-center justify-center shrink-0">
                              <activeSolution.icon size={20} className="text-[#17A2B8]" />
                            </div>
                          )}
                          <div>
                            <p className="text-xs font-semibold text-[#17A2B8] uppercase tracking-wider">Product Details</p>
                            <h2 className="text-lg sm:text-xl font-bold text-[#2C3E50]">{activeSolution?.title}</h2>
                          </div>
                        </div>
                        <p className="text-[#6B7280] text-sm leading-relaxed mb-4 sm:mb-5">{activeDetails?.overview}</p>
                        <div className="space-y-2">
                          {activeSolution?.features.map((f) => (
                            <div key={f} className="flex items-center gap-2">
                              <CheckCircle size={14} className="text-[#17A2B8] shrink-0" />
                              <span className="text-sm text-[#2C3E50]">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Right: Photo */}
                      <div className="relative h-48 sm:h-56 md:h-auto bg-white">
                        <img src={activeImage!} alt={activeSolution?.title} className="w-full h-full object-contain" />
                        <div className="absolute inset-0 flex items-end p-4 sm:p-5">
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Product Photo</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── Bottom block: Photo left, Specs right ── */}
                  <div className="bg-white rounded-2xl border-2 border-[#D1F2F7] overflow-hidden shadow-sm">
                    <div className="grid md:grid-cols-2">
                      {/* Left: Photo */}
                      <div className="relative h-48 sm:h-56 md:h-auto bg-white order-2 md:order-1">
                        <img src={activeApplicationImage!} alt="Application" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-end p-4 sm:p-5">
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Application Photo</span>
                        </div>
                      </div>
                      {/* Right: Specs + Applications */}
                      <div className="p-5 sm:p-8 order-1 md:order-2 border-b md:border-b-0 md:border-l border-[#E6F7FA]">
                        <div className="mb-5 sm:mb-6">
                          <p className="text-xs font-semibold text-[#17A2B8] uppercase tracking-wider mb-3">Specifications</p>
                          <div className="space-y-2">
                            {activeDetails?.specs.map((spec) => (
                              <div key={spec} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F8FAFB] border border-gray-100">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#17A2B8] shrink-0" />
                                <span className="text-sm text-[#2C3E50]">{spec}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#17A2B8] uppercase tracking-wider mb-3">Applications</p>
                          <div className="flex flex-wrap gap-2">
                            {activeDetails?.applications.map((app) => (
                              <span key={app} className="px-3 py-1 rounded-full bg-[#E6F7FA] border border-[#D1F2F7] text-xs font-medium text-[#2C3E50]">
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Link href="/contact" className="mt-5 sm:mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#17A2B8] text-white text-sm font-semibold hover:bg-[#0D7A8C] transition-colors min-h-[44px]">
                          Request a Quote <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Section>

      {/* Results */}
      <Section className="bg-white">
        <SectionTitle subtitle="PROVEN RESULTS" title="What You Can Expect" description="Numbers from manufacturers already running on VAM VALTRIX" />
        <div className="mt-8 sm:mt-12 space-y-4 max-w-3xl mx-auto">
          {[
            { benefit: '38% Average Lead Time Reduction',            description: 'Procurement cycles cut from weeks to days across metals, polymers, and coatings.' },
            { benefit: '97.4% On-Time Fulfillment Rate',             description: 'Earned across 99,000+ orders — not a marketing number.' },
            { benefit: '360° End-to-End Order Visibility',           description: 'From quote to delivery, every step is tracked and documented in your account.' },
            { benefit: '<4 hrs Average Response on Custom Requests', description: 'When you need something outside the catalog, our sourcing team moves fast.' },
          ].map((item, idx) => (
            <Reveal key={item.benefit} delay={idx * 0.1} direction="left">
              <motion.div whileHover={{ x: 6 }} className="flex gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#D1F2F7] hover:shadow-sm transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#E6F7FA] rounded-xl shrink-0">
                  <span className="text-[#17A2B8] font-bold text-base sm:text-lg">{idx + 1}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C3E50] mb-1 text-sm sm:text-base">{item.benefit}</h3>
                  <p className="text-[#6B7280] text-sm">{item.description}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-[#2C3E50] text-white text-center py-12 sm:py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">Get Started With a No-Commitment Sourcing Request</h2>
        <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Tell us what you need. We&apos;ll show you what we can source, at what price, and how fast — before you commit to anything.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg bg-[#17A2B8] text-white font-semibold hover:bg-[#0D7A8C] transition-colors min-h-[48px]">
          Request a Quote <ArrowRight size={18} />
        </Link>
      </Section>
    </div>
  );
}

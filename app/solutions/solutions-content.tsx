'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/animations/reveal';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Section, SectionTitle } from '@/components/ui/section';
import { solutions } from '@/data/solutions';

const productImages: Record<string, string> = {
  // TODO: Replace with real photo for Metals & Alloys Sourcing
  'metals-alloys':          '/images/solutions/metals-alloys.jpg',
  // TODO: Replace with real photo for Polymers & Composites
  'polymers-composites':    '/images/solutions/polymers-composites.jpg',
  // TODO: Replace with real photo for Coatings & Surface Chemicals
  'coatings-chemicals':     '/images/solutions/coatings-chemicals.jpg',
  // TODO: Replace with real photo for Compliance & Certification Management
  'compliance-certs':       '/images/solutions/compliance-certs.jpg',
  // TODO: Replace with real photo for Multi-Site Fulfillment Coordination
  'multi-site-fulfillment': '/images/solutions/multi-site-fulfillment.jpg',
  // TODO: Replace with real photo for Predictive Reorder & Inventory Intelligence
  'predictive-reorder':     '/images/solutions/predictive-reorder.jpg',
};

// Map card IDs to matching routes
const routeMap: Record<string, string> = {
  'metals-alloys':          'metals-alloys',
  'polymers-composites':    'polymers-composites',
  'coatings-chemicals':     'coatings-surface-chemicals',
  'compliance-certs':       'compliance-certification',
  'multi-site-fulfillment': 'multi-site-fulfillment',
  'predictive-reorder':     'inventory-intelligence',
};

export function SolutionsContent() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero */}
      <Section className="bg-white py-16 sm:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="max-w-4xl mx-auto text-center px-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#E6F7FA] border border-[#D1F2F7] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#17A2B8]" />
            <span className="text-sm font-semibold text-[#2C3E50] tracking-wide">Enterprise Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2C3E50] mb-6 leading-tight tracking-tight">
            Advanced Sourcing &{' '}
            <span className="gradient-text">Supply Chain Intelligence</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Click any solution category below to explore dedicated technical specifications, capabilities, and industrial applications.
          </p>
        </motion.div>
      </Section>

      {/* Solutions Grid */}
      <Section className="bg-[#F8FAFB]" id="solutions">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, idx) => {
              const Icon = solution.icon;
              const targetRoute = `/solutions/${routeMap[solution.id]}`;
              return (
                <Reveal key={solution.id} delay={idx * 0.08} direction="up">
                  <div className="bg-white rounded-2xl border-2 border-gray-100 hover:border-[#D1F2F7] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full group">
                    {/* Card Top Image */}
                    <div className="relative h-48 bg-gray-50 overflow-hidden shrink-0">
                      <Image 
                        src={productImages[solution.id] || '/hero-bg-teal.png'} 
                        alt={solution.title}
                        fill
                        quality={85}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur shadow-sm flex items-center justify-center">
                        <Icon size={22} className="text-[#17A2B8]" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-8 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-[#2C3E50] mb-3 group-hover:text-[#17A2B8] transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-[#6B7280] leading-relaxed mb-6 flex-1">
                        {solution.description}
                      </p>

                      {/* Feature Bullets */}
                      <div className="space-y-3 mb-8">
                        {solution.features.slice(0, 3).map((f) => (
                          <div key={f} className="flex items-start gap-2.5">
                            <CheckCircle size={15} className="text-[#17A2B8] shrink-0 mt-0.5" />
                            <span className="text-xs font-semibold text-[#2C3E50] leading-normal">{f}</span>
                          </div>
                        ))}
                      </div>

                      {/* Explore CTA */}
                      <Link 
                        href={targetRoute}
                        className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-gray-50 border border-gray-100 text-sm font-bold text-[#2C3E50] hover:bg-[#17A2B8] hover:text-white hover:border-[#17A2B8] transition-all duration-200 min-h-[44px]"
                      >
                        Explore Capabilities <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Results */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="PROVEN RESULTS" title="What You Can Expect" description="Audit-ready statistics backed by internal fulfillment operations" />
          <div className="mt-12 space-y-4">
            {[
              { benefit: '38% Average Lead Time Reduction',            description: 'Procurement cycles cut from weeks to days across metals, polymers, and coatings.' },
              { benefit: '97.4% On-Time Fulfillment Rate',             description: 'Earned across 99,000+ orders — backed by audit-ready operational database.' },
              { benefit: '360° End-to-End Order Visibility',           description: 'From request to shipment tracking, every step is fully documented in your dashboard.' },
              { benefit: '<4 hrs Average Response on Custom Requests', description: 'When you need specialized materials outside the standard catalog, our team acts fast.' },
            ].map((item, idx) => (
              <Reveal key={item.benefit} delay={idx * 0.1} direction="left">
                <motion.div whileHover={{ x: 6 }} className="flex gap-4 p-5 sm:p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#D1F2F7] hover:shadow-sm transition-all">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#E6F7FA] rounded-xl shrink-0">
                    <span className="text-[#17A2B8] font-bold text-lg">{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C3E50] mb-1 text-base sm:text-lg">{item.benefit}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
            
            {/* Audit Disclaimer Footnote */}
            <p className="text-xs text-gray-400 mt-6 text-center">
              * All figures are based on internal Valtrix fulfillment metrics and customer audit reports compiled in 2025.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-[#2C3E50] text-white text-center py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">Get Started With a Sourcing Request</h2>
        <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Tell us what you need. We&apos;ll show you what we can source, at what price, and how fast — before you commit to anything.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#17A2B8] text-white font-semibold hover:bg-[#0D7A8C] transition-colors min-h-[48px]">
          Contact Us <ArrowRight size={18} />
        </Link>
      </Section>
    </div>
  );
}

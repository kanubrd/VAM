'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/animations/reveal';

const threatCards = [
  {
    title: 'Equipment Failure',
    description: 'Substandard materials accelerate wear and cause unexpected breakdowns, resulting in costly unplanned downtime across production lines.',
    image: '/equipment-failure.webp',
    tag: 'INDUSTRIAL RISK',
    link: '/products/corrosion-inhibitors',
    alt: 'corrosion damage on industrial machinery parts causing equipment failure',
  },
  {
    title: 'Economic Loss',
    description: 'Supply chain failures cost global manufacturers billions annually — from line stoppages, emergency sourcing premiums, and expedited freight.',
    image: '/economic-loss.webp',
    tag: 'FINANCIAL IMPACT',
    link: '/products/sustainable-polyols',
    alt: 'financial loss chart showing decline from material supply chain stop',
  },
  {
    title: 'Surface Degradation',
    description: 'Unprotected or improperly specified materials degrade rapidly in harsh environments, compounding maintenance costs and compliance risk.',
    image: '/surface-degradation.webp',
    tag: 'MATERIAL SCIENCE',
    link: '/products/surface-treatments',
    alt: 'surface degradation and rusting on structural metal surfaces',
  },
];

export function TestimonialsSection() {
  return (
    <section style={{ background: '#F8F8F8' }} className="py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section label */}
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#17A2B8]" />
            <span className="text-xs font-semibold tracking-[4px] uppercase text-[#17A2B8]">
              Why It Matters
            </span>
          </div>
        </Reveal>

        {/* Heading row */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end mb-16 md:mb-20">
          <Reveal>
            <h2
              className="font-bold leading-[1.08]"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#2C3E50',
                letterSpacing: '-0.02em',
              }}
            >
              Material Failure is an{' '}
              <span style={{ color: '#17A2B8' }}>Economic Threat.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              Equipment downtime directly impacts the bottom line. Material failures in industrial
              environments cascade into production delays, compliance violations, and lost revenue.
              Valtrix eliminates this risk at the source.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {threatCards.map((card, idx) => (
            <Reveal key={card.title} delay={idx * 0.1}>
              <Link href={card.link} className="block group">
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 48px rgba(23,162,184,0.10)' }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden h-full"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #E8E8E8',
                  }}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-[#2C3E50]">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                      loading="lazy"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span
                        className="text-[10px] font-bold tracking-[3px] uppercase px-2 py-1"
                        style={{ background: 'rgba(23,162,184,0.9)', color: '#fff' }}
                      >
                        {card.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      className="font-bold mb-3 group-hover:text-[#17A2B8] transition-colors"
                      style={{ color: '#2C3E50', fontSize: '1.05rem' }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

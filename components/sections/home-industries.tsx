'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/animations/reveal';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const industries = [
  {
    title: 'Automotive & General Industries',
    description: 'Reliable specialty chemical solutions engineered for automotive manufacturing and diverse industrial applications.',
    image: '/automotive-category.avif',
    href: '/industries/automotive',
    tag: 'AUTOMOTIVE & GEN',
  },
  {
    title: 'Metal Working Fluids & Lubricants',
    description: 'High-performance lubricants and metalworking solutions designed to improve machining efficiency, reduce wear, and extend equipment life.',
    image: '/metalworking-category.avif',
    href: '/industries/metalworking',
    tag: 'METALWORKING',
  },
  {
    title: 'Electroplating & Brighteners',
    description: 'Advanced electroplating chemicals and brighteners that enhance coating quality, corrosion resistance, and surface appearance.',
    image: '/electroplating-category.avif',
    href: '/industries/electroplating',
    tag: 'ELECTROPLATING',
  },
  {
    title: 'Surface Treatment',
    description: 'Specialized surface treatment technologies that improve adhesion, durability, and protection for industrial components.',
    image: '/surface-treatment-category.avif',
    href: '/industries/surface-treatment',
    tag: 'SURFACE TREATMENT',
  },
];

const tagColors: Record<string, { bg: string; text: string }> = {
  'AUTOMOTIVE & GEN':   { bg: 'rgba(23, 162, 184, 0.1)', text: '#17A2B8' },
  'METALWORKING':       { bg: 'rgba(23, 162, 184, 0.1)', text: '#17A2B8' },
  'ELECTROPLATING':     { bg: 'rgba(23, 162, 184, 0.1)', text: '#17A2B8' },
  'SURFACE TREATMENT':   { bg: 'rgba(23, 162, 184, 0.1)', text: '#17A2B8' },
};

export function HomeIndustriesSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-gray-150">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section label & heading */}
        <div className="mb-16">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#17A2B8]" />
              <span className="text-xs font-semibold tracking-[4px] uppercase text-[#17A2B8]">
                Target Sectors
              </span>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <Reveal>
              <h2
                className="font-bold leading-[1.08]"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: '#2C3E50',
                  letterSpacing: '-0.02em',
                }}
              >
                Custom Chemistry for{' '}
                <span style={{ color: '#17A2B8' }}>Core Industries.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg leading-relaxed text-[#6B7280]">
                We engineer tailor-made additive packages and chemical formulations that meet the rigorous performance demands of global manufacturing sectors.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Industries Grid (4-column row matching the style of the threat cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, idx) => {
            const colors = tagColors[industry.tag] || { bg: 'rgba(23,162,184,0.1)', text: '#17A2B8' };
            return (
              <Reveal key={industry.title} delay={idx * 0.08} direction="up">
                <Link href={industry.href} className="block group h-full">
                  <motion.div
                    whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)' }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden h-full border border-gray-150 shadow-sm flex flex-col justify-between"
                    style={{
                      background: '#ffffff',
                      borderRadius: '12px',
                    }}
                  >
                    <div>
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden bg-[#2C3E50]">
                        <Image
                          src={industry.image}
                          alt={industry.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          quality={90}
                          loading="lazy"
                          style={{ filter: 'brightness(1.05) contrast(1.02)' }}
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 pb-2 border-t border-gray-150">
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className="text-[10px] font-bold tracking-wider px-2 py-0.5"
                            style={{
                              backgroundColor: colors.bg,
                              color: colors.text,
                              borderRadius: '4px',
                            }}
                          >
                            {industry.tag}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg text-[#2C3E50] mb-2 group-hover:text-[#17A2B8] transition-colors leading-snug">
                          {industry.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[#6B7280]">
                          {industry.description}
                        </p>
                      </div>
                    </div>

                    {/* Action link at the bottom */}
                    <div className="p-6 pt-0 mt-auto">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#17A2B8] group-hover:text-[#0D7A8C] transition-colors">
                        Explore Solutions
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

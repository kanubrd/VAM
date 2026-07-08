'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Reveal } from '@/components/animations/reveal';

export function CTABanner() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: '#ffffff' }}
    >

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 text-center">

        {/* Label */}
        <Reveal>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#17A2B8]" />
            <span className="text-xs font-semibold tracking-[4px] uppercase text-[#17A2B8]">
              Ready to streamline your supply chain?
            </span>
            <div className="h-px w-8 bg-[#17A2B8]" />
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.1}>
          <h2
            className="font-bold leading-[1.08] mb-6 mx-auto"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              color: '#2C3E50',
              letterSpacing: '-0.02em',
              maxWidth: 900,
            }}
          >
            Prevent Machinery Failures with{' '}
            <span style={{ color: '#17A2B8' }}>Advanced Material Protection</span>
          </h2>
        </Reveal>

        {/* Description */}
        <Reveal delay={0.15}>
          <p
            className="mx-auto mb-10 text-base sm:text-lg leading-relaxed"
            style={{ color: '#4A5568', maxWidth: 660 }}
          >
            Industrial machinery failures often stem from material degradation, coating failures, and polymer breakdown. 
            Valtrix develops advanced chemical solutions that prevent these failures, extend equipment life, and reduce costly downtime.
          </p>
        </Reveal>

        {/* CTA buttons */}
        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div whileHover={{ scale: 1.03, boxShadow: '0 0 28px rgba(23,162,184,0.4)' }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white text-sm tracking-wide group min-h-[52px]"
                style={{ background: '#17A2B8', borderRadius: 0 }}
              >
                Contact Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-sm tracking-wide min-h-[52px]"
                style={{
                  background: 'transparent',
                  border: '1.5px solid #2C3E50',
                  borderRadius: 0,
                  color: '#2C3E50',
                }}
              >
                View Solutions
              </Link>
            </motion.div>
          </div>
        </Reveal>

        {/* Trust badges */}
        <Reveal delay={0.25}>
          <div
            className="flex flex-col sm:flex-row justify-center gap-6 text-sm pt-8"
            style={{ borderTop: '1px solid #E5E7EB' }}
          >
            {[
              'Prevent corrosion and wear',
              'Extend equipment lifespan',
              'Reduce maintenance costs',
            ].map((f) => (
              <div key={f} className="flex items-center justify-center gap-2" style={{ color: '#4A5568' }}>
                <CheckCircle size={14} style={{ color: '#17A2B8' }} className="shrink-0" />
                {f}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

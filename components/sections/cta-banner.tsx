'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Reveal } from '@/components/animations/reveal';

export function CTABanner() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: '#2C3E50' }}
    >
      {/* Subtle teal glow top-right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(23,162,184,0.15) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      {/* Bottom-left glow */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(23,162,184,0.08) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

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
              color: '#ffffff',
              letterSpacing: '-0.02em',
              maxWidth: 800,
            }}
          >
            Your Next Order Shouldn't Take{' '}
            <span style={{ color: '#17A2B8' }}>Three Weeks to Source</span>
          </h2>
        </Reveal>

        {/* Description */}
        <Reveal delay={0.15}>
          <p
            className="mx-auto mb-10 text-base sm:text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 580 }}
          >
            VAM VALTRIX gives industrial manufacturers direct access to a pre-vetted material supply network — with full traceability, spec documentation, and a fulfillment team that understands production timelines.
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
                Request a Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-sm tracking-wide min-h-[52px]"
                style={{
                  background: 'transparent',
                  border: '1.5px solid rgba(255,255,255,0.3)',
                  borderRadius: 0,
                  color: '#ffffff',
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
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            {[
              'No minimum order commitment',
              'Spec sheet verification included',
              'Dedicated account support from day one',
            ].map((f) => (
              <div key={f} className="flex items-center justify-center gap-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
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

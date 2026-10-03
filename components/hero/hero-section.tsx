'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section style={{ background: '#FFFFFF' }} className="overflow-hidden pt-[100px] md:pt-0">
      {/* ── Full-width hero banner image ── */}
      <div
        className="w-full relative overflow-hidden aspect-[1916/821] md:aspect-auto md:h-[clamp(400px,48vw,620px)]"
        style={{
          marginTop: '0px',
          boxShadow: 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#0F172A',
        }}
      >
        <Image
          src="/hero-banner-clean.webp"
          alt="Valtrix Advance Material - Creating Novel Materials & Additives to Enhance Material Life"
          fill
          priority
          sizes="100vw"
          quality={100}
          unoptimized
          className="object-contain md:object-cover object-center"
          style={{
            filter: 'contrast(1.02) brightness(1.01)',
          }}
        />

        {/* Bottom gradient fade (desktop only so mobile image details remain 100% visible and uncropped) */}
        <div
          className="hidden md:block pointer-events-none absolute bottom-0 left-0 right-0 h-28"
          style={{
            background: 'linear-gradient(to bottom, transparent, #FFFFFF)',
          }}
        />
      </div>

      {/* ── Content below image ── */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-10 pb-0">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="h-px w-4" style={{ background: '#17A2B8' }} />
          <span className="text-xs font-semibold tracking-[4px] uppercase" style={{ color: '#17A2B8' }}>
            Valtrix Advance Material Pvt. Ltd
          </span>
        </motion.div>

        {/* Heading + right column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12">

          {/* Left: heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.55 }}
            className="font-bold leading-[1.08]"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              color: '#2C3E50',
              letterSpacing: '-0.02em',
            }}
          >
            Custom Additive Packages &amp; Metalworking Fluids —{' '}
            <span style={{ color: '#17A2B8' }}>Engineered in Vadodara</span>
          </motion.h1>

          {/* Right: description */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.65 }}
          >
            <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed mb-6">
              Valtrix engineers custom industrial additive packages, high-lubricity metalworking fluids, and corrosion-resistant surface treatments in Vadodara to extend machinery life and eliminate unplanned downtime.
            </p>
          </motion.div>
        </div>

      </div>

    </section>
  );
}

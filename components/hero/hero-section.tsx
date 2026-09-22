'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';

// Dynamically import modals (loaded on first interaction)
const QuoteModal = dynamic(() => import('@/components/modals/quote-modal').then((mod) => ({ default: mod.QuoteModal })), {
  ssr: false,
  loading: () => null,
});

const DemoModal = dynamic(() => import('@/components/modals/demo-modal').then((mod) => ({ default: mod.DemoModal })), {
  ssr: false,
  loading: () => null,
});

export function HeroSection() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isDemoOpen,  setIsDemoOpen]  = useState(false);
  const [mounted,     setMounted]     = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Render placeholder during SSR & first client render to avoid hydration mismatch
  if (!mounted) {
    return (
      <section style={{ background: '#FFFFFF', minHeight: '560px', paddingTop: '0px' }} className="overflow-hidden" />
    );
  }

  return (
    <>
      <section style={{ background: '#FFFFFF' }} className="overflow-hidden">
        {/* ── Full-width cinematic hero video ── */}
        <div
          style={{
            width: '100%',
            height: 'clamp(400px, 48vw, 620px)',
            marginTop: '0px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#0F172A',
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/videos/hero-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: 'contrast(1.05) brightness(1.02) saturate(1.05)',
            }}
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Bottom gradient fade */}
          <div
            style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
              background: 'linear-gradient(to bottom, transparent, #FFFFFF)',
              pointerEvents: 'none',
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
              <span className="sr-only">Valtrix Advance Material — Official Website — </span>
              Creating Novel Materials & Additives to{' '}
              <span style={{ color: '#17A2B8' }}>Enhance Material Life.</span>
            </motion.h1>

            {/* Right: description + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.65 }}
            >
              <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed mb-6">
                Valtrix engineers custom industrial additive packages, high-lubricity metalworking fluids, and corrosion-resistant surface treatments in Vadodara to extend machinery life and prevent unplanned downtime.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <motion.button
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsQuoteOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 font-bold text-white text-base tracking-wide rounded-xl shadow-md hover:shadow-lg transition-all min-h-[56px] text-center"
                  style={{ background: '#17A2B8' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#0D7A8C')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#17A2B8')}
                >
                  <span>Request a Quote Now</span>
                  <ArrowRight size={18} />
                </motion.button>
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-[#2C3E50] bg-[#F8FAFB] hover:bg-[#E6F7FA] border border-gray-200 hover:border-[#17A2B8]/40 rounded-xl text-base tracking-wide transition-all min-h-[56px] text-center"
                >
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>

        </div>

      </section>

      {/* ── Quote Modal (dynamically loaded) ── */}
      {mounted && <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />}

      {/* ── Demo Modal (dynamically loaded) ── */}
      {mounted && <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} onGetStarted={() => { setIsDemoOpen(false); setIsQuoteOpen(true); }} />}
    </>
  );
}

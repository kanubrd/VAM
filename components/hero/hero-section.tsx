'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Dynamically import modals (loaded on first interaction)
const QuoteModal = dynamic(() => import('@/components/modals/quote-modal').then((mod) => ({ default: mod.QuoteModal })), {
  ssr: false,
  loading: () => null,
});

const DemoModal = dynamic(() => import('@/components/modals/demo-modal').then((mod) => ({ default: mod.DemoModal })), {
  ssr: false,
  loading: () => null,
});

const heroSlides = [
  { src: '/slide2-petri-dish.png', alt: 'Sustainable green chemistry and industrial technology' },
  { src: '/hero-bg-teal.png', alt: 'Advanced teal molecular material flow design' },
  { src: '/slide3.png',  alt: 'Sustainable green industrial plant' },
];

export function HeroSection() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isDemoOpen,  setIsDemoOpen]  = useState(false);
  const [mounted,     setMounted]     = useState(false);
  const [slideIndex,  setSlideIndex]  = useState(0);

  const nextSlide = useCallback(() => setSlideIndex((i) => (i + 1) % heroSlides.length), []);
  const prevSlide = () => setSlideIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);

  // Auto-advance disabled - manual control only
  // useEffect(() => {
  //   const timer = setInterval(nextSlide, 5000);
  //   return () => clearInterval(timer);
  // }, [nextSlide]);

  useEffect(() => { setMounted(true); }, []);

  // Render placeholder during SSR & first client render to avoid hydration mismatch
  if (!mounted) {
    return (
      <section style={{ background: '#EEF2F7', minHeight: '560px', paddingTop: '108px' }} className="overflow-hidden" />
    );
  }

  return (
    <>
      <section style={{ background: '#EEF2F7' }} className="overflow-hidden">
        {/* ── Full-width slideshow ── */}
        <div
          style={{
            width: '100%',
            height: 'clamp(300px, 45vw, 560px)',
            marginTop: '108px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
        >
          <AnimatePresence mode="sync">
            <motion.div
              key={heroSlides[slideIndex].src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <Image
                src={heroSlides[slideIndex].src}
                alt={heroSlides[slideIndex].alt}
                fill
                priority={slideIndex === 0}
                fetchPriority={slideIndex === 0 ? 'high' : 'low'}
                quality={100}
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  imageRendering: '-webkit-optimize-contrast',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0) scale(1)',
                  filter: 'contrast(1.08) brightness(1.03) saturate(1.05) sharpen(1.2)',
                  WebkitFilter: 'contrast(1.08) brightness(1.03) saturate(1.05)',
                  imageResolution: '300dpi',
                }}
                unoptimized={false}
              />
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next arrows - hidden on mobile, shown on sm+ */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            style={{
              position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
              width: 40, height: 40, borderRadius: '50%',
              background: 'rgba(255,255,255,0.85)', border: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            }}
          >
            <ChevronLeft size={18} color="#2C3E50" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            style={{
              position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
              width: 40, height: 40, borderRadius: '50%',
              background: 'rgba(255,255,255,0.85)', border: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            }}
          >
            <ChevronRight size={18} color="#2C3E50" />
          </button>

          {/* Dot indicators */}
          <div style={{
            position: 'absolute', bottom: 16, left: '50%',
            transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 10,
          }}>
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === slideIndex ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === slideIndex ? '#17A2B8' : 'rgba(255,255,255,0.6)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Bottom gradient fade */}
          <div
            style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
              background: 'linear-gradient(to bottom, transparent, #EEF2F7)',
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
            <div className="h-px w-8" style={{ background: '#17A2B8' }} />
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
              Creating Novel Materials & Additives to{' '}
              <span style={{ color: '#17A2B8' }}>Enhance Material Life.</span>
            </motion.h1>

            {/* Right: description + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.65 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsQuoteOpen(true)}
                  className="inline-flex items-center justify-center gap-3 px-12 py-5 font-bold text-white text-lg tracking-wide group min-h-[64px] shadow-sm hover:shadow"
                  style={{ background: '#17A2B8', borderRadius: '12px' }}
                >
                  Explore Solutions
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
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

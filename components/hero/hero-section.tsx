'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, BarChart3, Play, Users, Zap } from 'lucide-react';

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
  { src: '/hero-bg.png', alt: 'Advanced molecular material structure' },
  { src: '/slide2.png',  alt: 'Industrial chemical processing facility' },
  { src: '/slide3.png',  alt: 'Sustainable green industrial plant' },
];

/* ── Cursor glow — client only, no SSR ── */
function CursorGlow() {
  const dot = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <div
      ref={dot}
      aria-hidden="true"
      style={{
        position: 'fixed', top: 0, left: 0, zIndex: 9999,
        width: 32, height: 32, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(23,162,184,0.5) 0%, transparent 70%)',
        pointerEvents: 'none',
        transition: 'transform 0.08s linear',
      }}
    />
  );
}

export function HeroSection() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isDemoOpen,  setIsDemoOpen]  = useState(false);
  const [mounted,     setMounted]     = useState(false);
  const [slideIndex,  setSlideIndex]  = useState(0);

  const nextSlide = useCallback(() => setSlideIndex((i) => (i + 1) % heroSlides.length), []);
  const prevSlide = () => setSlideIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      {mounted && <CursorGlow />}

      <section style={{ background: '#EEF2F7' }} className="overflow-hidden">
        {/* ── Full-width slideshow ── */}
        <div
          style={{
            width: '100%',
            height: 'clamp(300px, 45vw, 560px)',
            marginTop: '108px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={heroSlides[slideIndex].src}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
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
                quality={85}
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next arrows */}
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

          {/* Bottom-left tagline */}
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              left: 32,
              zIndex: 10,
              maxWidth: 420,
            }}
          >
            <div style={{
              background: 'rgba(23,162,184,0.15)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              borderLeft: '3px solid #17A2B8',
              padding: '12px 20px',
            }}>
              <p style={{
                margin: 0,
                fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
                fontWeight: 600,
                color: '#ffffff',
                letterSpacing: '0.01em',
                lineHeight: 1.4,
                textShadow: '0 1px 4px rgba(0,0,0,0.4)',
              }}>
                Stop the Rust, Sustain the Trust, and Build a Future That Lasts.
              </p>
            </div>
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
              Advanced Industrial Materials
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
              Engineering the Future of{' '}
              <span style={{ color: '#17A2B8' }}>Molecular Materials.</span>
            </motion.h1>

            {/* Right: description + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.65 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(23,162,184,0.35)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsQuoteOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white text-sm tracking-wide group min-h-[52px]"
                  style={{ background: '#17A2B8', borderRadius: 0 }}
                >
                  Explore Solutions
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsDemoOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-sm tracking-wide min-h-[52px]"
                  style={{ background: 'transparent', border: '1.5px solid #2C3E50', borderRadius: 0, color: '#2C3E50' }}
                >
                  View Portfolio
                </motion.button>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll indicator */}
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center py-8 gap-1"
        >
          <span className="text-xs tracking-[3px] uppercase" style={{ color: '#6B7280' }}>Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
            <ChevronDown size={16} style={{ color: '#17A2B8' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Quote Modal (dynamically loaded) ── */}
      {mounted && <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />}

      {/* ── Demo Modal (dynamically loaded) ── */}
      {mounted && <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} onGetStarted={() => { setIsDemoOpen(false); setIsQuoteOpen(true); }} />}
    </>
  );
}

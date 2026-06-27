'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Modal } from '@/components/ui/modal';
import { ArrowRight, CheckCircle, Clock, Shield, Truck, Zap, BarChart3, Play, Users, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

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

  const [quoteName,     setQuoteName]     = useState('');
  const [quoteCompany,  setQuoteCompany]  = useState('');
  const [quoteEmail,    setQuoteEmail]    = useState('');
  const [quoteMaterial, setQuoteMaterial] = useState('');
  const [quoteStatus,   setQuoteStatus]   = useState<'idle'|'loading'|'success'|'error'>('idle');

  const products = ['SusCat-12', 'SusPol-125', 'VAMShield-90', 'VAM BS-01', 'VAM Cat-M (Rust Converter)'];
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [productsOpen,     setProductsOpen]     = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const toggleProduct = (p: string) =>
    setSelectedProducts((prev) => prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]);

  const handleQuoteSubmit = async () => {
    if (!quoteEmail) return;
    const emailRegex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i;
    if (!emailRegex.test(quoteEmail.trim()) || quoteEmail.length > 254) { setQuoteStatus('error'); return; }
    if (quoteName     && quoteName.length     > 100) { setQuoteStatus('error'); return; }
    if (quoteCompany  && quoteCompany.length  > 100) { setQuoteStatus('error'); return; }
    if (quoteMaterial && quoteMaterial.length > 500) { setQuoteStatus('error'); return; }
    setQuoteStatus('loading');
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: quoteName, company: quoteCompany,
          email: quoteEmail.trim().toLowerCase(),
          products: selectedProducts, material: quoteMaterial, _hp: '',
        }),
      });
      if (!res.ok) throw new Error();
      setQuoteStatus('success');
      setQuoteName(''); setQuoteCompany(''); setQuoteEmail('');
      setQuoteMaterial(''); setSelectedProducts([]);
    } catch { setQuoteStatus('error'); }
  };

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
            <motion.img
              key={heroSlides[slideIndex].src}
              src={heroSlides[slideIndex].src}
              alt={heroSlides[slideIndex].alt}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />
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
                Stop the Rust,{' '}
                <span style={{ color: '#17A2B8' }}>Sustain the Trust,</span>
                {' '}and Build a Future That Lasts.
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

      {/* ── Quote Modal ── */}
      <Modal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} title="Get Started with VAM VALTRIX">
        <div className="space-y-4 sm:space-y-5">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {[
              { icon: Clock,  label: '24hr Response',   sub: 'Quote turnaround' },
              { icon: Shield, label: 'Verified Sources', sub: '320+ suppliers'  },
              { icon: Truck,  label: 'On-Time',          sub: '97.4% delivery'  },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="text-center p-2 sm:p-3 bg-[#E6F7FA] rounded-xl border border-[#D1F2F7]">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#17A2B8] mx-auto mb-1" />
                <p className="text-xs font-semibold text-[#2C3E50] leading-tight">{label}</p>
                <p className="text-xs text-[#6B7280] hidden sm:block">{sub}</p>
              </div>
            ))}
          </div>
          {quoteStatus === 'success' ? (
            <div className="text-center py-5 bg-[#E6F7FA] rounded-xl border border-[#D1F2F7]">
              <CheckCircle className="w-10 h-10 text-[#17A2B8] mx-auto mb-2" />
              <p className="font-semibold text-[#2C3E50]">Request Received!</p>
              <p className="text-sm text-[#6B7280] mt-1">A specialist will follow up within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="space-y-3">
                <div aria-hidden="true" className="absolute opacity-0 pointer-events-none h-0 overflow-hidden">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input type="text" placeholder="Your name" value={quoteName} onChange={(e) => setQuoteName(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A2B8] min-h-[44px]" />
                  <input type="text" placeholder="Company" value={quoteCompany} onChange={(e) => setQuoteCompany(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A2B8] min-h-[44px]" />
                </div>
                <input type="email" placeholder="Work email" value={quoteEmail} onChange={(e) => setQuoteEmail(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A2B8] min-h-[44px]" />
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button type="button" onClick={() => setProductsOpen((o) => !o)}
                    className="w-full flex items-center justify-between px-3 py-2.5 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
                    <span className="text-sm font-semibold text-[#2C3E50]">
                      Select Products
                      {selectedProducts.length > 0 && (
                        <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full text-white bg-[#17A2B8]">
                          {selectedProducts.length}
                        </span>
                      )}
                    </span>
                    <svg className={`w-4 h-4 text-[#17A2B8] transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {productsOpen && (
                    <div className="px-3 py-3 space-y-3 border-t border-gray-100">
                      {products.map((product) => (
                        <label key={product} className="flex items-center gap-4 cursor-pointer group">
                          <input type="checkbox" checked={selectedProducts.includes(product)}
                            onChange={() => toggleProduct(product)}
                            className="w-4 h-4 rounded border-gray-300 cursor-pointer shrink-0 accent-[#17A2B8]" />
                          <span className="text-sm text-[#2C3E50] group-hover:text-[#17A2B8] transition-colors">{product}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                <input type="text" placeholder="Additional material needed (optional)" value={quoteMaterial}
                  onChange={(e) => setQuoteMaterial(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A2B8] min-h-[44px]" />
              </div>
              <button onClick={handleQuoteSubmit} disabled={quoteStatus === 'loading'}
                className="w-full py-3.5 text-white font-semibold disabled:opacity-60 min-h-[44px]"
                style={{ background: '#17A2B8', borderRadius: 0 }}>
                {quoteStatus === 'loading' ? 'Submitting...' : 'Get My Quote →'}
              </button>
              {quoteStatus === 'error' && <p className="text-center text-xs text-red-600">Something went wrong. Please try again.</p>}
            </>
          )}
        </div>
      </Modal>

      {/* ── Demo Modal ── */}
      <Modal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} title="See How VAM VALTRIX Works">
        <div className="space-y-4 sm:space-y-5">
          <p className="text-sm text-[#6B7280]">
            See how VAM VALTRIX cuts procurement cycles from weeks to days — without sacrificing traceability or spec compliance.
          </p>
          <div className="aspect-video bg-gradient-to-br from-[#2C3E50] to-[#17A2B8] rounded-xl flex items-center justify-center">
            <div className="text-center">
              <button className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-[#17A2B8] ml-1" />
              </button>
              <p className="text-white/80 text-sm">3-minute product walkthrough</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">How it works</p>
            {[
              { icon: Zap,       step: '01', title: 'Submit your spec',   desc: 'Upload your material requirements or describe what you need.' },
              { icon: Shield,    step: '02', title: 'We match & verify',  desc: 'Our engine finds the best-fit supplier from 320+ verified sources.' },
              { icon: BarChart3, step: '03', title: 'Track in real time', desc: 'Monitor your order from confirmation to delivery on your dashboard.' },
              { icon: Users,     step: '04', title: 'Dedicated support',  desc: 'A sourcing specialist is assigned to every account.' },
            ].map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#EEF2F7] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#E6F7FA] border border-[#D1F2F7] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#17A2B8]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2C3E50]">{title}</p>
                  <p className="text-xs text-[#6B7280]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => { setIsDemoOpen(false); setIsQuoteOpen(true); }}
            className="w-full py-3.5 text-white font-semibold min-h-[44px]"
            style={{ background: '#17A2B8', borderRadius: 0 }}>
            Get Started Now →
          </button>
        </div>
      </Modal>
    </>
  );
}

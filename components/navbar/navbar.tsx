'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollProgress } from '@/hooks/useScrollProgress';

const navItems = [
  { label: 'About',      href: '/about' },
  { label: 'Solutions',  href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact',    href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollProgress                       = useScrollProgress();
  const pathname                             = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── Top utility bar ── */}
      <div
        className="fixed top-0 left-0 right-0 z-50"
        style={{ background: '#1A2B3C' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center"
          style={{ height: 36 }}>
          <div className="flex items-center gap-6">
            <a
              href="tel:+919898123983"
              className="flex items-center gap-1.5 text-xs transition-colors"
              style={{ color: 'rgba(255,255,255,0.7)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#17A2B8')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            >
              <Phone size={11} />
              <span>+91 98981 23983</span>
            </a>
            <a
              href="mailto:info@valtrixmaterials.com"
              className="hidden md:flex items-center gap-1.5 text-xs transition-colors"
              style={{ color: 'rgba(255,255,255,0.7)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#17A2B8')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            >
              <Mail size={11} />
              <span>info@valtrixmaterials.com</span>
            </a>
          </div>
          <span className="text-xs hidden sm:block" style={{ color: 'rgba(255,255,255,0.5)' }}>
            ISO Certified&nbsp;&nbsp;·&nbsp;&nbsp;Valtrix Advance Material Pvt. Ltd
          </span>
        </div>
      </div>

      {/* ── Main navbar ── */}
      <nav
        className={cn(
          'fixed left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'shadow-lg' : 'shadow-none',
        )}
        style={{
          top: 36,
          height: 72,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

          {/* Logo — transparent bg, proper sizing */}
          <Link href="/" className="flex items-center shrink-0 py-2">
            <Image
              src="/valtrix-logo.png"
              alt="VAM VALTRIX"
              width={360}
              height={112}
              className="w-auto"
              style={{ height: 64, imageRendering: 'crisp-edges' }}
              priority
            />
          </Link>

          {/* Desktop nav — centered text links with underline animation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-5 py-2 text-sm font-medium tracking-wide group"
                  style={{
                    color: isActive ? '#17A2B8' : '#2C3E50',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = '#17A2B8';
                  }}
                  onMouseLeave={e => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = '#2C3E50';
                  }}
                >
                  {item.label}
                  {/* Underline */}
                  <span
                    className="absolute bottom-0 left-5 right-5 transition-transform duration-250 origin-left"
                    style={{
                      height: 1.5,
                      background: '#17A2B8',
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      display: 'block',
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center shrink-0">
            <Link
              href="/contact"
              className="text-sm font-semibold text-white transition-all duration-200"
              style={{
                background: '#17A2B8',
                padding: '10px 24px',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#0D7A8C')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#17A2B8')}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            style={{ color: '#2C3E50' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Scroll progress bar */}
        <div
          style={{
            height: 2,
            background: '#17A2B8',
            width: `${scrollProgress}%`,
            transition: 'width 150ms linear',
          }}
        />
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          style={{ background: 'rgba(0,0,0,0.25)', top: 108 }}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed left-0 right-0 z-40 md:hidden transition-all duration-300',
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none -translate-y-4',
        )}
        style={{
          top: 108,
          background: '#ffffff',
          borderBottom: '1px solid #EAEAEA',
          boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
        }}
      >
        <div className="px-4 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3.5 font-medium text-sm min-h-[52px] transition-colors"
                style={{
                  color: isActive ? '#17A2B8' : '#2C3E50',
                  background: isActive ? '#E6F7FA' : 'transparent',
                  borderLeft: isActive ? '3px solid #17A2B8' : '3px solid transparent',
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-gray-100">
            <Link
              href="/contact"
              className="flex items-center justify-center px-4 py-3.5 text-sm font-semibold text-white min-h-[52px] transition-colors"
              style={{ background: '#17A2B8' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

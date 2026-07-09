'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollProgress } from '@/hooks/useScrollProgress';

const navItems = [
  { label: 'Home',       href: '/' },
  { label: 'About',      href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Solutions',  href: '/solutions' },
  { label: 'Contact',    href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollProgress                       = useScrollProgress();
  const pathname                             = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [pathname]);

  useEffect(() => {
    // Properly integrate with Lenis smooth scroll
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Stop Lenis when menu is open
      if ((window as any).lenis) {
        (window as any).lenis.stop();
      }
    } else {
      document.body.style.overflow = '';
      // Resume Lenis when menu closes
      if ((window as any).lenis) {
        (window as any).lenis.start();
      }
    }
    return () => { 
      document.body.style.overflow = '';
      if ((window as any).lenis) {
        (window as any).lenis.start();
      }
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── Header Container with both utility bar and navbar ── */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ position: 'fixed', transform: 'none' }}>
        {/* ── Top utility bar ── */}
        <div
          className="transition-all duration-300"
          style={{ 
            background: '#1A2B3C',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            position: 'relative',
          }}
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
            'transition-all duration-300',
            isScrolled ? 'shadow-xl' : 'shadow-md',
          )}
          style={{
            height: 72,
            background: '#FFFFFF',
            borderBottom: '2px solid #E5E7EB',
            position: 'relative',
          }}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

          {/* Logo — Ultra HD clean rendering */}
          <Link href="/" className="flex items-center shrink-0 py-2">
            <Image
              src="/valtrix-logo-teal.png"
              alt="VAM VALTRIX"
              width={30720}
              height={9600}
              sizes="(max-width: 768px) 800px, 1600px"
              className="w-auto"
              style={{ 
                height: '130px',
                maxHeight: '130px',
                imageRendering: 'crisp-edges',
                transition: 'all 0.3s ease',
                transformOrigin: 'center',
              }}
              priority
              quality={100}
              unoptimized={true}
            />
          </Link>

          {/* Desktop nav — centered text links with underline animation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const textColor = '#2C3E50';
              const hoverColor = '#17A2B8';
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-5 py-2 text-base font-bold tracking-wide group transition-colors duration-300 uppercase"
                  style={{
                    color: textColor,
                    letterSpacing: '0.02em',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = hoverColor;
                  }}
                  onMouseLeave={e => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = textColor;
                  }}
                >
                  {item.label}
                  {/* Underline */}
                  <span
                    className="absolute bottom-0 left-5 right-5 transition-transform duration-250 origin-left"
                    style={{
                      height: 2,
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
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg transition-colors"
            style={{ 
              color: '#2C3E50',
              background: '#F3F4F6',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = '#E5E7EB';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = '#F3F4F6';
            }}
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
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: 3,
            background: 'linear-gradient(90deg, #17A2B8 0%, #0D7A8C 100%)',
            width: `${scrollProgress}%`,
            transition: 'width 150ms linear',
            boxShadow: '0 0 8px rgba(23,162,184,0.5)',
          }}
        />
      </nav>
      </header>

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
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

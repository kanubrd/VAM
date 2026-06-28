'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Ultra-smooth scroll configuration optimized for 60fps performance
    const lenis = new Lenis({
      // Reduced duration for snappier, more responsive feel
      duration: 1.0,
      // Apple-style easing: quick start, smooth deceleration
      easing: (t: number) => {
        // easeOutCubic for premium feel
        return 1 - Math.pow(1 - t, 3);
      },
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      // Optimized for desktop mouse/trackpad
      wheelMultiplier: 1.0,
      // Enhanced mobile touch scrolling
      touchMultiplier: 2.0,
      // Prevent infinite scroll
      infinite: false,
      // Automatically handles passive listeners for better performance
      autoResize: true,
      // Smooth lerp value for interpolation
      lerp: 0.1,
    });

    lenisRef.current = lenis;

    // High-performance RAF loop
    let rafId: number;
    
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    
    rafId = requestAnimationFrame(raf);

    // Expose lenis globally for debugging
    if (typeof window !== 'undefined') {
      (window as any).lenis = lenis;
    }

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      if (typeof window !== 'undefined') {
        delete (window as any).lenis;
      }
    };
  }, []);

  return <>{children}</>;
}

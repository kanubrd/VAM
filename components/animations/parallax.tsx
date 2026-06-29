'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { PARALLAX_CONFIG } from '@/lib/animation-config';

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // -1 to 1, where negative moves slower, positive moves faster
  className?: string;
  disabled?: boolean;
}

/**
 * Parallax Component
 * 
 * Creates scroll-linked parallax effects using GPU-accelerated transforms.
 * Automatically disabled on mobile devices (< 768px) for performance.
 * Pauses calculations when element is out of viewport.
 * 
 * @param speed - Controls parallax intensity (-1 to 1). Default: 0.5
 * @param disabled - Manually disable parallax effect
 * 
 * @example
 * <Parallax speed={0.5}>
 *   <img src="/hero-bg.png" alt="Background" />
 * </Parallax>
 */
export function Parallax({
  children,
  speed = 0.5,
  className,
  disabled = false,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery(`(max-width: ${PARALLAX_CONFIG.disableMobileBreakpoint - 1}px)`);
  
  // Check if element is in viewport using Intersection Observer
  const { ref: inViewRef, inView } = useInView({
    threshold: 0,
    rootMargin: '200px', // Start tracking 200px before entering viewport
  });
  
  // Combine refs
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (ref.current) {
      setElement(ref.current);
      inViewRef(ref.current);
    }
  }, [inViewRef]);

  // Get scroll progress relative to the element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // Track from when element enters bottom to when it exits top
  });

  // Calculate parallax movement within the -10% to +10% range
  // Max movement is 20% of scroll distance (PARALLAX_CONFIG.maxMovementPercent)
  const maxMovement = PARALLAX_CONFIG.rangeY[1]; // 10%
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-maxMovement * speed}%`, `${maxMovement * speed}%`]
  );

  // Subtle scale for depth effect
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [PARALLAX_CONFIG.rangeScale[0], PARALLAX_CONFIG.rangeScale[1], PARALLAX_CONFIG.rangeScale[0]]
  );

  // Disable parallax if:
  // 1. Manually disabled
  // 2. On mobile device
  // 3. Element is not in viewport (performance optimization)
  const isDisabled = disabled || isMobile || !inView;

  if (isDisabled) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        scale,
        willChange: inView ? 'transform' : 'auto', // Only hint will-change when animating
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * ParallaxContainer Component
 * 
 * Wrapper for multiple parallax layers with different speeds.
 * Useful for creating depth effects with background, midground, and foreground.
 * 
 * @example
 * <ParallaxContainer>
 *   <Parallax speed={0.2}>Background layer (slow)</Parallax>
 *   <Parallax speed={0.5}>Midground layer (medium)</Parallax>
 *   <Parallax speed={0.8}>Foreground layer (fast)</Parallax>
 * </ParallaxContainer>
 */
export function ParallaxContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className} style={{ position: 'relative' }}>
      {children}
    </div>
  );
}

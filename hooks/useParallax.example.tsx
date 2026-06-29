/**
 * useParallax Hook - Usage Examples
 * 
 * This file demonstrates how to use the useParallax hook for creating
 * scroll-linked parallax effects in your components.
 * 
 * Task 3.2: Create parallax scroll hook
 * Requirements: 3.1, 3.2, 3.3, 3.4, 3.5
 */

'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useParallax } from './useParallax';

/**
 * Example 1: Basic parallax effect on a hero section background
 */
export function HeroWithParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { y, isActive } = useParallax(ref);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background layer with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: isActive ? y : 0 }}
      >
        <img
          src="/hero-background.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Foreground content (no parallax) */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-6xl font-bold text-white">Welcome</h1>
      </div>
    </section>
  );
}

/**
 * Example 2: Custom parallax strength
 * Use a stronger parallax effect (15% instead of default 10%)
 */
export function StrongParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { y, isActive } = useParallax(ref, { strength: 0.15 });

  return (
    <section ref={ref} className="relative h-96">
      <motion.div
        className="absolute inset-0"
        style={{ y: isActive ? y : 0 }}
      >
        <div className="bg-gradient-to-b from-blue-500 to-purple-600 w-full h-full" />
      </motion.div>
    </section>
  );
}

/**
 * Example 3: Multiple parallax layers with different speeds
 * Create depth by having different strengths for different layers
 */
export function MultiLayerParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const midgroundRef = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);

  const { y: bgY, isActive: bgActive } = useParallax(backgroundRef, { strength: 0.2 }); // Fastest
  const { y: mgY, isActive: mgActive } = useParallax(midgroundRef, { strength: 0.1 }); // Medium
  const { y: fgY, isActive: fgActive } = useParallax(foregroundRef, { strength: 0.05 }); // Slowest

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background layer - moves fastest */}
      <motion.div
        ref={backgroundRef}
        className="absolute inset-0 z-0"
        style={{ y: bgActive ? bgY : 0 }}
      >
        <div className="w-full h-full bg-blue-900" />
      </motion.div>

      {/* Midground layer */}
      <motion.div
        ref={midgroundRef}
        className="absolute inset-0 z-10"
        style={{ y: mgActive ? mgY : 0 }}
      >
        <div className="w-full h-full bg-purple-800 opacity-50" />
      </motion.div>

      {/* Foreground layer - moves slowest */}
      <motion.div
        ref={foregroundRef}
        className="absolute inset-0 z-20"
        style={{ y: fgActive ? fgY : 0 }}
      >
        <div className="flex items-center justify-center h-full">
          <h2 className="text-5xl font-bold text-white">Layered Depth</h2>
        </div>
      </motion.div>
    </section>
  );
}

/**
 * Example 4: Conditionally enabled parallax
 * Disable parallax based on user preferences or context
 */
export function ConditionalParallax({ enableParallax = true }: { enableParallax?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { y, isActive } = useParallax(ref, { enabled: enableParallax });

  return (
    <section ref={ref} className="relative h-96">
      <motion.div
        className="absolute inset-0"
        style={{ y: isActive ? y : 0 }}
      >
        <img
          src="/scene.jpg"
          alt="Scenic view"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="relative z-10 p-8">
        <p className="text-white">
          Parallax is {isActive ? 'active' : 'inactive'}
        </p>
      </div>
    </section>
  );
}

/**
 * Example 5: Custom scroll offset
 * Control when parallax starts and ends relative to viewport
 */
export function CustomOffsetParallax() {
  const ref = useRef<HTMLDivElement>(null);
  
  // Start parallax when element enters bottom of viewport
  // End when element exits top of viewport
  const { y, isActive } = useParallax(ref, {
    offset: ['start end', 'end start'], // Default, but shown for clarity
  });

  return (
    <section ref={ref} className="relative h-96">
      <motion.div
        className="absolute inset-0"
        style={{ y: isActive ? y : 0 }}
      >
        <div className="bg-gradient-to-r from-green-400 to-blue-500 w-full h-full" />
      </motion.div>
    </section>
  );
}

/**
 * Example 6: Accessing scroll progress
 * Use scrollProgress for custom animations or indicators
 */
export function ParallaxWithProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const { y, scrollProgress, isActive } = useParallax(ref);

  return (
    <section ref={ref} className="relative h-96">
      <motion.div
        className="absolute inset-0"
        style={{ 
          y: isActive ? y : 0,
          // Additional effect: fade based on scroll progress
          opacity: scrollProgress,
        }}
      >
        <img
          src="/background.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Scroll progress indicator */}
      <div className="relative z-10 p-4">
        <motion.div
          className="h-2 bg-white rounded-full"
          style={{ scaleX: scrollProgress, transformOrigin: 'left' }}
        />
      </div>
    </section>
  );
}

/**
 * Example 7: Image parallax card
 * Common pattern for card components with parallax images
 */
export function ParallaxCard({ title, imageSrc }: { title: string; imageSrc: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { y, isActive } = useParallax(ref, { strength: 0.05 });

  return (
    <div ref={ref} className="relative h-64 rounded-lg overflow-hidden shadow-lg">
      <motion.div
        className="absolute inset-0"
        style={{ y: isActive ? y : 0 }}
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="relative z-10 p-6 flex items-end h-full">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
    </div>
  );
}

/**
 * Key Points:
 * 
 * 1. GPU-Accelerated: Uses only transform properties (translateY) for smooth 60fps animations
 * 2. Desktop Only: Automatically disabled on mobile (< 768px) to preserve performance
 * 3. Viewport-Aware: Pauses calculations when element is out of view using Intersection Observer
 * 4. Strength Limit: Maximum parallax movement is 20% of scroll distance (enforced by hook)
 * 5. Conditional: Check `isActive` to apply transforms only when parallax is active
 * 6. Responsive: Respects user's prefers-reduced-motion setting (via useMediaQuery internally)
 * 
 * Performance Tips:
 * - Use moderate strength values (0.05-0.15) for subtle, professional effects
 * - Avoid excessive parallax layers (3-4 max per viewport)
 * - Always check `isActive` before applying transforms
 * - Test on real mobile devices to ensure performance
 */

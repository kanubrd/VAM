'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { 
  slideUpVariants, 
  slideDownVariants, 
  slideLeftVariants, 
  slideRightVariants, 
  fadeInVariants,
  springTransition,
  STAGGER_DELAY,
  REDUCED_MOTION_CONFIG,
} from '@/lib/animation-config';
import { Children, isValidElement } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  once?: boolean;
  stagger?: number | keyof typeof STAGGER_DELAY;
}

/**
 * Get animation variants based on direction with enhanced smoothness
 */
const getVariants = (direction: RevealProps['direction']): Variants => {
  const map = {
    up: slideUpVariants,
    down: slideDownVariants,
    left: slideLeftVariants,
    right: slideRightVariants,
    none: fadeInVariants,
  };
  return map[direction ?? 'up'];
};

/**
 * Reveal Component - Ultra-smooth viewport-triggered animations
 * 
 * Enhanced features:
 * - Smoother easing functions for butter-smooth animations
 * - Optimized threshold and margins for better timing
 * - GPU-accelerated transforms
 * - Respects reduced motion preferences
 * - Stagger support with configurable delays
 */
export function Reveal({
  children,
  delay = 0,
  duration = 0.8, // Increased to 800ms for smoother animations
  direction = 'up',
  className,
  once = true,
  stagger,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  
  // Stagger delay calculation
  const staggerDelay = stagger 
    ? typeof stagger === 'number' 
      ? stagger 
      : STAGGER_DELAY[stagger]
    : undefined;

  // Container variants for stagger
  const containerVariants: Variants | undefined = staggerDelay ? {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  } : undefined;

  // Direction-specific variants
  const itemVariants = getVariants(direction);

  // Enhanced transition with smoother easing
  const transition = prefersReducedMotion
    ? { 
        duration: REDUCED_MOTION_CONFIG.duration,
        ease: REDUCED_MOTION_CONFIG.ease,
      }
    : {
        duration,
        delay: staggerDelay ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for ultra-smooth easing
        type: 'tween',
      };

  // Viewport configuration for framer-motion whileInView
  const viewportConfig = {
    once: once,
    amount: 0.15, // 15% visibility to trigger
    margin: '0px 0px -80px 0px',
  };

  // Stagger mode
  if (staggerDelay) {
    const childArray = Children.toArray(children);
    
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={containerVariants}
        className={className}
      >
        {childArray.map((child, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={transition as any}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  // Simple reveal mode
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={itemVariants}
      transition={transition as any}
      className={className}
    >
      {children}
    </motion.div>
  );
}

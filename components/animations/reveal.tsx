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
  STAGGER_DELAY 
} from '@/lib/animation-config';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  once?: boolean;
  stagger?: number | keyof typeof STAGGER_DELAY; // NEW: Stagger support
}

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

export function Reveal({
  children,
  delay = 0,
  duration = 0.7, // Updated to match animation config (600-800ms range)
  direction = 'up',
  className,
  once = true,
  stagger, // NEW: Stagger prop
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion(); // NEW: Accessibility support
  
  const { ref, inView } = useInView({
    threshold: 0.2, // UPDATED: 20% visibility threshold (was 0.08)
    triggerOnce: once, // Already true by default
    rootMargin: '0px 0px -50px 0px', // Optimized root margin
  });

  // Determine stagger delay
  const staggerDelay = stagger 
    ? typeof stagger === 'number' 
      ? stagger 
      : STAGGER_DELAY[stagger]
    : undefined;

  // Create container variants if stagger is enabled
  const containerVariants: Variants | undefined = staggerDelay ? {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay, // 80-120ms delay between children
      },
    },
  } : undefined;

  // Adjust transition for reduced motion
  const transition = prefersReducedMotion
    ? { duration: 0.01 } // Instant transition for reduced motion
    : {
        ...springTransition,
        duration,
        delay,
      };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants || getVariants(direction)}
      transition={transition}
      className={className}
    >
      {stagger ? (
        // If stagger is enabled, wrap children in motion divs
        Array.isArray(children)
          ? children.map((child, index) => (
              <motion.div
                key={index}
                variants={getVariants(direction)}
                transition={transition}
              >
                {child}
              </motion.div>
            ))
          : children
      ) : (
        children
      )}
    </motion.div>
  );
}

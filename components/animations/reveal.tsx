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
 * Get animation variants based on direction
 * Maps direction prop to corresponding animation variants from animation-config
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
 * Reveal Component - Viewport-triggered animations with stagger support
 * 
 * Features:
 * - 20% visibility threshold to trigger animations (Requirement 4.2)
 * - triggerOnce: true to prevent re-animation (Requirement 4.3)
 * - Stagger support with 80-120ms delays (Requirement 4.4)
 * - Respects prefers-reduced-motion (Requirement 4.5, 21.4)
 * - GPU-accelerated animations (Requirements 4.1)
 * 
 * @example
 * // Basic usage
 * <Reveal direction="up">
 *   <div>Content that fades in</div>
 * </Reveal>
 * 
 * @example
 * // With stagger for multiple children
 * <Reveal direction="up" stagger="medium">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Reveal>
 * 
 * @example
 * // Custom stagger delay in seconds
 * <Reveal direction="up" stagger={0.15}>
 *   {items.map(item => <Card key={item.id} {...item} />)}
 * </Reveal>
 */
export function Reveal({
  children,
  delay = 0,
  duration = 0.7, // 700ms - within 600-800ms range for smooth animations
  direction = 'up',
  className,
  once = true,
  stagger,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  
  // Requirement 4.2: Set Intersection Observer threshold to 20% (0.2)
  // Requirement 4.3: Enable triggerOnce: true to prevent re-animation
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: once,
    rootMargin: '0px 0px -50px 0px',
  });

  // Requirement 4.4: Determine stagger delay (80-120ms)
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
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  } : undefined;

  // Get direction-specific variants
  const itemVariants = getVariants(direction);

  // Requirement 4.5, 21.4: Adjust transition for reduced motion
  // When reduced motion is enabled, use instant transitions (0.01s)
  const transition = prefersReducedMotion
    ? { 
        duration: REDUCED_MOTION_CONFIG.duration,
        ease: REDUCED_MOTION_CONFIG.ease,
      }
    : {
        ...springTransition,
        duration,
        delay: staggerDelay ? 0 : delay, // Don't use delay with stagger (use delayChildren instead)
      };

  // If stagger is enabled, we need to wrap children properly
  if (staggerDelay) {
    // Convert children to array for proper iteration
    const childArray = Children.toArray(children);
    
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className={className}
      >
        {childArray.map((child, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={transition}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  // No stagger - simple reveal
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={itemVariants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

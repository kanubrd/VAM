/**
 * Animation Monitor Usage Examples
 * 
 * Demonstrates how to integrate animation performance monitoring
 * with Framer Motion components
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { animationMonitor, useAnimationMonitor } from './animation-monitor';
import { slideUpVariants, springTransition } from './animation-config';

// ============================================================================
// Example 1: Using the animationMonitor directly with Framer Motion
// ============================================================================

export function HeroSlideshow() {
  return (
    <motion.div
      variants={slideUpVariants}
      transition={springTransition}
      onAnimationStart={() => animationMonitor.start('hero-slide')}
      onAnimationComplete={() => animationMonitor.stop('hero-slide')}
    >
      <h1>Welcome to Valtrix</h1>
      <p>Advanced Material Solutions</p>
    </motion.div>
  );
}

// ============================================================================
// Example 2: Using the useAnimationMonitor hook
// ============================================================================

export function AnimatedCard() {
  const monitor = useAnimationMonitor('feature-card');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      onAnimationStart={monitor.start}
      onAnimationComplete={monitor.stop}
      className="feature-card"
    >
      <h3>Advanced Materials</h3>
      <p>Cutting-edge material science solutions</p>
    </motion.div>
  );
}

// ============================================================================
// Example 3: Monitoring multiple animations in a list
// ============================================================================

export function AnimatedList({ items }: { items: string[] }) {
  return (
    <div>
      {items.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onAnimationStart={() => animationMonitor.start(`list-item-${index}`)}
          onAnimationComplete={() => animationMonitor.stop(`list-item-${index}`)}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}

// ============================================================================
// Example 4: Monitoring modal entrance/exit animations
// ============================================================================

export function AnimatedModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.95 }}
      transition={{ duration: 0.6 }}
      onAnimationStart={() => {
        if (isOpen) {
          animationMonitor.start('modal-entrance');
        } else {
          animationMonitor.start('modal-exit');
        }
      }}
      onAnimationComplete={() => {
        if (isOpen) {
          animationMonitor.stop('modal-entrance');
        } else {
          animationMonitor.stop('modal-exit');
        }
      }}
      className="modal"
    >
      <div className="modal-content">
        <h2>Modal Title</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </motion.div>
  );
}

// ============================================================================
// Example 5: Monitoring page transitions
// ============================================================================

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7 }}
      onAnimationStart={() => animationMonitor.start('page-transition')}
      onAnimationComplete={() => animationMonitor.stop('page-transition')}
    >
      {children}
    </motion.div>
  );
}

// ============================================================================
// Example 6: Manual FPS checking during animation
// ============================================================================

export function ComplexAnimation() {
  const checkFPS = () => {
    const fps = animationMonitor.getCurrentFPS('complex-animation');
    if (fps !== null) {
      console.log(`Current FPS: ${Math.round(fps)}`);
    }
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      onAnimationStart={() => {
        animationMonitor.start('complex-animation');
        // Check FPS every 500ms during animation
        const interval = setInterval(checkFPS, 500);
        return () => clearInterval(interval);
      }}
      onAnimationComplete={() => animationMonitor.stop('complex-animation')}
    >
      Rotating Element
    </motion.div>
  );
}

// ============================================================================
// Example 7: Using with viewport-triggered animations (Reveal component)
// ============================================================================

export function AnimatedSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      onAnimationStart={() => animationMonitor.start('section-reveal')}
      onAnimationComplete={() => animationMonitor.stop('section-reveal')}
    >
      <h2>Our Solutions</h2>
      <p>Discover cutting-edge material technologies</p>
    </motion.section>
  );
}

// ============================================================================
// Example 8: Monitoring staggered children animations
// ============================================================================

export function StaggeredGrid({ items }: { items: Array<{ id: string; title: string }> }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      onAnimationStart={() => animationMonitor.start('staggered-grid')}
      onAnimationComplete={() => animationMonitor.stop('staggered-grid')}
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          {item.title}
        </motion.div>
      ))}
    </motion.div>
  );
}

// ============================================================================
// Example 9: Checking if animation is currently being tracked
// ============================================================================

export function AnimationStatus() {
  const isTracking = animationMonitor.isTracking('hero-slide');
  
  return (
    <div className="dev-tools">
      <p>Hero animation tracking: {isTracking ? 'Active' : 'Inactive'}</p>
      <button onClick={() => console.log(animationMonitor.getActiveTracking())}>
        Show Active Animations
      </button>
    </div>
  );
}

// ============================================================================
// Example 10: Global cleanup (useful for testing or page unmount)
// ============================================================================

export function useAnimationCleanup() {
  React.useEffect(() => {
    return () => {
      // Stop all animations when component unmounts
      animationMonitor.stopAll();
    };
  }, []);
}

/**
 * Expected Console Output Examples:
 * 
 * Good Performance (Desktop):
 * [AnimationMonitor] ✓ hero-slide {
 *   fps: 60,
 *   threshold: 55,
 *   deviceType: 'desktop',
 *   duration: '800ms',
 *   frameCount: 48
 * }
 * 
 * Good Performance (Mobile):
 * [AnimationMonitor] ✓ modal-entrance {
 *   fps: 30,
 *   threshold: 25,
 *   deviceType: 'mobile',
 *   duration: '600ms',
 *   frameCount: 18
 * }
 * 
 * Poor Performance Warning (Desktop):
 * [AnimationMonitor] ⚠️ Performance Warning: complex-animation {
 *   fps: 45,
 *   threshold: 55,
 *   deviceType: 'desktop',
 *   duration: '2000ms',
 *   frameCount: 90,
 *   message: 'Animation FPS (45) is below 55 FPS threshold for desktop'
 * }
 * 
 * Poor Performance Warning (Mobile):
 * [AnimationMonitor] ⚠️ Performance Warning: page-transition {
 *   fps: 20,
 *   threshold: 25,
 *   deviceType: 'mobile',
 *   duration: '700ms',
 *   frameCount: 14,
 *   message: 'Animation FPS (20) is below 25 FPS threshold for mobile'
 * }
 */

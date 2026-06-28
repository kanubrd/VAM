/**
 * Animation Configuration Usage Examples
 * 
 * This file demonstrates how to use the animation configuration system
 * in various scenarios throughout the Valtrix website.
 */

'use client';

import { motion } from 'framer-motion';
import {
  fadeInVariants,
  slideUpVariants,
  scaleVariants,
  hoverScaleVariants,
  springTransition,
  fastTransition,
  interactionTransition,
  withSpring,
  getStaggerContainer,
  createSlideVariants,
  STAGGER_DELAY,
} from './animation-config';

/**
 * Example 1: Simple Fade-In Animation
 * Perfect for: Modals, overlays, tooltips
 */
export function FadeInExample() {
  return (
    <motion.div
      variants={fadeInVariants}
      transition={springTransition}
      initial="hidden"
      animate="visible"
      className="p-4 bg-white rounded-lg shadow-lg"
    >
      <h2>This content fades in smoothly</h2>
      <p>Using GPU-accelerated opacity transitions with spring physics</p>
    </motion.div>
  );
}

/**
 * Example 2: Slide Up Animation
 * Perfect for: Section reveals, card entrances, list items
 */
export function SlideUpExample() {
  return (
    <motion.div
      variants={slideUpVariants}
      transition={springTransition}
      initial="hidden"
      animate="visible"
      className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl"
    >
      <h2>Premium Slide-Up Effect</h2>
      <p>Slides up 20px with fade-in, spring physics, 600-800ms duration</p>
    </motion.div>
  );
}

/**
 * Example 3: Scale Animation
 * Perfect for: Modal entrances, image loading, focus effects
 */
export function ScaleExample() {
  return (
    <motion.div
      variants={scaleVariants}
      transition={springTransition}
      initial="hidden"
      animate="visible"
      className="w-64 h-64 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold"
    >
      Scales from 0.95 to 1.0
    </motion.div>
  );
}

/**
 * Example 4: Interactive Button with Hover and Tap
 * Perfect for: CTA buttons, interactive cards, clickable elements
 */
export function InteractiveButtonExample() {
  return (
    <motion.button
      variants={hoverScaleVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      transition={interactionTransition}
      className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg"
    >
      Hover & Click Me
    </motion.button>
  );
}

/**
 * Example 5: Staggered Children Animation
 * Perfect for: Lists, grids, navigation menus
 */
export function StaggeredListExample() {
  const items = [
    { id: 1, title: 'First Item', description: 'Appears first' },
    { id: 2, title: 'Second Item', description: 'Appears 100ms later' },
    { id: 3, title: 'Third Item', description: 'Appears 100ms after that' },
    { id: 4, title: 'Fourth Item', description: 'And so on...' },
  ];

  return (
    <motion.div
      variants={getStaggerContainer('medium')}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={slideUpVariants}
          transition={springTransition}
          className="p-4 bg-white rounded-lg shadow-md border border-gray-200"
        >
          <h3 className="font-bold text-lg">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

/**
 * Example 6: Custom Slide Distance
 * Perfect for: Hero sections with larger movements
 */
export function CustomSlideExample() {
  const customSlideDown = createSlideVariants('down', 50); // 50px from top

  return (
    <motion.div
      variants={customSlideDown}
      transition={springTransition}
      initial="hidden"
      animate="visible"
      className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl"
    >
      <h1 className="text-4xl font-bold mb-4">Custom Slide Distance</h1>
      <p>Slides down 50px instead of the default 20px</p>
    </motion.div>
  );
}

/**
 * Example 7: Using withSpring Helper
 * Perfect for: Quick setup with standard configuration
 */
export function WithSpringHelperExample() {
  return (
    <motion.div
      {...withSpring(scaleVariants)}
      className="w-full p-6 bg-purple-600 text-white rounded-xl"
    >
      <h2 className="text-2xl font-bold">withSpring Helper</h2>
      <p>Automatically applies spring transition and initial/animate props</p>
    </motion.div>
  );
}

/**
 * Example 8: Fast Stagger for Many Items
 * Perfect for: Large lists, image galleries
 */
export function FastStaggerExample() {
  const manyItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    content: `Item ${i + 1}`,
  }));

  return (
    <motion.div
      variants={getStaggerContainer('fast')} // 80ms stagger
      initial="hidden"
      animate="visible"
      className="grid grid-cols-4 gap-4"
    >
      {manyItems.map((item) => (
        <motion.div
          key={item.id}
          variants={scaleVariants}
          transition={fastTransition} // Faster individual animation
          className="aspect-square bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold"
        >
          {item.content}
        </motion.div>
      ))}
    </motion.div>
  );
}

/**
 * Example 9: Card with Hover Effect
 * Perfect for: Product cards, feature showcases, portfolio items
 */
export function HoverCardExample() {
  return (
    <motion.div
      variants={hoverScaleVariants}
      initial="initial"
      whileHover="hover"
      transition={interactionTransition}
      className="p-6 bg-white rounded-xl shadow-lg cursor-pointer border-2 border-transparent hover:border-blue-500 transition-colors"
    >
      <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg mb-4" />
      <h3 className="text-xl font-bold mb-2">Interactive Card</h3>
      <p className="text-gray-600">Hover to see the smooth scale animation</p>
      <p className="text-sm text-gray-500 mt-2">Scale: 1.0 → 1.03 with spring physics</p>
    </motion.div>
  );
}

/**
 * Example 10: Viewport-Triggered Animation
 * Perfect for: Below-fold sections that reveal on scroll
 * (Requires useInView hook from react-intersection-observer)
 */
import { useInView } from 'react-intersection-observer';

export function ViewportTriggeredExample() {
  const { ref, inView } = useInView({
    threshold: 0.2, // 20% visibility
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      variants={slideUpVariants}
      transition={springTransition}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="py-16 px-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-2xl"
    >
      <h2 className="text-3xl font-bold mb-4">Scroll-Triggered Section</h2>
      <p className="text-lg">
        This section animates in when 20% of it becomes visible in the viewport
      </p>
      <p className="text-sm opacity-80 mt-2">
        Uses: slideUpVariants + springTransition + Intersection Observer
      </p>
    </motion.section>
  );
}

/**
 * Example 11: Multi-Direction Slide Grid
 * Perfect for: Feature grids, team sections, service showcases
 */
export function MultiDirectionGridExample() {
  const features = [
    { id: 1, direction: 'up', title: 'GPU Accelerated', icon: '⚡' },
    { id: 2, direction: 'down', title: 'Spring Physics', icon: '🌊' },
    { id: 3, direction: 'left', title: 'Butter Smooth', icon: '✨' },
    { id: 4, direction: 'right', title: '60 FPS Target', icon: '🎯' },
  ] as const;

  return (
    <motion.div
      variants={getStaggerContainer('medium')}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 gap-6"
    >
      {features.map((feature) => (
        <motion.div
          key={feature.id}
          variants={createSlideVariants(feature.direction, 30)}
          transition={springTransition}
          className="p-6 bg-white rounded-xl shadow-lg text-center"
        >
          <div className="text-5xl mb-3">{feature.icon}</div>
          <h3 className="font-bold text-lg">{feature.title}</h3>
          <p className="text-sm text-gray-500 mt-2">Slides from {feature.direction}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

/**
 * Example 12: Combining Multiple Animations
 * Perfect for: Hero sections, complex layouts
 */
export function CombinedAnimationsExample() {
  return (
    <div className="space-y-8">
      {/* Fade in first */}
      <motion.div
        variants={fadeInVariants}
        transition={{ ...springTransition, delay: 0 }}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-5xl font-bold">Premium Animation System</h1>
      </motion.div>

      {/* Slide up second */}
      <motion.div
        variants={slideUpVariants}
        transition={{ ...springTransition, delay: 0.1 }}
        initial="hidden"
        animate="visible"
      >
        <p className="text-xl text-gray-600">
          GPU-accelerated, spring-based, butter-smooth animations
        </p>
      </motion.div>

      {/* Scale in third */}
      <motion.div
        variants={scaleVariants}
        transition={{ ...springTransition, delay: 0.2 }}
        initial="hidden"
        animate="visible"
        className="flex gap-4"
      >
        <motion.button
          variants={hoverScaleVariants}
          whileHover="hover"
          whileTap="tap"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Get Started
        </motion.button>
        <motion.button
          variants={hoverScaleVariants}
          whileHover="hover"
          whileTap="tap"
          className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg"
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
}

/**
 * Performance Notes:
 * 
 * ✅ All animations use GPU-accelerated properties (transform, opacity)
 * ✅ will-change hints applied and removed automatically
 * ✅ Spring physics (stiffness: 100, damping: 15, mass: 0.8)
 * ✅ Duration: 600-800ms for smooth premium feel
 * ✅ Hover/tap: 100ms for immediate responsiveness
 * ✅ Stagger: 80-120ms between children
 * ✅ No layout-triggering properties (width, height, margin, padding)
 * ✅ Max 10 concurrent animations on desktop, 5 on mobile
 * ✅ Ready for prefers-reduced-motion integration (Task 1.3, 4.3)
 */

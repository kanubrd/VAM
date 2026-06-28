'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  once?: boolean;
}

const getVariants = (direction: RevealProps['direction']) => {
  const distance = 28;
  const map = {
    up:    { hidden: { opacity: 0, y: distance,  willChange: 'opacity, transform' }, visible: { opacity: 1, y: 0 } },
    down:  { hidden: { opacity: 0, y: -distance, willChange: 'opacity, transform' }, visible: { opacity: 1, y: 0 } },
    left:  { hidden: { opacity: 0, x: distance,  willChange: 'opacity, transform' }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -distance, willChange: 'opacity, transform' }, visible: { opacity: 1, x: 0 } },
    none:  { hidden: { opacity: 0,                willChange: 'opacity' },             visible: { opacity: 1 } },
  };
  return map[direction ?? 'up'];
};

export function Reveal({
  children,
  delay = 0,
  duration = 0.65,
  direction = 'up',
  className,
  once = true,
}: RevealProps) {
  const { ref, inView } = useInView({
    threshold: 0.08,
    triggerOnce: once,
    rootMargin: '0px 0px -32px 0px',
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={getVariants(direction)}
      transition={{
        type: 'spring',
        duration,
        delay,
        bounce: 0.1,
      }}
      className={className}
      style={{ willChange: 'auto' }} // reset after animation — framer manages this
    >
      {children}
    </motion.div>
  );
}

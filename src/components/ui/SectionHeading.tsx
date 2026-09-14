'use client';

import { cn } from '@/lib/utils';
import { Easing, motion, Variants } from 'framer-motion';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const easing: Easing = [0.25, 0.46, 0.45, 0.94];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easing },
  },
};

export function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  const viewportOpts = { once: true };

  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      {label && (
        <motion.p
          className="mb-3 font-mono text-sm font-medium tracking-widest text-accent-primary uppercase"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          variants={fadeUp}
          transition={{ delay: 0 }}
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOpts}
        variants={fadeUp}
        transition={{ delay: 0.1 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="mt-4 max-w-xl text-lg leading-relaxed text-text-secondary"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        className="mt-4 h-px w-16 bg-gradient-to-r from-accent-primary to-accent-secondary"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOpts}
        transition={{ delay: 0.3, duration: 0.5, ease: easing }}
        style={{ originX: centered ? 0.5 : 0 }}
      />
    </div>
  );
}

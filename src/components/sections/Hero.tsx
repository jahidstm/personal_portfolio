'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, Easing, motion, Variants } from 'framer-motion';
import { ArrowDown, ArrowRight, FileDown, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { GlowDot } from '@/components/ui/GlowDot';

const ROLES = [
  'Data Analyst',
  'AI/ML Engineer',
  'Data Science Specialist',
  'Full-Stack Developer',
];

const ease: Easing = [0.16, 1, 0.3, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 pt-24 pb-20 sm:px-6 lg:px-8"
    >
      {/* Ambient background glows */}
      <GlowDot color="primary" size={550} style={{ top: '-5%', left: '5%', opacity: 0.45 }} />
      <GlowDot color="secondary" size={450} style={{ bottom: '10%', right: '5%', opacity: 0.35 }} />
      <GlowDot color="primary" size={300} style={{ top: '60%', left: '50%', opacity: 0.2 }} />

      {/* CSS-only floating geometric shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[22%] left-[6%] h-20 w-20 rounded-2xl border border-accent-primary/20 bg-accent-primary/5 animate-float"
          style={{ animationDuration: '9s' }}
        />
        <div
          className="absolute top-[35%] right-[8%] h-14 w-14 rounded-full border border-accent-secondary/25 bg-accent-secondary/5 animate-float"
          style={{ animationDuration: '11s', animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-[28%] left-[18%] h-10 w-10 rotate-45 border border-accent-primary/15 animate-float"
          style={{ animationDuration: '7s', animationDelay: '4s' }}
        />
        <div
          className="absolute top-[15%] right-[20%] h-8 w-8 rounded-lg border border-accent-secondary/20 animate-float"
          style={{ animationDuration: '13s', animationDelay: '1s' }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border-default bg-bg-surface/80 px-4 py-1.5 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-medium tracking-wide text-text-secondary">
                {PERSONAL_INFO.availability}
              </span>
            </div>
          </motion.div>

          {/* Name heading */}
          <motion.div variants={itemVariants} className="mb-5">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]">
              <span className="text-text-primary">Hi, I&apos;m </span>
              <span className="text-gradient">
                {PERSONAL_INFO.name}
              </span>
            </h1>
          </motion.div>

          {/* Animated role display */}
          <motion.div
            variants={itemVariants}
            className="mb-7 flex h-10 items-center justify-center gap-3 sm:h-12"
          >
            <span className="text-lg font-medium text-text-secondary sm:text-xl md:text-2xl">
              I&apos;m a
            </span>
            <div className="relative h-10 overflow-hidden sm:h-12" style={{ minWidth: 260 }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.38, ease }}
                  className="absolute inset-0 flex items-center text-lg font-bold text-accent-secondary sm:text-xl md:text-2xl"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="mb-10 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              View Projects
            </Button>
            <Button
              href="/resume.pdf"
              variant="secondary"
              size="lg"
              external
              icon={<FileDown className="h-4 w-4" />}
            >
              Download CV
            </Button>
          </motion.div>

          {/* Subtext */}
          <motion.div
            variants={itemVariants}
            className="mt-5 flex items-center gap-2 text-xs font-mono text-text-tertiary"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent-primary" aria-hidden="true" />
            <span>{PERSONAL_INFO.education.institution} · {PERSONAL_INFO.education.degree}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll-down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          href="#about"
          aria-label="Scroll to About section"
          className="group flex flex-col items-center gap-1.5 text-text-tertiary transition-colors hover:text-accent-primary"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.9, ease: 'easeInOut' }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}

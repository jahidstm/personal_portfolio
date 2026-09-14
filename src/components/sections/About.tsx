'use client';

import Image from 'next/image';
import { Easing, motion, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { MapPin, BookOpen, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

const ease: Easing = [0.25, 0.46, 0.45, 0.94];

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease },
  }),
};

// About bio — written professionally based on confirmed data
const BIO_PARAGRAPHS = [
  "I'm Jahid Hasan, a final-year Software Engineering student at Daffodil International University (DIU), Dhaka, specialising in Data Science. I sit at the intersection of machine learning, data analytics, and software engineering — building systems that don't just process data, but derive meaningful insight from it.",
  "I've worked extensively with Python-based ML pipelines, computer vision architectures, and data visualisation tooling. My flagship project, DRISHTI-Bn, demonstrates my interest in applying deep learning to real-world impact — multimodal flood classification tailored for local context. I also build analytical dashboards that help decision-makers see patterns they'd otherwise miss.",
  "Currently seeking opportunities in AI/ML engineering and research collaborations where I can contribute rigorous, data-grounded thinking. I believe the most powerful technology is built slowly, tested honestly, and shipped with care.",
];

const QUICK_STATS = [
  { value: 5, suffix: '+', label: 'ML & Data Projects' },
  { value: 2, suffix: '+', label: 'Years Coding' },
  { value: 4, suffix: '+', label: 'Data Dashboards' },
  { value: 1, suffix: '', label: 'Research Paper (WIP)' },
];

// Animated counter hook — runs once when element enters viewport
function useCounter(target: number, duration = 1400) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (started) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const raf = requestAnimationFrame(function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    });
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return { count, ref };
}

function StatCard({
  stat,
}: {
  stat: (typeof QUICK_STATS)[number];
}) {
  const { count, ref } = useCounter(stat.value);
  return (
    <div className="flex flex-col items-center gap-1 rounded-2xl border border-border-subtle bg-bg-elevated/60 px-5 py-5 text-center backdrop-blur-sm">
      <span className="text-3xl font-extrabold text-text-primary sm:text-4xl">
        <span ref={ref}>{count}</span>
        <span className="text-accent-primary">{stat.suffix}</span>
      </span>
      <span className="text-xs font-medium leading-snug text-text-secondary">{stat.label}</span>
    </div>
  );
}

export function About() {
  const viewport = { once: true, amount: 0.2 as const };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Subtle section divider glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-default to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Who I Am"
          subtitle="A data-driven builder who turns complex information into actionable intelligence."
          id="about-heading"
        />

        <div className="mt-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — Profile photo + availability card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideLeft}
            className="flex flex-col items-center gap-6 lg:items-start"
          >
            {/* Photo frame */}
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-primary opacity-40 blur-lg" />
              <div className="relative overflow-hidden rounded-3xl border border-border-default bg-bg-elevated shadow-2xl">
                <Image
                  src="/images/profile.png"
                  alt="Jahid Hasan — Data Analyst & AI/ML Engineer"
                  width={380}
                  height={440}
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating availability badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{ delay: 0.6, duration: 0.4, ease }}
                className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-2xl border border-border-default bg-bg-surface/90 px-4 py-2.5 shadow-lg backdrop-blur-md"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-mono font-medium text-text-secondary whitespace-nowrap">
                  Open to Work
                </span>
              </motion.div>
            </div>

            {/* Location & education info pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <div className="flex items-center gap-1.5 rounded-full border border-border-subtle bg-bg-elevated px-3 py-1.5 text-xs font-medium text-text-secondary">
                <MapPin className="h-3.5 w-3.5 text-accent-primary" aria-hidden="true" />
                {PERSONAL_INFO.location}
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-border-subtle bg-bg-elevated px-3 py-1.5 text-xs font-medium text-text-secondary">
                <BookOpen className="h-3.5 w-3.5 text-accent-secondary" aria-hidden="true" />
                {PERSONAL_INFO.education.institution}
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-border-subtle bg-bg-elevated px-3 py-1.5 text-xs font-medium text-text-secondary">
                <Zap className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
                {PERSONAL_INFO.education.period}
              </div>
            </div>

            {/* Tech tag cloud */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {['Python', 'Machine Learning', 'PyTorch', 'SQL', 'Power BI', 'Next.js', 'Data Analysis'].map(
                (tag) => (
                  <Badge key={tag} label={tag} variant="tech" />
                )
              )}
            </div>
          </motion.div>

          {/* RIGHT — Bio text + quick stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideRight}
            className="flex flex-col gap-8"
          >
            {/* Bio paragraphs */}
            <div className="space-y-5">
              {BIO_PARAGRAPHS.map((para, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={fadeUp}
                  className="text-base leading-relaxed text-text-secondary sm:text-[15px]"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Quick Stats grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
              custom={3}
            >
              <p className="mb-4 text-xs font-mono font-medium tracking-widest text-accent-primary uppercase">
                By the numbers
              </p>
              <div className="grid grid-cols-2 gap-4">
                {QUICK_STATS.map((stat) => (
                  <StatCard key={stat.label} stat={stat} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

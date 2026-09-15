'use client';

import { useRef, useState } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import {
  Code2,
  Brain,
  BarChart3,
  Globe,
  Wrench,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { SKILLS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';
import type { SkillCategory, SkillLevel } from '@/types';
import React from 'react';

/* ─── Category Meta ─────────────────────────────────────────────── */
const CATEGORIES: {
  key: SkillCategory | 'All';
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}[] = [
  { key: 'All', label: 'All Skills', Icon: Zap },
  { key: 'Languages', label: 'Languages', Icon: Code2 },
  { key: 'ML/AI', label: 'ML / AI', Icon: Brain },
  { key: 'Data', label: 'Data Analytics', Icon: BarChart3 },
  { key: 'Web', label: 'Web & Backend', Icon: Globe },
  { key: 'Tools', label: 'Tools', Icon: Wrench },
];

const LEVEL_CONFIG: Record<SkillLevel, { label: string; color: string; dots: number }> = {
  beginner: {
    label: 'Beginner',
    color: 'text-text-muted border-border-default',
    dots: 1,
  },
  intermediate: {
    label: 'Proficient',
    color: 'text-accent-secondary border-accent-secondary/40',
    dots: 2,
  },
  advanced: {
    label: 'Advanced',
    color: 'text-accent-primary border-accent-primary/40',
    dots: 3,
  },
  expert: {
    label: 'Expert',
    color: 'text-emerald-400 border-emerald-400/40',
    dots: 4,
  },
};

/* ─── Variants ───────────────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─── Skill Card ─────────────────────────────────────────────────── */
function SkillCard({ name, level }: { name: string; level?: SkillLevel }) {
  const cfg = level ? LEVEL_CONFIG[level] : null;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -3, scale: 1.02 }}
      className={cn(
        'group relative flex items-center justify-between gap-3',
        'rounded-xl border border-border-default bg-bg-card',
        'px-4 py-3.5 backdrop-blur-sm',
        'hover:border-accent-primary/30 hover:bg-bg-elevated',
        'transition-colors duration-200'
      )}
    >
      {/* Subtle inner glow on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Skill name */}
      <span className="flex items-center gap-2 text-sm font-medium text-text-primary">
        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent-primary opacity-70" />
        {name}
      </span>

      {/* Level badge */}
      {cfg && (
        <span
          className={cn(
            'shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide',
            cfg.color
          )}
        >
          {cfg.label}
        </span>
      )}
    </motion.div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────── */
export function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory | 'All'>('All');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const filtered =
    activeTab === 'All' ? SKILLS : SKILLS.filter((s) => s.category === activeTab);

  // Group skills by category for the "All" view
  const grouped =
    activeTab === 'All'
      ? (CATEGORIES.slice(1) as { key: SkillCategory; label: string }[]).reduce<
          Record<SkillCategory, (typeof SKILLS)[number][]>
        >(
          (acc, { key }) => {
            acc[key] = SKILLS.filter((s) => s.category === key);
            return acc;
          },
          {} as Record<SkillCategory, (typeof SKILLS)[number][]>
        )
      : null;

  return (
    <section id="skills" className="relative py-24 px-6 md:px-12 lg:px-24" aria-labelledby="skills-heading">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute right-[-200px] top-[10%] h-[500px] w-[500px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }}
        />
        <div
          className="absolute left-[-150px] bottom-[10%] h-[400px] w-[400px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            id="skills-heading"
            label="Technical Skills"
            title="My Toolkit"
            subtitle="Technologies and tools I work with to build data-driven solutions and intelligent systems."
            centered
          />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Skill categories"
        >
          {CATEGORIES.map(({ key, label, Icon }) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                id={`skills-tab-${key.toLowerCase().replace(/\//g, '-')}`}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(key as SkillCategory | 'All')}
                className={cn(
                  'flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium',
                  'border transition-all duration-200',
                  isActive
                    ? 'border-accent-primary bg-accent-primary/10 text-accent-primary shadow-md shadow-accent-primary/10'
                    : 'border-border-default bg-bg-card text-text-secondary hover:border-border-hover hover:text-text-primary'
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <div ref={ref} className="mt-10">
          {/* Single-category view */}
          {activeTab !== 'All' && (
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
          )}

          {/* All-categories grouped view */}
          {activeTab === 'All' && grouped && (
            <div className="space-y-10">
              {(CATEGORIES.slice(1) as { key: SkillCategory; label: string; Icon: React.ComponentType<{ className?: string }> }[]).map(
                ({ key, label, Icon }, groupIdx) => {
                  const groupSkills = grouped[key];
                  if (!groupSkills?.length) return null;
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 24 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                      transition={{ duration: 0.45, delay: groupIdx * 0.1 }}
                    >
                      {/* Group label */}
                      <div className="mb-4 flex items-center gap-2">
                        <Icon className="h-4 w-4 text-accent-primary" />
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-text-muted">
                          {label}
                        </h3>
                        <div className="flex-1 border-t border-border-default" />
                      </div>

                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
                      >
                        {groupSkills.map((skill) => (
                          <SkillCard key={skill.name} name={skill.name} level={skill.level} />
                        ))}
                      </motion.div>
                    </motion.div>
                  );
                }
              )}
            </div>
          )}
        </div>

        {/* Bottom summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-border-default pt-8"
        >
          {CATEGORIES.slice(1).map(({ key, label }) => {
            const count = SKILLS.filter((s) => s.category === key).length;
            return (
              <div key={key} className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
                <span className="font-medium text-text-primary">{count}</span>
                <span>{label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

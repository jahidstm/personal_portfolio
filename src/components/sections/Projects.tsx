'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence, Variants } from 'framer-motion';
import {
  GitBranch,
  ExternalLink,
  Star,
  Layers,
  Brain,
  Globe,
  BarChart3,
  Filter,
  ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';
import { PROJECTS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import type { ProjectCategory } from '@/types';
import React from 'react';

/* ─── Filter Config ─────────────────────────────────────────────── */
const FILTERS: { key: ProjectCategory | 'All'; label: string; Icon: React.ComponentType<{ className?: string }> }[] = [
  { key: 'All', label: 'All Projects', Icon: Layers },
  { key: 'ML/AI', label: 'ML / AI', Icon: Brain },
  { key: 'Web', label: 'Web', Icon: Globe },
  { key: 'Data Analytics', label: 'Data Analytics', Icon: BarChart3 },
  { key: 'Dashboard', label: 'Dashboard', Icon: Filter },
];

/* ─── Animations ─────────────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: { opacity: 0, y: -16, scale: 0.97, transition: { duration: 0.25 } },
};

/* ─── Status badge colors ─────────────────────────────────────────── */
const STATUS_STYLE = {
  completed: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  'in-progress': 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
  research: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
} as const;

const STATUS_LABEL = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  research: 'Research',
} as const;

/* ─── Featured Project Card ─────────────────────────────────────── */
function FeaturedCard({ project }: { project: (typeof PROJECTS)[0] }) {
  return (
    <motion.article
      variants={cardVariants}
      className={cn(
        'group relative overflow-hidden rounded-2xl',
        'border border-border-default bg-bg-card',
        'p-8 md:p-10',
        'hover:border-accent-primary/40 transition-colors duration-300'
      )}
      aria-label={`Featured project: ${project.title}`}
    >
      {/* Inner glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse at 30% 0%, rgba(99,102,241,0.10) 0%, transparent 60%)',
        }}
      />

      {/* Featured label */}
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="flex items-center gap-1.5 rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-semibold text-accent-primary">
          <Star className="h-3 w-3 fill-current" />
          Featured Project
        </span>
        <span className={cn('rounded-full px-3 py-1 text-xs font-semibold', STATUS_STYLE[project.status])}>
          {STATUS_LABEL[project.status]}
        </span>
      </div>

      {/* Title + description */}
      <h3 className="mb-3 text-2xl font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-200">
        {project.title}
      </h3>
      <p className="mb-4 text-text-secondary leading-relaxed">
        {project.longDescription ?? project.description}
      </p>

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <ul className="mb-6 space-y-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-text-secondary">
              <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-primary" />
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Tech stack */}
      <div className="mb-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="tech" label={tech} />
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-3">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-github-${project.id}`}
            className={cn(
              'flex items-center gap-2 rounded-lg border border-border-default',
              'bg-bg-elevated px-4 py-2 text-sm font-medium text-text-secondary',
              'hover:border-accent-primary/40 hover:text-text-primary transition-all duration-200'
            )}
          >
            <GitBranch className="h-4 w-4" />
            GitHub
          </Link>
        )}
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-live-${project.id}`}
            className={cn(
              'flex items-center gap-2 rounded-lg border border-accent-primary/40',
              'bg-accent-primary/10 px-4 py-2 text-sm font-medium text-accent-primary',
              'hover:bg-accent-primary/20 transition-all duration-200'
            )}
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Link>
        )}
      </div>
    </motion.article>
  );
}

/* ─── Regular Project Card ──────────────────────────────────────── */
function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  return (
    <motion.article
      variants={cardVariants}
      layout
      whileHover={{ y: -4 }}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl',
        'border border-border-default bg-bg-card',
        'p-6',
        'hover:border-accent-primary/30 hover:shadow-lg hover:shadow-accent-primary/5',
        'transition-all duration-300'
      )}
      aria-label={`Project: ${project.title}`}
    >
      {/* Inner glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.07) 0%, transparent 65%)',
        }}
      />

      {/* Header */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-200">
          {project.title}
        </h3>
        <span className={cn('shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold', STATUS_STYLE[project.status])}>
          {STATUS_LABEL[project.status]}
        </span>
      </div>

      {/* Description */}
      <p className="mb-4 flex-1 text-sm text-text-secondary leading-relaxed line-clamp-2">
        {project.description}
      </p>

      {/* Tech stack (max 4 shown) */}
      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 4).map((tech) => (
          <Badge key={tech} variant="tech" label={tech} />
        ))}
        {project.techStack.length > 4 && (
          <span className="rounded-full border border-border-default px-2 py-0.5 text-[11px] text-text-muted">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>

      {/* Links row */}
      <div className="flex items-center gap-3 border-t border-border-default pt-4">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-github-${project.id}`}
            className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-primary transition-colors duration-200"
          >
            <GitBranch className="h-4 w-4" />
            GitHub
          </Link>
        )}
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-live-${project.id}`}
            className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-primary transition-colors duration-200"
          >
            <ExternalLink className="h-4 w-4" />
            Live
          </Link>
        )}
        <span className="ml-auto rounded-full bg-bg-elevated px-2.5 py-0.5 text-[11px] text-text-muted">
          {project.category}
        </span>
      </div>
    </motion.article>
  );
}

/* ─── Main Component ─────────────────────────────────────────────── */
export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  const filteredRest =
    activeFilter === 'All' ? rest : rest.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-12 lg:px-24"
      aria-labelledby="projects-heading"
    >
      {/* Background decoration */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-[-200px] top-[5%] h-[600px] w-[600px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }}
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
            id="projects-heading"
            label="My Work"
            title="Projects & Research"
            subtitle="A collection of ML systems, data analytics work, and intelligent web applications — built with real data and verified outcomes."
            centered
          />
        </motion.div>

        {/* Filter Tabs (only shown if non-featured projects exist) */}
        {rest.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Project category filters"
          >
            {FILTERS.map(({ key, label, Icon }) => {
              const isActive = activeFilter === key;
              return (
                <button
                  key={key}
                  id={`projects-filter-${key.toLowerCase().replace(/[\s/]/g, '-')}`}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(key as ProjectCategory | 'All')}
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
        )}

        {/* Featured Project */}
        {featured && (activeFilter === 'All' || activeFilter === featured.category) && (
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="mt-12"
          >
            <FeaturedCard project={featured} />
          </motion.div>
        )}

        {/* Rest of Projects */}
        {filteredRest.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredRest.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* "More coming soon" note */}
        {PROJECTS.length < 7 && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 text-center text-sm text-text-muted"
          >
            More projects coming soon — GitHub link descriptions being verified.
          </motion.p>
        )}
      </div>
    </section>
  );
}

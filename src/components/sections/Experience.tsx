'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TIMELINE_ITEMS } from '@/lib/constants';
import { GraduationCap, Briefcase } from 'lucide-react';

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      className="relative min-h-screen py-24 bg-bg-base overflow-hidden"
      aria-labelledby="experience-heading"
    >
      <div className="container px-4 sm:px-6 mx-auto relative z-10 max-w-5xl">
        <SectionHeading
          label="04 / Journey"
          title="Education & Experience"
          subtitle="My academic background and professional timeline."
        />

        <div className="mt-16 relative" ref={containerRef}>
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border-subtle md:-translate-x-1/2" />
          
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-px bg-accent-primary md:-translate-x-1/2 origin-top"
            style={{ scaleY: lineHeight }}
          />

          <div className="space-y-12 ml-10 md:ml-0">
            {TIMELINE_ITEMS.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <TimelineCard key={index} item={item} isEven={isEven} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ item, isEven }: { item: typeof TIMELINE_ITEMS[0]; isEven: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div 
      ref={ref}
      className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Center Icon */}
      <div className="absolute -left-10 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-bg-surface border-2 border-border-default flex items-center justify-center z-10 text-accent-primary">
        {item.type === 'education' ? <GraduationCap size={20} /> : <Briefcase size={20} />}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}
      >
        <div className="p-6 rounded-2xl bg-bg-surface border border-border-subtle hover:border-border-hover transition-colors shadow-sm relative">
          {item.current && (
            <span className="absolute -top-3 -right-3 px-3 py-1 bg-accent-muted text-accent-primary text-xs font-semibold rounded-full border border-accent-primary/20">
              Current
            </span>
          )}

          <span className="text-sm font-mono text-text-tertiary block mb-2">{item.period}</span>
          <h3 className="text-xl font-bold text-text-primary mb-1">{item.title}</h3>
          <h4 className="text-lg font-medium text-text-secondary mb-4">{item.organization}</h4>
          <p className="text-text-secondary leading-relaxed mb-4">{item.description}</p>
          
          {item.tags && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs font-mono rounded bg-bg-elevated text-text-secondary border border-border-subtle">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

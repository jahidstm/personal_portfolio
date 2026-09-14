'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  glass?: boolean;
  gradient?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Card({
  children,
  hover = false,
  glass = true,
  gradient = false,
  className,
  onClick,
}: CardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={cn(
        'rounded-2xl border transition-colors duration-300',
        glass && 'bg-bg-surface/80 backdrop-blur-sm',
        !glass && 'bg-bg-surface',
        gradient && 'bg-gradient-to-br from-accent-muted to-transparent',
        hover && 'cursor-pointer border-border-subtle hover:border-border-hover hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)]',
        !hover && 'border-border-subtle',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

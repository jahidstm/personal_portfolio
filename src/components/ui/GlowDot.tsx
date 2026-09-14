import { cn } from '@/lib/utils';
import { CSSProperties } from 'react';

interface GlowDotProps {
  size?: number;
  color?: 'primary' | 'secondary';
  style?: CSSProperties;
  className?: string;
}

export function GlowDot({ size = 300, color = 'primary', style, className }: GlowDotProps) {
  return (
    <span
      aria-hidden="true"
      className={cn('absolute rounded-full pointer-events-none select-none animate-float', className)}
      style={{
        width: size,
        height: size,
        background:
          color === 'primary'
            ? 'radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)',
        filter: 'blur(40px)',
        opacity: 0.5,
        ...style,
      }}
    />
  );
}

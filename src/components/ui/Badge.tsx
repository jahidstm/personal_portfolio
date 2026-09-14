import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-md font-mono font-medium transition-colors',
  {
    variants: {
      variant: {
        tech: 'bg-accent-muted text-accent-glow border border-border-subtle px-2.5 py-0.5 text-xs',
        status:
          'px-2.5 py-0.5 text-xs border',
        category:
          'bg-bg-elevated text-text-secondary border border-border-subtle px-3 py-1 text-xs',
      },
      status: {
        completed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        'in-progress': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        research: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
        default: '',
      },
    },
    defaultVariants: {
      variant: 'tech',
      status: 'default',
    },
  }
);

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  label: string;
  className?: string;
}

export function Badge({ label, variant, status, className }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, status }), className)}>
      {variant === 'status' && status && status !== 'default' && (
        <span
          className={cn('h-1.5 w-1.5 rounded-full', {
            'bg-emerald-400': status === 'completed',
            'bg-amber-400': status === 'in-progress',
            'bg-cyan-400': status === 'research',
          })}
        />
      )}
      {label}
    </span>
  );
}

'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'font-semibold rounded-lg transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base',
    'disabled:pointer-events-none disabled:opacity-50',
    'active:scale-[0.98]',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-accent-primary text-white shadow-lg',
          'hover:bg-accent-glow hover:shadow-accent-primary/30 hover:shadow-xl hover:scale-[1.02]',
        ],
        secondary: [
          'border border-border-default text-text-primary bg-transparent',
          'hover:bg-bg-elevated hover:border-border-hover hover:scale-[1.02]',
        ],
        ghost: [
          'text-text-secondary bg-transparent',
          'hover:text-text-primary hover:bg-bg-elevated',
        ],
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-13 px-8 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  icon?: ReactNode;
  loading?: boolean;
  external?: boolean;
}

export function Button({
  variant,
  size,
  href,
  icon,
  loading,
  external,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {icon && !loading && <span className="shrink-0">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled ?? loading} {...props}>
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin shrink-0" />
      ) : (
        icon && <span className="shrink-0">{icon}</span>
      )}
      {children}
    </button>
  );
}

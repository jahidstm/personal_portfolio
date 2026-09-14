'use client';

import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      id="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={cn(
        'relative flex h-8 w-8 items-center justify-center rounded-lg',
        'text-text-secondary transition-colors duration-200',
        'hover:bg-bg-elevated hover:text-text-primary',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary'
      )}
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

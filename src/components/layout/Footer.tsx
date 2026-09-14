import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/BrandIcons';
import { Mail, ArrowUp } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: GitHubIcon,
  Linkedin: LinkedInIcon,
  Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-surface/50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <span className="font-mono text-sm font-semibold text-text-primary">
              <span className="text-accent-primary">&lt;</span>
              {PERSONAL_INFO.name.split(' ')[0]}
              <span className="text-accent-primary">/&gt;</span>
            </span>
            <p className="text-xs text-text-tertiary">
              Built with Next.js &amp; ❤️
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <Link
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={link.name}
                  className="text-text-tertiary transition-colors hover:text-accent-primary"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                </Link>
              );
            })}
          </div>

          {/* Scroll to top */}
          <a
            href="#"
            aria-label="Scroll to top"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-subtle text-text-tertiary transition-all hover:border-border-hover hover:text-text-primary hover:scale-110"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-text-tertiary">
          © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

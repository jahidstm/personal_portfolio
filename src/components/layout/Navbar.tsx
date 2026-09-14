'use client';

import { NAV_LINKS, PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/BrandIcons';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Detect scroll for background blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const githubLink = SOCIAL_LINKS.find((s) => s.name === 'GitHub');
  const linkedinLink = SOCIAL_LINKS.find((s) => s.name === 'LinkedIn');

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-bg-base/80 backdrop-blur-md border-b border-border-subtle shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="#"
          className="group flex items-center gap-2 font-mono text-sm font-semibold text-text-primary"
          aria-label="Home"
        >
          <span className="text-accent-primary transition-colors group-hover:text-accent-glow">&lt;</span>
          <span className="transition-colors group-hover:text-accent-primary">
            {PERSONAL_INFO.name.split(' ')[0]}
          </span>
          <span className="text-accent-primary transition-colors group-hover:text-accent-glow">/&gt;</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200',
                  isActive ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop social icons + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {githubLink && (
            <Link
              href={githubLink.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-secondary transition-colors hover:text-text-primary"
            >
              <GitHubIcon className="h-4 w-4" />
            </Link>
          )}
          {linkedinLink && (
            <Link
              href={linkedinLink.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-secondary transition-colors hover:text-text-primary"
            >
              <LinkedInIcon className="h-4 w-4" />
            </Link>
          )}
          <Link
            href="#contact"
            className="ml-2 rounded-lg bg-accent-primary px-4 py-1.5 text-sm font-semibold text-white transition-all hover:bg-accent-glow hover:scale-[1.02]"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden items-center justify-center rounded-lg p-2 text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-border-subtle bg-bg-base/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-bg-elevated hover:text-text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex items-center gap-4 border-t border-border-subtle pt-3">
                {githubLink && (
                  <Link href={githubLink.url} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary">
                    <GitHubIcon className="h-4 w-4" />
                  </Link>
                )}
                {linkedinLink && (
                  <Link href={linkedinLink.url} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary">
                    <LinkedInIcon className="h-4 w-4" />
                  </Link>
                )}
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="ml-auto rounded-lg bg-accent-primary px-4 py-1.5 text-sm font-semibold text-white hover:bg-accent-glow"
                >
                  Hire Me
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

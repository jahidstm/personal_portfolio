'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin } from 'lucide-react';
import { contactSchema, type ContactFormData } from '@/lib/validations';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/lib/constants';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/BrandIcons';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: GitHubIcon,
  Linkedin: LinkedInIcon,
  Mail,
};

export function Contact() {
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSubmitState('success');
      reset();
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setSubmitState('idle');
      }, 5000);
    } catch (error: any) {
      setSubmitState('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-bg-surface overflow-hidden" aria-labelledby="contact-heading">
      <div className="container px-4 sm:px-6 mx-auto relative z-10 max-w-6xl">
        <SectionHeading
          label="05 / Connect"
          title="Get In Touch"
          subtitle="Open for opportunities, research collaborations, or just a chat about data and AI."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column: Info & Socials */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">amazing together.</span>
            </h3>
            <p className="text-text-secondary leading-relaxed mb-8 max-w-md">
              Whether you have a specific project in mind or just want to explore possibilities, I'm always eager to connect. Feel free to reach out via the form or connect on social platforms.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-text-secondary">
                <div className="w-12 h-12 rounded-full bg-bg-elevated flex items-center justify-center border border-border-subtle">
                  <Mail className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-tertiary">Email</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-medium text-text-primary hover:text-accent-primary transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-text-secondary">
                <div className="w-12 h-12 rounded-full bg-bg-elevated flex items-center justify-center border border-border-subtle">
                  <MapPin className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-tertiary">Location</p>
                  <p className="text-lg font-medium text-text-primary">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.icon] || Mail;
                return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 hover:bg-accent-muted transition-all hover:-translate-y-1"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-bg-base border border-border-default rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg relative overflow-hidden">
              
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 blur-[100px] rounded-full pointer-events-none" />

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-text-secondary">Name</label>
                    <input
                      id="name"
                      type="text"
                      {...register('name')}
                      className={`w-full bg-bg-elevated border ${errors.name ? 'border-error' : 'border-border-subtle focus:border-accent-primary'} rounded-xl px-4 py-3 text-text-primary outline-none transition-colors`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-error text-xs">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-text-secondary">Email</label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className={`w-full bg-bg-elevated border ${errors.email ? 'border-error' : 'border-border-subtle focus:border-accent-primary'} rounded-xl px-4 py-3 text-text-primary outline-none transition-colors`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-error text-xs">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-text-secondary">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    {...register('subject')}
                    className={`w-full bg-bg-elevated border ${errors.subject ? 'border-error' : 'border-border-subtle focus:border-accent-primary'} rounded-xl px-4 py-3 text-text-primary outline-none transition-colors`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && <p className="text-error text-xs">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-text-secondary">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className={`w-full bg-bg-elevated border ${errors.message ? 'border-error' : 'border-border-subtle focus:border-accent-primary'} rounded-xl px-4 py-3 text-text-primary outline-none transition-colors resize-none`}
                    placeholder="Hello, I'd like to talk about..."
                  />
                  {errors.message && <p className="text-error text-xs">{errors.message.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  className="w-full justify-center py-4 text-base" 
                  loading={isSubmitting || submitState === 'loading'}
                  icon={<Send size={18} />}
                >
                  {isSubmitting || submitState === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
                
                {/* Status Messages */}
                <AnimatePresence mode="wait">
                  {submitState === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-success bg-success/10 p-4 rounded-xl border border-success/20"
                    >
                      <CheckCircle2 size={20} />
                      <p className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
                    </motion.div>
                  )}

                  {submitState === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-error bg-error/10 p-4 rounded-xl border border-error/20"
                    >
                      <AlertCircle size={20} />
                      <p className="text-sm font-medium">{errorMessage}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

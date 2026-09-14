/**
 * Core Type Definitions for Jahid Hasan Portfolio
 * Strict TypeScript interfaces for projects, skills, timeline, and contact form
 */

export interface Project {
  id: string;
  title: string;
  category: 'ml' | 'data' | 'web';
  summary: string;
  problem?: string;
  solution?: string;
  metrics?: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  level?: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'experience' | 'achievement';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

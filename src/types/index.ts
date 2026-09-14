/**
 * TypeScript Data Models & Interfaces
 * Jahid Hasan — Developer Portfolio
 *
 * Strict Mode enforced: No `any` types allowed.
 */

export type ProjectCategory = 'ML/AI' | 'Web' | 'Data Analytics' | 'Dashboard';
export type ProjectStatus = 'completed' | 'in-progress' | 'research';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  imageUrl?: string;
  highlights?: string[];
  metrics?: string[];
}

export type SkillCategory = 'Languages' | 'ML/AI' | 'Data' | 'Web' | 'Tools';
export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Skill {
  name: string;
  category: SkillCategory;
  level?: SkillLevel;
  icon?: string;
}

export type TimelineType = 'education' | 'experience';

export interface TimelineItem {
  type: TimelineType;
  title: string;
  organization: string;
  period: string;
  description: string;
  tags?: string[];
  current?: boolean;
  highlights?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export type Theme = 'dark' | 'light';

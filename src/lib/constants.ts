import {
  Project,
  Skill,
  TimelineItem,
  NavLink,
  SocialLink,
} from '@/types';

/**
 * Personal & Profile Information
 * Single Source of Truth — No invented data
 */
export const PERSONAL_INFO = {
  name: 'Jahid Hasan',
  role: 'Data Analyst | Aspiring AI/ML Engineer',
  tagline:
    'Final-year Software Engineering student specializing in Data Science. Building AI/ML systems, data-driven analytics, and intelligent web applications.',
  education: {
    degree: 'B.Sc. in Software Engineering (Data Science Specialization)',
    institution: 'Daffodil International University (DIU)',
    location: 'Dhaka, Bangladesh',
    period: '2023 – Dec 2026 (Expected Graduation)',
  },
  location: 'Dhaka, Bangladesh',
  availability: 'Open to Opportunities & Research Collaborations',
  email: 'jahidhasanstm@gmail.com',
};

/**
 * Navigation Bar Links
 */
export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Social and Professional Profiles
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/jahidstm',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/jahidstm',
    icon: 'Linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:jahidhasanstm@gmail.com',
    icon: 'Mail',
  },
];

/**
 * Education & Experience Timeline
 */
export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    type: 'education',
    title: 'B.Sc. in Software Engineering (Data Science Specialization)',
    organization: 'Daffodil International University',
    period: '2023 – Dec 2026',
    description:
      'Focusing on Machine Learning, Deep Learning, Statistical Data Analysis, Algorithms, and Software System Design.',
    tags: ['Data Science', 'Machine Learning', 'Software Engineering', 'Python', 'Algorithms'],
    current: true,
  },
];

/**
 * Core Technical Skills
 */
export const SKILLS: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages', level: 'advanced' },
  { name: 'SQL', category: 'Languages', level: 'intermediate' },
  { name: 'TypeScript', category: 'Languages', level: 'intermediate' },
  { name: 'JavaScript', category: 'Languages', level: 'intermediate' },

  // ML / AI
  { name: 'Machine Learning', category: 'ML/AI', level: 'advanced' },
  { name: 'Deep Learning', category: 'ML/AI', level: 'intermediate' },
  { name: 'PyTorch / TensorFlow', category: 'ML/AI', level: 'intermediate' },
  { name: 'Scikit-Learn', category: 'ML/AI', level: 'advanced' },
  { name: 'Computer Vision', category: 'ML/AI', level: 'intermediate' },

  // Data Analytics
  { name: 'Pandas & NumPy', category: 'Data', level: 'advanced' },
  { name: 'Power BI', category: 'Data', level: 'intermediate' },
  { name: 'Data Visualization', category: 'Data', level: 'advanced' },
  { name: 'Exploratory Data Analysis', category: 'Data', level: 'advanced' },

  // Web & Backend
  { name: 'Next.js (App Router)', category: 'Web', level: 'intermediate' },
  { name: 'React', category: 'Web', level: 'intermediate' },
  { name: 'Tailwind CSS', category: 'Web', level: 'advanced' },
  { name: 'REST APIs', category: 'Web', level: 'intermediate' },

  // Tools
  { name: 'Git & GitHub', category: 'Tools', level: 'advanced' },
  { name: 'Jupyter Notebooks', category: 'Tools', level: 'advanced' },
  { name: 'VS Code', category: 'Tools', level: 'advanced' },
];

/**
 * Verified Projects
 * DRISHTI-Bn is confirmed flagship project.
 * Remaining project cards will be added in Phase 3 after user supplies README descriptions.
 */
export const PROJECTS: Project[] = [
  {
    id: 'drishti-bn',
    title: 'DRISHTI-Bn',
    description:
      'Multimodal flood classification and disaster intelligence system tailored for local environmental and linguistic context.',
    longDescription:
      'A specialized machine learning research and application project focused on multimodal flood detection, disaster impact classification, and automated visual data analysis.',
    techStack: ['Python', 'PyTorch', 'Computer Vision', 'Deep Learning', 'Data Analysis'],
    category: 'ML/AI',
    status: 'completed',
    featured: true,
    githubUrl: 'https://github.com/jahidstm',
    highlights: [
      'Multimodal flood classification architecture',
      'Computer vision pipeline for disaster assessment',
      'Bengali context data preparation & evaluation',
    ],
  },
  // NOTE: Phase 3 Gate — RoktoDut, BanglaMind, Shishu Mela, HR Analytics, Netflix Viz, BD Population
  // will be populated once the user provides project READMEs.
];

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'Distributed Systems' | 'Cloud & DevOps' | 'AI & APIs';
  description: string;
  architectureDetails: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  stats?: string;
  previewImage?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    icon?: string;
    highlight?: string;
  }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface StatItem {
  label: string;
  value: string;
  subtext: string;
}

export interface PortfolioData {
  name: string;
  handle: string;
  title: string;
  headline: string;
  subheadline: string;
  location: string;
  status: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  resumeUrl: string;
  stats: StatItem[];
  about: {
    paragraphs: string[];
    coreValues: { title: string; desc: string; icon: string }[];
  };
  projects: Project[];
  skills: SkillCategory[];
  experience: Experience[];
}

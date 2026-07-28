export type NavTab = 'home' | 'about' | 'portfolio' | 'blog' | 'contact';

export interface ExpertiseCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
  isCurrent?: boolean;
}

export interface PhilosophyPillar {
  title: string;
  description: string;
  iconName: 'target' | 'trending-up' | 'history';
}

export type ProjectCategory = 'All' | 'Web Dev' | 'Mobile' | 'UI/UX' | 'Branding';

export interface Project {
  id: string;
  title: string;
  category: 'Web Dev' | 'Mobile' | 'UI/UX' | 'Branding';
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

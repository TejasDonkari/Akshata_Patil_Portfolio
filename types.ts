import React from 'react';

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  repo?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

export interface PortfolioData {
  name: string;
  role: string;
  summary: string;
  email: string;
  github: string;
  linkedin: string;
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
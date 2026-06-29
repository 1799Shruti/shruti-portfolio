export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SkillItem {
  name: string;
  detail: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  details: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  score: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  link: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
}

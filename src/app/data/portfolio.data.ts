import {
  ContactItem,
  EducationItem,
  ExperienceItem,
  NavItem,
  ProjectItem,
  SkillItem,
  StatItem,
} from '../models/portfolio.models';

export const profile = {
  name: 'Shruti Bhandari',
  role: 'Software Engineer',
  location: 'Pune, India',
  tagline:
    'Innovative Full Stack Developer committed to writing clean, maintainable code and delivering impactful business solutions through modern web technologies.',
};

export const navItems: NavItem[] = [
  { label: 'About Me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Featured Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const stats: StatItem[] = [
  { value: '4.5 yrs', label: 'professional experience' },
  { value: 'MCA', label: 'postgraduate qualification' },
  { value: 'Project Lead', label: 'leadership experience' },
];

export const skillSet: SkillItem[] = [
  {
    name: 'Angular & React',
    detail:
      'Building responsive, scalable interfaces with thoughtful component architecture and modern UX patterns.',
  },
  {
    name: 'TypeScript & JavaScript',
    detail:
      'Writing clean, reliable client-side logic that stays maintainable as products grow.',
  },
  {
    name: 'Node.js & Express',
    detail:
      'Creating robust APIs and backend services that power delightful user experiences.',
  },
  {
    name: 'MongoDB & APIs',
    detail:
      'Connecting applications to data sources with efficient, secure, and well-structured integrations.',
  },
];

export const experience: ExperienceItem[] = [
  {
    title: 'Software Engineer',
    company: 'Centralogic',
    period: '2022 – Present',
    details: [
      'Delivered full-stack web solutions across client-facing products and internal tools.',
      'Worked on modern frontend development with Angular and React while supporting backend services.',
      'Progressed into a leadership role and was promoted as Project Manager for project oversight and execution.',
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Pune University',
    year: '2022',
    score: '8.9 CGPA',
  },
  {
    degree: 'Bachelor of Science (Computer Science)',
    institution: 'Pune University',
    year: '2020',
    score: '8.8 CGPA',
  },
];

export const projects: ProjectItem[] = [
  {
    title: 'Certifi',
    description:
      'A digital certification platform that simplifies issuance, validation, and tracking for users and administrators.',
    stack: ['Angular', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Mentoria',
    description:
      'A career counselling website focused on delivering clear, supportive guidance through a polished digital journey.',
    stack: ['React', 'Express', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Learning AI',
    description:
      'A violation and red flag detection platform for podcasts that helps surface important insights quickly and clearly.',
    stack: ['TypeScript', 'AI APIs', 'Full-stack'],
    link: '#',
  },
];

export const contactDetails: ContactItem[] = [
  {
    label: 'Email',
    value: 'bhandarishruti1791999@gmail.com',
    href: 'mailto:bhandarishruti1791999@gmail.com',
  },
  {
    label: 'Location',
    value: 'Pune, India',
    href: 'https://maps.google.com/?q=Pune+India',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/shruti-bhandari-093375202',
    href: 'https://www.linkedin.com/in/shruti-bhandari-093375202/',
  },
];

import {
  Target,
  Layers3,
  Code2,
  Bot,
  Rocket,
  Store,
  BarChart3,
  Cpu,
  FlaskConical,
} from 'lucide-react';

export type ProjectMedia = {
  type: 'image' | 'mp4' | 'youtube';
  src: string;
  label: string;
};

export type ProjectData = {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  problem: string;
  decisions: string[];
  stack: string[];
  infrastructure: string[];
  roadmap: string[];
  links: {
    github: string;
    demo: string;
  };
  hero: {
    summary: string;
    outcome: string;
    metrics: string[];
  };
  media: ProjectMedia[];
  diagram: string;
  featured?: boolean;
  category?: 'ai' | 'automation' | 'saas' | 'research' | 'business';
};
export type SpecializationCard = {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: any;
  color: string;
};

export type ProcessStep = {
  order: number;
  title: string;
  description: string;
  icon: any;
};

export type RoadmapItem = {
  quarter: string;
  year: number;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  category: 'ai' | 'saas' | 'research' | 'automation' | 'business';
};

export type TechCategory = {
  name: string;
  items: string[];
};

export const projects: ProjectData[] = [
  {
    slug: 'siga',
    title: 'SIGA — Instituto Correggio',
    subtitle: 'Academic management system (Production)',
    overview:
      'Academic management system for a vocational training institution. Multi-unit, multi-role architecture with authentication, access control, student and course management, attendance tracking, academic progress monitoring, and operational dashboards.',
    problem:
      'The institution required a single system to manage students, courses, attendance, and reporting across multiple units without relying on spreadsheets.',
    decisions: [
      'Tenant-aware data model and role-based access control for multi-unit support.',
      'Backend APIs for student, course, and attendance workflows.',
      'Operational dashboards for instructors and administrators.'
    ],
    stack: [
      'React',
      'TypeScript',
      'FastAPI',
      'Python',
      'Supabase',
      'PostgreSQL',
      'Cloudflare'
    ],
    infrastructure: [
      'Production deployment with database backups and secure endpoints.',
      'Background jobs for attendance processing and notifications.',
      'Monitoring for key operational metrics.'
    ],
    roadmap: [
      'Improve reporting and instructor-facing workflows.',
      'Add bulk-import utilities for course and student data.',
      'Refine role permissions and audit logs.'
    ],
    links: {
      github: 'https://github.com/arnaldorocha/siga_corregio',
      demo: 'https://siga-correggio.pages.dev/auth'
    },
    hero: {
      summary:
        'Academic management for multi-unit vocational education with role-aware access and operational dashboards.',
      outcome: 'Reliable production system used by Instituto Correggio for day-to-day academic operations.',
      metrics: ['Production deployment', 'Multi-role access', 'Operational dashboards']
    },
    media: [
      {
        type: 'image',
        src: '/project-screenshots/corregio.png',
        label: 'Authentication and tenant management console'
      },
      
      {
        type: 'image',
        src: '/project-screenshots/SigaCorregioDashboard.png',
        label: ' Basic Dashboard'
      },
      {
        type: 'mp4',
        src: '/videos/demosigas.mp4',
        label: 'Demo'
      }
    ],
    diagram: 'System connecting authentication, course management, attendance, and dashboards.'
  },
  {
    slug: 'adpulse',
    title: 'AdsPulse',
    subtitle: 'Meta Business dashboard with AI insights (In Development)',
    overview:
      'Meta Business dashboard with campaign analytics, geolocation data, and AI-generated insights via Groq API. Built as a SaaS product targeting small business owners.',
    problem:
      'Small businesses need actionable marketing data without a dedicated analyst to interpret campaign performance.',
    decisions: [
      'Aggregated campaign metrics and geolocation signals for clearer reporting.',
      'Integrated Groq API for lightweight AI-generated insights and summaries.',
      'Designed simple onboarding for non-technical users.'
    ],
    stack: [
      'Python',
      'Groq API',
      'Meta Business API'
    ],
    infrastructure: [
      'Scheduled data pulls from Meta Business API.',
      'Processing pipeline for geolocation and campaign aggregation.',
      'Secure storage for account tokens and metrics.'
    ],
    roadmap: [
      'Add reusable campaign templates and clearer KPI reports.',
      'Improve AI insight accuracy and explainability.',
      'Onboard pilot customers and iterate on feedback.'
    ],
    links: {
      github: 'https://github.com/arnaldorocha/adpulse',
      demo: 'https://adpulse-b7e.pages.dev/'
    },
    hero: {
      summary: 'SaaS dashboard that turns campaign data into actionable insights for small businesses.',
      outcome: 'Streamlines campaign review and surfaces AI-assisted recommendations.',
      metrics: ['Campaign aggregation', 'AI summaries', 'Pilot SaaS flow']
    },
    media: [
  {
    type: 'image',
    src: '/project-screenshots/AdPulse.png',
    label: 'AdPulse dashboard overview'
  },
  {
    type: 'image',
    src: '/project-screenshots/adpulsedata.png',
    label: 'Data view'
  },
  {
    type: 'image',
    src: '/project-screenshots/adcampanhas.png',
    label: 'Campaign analytics'
  },
      {
        type: 'mp4',
        src: '/videos/demoadpulse.mp4',
        label: 'Demo'
      }
  
],
    diagram: 'Pipeline for ingesting campaign data, running analytics, and surfacing recommendations.'
  },
  {
    slug: 'central-da-corridas',
    title: 'Central da Corridas',
    subtitle: 'Automated ride operations system — client project',
    overview:
      'Automated conversational system for ride operations. Handles booking flows, fare calculation, and client communication end-to-end via WhatsApp.',
    problem:
      'Managing ride bookings and fare calculation manually created operational friction — inconsistent pricing, delayed responses, and no structured communication flow between the operator and clients.',
    decisions: [
      'Implemented conversational flow handlers with fare calculation logic.',
      'Integrated WhatsApp API for messaging and N8N for orchestration.',
      'Built manual escalation paths for edge cases requiring operator intervention.'
    ],
    stack: [
      'Python',
      'WhatsApp API',
      'N8N'
    ],
    infrastructure: [
      'Webhook handlers for WhatsApp sessions.',
      'Task routing for booking and pricing operations.',
      'Logging and retry behavior for message delivery.'
    ],
    roadmap: [
      'Fare rules management interface',
      'Improved delivery guarantees and message retry handling',
      'Payment confirmation flow integration'
    ],
    links: {
      github: '',
      demo: ''
    },
    hero: {
      summary: 'Automated conversational ride operations and pricing via WhatsApp messaging.',
      outcome: 'Automates full booking and pricing flows while preserving manual intervention for non-standard cases.',
      metrics: ['Automated booking flow', 'Fare calculation', 'Manual escalation paths']
    },
    media: [],
    diagram: ''
  },
  {
    slug: 'whatsapp-dispatch-correggio',
    title: 'WhatsApp Dispatch System — Instituto Correggio',
    subtitle: 'Institutional WhatsApp automation (In Development)',
    overview:
      'Automated WhatsApp messaging system for institutional communication workflows at Instituto Correggio.',
    problem:
      'The institution needed reliable messaging workflows for announcements, reminders, and operational updates.',
    decisions: [
      'Built message templates and scheduling for institutional workflows.',
      'Used N8N for orchestration and Python services for business logic.',
      'Added monitoring for message delivery and fallback paths.'
    ],
    stack: [
      'Python',
      'N8N',
      'WhatsApp API'
    ],
    infrastructure: [
      'Scheduling and retry logic for message dispatch.',
      'Template management for institution-wide messages.',
      'Delivery monitoring and fallback escalation.'
    ],
    roadmap: [
      'Create reusable institutional templates.',
      'Add reporting for message delivery and engagement.',
      'Iterate templates with administrative users.'
    ],
    links: {
      github: '',
      demo: ''
    },
    hero: {
      summary: 'Institutional WhatsApp automation for operational communication.',
      outcome: 'Makes routine messaging predictable and easier to manage at scale.',
      metrics: ['Scheduled dispatch', 'Template reuse', 'Delivery monitoring']
    },
    media: [],
    diagram: 'Dispatch system connecting templates, schedules, and delivery monitoring.'
  },
  {
    slug: 'salon-management-system',
    title: 'Salon Management System',
    subtitle: 'Scheduling and client workflows (In Development)',
    overview: 'Operational management system for beauty salon workflows: scheduling, client management, and operational control.',
    problem: 'Salons needed a consistent scheduling and client tracking tool that fits small business workflows.',
    decisions: [
      'Designed a booking-first data model and schedule conflict handling.',
      'Built appointment notifications and simple reporting for staff.',
      'Focused on lightweight admin UI for non-technical users.'
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL'],
    infrastructure: ['Background jobs for reminders and sync', 'Secure API for bookings', 'Lightweight admin UI'],
    roadmap: ['Add recurring appointments and service bundles', 'Improve staff availability handling'],
    links: { github: '', demo: '' },
    hero: {
      summary: 'Scheduling and operational tooling tailored for small salons.',
      outcome: 'Simplifies bookings and staff coordination.',
      metrics: ['Booking management', 'Notifications', 'Staff scheduling']
    },
    
    media: [  {
    type: 'mp4',
    src: '/videos/bookingsalon.mp4',
    label: 'Demo'
  },
],
    diagram: 'Booking flow, notifications, and staff calendar.'
  },
  {
    slug: 'financial-management-system',
    title: 'Financial System with Custom Goals',
    subtitle: 'Financial management with configurable targets (In Development)',
    overview:
      'Financial management system with configurable percentage-based targets and progress tracking.',
    problem:
      'Teams needed a way to track financial goals and see progress against configurable targets.',
    decisions: [
      'Implemented configurable goal objects and progress calculations.',
      'Built validation for financial entries and simple reconciliation workflows.',
      'Added dashboards for tracking goal progress over time.'
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL'],
    infrastructure: ['Scheduled reconciliation jobs', 'Validation and audit trails', 'Goal reporting dashboards'],
    roadmap: ['Add exportable reports', 'Alerting for missed targets'],
    links: { github: 'https://github.com/arnaldorocha/sistema_financeiro', demo: '' },
    hero: {
      summary: 'Tooling for setting and tracking percentage-based financial goals.',
      outcome: 'Helps teams monitor progress against configurable targets.',
      metrics: ['Configurable targets', 'Progress tracking']
    },
    media: [  {
    type: 'mp4',
    src: '/videos/demofinanceiro.mp4',
    label: 'Demo'
  }
],
    diagram: 'Goal tracking, data ingestion, and reporting.'
  },
  {
    slug: 'jarvis',
    title: 'Jarvis — Personal AI Assistant Roadmap',
    subtitle: 'Public roadmap for building a personal AI assistant (Public)',
    overview:
      'Public roadmap documenting how to build a personal AI assistant using automation, APIs, AI models, and integrated systems. Intended as an open engineering reference.',
    problem:
      'Provide a practical, step-by-step engineering reference for building a personal assistant that integrates automation and AI.',
    decisions: [
      'Documented incremental stages from simple automation to integrated model-driven assistants.',
      'Focused on reproducible, small-step engineering guidance and runnable examples.',
      'Included monitoring and fallback recommendations for real-world use.'
    ],
    stack: ['Python', 'APIs', 'Automation patterns'],
    infrastructure: ['Prototype runtimes, task queues, and connectors'],
    roadmap: ['Publish stage guides', 'Add reproducible examples and recipes', 'Collect community feedback'],
    links: { github: 'https://github.com/arnaldorocha/jarvis', demo: '' },
    hero: {
      summary: 'A public engineering roadmap for building a personal AI assistant.',
      outcome: 'A reference that documents practical engineering decisions and trade-offs.',
      metrics: ['Public roadmap', 'Reproducible examples']
    },
    media: [],
    diagram: 'Layered assistant architecture: connectors, workflow runtime, model calls, and monitoring.'
  }
];

// Mark featured projects for homepage
projects.forEach((project) => {
  if (['siga', 'adpulse', 'jarvis'].includes(project.slug)) {
    project.featured = true;
  }

  // Categorize projects
  if (project.slug === 'jarvis') {
    project.category = 'ai';
  } else if (['adpulse', 'siga'].includes(project.slug)) {
    project.category = 'saas';
  } else if (['whatsapp-dispatch-correggio', 'central-da-corridas'].includes(project.slug)) {
    project.category = 'automation';
  } else {
    project.category = 'business';
  }
});

// ====================
// SPECIALIZATIONS
// ====================

export const specializations: SpecializationCard[] = [
  {
    id: 'local-business',
    title: 'Local Business Tools',
    description:
      'Software that helps local businesses move away from spreadsheets and manual tracking toward reliable workflows and APIs.',
    benefits: [
      'Backend systems for bookings and inventory',
      'Automated reminders and notifications',
      'Clear operational workflows',
      'Data-driven business insights',
    ],
    icon: Store,
    color: 'from-blue-500/20 to-cyan-500/20',
  },

  {
    id: 'backend-apis',
    title: 'Backend APIs',
    description:
      'Designing APIs and data models for services that need consistent behavior, validation, and reliable integration.',
    benefits: [
      'Consistent request handling',
      'Well-defined data contracts',
      'Secure authentication and authorization',
      'Easier maintenance and testing',
    ],
    icon: BarChart3,
    color: 'from-purple-500/20 to-pink-500/20',
  },

  {
    id: 'automation-ai',
    title: 'Automation & AI',
    description:
      'Building automation flows, task queues, and AI integrations that reduce repetitive work and support real use cases.',
    benefits: [
      'Practical workflow automation',
      'Reliable API integration',
      'Prompt engineering and model evaluation',
      'Reusable automation patterns',
    ],
    icon: Cpu,
    color: 'from-green-500/20 to-emerald-500/20',
  },

  {
    id: 'learning-projects',
    title: 'Learning Projects',
    description:
      'Experimentation with AI, systems design, and new tooling while focusing on what can be built and maintained in real code.',
    benefits: [
      'Applied AI experiments',
      'Incremental system improvements',
      'Practical prototype work',
      'Technical learning in public',
    ],
    icon: FlaskConical,
    color: 'from-amber-500/20 to-orange-500/20',
  },
];

// ====================
// PROCESS WORKFLOW
// ====================
export const processSteps: ProcessStep[] = [
  {
    order: 1,
    title: 'Understand the problem',
    description: 'Gather requirements, review systems, and identify the workflow or API that will make a real difference.',
    icon: Target
  },
  {
    order: 2,
    title: 'Design the system',
    description: 'Define APIs, data flows, and integration points with a focus on simplicity, reliability, and repeatability.',
    icon: Layers3
  },
  {
    order: 3,
    title: 'Build and test',
    description: 'Write clean code, add tests, and validate behavior with real data and end-to-end checks.',
    icon: Code2
  },
  {
    order: 4,
    title: 'Automate and connect',
    description: 'Tie together workflows, background jobs, and AI calls so the system reduces manual work and stays consistent.',
    icon: Bot
  },
  {
    order: 5,
    title: 'Launch and learn',
    description: 'Deploy the project, collect feedback, and iterate based on actual usage and technical findings.',
    icon: Rocket
  }
];

// ====================
// ROADMAP
// ====================
export const roadmap: RoadmapItem[] = [
  {
    quarter: 'Q1',
    year: 2025,
    title: 'Local business workflow tools',
    description: 'Built management and booking tools for small businesses with backend APIs and workflow automation.',
    status: 'completed',
    category: 'saas'
  },
  {
    quarter: 'Q2',
    year: 2025,
    title: 'Campaign automation prototype',
    description: 'Delivered a campaign automation system that connects data, rules, and reporting in one place.',
    status: 'completed',
    category: 'ai'
  },
  {
    quarter: 'Q3',
    year: 2026,
    title: 'AI workflow experiments',
    description: 'Built assistant workflows and model integrations to make automation more context-aware.',
    status: 'in-progress',
    category: 'ai'
  },
  {
    quarter: 'Q4',
    year: 2026,
    title: 'WhatsApp automation',
    description: 'Created a messaging workflow tool to automate common customer conversations and routing.',
    status: 'in-progress',
    category: 'automation'
  },
  {
    quarter: 'Q1',
    year: 2025,
    title: 'Finance workflow tooling',
    description: 'Work on automating approvals, validation, and reporting for finance processes.',
    status: 'planned',
    category: 'business'
  },
  {
    quarter: 'Q2',
    year: 2026,
    title: 'AI integration maturity',
    description: 'Focus on safer model usage, clearer logging, and simpler automation patterns.',
    status: 'planned',
    category: 'ai'
  }
];

// ====================
// TECH STACK
// ====================
export const techStack: TechCategory[] = [
  {
    name: 'Backend',
    items: ['Python', 'FastAPI', 'REST APIs']
  },
  {
    name: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
  },
  {
    name: 'Databases',
    items: ['PostgreSQL', 'Supabase']
  },
  {
    name: 'Automation',
    items: ['N8N', 'WhatsApp API']
  },
  {
    name: 'AI & APIs',
    items: ['Groq API', 'Meta Business API']
  },
  {
    name: 'Infrastructure',
    items: ['Docker', 'Git', 'Linux', 'Cloudflare']
  }
];

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Engineering', href: '/engineering' },
  { label: 'AI Systems', href: '/ai-systems' },
  { label: 'Contact', href: '/contact' }
];

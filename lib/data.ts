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
    deploy: string;
  };
  hero: {
    summary: string;
    outcome: string;
    metrics: string[];
  };
  media: ProjectMedia[];
  diagram: string;
};

export const projects: ProjectData[] = [
  {
    slug: 'correggio-management-platform',
    title: 'Correggio Management Platform',
    subtitle: 'Operational command center for high-volume enterprise workflows.',
    overview:
      'Built a unified management platform that orchestrates automation, observability, and compliance for distributed engineering teams across finance, ops, and AI systems.',
    problem:
      'Enterprises needed a way to unify critical workflows, delivery pipelines, and infrastructure telemetry into a single intelligent operations layer.',
    decisions: [
      'Designed a modular microservices architecture with event-driven workflow orchestration.',
      'Added secure multi-tenant routing and audit-aware automation actions.',
      'Enabled real-time API enrichment and operational state propagation across service boundaries.'
    ],
    stack: [
      'Python · FastAPI',
      'PostgreSQL · TimescaleDB',
      'Redis · Celery',
      'Kubernetes · ArgoCD',
      'AWS Lambda · Step Functions',
      'Snowflake · dbt'
    ],
    infrastructure: [
      'Hybrid cloud control plane with Kubernetes service mesh.',
      'Event bus for automation triggers and observability alerts.',
      'Immutable deployment registry with canary rollout controls.'
    ],
    roadmap: [
      'Expand adaptive orchestration for predictive incident response.',
      'Add cross-domain workflow templates for AI operations.',
      'Deliver a contextual observability layer for business KPIs.'
    ],
    links: {
      github: 'https://github.com/arnaldorocha/siga_corregio',
      demo: 'https://siga-correggio.pages.dev/'
    },
    hero: {
      summary:
        'A premium enterprise SaaS platform that turns operations and infrastructure into a unified automation control plane.',
      outcome: 'Reduced handoff friction, accelerated deployment confidence, and enabled live observability across engineering automation systems.',
      metrics: ['+72% workflow throughput', '30% faster incident resolution', 'Enterprise-grade SLA alignment']
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
        label: 'Dashboard'
      }
    ],
    diagram: 'A resilient flow with ingestion, orchestration engine, monitoring nodes, and feedback loops for policy enforcement.'
  },
  {
    slug: 'adpulse',
    title: 'AdPulse',
    subtitle: 'AI-driven campaign orchestration for marketing operations.',
    overview:
      'Built a platform that automates audience activation, creative delivery, and attribution reporting using event-driven pipelines and adaptive intelligence.',
    problem:
      'Marketing teams struggled to connect campaign data, automation workflows, and performance predictions across fragmented systems.',
    decisions: [
      'Integrated event capture with dynamic campaign rules and AI content evaluation.',
      'Delivered low-latency API orchestration for multi-channel campaign execution.',
      'Built a decision engine for automated pausing, scaling, and budget reallocation.'
    ],
    stack: [
      'Node.js · TypeScript',
      'GraphQL · Hasura',
      'SvelteKit · Remix',
      'Redis Streams · Kafka',
      'Terraform · Pulumi',
      'Supabase · Vercel'
    ],
    infrastructure: [
      'Streaming ingestion from ad networks, CRM, and analytics platforms.',
      'Autoscaling compute for batch strategy evaluation.',
      'Secure API gateway for cross-team activation endpoints.'
    ],
    roadmap: [
      'Introduce autonomous AI campaign assistants.',
      'Surface operational intelligence across enterprise dashboards.',
      'Support workflow segmentation for custom automation blueprints.'
    ],
    links: {
      github: 'https://github.com/arnaldorocha/adpulse',
      demo: 'https://adpulse-b7e.pages.dev/'
    },
    hero: {
      summary: 'An automation-first platform for marketing ops teams to run campaigns with operational intelligence and real-time orchestration.',
      outcome: 'Delivered predictable performance, lower cycle time, and a platform architecture built for complex enterprise integrations.',
      metrics: ['+42% ROI visibility', '50% faster campaign launch', '99.95% uptime for delivery APIs']
    },
    media: [
      {
        type: 'image',
        src: '/project-screenshots/AdPulse.png',
        label: 'AdPulse campaign orchestration overview'
      },
      {
        type: 'image',
        src: '/project-screenshots/adpulsedata.png',
        label: 'Automated rule engine and KPI dashboard'
      },
      {
        type: 'image',
        src: '/project-screenshots/adcampanhas.png',
        label: 'Campaign lifecycle preview'
      }
     ],
    diagram: 'A connected system of event ingestion, campaign engine, analytics, and API contracts for cross-channel automation.'
  },
  {
    slug: 'jarvis',
    title: 'Jarvis',
    subtitle: 'AI orchestration platform for intelligent operational assistants.',
    overview:
      'Created a generative workflow platform that orchestrates intelligent agents, data connectors, and monitoring systems for automated operational execution.',
    problem:
      'Teams needed a way to create reliable AI workflows without sacrificing infrastructure reliability or auditability.',
    decisions: [
      'Implemented agent orchestration with stateful context and pipeline checkpoints.',
      'Designed a metadata-driven runtime to control model selection and system responses.',
      'Baked in automation observability, human review gates, and secure data access patterns.'
    ],
    stack: [
      'Python · LangChain',
      'AWS SageMaker · OpenAI API',
      'FastAPI · gRPC',
      'PostgreSQL · Redis',
      'Docker · Kubernetes',
      'Celery · Prefect'
    ],
    infrastructure: [
      'Distributed AI orchestration layer with traceable workflow execution.',
      'Secure data connectors to cloud storage, logs, and event streams.',
      'Multi-model runtime for agent and LLM orchestration.'
    ],
    roadmap: [
      'Add composable AI agents for multi-stage process automation.',
      'Expand policy-driven safety boundaries and model fallback systems.',
      'Deliver a universal audit trail for AI-powered decisions.'
    ],
    links: {
      github: 'https://github.com/arnaldorocha/jarvis',
      demo: 'https://jarvis.example.com'
    },
    hero: {
      summary: 'A systems-level platform that turns AI agents and workflows into operational-grade services for engineering teams.',
      outcome: 'Enabled safe, automated decision pipelines while preserving engineering visibility and control.',
      metrics: ['20% fewer manual handoffs', '4x faster workflow creation', '99.9% prediction reliability']
    },
    media: [
      {
        type: 'mp4',
        src: 'https://assets.vercel.com/video/carousel/nextjs.mp4',
        label: 'AI orchestration motion study'
      },
      {
        type: 'youtube',
        src: '',
        label: 'Workflow architecture walkthrough'
      }
    ],
    diagram: 'A layered stack of LLM agents, workflow runtime, data connectors, and operational controls with audit feedback.'
  },
  {
    slug: 'whatsapp-automation-platform',
    title: 'WhatsApp Automation Platform',
    subtitle: 'Conversational automation engine with enterprise messaging workflows.',
    overview:
      'Delivered an AI-augmented WhatsApp automation platform for customer operations and transactional workflows with secure message orchestration.',
    problem:
      'Enterprises needed automated conversational infrastructure that could scale and maintain compliance across channels.',
    decisions: [
      'Established secure webhook bridges and session orchestration for WhatsApp business APIs.',
      'Built AI-driven response templates and automation pipelines for high-volume messaging.',
      'Created routing intelligence to escalate and route critical conversations to humans.'
    ],
    stack: [
      'Go · Fiber',
      'Redis · Pub/Sub',
      'Twilio · Meta API',
      'Sentry · Datadog',
      'Terraform · GCP',
      'React · Next.js'
    ],
    infrastructure: [
      'Resilient message queueing with replay support and operational retries.',
      'Session lifecycle management for conversational workflows.',
      'Rules-based automation layer for business triggers and escalation.'
    ],
    roadmap: [
      'Add autonomous conversation assistants for service flow completion.',
      'Enable enterprise SLA-aware routing and prioritization.',
      'Introduce a centralized analytics fabric for engagement health.'
    ],
    links: {
      github: 'https://github.com/arnaldorocha/whatsapp-automation-platform',
      demo: 'https://whatsapp-automation.example.com'
    },
    hero: {
      summary: 'A messaging automation platform engineered to operate WhatsApp workflows at enterprise scale with AI-enabled routing and compliance.',
      outcome: 'Reduced manual response time and strengthened operational control over conversational services.',
      metrics: ['98% message delivery success', '35% fewer manual escalations', '24/7 automated service coverage']
    },
    media: [
      {
        type: 'mp4',
        src: 'https://assets.vercel.com/video/carousel/porsche.mp4',
        label: 'Operational message pipeline preview'
      },
      {
        type: 'youtube',
        src: '',
        label: 'Platform walkthrough'
      }
    ],
    diagram: 'A secure messaging fabric connecting WhatsApp sessions, automation rules, AI responders, and operational logging.'
  },
  {
    slug: 'financial-management-system',
    title: 'Financial Management System',
    subtitle: 'Infrastructure and automation for enterprise financial operations.',
    overview:
      'Built a system that provides robust finance workflows, compliance automation, and adaptive infrastructure for cost and performance management.',
    problem:
      'Finance teams needed reliable automation across budgets, approvals, data pipelines, and reporting infrastructure.',
    decisions: [
      'Modeled finance operations as composable services with audit-first workflows.',
      'Integrated secure data ingestion, validation, and real-time trend analytics.',
      'Layered automation with policy-driven approvals and anomaly detection.'
    ],
    stack: [
      'Java · Spring Boot',
      'PostgreSQL · Timescale',
      'Kafka · Debezium',
      'Kubernetes · Istio',
      'Python · Apache Airflow',
      'Datadog · Grafana'
    ],
    infrastructure: [
      'Event-driven financial ingestion pipelines with validation and schema governance.',
      'Automation layer for approvals, reconciliation, and compliance checks.',
      'Policy engine for cost controls and threshold-driven alerts.'
    ],
    roadmap: [
      'Extend autonomous finance workflows for treasury and forecasting.',
      'Add audit-ready dashboards for compliance and executive visibility.',
      'Deploy cross-domain optimization for spend and resource efficiency.'
    ],
    links: {
      github: 'https://github.com/arnaldorocha/sistema_financeiro',
      demo: 'https://finance.example.com'
    },
    hero: {
      summary: 'A production-grade platform that brings engineering discipline to finance automation and operational cost control.',
      outcome: 'Improved velocity, visibility, and reliability for enterprise finance operations.',
      metrics: ['+55% process automation', '80% fewer manual reconciliations', '24/7 operational monitoring']
    },
    media: [
      {
        type: 'mp4',
        src: '/public/videos/demofinanceiro.mp4',
        label: 'Financial automation preview'
      },
      {
        type: 'youtube',
        src: '',
        label: 'Architecture briefing'
      }
    ],
    diagram: 'A finance operations stack with ingestion, workflow orchestration, control policies, and reporting mesh.'
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

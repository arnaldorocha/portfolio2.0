
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { projects } from '@/lib/data';
import { MediaGallery } from '@/components/MediaGallery';
import { Badge } from '@/components/ui/badge';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

type PageProps = {
  params: {
    slug: string;
  };
};

const hiddenGithubSlugs = [
  'central-da-corridas',
  'whatsapp-dispatch-correggio',
  'salon-management-system',
  'financial-management-system'
];

function getProjectStatus(project: (typeof projects)[number]) {
  if (project.slug === 'siga') return 'Production';
  if (project.slug === 'central-da-corridas') return 'Private — client project';
  if (project.slug === 'whatsapp-dispatch-correggio') return 'Private — institutional project';
  if (project.slug === 'jarvis') return 'Public roadmap';

  return 'In Development';
}

function getProjectStatusNote(project: (typeof projects)[number]) {
  if (project.slug === 'central-da-corridas') {
    return 'In active development for a private client project';
  }

  if (project.slug === 'whatsapp-dispatch-correggio') {
    return 'Private institutional project';
  }

  if (project.slug === 'jarvis') {
    return 'Open engineering roadmap';
  }

  return project.subtitle;
}

function getProjectHeroLink(project: (typeof projects)[number]) {
  if (project.links.demo) {
    return {
      label: 'View Live System',
      href: project.links.demo
    };
  }

  if (project.links.github) {
    return {
      label: 'View GitHub',
      href: project.links.github
    };
  }

  return null;
}

function getProjectWhatIBuilt(project: (typeof projects)[number]) {
  switch (project.slug) {
    case 'central-da-corridas':
      return [
        'Conversational flow handlers for ride booking via WhatsApp',
        'Automatic fare calculation logic based on operational rules',
        'N8N orchestration for workflow routing and message handling',
        'Manual escalation paths for edge cases requiring operator intervention',
        'Session and message logging for operational visibility'
      ];

    case 'adpulse':
      return [
        'Meta Business API integration for campaign data ingestion',
        'Groq API integration for AI-generated campaign insights',
        'Campaign analytics and geolocation reporting workflows'
      ];

    case 'whatsapp-dispatch-correggio':
      return [
        'Automated WhatsApp messaging workflows for institutional communication',
        'N8N orchestration for dispatch and message routing',
        'Python business logic for delivery monitoring and fallback handling'
      ];

    case 'salon-management-system':
      return [
        'Booking-first data model for salon scheduling',
        'Appointment notifications and staff coordination workflows',
        'Lightweight admin UI for non-technical salon staff'
      ];

    case 'financial-management-system':
      return [
        'Configurable percentage-based financial targets',
        'Validation and audit trails for financial entries',
        'Progress tracking dashboards for goal monitoring'
      ];

    case 'jarvis':
      return [
        'Published roadmap stages for personal AI assistant engineering',
        'Prototype workflows for automation and API integration',
        'Open documentation for reusable assistant patterns'
      ];

    case 'siga':
      return [
        'Multi-role authentication and access control system',
        'Student registration and management APIs',
        'Course and class management workflows',
        'Attendance tracking system',
        'Operational dashboards for instructors and administrators',
        'Multi-unit organizational structure',
        'Academic progress and delay monitoring',
        'Centralized PostgreSQL data model'
      ];

    default:
      return [];
  }
}

function getProjectArchitectureSections(project: (typeof projects)[number]) {
  switch (project.slug) {
    case 'siga':
      return [
        {
          title: 'Multi-unit data structure',
          description:
            'Each institution unit shares the same database structure while access is scoped by organizational roles and permissions.'
        },
        {
          title: 'Backend architecture',
          description:
            'FastAPI services handle student records, attendance tracking, course management, and reporting workflows.'
        },
        {
          title: 'Database and security',
          description:
            'PostgreSQL with Supabase authentication and row-level security policies.'
        },
        {
          title: 'Deployment',
          description:
            'Frontend deployed on Cloudflare Pages with separated backend services.'
        }
      ];

    case 'central-da-corridas':
      return [
        {
          title: 'Conversational layer',
          description:
            'WhatsApp API handles inbound and outbound messages with state-aware ride booking flows.'
        },
        {
          title: 'Workflow orchestration',
          description:
            'N8N routes operational events between booking logic and messaging systems.'
        },
        {
          title: 'Fare calculation',
          description:
            'Pricing logic implemented in Python based on conversational state.'
        }
      ];

    case 'adpulse':
      return [
        {
          title: 'Campaign ingestion',
          description:
            'Aggregates campaign metrics and geolocation signals from Meta APIs.'
        },
        {
          title: 'AI insights',
          description:
            'Groq API generates lightweight summaries and marketing insights.'
        },
        {
          title: 'SaaS onboarding',
          description:
            'Simple onboarding flow designed for non-technical business owners.'
        }
      ];

    default:
      return project.decisions.map((decision, index) => ({
        title: `Decision ${index + 1}`,
        description: decision
      }));
  }
}

function getProjectTradeoffs(project: (typeof projects)[number]) {
  if (project.slug === 'siga') {
    return [
      'Supabase accelerated development but introduced vendor coupling.',
      'Shared-schema multi-tenancy increased permission complexity.',
      'AI-assisted prototyping accelerated delivery but required architectural refactoring.',
      'Operational usability was prioritized over visual polish.'
    ];
  }

  if (project.slug === 'central-da-corridas') {
    return [
      'WhatsApp API dependency introduces delivery uncertainty.',
      'N8N orchestration increases flexibility but requires robust error handling.',
      'Embedded fare logic will need future extraction as complexity grows.',
      'No visual fare rule management interface yet.'
    ];
  }

  return [];
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find(
    (item) => item.slug === params.slug
  );

  if (!project) {
    notFound();
  }

  const status = getProjectStatus(project);
  const statusNote = getProjectStatusNote(project);
  const heroLink = getProjectHeroLink(project);
  const whatIBuilt = getProjectWhatIBuilt(project);
  const architectureSections =
    getProjectArchitectureSections(project);

  const tradeoffs = getProjectTradeoffs(project);

  const stack = project.stack.join(' · ');

  const showGithub =
    project.links.github &&
    !hiddenGithubSlugs.includes(project.slug);

  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-16">

        {/* HERO */}

        <div className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">
          <div className="space-y-6">

            <div className="flex items-center gap-4 flex-wrap">
              <Badge>{project.title}</Badge>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-slate-200">
                {status}
              </span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {project.subtitle}
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              {project.overview}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-[1.75rem] border border-white/10 bg-[#071124] p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                  Stack
                </p>

                <p className="mt-3 text-slate-300">
                  {stack}
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-[#071124] p-6">

                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                  Status
                </p>

                <p className="mt-3 text-slate-300">
                  {statusNote}
                </p>

                {heroLink ? (
                  <a
                    href={heroLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-accent underline-offset-4 hover:text-white"
                  >
                    {heroLink.label}
                  </a>
                ) : null}

                {showGithub ? (
                  <p className="mt-4 text-sm text-slate-300">
                    GitHub:{' '}
                    <Link
                      href={project.links.github}
                      target="_blank"
                      className="text-accent hover:text-white"
                    >
                      repo
                    </Link>
                  </p>
                ) : null}

              </div>
            </div>
          </div>
        </div>

        {/* MEDIA */}

        {project.media.length > 0 ? (
          <MediaGallery items={project.media} />
        ) : null}

        <div className="space-y-10">

          {/* PROBLEM */}

          <section className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">

            <h2 className="text-2xl font-semibold text-white">
              Problem
            </h2>

            <p className="mt-4 text-slate-300 leading-8">
              {project.problem}
            </p>

          </section>

          {/* WHAT I BUILT */}

          <section className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">

            <h2 className="text-2xl font-semibold text-white">
              What I Built
            </h2>

            {whatIBuilt.length > 0 ? (
              <ul className="mt-4 list-inside list-disc space-y-3 text-slate-300">
                {whatIBuilt.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-slate-400">
                Detailed build scope is pending.
              </p>
            )}

          </section>

          {/* ARCHITECTURE */}

          <section className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">

            <h2 className="text-2xl font-semibold text-white">
              Architecture Decisions
            </h2>

            <div className="mt-6 space-y-6 text-slate-300">

              {architectureSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold text-white">
                    {section.title}
                  </h3>

                  <p className="mt-3 leading-7">
                    {section.description}
                  </p>
                </div>
              ))}

            </div>

          </section>

          {/* TRADEOFFS */}

          <section className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">

            <h2 className="text-2xl font-semibold text-white">
              Engineering Tradeoffs
            </h2>

            {tradeoffs.length > 0 ? (
              <ul className="mt-4 list-inside list-disc space-y-3 text-slate-300">
                {tradeoffs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-slate-400">
                Tradeoff details still need to be added.
              </p>
            )}

          </section>

          {/* OUTCOME */}

          <section className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">

            <h2 className="text-2xl font-semibold text-white">
              Outcome
            </h2>

            <ul className="mt-4 list-inside list-disc space-y-3 text-slate-300">

              {project.hero.metrics.map((item) => (
                <li key={item}>{item}</li>
              ))}

            </ul>

          </section>

          {/* ROADMAP */}

          {project.roadmap.length > 0 ? (
            <section className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">

              <h2 className="text-2xl font-semibold text-white">
                Roadmap
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">

                {project.roadmap.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/10 bg-surface p-5 text-slate-300"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </section>
          ) : null}

        </div>
      </div>
    </section>
  );
}

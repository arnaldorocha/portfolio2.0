import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';
import { MediaGallery } from '@/components/MediaGallery';
import { VideoShowcase } from '@/components/VideoShowcase';
import { Badge } from '@/components/ui/badge';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type PageProps = {
  params: { slug: string };
};

const hiddenDemoSlugs = ['adpulse', 'central-da-corridas', 'whatsapp-dispatch-correggio', 'salon-management-system', 'financial-management-system', 'jarvis'];
const hiddenGithubSlugs = ['central-da-corridas', 'whatsapp-dispatch-correggio', 'salon-management-system', 'financial-management-system'];

function getProjectStatus(project: (typeof projects)[number]) {
  if (project.slug === 'siga') return 'Production';
  if (project.slug === 'central-da-corridas') return 'Private — client project';
  if (project.slug === 'whatsapp-dispatch-correggio') return 'Private — institutional project';
  if (project.slug === 'jarvis') return 'Public roadmap';
  return 'In Development';
}

function getProjectStatusNote(project: (typeof projects)[number]) {
  if (project.slug === 'central-da-corridas') return 'In active development for a private client project';
  if (project.slug === 'whatsapp-dispatch-correggio') return 'Private institutional project';
  if (project.slug === 'jarvis') return 'Open engineering roadmap';
  return project.subtitle;
}

function getProjectHeroLink(project: (typeof projects)[number]) {
  if (project.slug === 'siga' && project.links.demo) {
    return { label: 'View Live System', href: project.links.demo };
  }
  if ((project.slug === 'jarvis' || project.slug === 'adpulse') && project.links.github) {
    return { label: 'View GitHub', href: project.links.github };
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
    default:
      return [];
  }
}

function getProjectArchitectureSections(project: (typeof projects)[number]) {
  switch (project.slug) {
    case 'central-da-corridas':
      return [
        {
          title: 'Conversational layer',
          description:
            'WhatsApp API handles inbound and outbound messages. Conversation state is managed per session to track booking progress and trigger fare calculation at the right step.'
        },
        {
          title: 'Orchestration',
          description:
            'N8N routes events between the messaging layer, calculation logic, and any external triggers. This keeps the Python core focused on business rules rather than infrastructure coordination.'
        },
        {
          title: 'Fare calculation',
          description:
            'Pricing logic is implemented in Python and triggered by conversation state — not a separate service. Kept simple intentionally to reduce failure points in a client-facing operational flow.'
        }
      ];
    case 'adpulse':
      return [
        {
          title: 'Campaign data ingestion',
          description: 'Aggregated campaign metrics and geolocation signals for clearer reporting.'
        },
        {
          title: 'AI-generated insights',
          description: 'Integrated Groq API for lightweight campaign summaries and interpretive insights.'
        },
        {
          title: 'SaaS onboarding',
          description: 'Designed a simple onboarding path to make campaign analytics accessible for non-technical users.'
        }
      ];
    case 'whatsapp-dispatch-correggio':
      return [
        {
          title: 'Template-driven dispatch',
          description: 'Built message templates and scheduling for institutional workflows.'
        },
        {
          title: 'Workflow orchestration',
          description: 'N8N coordinates dispatch events, reducing coupling between WhatsApp and business logic.'
        },
        {
          title: 'Delivery monitoring',
          description: 'Added monitoring and retry behavior to improve message reliability and fallback handling.'
        }
      ];
    case 'salon-management-system':
      return [
        {
          title: 'Booking-focused model',
          description: 'Designed a booking-first data model with conflict handling for salon schedules.'
        },
        {
          title: 'Appointment workflows',
          description: 'Built appointment notifications and reporting workflows to support staff coordination.'
        },
        {
          title: 'Operational UI',
          description: 'Focused on a lightweight admin interface that matches small business needs.'
        }
      ];
    case 'financial-management-system':
      return [
        {
          title: 'Configurable goals',
          description: 'Implemented configurable goal objects and progress calculations for financial tracking.'
        },
        {
          title: 'Validation and audit',
          description: 'Built validation for entries and audit trails to keep financial data reliable.'
        },
        {
          title: 'Progress dashboards',
          description: 'Added dashboards to show progress against configurable targets over time.'
        }
      ];
    case 'jarvis':
      return [
        {
          title: 'Incremental roadmap',
          description: 'Documented stages from simple automation to integrated model-driven assistant workflows.'
        },
        {
          title: 'Engineering guidance',
          description: 'Focused on reproducible, small-step engineering guidance and runnable examples.'
        },
        {
          title: 'Monitoring and fallback',
          description: 'Included recommendations for runtime monitoring and fallback handling in real-world assistant systems.'
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
  if (project.slug === 'central-da-corridas') {
    return [
      'WhatsApp API dependency introduces delivery uncertainty — retry logic is required for production reliability.',
      'N8N as orchestrator adds operational flexibility but requires careful error handling at each node.',
      'Keeping fare logic embedded in the conversation handler speeds development but will need extraction as rule complexity grows.',
      'No UI for fare rules management yet — operator updates require direct config changes.'
    ];
  }

  return [];
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  const firstVideo = project.media.find((media) => media.type === 'mp4');
  const status = getProjectStatus(project);
  const statusNote = getProjectStatusNote(project);
  const heroLink = getProjectHeroLink(project);
  const whatIBuilt = getProjectWhatIBuilt(project);
  const architectureSections = getProjectArchitectureSections(project);
  const tradeoffs = getProjectTradeoffs(project);
  const stack = project.stack.join(' · ');
  const showGithub = project.links.github && !hiddenGithubSlugs.includes(project.slug);

  if (project.slug === 'siga') {
    return (
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-16">
          <div className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">SIGA — Instituto Correggio</h1>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold text-slate-200">Production ✅</span>
              </div>
              <p className="max-w-3xl text-lg leading-8 text-slate-300">
                Academic management platform used by a vocational institution to manage students, attendance, courses, and multi-unit operations.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/10 bg-[#071124] p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Stack</p>
                  <p className="mt-3 text-slate-300">React · TypeScript · FastAPI · Python · Supabase · PostgreSQL · Cloudflare</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-[#071124] p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Status</p>
                  <p className="mt-3 text-slate-300">Running in production</p>
                  <a
                    href="https://siga-correggio.pages.dev/auth"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-accent underline-offset-4 hover:text-white"
                  >
                    View Live System
                  </a>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-dashed border-white/10 bg-slate-950/50 p-10 text-center text-slate-500">
                <p className="font-semibold text-white">Screenshot placeholder</p>
                <p className="mt-2 text-sm">Replace with real SIGA screenshots manually.</p>
              </div>
            </div>
          </div>

          {firstVideo ? (
            <VideoShowcase mp4={firstVideo.src} tagline="SIGA production walkthrough" />
          ) : null}

          <div className="space-y-10">
            <section className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">
              <h2 className="text-2xl font-semibold text-white">Problem</h2>
              <p className="mt-4 text-slate-300 leading-8">
                Instituto Correggio managed student records, attendance, and course operations across multiple units using spreadsheets and disconnected workflows. There was no centralized system for access control, academic monitoring, or role-specific operational visibility.
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">
              <h2 className="text-2xl font-semibold text-white">What I Built</h2>
              <ul className="mt-4 list-inside list-disc space-y-3 text-slate-300">
                <li>Multi-role authentication and access control system</li>
                <li>Student registration and management APIs</li>
                <li>Course and class management workflows</li>
                <li>Attendance tracking system</li>
                <li>Operational dashboards for instructors and administrators</li>
                <li>Multi-unit organizational structure</li>
                <li>Academic progress and delay monitoring</li>
                <li>Centralized PostgreSQL data model</li>
              </ul>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">
              <h2 className="text-2xl font-semibold text-white">Architecture Decisions</h2>
              <div className="mt-6 space-y-6 text-slate-300">
                <div>
                  <h3 className="text-lg font-semibold text-white">Multi-unit data structure</h3>
                  <p className="mt-3 leading-7">
                    Each institution unit shares the same database structure while access is scoped by organizational roles and permissions. This allowed centralized data modeling without duplicating infrastructure per unit.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Backend</h3>
                  <p className="mt-3 leading-7">
                    FastAPI services handle student records, attendance tracking, course management, and reporting workflows. The API layer is organized around operational domains, not generic CRUD endpoints.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Database</h3>
                  <p className="mt-3 leading-7">
                    PostgreSQL with Supabase for authentication and row-level security. RLS policies enforce role-based data access at the database level, reducing reliance on application-layer permission checks.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Hosting</h3>
                  <p className="mt-3 leading-7">
                    Frontend deployed on Cloudflare Pages for performance and global CDN distribution. Backend services separated from the hosting layer.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">
              <h2 className="text-2xl font-semibold text-white">Engineering Tradeoffs</h2>
              <ul className="mt-4 list-inside list-disc space-y-3 text-slate-300">
                <li>Supabase accelerated development but introduced vendor coupling for auth and database access.</li>
                <li>Shared-schema multi-tenancy simplified infrastructure but increased the complexity of permission handling across roles.</li>
                <li>Starting from an AI-assisted prototype meant faster initial delivery but required significant structural refactoring as operational requirements became clearer.</li>
                <li>Operational dashboards prioritized internal usability over visual polish — the target users are institution staff, not end consumers.</li>
              </ul>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">
              <h2 className="text-2xl font-semibold text-white">Outcome</h2>
              <ul className="mt-4 list-inside list-disc space-y-3 text-slate-300">
                <li>Centralized academic operations across institution units</li>
                <li>Eliminated spreadsheet dependency for student and attendance management</li>
                <li>Enabled role-specific workflows for instructors, coordinators, and administrators</li>
                <li>System running in daily production use at Instituto Correggio</li>
              </ul>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">
              <h2 className="text-2xl font-semibold text-white">What I Learned</h2>
              <ul className="mt-4 list-inside list-disc space-y-3 text-slate-300">
                <li>Multi-tenant backend architecture and data scoping strategies</li>
                <li>RBAC implementation at both application and database level</li>
                <li>API design for operational administrative workflows</li>
                <li>Production deployment and maintenance considerations</li>
                <li>Database modeling for multi-role institutional systems</li>
                <li>Iterating on AI-assisted prototypes toward production-grade architecture</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-16">
        <div className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">
          <div className="space-y-6">
            <div className="flex items-center gap-4 flex-wrap">
              <Badge>{project.title}</Badge>
              <span className="rounded-full border border-white/10 bg-white/3 px-3 py-1 text-sm font-medium text-slate-200">{status}</span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{project.subtitle}</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300">{project.overview}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-[#071124] p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Stack</p>
                <p className="mt-3 text-slate-300">{stack}</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-[#071124] p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Status</p>
                <p className="mt-3 text-slate-300">{statusNote}</p>
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
                    GitHub: <Link href={project.links.github} target="_blank" className="text-accent hover:text-white">repo</Link>
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <section className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">
            <h2 className="text-2xl font-semibold text-white">Problem</h2>
            <p className="mt-4 text-slate-300 leading-8">{project.problem}</p>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">
            <h2 className="text-2xl font-semibold text-white">What I Built</h2>
            {whatIBuilt.length > 0 ? (
              <ul className="mt-4 list-inside list-disc space-y-3 text-slate-300">
                {whatIBuilt.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-slate-400">Detailed build scope is pending for this project.</p>
            )}
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">
            <h2 className="text-2xl font-semibold text-white">Architecture Decisions</h2>
            <div className="mt-6 space-y-6 text-slate-300">
              {architectureSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                  <p className="mt-3 leading-7">{section.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">
            <h2 className="text-2xl font-semibold text-white">Engineering Tradeoffs</h2>
            {tradeoffs.length > 0 ? (
              <ul className="mt-4 list-inside list-disc space-y-3 text-slate-300">
                {tradeoffs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-slate-400">Tradeoff details still need to be added for this project.</p>
            )}
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">
            <h2 className="text-2xl font-semibold text-white">Outcome</h2>
            <ul className="mt-4 list-inside list-disc space-y-3 text-slate-300">
              {project.hero.metrics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {project.roadmap.length > 0 ? (
            <section className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">
              <h2 className="text-2xl font-semibold text-white">Roadmap</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.roadmap.map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-surface p-5 text-slate-300">{item}</div>
                ))}
              </div>
            </section>
          ) : null}

          <MediaGallery items={project.media} />
        </div>
      </div>
    </section>
  );
}

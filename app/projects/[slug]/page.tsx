import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';
import { MediaGallery } from '@/components/MediaGallery';
import { VideoShowcase } from '@/components/VideoShowcase';
import { Badge } from '@/components/ui/badge';

function ArchitectureDiagram() {
  return (
    <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Architecture</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">System topology and decision flow</h3>
        </div>
        <Badge>Diagram</Badge>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[1.75rem] border border-white/10 bg-[#071124] p-6">
          <div className="grid gap-4">
            {['Event ingestion', 'Workflow engine', 'Data store', 'AI connector', 'Observability', 'Control plane'].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-surface p-4 text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-white/10 bg-[#071124] p-6">
          <p className="text-slate-300 leading-7">
            The architecture emphasizes fault isolation, API contract boundaries, and a control layer that spans automation, data operations, and AI workflows. Each component maintains observability and safe rollout control through infrastructure orchestration.
          </p>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type PageProps = {
  params: { slug: string };
};

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  const firstVideo = project.media.find((media) => media.type === 'mp4');
  const firstYoutube = project.media.find((media) => media.type === 'youtube');

  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-6">
              <Badge>{project.title}</Badge>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{project.subtitle}</h1>
              <p className="text-lg leading-8 text-slate-300">{project.hero.summary}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {project.hero.metrics.map((metric) => (
                  <div key={metric} className="rounded-3xl border border-white/10 bg-surface p-4 text-sm text-slate-300">
                    {metric}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-[#071124] p-8 text-slate-300">
              <p className="uppercase tracking-[0.28em] text-slate-500">Outcome</p>
              <p className="mt-4 text-lg leading-8 text-white">{project.hero.outcome}</p>
              <div className="mt-6 space-y-3 text-sm text-slate-400">
                <p className="rounded-3xl bg-surface p-4">GitHub: <Link href={project.links.github} target="_blank" className="text-accent hover:text-white">repo</Link></p>
                <p className="rounded-3xl bg-surface p-4">Live: <Link href={project.links.demo} target="_blank" className="text-accent hover:text-white">visit</Link></p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-soft">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Engineering overview</p>
                <h2 className="text-2xl font-semibold text-white">Project background and technical scope</h2>
                <p className="text-slate-300 leading-7">{project.overview}</p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-soft">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Business problem</p>
                <p className="mt-4 text-slate-300 leading-7">{project.problem}</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-soft">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Architecture decisions</p>
                <ul className="mt-4 space-y-3 text-slate-300">
                  {project.decisions.map((decision) => (
                    <li key={decision} className="rounded-3xl border border-white/10 bg-surface p-4">{decision}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Infrastructure thinking</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.infrastructure.map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-surface p-5 text-slate-300">{item}</div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Roadmap</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.roadmap.map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-surface p-5 text-slate-300">{item}</div>
                ))}
              </div>
            </div>
            <MediaGallery items={project.media} />
          </div>
          <aside className="space-y-8">
            <ArchitectureDiagram />
            <div className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Technical stack</p>
              <div className="mt-5 space-y-3 text-slate-300">
                {project.stack.map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-surface p-4">{item}</div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Summary</p>
              <p className="mt-4 text-slate-300 leading-7">This case study highlights the intersection of infrastructure, automation, and AI platforms in a systems-focused delivery model for technical customers.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

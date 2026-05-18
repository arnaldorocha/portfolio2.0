import { EngineeringCards } from '@/components/EngineeringCards';

export default function EngineeringPage() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Engineering</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Backend architecture, infrastructure systems, and orchestration flows.</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            This page focuses on engineering decision-making for distributed systems, production pipelines, automation services, and operational tooling.
          </p>
        </div>
        <div className="grid gap-10">
          <div className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-white">Enterprise engineering direction</h2>
            <p className="mt-4 text-slate-300 leading-8">
              I build backend platforms that are secure, observable, and designed for cross-functional teams. The engineering approach centers on API contracts, event-driven systems, and infrastructure automation.
            </p>
          </div>
          <EngineeringCards />
          <div className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-soft">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Infrastructure thinking</p>
                <h2 className="text-2xl font-semibold text-white">From service mesh to deployment strategy.</h2>
              </div>
              <ul className="space-y-4 text-slate-300">
                {[
                  'Designing fault-tolerant APIs with clear error semantics and observability hooks.',
                  'Implementing IaC pipelines with rollout controls, compliance gates, and automated remediation.',
                  'Modeling distributed systems as guarded workflows with traceable state transitions.',
                  'Delivering tools that help teams move faster while keeping production reliability high.'
                ].map((item) => (
                  <li key={item} className="rounded-3xl border border-white/10 bg-surface p-5">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';

export default function AISystemsPage() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">AI Systems</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">AI workflows, orchestration systems, and agentic intelligence.</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            This page highlights architectures for AI-enabled operational systems, model orchestration, and production-ready intelligence platforms.
          </p>
        </div>
        <div className="grid gap-10">
          <div className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-white">Orchestration with AI</h2>
            <p className="mt-4 text-slate-300 leading-8">
              I create platforms that combine LLM workflows, data connectors, and automation pipelines to deliver dependable AI systems for business operations.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              'Agent-driven workflows',
              'LLM integration patterns',
              'Autonomous system coordination',
              'Policy-driven safety boundaries',
              'Data-to-model orchestration',
              'Audit-ready decision flows'
            ].map((item) => (
              <div key={item} className="rounded-[2rem] border border-white/10 bg-surface2 p-6 shadow-soft">
                <p className="text-base font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-soft">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Future systems</p>
                <h2 className="text-2xl font-semibold text-white">Building the next generation of operational AI platforms.</h2>
              </div>
              <p className="text-slate-300 leading-8">
                My focus is on dependable AI processes, agentic strategy execution, and exposing production-safe intelligence to business workflows through stable system design.
              </p>
              <ul className="grid gap-3 text-slate-300 sm:grid-cols-2">
                {[
                  'Multi-stage reasoning with fallback paths',
                  'Integration of structured data and natural language',
                  'Secure orchestration for enterprise workflows',
                  'Continuous evaluation and monitoring of AI outputs'
                ].map((item) => (
                  <li key={item} className="rounded-3xl border border-white/10 bg-surface p-4">{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                  Collaborate on AI systems
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

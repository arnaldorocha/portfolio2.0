import Link from 'next/link';

export default function ContactPage() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Let's build systems that operate reliably and intelligently.</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Reach out for backend systems, automation work, AI integration projects,
            or hands-on engineering collaborations.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-surface p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Email</p>
              <p className="mt-3 text-xl font-semibold text-white">arnaldorochafilho@gmail.com</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-surface p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Availability</p>
              <p className="mt-3 text-xl font-semibold text-white">Open for backend systems, automation, and AI integration work.</p>
            </div>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Connect</p>
            <h2 className="text-2xl font-semibold text-white">Professional channels</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="https://github.com/arnaldorocha//" target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left transition hover:border-accent">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">GitHub</p>
                <p className="mt-3 text-lg font-semibold text-white">Review architecture and production repositories</p>
              </Link>
              <Link href="https://www.linkedin.com/in/arnaldo-rocha-filho-52ba03163/" target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left transition hover:border-accent">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">LinkedIn</p>
                <p className="mt-3 text-lg font-semibold text-white">Connect for AI integration, automation tools, and backend systems.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

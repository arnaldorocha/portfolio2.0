'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export default function AboutPage() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* HERO */}
        <div className="mb-12 space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
            About
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Arnaldo Rocha — Backend developer, automation engineer, applied AI
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            I'm Arnaldo Rocha, a Computer Engineering student (2027) who builds backend services, automation pipelines, and AI-integrated tools under the brand nexu.fell. I deliver production systems and SaaS products for small businesses. I teach AI, automation, Python, and Power BI at Instituto Correggio. My direction: elite backend and applied AI engineering, with an eye toward postgraduate research.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT SIDE */}
          <div className="space-y-8 rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-soft">
            {/* SYSTEMS */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <Badge>Systems</Badge>

              <h2 className="text-2xl font-semibold text-white">
                Backend systems and automation.
              </h2>

              <p className="leading-7 text-slate-300">
                I create backend services that automate routine work, connect APIs, and keep data flowing. My work is built around reliability, clear logic, and practical operations.
              </p>
            </motion.div>

            {/* AI ENGINEERING */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="space-y-4"
            >
              <Badge>AI engineering</Badge>

              <h2 className="text-2xl font-semibold text-white">
                Applied AI and model workflows.
              </h2>

              <p className="leading-7 text-slate-300">
                I explore AI integrations through practical applications, using model APIs to support automation and decision processes without overcomplicating the system.
              </p>
            </motion.div>

            {/* ENGINEERING */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="space-y-4"
            >
              <Badge>Engineering</Badge>

              <h2 className="text-2xl font-semibold text-white">
                Engineering practice
              </h2>

              <p className="leading-7 text-slate-300">
                I apply software engineering principles in code, testing, and deployment with an emphasis on maintainability and operational correctness.
              </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-soft">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Focus areas
              </p>

              <h2 className="text-2xl font-semibold text-white">
                Core strengths
              </h2>
            </div>

            <div className="grid gap-4">
              {[
                'Backend development',
                'Python and FastAPI',
                'Automation workflows',
                'REST APIs',
                'AI integration',
                'Systems learning'
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-surface p-5"
                >
                  <p className="text-sm text-slate-300">{item}</p>
                </div>
              ))}
            </div>

            {/* PHILOSOPHY */}
            <div className="rounded-3xl border border-white/10 bg-[#0f172a] p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                Engineering philosophy
              </p>

              <p className="mt-3 leading-7 text-slate-300">
                I believe software should reduce repetitive work, keep systems easy to maintain, and make operations more dependable. I focus on practical engineering, solid foundations, and continuous improvement.
              </p>
            </div>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="mt-14 rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-soft">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
            Experience
          </p>

          <div className="mt-6 space-y-8">
            <div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Career Advisor & Professor
                  </h3>

                  <p className="text-sm text-slate-400">
                    Instituto Correggio
                  </p>
                </div>

                <p className="text-sm text-slate-500">
                  Aug 2025 — Present
                </p>
              </div>

              <p className="mt-4 leading-7 text-slate-300">
                I support students through mentoring, academic guidance, and structured learning. This work sharpened my ability to explain technical ideas clearly and support development with real systems thinking.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                Alongside mentoring, I build practical software projects focused on backend systems, automation, and AI workflows.
              </p>
            </div>
          </div>
        </div>

        {/* EXTRA CARDS */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Teaching and mentoring',
              detail:
                'Support students with clear guidance while improving leadership and problem-solving skills.'
            },
            {
              title: 'Experimentation',
              detail:
                'Prototype automation systems, AI integrations, and backend workflows with a strong focus on learning and iteration.'
            },
            {
              title: 'Engineering mindset',
              detail:
                'Build projects with maintainability, reliability, and long-term technical growth in mind.'
            }
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] border border-white/10 bg-surface2 p-7 shadow-soft"
            >
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Get started
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-white">
                Ready to build reliable tools and automation.
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';

const events = [
  {
    year: '2026',
    title: 'AI systems and workflow orchestration',
      detail:
      'Developing AI workflows, automation systems, and backend applications focused on practical engineering and reliable integrations.'
  },
  {
    year: '2025',
    title: 'Automation projects and teaching experience',
    detail:
      'Built management systems, automation tools, API integrations, and AI-assisted applications while working as a Career Advisor and Professor at Instituto Correggio.'
  },
  {
    year: '2024',
    title: 'Backend and software engineering foundations',
    detail:
      'Focused on Python development, APIs, databases, backend architecture, and software engineering fundamentals through intensive project-based learning.'
  },
  {
    year: '2023',
    title: 'Technology exploration and first projects',
    detail:
      'Started exploring programming, automation, and systems thinking while building the foundation for long-term growth in AI and software engineering.'
  }
];

export function TimelineSection() {
  return (
    <section className="relative px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
            Career perspective
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Engineering growth through systems thinking, automation, and AI development.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {events.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-soft"
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-accent">
                  {event.year}
                </span>

                <span className="text-sm text-slate-400">
                  Continuous growth
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white">
                {event.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {event.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
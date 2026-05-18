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
            Building AI systems, automation workflows, and backend infrastructure through practical engineering.
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            I'm Arnaldo Rocha Filho, a Machine Learning and AI engineering student
            focused on backend systems, automation, and intelligent workflows.
            My work combines software engineering, operational systems, APIs,
            and AI integration with a strong emphasis on practical execution
            and continuous learning.
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
                Operational software and automation systems.
              </h2>

              <p className="leading-7 text-slate-300">
                I develop software systems focused on automation,
                operational efficiency, and backend reliability.
                My projects include management platforms,
                workflow automation, integrations with external APIs,
                and AI-assisted tools.
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
                AI workflows and intelligent integrations.
              </h2>

              <p className="leading-7 text-slate-300">
                I'm exploring agentic workflows, LLM integrations,
                and intelligent automation systems using Python
                and modern AI APIs.
                My current focus is building practical AI applications
                that combine orchestration, usability,
                and scalable backend logic.
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
                Backend architecture and continuous learning.
              </h2>

              <p className="leading-7 text-slate-300">
                I continuously study backend engineering,
                data systems, APIs, infrastructure fundamentals,
                and production-oriented software development while
                applying these concepts in real-world projects.
              </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-soft">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Professional focus
              </p>

              <h2 className="text-2xl font-semibold text-white">
                Domain expertise
              </h2>
            </div>

            <div className="grid gap-4">
              {[
                'Backend development',
                'Python automation',
                'AI integrations',
                'REST APIs',
                'Workflow systems',
                'Teaching & mentorship'
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
                I believe software should simplify operations,
                reduce repetitive work, and create reliable workflows.
                My goal is to build systems that are practical,
                maintainable, and continuously improved through
                iteration and experimentation.
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
                Work with students across multiple disciplines through mentoring,
                academic guidance, classroom support, and structured learning assistance.
                This role strengthened my communication, teaching, leadership,
                and problem-solving skills while improving my ability to explain
                complex concepts clearly and systematically.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
                Alongside education and mentorship activities, I continuously develop
                software engineering and AI projects focused on automation,
                backend systems, workflow orchestration, and intelligent applications.
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
                'Support students through structured guidance and clear communication while continuously improving leadership and problem-solving skills.'
            },
            {
              title: 'Experimentation',
              detail:
                'Rapidly prototype automation systems, AI integrations, and backend workflows with a strong focus on practical learning and iteration.'
            },
            {
              title: 'Production mindset',
              detail:
                'Develop projects with maintainability, reliability, scalability, and long-term engineering growth in mind.'
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
                Ready to build automation systems and AI-powered products.
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
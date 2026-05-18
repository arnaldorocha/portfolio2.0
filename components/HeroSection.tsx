'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PortraitGraphic } from '@/components/PortraitGraphic';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-24 lg:px-8">
      <div
        className="absolute inset-0 bg-soft-grid opacity-60"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-8"
        >
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-400">
            AI systems • Backend engineering • Automation
          </p>

          <div className="space-y-6">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Building AI-powered systems, backend applications, and automation workflows.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I'm Arnaldo Rocha Filho, a Machine Learning and AI engineering student
              focused on backend systems, intelligent automation,
              APIs, and practical software engineering.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/projects"
              className="inline-flex min-w-[170px] items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/15"
            >
              Explore Projects
            </Link>

            <Link
              href="https://github.com/arnaldorocha/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition duration-200 hover:bg-white/5"
            >
              View GitHub
            </Link>

            <Link
              href="https://www.linkedin.com/in/arnaldo-rocha-filho-52ba03163/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition duration-200 hover:bg-white/5"
            >
              LinkedIn
            </Link>
          </div>

          {/* INFO GRID */}
          <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow">
            <div className="text-sm uppercase tracking-[0.28em] text-slate-500">
              Current focus
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="space-y-1">
                <p className="text-sm text-slate-300">
                  Backend systems
                </p>

                <p className="text-xl font-semibold text-white">
                  APIs & automation
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-slate-300">
                  AI development
                </p>

                <p className="text-xl font-semibold text-white">
                  LLM workflows
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-slate-300">
                  Continuous growth
                </p>

                <p className="text-xl font-semibold text-white">
                  Real-world projects
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="relative mx-auto max-w-lg"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface2 p-6 shadow-glow ring-slate-700/50">
            <PortraitGraphic />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
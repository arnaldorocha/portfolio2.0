"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Projects</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Five engineered platforms with architecture, automation, and AI systems at the core.</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Each case study is built around a production-ready solution, including system architecture, stack decisions, media galleries, and operational goals.
          </p>
        </div>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-soft"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{project.title}</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">{project.subtitle}</h2>
                  <p className="mt-5 text-slate-300 leading-7">{project.overview}</p>
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View case study
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

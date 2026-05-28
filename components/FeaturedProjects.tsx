'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data';

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="relative px-6 py-20 lg:px-8" id="projects">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent" />
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Featured Projects</p>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Practical systems and automation projects
          </h2>
          <p className="text-lg leading-relaxed text-slate-400">
            Real projects that focus on backend engineering, automation flows, and applied AI integration with clear technical choices.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-1">
          {featured.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm transition duration-500 hover:border-white/20"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-50" />

              <div className="relative z-10 p-8 sm:p-10">
                {/* Category Badge */}
                {project.category && (
                  <div className="mb-4 inline-flex">
                    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs uppercase tracking-wider text-blue-300">
                      {project.category}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className="mb-2 text-2xl font-semibold text-white sm:text-3xl">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="mb-6 text-lg text-slate-400">
                  {project.subtitle}
                </p>

                {/* Hero Summary */}
                <div className="mb-8 space-y-4 border-l-2 border-blue-500/30 pl-6">
                  <p className="text-base leading-relaxed text-slate-300">
                    {project.hero.summary}
                  </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid gap-8 sm:grid-cols-2">
                  {/* Problem & Solution */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-2 text-sm uppercase tracking-wider text-slate-400">
                        The Problem
                      </h4>
                      <p className="leading-relaxed text-slate-300">
                        {project.problem}
                      </p>
                    </div>

                    {/* Impact Metrics */}
                    <div>
                      <h4 className="mb-3 text-sm uppercase tracking-wider text-slate-400">
                        Impact & Results
                      </h4>
                      <ul className="space-y-2">
                        {project.hero.metrics.map((metric, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-300">
                            <span className="h-2 w-2 rounded-full bg-blue-400" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack & Architecture */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-3 text-sm uppercase tracking-wider text-slate-400">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Infrastructure */}
                    <div>
                      <h4 className="mb-3 text-sm uppercase tracking-wider text-slate-400">
                        Infrastructure Highlights
                      </h4>
                      <ul className="space-y-2">
                        {project.infrastructure.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-white/40 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA Links */}
                <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-8">
                  {project.links.demo && (
                    <Link
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/20"
                    >
                      View Live Demo
                    </Link>
                  )}

                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-2.5 text-sm font-semibold text-slate-300 transition duration-300 hover:border-white/40 hover:text-white"
                  >
                    GitHub Repo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
        >
          <p className="mb-4 text-slate-400">
            These are my featured projects. Explore all completed and in-progress work.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2.5 text-sm font-semibold text-white transition duration-300 hover:shadow-lg"
          >
            Explore All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

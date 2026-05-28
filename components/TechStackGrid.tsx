'use client';

import { motion } from 'framer-motion';
import { techStack } from '@/lib/data';

export function TechStackGrid() {
  return (
    <section className="relative px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent" />
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Technology Stack</p>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Practical tools for backend and AI work
          </h2>
          <p className="text-lg leading-relaxed text-slate-400">
            A selection of the tools and languages I use for backend systems, automation, and AI integration.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-sm transition duration-500 hover:border-white/20"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Category Title */}
                <h3 className="mb-6 text-lg font-semibold tracking-tight text-white">
                  {category.name}
                </h3>

                {/* Tech Items */}
                <div className="space-y-2.5">
                  {category.items.map((tech) => (
                    <div
                      key={tech}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition duration-300 group-hover:border-white/20 group-hover:bg-white/10"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
        >
          <p className="text-sm text-slate-400">
            Always learning and adopting the latest technologies. This stack represents current expertise and constantly evolving knowledge.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

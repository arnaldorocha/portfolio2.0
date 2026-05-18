'use client';

import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/data';

export function ProjectCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' });

  return (
    <section className="relative px-6 pb-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Featured work</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Projects crafted for automation, AI orchestration, and mission-critical infrastructure.
          </h2>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-surface2 p-4 shadow-soft">
          <div ref={emblaRef} className="embla overflow-hidden">
            <div className="flex gap-4 pb-6">
              {projects.slice(0, 4).map((project, index) => (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="min-w-[280px] max-w-[320px] shrink-0 rounded-3xl border border-white/10 bg-surface p-6"
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{project.title}</p>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-slate-300">{project.subtitle.split(' ')[0]}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{project.subtitle}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{project.overview}</p>
                  <div className="mt-6">
                    <Link href={`/projects/${project.slug}`} className="text-sm font-semibold text-accent hover:text-white">
                      View case study →
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
        href="/projects"
        className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
        >
        Browse full project library
        </Link>
          <p className="text-sm text-slate-400">Each project includes architecture thinking, media galleries, and production decisions.</p>
        </div>
      </div>
    </section>
  );
}

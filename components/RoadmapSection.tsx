'use client';

import { motion } from 'framer-motion';
import { roadmap } from '@/lib/data';

const categoryColors: Record<string, { bg: string; text: string }> = {
  ai: { bg: 'bg-blue-500/20', text: 'text-blue-300' },
  saas: { bg: 'bg-purple-500/20', text: 'text-purple-300' },
  automation: { bg: 'bg-green-500/20', text: 'text-green-300' },
  research: { bg: 'bg-amber-500/20', text: 'text-amber-300' }
};

const statusColors: Record<string, string> = {
  completed: 'bg-emerald-500/20 text-emerald-300',
  'in-progress': 'bg-blue-500/20 text-blue-300',
  planned: 'bg-slate-500/20 text-slate-300'
};

export function RoadmapSection() {
  const sortedRoadmap = [...roadmap].sort((a, b) => {
    const aYear = a.year;
    const bYear = b.year;
    if (aYear !== bYear) return aYear - bYear;

    const quarterOrder = { Q1: 1, Q2: 2, Q3: 3, Q4: 4 };
    return quarterOrder[a.quarter as keyof typeof quarterOrder] - quarterOrder[b.quarter as keyof typeof quarterOrder];
  });

  const groupedByYear = sortedRoadmap.reduce(
    (acc, item) => {
      if (!acc[item.year]) {
        acc[item.year] = [];
      }
      acc[item.year].push(item);
      return acc;
    },
    {} as Record<number, typeof sortedRoadmap>
  );

  return (
    <section className="relative px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-amber-500 to-transparent" />
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Roadmap</p>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Current focus and next steps
          </h2>
          <p className="text-lg leading-relaxed text-slate-400">
            A grounded roadmap for building backend systems, automation tools, and applied AI experiments over the next year.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-16">
          {Object.entries(groupedByYear).map(([year, items]) => (
            <div key={year}>
              <h3 className="mb-8 text-2xl font-semibold text-white">{year}</h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((item, index) => (
                  <motion.div
                    key={`${item.quarter}-${item.title}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-surface2/50 p-6 backdrop-blur-sm transition duration-500 hover:border-white/20"
                  >
                    {/* Quarter Badge */}
                    <div className="mb-4 flex items-center gap-2">
                      <span className="text-xs uppercase tracking-widest font-semibold text-slate-300">
                        {item.quarter} {item.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="mb-3 text-base font-semibold leading-tight text-white">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="mb-4 text-sm leading-relaxed text-slate-300">
                      {item.description}
                    </p>

                    
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

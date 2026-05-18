'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Backend architecture',
    description: 'Designing API-first services with strict schema contracts, robust failure handling, and observability built in.',
    accent: 'Reliability'
  },
  {
    title: 'Infrastructure systems',
    description: 'Building hybrid cloud deployment patterns, service meshes, and infrastructure-as-code automation for stability.',
    accent: 'Resilience'
  },
  {
    title: 'Automation pipelines',
    description: 'Creating repeatable pipelines for deployment, validation, incident response, and operational tooling.',
    accent: 'Velocity'
  },
  {
    title: 'Orchestration flows',
    description: 'Modeling distributed systems with workflows that reflect business intent and production-safety guardrails.',
    accent: 'Control'
  }
];

export function EngineeringCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-soft"
        >
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-white">{card.title}</h3>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">{card.accent}</span>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-300">{card.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

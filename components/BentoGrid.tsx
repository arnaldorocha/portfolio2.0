'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const items = [
  {
    title: 'Infrastructure Strategy',
    description: 'Designing resilient backend systems, service meshes, and secure cloud platforms at scale.',
    tag: 'Systems'
  },
  {
    title: 'Automation Pipelines',
    description: 'Building workflow orchestration, event-driven automation, and operational tooling for production.',
    tag: 'Automation'
  },
  {
    title: 'AI Operations',
    description: 'Creating supervised AI systems, agentic workflows, and intelligence layers for enterprise use cases.',
    tag: 'AI'
  },
  {
    title: 'Observability',
    description: 'Establishing monitoring, alerting, and audit workflows that support engineering velocity and trust.',
    tag: 'Telemetry'
  }
];

export function BentoGrid() {
  return (
    <section className="relative px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Engineering portfolio</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built for modern infrastructure, automation, and product-grade systems.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-soft"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <Badge>{item.tag}</Badge>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const stacks = [
  {
    title: 'Python ecosystem',
    items: ['FastAPI', 'Django', 'LangChain', 'Airflow', 'Pydantic']
  },
  {
    title: 'AI & ML',
    items: ['OpenAI', 'SageMaker', 'LLMs', 'Agentic workflows', 'Model orchestration']
  },
  {
    title: 'Backend engineering',
    items: ['PostgreSQL', 'Redis', 'gRPC', 'GraphQL', 'Kafka']
  },
  {
    title: 'Infrastructure',
    items: ['Kubernetes', 'Terraform', 'ArgoCD', 'AWS', 'GCP']
  }
];

export function TechStackGrid() {
  return (
    <section className="relative px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Technology focus</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A modern stack for automation, AI infrastructure, and high-trust engineering.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {stacks.map((stack, index) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-surface2 p-6 shadow-soft"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">{stack.title}</h3>
                <Badge>Stack</Badge>
              </div>
              <ul className="space-y-3 text-sm text-slate-400">
                {stack.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

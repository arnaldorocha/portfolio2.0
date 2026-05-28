'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/lib/data';

export function ProcessFlow() {
  return (
    <section className="relative px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-16 max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-indigo-500 to-transparent" />

            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Process
            </p>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            How I build software
          </h2>

          <p className="text-lg leading-relaxed text-slate-400">
            A practical process for building backend systems, automation flows, and AI integrations with reliability in mind.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          
          {/* Connection Line */}
          <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-indigo-500/40 via-white/10 to-transparent sm:left-8 lg:left-8" />

          {/* Steps */}
          <div className="relative space-y-10 sm:space-y-14 lg:space-y-20">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.order}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group relative flex gap-6 sm:gap-8 lg:gap-12"
                >
                  
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-indigo-500/10 shadow-lg shadow-indigo-500/10 backdrop-blur-xl transition-all duration-300 group-hover:scale-105 group-hover:border-indigo-400/30 group-hover:bg-indigo-500/15 sm:h-16 sm:w-16">
                      
                      {/* Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Grid */}
                      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:10px_10px]" />

                      <Icon
                        className="relative z-10 h-5 w-5 text-indigo-300 sm:h-7 sm:w-7"
                        strokeWidth={2.2}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8 sm:pb-12">
                    <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 group-hover:border-white/10 group-hover:bg-white/[0.04] sm:p-8">
                      
                      {/* Top */}
                      <div className="mb-4 flex items-center gap-3">
                        <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
                          Step {step.order}
                        </span>

                        <div className="hidden h-px flex-1 bg-gradient-to-r from-indigo-500/30 to-transparent sm:block" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-indigo-100 sm:text-2xl">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-4 max-w-2xl leading-relaxed text-slate-400 sm:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
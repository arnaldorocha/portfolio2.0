'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { specializations } from '@/lib/data';

export function SpecializationsSection() {
  return (
    <section className="relative px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-blue-500 to-transparent" />
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Specializations</p>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What I Focus On
          </h2>
          <p className="text-lg leading-relaxed text-slate-400">
            From local business tools to AI-powered automation, I build systems that solve real workflow problems across practical engineering domains.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {specializations.map((spec, index) => {
  const Icon = spec.icon;

  return (  <motion.div
              key={spec.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${spec.color} p-8 backdrop-blur-sm transition duration-500 hover:border-white/20`}
            >
              {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10 space-y-6">
                {/* Icon */}
                {/* Icon */}
<div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">
  
  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent" />

  {/* Grid */}
  <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:10px_10px]" />

  {Icon && React.createElement(Icon, { className: 'relative z-10 h-7 w-7 text-white', strokeWidth: 2.2 })}
</div>
                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {spec.title}
                  </h3>
                  <p className="leading-relaxed text-slate-300">
                    {spec.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-2 border-t border-white/10 pt-6">
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Key Benefits
                  </p>
                  <ul className="space-y-2">
                    {spec.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/40 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
})}
        </div>
      </div>
    </section>
  );
}

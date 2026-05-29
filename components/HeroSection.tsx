'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PortraitGraphic } from '@/components/PortraitGraphic';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-32 lg:px-8">
      {/* Background gradients */}
      <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -left-40 bottom-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-400 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            Computer Engineer • Backend developer • Automation • Applied AI
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Arnaldo Rocha Filho
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            >
              I build backend services, automation pipelines, and model-integrated systems using Python, FastAPI, and PostgreSQL. I ship production-ready automation and SaaS tools for small businesses.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-7 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:shadow-xl hover:from-blue-600 hover:to-cyan-600"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-200 transition duration-300 hover:border-white/40 hover:bg-white/10"
            >
              Contact
            </Link>
          </motion.div>

          {/* Stats/Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:grid-cols-3"
          >
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wider text-slate-500">Brand</p>
              <p className="text-lg font-semibold text-white">Automation & SaaS</p>
            </div>

            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wider text-slate-500">Teaching</p>
              <p className="text-lg font-semibold text-white">Instructor — Instituto Correggio</p>
            </div>

            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wider text-slate-500">Production</p>
              <p className="text-lg font-semibold text-white">SIGA — live at Instituto Correggio</p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="relative h-full min-h-[500px] lg:min-h-[600px]"
        >
          <PortraitGraphic />
        </motion.div>
      </div>
    </section>
  );
}
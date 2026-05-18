'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { navigation } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface2/95 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Engineering Portfolio</p>
          <h3 className="text-2xl font-semibold text-white">Designed for systems leaders and modern AI infrastructure teams.</h3>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            A premium portfolio experience built around automation, architecture, and production readiness with polished motion and enterprise-grade content.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-slate-500">Pages</p>
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-slate-500">Contact</p>
            <div className="space-y-3 text-sm text-slate-300">
              <p>arnaldorochafilho@gmail.com</p>
              <p>Open to senior engineering roles, AI infrastructure initiatives, and automation strategy leadership.</p>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500"
      >
        © 2026 ARNALDO ROCHA FILHO Portfolio. Crafted for infrastructure, automation, and AI-native systems.
      </motion.div>
    </footer>
  );
}

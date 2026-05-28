'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '#contact' }
];

const socialLinks = [
  { icon: '→', label: 'GitHub', href: 'https://github.com/arnaldorocha/' },
  { icon: '→', label: 'LinkedIn', href: 'https://linkedin.com/in/arnaldo-rocha-filho-52ba03163/' },
  { icon: '→', label: 'Email', href: 'mailto:arnaldorochafilho@gmail.com' }
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-gradient-to-b from-surface to-surface2">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Content Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1 space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 p-1.5">
                <div className="h-full w-full rounded bg-surface flex items-center justify-center text-xs font-bold text-blue-400">
                  AR
                </div>
              </div>
              <span className="font-semibold text-white">Arnaldo Rocha</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Backend developer. Automation engineer. Applied AI.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h4 className="mb-4 text-xs uppercase tracking-wider font-semibold text-slate-300">Navigation</h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 transition duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <h4 className="mb-4 text-xs uppercase tracking-wider font-semibold text-slate-300">Connect</h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 transition duration-300 hover:text-white"
                >
                  <span className="text-blue-400">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="sm:col-span-2 lg:col-span-1 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-300">Ready to Build?</h4>
            <p className="text-sm text-slate-400">
              Let's discuss your project and create something amazing together.
            </p>
            <Link
              href="mailto:arnaldorochafilho@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition duration-300 hover:shadow-lg"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-500"
        >
          <p>© 2026 Arnaldo Rocha Filho. Building practical software systems and automation tools.</p>
        </motion.div>
      </div>
    </footer>
  );
}

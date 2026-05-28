'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
Mail,
Linkedin,
Github,
MessageCircle,
ArrowRight,
} from 'lucide-react';

const socialLinks = [
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/+551234567890', color: 'hover:text-green-400' },
  { icon: Mail, label: 'Email', href: 'mailto:arnaldorochafilho@gmail.com', color: 'hover:text-blue-400' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/arnaldo-rocha-filho-52ba03163/', color: 'hover:text-blue-300' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/arnaldorocha/', color: 'hover:text-white' }
];

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:px-8" id="contact">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
      <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 rounded-3xl border border-white/10 bg-surface/40 p-12 backdrop-blur-sm text-center sm:p-16"
        >
          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to Build Something Great?
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
              Whether you need a custom workflow tool, automation engine, or practical AI integration—let's build something useful and dependable together.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="mailto:arnaldorochafilho@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 font-semibold text-white shadow-lg transition duration-300 hover:shadow-xl hover:from-blue-600 hover:to-cyan-600"
            >
              Start a Project
            </Link>
            <Link
              href="https://linkedin.com/in/arnaldo-rocha-filho-52ba03163/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-white/10 hover:border-white/30"
            >
              Connect on LinkedIn
            </Link>
          </div>

          {/* Social Links */}
          <div className="space-y-4 border-t border-white/10 pt-8">
            <p className="text-sm uppercase tracking-widest text-slate-500">Get in touch</p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((link) => {
  const Icon = link.icon;

  return (
    <Link
      key={link.label}
      href={link.href}
      target="_blank"
      rel="noreferrer"
      title={link.label}
      className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] ${link.color}`}
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
})}
            </div>
          </div>

          {/* Additional info */}
          <p className="text-sm text-slate-400">
            Available for freelance projects, collaborations, and full-time opportunities. Let's build intelligent systems together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

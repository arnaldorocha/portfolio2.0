'use client';

import { motion } from 'framer-motion';

type VideoShowcaseProps = {
  mp4?: string;
  youtube?: string;
  tagline: string;
};

export function VideoShowcase({ mp4, youtube, tagline }: VideoShowcaseProps) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-surface2 p-6 shadow-soft">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Video showcase</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{tagline}</h3>
        </div>
        <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-slate-300">Media</span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="grid gap-4 sm:grid-cols-2"
      >
        {mp4 ? (
          <video controls className="h-full w-full rounded-[1.5rem] bg-black">
            <source src={mp4} type="video/mp4" />
          </video>
        ) : (
          <div className="flex h-64 items-center justify-center rounded-[1.5rem] bg-slate-950/80 text-slate-400">MP4 preview unavailable</div>
        )}
        {youtube ? (
          <iframe
            src={youtube}
            title="Embedded walkthrough"
            className="h-64 w-full rounded-[1.5rem] border border-white/10"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="flex h-64 items-center justify-center rounded-[1.5rem] bg-slate-950/80 text-slate-400">YouTube preview unavailable</div>
        )}
      </motion.div>
    </section>
  );
}

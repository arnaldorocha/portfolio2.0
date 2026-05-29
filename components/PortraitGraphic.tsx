'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function PortraitGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0b0f17] via-[#0f1722] to-[#111827] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(120,119,198,0.18),transparent_28%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="relative z-10 grid gap-5 rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
        
        {/* IMAGE */}
        <div className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0f1720]">
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <Image
            src="/images/profile/perfil.png" alt="Arnaldo Rocha Filho"
            width={900}
            height={1200}
            priority
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />

        </div>
      </div>
    </motion.div>
  );
}

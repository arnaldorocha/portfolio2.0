'use client';

import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/components/utils';
import type { ProjectMedia } from '@/lib/data';

type MediaGalleryProps = {
  items: ProjectMedia[];
};

export function MediaGallery({ items }: MediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMedia = items[activeIndex];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-surface2 p-4 shadow-soft">
          {activeMedia.type === 'image' ? (
            <Image
              src={activeMedia.src}
              alt={activeMedia.label}
              width={1200}
              height={800}
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
            />
          ) : (
            <div className="flex h-[420px] items-center justify-center rounded-[1.5rem] bg-slate-950/70 text-slate-400">
              <p className="text-sm">{activeMedia.label}</p>
            </div>
          )}
        </div>
        <div className="space-y-4 rounded-[2rem] border border-white/10 bg-surface2 p-6 shadow-soft">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Media gallery</p>
            <p className="text-lg leading-8 text-slate-300">Browse image and video assets with responsive previews and immersive case study context.</p>
          </div>
          <div className="space-y-3">
            {items.map((media, index) => (
              <button
                type="button"
                key={media.src}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'w-full rounded-2xl border px-4 py-4 text-left transition duration-200',
                  index === activeIndex
                    ? 'border-accent bg-white/5 text-white'
                    : 'border-white/10 bg-transparent text-slate-300 hover:border-white/20 hover:bg-white/5'
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-white">{media.label}</p>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{media.type.toUpperCase()}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-slate-300">
                    {index + 1}
                  </span>
                </div>
              </button>
            ))}
          </div>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button className="w-full">Open fullscreen preview</Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70" />
              <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(95vw,1200px)] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/10 bg-surface2 p-6 shadow-soft">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Dialog.Title className="text-xl font-semibold text-white">Fullscreen preview</Dialog.Title>
                    <Dialog.Description className="mt-2 text-sm text-slate-400">Review the selected asset in a larger presentation layout.</Dialog.Description>
                  </div>
                  <Dialog.Close className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10">
                    Close
                  </Dialog.Close>
                </div>
                <div className="mt-6">
                  {activeMedia.type === 'image' ? (
                    <Image
                      src={activeMedia.src}
                      alt={activeMedia.label}
                      width={1600}
                      height={1000}
                      className="max-h-[72vh] w-full rounded-[1.5rem] object-cover"
                    />
                  ) : activeMedia.type === 'mp4' ? (
                    <video controls className="max-h-[72vh] w-full rounded-[1.5rem] bg-black">
                      <source src={activeMedia.src} type="video/mp4" />
                    </video>
                  ) : (
                    <iframe
                      src={activeMedia.src}
                      title={activeMedia.label}
                      className="h-[72vh] w-full rounded-[1.5rem] border border-white/10"
                      allowFullScreen
                    />
                  )}
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </div>
  );
}

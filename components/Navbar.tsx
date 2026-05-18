'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/lib/data';
import { cn } from '@/components/utils';

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-sm font-semibold tracking-[0.24em] text-white/90">
          ARNALDO ROCHA FILHO
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm transition-colors duration-200',
                pathname === item.href ? 'text-white' : 'text-slate-400 hover:text-white'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/arnaldorocha"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-200 transition hover:bg-white/10"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

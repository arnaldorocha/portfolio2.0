'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/lib/data';
import { cn } from '@/components/utils';

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-gradient-to-b from-surface/95 to-surface/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo/Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-white transition duration-300"
        >
          <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 p-1.5">
            <div className="h-full w-full rounded bg-surface flex items-center justify-center text-xs font-bold text-blue-400">
              ARF
            </div>
          </div>
          <span className="hidden sm:inline">PORTFOLIO • LABS</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-xs font-semibold uppercase tracking-wider transition-colors duration-200',
                pathname === item.href
                  ? 'text-blue-400'
                  : 'text-slate-400 hover:text-white'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="https://github.com/arnaldorocha"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 transition duration-300 hover:border-white/20 hover:bg-white/10"
          >
            GitHub
          </Link>

          <Link
            href="#contact"
            className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-lg transition duration-300 hover:shadow-xl hover:from-blue-600 hover:to-cyan-600"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

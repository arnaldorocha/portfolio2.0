import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Practical Backend & AI Systems | Arnaldo Rocha Filho',
  description: 'Computer Engineering student building backend systems, automation tools, and AI integrations with Python, FastAPI, and PostgreSQL.',
  keywords: 'Computer Engineering, Backend, Python, FastAPI, PostgreSQL, Automation, AI Integration, Next.js, GitHub',
  authors: [{ name: 'Arnaldo Rocha Filho' }],
  openGraph: {
    title: 'Practical Backend & AI Systems',
    description: 'A student engineer building backend systems, automation tools, and applied AI workflows with a focus on real execution.',
    type: 'website'
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-surface text-white`}> 
        <div className="min-h-screen bg-surface bg-[radial-gradient(circle_at_top,_rgba(143,176,255,0.08),transparent_24%),radial-gradient(circle_at_40%_60%,rgba(255,255,255,0.04),transparent_18%)]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

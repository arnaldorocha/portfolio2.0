import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Engineering Portfolio | Infrastructure • Automation • AI Systems',
  description: 'Premium engineering portfolio showcasing intelligent infrastructure, automation systems, and AI-powered operational platforms.',
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
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

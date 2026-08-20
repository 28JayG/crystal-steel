import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Crystal Metal Industry | Forged for Excellence',
  description: 'Premium metal manufacturing and custom fabrication solutions. High-quality steel, pipes, flanges, and machining engineered to international standards.',
  keywords: ['Metal Industry', 'Steel sheets', 'Custom fabrication', 'Industrial piping', 'Metallurgical engineering', 'CNC machining'],
  authors: [{ name: 'Crystal Metal Industry' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Nav, Footer } from '@/components/Chrome';

const font = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });

export const metadata: Metadata = {
  title: 'CreativeHQ — Digital experiences that move people into action',
  description: 'Brand, product design, commercial growth and frontend build for ambitious businesses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${font.variable} font-sans`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

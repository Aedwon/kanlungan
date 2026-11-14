import type { Metadata } from 'next';
import { Newsreader, Hanken_Grotesk } from 'next/font/google';
import { CartProvider } from '@/components/CartProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { copy } from '@/data/copy';
import './globals.css';
const newsreader = Newsreader({ variable: '--font-newsreader', subsets: ['latin'], weight: ['300', '400'], style: ['normal', 'italic'], display: 'swap' });
const hanken = Hanken_Grotesk({ variable: '--font-hanken', subsets: ['latin'], weight: ['400', '500'], display: 'swap' });
export const metadata: Metadata = { title: { default: 'Kanlungan', template: '%s | Kanlungan' }, description: copy.Home['Hero text'] };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${newsreader.variable} ${hanken.variable}`}><body><CartProvider><div className="pg"><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content">{children}</main><Footer /></div></CartProvider></body></html>;
}

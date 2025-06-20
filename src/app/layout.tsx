// src/app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AnalyticsProvider } from '@/components/AnalyticsProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loader from '@/components/AdminHubLoader';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Melodi Media',
  description:
    'Melodi Media is a 360° digital marketing agency based in Botswana — specializing in PR, content production, and brand transformation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-[#A7D4F5] to-[#3F76BF]`}
      >
        <AnalyticsProvider>
          <Loader />
          <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
            <Header />
          </div>
          <main className="flex-grow bg-white bg-opacity-95 rounded-t-3xl shadow-inner p-4 sm:p-6 md:p-10">
            {children}
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </AnalyticsProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import './globals.css';
import Cursor from '../components/Cursor';
import { ThemeProvider } from '../context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const siteUrl = process.env.APP_URL || 'https://www.aditha.lk';
const siteTitle = 'Aditha Dinuja Serasinghe | Graphic Designer, Front End Web Developer, Social Media Manager';
const siteDescription = "I build, design, and grow digital brands. View my portfolio featuring custom front-end development, high-impact graphic design, and data-driven social media management. Let's collaborate!";
const ogImageUrl = 'https://6rhooijwwmhiclbs.public.blob.vercel-storage.com/AIEnhancer_IMG_20260127_081320.jpg';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: ['Aditha Serasinghe', 'Frontend Developer', 'UI/UX Designer', 'Web Developer', 'Next.js'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Aditha Dinuja Serasinghe',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Aditha Dinuja Serasinghe — Front End Web Developer & Graphic Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [ogImageUrl],
  },
  verification: {
    google: 'k8VYKB1znbFgd4djL24GYQt08NRxCbLFlfPDrBLJjv8',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aditha Dinuja Serasinghe',
  url: siteUrl,
  image: ogImageUrl,
  jobTitle: 'Front End Web Developer & Graphic Designer',
  description: siteDescription,
  sameAs: [
    'https://github.com/adserasinghe',
    'https://linkedin.com/in/adserasinghe',
    'https://facebook.com/adserasinghe',
    'https://www.behance.net/adserasinghe',
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const nonce = headersList.get('x-nonce') || undefined;

  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('portfolio-theme');
                  var theme = (stored === 'light' || stored === 'dark') ? stored : 'dark';
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(theme);
                  document.documentElement.style.colorScheme = theme;
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-black text-slate-800 dark:text-gray-100 antialiased selection:bg-blue-600 selection:text-white transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <Cursor />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}

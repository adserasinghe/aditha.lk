import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Cursor from '../components/Cursor';
import { ThemeProvider } from '../context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Aditha Dinuja Serasinghe | Graphic Designer, Front End Web Developer, Social Media Manager',
  description: "I build, design, and grow digital brands. View my portfolio featuring custom front-end development, high-impact graphic design, and data-driven social media management. Let's collaborate!",
  keywords: ['Aditha Serasinghe', 'Frontend Developer', 'UI/UX Designer', 'Web Developer', 'Next.js'],
  verification: {
    google: 'k8VYKB1znbFgd4djL24GYQt08NRxCbLFlfPDrBLJjv8',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <script
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
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-black text-slate-800 dark:text-gray-100 antialiased selection:bg-blue-600 selection:text-white transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <Cursor />
          {children}
          <Analytics />
          <SpeedInsights />
          <GoogleAnalytics gaId="AW-11506106540" />
        </ThemeProvider>
      </body>
    </html>
  );
}

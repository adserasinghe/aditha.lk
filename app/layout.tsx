import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Cursor from '../components/Cursor';

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

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} bg-black`} suppressHydrationWarning>
      <body className="min-h-screen bg-black text-gray-100 antialiased selection:bg-blue-600 selection:text-white" suppressHydrationWarning>
        <Cursor />
        {children}
        <Analytics />
        <GoogleAnalytics gaId="AW-11506106540" />
      </body>
    </html>
  );
}


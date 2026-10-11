'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';
import { NavTab } from '@/types/portfolio';

export default function WhatIsHtmlPage() {
  const router = useRouter();

  const handleTabChange = (tab: NavTab) => {
    router.push(`/?tab=${tab}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-800 dark:text-gray-100 flex flex-col transition-colors duration-300">
      <Navbar activeTab="blog" onTabChange={handleTabChange} />
      
      <main className="flex-grow max-w-4xl mx-auto px-6 py-28 sm:py-32 w-full">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight transition-colors duration-300">
          What is HTML?
        </h1>
        <article className="prose dark:prose-invert max-w-none space-y-4">
          <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg transition-colors duration-300">
            HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.
          </p>
          <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg transition-colors duration-300">
            HTML describes the structure of a Web page semantically and originally included cues for the appearance of the document. HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page.
          </p>
        </article>

        <div className="mt-12">
          <a
            href="https://linktr.ee/adithacreation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3.5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 shadow-md transition-all active:scale-95"
          >
            Are You Want Hire me?
          </a>
        </div>
      </main>

      <Footer onTabChange={handleTabChange} />
    </div>
  );
}

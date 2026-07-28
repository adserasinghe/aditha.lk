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
    <div className="min-h-screen bg-black text-gray-100 flex flex-col">
      <Navbar activeTab="blog" onTabChange={handleTabChange} />
      
      <main className="flex-grow max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-8">What is HTML?</h1>
        <article className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed mb-4">
            HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.
          </p>
          <p className="text-gray-300 leading-relaxed">
            HTML describes the structure of a Web page semantically and originally included cues for the appearance of the document. HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page.
          </p>
        </article>

        <div className="mt-12">
          <a
            href="https://linktr.ee/adithacreation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition-colors"
          >
            Are You Want Hire me?
          </a>
        </div>
      </main>

      <Footer onTabChange={handleTabChange} />
    </div>
  );
}

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/?tab=blog"
        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline mb-8"
      >
        <ArrowLeft size={16} />
        <span>Back to Blog</span>
      </Link>

      <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
        What is HTML?
      </h1>
      <p className="text-slate-500 dark:text-gray-400 text-sm mb-8">
        Published on October 2025 • 4 min read
      </p>

      <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-gray-300 space-y-6 leading-relaxed">
        <p>
          HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page&apos;s appearance/presentation (CSS) or functionality/behavior (JavaScript).
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          Why Semantic HTML Matters
        </h2>
        <p>
          Semantic HTML introduces meaning to the web page rather than just presentation. For example, using a <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-xs font-mono">&lt;header&gt;</code>, <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-xs font-mono">&lt;nav&gt;</code>, or <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-xs font-mono">&lt;article&gt;</code> tag clearly describes its role to both browser and developer.
        </p>
      </div>
    </article>
  );
}

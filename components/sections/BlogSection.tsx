'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'What is HTML?',
    summary: 'An introduction to the standard markup language for documents designed to be displayed in a web browser.',
    href: '/blog/what-is-html'
  }
];

export default function BlogSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-6 md:px-12 py-12"
    >
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 transition-colors duration-300">Blog</h2>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={post.href}
            className="group block"
          >
            <motion.div
              layout
              className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-blue-500/50 shadow-sm dark:shadow-none transition-all cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{post.title}</h3>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed">{post.summary}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

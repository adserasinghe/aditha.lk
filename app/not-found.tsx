import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-black text-slate-900 dark:text-white px-6 transition-colors duration-300">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-slate-600 dark:text-gray-400 mb-8">Page not found</p>
      <Link 
        href="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}

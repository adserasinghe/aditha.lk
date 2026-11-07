'use client';

import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="p-2.5 rounded-full bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-300 dark:hover:bg-white/15 transition-all cursor-pointer focus:outline-none"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-amber-400 transition-transform hover:rotate-45" />
      ) : (
        <Moon size={18} className="text-blue-600 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}

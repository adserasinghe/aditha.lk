'use client';

import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ThemeToggleProps {
  className?: string;
  variant?: 'pill' | 'icon' | 'badge';
  showLabel?: boolean;
}

export default function ThemeToggle({
  className = '',
  variant = 'icon',
  showLabel = false,
}: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  const isDark = theme === 'dark';

  if (!mounted) {
    // Render placeholder to avoid layout shifts while maintaining sizing
    return (
      <div
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200/80 dark:border-white/10 bg-slate-100/50 dark:bg-white/5 opacity-50 ${className}`}
        aria-hidden="true"
      />
    );
  }

  if (variant === 'pill' || showLabel) {
    return (
      <button
        onClick={toggleTheme}
        type="button"
        className={`group relative flex items-center gap-2.5 px-3.5 py-2 rounded-full border transition-all duration-300 cursor-pointer select-none ${
          isDark
            ? 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-amber-400/40 text-gray-200'
            : 'bg-slate-100 hover:bg-slate-200/80 border-slate-300 hover:border-blue-500/40 text-slate-700 shadow-sm'
        } ${className}`}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <div className="relative w-4 h-4 flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            {isDark ? (
              <motion.div
                key="sun"
                initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-amber-400"
              >
                <Sun size={16} strokeWidth={2.2} />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ scale: 0.5, rotate: 90, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0.5, rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-indigo-600"
              >
                <Moon size={16} strokeWidth={2.2} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <span className="text-xs font-semibold tracking-wide capitalize">
          {isDark ? 'Light' : 'Dark'} Mode
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`group relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border transition-all duration-300 active:scale-95 cursor-pointer ${
        isDark
          ? 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-amber-400/50 shadow-[0_0_15px_rgba(251,191,36,0.15)] hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] text-amber-400'
          : 'bg-white hover:bg-slate-50 border-slate-200/90 hover:border-blue-500/50 shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(59,130,246,0.2)] text-indigo-600'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun-icon"
            initial={{ scale: 0.4, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.4, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)] transition-transform group-hover:rotate-45 duration-300" strokeWidth={2.2} />
          </motion.div>
        ) : (
          <motion.div
            key="moon-icon"
            initial={{ scale: 0.4, rotate: 90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.4, rotate: -90, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 drop-shadow-[0_0_6px_rgba(79,70,229,0.3)] transition-transform group-hover:-rotate-12 duration-300" strokeWidth={2.2} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

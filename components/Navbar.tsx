'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NavTab } from '../types/portfolio';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

const NAV_ITEMS: { id: NavTab; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTabClick = (tab: NavTab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-slate-200/80 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo & Name (Logo background square color is black per user requirement) */}
        <button
          onClick={() => handleTabClick('home')}
          className="flex items-center gap-3.5 group cursor-pointer focus:outline-none"
          aria-label="Aditha Serasinghe Home"
        >
          <div className="relative w-11 h-11 rounded-xl bg-black border border-white/20 p-1 flex items-center justify-center overflow-hidden shadow-md transition-transform group-hover:scale-105" style={{ backgroundColor: '#000000' }}>
            <Image
              src="/assets/aistudio/my_logo_bw_1_sq_303a5954.png"
              alt="Aditha Logo"
              width={34}
              height={34}
              className="object-contain"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              ADITHA
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-slate-100/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer focus:outline-none ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-navbar-pill"
                    className="absolute inset-0 bg-blue-600 rounded-full shadow-[0_2px_15px_rgba(59,130,246,0.4)] -z-10"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle + Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-white/15 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 dark:border-white/10 bg-white/95 dark:bg-black/95 backdrop-blur-xl px-6 py-6 space-y-2 shadow-2xl"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

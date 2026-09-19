'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { NavTab } from '../types/portfolio';

interface NavbarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // If at the very top of the page (within 40px), auto-maximize
          if (currentScrollY <= 40) {
            setIsMinimized(false);
          } else {
            // Auto-minimize when scrolled down past 40px
            setIsMinimized(true);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: NavTab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-500 ease-out translate-y-0 opacity-100 ${
        isMinimized && !mobileMenuOpen
          ? 'pt-2 sm:pt-3 px-3 sm:px-6 pointer-events-none'
          : mobileMenuOpen
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4 pointer-events-auto'
          : 'pt-4 pb-4 sm:pt-6 sm:pb-6 px-0 bg-transparent pointer-events-auto'
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-out pointer-events-auto ${
          isMinimized && !mobileMenuOpen
            ? 'w-full max-w-4xl lg:max-w-5xl px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#080d1a]/85 backdrop-blur-xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.65)]'
            : 'max-w-7xl px-6 md:px-12 py-0'
        }`}
      >
        {/* Brand Logo */}
        <button
          onClick={() => window.location.reload()}
          className="group flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="https://6rhooijwwmhiclbs.public.blob.vercel-storage.com/my%20logo%20bw%201%20sq.png"
              alt="Logo"
              width={isMinimized ? 32 : 40}
              height={isMinimized ? 32 : 40}
              priority
              referrerPolicy="no-referrer"
              className={`object-cover transition-all duration-500 ${isMinimized ? 'w-8 h-8' : 'w-9 h-9 sm:w-10 sm:h-10'}`}
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className={`font-bold tracking-wider uppercase text-white group-hover:text-blue-400 transition-all duration-300 ${isMinimized ? 'text-xs' : 'text-sm'}`}>
              Aditha
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center transition-all duration-500 ${isMinimized ? 'gap-6' : 'gap-8'}`}>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative font-medium tracking-wide transition-all duration-300 py-1 focus:outline-none cursor-pointer ${
                  isMinimized ? 'text-xs sm:text-sm' : 'text-sm'
                } ${
                  isActive ? 'text-blue-500 font-semibold' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Hire Me CTA Button */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`group relative overflow-hidden hidden sm:inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_6px_25px_rgba(59,130,246,0.45)] transition-all duration-300 active:scale-95 cursor-pointer ${
              isMinimized
                ? 'px-4 py-1.5 text-xs'
                : 'px-6 py-2.5 text-sm'
            }`}
          >
            <span>Hire Me</span>
            <span className="inline-flex items-center overflow-hidden max-w-0 opacity-0 -translate-x-3 group-hover:max-w-6 group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-1.5 transition-all duration-300 ease-out">
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </span>
          </button>

          {/* Hamburger Menu Trigger for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-b border-white/10 bg-black/95 backdrop-blur-xl px-6 py-6 mt-4 overflow-hidden pointer-events-auto"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between text-left px-4 py-3 rounded-xl transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-blue-600/15 text-blue-400 font-semibold border border-blue-500/30'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <div className="pt-2">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="group w-full flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-xl shadow-lg transition-all active:scale-[0.99] cursor-pointer"
                >
                  <span>Hire Me</span>
                  <span className="inline-flex items-center overflow-hidden max-w-0 opacity-0 -translate-x-3 group-hover:max-w-6 group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-2 transition-all duration-300 ease-out">
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

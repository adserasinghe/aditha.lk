'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

interface PreloaderProps {
  message?: string;
  onComplete?: () => void;
}

export default function Preloader({ message = "Aditha", onComplete }: PreloaderProps) {
  // Phase 1: 'text' - Loading text & progress display
  // Phase 2: 'logo' - Logo swiping up smoothly after the loading text
  // Phase 3: 'exit' - Logo swipes up towards top and curtain slides away
  const [phase, setPhase] = useState<'text' | 'logo' | 'exit'>('text');
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Progress counter for loading text
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 25;
      });
    }, 120);

    // After loading text completes (~850ms), transition to logo swiping up
    const logoTimeout = setTimeout(() => {
      setPhase('logo');
    }, 850);

    // After logo is shown, start the swipe up exit (~1850ms)
    const exitTimeout = setTimeout(() => {
      setPhase('exit');
    }, 1850);

    // Notify parent to unmount after animation completes (~2300ms)
    const completeTimeout = setTimeout(() => {
      onComplete?.();
    }, 2300);

    return () => {
      clearInterval(interval);
      clearTimeout(logoTimeout);
      clearTimeout(exitTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      key="preloader"
      initial={{ y: 0, opacity: 1 }}
      exit={{
        y: '-100%',
        opacity: 0.95,
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
      }}
      onClick={() => onComplete?.()}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white select-none overflow-hidden cursor-pointer"
      title="Click anywhere to skip"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Decorative ambient ring glow */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-500/10 blur-[90px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[220px]">
        <AnimatePresence mode="wait">
          {phase === 'text' && (
            <motion.div
              key="loading-text"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25, transition: { duration: 0.28, ease: 'easeInOut' } }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="flex flex-col items-center gap-4 text-center px-4"
            >
              {/* Status pill badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                Loading
              </div>

              {/* Main Name / Message */}
              <div className="flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-[0.25em] uppercase text-white drop-shadow-sm">
                  {message}
                </h1>
                <p className="text-xs sm:text-sm text-gray-400 tracking-wider mt-1">
                  Building Your Digital Excellence
                </p>
              </div>

              {/* Progress counter & bar */}
              <div className="flex flex-col items-center gap-2 mt-2 w-48 sm:w-56">
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 rounded-full"
                    style={{ width: `${percent}%` }}
                    transition={{ ease: 'easeOut', duration: 0.15 }}
                  />
                </div>
                <div className="flex justify-between w-full text-[10px] text-gray-500 font-mono tracking-wider">
                  <span>SYSTEM INIT</span>
                  <span>{percent}%</span>
                </div>
              </div>
            </motion.div>
          )}

          {(phase === 'logo' || phase === 'exit') && (
            <motion.div
              key="logo-swiping"
              initial={{ opacity: 0, y: 75, scale: 0.85 }}
              animate={
                phase === 'exit'
                  ? {
                      y: -140,
                      opacity: 0,
                      scale: 0.9,
                      transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
                    }
                  : {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 240,
                        damping: 18,
                        mass: 0.8,
                      },
                    }
              }
              className="flex flex-col items-center gap-4 text-center px-4"
            >
              {/* Brand Logo Container with guaranteed black square background */}
              <div className="relative group">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-500/30 to-cyan-400/30 blur-md opacity-75" />
                <div
                  className="relative overflow-hidden rounded-2xl bg-black border border-white/20 p-2.5 shadow-2xl flex items-center justify-center"
                  style={{ backgroundColor: '#000000' }}
                >
                  <Image
                    src="https://6rhooijwwmhiclbs.public.blob.vercel-storage.com/my%20logo%20bw%201%20sq.png"
                    alt="Aditha Logo"
                    width={72}
                    height={72}
                    priority
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-xl bg-black"
                    style={{ backgroundColor: '#000000' }}
                  />
                </div>
              </div>

              {/* Brand title under logo */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.35 }}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-base sm:text-lg font-bold tracking-[0.25em] uppercase text-white">
                  {message}
                </span>
                <span className="text-[11px] sm:text-xs text-blue-400 font-medium tracking-wider">
                  Full-Stack Engineer & Designer
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle bottom indicator */}
      <div className="absolute bottom-6 text-[11px] text-gray-500 tracking-widest uppercase font-mono">
        {phase === 'text' ? 'Initializing...' : 'Entering Portfolio...'}
      </div>
    </motion.div>
  );
}

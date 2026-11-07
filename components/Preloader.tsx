'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

interface PreloaderProps {
  message?: string;
  onComplete: () => void;
}

export default function Preloader({ message = 'Aditha', onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState<'text' | 'logo' | 'swipeUp'>('text');

  useEffect(() => {
    // 1. Text display phase
    const t1 = setTimeout(() => {
      setPhase('logo');
    }, 1200);

    // 2. Logo display and swiping up phase
    const t2 = setTimeout(() => {
      setPhase('swipeUp');
    }, 2200);

    // 3. Complete and unmount preloader
    const t3 = setTimeout(() => {
      onComplete();
    }, 2700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 'swipeUp' ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black text-white"
    >
      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        {/* Phase 1: Name Text */}
        {phase === 'text' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-widest uppercase bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              {message}
            </h1>
            <div className="w-12 h-1 rounded-full bg-blue-500 animate-pulse" />
          </motion.div>
        )}

        {/* Phase 2: Logo Display and Swipe Up */}
        {(phase === 'logo' || phase === 'swipeUp') && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{
              opacity: phase === 'swipeUp' ? 0 : 1,
              scale: phase === 'swipeUp' ? 1.1 : 1,
              y: phase === 'swipeUp' ? -180 : 0,
            }}
            transition={{
              duration: phase === 'swipeUp' ? 0.6 : 0.5,
              ease: phase === 'swipeUp' ? [0.22, 1, 0.36, 1] : 'easeOut',
            }}
            className="relative flex flex-col items-center gap-4"
          >
            <div className="relative w-24 h-24 rounded-3xl bg-black border border-white/20 p-2 shadow-[0_0_50px_rgba(59,130,246,0.5)] flex items-center justify-center">
              <Image
                src="/assets/aistudio/my_logo_bw_1_sq_303a5954.png"
                alt="Aditha Logo"
                width={70}
                height={70}
                className="object-contain"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-gray-400">
              Loading Excellence...
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

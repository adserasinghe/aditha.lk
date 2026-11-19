'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

interface PreloaderProps {
  message?: string;
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState<'logo' | 'swipeUp'>('logo');

  useEffect(() => {
    // 1. Logo display and swiping up phase
    const t1 = setTimeout(() => {
      setPhase('swipeUp');
    }, 1000);

    // 2. Complete and unmount preloader
    const t2 = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
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
        {/* Logo Display and Swipe Up */}
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
          className="relative flex flex-col items-center"
        >
          <Image
            src="https://b9f9acb180fb.blob.upstash.io/my%20logo%20bw%201%20sq.png"
            alt="Aditha Logo"
            width={80}
            height={80}
            className="object-contain"
            priority
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

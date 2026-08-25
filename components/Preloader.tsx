'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Preloader({ message = "Aditha" }: { message?: string }) {
  return (
    <motion.div
      key="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
    >
      {/* Subtle radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Brand Logo */}
        <Image
          src="https://6rhooijwwmhiclbs.public.blob.vercel-storage.com/my%20logo%20bw%201%20sq.png"
          alt="Logo"
          width={64}
          height={64}
          referrerPolicy="no-referrer"
        />

        {/* Typography */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-blue-400">
            {message}
          </span>
          <span className="text-xs text-gray-400">
            Building Your Digital Excellence
          </span>
        </motion.div>

        {/* Animated Loading Bar */}
        <div className="w-48 h-1 overflow-hidden bg-white/10 rounded-full mt-2">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-cyan-400 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}

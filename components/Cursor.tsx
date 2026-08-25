'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Pointer } from 'lucide-react';

type CursorMode = 'default' | 'hover' | 'arrow' | 'hand';

export default function Cursor() {
  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 600 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const handEl = target.closest('[data-cursor="hand"]') ||
          (target.closest('a')?.getAttribute('href')?.includes('adithacreation.vercel.app'));

        const arrowEl = target.closest('[data-cursor="arrow"]') ||
          (target.closest('button')?.textContent?.toLowerCase().includes('get in touch'));

        if (handEl) {
          setCursorMode('hand');
        } else if (arrowEl) {
          setCursorMode('arrow');
        } else {
          const isInteractive = Boolean(
            target.closest('button') ||
            target.closest('a') ||
            target.closest('input') ||
            target.closest('textarea') ||
            target.closest('[role="button"]') ||
            target.closest('.cursor-pointer') ||
            window.getComputedStyle(target).cursor === 'pointer'
          );
          setCursorMode(isInteractive ? 'hover' : 'default');
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  const isArrow = cursorMode === 'arrow';
  const isHand = cursorMode === 'hand';
  const isHover = cursorMode === 'hover';
  const isCustomIcon = isArrow || isHand;

  return (
    <>
      {/* Primary Cursor Dot (Hidden when in custom icon mode: arrow or hand) */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isCustomIcon ? 0 : isHover ? 2.6 : 1,
          opacity: isVisible && !isCustomIcon ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 450,
          damping: 25,
        }}
        whileTap={{ scale: 0.6 }}
      />

      {/* Arrow Cursor when hovering 'Get In Touch' */}
      <AnimatePresence>
        {isArrow && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:flex items-center justify-center rounded-full w-10 h-10 bg-blue-600 text-white shadow-[0_0_25px_rgba(59,130,246,0.6)] border border-white/40 backdrop-blur-sm"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              translateX: '-50%',
              translateY: '-50%',
            }}
            initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.4, rotate: 30 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 24,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={2.5} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clicking Hand Cursor when hovering 'Aditha Creation' link */}
      <AnimatePresence>
        {isHand && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:flex items-center justify-center rounded-full w-10 h-10 bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-[0_0_25px_rgba(37,99,235,0.7)] border border-white/40 backdrop-blur-sm"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              translateX: '-50%',
              translateY: '-50%',
            }}
            initial={{ opacity: 0, scale: 0.4, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.4, rotate: 15 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 24,
            }}
            whileTap={{ scale: 0.85, rotate: -10 }}
          >
            <Pointer className="w-5 h-5 text-white fill-white/20 -rotate-12" strokeWidth={2.2} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

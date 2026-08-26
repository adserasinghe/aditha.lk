'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface AnimatedBlobAvatarProps {
  className?: string;
  size?: number | string;
}

const AVATAR_GIFS = {
  neutre: 'https://6rhooijwwmhiclbs.public.blob.vercel-storage.com/bloub-cercle-neutre-creme.gif',
  confus: 'https://6rhooijwwmhiclbs.public.blob.vercel-storage.com/bloub-cercle-confus-creme.gif',
  colere: 'https://6rhooijwwmhiclbs.public.blob.vercel-storage.com/bloub-cercle-colere-creme.gif',
  excite: 'https://6rhooijwwmhiclbs.public.blob.vercel-storage.com/bloub-cercle-excite-creme.gif',
};

type MoodKey = keyof typeof AVATAR_GIFS;

export default function AnimatedBlobAvatar({ className = '', size }: AnimatedBlobAvatarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentMood, setCurrentMood] = useState<MoodKey>('neutre');

  // Preload all GIF assets immediately on mount for zero-flicker transitions
  useEffect(() => {
    Object.values(AVATAR_GIFS).forEach((url) => {
      const img = new window.Image();
      img.src = url;
    });
  }, []);

  // Tracking state for shake detection, turn score, and mood transitions
  const lastPosRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const shakeScoreRef = useRef<number>(0);
  const lastMoveAngleRef = useRef<number | null>(null);
  const lastMoodSwitchTimeRef = useRef<number>(0);
  const isScrollingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Raw motion values (-1 to +1 normalized from container center to mouse cursor)
  const mouseNormX = useMotionValue(0);
  const mouseNormY = useMotionValue(0);

  // Soft, relaxed spring physics for elegant organic motion
  const springConfig = { damping: 30, stiffness: 140, mass: 0.9 };
  const smoothX = useSpring(mouseNormX, springConfig);
  const smoothY = useSpring(mouseNormY, springConfig);

  // Smooth, continuous 3D tilt rotations
  const rotateX = useTransform(smoothY, [-1, 1], [14, -14]);
  const rotateY = useTransform(smoothX, [-1, 1], [-16, 16]);
  const headTranslateX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const headTranslateY = useTransform(smoothY, [-1, 1], [-8, 8]);

  useEffect(() => {
    const handleScroll = () => {
      isScrollingRef.current = true;
      shakeScoreRef.current = 0;
      lastPosRef.current = null;
      lastMoveAngleRef.current = null;

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        lastPosRef.current = null;
      }, 150);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const maxDistance = 700;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const factor = Math.min(distance / maxDistance, 1);
      const angle = Math.atan2(dy, dx);

      const normX = Math.cos(angle) * factor;
      const normY = Math.sin(angle) * factor;

      mouseNormX.set(normX);
      mouseNormY.set(normY);

      // If page is actively scrolling, keep mood steady and avoid false shake or hover triggers
      if (isScrollingRef.current) {
        shakeScoreRef.current = 0;
        return;
      }

      // Track movement dynamics & shake vigor
      const now = Date.now();
      let moveDx = 0;
      let moveDy = 0;

      if (lastPosRef.current) {
        const dt = Math.max(now - lastPosRef.current.time, 8);
        moveDx = e.clientX - lastPosRef.current.x;
        moveDy = e.clientY - lastPosRef.current.y;
        const moveDist = Math.sqrt(moveDx * moveDx + moveDy * moveDy);
        const velocity = moveDist / dt; // pixels per ms

        if (moveDist > 5) {
          const currentMoveAngle = Math.atan2(moveDy, moveDx);

          if (lastMoveAngleRef.current !== null) {
            let angleDiff = Math.abs(currentMoveAngle - lastMoveAngleRef.current);
            if (angleDiff > Math.PI) angleDiff = 2 * Math.PI - angleDiff;

            // Detect rapid mouse wiggling/shaking (> 60 deg reversal with speed)
            if (angleDiff > 1.0 && velocity > 0.45) {
              shakeScoreRef.current = Math.min(shakeScoreRef.current + 1.6, 10);
            } else if (velocity > 1.2) {
              shakeScoreRef.current = Math.min(shakeScoreRef.current + 0.8, 10);
            }
          }

          lastMoveAngleRef.current = currentMoveAngle;
          lastPosRef.current = { x: e.clientX, y: e.clientY, time: now };
        }
      } else {
        lastPosRef.current = { x: e.clientX, y: e.clientY, time: now };
      }

      // Check proximity and hovered element for contextual mood triggers
      const target = (e.target as HTMLElement | null) || (typeof document !== 'undefined' ? document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null : null);
      let targetMood: MoodKey | null = null;

      const isNearAvatar = distance < 160 || Boolean(
        target && (target.closest('[data-blob-avatar]') || target.closest('[data-cursor="none"]'))
      );

      if (isNearAvatar) {
        targetMood = 'confus';
      } else if (target) {
        // 1. Brand Page link hover -> excite
        const isBrandPage = Boolean(
          target.closest('[data-avatar-mood="excite"]') ||
          target.closest('a[href*="adithacreation.vercel.app"]') ||
          target.closest('[data-brand-page-link="true"]')
        );

        if (isBrandPage) {
          targetMood = 'excite';
        } else {
          // 2. Any other link/button inside the Brand section -> confus
          const isBrandSectionLink = Boolean(
            target.closest('[data-avatar-mood="confus"]') ||
            (target.closest('[data-brand-section]') && (
              target.closest('a') ||
              target.closest('button') ||
              target.closest('[data-brand-interactive="true"]')
            ))
          );

          if (isBrandSectionLink) {
            targetMood = 'confus';
          }
        }
      }

      // Exact Mood Hierarchy:
      // 1. High cursor shaking / vigorous wiggling -> colere
      // 2. Near Avatar proximity / Avatar hover -> confus
      // 3. Hovering Brand Page link -> excite
      // 4. Hovering other link in Brand section -> confus
      // 5. Default / normal rest state -> neutre
      let nextMood: MoodKey = 'neutre';

      if (shakeScoreRef.current >= 3.0) {
        nextMood = 'colere';
      } else if (targetMood) {
        nextMood = targetMood;
      } else {
        nextMood = 'neutre';
      }

      // Silky smooth mood switch with minimum display duration (400ms)
      if (nextMood !== currentMood && now - lastMoodSwitchTimeRef.current > 400) {
        lastMoodSwitchTimeRef.current = now;
        setCurrentMood(nextMood);
      }
    };

    // Smooth gentle decay when shaking stops to return to calm/hover mood
    const decayInterval = setInterval(() => {
      if (shakeScoreRef.current > 0) {
        shakeScoreRef.current = Math.max(shakeScoreRef.current - 0.7, 0);
      }
    }, 250);

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY } as MouseEvent);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      clearInterval(decayInterval);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [mouseNormX, mouseNormY, currentMood]);

  return (
    <div
      ref={containerRef}
      data-cursor="none"
      data-blob-avatar="true"
      onMouseEnter={() => {
        setIsHovered(true);
        setCurrentMood('confus');
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        shakeScoreRef.current = 0;
      }}
      className={`relative flex items-center justify-center select-none cursor-pointer group ${!className ? 'w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48' : ''} ${className}`}
      style={{
        perspective: 1000,
        ...(size !== undefined ? { width: size, height: size } : {}),
      }}
    >
      {/* Dynamic Background Glow Aura responding to cursor with smooth blend */}
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl pointer-events-none -z-10 bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-purple-600/20 transition-all duration-700 ease-in-out"
        style={{
          x: headTranslateX,
          y: headTranslateY,
          scale: isHovered ? 1.35 : 1.1,
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />

      {/* Outer 3D Avatar Container */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        style={{
          rotateX,
          rotateY,
          x: headTranslateX,
          y: headTranslateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
      >
        {/* GIF Avatar Graphic Layers with calm, slow, silky-smooth GPU crossfade */}
        <div
          className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center border border-cyan-500/20 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          style={{ backgroundColor: '#f1efe9' }}
        >
          {(Object.keys(AVATAR_GIFS) as MoodKey[]).map((mood) => {
            const isActive = currentMood === mood;

            return (
              <motion.div
                key={mood}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 0.97,
                }}
                transition={{
                  opacity: { duration: 0.75, ease: [0.4, 0.0, 0.2, 1] },
                  scale: { duration: 0.75, ease: [0.4, 0.0, 0.2, 1] },
                }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  zIndex: isActive ? 10 : 1,
                }}
              >
                <Image
                  src={AVATAR_GIFS[mood]}
                  alt={`Avatar ${mood}`}
                  fill
                  unoptimized
                  priority
                  referrerPolicy="no-referrer"
                  className="object-contain w-full h-full select-none pointer-events-none"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Ambient subtle interactive pulse ring */}
        <div className="absolute inset-0 rounded-full border border-cyan-400/25 pointer-events-none scale-105 opacity-40 group-hover:opacity-85 group-hover:scale-110 transition-all duration-700 ease-out" />
      </motion.div>
    </div>
  );
}



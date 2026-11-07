'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

interface AnimatedBlobAvatarProps {
  className?: string;
}

export default function AnimatedBlobAvatar({ className = '' }: AnimatedBlobAvatarProps) {
  return (
    <div
      data-blob-avatar="true"
      className={`relative flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-purple-500 p-1 shadow-[0_0_30px_rgba(59,130,246,0.6)] ${className}`}
    >
      <div className="relative w-full h-full rounded-full overflow-hidden bg-black border-2 border-white/20">
        <Image
          src="https://6rhooijwwmhiclbs.public.blob.vercel-storage.com/copilot_image_1751472410892~2.jpeg"
          alt="Aditha Animated Avatar"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}

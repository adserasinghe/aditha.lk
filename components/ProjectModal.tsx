'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-[#0b0f19] border border-white/15 rounded-3xl shadow-2xl overflow-hidden text-gray-200 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition-transform hover:scale-110"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Hero Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden bg-gray-900">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-600/90 text-white mb-2">
                  {project.category}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h2>
              </div>

              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm shadow-lg transition-all hover:scale-105"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={16} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/10 transition-all hover:scale-105"
                  >
                    <Github size={16} />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 md:p-10 space-y-8">
            {/* Overview */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3 flex items-center gap-2">
                <Layers size={16} />
                <span>Project Architecture & Overview</span>
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                {project.longDescription}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                Technologies & Tools Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-blue-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Deliverables Checkpoints */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <h4 className="text-sm font-semibold text-white">Project Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-400">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="text-blue-500 flex-shrink-0" size={16} />
                  <span>Responsive Mobile-First UI</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="text-blue-500 flex-shrink-0" size={16} />
                  <span>WCAG 2.1 AA Accessibility</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="text-blue-500 flex-shrink-0" size={16} />
                  <span>Optimized Core Web Vitals</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="text-blue-500 flex-shrink-0" size={16} />
                  <span>SEO-Friendly Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

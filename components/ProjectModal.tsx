'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X, ExternalLink, Github, Tag } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className="relative w-full max-w-3xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all cursor-pointer"
            aria-label="Close project modal"
          >
            <X size={20} />
          </button>

          {/* Media Header */}
          <div className="relative w-full aspect-[16/9] bg-slate-200 dark:bg-gray-900 flex-shrink-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 text-white shadow-md inline-block mb-2">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <p className="text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              {project.longDescription || project.description}
            </p>

            {/* Tags */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-400 flex items-center gap-1.5">
                <Tag size={14} />
                <span>Technologies & Skills</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-all active:scale-95"
                >
                  <span>Visit Project</span>
                  <ExternalLink size={16} />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-900 dark:text-white font-semibold text-sm transition-all active:scale-95 border border-slate-300 dark:border-white/10"
                >
                  <Github size={16} />
                  <span>View Source</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Filter, Layers, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { Project, ProjectCategory } from '../../types/portfolio';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function PortfolioSection({ onSelectProject }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = ['All', 'Web Dev', 'Mobile', 'UI/UX', 'Branding'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-20 py-12 max-w-7xl mx-auto px-6 md:px-12">
      {/* Header & Category Filter */}
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-500 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            <Layers size={14} />
            <span>Featured Case Studies</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
            Selected <span className="text-blue-600 dark:text-blue-500">Works</span>
          </h1>

          <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed transition-colors duration-300">
            Explore my latest projects, ranging from deep technical development to expressive visual identities.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-[#0b0f19] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-xl transition-colors duration-300">
          <div className="hidden sm:flex items-center text-xs text-slate-500 dark:text-gray-500 px-3 gap-1">
            <Filter size={12} />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none cursor-pointer ${
                  isActive
                    ? 'text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="portfolio-filter-pill"
                    className="absolute inset-0 bg-blue-600 rounded-xl -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.45 }}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-3xl bg-white dark:bg-[#0b0f19] border border-slate-200/90 dark:border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-xl overflow-hidden flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Card Image Thumbnail */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-gray-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent dark:from-[#0b0f19] dark:via-[#0b0f19]/30 dark:to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Badge Overlay */}
                <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/90 dark:bg-black/85 backdrop-blur-md text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-white/10 shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Top Right Hover Arrow */}
                <div className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-blue-600/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Card Text Content */}
              <div
                className="p-7 sm:p-8 space-y-4 flex flex-col justify-between flex-grow bg-black dark:bg-black text-white"
                style={{ backgroundColor: '#000000' }}
              >
                <div className="space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>
                  <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 transition-colors">
                    {project.description}
                  </p>
                </div>

                {/* Footer Meta */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-white/5 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[11px] font-mono text-slate-600 dark:text-gray-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-lg border border-slate-200/80 dark:border-transparent">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state if no projects */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-slate-500 dark:text-gray-400 bg-white dark:bg-[#0b0f19] rounded-3xl border border-slate-200 dark:border-white/10">
          <p>No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}

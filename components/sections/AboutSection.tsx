'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2, Download, Briefcase, Target, TrendingUp, History, Sparkles, Award } from 'lucide-react';
import { ABOUT_NARRATIVE, QUALITY_BADGES, EXPERTISE_CARDS, WORKING_EXPERIENCE, CORE_PHILOSOPHY, TECHNICAL_SKILLS, HERO_DATA } from '../../data/portfolioData';
import { NavTab } from '../../types/portfolio';
import aboutImage from '../../src/assets/images/regenerated_image_1782646625117.png';

interface AboutSectionProps {
  onOpenResume: () => void;
  onTabChange: (tab: NavTab) => void;
}

export default function AboutSection({ onOpenResume, onTabChange }: AboutSectionProps) {
  const renderPhilosophyIcon = (iconName: string) => {
    switch (iconName) {
      case 'target': return <Target className="text-blue-500" size={32} />;
      case 'trending-up': return <TrendingUp className="text-cyan-400" size={32} />;
      case 'history': return <History className="text-blue-400" size={32} />;
      default: return <Sparkles className="text-blue-500" size={32} />;
    }
  };

  return (
    <div className="space-y-32 py-12 max-w-7xl mx-auto px-6 md:px-12">
      {/* 1. JOURNEY NARRATIVE & BADGES */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-500 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            <span>About Aditha Serasinghe</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            About My <span className="text-blue-500">Journey</span>
          </h1>

          <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
            {ABOUT_NARRATIVE.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Quality Badges */}
          <div className="grid grid-cols-2 gap-3 pt-4">
            {QUALITY_BADGES.map((badge) => (
              <div key={badge} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10">
                <CheckCircle2 className="text-blue-500 flex-shrink-0" size={18} />
                <span className="text-xs sm:text-sm font-semibold text-gray-200">{badge}</span>
              </div>
            ))}
          </div>

          {/* Resume CTA */}
          <div className="pt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://6rhooijwwmhiclbs.public.blob.vercel-storage.com/aditha_serasinghe.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full shadow-[0_4px_25px_rgba(59,130,246,0.35)] hover:shadow-[0_6px_30px_rgba(59,130,246,0.5)] transition-all active:scale-95 text-sm"
            >
              <Download size={18} className="transition-transform group-hover:-translate-y-0.5" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => onTabChange('contact')}
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/15 transition-all text-sm"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>

        {/* Right Portrait Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-cyan-500/10 to-transparent rounded-3xl blur-2xl -z-10" />
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#0b0f19]">
            <Image
              src={aboutImage}
              alt="Aditha Journey"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
            
          </div>
        </motion.div>
      </section>

      {/* 2. CORE EXPERTISE PILLARS */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Core <span className="text-blue-500">Expertise</span>
          </h2>
          <p className="text-gray-400 text-sm">Four foundational pillars driving every web experience I engineer.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-[#0b0f19] border border-white/10 space-y-3 shadow-xl hover:border-blue-500/40 transition-colors"
            >
              <h3 className="text-lg font-bold text-white">{card.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. WORKING EXPERIENCE TIMELINE */}
      <section className="space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Working <span className="text-blue-500">Experience</span>
          </h2>
          <p className="text-gray-400 text-sm">My professional evolution across agencies, startups, and creative ventures.</p>
        </div>

        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-10 border-l-2 border-blue-500/30 space-y-12">
          {WORKING_EXPERIENCE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-black border-2 border-blue-500 group-hover:bg-blue-600 group-hover:scale-110 transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <Briefcase size={14} className="text-blue-400 group-hover:text-white transition-colors" />
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-[#0b0f19] border border-white/10 hover:border-blue-500/50 transition-all shadow-xl space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/15 text-blue-400 text-xs font-mono font-semibold">
                    📅 {item.period}
                  </span>
                  {item.isCurrent && (
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-medium">
                      Current Role
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{item.role}</h3>
                  <p className="text-sm font-semibold text-blue-400 mt-0.5">{item.company}</p>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed pt-2 border-t border-white/5">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. CORE PHILOSOPHY (3 COLUMNS) */}
      <section className="space-y-12 rounded-3xl bg-[#070a1c] p-8 sm:p-14 border border-white/10 shadow-2xl">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Core <span className="text-blue-500">Philosophy</span>
          </h2>
          <p className="text-gray-400 text-sm">The principles that drive my creative process and guide my professional standards in every project I undertake.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {CORE_PHILOSOPHY.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4"
            >
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                {renderPhilosophyIcon(pillar.iconName)}
              </div>
              <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. TECHNICAL SKILLSET GRID */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Technical <span className="text-blue-500">Skillset</span>
          </h2>
          <p className="text-gray-400 text-sm">A curated toolkit of modern frameworks, design tools, and core web competencies.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-4">
          {TECHNICAL_SKILLS.map((skill, idx) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="group p-4 rounded-2xl bg-[#0b0f19] hover:bg-blue-600/15 border border-white/10 hover:border-blue-500/50 transition-all duration-300 flex items-center justify-center text-center shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-blue-300 transition-colors">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

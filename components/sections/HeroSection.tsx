'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, Layout, Code, Palette, Share2, Star, Quote, Sparkles, ArrowDown, Briefcase, ArrowUpRight, Mail, X } from 'lucide-react';
import { HERO_DATA, EXPERTISE_CARDS, TESTIMONIALS, CONTACT_INFO, BRANDS_DATA, BRAND_LOGOS_MARQUEE, ZENTIX_DATA } from '../../data/portfolioData';
import { NavTab } from '../../types/portfolio';
import adithaCreationImage from '../../src/assets/images/regenerated_image_1786884966330.jpg';
interface HeroSectionProps {
  onTabChange: (tab: NavTab) => void;
}

export default function HeroSection({ onTabChange }: HeroSectionProps) {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const renderCardIcon = (name: string) => {
    switch (name) {
      case 'Layout': return <Layout className="text-blue-500 mb-4" size={28} />;
      case 'Code': return <Code className="text-blue-500 mb-4" size={28} />;
      case 'Palette': return <Palette className="text-blue-500 mb-4" size={28} />;
      case 'Share2': return <Share2 className="text-blue-500 mb-4" size={28} />;
      default: return <Sparkles className="text-blue-500 mb-4" size={28} />;
    }
  };

  return (
    <div className="space-y-32 py-8">
      {/* 1. HERO SPLIT SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-7 order-1 flex flex-col items-start gap-8 z-10"
        >
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] order-1">
            <span className="hover:font-bold transition-all duration-300 inline-block mr-2">Hi,</span>
            <span className="hover:font-bold transition-all duration-300 inline-block mr-2">I&apos;m</span>
            <span className="text-blue-500 hover:font-bold transition-all duration-300 inline-block mr-0">ADITHA</span>
            <span className="hover:font-bold transition-all duration-300 inline-block mr-2">.</span>
            <span className="hover:font-bold transition-all duration-300 inline-block mr-2">Building</span>
            <span className="hover:font-bold transition-all duration-300 inline-block mr-2">Your</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent hover:font-bold transition-all duration-300 inline-block mr-2">Digital</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent hover:font-bold transition-all duration-300 inline-block">Excellence.</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed order-2">
            {HERO_DATA.subheading}
          </p>

          {/* Hero Portrait Image (Mobile & Tablet view only, placed before buttons on mobile/tablet) */}
          <div className="lg:hidden relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl bg-[#0b0f19] mt-2 order-3">
            <Image
              src="https://6rhooijwwmhiclbs.public.blob.vercel-storage.com/copilot_image_1751472410892~2.jpeg"
              alt="Aditha Dinuja Serasinghe"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
              priority
            />
          </div>

          {/* CTA Buttons (Placed after image on mobile/tablet via order-4, before image on desktop via lg:order-3) */}
          <div className="w-full max-w-md lg:max-w-none flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 order-4 lg:order-3">
            <button
              onClick={() => onTabChange('portfolio')}
              className="group flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 sm:px-7 sm:py-4 lg:px-8 lg:py-4 text-sm sm:text-base rounded-full shadow-[0_4px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_8px_35px_rgba(59,130,246,0.5)] transition-all active:scale-95 w-full sm:w-auto"
            >
              <span>{HERO_DATA.primaryCta}</span>
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
            </button>

            <button
              onClick={() => onTabChange('about')}
              className="flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 lg:px-8 lg:py-4 text-sm sm:text-base rounded-full border border-white/20 hover:border-blue-400/80 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all active:scale-95 w-full sm:w-auto"
            >
              <span>{HERO_DATA.secondaryCta}</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Portrait Image Frame (Desktop view) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="hidden lg:flex lg:col-span-5 order-2 justify-center lg:justify-end relative"
        >
          {/* Outer glow aura */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-purple-600/20 blur-2xl -z-10" />

          {/* Portrait Container */}
          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl bg-[#0b0f19]">
            <Image
              src="https://6rhooijwwmhiclbs.public.blob.vercel-storage.com/copilot_image_1751472410892~2.jpeg"
              alt="Aditha Dinuja Serasinghe"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
        </motion.div>

        {/* Scroll Down Button (Desktop view) */}
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full hidden lg:flex items-center justify-center bg-black text-white border-2 border-white z-20"
        >
          {/* Rotating Text */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path id="curve" fill="transparent" stroke="black" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              <text>
                <textPath xlinkHref="#curve" className="text-[12px] font-medium uppercase tracking-widest fill-white" startOffset="0%">
                  HOW WE ROLL - HOW WE ROLL - 
                </textPath>
              </text>
            </svg>
          </motion.div>
          
          {/* Fixed Arrow */}
          <ArrowDown size={28} className="text-white relative z-10" />
        </button>
      </section>

      {/* 2. CORE EXPERTISE SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core <span className="text-blue-500">Expertise</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Merging deep technical proficiency with polished aesthetic storytelling across four primary disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25, rotate: idx % 2 === 0 ? 5 : -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-8 rounded-3xl bg-[#0e1432]/60 hover:bg-[#12193f] border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div className="p-3 w-fit rounded-none transition-colors">
                  {renderCardIcon(card.iconName)}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center text-xs font-semibold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Explore Works</span>
                <ArrowRight className="ml-1" size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. MY BRAND SECTION (ZENTIX) */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-6 overflow-hidden">
        {/* Subtle Ambient Radial Glows in Background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.25em] text-[#c084fc] bg-[#1a1236]/80 border border-[#a855f7]/30 shadow-[0_0_20px_rgba(168,85,247,0.25)] uppercase"
          >
            {ZENTIX_DATA.badge}
          </motion.div>

          {/* Centered Brand Icon Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#090d1c] border border-cyan-500/40 p-1.5 flex items-center justify-center shadow-[0_0_35px_rgba(56,189,248,0.4)] group hover:border-cyan-400/80 transition-all duration-300 overflow-hidden">
              <Image
                src={adithaCreationImage}
                alt="Aditha Creation Logo"
                fill
                className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/15 pointer-events-none" />
            </div>
          </motion.div>

          {/* Brand Name Title with Accent Underline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col items-center space-y-3"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-center">
              <span className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]">
                {ZENTIX_DATA.titlePrefix}
              </span>
              <span className="text-[#3b82f6] drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                {ZENTIX_DATA.titleSuffix}
              </span>
            </h2>

            {/* Glowing gradient accent bar */}
            <div className="w-24 sm:w-32 h-1 rounded-full bg-gradient-to-r from-[#38bdf8] via-[#3b82f6] to-[#60a5fa] shadow-[0_0_15px_rgba(56,189,248,0.8)]" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-center text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-4 font-normal"
          >
            {ZENTIX_DATA.description}
          </motion.p>

          {/* Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2"
          >
            {/* Aditha Creation Page Button */}
            <a
              href="https://adithacreation.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600/90 to-cyan-600/90 hover:from-blue-500 hover:to-cyan-500 text-white border border-cyan-400/40 shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] text-sm sm:text-base font-semibold transition-all duration-300 active:scale-95 group cursor-pointer"
            >
              <ArrowUpRight size={18} className="transition-transform group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span>Aditha Creation Page</span>
            </a>

            {/* Google Play Store (Coming Soon Modal Trigger) */}
            <button
              type="button"
              onClick={() => setShowComingSoon(true)}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#092218]/90 hover:bg-[#0c2e20] text-[#00E676] border border-[#00E676]/30 shadow-[0_0_20px_rgba(0,230,118,0.12)] hover:shadow-[0_0_25px_rgba(0,230,118,0.25)] text-sm sm:text-base font-semibold transition-all duration-300 active:scale-95 group cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current transition-transform group-hover:scale-110" aria-hidden="true">
                <path d="M4.88626 2L13.6994 10.8115L15.9736 8.53729C12.866 6.65184 8.70388 4.12253 6.83204 2.98532L5.57797 2.22559C5.35633 2.09056 5.11897 2.01784 4.88626 2ZM3.54099 3.05499C3.52315 3.15181 3.50781 3.24911 3.50781 3.35357V20.7675C3.50781 20.8405 3.5225 20.9085 3.53269 20.9782L12.4985 12.0125L3.54099 3.05499ZM17.4682 9.44464L14.9004 12.0125L17.4234 14.5355C18.7602 13.7252 19.686 13.1626 19.7888 13.1006C20.2432 12.8229 20.4998 12.4039 20.4921 11.9461C20.4854 11.4968 20.2287 11.0951 19.7921 10.848C19.6945 10.7919 18.7812 10.2404 17.4682 9.44464ZM13.6994 13.2134L4.91281 22C5.08352 21.9703 5.25401 21.9194 5.41707 21.8208C5.64301 21.6833 11.746 17.9805 15.9288 15.4428L13.6994 13.2134Z" />
              </svg>
              <span>Google Play Store</span>
            </button>

            {/* Aditha Creation Official Facebook */}
            <a
              href="https://facebook.com/adithacreation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#0c1a36]/90 hover:bg-[#10244c] text-[#38bdf8] border border-[#38bdf8]/30 shadow-[0_0_20px_rgba(56,189,248,0.12)] hover:shadow-[0_0_25px_rgba(56,189,248,0.25)] text-sm sm:text-base font-semibold transition-all duration-300 active:scale-95 group"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current transition-transform group-hover:scale-110" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Aditha Creation</span>
            </a>

            {/* Email Contact */}
            <a
              href="mailto:adithacreation2020@gmail.com"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#200f38]/90 hover:bg-[#2d154e] text-[#c084fc] border border-[#a855f7]/30 shadow-[0_0_20px_rgba(168,85,247,0.12)] hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] text-sm sm:text-base font-semibold transition-all duration-300 active:scale-95 group"
            >
              <Mail size={18} className="transition-transform group-hover:scale-110" />
              <span>adithacreation2020@gmail.com</span>
            </a>
          </motion.div>

          {/* 4 Metric Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full pt-6">
            {ZENTIX_DATA.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="rounded-2xl sm:rounded-3xl bg-[#090d1c]/90 border border-white/10 hover:border-cyan-500/40 p-8 sm:p-10 text-center flex flex-col items-center justify-center space-y-2.5 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_35px_rgba(0,0,0,0.6)] group"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#38bdf8] tracking-tight drop-shadow-[0_0_15px_rgba(56,189,248,0.35)] group-hover:scale-105 transition-transform duration-300">
                  {metric.value}
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT MY CLIENTS SAY (Testimonials) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What My <span className="text-blue-500">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Feedback from founders, directors, and collaborators who have experienced my dedication to digital excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative p-8 rounded-3xl bg-[#0b0f19] border border-white/10 flex flex-col justify-between gap-6 shadow-2xl"
            >
              <Quote className="absolute top-6 right-6 text-white/5 pointer-events-none" size={72} />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-300 italic text-sm sm:text-base leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10 relative z-10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-800 border border-white/20 flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{t.author}</h4>
                  <p className="text-xs text-blue-400 font-medium">
                    {t.role}, <span className="text-gray-400">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-10 sm:p-16 text-center text-white shadow-[0_10px_50px_rgba(59,130,246,0.3)] overflow-hidden flex flex-col items-center justify-center gap-8"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25)_0%,transparent_60%)] pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-2xl relative z-10">
            Let&apos;s build something amazing together.
          </h2>

          <button
            onClick={() => onTabChange('contact')}
            className="relative z-10 bg-white hover:bg-gray-100 text-blue-700 font-bold px-10 py-4 rounded-full shadow-xl transition-transform hover:scale-105 active:scale-95 text-base cursor-pointer"
          >
            Get In Touch
          </button>
        </motion.div>
      </section>

      {/* 5. COMING SOON POPUP MODAL */}
      <AnimatePresence>
        {showComingSoon && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowComingSoon(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-[#090d1c] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 text-center shadow-[0_0_50px_rgba(56,189,248,0.25)] overflow-hidden z-10"
            >
              {/* Subtle ambient gradient inside modal */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#00E676]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowComingSoon(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center space-y-4 pt-2">
                {/* Play Store Icon with Glowing Ring */}
                <div className="relative w-16 h-16 rounded-2xl bg-[#092218] border border-[#00E676]/40 flex items-center justify-center text-[#00E676] shadow-[0_0_25px_rgba(0,230,118,0.3)]">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" aria-hidden="true">
                    <path d="M4.88626 2L13.6994 10.8115L15.9736 8.53729C12.866 6.65184 8.70388 4.12253 6.83204 2.98532L5.57797 2.22559C5.35633 2.09056 5.11897 2.01784 4.88626 2ZM3.54099 3.05499C3.52315 3.15181 3.50781 3.24911 3.50781 3.35357V20.7675C3.50781 20.8405 3.5225 20.9085 3.53269 20.9782L12.4985 12.0125L3.54099 3.05499ZM17.4682 9.44464L14.9004 12.0125L17.4234 14.5355C18.7602 13.7252 19.686 13.1626 19.7888 13.1006C20.2432 12.8229 20.4998 12.4039 20.4921 11.9461C20.4854 11.4968 20.2287 11.0951 19.7921 10.848C19.6945 10.7919 18.7812 10.2404 17.4682 9.44464ZM13.6994 13.2134L4.91281 22C5.08352 21.9703 5.25401 21.9194 5.41707 21.8208C5.64301 21.6833 11.746 17.9805 15.9288 15.4428L13.6994 13.2134Z" />
                  </svg>
                </div>

                {/* Status Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#00E676] bg-[#00E676]/10 border border-[#00E676]/30">
                  <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
                  <span>Coming Soon</span>
                </div>

                {/* Modal Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Google Play Store Releases
                </h3>

                {/* Modal Description */}
                <p className="text-gray-300 text-sm leading-relaxed px-2">
                  Our upcoming Android apps, tools, and digital solutions under the <strong className="text-white">Aditha Creation</strong> brand ecosystem are currently in preparation and will be published on the Google Play Store soon.
                </p>

                {/* Dismiss Button */}
                <div className="w-full pt-3">
                  <button
                    type="button"
                    onClick={() => setShowComingSoon(false)}
                    className="w-full py-3 rounded-2xl bg-[#00E676] hover:bg-[#00c864] text-black font-bold text-sm transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(0,230,118,0.3)] cursor-pointer"
                  >
                    Got It
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

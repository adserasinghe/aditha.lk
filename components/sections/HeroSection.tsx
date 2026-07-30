'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, Layout, Code, Palette, Share2, Star, Quote, Sparkles, ArrowDown } from 'lucide-react';
import { HERO_DATA, EXPERTISE_CARDS, TESTIMONIALS, CONTACT_INFO } from '../../data/portfolioData';
import { NavTab } from '../../types/portfolio';
interface HeroSectionProps {
  onTabChange: (tab: NavTab) => void;
}

export default function HeroSection({ onTabChange }: HeroSectionProps) {
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
          className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-start gap-8 z-10"
        >
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
            <span className="hover:font-bold transition-all duration-300 inline-block mr-2">Hi,</span>
            <span className="hover:font-bold transition-all duration-300 inline-block mr-2">I'm</span>
            <span className="text-blue-500 hover:font-bold transition-all duration-300 inline-block mr-0">ADITHA</span>
            <span className="hover:font-bold transition-all duration-300 inline-block mr-2">.</span>
            <span className="hover:font-bold transition-all duration-300 inline-block mr-2">Building</span>
            <span className="hover:font-bold transition-all duration-300 inline-block mr-2">Your</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent hover:font-bold transition-all duration-300 inline-block mr-2">Digital</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent hover:font-bold transition-all duration-300 inline-block">Excellence.</span>
          </h1>

          {/* Mobile Image (Visible only on mobile) */}
          <div className="lg:hidden w-full flex justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-none overflow-hidden shadow-2xl bg-[#0b0f19]">
              <Image
                src="https://6rhooijwwmhiclbs.public.blob.vercel-storage.com/copilot_image_1751472410892~2.jpeg"
                alt="Aditha Dinuja Serasinghe"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105 rounded-none"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
          </div>

          {/* Subheading */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
            {HERO_DATA.subheading}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onTabChange('portfolio')}
              className="group flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full shadow-[0_4px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_8px_35px_rgba(59,130,246,0.5)] transition-all active:scale-95"
            >
              <span>{HERO_DATA.primaryCta}</span>
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
            </button>

            <button
              onClick={() => onTabChange('about')}
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:border-blue-400/80 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all active:scale-95"
            >
              <span>{HERO_DATA.secondaryCta}</span>
            </button>

            <a
              href={CONTACT_INFO.socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-4 rounded-full border border-blue-500/30 hover:border-blue-400/80 bg-blue-600/10 hover:bg-blue-600/20 text-white font-semibold transition-all active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"></path>
                <path d="M6.75085 11.985V9.00492C6.75085 8.72282 6.9824 8.49414 7.26802 8.49414H9.24582C9.68571 8.49414 10.1378 8.56982 10.4656 8.8595C10.8163 9.16935 11.1564 9.64935 11.1395 10.2909C11.1199 11.0391 10.5736 11.9234 9.77316 11.985C8.97271 12.0466 8.22065 11.985 6.75085 11.985ZM6.75085 11.985V14.9675C6.75085 15.2496 6.98243 15.478 7.26804 15.4808C8.40871 15.4917 9.07239 15.5322 9.77316 15.4783C10.5736 15.4166 11.1199 14.5323 11.1395 13.7841C11.1564 13.1426 10.8163 12.6626 10.4656 12.3527C10.1378 12.063 9.68571 11.9873 9.24582 11.9873L6.75085 11.985ZM16.7954 14.9655C16.3572 15.3901 14.2227 16.2293 13.4537 14.0205C13.3738 13.8 13.3102 13.3244 13.3473 12.957M13.3473 12.957C13.4106 12.3314 13.6867 11.4539 14.7115 11.0958C16.1791 10.583 17.102 12.0065 17.341 12.957H13.3473ZM14.5888 9.00095H15.949" strokeLinecap="round"></path>
              </svg>
              <span>Behance</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Portrait Image Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="hidden lg:flex lg:col-span-5 order-1 lg:order-2 justify-center lg:justify-end relative"
        >
          {/* Outer glow aura */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-purple-600/20 blur-2xl -z-10" />

          {/* Portrait Container */}
          <div className="relative w-full max-w-md aspect-square rounded-none overflow-hidden shadow-2xl bg-[#0b0f19]">
            <Image
              src="https://6rhooijwwmhiclbs.public.blob.vercel-storage.com/Gemini_Generated_Image_e3glqte3glqte3gl-clean.png"
              alt="Aditha Dinuja Serasinghe"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105 rounded-none"
              referrerPolicy="no-referrer"
              priority
            />
            
          </div>
          
        </motion.div>

        {/* Scroll Down Button */}
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


      {/* 3. WHAT MY CLIENTS SAY (Testimonials) */}
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
            className="relative z-10 bg-white hover:bg-gray-100 text-blue-700 font-bold px-10 py-4 rounded-full shadow-xl transition-transform hover:scale-105 active:scale-95 text-base"
          >
            Get In Touch
          </button>
        </motion.div>
      </section>
    </div>
  );
}

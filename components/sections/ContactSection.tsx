'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../../data/portfolioData';

export default function ContactSection() {
  return (
    <div className="space-y-20 py-12 max-w-7xl mx-auto px-6 md:px-12">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-500 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
          <MessageSquare size={14} />
          <span>Inquiries & Collaboration</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
          Let&apos;s <span className="text-blue-600 dark:text-blue-500">Connect</span>
        </h1>

        <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed transition-colors duration-300">
          Have a project in mind or just want to say hi? Feel free to send me a message and I&apos;ll respond as soon as I can.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6 items-start">
        {/* Left Column: Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0b0f19] border border-slate-200/90 dark:border-white/10 space-y-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-2xl flex flex-col justify-between transition-colors duration-300"
        >
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight pb-4 border-b border-slate-200 dark:border-white/10">
              Direct Contact Information
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] hover:bg-blue-50 dark:hover:bg-blue-600/10 border border-slate-200/80 dark:border-white/5 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-500 block">Email</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                    {CONTACT_INFO.email}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] hover:bg-blue-50 dark:hover:bg-blue-600/10 border border-slate-200/80 dark:border-white/5 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/15 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-500 block">Phone</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-gray-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {CONTACT_INFO.phone}
                  </span>
                </div>
              </a>

              {/* Location */}
              <a
                href="https://maps.app.goo.gl/wNXA8ftQSDy8oHw16"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 hover:border-blue-500/40 hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-500 block">Location</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-gray-200">
                    {CONTACT_INFO.location}
                  </span>
                </div>
              </a>

              {/* Hire Me Link */}
              <a
                href="https://linktr.ee/adithacreation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/20 hover:border-blue-400 dark:hover:border-blue-500/50 hover:bg-blue-100/70 dark:hover:bg-blue-600/20 transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 flex-shrink-0">
                  <Image
                    src="https://6rhooijwwmhiclbs.public.blob.vercel-storage.com/Aditha_Creation_V5-removebg-preview%202.ico"
                    alt="Aditha Creation"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-500 block">Hiring</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-gray-200">Are You Want Hire me?</span>
                </div>
              </a>
            </div>
          </div>

          {/* Availability Box */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-gradient-to-tr dark:from-blue-900/40 dark:via-blue-950/30 dark:to-cyan-950/20 border border-slate-200 dark:border-blue-500/30 space-y-2 mt-8">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Available for work</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
              {CONTACT_INFO.availability}.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Interactive Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#0b0f19] border border-slate-200/90 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-2xl transition-colors duration-300"
        >
          <form action="https://formspree.io/f/movjwyey" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-300">
                  Your Name <span className="text-blue-600 dark:text-blue-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-[#070a1c] border border-slate-200 dark:border-white/10 focus:border-blue-500 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none transition-all"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-300">
                  Your Email <span className="text-blue-600 dark:text-blue-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-[#070a1c] border border-slate-200 dark:border-white/10 focus:border-blue-500 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="space-y-2">
              <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-300">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project Inquiry"
                className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-[#070a1c] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>

            {/* Message Textarea */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-300">
                Message <span className="text-blue-600 dark:text-blue-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
                required
                className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-[#070a1c] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-all resize-y"
              />
            </div>

            {/* Submit CTA Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-[0_4px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_6px_35px_rgba(59,130,246,0.5)] transition-all active:scale-98 text-sm sm:text-base focus:outline-none cursor-pointer"
            >
              <span>Send Message</span>
              <Send size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

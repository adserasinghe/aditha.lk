'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Twitter, Facebook, ArrowUp, MessageCircle, Eye, ShieldCheck } from 'lucide-react';
import { NavTab } from '../types/portfolio';
import { CONTACT_INFO } from '../data/portfolioData';

interface FooterProps {
  onTabChange: (tab: NavTab) => void;
}

export default function Footer({ onTabChange }: FooterProps) {
  const [activeModal, setActiveModal] = useState<'privacy' | 'cookie' | 'a11y' | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', isHighContrast);
  }, [isHighContrast]);

  useEffect(() => {
    document.documentElement.classList.toggle('large-text', isLargeText);
  }, [isLargeText]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (tab: NavTab) => {
    onTabChange(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative bg-slate-100 dark:bg-[#070a1c] border-t border-slate-200 dark:border-white/10 pt-16 sm:pt-20 pb-0 text-slate-600 dark:text-gray-400 text-sm overflow-hidden mt-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-200 dark:border-white/10">
            {/* Left Section: Company Name & Tagline */}
            <div className="md:col-span-6 flex flex-col gap-4 items-center md:items-start text-center md:text-left">
              <h3 className="font-bold tracking-wider text-base uppercase text-blue-600 dark:text-blue-500">
                ADITHA DINUJA SERASINGHE
              </h3>
              <p className="text-slate-600 dark:text-gray-400 max-w-md leading-relaxed text-sm">
                Crafting high-performance digital experiences with a focus on modern design, robust technology, and professional storytelling.
              </p>
            </div>

            {/* Middle Section: Quick Links */}
            <div className="md:col-span-3 flex flex-col gap-3 items-center md:items-start">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-gray-400 pb-1">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2.5 items-center md:items-start">
                <li>
                  <button onClick={() => handleLinkClick('about')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-center md:text-left">
                    About Me
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('portfolio')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-center md:text-left">
                    Portfolio
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('blog')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-center md:text-left">
                    Blog
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('contact')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-center md:text-left">
                    Contact
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModal('privacy')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-center md:text-left">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModal('cookie')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-center md:text-left">
                    Cookie Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Right Section: Connect / Social Links */}
            <div className="md:col-span-3 flex flex-col gap-3 items-center md:items-start">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-gray-400 pb-1">
                Connect
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={CONTACT_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600/30 hover:border-blue-500/50 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={CONTACT_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600/30 hover:border-blue-500/50 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={CONTACT_INFO.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600/30 hover:border-blue-500/50 transition-all"
                  aria-label="Twitter / X"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href={CONTACT_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600/30 hover:border-blue-500/50 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={CONTACT_INFO.socials.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600/30 hover:border-blue-500/50 transition-all"
                  aria-label="Behance"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
                    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"></path>
                    <path d="M6.75085 11.985V9.00492C6.75085 8.72282 6.9824 8.49414 7.26802 8.49414H9.24582C9.68571 8.49414 10.1378 8.56982 10.4656 8.8595C10.8163 9.16935 11.1564 9.64935 11.1395 10.2909C11.1199 11.0391 10.5736 11.9234 9.77316 11.985ZM8.97271 12.0466 8.22065 11.985 6.75085 11.985ZM6.75085 11.985V14.9675C6.75085 15.2496 6.98243 15.478 7.26804 15.4808C8.40871 15.4917 9.07239 15.5322 9.77316 15.4783C10.5736 15.4166 11.1199 14.5323 11.1395 13.7841C11.1564 13.1426 10.8163 12.6626 10.4656 12.3527C10.1378 12.063 9.68571 11.9873 9.24582 11.9873L6.75085 11.985ZM16.7954 14.9655C16.3572 15.3901 14.2227 16.2293 13.4537 14.0205C13.3738 13.8 13.3102 13.3244 13.3473 12.957M13.3473 12.957C13.4106 12.3314 13.6867 11.4539 14.7115 11.0958C16.1791 10.583 17.102 12.0065 17.341 12.957H13.3473ZM14.5888 9.00095H15.949" strokeLinecap="round"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-wider uppercase">
            {/* Copyright */}
            <p className="text-slate-500 dark:text-gray-500 text-center sm:text-left">
              © {new Date().getFullYear()} ADITHA DINUJA SERASINGHE. ALL RIGHTS RESERVED.
            </p>

            {/* Aditha Creation Credit */}
            <p className="text-slate-600 dark:text-gray-400 text-center sm:text-right flex items-center gap-1.5 font-medium">
              <span>An</span>
              <a
                href="https://adithacreation.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hand"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-semibold underline underline-offset-4 decoration-blue-500/40 hover:decoration-blue-400 transition-colors"
              >
                Aditha Creation
              </a>
              <span>Project</span>
            </p>
          </div>
        </div>

        {/* Downside Giant Watermark Typography (Style from reference image) */}
        <div
          aria-hidden="true"
          className="w-full overflow-hidden select-none pointer-events-none flex justify-center items-end leading-none mt-4 sm:mt-6"
        >
          <span className="font-black text-[18vw] sm:text-[20vw] md:text-[21vw] lg:text-[22vw] tracking-tighter text-blue-950/[0.06] dark:text-white/[0.035] leading-[0.8] select-none translate-y-[10%] sm:translate-y-[14%] transition-colors duration-300">
            Aditha
          </span>
        </div>
      </footer>

      {/* Floating Accessibility Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setActiveModal('a11y')}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_4px_25px_rgba(59,130,246,0.4)] transition-all hover:-translate-y-1 active:scale-95 focus:outline-none"
          title="Accessibility Statement (WCAG 2.1 AA)"
          aria-label="Accessibility Settings"
        >
          <Eye size={20} />
        </button>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {/* Scroll To Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_4px_25px_rgba(59,130,246,0.4)] transition-all hover:-translate-y-1 active:scale-95 focus:outline-none"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating WhatsApp / Chat Button */}
        <a
          href={`https://wa.me/94718896042?text=${encodeURIComponent("Hi Aditha! I visited your portfolio and would like to connect.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[0_4px_25px_rgba(37,211,102,0.4)] transition-all hover:-translate-y-1 active:scale-95 focus:outline-none"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.579-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

      {/* Modals for Policy / A11y */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl p-8 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl text-slate-700 dark:text-gray-300 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 mb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="text-blue-600 dark:text-blue-500" size={22} />
                  {activeModal === 'privacy' && "Privacy Policy"}
                  {activeModal === 'cookie' && "Cookie Policy"}
                  {activeModal === 'a11y' && "Accessibility Compliance (WCAG AA)"}
                </h3>
                <button
                  onClick={() => setActiveModal(null)}
                  className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 transition-colors"
                >
                  Close
                </button>
              </div>

              <div className="text-sm space-y-3 leading-relaxed">
                {activeModal === 'privacy' && (
                  <>
                    <p>
                      At Aditha Serasinghe Portfolio, respecting your privacy is paramount. Any information submitted via our contact form (Name, Email, Subject, Message) is used exclusively to respond to your project inquiry.
                    </p>
                    <p>
                      We never sell, rent, or distribute personal information to third-party telemarketers or data brokers. All communications are encrypted over HTTPS.
                    </p>
                  </>
                )}
                {activeModal === 'cookie' && (
                  <>
                    <p>
                      This website utilizes minimal functional cookies to ensure smooth navigation, preserve user preferences (such as active navigation state), and optimize site performance.
                    </p>
                    <p>
                      By continuing to browse this portfolio, you consent to our use of essential web technologies designed to deliver high-performance digital excellence.
                    </p>
                  </>
                )}
                {activeModal === 'a11y' && (
                  <div className="space-y-4">
                    <p>
                      This portfolio is engineered in strict adherence to <strong>WCAG 2.1 AA</strong> guidelines. Adjust accessibility preferences below:
                    </p>
                    
                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => setIsHighContrast(!isHighContrast)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isHighContrast ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-white/10'}`}
                      >
                        {isHighContrast ? 'Disable High Contrast' : 'Enable High Contrast'}
                      </button>
                      <button
                        onClick={() => setIsLargeText(!isLargeText)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isLargeText ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-white/10'}`}
                      >
                        {isLargeText ? 'Disable Large Text' : 'Enable Large Text'}
                      </button>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-gray-500 pt-2">
                      Key features already implemented:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-gray-400 text-xs">
                      <li>Minimum 4.5:1 color contrast ratio.</li>
                      <li>Semantic HTML5 landmark tags.</li>
                      <li>Touch targets scaled to 44px.</li>
                      <li>Accessible ARIA labels and alt tags.</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 text-right">
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl text-sm transition-colors"
                >
                  Got It
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

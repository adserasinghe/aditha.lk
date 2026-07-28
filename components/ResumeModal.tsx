'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, CheckCircle, Mail, Phone, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';
import { WORKING_EXPERIENCE, TECHNICAL_SKILLS, CONTACT_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const resumeText = `ADITHA DINUJA SERASINGHE
Front End Developer, Graphic Designer & Content Creator
Location: Weligama, Sri Lanka
Email: ${CONTACT_INFO.email}
Phone: ${CONTACT_INFO.phone}
Portfolio: https://aditha.lk

SUMMARY
A multi-disciplinary creator focused on designing and developing high-performance web experiences that merge aesthetics with functionality. Quality Focused, SEO Optimized, User Centric, and Future Ready.

WORKING EXPERIENCE
${WORKING_EXPERIENCE.map(w => `${w.period} | ${w.role} @ ${w.company}\n${w.description}`).join('\n\n')}

TECHNICAL SKILLSET
${TECHNICAL_SKILLS.join(', ')}

EDUCATION & CERTIFICATIONS
- B.Sc. (Hons) in Information Technology / Software Engineering
- Certified UX/UI Professional
`;
    const element = document.createElement("a");
    const file = new Blob([resumeText], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "Aditha_Serasinghe_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl bg-[#0e1430] border border-white/20 rounded-3xl shadow-2xl overflow-hidden text-gray-200 my-8 print:border-none print:shadow-none print:text-black print:bg-white print:w-full print:max-w-none"
        >
          {/* Top Actions Bar */}
          <div className="flex items-center justify-between p-6 bg-[#070a1c] border-b border-white/10 print:hidden">
            <h3 className="font-bold text-white text-base flex items-center gap-2">
              <Award className="text-blue-500" size={20} />
              <span>Curriculum Vitae Preview</span>
            </h3>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDownloadTxt}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs shadow transition-all"
              >
                <Download size={14} />
                <span>Save Text</span>
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-all"
              >
                <Printer size={14} />
                <span>Print PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div className="p-8 sm:p-12 space-y-8 print:p-8">
            {/* Header */}
            <div className="border-b border-white/10 pb-6 print:border-gray-300">
              <h1 className="text-3xl font-extrabold text-white print:text-black tracking-tight">
                ADITHA DINUJA SERASINGHE
              </h1>
              <p className="text-blue-400 font-medium text-base mt-1 print:text-blue-700">
                Front End Developer, Graphic Designer & Content Creator
              </p>
              
              <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-400 print:text-gray-600">
                <span className="flex items-center gap-1"><Mail size={14} className="text-blue-400" /> {CONTACT_INFO.email}</span>
                <span className="flex items-center gap-1"><Phone size={14} className="text-blue-400" /> {CONTACT_INFO.phone}</span>
                <span className="flex items-center gap-1"><MapPin size={14} className="text-blue-400" /> {CONTACT_INFO.location}</span>
              </div>
            </div>

            {/* Profile Summary */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 print:text-blue-800 mb-2">
                Professional Summary
              </h2>
              <p className="text-sm leading-relaxed text-gray-300 print:text-gray-800">
                A multi-disciplinary creator focused on designing and developing high-performance web experiences that merge aesthetics with functionality. Experienced in front-end architectures, UI/UX systems, and brand storytelling. Quality Focused, SEO Optimized, User Centric, and Future Ready.
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 print:text-blue-800 mb-4 flex items-center gap-1.5">
                <Briefcase size={14} /> Working Experience
              </h2>
              <div className="space-y-6">
                {WORKING_EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-blue-500/40 print:border-blue-600">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-bold text-white print:text-black text-sm">{exp.role}</h3>
                      <span className="text-xs font-mono text-blue-300 print:text-blue-700">{exp.period}</span>
                    </div>
                    <p className="text-xs font-semibold text-gray-400 print:text-gray-700 mb-1">{exp.company}</p>
                    <p className="text-xs text-gray-300 print:text-gray-800 leading-normal">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 print:text-blue-800 mb-3 flex items-center gap-1.5">
                <CheckCircle size={14} /> Technical Skillset
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {TECHNICAL_SKILLS.map((sk) => (
                  <div key={sk} className="px-3 py-1.5 rounded-lg bg-white/5 print:bg-gray-100 text-xs text-gray-200 print:text-gray-800 font-medium">
                    {sk}
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="border-t border-white/10 pt-6 print:border-gray-300">
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 print:text-blue-800 mb-3 flex items-center gap-1.5">
                <GraduationCap size={14} /> Education & Philosophy
              </h2>
              <div className="text-xs text-gray-300 print:text-gray-800 space-y-1">
                <p><strong>Mission:</strong> To empower businesses through high-quality, scalable digital solutions that leave a lasting impact.</p>
                <p><strong>Vision:</strong> Staying at the forefront of emerging technologies to bridge the gap between imagination and reality.</p>
              </div>
            </section>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

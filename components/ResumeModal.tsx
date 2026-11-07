'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, Download, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const pdfUrl = 'https://6rhooijwwmhiclbs.public.blob.vercel-storage.com/aditha_serasinghe.pdf';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className="relative w-full max-w-4xl h-[85vh] bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#090d1c]">
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Curriculum Vitae Preview
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-all"
              >
                <Download size={14} />
                <span>Download PDF</span>
              </a>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close resume preview"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* PDF Viewer Frame */}
          <div className="flex-grow w-full bg-slate-100 dark:bg-black relative">
            <iframe
              src={`${pdfUrl}#toolbar=0`}
              title="Aditha Serasinghe Resume"
              className="w-full h-full border-none"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

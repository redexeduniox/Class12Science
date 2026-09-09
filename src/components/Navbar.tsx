import React from 'react';
import { Globe, Share2, BookOpen, Printer, Search, Award } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenShare: () => void;
  fontSize: 'normal' | 'large';
  onToggleFontSize: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenShare,
  fontSize,
  onToggleFontSize
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo & Main Keyword Brand */}
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              className="flex items-center gap-2.5 group focus:outline-hidden"
              aria-label="सरकारी करियर गाइड होमपेज"
            >
              <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Award className="w-5 h-5 text-amber-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white leading-tight">
                  {lang === 'hi' ? '12वीं साइंस सरकारी नौकरी' : '12th Science Govt Jobs'}
                </span>
                <span className="text-[11px] font-medium text-blue-600 dark:text-blue-400">
                  {lang === 'hi' ? 'सटीक एवं प्रमाणित करियर गाइड 2025-26' : 'Authentic Career Guide 2025-26'}
                </span>
              </div>
            </a>
          </div>

          {/* Quick Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#pcm-vs-pcb" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              {lang === 'hi' ? 'PCM vs PCB' : 'PCM vs PCB'}
            </a>
            <a href="#jobs-section" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              {lang === 'hi' ? 'प्रमुख भर्तियां' : 'Top Jobs'}
            </a>
            <a href="#salary-section" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              {lang === 'hi' ? 'वेतनमान' : 'Salary Scale'}
            </a>
            <a href="#preparation-guide" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              {lang === 'hi' ? 'तैयारी प्लान' : 'Study Plan'}
            </a>
            <a href="#faqs-section" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              {lang === 'hi' ? 'FAQ (प्रश्नोत्तरी)' : 'FAQs'}
            </a>
          </nav>

          {/* Action Buttons: Language Switcher, Share, Print, Font Size */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Font Size Adjuster for Readability */}
            <button
              onClick={onToggleFontSize}
              title={lang === 'hi' ? 'फॉन्ट साइज बदलें' : 'Toggle Font Size'}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold transition flex items-center justify-center"
              aria-label="Toggle font size"
            >
              {fontSize === 'normal' ? 'A+' : 'A-'}
            </button>

            {/* Print / Save Guide */}
            <button
              onClick={handlePrint}
              title={lang === 'hi' ? 'गाइड प्रिंट या PDF सेव करें' : 'Print or Save Guide as PDF'}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold transition"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>{lang === 'hi' ? 'प्रिंट' : 'Print'}</span>
            </button>

            {/* Share Button (Required) */}
            <button
              onClick={onOpenShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs sm:text-sm font-semibold transition shadow-xs"
              aria-label="Share this guide"
            >
              <Share2 className="w-4 h-4" />
              <span>{lang === 'hi' ? 'शेयर करें' : 'Share'}</span>
            </button>

            {/* Language Toggle Button (Required) */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-linear-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/20 transition-all hover:scale-102 active:scale-98"
              aria-label="Switch Language Hindi to English"
            >
              <Globe className="w-4 h-4" />
              <span className="font-semibold">
                {lang === 'hi' ? 'English में पढ़ें' : 'हिंदी में पढ़ें'}
              </span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};

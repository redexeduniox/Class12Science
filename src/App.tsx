import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TableOfContents } from './components/TableOfContents';
import { IntroductionAndComparison } from './components/IntroductionAndComparison';
import { JobFilterAndCards } from './components/JobFilterAndCards';
import { SalaryMatrixSection } from './components/SalaryMatrixSection';
import { PreparationGuideAndBooks } from './components/PreparationGuideAndBooks';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AdSlot } from './components/AdSlot';
import { ShareModal } from './components/ShareModal';
import { ArrowUp, Sparkles, CheckCircle, Share2, Compass } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('hi');
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync scroll progress and back-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update document language attribute and title when switching between Hindi & English
  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === 'hi') {
      document.title = '12वीं साइंस के बाद सरकारी नौकरी 2025-26: PCM और PCB के लिए बेस्ट जॉब्स, सैलरी व चयन प्रक्रिया';
    } else {
      document.title = 'Government Jobs after 12th Science 2025-26: Best Jobs for PCM & PCB, Salary & Selection';
    }
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => prev === 'hi' ? 'en' : 'hi');
  };

  const toggleFontSize = () => {
    setFontSize(prev => prev === 'normal' ? 'large' : 'normal');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 text-slate-800 transition-colors selection:bg-blue-600 selection:text-white ${fontSize === 'large' ? 'text-lg' : 'text-base'}`}>
      
      {/* Real-time Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-linear-to-r from-blue-600 via-indigo-600 to-amber-500 z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Navigation Bar */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLang}
        onOpenShare={() => setIsShareOpen(true)}
        fontSize={fontSize}
        onToggleFontSize={toggleFontSize}
      />

      {/* Main Single Page Article */}
      <main className="flex-1">
        
        {/* Hero Section with H1 containing primary keyword */}
        <HeroSection
          lang={lang}
          onOpenShare={() => setIsShareOpen(true)}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

          {/* ========================================================================= */}
          {/* GOOGLE ADSENSE / AD PLACEMENT SLOT: Top Leaderboard (728x90)               */}
          {/* ========================================================================= */}
          <AdSlot id="ad-top-leaderboard" type="leaderboard" />

          {/* Table of Contents / Quick Jump Anchor Links */}
          <TableOfContents lang={lang} />

          {/* Section 1: Introduction & Section 2: PCM vs PCB Comparison */}
          <IntroductionAndComparison lang={lang} />

          {/* ========================================================================= */}
          {/* GOOGLE ADSENSE / AD PLACEMENT SLOT: In-Article Responsive Banner 1        */}
          {/* ========================================================================= */}
          <AdSlot id="ad-in-article-1" type="in-article" />

          {/* Section 3: Detailed Job Listings & Directory with Interactive Filters */}
          <JobFilterAndCards lang={lang} />

          {/* ========================================================================= */}
          {/* GOOGLE ADSENSE / AD PLACEMENT SLOT: In-Article Responsive Banner 2        */}
          {/* ========================================================================= */}
          <AdSlot id="ad-in-article-2" type="in-article" />

          {/* Section 4: 7th Pay Commission Salary Matrix */}
          <SalaryMatrixSection lang={lang} />

          {/* Section 5 & 6: 6-Month Preparation Roadmap & Recommended Books */}
          <PreparationGuideAndBooks lang={lang} />

          {/* ========================================================================= */}
          {/* GOOGLE ADSENSE / AD PLACEMENT SLOT: Pre-FAQ Native Display Banner         */}
          {/* ========================================================================= */}
          <AdSlot id="ad-pre-faq" type="in-article" />

          {/* Section 7: FAQs Section (aligned with Schema.org JSON-LD FAQPage) */}
          <FaqSection lang={lang} />

          {/* Quick CTA Card to share or bookmark */}
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-linear-to-r from-blue-700 via-indigo-700 to-blue-800 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-blue-100 backdrop-blur-md mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  {lang === 'hi' ? 'करियर मार्गदर्शन सहायता' : 'Career Support Desk'}
                </span>
                <h3 className="text-xl sm:text-2xl font-black leading-tight">
                  {lang === 'hi'
                    ? '12वीं साइंस के बाद सही दिशा में करें तैयारी!'
                    : 'Plan your Govt Job Journey After 12th Science!'}
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-1 max-w-xl">
                  {lang === 'hi'
                    ? 'इस गाइड को अपने दोस्तों, परिवार और व्हाट्सएप ग्रुप्स में शेयर करें ताकि किसी भी 12वीं साइंस छात्र का सुनहरा मौका न छूटे।'
                    : 'Share this comprehensive guide with fellow classmates and family to help them discover the right career paths.'}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => setIsShareOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-white text-blue-800 hover:bg-blue-50 font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4 text-blue-600" />
                  <span>{lang === 'hi' ? 'अभी शेयर करें' : 'Share Now'}</span>
                </button>
                <button
                  onClick={toggleLang}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-md transition"
                >
                  {lang === 'hi' ? 'English Version' : 'हिंदी संस्करण'}
                </button>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* GOOGLE ADSENSE / AD PLACEMENT SLOT: Bottom Banner (Matched Content)        */}
          {/* ========================================================================= */}
          <AdSlot id="ad-bottom-banner" type="bottom" />

        </div>
      </main>

      {/* Semantic Footer */}
      <Footer lang={lang} onOpenShare={() => setIsShareOpen(true)} />

      {/* Social Share Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        lang={lang}
      />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all transform hover:scale-110 focus:outline-hidden z-40"
          aria-label={lang === 'hi' ? 'ऊपर जाएं' : 'Scroll to Top'}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}

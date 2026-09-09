import React from 'react';
import { Calendar, Clock, CheckCircle2, Award, ArrowDown, Sparkles, MessageCircle, Send, TrendingUp, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface HeroSectionProps {
  lang: Language;
  onOpenShare: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang, onOpenShare }) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://sarkarinaukri-12thscience.pages.dev/';
  const shareTitle = lang === 'hi'
    ? '12वीं साइंस के बाद सरकारी नौकरी (2025-26): PCM और PCB के लिए पूरी जानकारी'
    : 'Govt Jobs after 12th Science 2025-26: Complete Guide for PCM & PCB';
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareTitle} - देखें पूरी लिस्ट:\n${currentUrl}`)}`;
  const telegramShare = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`;

  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 bg-linear-to-b from-blue-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800">
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Verification & Meta Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 border border-blue-200 dark:border-blue-700 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{lang === 'hi' ? 'लेटेस्ट अपडेट: 2025-2026' : 'Latest Update: 2025-2026'}</span>
          </span>

          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'hi' ? '100% सटीक व प्रमाणित' : '100% Authentic & Verified'}</span>
          </span>

          <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? '8 मिनट में पढ़ें' : '8 Min Read'}</span>
          </span>
        </div>

        {/* Main H1 - Strictly Featuring Target Keyword */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.2] mb-6">
          {lang === 'hi' ? (
            <>
              <span className="text-blue-700 dark:text-blue-400 block sm:inline">12वीं साइंस के बाद सरकारी नौकरी</span> (2025-26): PCM और PCB वालों के लिए टॉप जॉब्स, सैलरी व चयन प्रक्रिया
            </>
          ) : (
            <>
              <span className="text-blue-700 dark:text-blue-400 block sm:inline">Government Jobs After 12th Science</span> (2025-26): Top Jobs, Salary & Selection Process for PCM & PCB
            </>
          )}
        </h1>

        {/* Lead Excerpt Paragraph for SEO & User Experience */}
        <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal mb-5 max-w-4xl">
          {lang === 'hi' ? (
            <>
              यदि आपने 12वीं साइंस (<strong className="font-semibold text-slate-900 dark:text-white">PCM या PCB</strong>) से उत्तीर्ण की है और बिना किसी डिग्री या महंगे कॉलेज में समय बिताए सीधे केंद्र या राज्य सरकार में एक सुरक्षित व सम्मानजनक सरकारी पद प्राप्त करना चाहते हैं, तो यह विस्तृत गाइड आपके लिए है। यहां जानिए <strong className="font-semibold text-slate-900 dark:text-white">NDA, SSC CHSL, भारतीय रेलवे, डिफेंस अग्निवीर, दिल्ली पुलिस और लैब असिस्टेंट</strong> सहित सभी प्रमुख भर्तियों की योग्यता, आयु सीमा, चयन प्रक्रिया और सैलरी की सटीक जानकारी।
            </>
          ) : (
            <>
              If you have passed Class 12th in the Science stream (<strong className="font-semibold text-slate-900 dark:text-white">PCM or PCB</strong>) and want to secure a prestigious government job right away, this guide delivers full details on eligibility, age limits, syllabus, selection phases, and monthly salary for <strong className="font-semibold text-slate-900 dark:text-white">NDA, SSC CHSL, Indian Railways, Defence Agniveer, Delhi Police, and State Lab Assistants</strong>.
            </>
          )}
        </p>

        {/* Related Searches / Trending Keyword Tags for Technical SEO & Instant Navigation */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8 text-xs">
          <span className="font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1 mr-1">
            <TrendingUp className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{lang === 'hi' ? 'संबंधित खोजें:' : 'Related Searches:'}</span>
          </span>
          {[
            { hi: '12वीं PCM सरकारी नौकरी', en: '12th PCM Govt Jobs', href: '#pcm-vs-pcb' },
            { hi: '12वीं PCB नौकरियां', en: '12th PCB Career', href: '#pcm-vs-pcb' },
            { hi: 'रेलवे टेक्नीशियन 12th साइंस', en: 'Railway Technician (S&T)', href: '#jobs-section' },
            { hi: 'NDA डिफेंस ऑफिसर', en: 'NDA Defence Officer', href: '#jobs-section' },
            { hi: 'SSC CHSL DEO भर्ती', en: 'SSC CHSL DEO', href: '#jobs-section' },
            { hi: 'लैब असिस्टेंट भर्ती', en: 'Lab Assistant Jobs', href: '#jobs-section' },
            { hi: '7वां वेतन आयोग सैलरी', en: '7th CPC Salary Matrix', href: '#salary-section' },
            { hi: 'सरकारी रिजल्ट 12th साइंस', en: 'Sarkari Result 12th Science', href: '#faqs-section' }
          ].map((tag, idx) => (
            <a
              key={idx}
              href={tag.href}
              className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/40 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200/90 dark:border-slate-700 transition shadow-2xs font-medium"
            >
              #{lang === 'hi' ? tag.hi : tag.en}
            </a>
          ))}
        </div>

        {/* Quick Highlights Summary Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <div className="bg-white dark:bg-slate-800/80 rounded-xl p-3.5 sm:p-4 border border-slate-200 dark:border-slate-700 shadow-xs">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
              {lang === 'hi' ? 'शुरुआती वेतन (सैलरी)' : 'Starting Pay Scale'}
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-blue-700 dark:text-blue-400">
              ₹25,000 - ₹95,000
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {lang === 'hi' ? '7वां वेतन आयोग (प्रति माह)' : '7th CPC In-hand'}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800/80 rounded-xl p-3.5 sm:p-4 border border-slate-200 dark:border-slate-700 shadow-xs">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
              {lang === 'hi' ? 'न्यूनतम उम्र सीमा' : 'Age Criteria'}
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-indigo-700 dark:text-indigo-400">
              16.5 से 27 वर्ष
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {lang === 'hi' ? 'आरक्षित वर्ग को 3-5 वर्ष छूट' : 'OBC/SC/ST relaxations'}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800/80 rounded-xl p-3.5 sm:p-4 border border-slate-200 dark:border-slate-700 shadow-xs">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
              {lang === 'hi' ? 'शीर्ष भर्ती बोर्ड' : 'Top Recruitment Bodies'}
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-emerald-700 dark:text-emerald-400">
              UPSC, SSC, RRB
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {lang === 'hi' ? 'डिफेंस, रेलवे व केंद्रीय मंत्रालय' : 'Central & State Boards'}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800/80 rounded-xl p-3.5 sm:p-4 border border-slate-200 dark:border-slate-700 shadow-xs">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
              {lang === 'hi' ? 'पात्र वर्ग' : 'Eligible Streams'}
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-amber-600 dark:text-amber-400">
              PCM व PCB दोनों
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              {lang === 'hi' ? 'मैथ्स व बायो दोनों के लिए पद' : 'Specific Posts for Both'}
            </div>
          </div>
        </div>

        {/* Author / Fact-check credentials and In-Hero Social Share */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-700 dark:text-slate-300">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                {lang === 'hi' ? 'प्रमाणित रिपोर्ट: सरकारी नौकरी विशेषज्ञ डेस्क' : 'Verified by: Sarkari Career Research Cell'}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <span>{lang === 'hi' ? 'अंतिम संशोधन: 09 सितम्बर 2026' : 'Last Reviewed: Sep 2026'}</span>
                <span>•</span>
                <span className="text-emerald-600 font-semibold">{lang === 'hi' ? 'आधिकारिक स्रोतों से सत्यापित' : 'Fact-Checked'}</span>
              </div>
            </div>
          </div>

          {/* Instant Share Bar */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 hidden sm:inline">
              {lang === 'hi' ? 'त्वरित शेयर:' : 'Quick Share:'}
            </span>
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xs transition"
              title="Share on WhatsApp"
              aria-label="Share on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={telegramShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white shadow-2xs transition"
              title="Share on Telegram"
              aria-label="Share on Telegram"
            >
              <Send className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenShare}
              className="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-xs font-semibold text-slate-800 dark:text-slate-200 transition"
            >
              {lang === 'hi' ? 'अन्य विकल्प +' : 'More +'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

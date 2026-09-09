import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Language } from '../types';
import { FAQS_DATA } from '../data/blogData';

interface Props {
  lang: Language;
}

export const FaqSection: React.FC<Props> = ({ lang }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(prev => prev === idx ? null : idx);
  };

  return (
    <section id="faqs-section" className="scroll-mt-20 my-12">
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? 'महत्वपूर्ण प्रश्नोत्तर' : 'Direct Answers'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {lang === 'hi'
            ? 'अक्सर पूछे जाने वाले सवाल (12वीं साइंस के बाद सरकारी नौकरी FAQs)'
            : 'Frequently Asked Questions (Govt Jobs after 12th Science FAQs)'}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">
          {lang === 'hi'
            ? 'विद्यार्थियों और अभिभावकों द्वारा सबसे ज्यादा पूछे जाने वाले प्रश्नों के सटीक उत्तर:'
            : 'Clear, concise answers to the most common queries asked by 12th Science aspirants:'}
        </p>
      </div>

      <div className="space-y-3">
        {FAQS_DATA.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs overflow-hidden transition"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
                aria-expanded={isOpen}
              >
                <span>{lang === 'hi' ? faq.questionHi : faq.questionEn}</span>
                <span className="p-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  {lang === 'hi' ? faq.answerHi : faq.answerEn}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

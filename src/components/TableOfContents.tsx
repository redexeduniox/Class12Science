import React from 'react';
import { ListChecks, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface TableOfContentsProps {
  lang: Language;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ lang }) => {
  const items = [
    {
      id: 'introduction',
      titleHi: '1. प्रस्तावना: 12वीं साइंस के बाद सरकारी नौकरी क्यों चुनें?',
      titleEn: '1. Introduction: Why Choose a Govt Job after 12th Science?'
    },
    {
      id: 'pcm-vs-pcb',
      titleHi: '2. PCM vs PCB: दोनों वर्गों के लिए उपलब्ध अवसरों की तुलना',
      titleEn: '2. PCM vs PCB: Detailed Career Comparison'
    },
    {
      id: 'jobs-section',
      titleHi: '3. टॉप 12वीं साइंस सरकारी नौकरियां (पदों का विस्तृत विवरण, सैलरी व पात्रता)',
      titleEn: '3. Top 12th Science Govt Jobs (Posts, Eligibility & Pay Scale)'
    },
    {
      id: 'salary-section',
      titleHi: '4. 7वां वेतन आयोग (7th CPC) सैलरी मैट्रिक्स एवं भत्ते',
      titleEn: '4. 7th Central Pay Commission Salary Matrix & In-hand Pay'
    },
    {
      id: 'selection-process',
      titleHi: '5. परीक्षा पैटर्न व चयन प्रक्रिया के सामान्य चरण',
      titleEn: '5. Exam Patterns & General Selection Phases'
    },
    {
      id: 'preparation-guide',
      titleHi: '6. 6-महीने का सटीक स्टडी प्लान एवं टाइमटेबल',
      titleEn: '6. 6-Month Preparation Roadmap & Timetable'
    },
    {
      id: 'best-books',
      titleHi: '7. विशेषज्ञों द्वारा अनुशंसित सर्वश्रेष्ठ पुस्तकें (Best Books)',
      titleEn: '7. Recommended Preparation Books & Study Materials'
    },
    {
      id: 'faqs-section',
      titleHi: '8. अक्सर पूछे जाने वाले महत्वपूर्ण प्रश्न (FAQs)',
      titleEn: '8. Frequently Asked Questions (FAQs)'
    }
  ];

  return (
    <nav 
      aria-label={lang === 'hi' ? 'सामग्री सूची' : 'Table of Contents'}
      className="my-8 p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
    >
      <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
        <ListChecks className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
          {lang === 'hi' ? 'विषय सूची (Table of Contents)' : 'Table of Contents (Quick Navigation)'}
        </h2>
      </div>

      <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="group flex items-center justify-between p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 transition"
            >
              <span className="line-clamp-1 font-medium text-xs sm:text-sm">
                {lang === 'hi' ? item.titleHi : item.titleEn}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition shrink-0 ml-2" />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

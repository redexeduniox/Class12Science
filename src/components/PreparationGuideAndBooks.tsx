import React from 'react';
import { Calendar, BookOpen, CheckCircle, Target, Award, Lightbulb } from 'lucide-react';
import { Language } from '../types';
import { STUDY_BOOKS_DATA } from '../data/blogData';

interface Props {
  lang: Language;
}

export const PreparationGuideAndBooks: React.FC<Props> = ({ lang }) => {
  return (
    <div className="space-y-12 my-10">
      
      {/* 6-MONTH PREPARATION TIMETABLE */}
      <section id="preparation-guide" className="scroll-mt-20">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
          <Calendar className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? 'रणनीति एवं समय-प्रबंधन' : 'Preparation Strategy'}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
          {lang === 'hi'
            ? '12वीं साइंस के बाद सरकारी नौकरी की तैयारी कैसे करें: 6-महीने का मास्टर प्लान'
            : 'How to Prepare for Govt Jobs after 12th Science: 6-Month Master Roadmap'}
        </h2>
        
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          {lang === 'hi'
            ? 'यदि आप 12वीं की पढ़ाई के साथ या पास करते ही प्रतिदिन 4 से 6 घंटे समर्पित करते हैं, तो 6 महीने में किसी भी 12वीं स्तर की परीक्षा को पहले प्रयास में क्रैक किया जा सकता है:'
            : 'Devoting 4 to 6 focused hours daily following this structured 3-phase timetable guarantees maximum clearing probability on attempt one:'}
        </p>

        {/* Roadmap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Phase 1 */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs relative">
            <div className="inline-block px-3 py-1 rounded-md text-xs font-bold bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 mb-3">
              {lang === 'hi' ? 'माह 1 - 2: नींव और फंडामेंटल' : 'Month 1-2: Foundations'}
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              {lang === 'hi' ? 'सिलेबस विश्लेषण व बेसिक कॉन्सेप्ट' : 'Syllabus & Core Basics'}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{lang === 'hi' ? 'टारगेट परीक्षा (NDA/SSC/RRB) का सटीक सिलेबस डाउनलोड करें।' : 'Download accurate syllabus and exam pattern.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{lang === 'hi' ? 'बेसिक 10वीं व 12वीं गणित व साइंस के फॉर्मूलों की अलग नोटबुक बनाएं।' : 'Make a dedicated formula notebook for Maths & Science.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{lang === 'hi' ? 'डेली करंट अफेयर्स और अंग्रेजी व्याकरण के नियम पढ़ना शुरू करें।' : 'Start daily 30-min current affairs and basic grammar.'}</span>
              </li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs relative">
            <div className="inline-block px-3 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 mb-3">
              {lang === 'hi' ? 'माह 3 - 4: अध्यायवार अभ्यास' : 'Month 3-4: Topic Mastery'}
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              {lang === 'hi' ? 'स्पीड, ट्रिक्स और गहन रिवीज़न' : 'Speed Tricks & Deep Practice'}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>{lang === 'hi' ? 'रीजनिंग और क्वांटिटेटिव एप्टीट्यूड के हर चैप्टर के 100+ प्रश्न हल करें।' : 'Solve 100+ questions per chapter in Quant & Reasoning.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>{lang === 'hi' ? 'शॉर्टकट ट्रिक्स (वैदिक गणित / यूनिट डिजिट मेथड) का अभ्यास करें।' : 'Master shortcut calculation and elimination methods.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>{lang === 'hi' ? 'डिफेंस व पुलिस पदों के लिए सुबह 1 घंटा रनिंग और फिजिकल वर्कआउट करें।' : 'Start daily 45-min physical running for defence/police.'}</span>
              </li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs relative">
            <div className="inline-block px-3 py-1 rounded-md text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 mb-3">
              {lang === 'hi' ? 'माह 5 - 6: मॉक टेस्ट व PYQ' : 'Month 5-6: PYQs & Mocks'}
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              {lang === 'hi' ? 'परीक्षा हॉल जैसा वास्तविक अभ्यास' : 'Timed Full Mocks & Analysis'}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{lang === 'hi' ? 'पिछले 5 वर्षों के प्रश्न पत्र (Previous Year Papers) हल करें।' : 'Solve the last 5 years question papers strictly in timer mode.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{lang === 'hi' ? 'सप्ताह में 2 से 3 ऑनलाइन फुल मॉक टेस्ट दें और गलतियों का विश्लेषण करें।' : 'Take 2-3 full online mock tests every week and analyse mistakes.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{lang === 'hi' ? 'नेगेटिव मार्किंग से बचने के लिए सटीकता (Accuracy) 90%+ रखें।' : 'Maintain 90%+ accuracy to survive negative marking.'}</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* RECOMMENDED BOOKS SECTION */}
      <section id="best-books" className="scroll-mt-20">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? 'अध्ययन सामग्री' : 'Recommended Literature'}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
          {lang === 'hi'
            ? '12वीं साइंस सरकारी परीक्षा की सर्वश्रेष्ठ पुस्तकें (Best Books)'
            : 'Best Recommended Books for 12th Science Govt Exams'}
        </h2>

        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          {lang === 'hi'
            ? 'टॉपर्स और परीक्षा विशेषज्ञों द्वारा जांची-परखी गई प्रमाणिक पुस्तकें जो आपके स्कोर को अधिकतम करेंगी:'
            : 'Expert-curated standard textbooks universally recommended for cracking 12th-level central exams:'}
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs bg-white dark:bg-slate-900">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="py-3 px-4 font-bold sm:w-1/4">
                  {lang === 'hi' ? 'विषय' : 'Subject'}
                </th>
                <th className="py-3 px-4 font-bold sm:w-1/3">
                  {lang === 'hi' ? 'पुस्तक एवं लेखक' : 'Book & Author'}
                </th>
                <th className="py-3 px-4 font-bold">
                  {lang === 'hi' ? 'यह पुस्तक क्यों पढ़ें?' : 'Key Reason to Study'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {STUDY_BOOKS_DATA.map((book, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                    {lang === 'hi' ? book.subjectHi : book.subjectEn}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-blue-700 dark:text-blue-400">
                      {lang === 'hi' ? book.bookNameHi : book.bookNameEn}
                    </div>
                    <div className="text-xs text-slate-500">
                      {lang === 'hi' ? book.authorOrPublisherHi : book.authorOrPublisherEn}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-xs">
                    {lang === 'hi' ? book.whyReadHi : book.whyReadEn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};

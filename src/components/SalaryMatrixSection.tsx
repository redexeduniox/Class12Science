import React from 'react';
import { IndianRupee, ShieldAlert, Sparkles, Building2 } from 'lucide-react';
import { Language } from '../types';
import { SALARY_MATRIX_DATA } from '../data/blogData';

interface Props {
  lang: Language;
}

export const SalaryMatrixSection: React.FC<Props> = ({ lang }) => {
  return (
    <section id="salary-section" className="scroll-mt-20 my-10">
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
          <IndianRupee className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? '7वां वेतन आयोग' : '7th Central Pay Commission'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {lang === 'hi'
            ? '12वीं साइंस सरकारी नौकरी वेतनमान (सैलरी एवं भत्ते 2025-26)'
            : 'Salary Scale & Allowances Matrix after 12th Science'}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">
          {lang === 'hi'
            ? 'केंद्र एवं राज्य सरकार के पे लेवल के अनुसार बेसिक पे, भत्ते और खाते में आने वाली कुल इन-हैंड सैलरी का विवरण:'
            : 'Breakdown of Basic Pay, Dearness Allowance (DA 50%+), HRA, and starting in-hand monthly salary:'}
        </p>
      </div>

      {/* Salary Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs bg-white dark:bg-slate-900 mb-6">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">
            <tr>
              <th className="py-3 px-4 font-bold">
                {lang === 'hi' ? 'वेतन स्तर (Pay Level)' : 'Pay Matrix Level'}
              </th>
              <th className="py-3 px-4 font-bold">
                {lang === 'hi' ? 'शुरुआती मूल वेतन (Basic)' : 'Starting Basic Pay'}
              </th>
              <th className="py-3 px-4 font-bold text-emerald-700 dark:text-emerald-400">
                {lang === 'hi' ? 'अनुमानित इन-हैंड सैलरी' : 'Expected In-Hand (Per Month)'}
              </th>
              <th className="py-3 px-4 font-bold">
                {lang === 'hi' ? 'प्रमुख पद' : 'Relevant Post Profiles'}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
            {SALARY_MATRIX_DATA.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                  {item.level}
                </td>
                <td className="py-3.5 px-4 font-mono font-medium">
                  {item.basic}
                </td>
                <td className="py-3.5 px-4 font-bold text-emerald-700 dark:text-emerald-400">
                  {item.inHand}
                </td>
                <td className="py-3.5 px-4 text-xs">
                  {item.posts}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Allowances Explain Box */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs">
        <div>
          <div className="font-bold text-slate-900 dark:text-white mb-1">
            {lang === 'hi' ? '1. महंगाई भत्ता (DA - 50%+)' : '1. Dearness Allowance (DA)'}
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            {lang === 'hi'
              ? 'वर्तमान में केंद्रीय कर्मचारियों को 50% महंगाई भत्ता मिलता है, जो साल में दो बार (जनवरी व जुलाई) बढ़ाया जाता है।'
              : 'Dearness allowance is currently pegged at 50% of basic pay, revised bi-annually to offset inflation.'}
          </p>
        </div>

        <div>
          <div className="font-bold text-slate-900 dark:text-white mb-1">
            {lang === 'hi' ? '2. आवास भत्ता (HRA 10% से 30%)' : '2. House Rent Allowance (HRA)'}
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            {lang === 'hi'
              ? 'शहरों की श्रेणी (X = 30%, Y = 20%, Z = 10%) के आधार पर मकान किराया भत्ता सीधे खाते में जुड़ता है।'
              : 'Categorized by city tier (X cities like Delhi/Mumbai receive 30% of basic pay, Y cities 20%, Z cities 10%).'}
          </p>
        </div>

        <div>
          <div className="font-bold text-slate-900 dark:text-white mb-1">
            {lang === 'hi' ? '3. अन्य सरकारी लाभ व सुरक्षा' : '3. Medical & Post-Retirement Security'}
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            {lang === 'hi'
              ? 'पूरे परिवार के लिए सीजीएचएस/रेलवे मेडिकल, बच्चों की पढ़ाई का शिक्षा भत्ता (₹27,000/वर्ष), और राष्ट्रीय पेंशन योजना (NPS)।'
              : 'Comprehensive family healthcare, Child Education Allowance (₹27,000/child/year), and National Pension System (NPS).'}
          </p>
        </div>
      </div>
    </section>
  );
};

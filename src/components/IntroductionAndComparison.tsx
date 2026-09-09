import React from 'react';
import { Target, CheckCircle2, TrendingUp, Compass, Zap, Scale } from 'lucide-react';
import { Language } from '../types';
import { PCM_VS_PCB_COMPARISON } from '../data/blogData';

interface Props {
  lang: Language;
}

export const IntroductionAndComparison: React.FC<Props> = ({ lang }) => {
  return (
    <div className="space-y-12">
      
      {/* SECTION 1: INTRODUCTION */}
      <section id="introduction" className="scroll-mt-20">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
          <Compass className="w-4 h-4" />
          <span>{lang === 'hi' ? 'करियर विश्लेषण' : 'Career Analysis'}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          {lang === 'hi' 
            ? '12वीं साइंस के बाद सरकारी नौकरी क्यों एक बेहतरीन करियर विकल्प है?'
            : 'Why Government Jobs after 12th Science are an Excellent Career Choice?'}
        </h2>

        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base space-y-4">
          <p>
            {lang === 'hi' ? (
              <>
                अक्सर विद्यार्थियों और अभिभावकों में यह आम धारणा होती है कि 12वीं साइंस (PCM/PCB) पास करने के बाद केवल <strong>IIT JEE (इंजीनियरिंग)</strong> या <strong>NEET (मेडिकल)</strong> ही एकमात्र विकल्प होते हैं। लेकिन वास्तविकता यह है कि भारतीय केंद्र सरकार एवं राज्य सरकारों में 12वीं पास साइंस छात्रों के लिए दर्जनों ऐसी भर्तियां हैं, जहां आप 18 से 20 वर्ष की छोटी उम्र में सीधे <strong>राजपत्रित अधिकारी (Class-1 Officer)</strong> या <strong>सम्मानजनक तकनीकी पद</strong> पर नियुक्त हो सकते हैं।
              </>
            ) : (
              <>
                It is a prevalent myth that after Class 12th Science, the only available avenues are <strong>IIT JEE (Engineering)</strong> or <strong>NEET (MBBS/BDS)</strong>. In reality, both the Central Government and State Governments offer dozens of high-caliber posts where candidates can join as early as age 18 to 21 directly as <strong>Class-1 Gazetted Officers</strong> or in premier <strong>technical ministries</strong>.
              </>
            )}
          </p>

          {/* Science Student Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose my-6">
            <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/60">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold mb-3">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                {lang === 'hi' ? 'मैथ्स व रीजनिंग में बढ़त' : 'Quantitative Edge'}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {lang === 'hi'
                  ? 'साइंस छात्रों का गणितीय और तार्किक आधार पहले से मजबूत होता है, जिससे वे प्रतियोगी परीक्षाओं में नॉन-साइंस छात्रों से अधिक अंक लाते हैं।'
                  : 'Science students already possess analytical aptitude, giving them a natural scoring edge in Quantitative and Logical Reasoning.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/60">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold mb-3">
                <Target className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                {lang === 'hi' ? 'दोहरी पात्रता (Dual Eligibility)' : 'Dual Eligibility Advantage'}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {lang === 'hi'
                  ? 'आप साइंस स्पेशल टेक्निकल पदों (जैसे NDA एयरफोर्स/नेवी, रेलवे S&T, CAG DEO) के साथ-साथ सभी सामान्य 12वीं पदों (SSC, रेलवे, पुलिस) के लिए भी पात्र होते हैं।'
                  : 'You are eligible for exclusive science-restricted posts (Navy SSR, Airforce Vayu, CAG DEO) as well as 100% of open 12th level posts.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/60">
              <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold mb-3">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                {lang === 'hi' ? 'जल्दी आर्थिक आत्मनिर्भरता' : 'Early Financial Security'}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {lang === 'hi'
                  ? 'बिना 4-5 साल कॉलेज की भारी फीस चुकाए, 19 वर्ष की उम्र में ₹35,000 से ₹75,000 तक मासिक वेतन और आजीवन पेंशन फंड की सुरक्षा।'
                  : 'Zero college debt with immediate starting salary of ₹35,000 - ₹75,000/mo by age 19 with lifetime government stability.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PCM VS PCB COMPARISON */}
      <section id="pcm-vs-pcb" className="scroll-mt-20">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
          <Scale className="w-4 h-4" />
          <span>{lang === 'hi' ? 'तुलनात्मक गाइड' : 'Stream Comparison'}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          {lang === 'hi'
            ? 'PCM (गणित) vs PCB (बायोलॉजी): 12वीं साइंस के बाद अवसरों की तुलना'
            : 'PCM (Maths) vs PCB (Biology): Detailed Opportunity Comparison'}
        </h2>

        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          {lang === 'hi'
            ? 'नीचे दी गई तालिका में देखें कि आपकी 12वीं साइंस स्ट्रीम (PCM या PCB) के अनुसार आपके लिए कौन-से सरकारी क्षेत्र सर्वाधिक उपयुक्त हैं:'
            : 'Review the comparison matrix below to understand key strengths, post types, and salary opportunities for your exact 12th stream:'}
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs bg-white dark:bg-slate-900">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="py-3.5 px-4 font-bold sm:w-1/4">
                  {lang === 'hi' ? 'तुलना का मानक' : 'Comparison Metric'}
                </th>
                <th className="py-3.5 px-4 font-bold text-blue-700 dark:text-blue-400 sm:w-3/8">
                  12th PCM (Physics, Chemistry, Maths)
                </th>
                <th className="py-3.5 px-4 font-bold text-emerald-700 dark:text-emerald-400 sm:w-3/8">
                  12th PCB (Physics, Chemistry, Biology)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {PCM_VS_PCB_COMPARISON.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                    {lang === 'hi' ? row.featureHi : row.featureEn}
                  </td>
                  <td className="py-3.5 px-4">
                    {lang === 'hi' ? row.pcmHi : row.pcmEn}
                  </td>
                  <td className="py-3.5 px-4">
                    {lang === 'hi' ? row.pcbHi : row.pcbEn}
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

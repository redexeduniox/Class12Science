import React from 'react';
import { Award, ShieldAlert, Heart, Share2 } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language;
  onOpenShare: () => void;
}

export const Footer: React.FC<Props> = ({ lang, onOpenShare }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs sm:text-sm pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Brand & Focus Keyword */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-extrabold text-base sm:text-lg">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Award className="w-4 h-4 text-amber-300" />
              </div>
              <span>{lang === 'hi' ? '12वीं साइंस के बाद सरकारी नौकरी' : '12th Science Govt Jobs Guide'}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              {lang === 'hi'
                ? 'यह पोर्टल 12वीं साइंस (PCM और PCB) उत्तीर्ण करने वाले विद्यार्थियों को भारतीय सेना, रेलवे, कर्मचारी चयन आयोग (SSC), पुलिस और राज्य वैज्ञानिक प्रयोगशालाओं में सटीक व प्रमाणित करियर मार्गदर्शन प्रदान करता है।'
                : 'Dedicated comprehensive career portal empowering 12th Science (PCM & PCB) pass-outs with verified insights into Armed Forces, Indian Railways, SSC, Police forces, and Scientific departments.'}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'मित्रों को शेयर करें' : 'Share Portal'}</span>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              {lang === 'hi' ? 'महत्वपूर्ण अनुभाग' : 'Key Sections'}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#pcm-vs-pcb" className="hover:text-blue-400 transition">
                  PCM vs PCB तुलना
                </a>
              </li>
              <li>
                <a href="#jobs-section" className="hover:text-blue-400 transition">
                  शीर्ष 12वीं साइंस भर्तियां
                </a>
              </li>
              <li>
                <a href="#salary-section" className="hover:text-blue-400 transition">
                  7वां वेतन आयोग सैलरी
                </a>
              </li>
              <li>
                <a href="#preparation-guide" className="hover:text-blue-400 transition">
                  6-महीने का स्टडी प्लान
                </a>
              </li>
              <li>
                <a href="#best-books" className="hover:text-blue-400 transition">
                  अनुशंसित पुस्तकें
                </a>
              </li>
              <li>
                <a href="#faqs-section" className="hover:text-blue-400 transition">
                  महत्वपूर्ण FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Portals */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              {lang === 'hi' ? 'आधिकारिक सरकारी वेबसाइटें' : 'Official Portals'}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="https://upsc.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  UPSC (NDA Exam)
                </a>
              </li>
              <li>
                <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  SSC (CHSL DEO / LDC)
                </a>
              </li>
              <li>
                <a href="https://indianrailways.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  भारतीय रेलवे (RRB)
                </a>
              </li>
              <li>
                <a href="https://joinindianarmy.nic.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  भारतीय सेना (Indian Army)
                </a>
              </li>
              <li>
                <a href="https://joinindiannavy.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  भारतीय नौसेना (Agniveer SSR)
                </a>
              </li>
              <li>
                <a href="https://agnipathvayu.cdac.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  वायु सेना अग्निवीर (Science)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Notice */}
        <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-400 leading-normal mb-8 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-200">
              {lang === 'hi' ? 'महत्वपूर्ण अस्वीकरण (Disclaimer): ' : 'Important Disclaimer: '}
            </span>
            {lang === 'hi'
              ? 'यह वेबसाइट केवल शैक्षिक एवं करियर मार्गदर्शन के उद्देश्य से तैयार की गई है। विभिन्न परीक्षाओं के नियम, आयु सीमा और रिक्तियों की संख्या में परिवर्तन हो सकता है। कृपया किसी भी पद के लिए आवेदन करने से पूर्व संबंधित आयोग (UPSC, SSC, RRB आदि) की आधिकारिक विज्ञप्ति अवश्य देखें।'
              : 'This guide is compiled for educational and informational purposes only. Notification guidelines, age rules, and vacancy counts may be revised by recruitment boards. Always verify official notifications on respective portals before submitting applications.'}
          </div>
        </div>

        {/* Bottom Copyright & Cloudflare Ready Note */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} 12वीं साइंस के बाद सरकारी नौकरी पोर्टल. All Rights Reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {lang === 'hi' ? 'Cloudflare Pages ऑप्टिमाइज़्ड' : 'Cloudflare Pages Optimized'}
            </span>
            <span>•</span>
            <span>{lang === 'hi' ? 'उच्च लोडिंग स्पीड' : 'Ultra Fast Static Build'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

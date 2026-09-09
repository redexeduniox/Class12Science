import React, { useState } from 'react';
import { Share2, MessageCircle, Send, Twitter, Facebook, Copy, Check, X } from 'lucide-react';
import { Language } from '../types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, lang }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://sarkarinaukri-12thscience.pages.dev/';
  const shareTitle = lang === 'hi' 
    ? '12वीं साइंस के बाद सरकारी नौकरी (2025-26): PCM और PCB के लिए पूरी जानकारी'
    : 'Government Jobs after 12th Science (2025-26): Complete Guide for PCM & PCB';
  const shareSummary = lang === 'hi'
    ? '12वीं साइंस के बाद NDA, SSC CHSL, रेलवे, पुलिस व तकनीकी विभागों में बेस्ट सरकारी नौकरियां, सैलरी व चयन प्रक्रिया देखें:'
    : 'Explore top Govt jobs after 12th Science in NDA, SSC CHSL, Railways, Police & Tech departments:';

  const handleCopy = () => {
    navigator.clipboard.writeText(`${shareTitle}\n${shareSummary}\n${currentUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareTitle}\n\n${shareSummary}\n${currentUrl}`)}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(currentUrl)}&hashtags=SarkariNaukri,12thScience,GovtJobs`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Share2 className="w-5 h-5" />
          </div>
          <div>
            <h3 id="share-title" className="text-lg font-bold text-slate-900 dark:text-white">
              {lang === 'hi' ? 'यह जानकारी दोस्तों के साथ शेयर करें' : 'Share this Guide with Friends'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {lang === 'hi' ? '12वीं साइंस के साथियों तक सही जानकारी पहुंचाएं' : 'Help other 12th science students find the right careers'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 transition font-medium text-sm"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600/20" />
            <span>WhatsApp</span>
          </a>

          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-sky-950/70 border border-sky-200 dark:border-sky-800 transition font-medium text-sm"
          >
            <Send className="w-5 h-5 text-sky-600" />
            <span>Telegram</span>
          </a>

          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition font-medium text-sm"
          >
            <Twitter className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            <span>Twitter (X)</span>
          </a>

          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-950/70 border border-blue-200 dark:border-blue-800 transition font-medium text-sm"
          >
            <Facebook className="w-5 h-5 text-blue-600" />
            <span>Facebook</span>
          </a>
        </div>

        <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            {lang === 'hi' ? 'लिंक कॉपी करें' : 'Copy Direct Link'}
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="flex-1 bg-slate-100 dark:bg-slate-800 px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 font-mono text-slate-600 dark:text-slate-300 select-all"
            />
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>{lang === 'hi' ? 'कॉपी हुआ!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'कॉपी' : 'Copy'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

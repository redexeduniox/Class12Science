import React from 'react';

interface AdSlotProps {
  id: string;
  type: 'leaderboard' | 'in-article' | 'sidebar' | 'bottom';
  className?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({ id, type, className = '' }) => {
  const getSlotDetails = () => {
    switch (type) {
      case 'leaderboard':
        return {
          title: 'विज्ञापन स्थान (728x90 / Responsive Leaderboard)',
          sub: 'Google AdSense / Media.net Header Banner Ad Placement',
          minHeight: 'min-h-[100px]',
          size: '728 x 90'
        };
      case 'in-article':
        return {
          title: 'विज्ञापन स्थान (In-Article Responsive Ad)',
          sub: 'Google AdSense In-Feed / In-Article Native Ad Unit',
          minHeight: 'min-h-[140px]',
          size: 'Responsive Native Ad'
        };
      case 'sidebar':
        return {
          title: 'विज्ञापन स्थान (300x250 / 300x600 Sticky)',
          sub: 'Google AdSense Sidebar Display Ad',
          minHeight: 'min-h-[260px]',
          size: '300 x 250 / 300 x 600'
        };
      case 'bottom':
        return {
          title: 'विज्ञापन स्थान (Matched Content / Footer Banner)',
          sub: 'Google AdSense Bottom Recommended Ad Unit',
          minHeight: 'min-h-[120px]',
          size: 'Responsive Banner'
        };
    }
  };

  const details = getSlotDetails();

  return (
    /* ========================================================================= */
    /* GOOGLE ADSENSE / AD PLACEMENT SLOT: ${id} (${type})                       */
    /* Replace the inner div with your actual AdSense / Ad script tag here:     */
    /* <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-..." */
    /*      data-ad-slot="..." data-ad-format="auto" data-full-width-responsive="true"></ins> */
    /* ========================================================================= */
    <div
      id={id}
      className={`w-full my-6 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-100/60 dark:bg-slate-800/40 p-3 flex flex-col items-center justify-center text-center transition-all duration-200 print:hidden ${details.minHeight} ${className}`}
      aria-label="विज्ञापन (Advertisement Space)"
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
          Advertisement
        </span>
        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
          {details.size}
        </span>
      </div>
      <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
        {details.title}
      </p>
      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
        {details.sub}
      </p>
    </div>
  );
};

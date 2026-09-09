import React, { useState, useMemo } from 'react';
import { Search, Filter, Briefcase, IndianRupee, Clock, CheckCircle, ExternalLink, Award, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { JobPost, JobStream, JobCategory, Language } from '../types';
import { JOB_POSTS_DATA } from '../data/blogData';

interface JobFilterAndCardsProps {
  lang: Language;
}

export const JobFilterAndCards: React.FC<JobFilterAndCardsProps> = ({ lang }) => {
  const [selectedStream, setSelectedStream] = useState<JobStream | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<JobCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const filteredJobs = useMemo(() => {
    return JOB_POSTS_DATA.filter((job) => {
      // Stream filter
      if (selectedStream !== 'all') {
        if (selectedStream === 'PCM' && job.stream === 'PCB') return false;
        if (selectedStream === 'PCB' && job.stream === 'PCM') return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && job.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = job.titleHi.toLowerCase().includes(query) || job.titleEn.toLowerCase().includes(query);
        const matchesDept = job.departmentHi.toLowerCase().includes(query) || job.departmentEn.toLowerCase().includes(query);
        const matchesOverview = job.overviewHi.toLowerCase().includes(query) || job.overviewEn.toLowerCase().includes(query);
        const matchesExam = job.examNameHi.toLowerCase().includes(query) || job.examNameEn.toLowerCase().includes(query);
        return matchesTitle || matchesDept || matchesOverview || matchesExam;
      }

      return true;
    });
  }, [selectedStream, selectedCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedJobId(prev => prev === id ? null : id);
  };

  return (
    <section id="jobs-section" className="scroll-mt-20 my-10">
      
      {/* Section Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
          <Briefcase className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? 'करियर लिस्टिंग 2025-26' : 'Career Directory 2025-26'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {lang === 'hi'
            ? '12वीं साइंस के बाद प्रमुख सरकारी नौकरियां (विभागवार सूची)'
            : 'Top Government Jobs after 12th Science (Sector-wise Directory)'}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">
          {lang === 'hi'
            ? 'नीचे दी गई तालिका से अपनी स्ट्रीम (PCM / PCB) और पसंदीदा विभाग के अनुसार सटीक भर्ती खोजें:'
            : 'Filter and explore verified vacancies based on your 12th stream (PCM / PCB) and department:'}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs mb-8 space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              lang === 'hi'
                ? 'पद, विभाग या परीक्षा का नाम खोजें (उदा. NDA, SSC CHSL, रेलवे, नेवी, लैब असिस्टेंट)...'
                : 'Search post, exam or department (e.g. NDA, SSC CHSL, Railway, Lab Assistant)...'
            }
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white placeholder-slate-400"
          />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
          
          {/* Stream Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              {lang === 'hi' ? 'स्ट्रीम:' : 'Stream:'}
            </span>
            <button
              onClick={() => setSelectedStream('all')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition ${
                selectedStream === 'all'
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {lang === 'hi' ? 'सभी (All)' : 'All'}
            </button>
            <button
              onClick={() => setSelectedStream('PCM')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition ${
                selectedStream === 'PCM'
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              12th PCM (Maths)
            </button>
            <button
              onClick={() => setSelectedStream('PCB')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition ${
                selectedStream === 'PCB'
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              12th PCB (Biology)
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1">
              {lang === 'hi' ? 'विभाग:' : 'Category:'}
            </span>
            {[
              { id: 'all', hi: 'सभी विभाग', en: 'All' },
              { id: 'defence', hi: 'डिफेंस (सेना)', en: 'Defence' },
              { id: 'ssc', hi: 'SSC (मंत्रालय)', en: 'SSC' },
              { id: 'railway', hi: 'रेलवे (RRB)', en: 'Railways' },
              { id: 'police', hi: 'पुलिस/फॉरेस्ट', en: 'Police/Forest' },
              { id: 'technical', hi: 'लैब/तकनीकी', en: 'Lab/Tech' },
              { id: 'medical', hi: 'मेडिकल/नर्सिंग', en: 'Medical' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as JobCategory)}
                className={`px-2.5 py-1 text-xs font-medium rounded-lg transition ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-2xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {lang === 'hi' ? cat.hi : cat.en}
              </button>
            ))}
          </div>

        </div>

        {/* Results Count */}
        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between pt-1">
          <span>
            {lang === 'hi'
              ? `कुल ${filteredJobs.length} सरकारी नौकरियां उपलब्ध`
              : `Showing ${filteredJobs.length} verified government job profiles`}
          </span>
          {(selectedStream !== 'all' || selectedCategory !== 'all' || searchQuery !== '') && (
            <button
              onClick={() => {
                setSelectedStream('all');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-blue-600 dark:text-blue-400 hover:underline text-xs font-medium"
            >
              {lang === 'hi' ? 'फ़िल्टर हटाएं (Reset Filters)' : 'Reset Filters'}
            </button>
          )}
        </div>

      </div>

      {/* Jobs Cards List */}
      <div className="space-y-6">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">
              {lang === 'hi' ? 'कोई भर्ती नहीं मिली' : 'No job matches your search criteria'}
            </p>
            <p className="text-xs text-slate-500 mb-4">
              {lang === 'hi'
                ? 'कृपया अपने सर्च कीवर्ड बदलें या सभी फ़िल्टर रीसेट करें।'
                : 'Try clearing some search terms or resetting the filter parameters.'}
            </p>
            <button
              onClick={() => {
                setSelectedStream('all');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-bold rounded-xl bg-blue-600 text-white"
            >
              {lang === 'hi' ? 'सभी नौकरियां देखें' : 'View All Jobs'}
            </button>
          </div>
        ) : (
          filteredJobs.map((job) => {
            const isExpanded = expandedJobId === job.id;

            return (
              <article
                key={job.id}
                id={`job-${job.id}`}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 shadow-xs hover:border-blue-300 dark:hover:border-blue-800 transition-all"
              >
                {/* Header Row: Badges, Title, Stream */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      {job.badge && (
                        <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                          ★ {job.badge}
                        </span>
                      )}
                      
                      <span className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full border ${
                        job.stream === 'PCM'
                          ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                          : job.stream === 'PCB'
                          ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                          : 'bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                      }`}>
                        {job.stream === 'PCM' ? '12th PCM (Maths)' : job.stream === 'PCB' ? '12th PCB (Biology)' : 'PCM & PCB दोनों'}
                      </span>

                      <span className="text-xs text-slate-500 font-medium">
                        {job.examConductingBody}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                      {lang === 'hi' ? job.titleHi : job.titleEn}
                    </h3>

                    <p className="text-xs text-blue-700 dark:text-blue-400 font-medium">
                      {lang === 'hi' ? job.departmentHi : job.departmentEn}
                    </p>
                  </div>

                  {/* Pay Level Badge */}
                  <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl px-3.5 py-2 text-right">
                    <div className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-400">
                      {lang === 'hi' ? 'शुरुआती वेतन' : 'Salary Package'}
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-emerald-800 dark:text-emerald-300">
                      {job.salaryHi.split('(')[0].replace('प्रति माह', '').trim()}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      {job.payLevel}
                    </div>
                  </div>
                </div>

                {/* Job Overview Paragraph */}
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {lang === 'hi' ? job.overviewHi : job.overviewEn}
                </p>

                {/* Core Parameters Grid: Age, Qualification, Frequency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs mb-4">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {lang === 'hi' ? 'उम्र सीमा (Age Limit): ' : 'Age Criteria: '}
                      </span>
                      <span className="text-slate-600 dark:text-slate-400">
                        {lang === 'hi' ? job.ageLimitHi : job.ageLimitEn}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {lang === 'hi' ? 'शैक्षणिक योग्यता: ' : 'Qualification: '}
                      </span>
                      <span className="text-slate-600 dark:text-slate-400">
                        {lang === 'hi' ? job.qualificationHi : job.qualificationEn}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expandable Details: Selection Process & Key Perks */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4 animate-fade-in text-xs sm:text-sm">
                    {/* Selection Steps */}
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span>{lang === 'hi' ? 'चयन प्रक्रिया के चरण (Selection Process):' : 'Selection Process Stages:'}</span>
                      </h4>
                      <ol className="list-decimal list-inside space-y-1 text-slate-700 dark:text-slate-300 ml-1">
                        {(lang === 'hi' ? job.selectionProcessHi : job.selectionProcessEn).map((step, idx) => (
                          <li key={idx} className="leading-normal">{step}</li>
                        ))}
                      </ol>
                    </div>

                    {/* Key Perks */}
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-amber-500" />
                        <span>{lang === 'hi' ? 'विशेष सुविधाएं व भत्ते (Key Perks):' : 'Key Allowances & Career Perks:'}</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {(lang === 'hi' ? job.perksHi : job.perksEn).map((perk, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium">
                            ✓ {perk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Action Footer */}
                <div className="flex items-center justify-between gap-3 pt-3 mt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => toggleExpand(job.id)}
                    className="flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition"
                  >
                    <span>
                      {isExpanded
                        ? (lang === 'hi' ? 'विवरण छुपाएं' : 'Hide Details')
                        : (lang === 'hi' ? 'चयन प्रक्रिया व सुविधाएं देखें' : 'View Selection Stages & Perks')}
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <a
                    href={job.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 transition border border-slate-200 dark:border-slate-700"
                  >
                    <span>{lang === 'hi' ? 'आधिकारिक पोर्टल' : 'Official Portal'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </article>
            );
          })
        )}
      </div>

    </section>
  );
};

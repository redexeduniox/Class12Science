export type Language = 'hi' | 'en';

export type JobStream = 'PCM' | 'PCB' | 'Both';

export type JobCategory = 'all' | 'defence' | 'ssc' | 'railway' | 'police' | 'technical' | 'medical';

export interface JobPost {
  id: string;
  titleHi: string;
  titleEn: string;
  stream: JobStream;
  departmentHi: string;
  departmentEn: string;
  category: Exclude<JobCategory, 'all'>;
  ageLimitHi: string;
  ageLimitEn: string;
  qualificationHi: string;
  qualificationEn: string;
  salaryHi: string;
  salaryEn: string;
  payLevel: string;
  selectionProcessHi: string[];
  selectionProcessEn: string[];
  examNameHi: string;
  examNameEn: string;
  examConductingBody: string;
  frequencyHi: string;
  frequencyEn: string;
  overviewHi: string;
  overviewEn: string;
  perksHi: string[];
  perksEn: string[];
  badge?: string;
  officialUrl: string;
}

export interface FaqItem {
  questionHi: string;
  questionEn: string;
  answerHi: string;
  answerEn: string;
}

export interface ComparisonItem {
  featureHi: string;
  featureEn: string;
  pcmHi: string;
  pcmEn: string;
  pcbHi: string;
  pcbEn: string;
}

export interface BookRecommendation {
  subjectHi: string;
  subjectEn: string;
  bookNameHi: string;
  bookNameEn: string;
  authorOrPublisherHi: string;
  authorOrPublisherEn: string;
  whyReadHi: string;
  whyReadEn: string;
}

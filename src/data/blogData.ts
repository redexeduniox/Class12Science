import { JobPost, FaqItem, ComparisonItem, BookRecommendation } from '../types';

export const JOB_POSTS_DATA: JobPost[] = [
  {
    id: 'nda-officer',
    titleHi: 'राष्ट्रीय रक्षा अकादमी (NDA) - थल सेना, नौसेना और वायु सेना अधिकारी',
    titleEn: 'National Defence Academy (NDA) - Army, Navy & Air Force Officer',
    stream: 'Both',
    departmentHi: 'संघ लोक सेवा आयोग (UPSC) / रक्षा मंत्रालय',
    departmentEn: 'Union Public Service Commission (UPSC) / Ministry of Defence',
    category: 'defence',
    ageLimitHi: '16.5 से 19.5 वर्ष (अविवाहित पुरुष एवं महिला)',
    ageLimitEn: '16.5 to 19.5 Years (Unmarried Male & Female)',
    qualificationHi: 'सेना के लिए 12वीं पास (किसी भी विषय); वायु सेना एवं नौसेना के लिए 12वीं में भौतिकी (Physics) और गणित (Maths) अनिवार्य',
    qualificationEn: '12th Pass for Army; 12th with Physics & Maths compulsory for Air Force & Navy',
    salaryHi: '₹56,100 से ₹1,77,500 प्रति माह (पे लेवल 10) + मिलिट्री सर्विस पे (MSP) ₹15,500',
    salaryEn: '₹56,100 to ₹1,77,500 per month (Pay Level 10) + MSP ₹15,500',
    payLevel: 'Pay Level 10 (राजपत्रित क्लास-1 अधिकारी)',
    selectionProcessHi: [
      'लिखित परीक्षा (UPSC द्वारा गणित - 300 अंक, GAT - 600 अंक)',
      '5 दिवसीय SSB साक्षात्कार (Service Selection Board - 900 अंक)',
      'विस्तृत मेडिकल परीक्षण (Medical Fitness)',
      'अंतिम मेरिट सूची एवं 3 वर्ष खड़कवासला में प्रशिक्षण'
    ],
    selectionProcessEn: [
      'Written Examination (UPSC Maths: 300 marks, GAT: 600 marks)',
      '5-Day SSB Interview (900 marks)',
      'Comprehensive Medical Examination',
      'Final All India Merit List & 3-year Training at NDA Pune'
    ],
    examNameHi: 'NDA & NA परीक्षा (वर्ष में 2 बार - अप्रैल और सितंबर)',
    examNameEn: 'NDA & NA Examination (Twice a year - April & September)',
    examConductingBody: 'UPSC',
    frequencyHi: 'वर्ष में 2 बार (NDA-I और NDA-II)',
    frequencyEn: 'Twice a year (NDA-I & NDA-II)',
    overviewHi: '12वीं साइंस (खासकर PCM) के छात्रों के लिए भारत की सबसे प्रतिष्ठित और गर्वित क्लास-1 गजटेड ऑफिसर बनने की नौकरी है। ट्रेनिंग पूरा होते ही भारतीय सेना में सीधे लेफ्टिनेंट, नेवी में सब-लेफ्टिनेंट या एयरफोर्स में फ्लाइंग ऑफिसर पद मिलता है।',
    overviewEn: 'The most prestigious Class-1 Gazetted Officer job in India for 12th Science students. Straight commission as Lieutenant in Army, Sub-Lieutenant in Navy, or Flying Officer in Air Force upon training completion.',
    perksHi: ['आजीवन पेंशन व ईसीएचएस मेडिकल', 'मुफ्त आवास व कैंटीन (Canteen) सुविधा', 'अधिकारी स्तर का सम्मान और वैश्विक एक्सप्लोरेशन'],
    perksEn: ['Lifetime Defence Pension & Medical', 'Free Govt Accommodation & CSD Canteen', 'Class-1 Officer status and leadership'],
    badge: 'सबसे प्रतिष्ठित (Top Pick)',
    officialUrl: 'https://upsc.gov.in'
  },
  {
    id: 'navy-agniveer-ssr',
    titleHi: 'भारतीय नौसेना अग्निवीर (SSR - सीनियर सेकेंडरी रिक्रूट)',
    titleEn: 'Indian Navy Agniveer (SSR - Senior Secondary Recruit)',
    stream: 'PCM',
    departmentHi: 'भारतीय नौसेना (Indian Navy)',
    departmentEn: 'Indian Navy',
    category: 'defence',
    ageLimitHi: '17.5 से 21 वर्ष',
    ageLimitEn: '17.5 to 21 Years',
    qualificationHi: 'मान्यता प्राप्त बोर्ड से 12वीं पास (गणित और भौतिकी अनिवार्य, साथ में केमिस्ट्री/बायोलॉजी/कंप्यूटर)',
    qualificationEn: '12th Pass with Mathematics & Physics compulsory, plus Chemistry/Biology/Computer Science',
    salaryHi: 'प्रथम वर्ष ₹30,000 (इन-हैंड ₹21,000 + सेवानिधि), चौथे वर्ष ₹40,000 तक + ₹11.71 लाख सेवा निधि पैकेज',
    salaryEn: 'Year 1 ₹30,000/mo (In-hand ₹21,000 + Seva Nidhi), up to ₹40,000/mo + ₹11.71 Lakh Seva Nidhi',
    payLevel: 'Agniveer Pay Scale + Seva Nidhi Package',
    selectionProcessHi: [
      'कंप्यूटर आधारित ऑनलाइन परीक्षा (INET - 100 प्रश्न)',
      'शारीरिक दक्षता परीक्षा (PFT - 1.6 किमी दौड़, उठक-बैठक, पुश-अप)',
      'दस्तावेज़ सत्यापन और अंतिम मेडिकल'
    ],
    selectionProcessEn: [
      'Computer Based Online Test (INET - 100 questions)',
      'Physical Fitness Test (1.6 km run, squats, push-ups)',
      'Document Verification and Final Medical at INS Chilka'
    ],
    examNameHi: 'Indian Navy Agniveer SSR Recruitment',
    examNameEn: 'Indian Navy Agniveer SSR Recruitment',
    examConductingBody: 'Indian Navy',
    frequencyHi: 'वर्ष में 2 बार',
    frequencyEn: 'Twice a year',
    overviewHi: 'समुद्र में देश की रक्षा करने के शौकीन साइंस छात्रों के लिए उत्तम अवसर। युद्धपोतों, सबमरीन और नेवल एयर स्टेशनों पर तकनीकी सिस्टम, रडार, हथियार और संचार उपकरणों को संचालित करने का कार्य मिलता है। 25% को स्थायी कैडर में नियमित किया जाता है।',
    overviewEn: 'Top technical career on naval warships, submarines, and naval air stations handling radars, communications, and electronic weapons. 25% candidates retained into permanent service.',
    perksHi: ['₹48 लाख का गैर-अंशदायी जीवन बीमा', 'कौशल प्रमाण पत्र (Skill Certificate)', 'सी-डाइविंग और विशेष भत्ते'],
    perksEn: ['₹48 Lakh Non-contributory Life Insurance', 'Skill Certificate for future corporate/defence recruitment', 'Sea Diving and Hardship Allowances'],
    badge: 'टेक्निकल डिफेंस जॉब',
    officialUrl: 'https://joinindiannavy.gov.in'
  },
  {
    id: 'air-force-agniveer-science',
    titleHi: 'भारतीय वायु सेना अग्निवीर वायु (साइंस सब्जेक्ट्स - टेक्निकल)',
    titleEn: 'Indian Air Force Agniveer Vayu (Science Subjects - Technical)',
    stream: 'PCM',
    departmentHi: 'भारतीय वायु सेना (Indian Air Force)',
    departmentEn: 'Indian Air Force',
    category: 'defence',
    ageLimitHi: '17.5 से 21 वर्ष',
    ageLimitEn: '17.5 to 21 Years',
    qualificationHi: '12वीं में गणित, भौतिकी और अंग्रेजी में न्यूनतम 50% कुल अंक तथा अंग्रेजी में कम से कम 50% अंक',
    qualificationEn: '12th with Maths, Physics & English with min 50% aggregate and 50% marks in English',
    salaryHi: '₹30,000 से ₹40,000 प्रति माह + ₹11.71 लाख कर-मुक्त सेवा निधि + भत्ते',
    salaryEn: '₹30,000 to ₹40,000/mo + ₹11.71 Lakh Tax-Free Seva Nidhi + Allowances',
    payLevel: 'Air Force Agniveer Scale',
    selectionProcessHi: [
      'ऑनलाइन फेज-1 परीक्षा (अंग्रेजी, भौतिकी, गणित - 70 प्रश्न 60 मिनट)',
      'फेज-2 शारीरिक परीक्षण (1.6 किमी दौड़, सिट-अप्स, पुश-अप्स)',
      'अनुकूलनशीलता परीक्षण (Adaptability Test I & II)',
      'मेडिकल परीक्षण'
    ],
    selectionProcessEn: [
      'Online Phase-1 Exam (English, Physics, Maths - 70 questions 60 min)',
      'Phase-2 Physical Fitness Test (PFT)',
      'Adaptability Test I & II (Psychological evaluation)',
      'Comprehensive Medical Examination'
    ],
    examNameHi: 'Agniveer Vayu Intake Examination',
    examNameEn: 'Agniveer Vayu Intake Examination',
    examConductingBody: 'IAF (CASB)',
    frequencyHi: 'वर्ष में 2 बार',
    frequencyEn: 'Twice a year',
    overviewHi: 'आधुनिक लड़ाकू विमानों (जैसे राफेल, सुखोई, मिराज), मिसाइल सिस्टम और एवियोनिक्स रडार की तकनीकी देखरेख का काम करने का मौका। 12वीं पीसीएम वालों के लिए वायु सेना में तकनीकी विशेषज्ञ बनने का यह सीधा रास्ता है।',
    overviewEn: 'Hands-on technical maintenance of advanced fighter jets (Rafale, Sukhoi), radar stations, and aviation avionics systems. Direct gateway into military aviation for 12th PCM pass-outs.',
    perksHi: ['फ्लाइंग स्टेशनों पर पोस्टिंग', 'अत्याधुनिक एवियोनिक्स ट्रेनिंग', 'सीएपीएफ/पुलिस में 10% आरक्षण'],
    perksEn: ['Postings across premier IAF airbases', 'State-of-the-art avionics training', '10% quota reservation in CAPF & State police'],
    badge: 'हाई-डिमांड',
    officialUrl: 'https://agnipathvayu.cdac.in'
  },
  {
    id: 'ssc-chsl-deo',
    titleHi: 'SSC CHSL - डाटा एंट्री ऑपरेटर (DEO ग्रेड ‘A’ - CAG व मंत्रालय)',
    titleEn: 'SSC CHSL - Data Entry Operator (DEO Grade A - CAG & Ministries)',
    stream: 'PCM',
    departmentHi: 'कर्मचारी चयन आयोग (SSC) / नियंत्रक एवं महालेखापरीक्षक (CAG)',
    departmentEn: 'Staff Selection Commission (SSC) / Comptroller & Auditor General (CAG)',
    category: 'ssc',
    ageLimitHi: '18 से 27 वर्ष (OBC को 3 वर्ष, SC/ST को 5 वर्ष छूट)',
    ageLimitEn: '18 to 27 Years (3 yrs relaxation for OBC, 5 yrs for SC/ST)',
    qualificationHi: 'मान्यता प्राप्त बोर्ड से 12वीं साइंस स्ट्रीम में गणित (Mathematics) विषय के साथ उत्तीर्ण होना अनिवार्य',
    qualificationEn: '12th Standard pass in Science stream with Mathematics from a recognized Board',
    salaryHi: '₹25,500 से ₹81,100 (पे लेवल 4) या ₹29,200 से ₹92,300 (पे लेवल 5) + डीए, एचआरए, टीए (कुल इन-हैंड ₹45,000+)',
    salaryEn: '₹25,500 to ₹81,100 (Level 4) or ₹29,200 to ₹92,300 (Level 5) + DA, HRA, TA (In-hand ₹45,000+)',
    payLevel: 'Pay Level 4 & Pay Level 5',
    selectionProcessHi: [
      'टियर-1 कंप्यूटर आधारित परीक्षा (रीजनिंग, क्वांट, इंग्लिश, जनरल अवेयरनेस)',
      'टियर-2 मुख्य परीक्षा (मैथ्स, रीजनिंग, इंग्लिश, जीए + कंप्यूटर ज्ञान टेस्ट)',
      'स्किल टेस्ट / टाइपिंग टेस्ट (प्रति घंटे 15,000 की डिप्रेशन साइंस डीईओ के लिए)',
      'दस्तावेज़ सत्यापन'
    ],
    selectionProcessEn: [
      'Tier-1 CBT (Reasoning, Quantitative Aptitude, English, GA)',
      'Tier-2 Mains (Maths, Reasoning, English, GA + Computer Module)',
      'Data Entry Skill Test (15,000 key depressions per hour for CAG DEO)',
      'Document Verification'
    ],
    examNameHi: 'Combined Higher Secondary Level (CHSL) Examination',
    examNameEn: 'Combined Higher Secondary Level (CHSL) Examination',
    examConductingBody: 'SSC',
    frequencyHi: 'प्रत्येक वर्ष (वार्षिक कैलेंडर)',
    frequencyEn: 'Annually as per SSC Calendar',
    overviewHi: '12वीं साइंस और गणित के छात्रों के लिए केंद्र सरकार के सबसे बड़े मंत्रालयों (CAG, रक्षा मंत्रालय, वित्त मंत्रालय) में एक प्रतिष्ठित डेस्क जॉब। इसमें बिना ग्रेजुएशन के ही लेवल-5 (लगभग ₹50,000 इन-हैंड सैलरी) पाने का अवसर मिलता है।',
    overviewEn: 'Top-tier central government desk job exclusively requiring 12th Science with Mathematics. Excellent work-life balance, metro postings, and fast promotions to Senior Data Entry Officer/Auditor.',
    perksHi: ['5 दिवसीय कार्य सप्ताह (सोम-शुक्र)', 'केंद्रीय सरकारी स्वास्थ्य योजना (CGHS)', 'समयबद्ध पदोन्नति (Senior Accountant/Officer)'],
    perksEn: ['5-day work week (Monday to Friday)', 'CGHS Medical Scheme for whole family', 'Time-bound promotions to Gazetted posts'],
    badge: 'सर्वश्रेष्ठ डेस्क जॉब',
    officialUrl: 'https://ssc.gov.in'
  },
  {
    id: 'railway-technician-grade3',
    titleHi: 'रेलवे आरआरबी टेक्नीशियन ग्रेड-III (सिग्नल एवं टेलीकॉम - S&T)',
    titleEn: 'Railway RRB Technician Grade-III (Signal & Telecom - S&T)',
    stream: 'PCM',
    departmentHi: 'रेलवे भर्ती बोर्ड (RRB) / भारतीय रेल',
    departmentEn: 'Railway Recruitment Boards (RRB) / Ministry of Railways',
    category: 'railway',
    ageLimitHi: '18 से 33 वर्ष (नियमानुसार छूट उपलब्ध)',
    ageLimitEn: '18 to 33 Years (Relaxations applicable)',
    qualificationHi: 'भौतिकी और गणित (Physics & Maths) के साथ 10+2 (12वीं साइंस) अथवा संबंधित ट्रेड में आईटीआई',
    qualificationEn: '10+2 with Physics and Mathematics (PCM) from recognized board OR ITI in relevant trade',
    salaryHi: '₹19,900 मूल वेतन (पे लेवल 2) + डीए, एचआरए, नाइट ड्यूटी अलाउंस, रनिंग अलाउंस (कुल इन-हैंड ₹32,000 से ₹38,000)',
    salaryEn: '₹19,900 Basic (Level 2) + DA, HRA, Night Duty, Travel allowances (In-hand ₹32,000 - ₹38,000)',
    payLevel: 'Pay Level 2 (7th CPC)',
    selectionProcessHi: [
      'कंप्यूटर आधारित टेस्ट (CBT - सामान्य विज्ञान, गणित, रीजनिंग, करंट अफेयर्स)',
      'दस्तावेज़ सत्यापन (DV)',
      'मेडिकल फिटनेस टेस्ट (विशेषकर A-3 या B-1 दृष्टि मानक)'
    ],
    selectionProcessEn: [
      'Computer Based Test (CBT - Science, Maths, Reasoning, General Awareness)',
      'Document Verification',
      'Railway Medical Fitness Test (A-3/B-1 vision standards)'
    ],
    examNameHi: 'RRB Technician Centralised Employment Notice (CEN)',
    examNameEn: 'RRB Technician Centralised Employment Notice (CEN)',
    examConductingBody: 'RRB',
    frequencyHi: 'वार्षिक आधार पर प्रस्तावित',
    frequencyEn: 'Annually under new RRB calendar',
    overviewHi: 'अधिकांश रेलवे टेक्नीशियन पदों पर ITI अनिवार्य होता है, लेकिन सिग्नल एवं टेलीकॉम (S&T) श्रेणी में 12वीं PCM के छात्र सीधे आवेदन कर सकते हैं। भारतीय रेलवे के स्वचालित सिग्नल, ऑप्टिकल फाइबर और इलेक्ट्रॉनिक इंटरलॉकिंग सिस्टम की निगरानी का काम होता है।',
    overviewEn: 'A rare railway technical post where 12th PCM students are eligible without ITI. Manages cutting-edge railway signalling, optical fiber systems, and electronic train route operations.',
    perksHi: ['मुफ्त रेलवे पास (ऑल इंडिया एसी यात्रा)', 'रेलवे कॉलोनी आवास एवं अस्पताल सुविधा', 'सुरक्षित सरकारी सेवा एवं पेंशन फंड'],
    perksEn: ['Complimentary All-India AC Railway Travel Passes', 'Railway colony quarters and specialized hospitals', 'Secure Central Govt service with NPS'],
    badge: '12th PCM के लिए रेलवे में अवसर',
    officialUrl: 'https://indianrailways.gov.in'
  },
  {
    id: 'delhi-police-hc-awo-tpo',
    titleHi: 'दिल्ली पुलिस हेड कांस्टेबल (AWO/TPO - वायरलेस ऑपरेटर)',
    titleEn: 'Delhi Police Head Constable (AWO/TPO - Wireless Operator)',
    stream: 'PCM',
    departmentHi: 'दिल्ली पुलिस / गृह मंत्रालय (SSC द्वारा परीक्षा)',
    departmentEn: 'Delhi Police / Ministry of Home Affairs (via SSC)',
    category: 'police',
    ageLimitHi: '18 से 27 वर्ष',
    ageLimitEn: '18 to 27 Years',
    qualificationHi: '12वीं साइंस स्ट्रीम में गणित (Science with Mathematics) के साथ उत्तीर्ण होना अनिवार्य',
    qualificationEn: '12th pass in Science stream with Mathematics subjects',
    salaryHi: '₹25,500 से ₹81,100 (पे लेवल 4) + दिल्ली के अनुसार 30% एचआरए (इन-हैंड ₹45,000+ प्रति माह)',
    salaryEn: '₹25,500 to ₹81,100 (Level 4) + Delhi 30% HRA (In-hand ₹45,000+/month)',
    payLevel: 'Pay Level 4 (Group C)',
    selectionProcessHi: [
      'कंप्यूटर आधारित ऑनलाइन परीक्षा (100 अंक - 100 प्रश्न)',
      'शारीरिक सहनशक्ति एवं माप परीक्षण (PE&MT)',
      'ट्रेड टेस्ट (डिक्टेशन टेस्ट व रीडिंग टेस्ट)',
      'कंप्यूटर फॉर्मेटिंग टेस्ट एवं मेडिकल'
    ],
    selectionProcessEn: [
      'Computer Based Test (100 Marks - Physics, Maths, Reasoning, English, Computer)',
      'Physical Endurance & Measurement Test (PE&MT)',
      'Trade Test (Dictation & Hindi/English reading)',
      'Computer Proficiency Test & Medical'
    ],
    examNameHi: 'Delhi Police Head Constable (AWO/TPO) Exam',
    examNameEn: 'Delhi Police Head Constable (AWO/TPO) Exam',
    examConductingBody: 'SSC / Delhi Police',
    frequencyHi: 'प्रत्येक 1-2 वर्ष में',
    frequencyEn: 'Every 1-2 years',
    overviewHi: 'यह सामान्य सिपाही की तरह पेट्रोलिंग या धूप में खड़े रहने वाली नौकरी नहीं है। यह पुलिस कंट्रोल रूम और वायरलेस स्टेशन पर बैठकर वॉकी-टॉकी, सैटेलाइट कम्यूनिकेशन और जीपीएस नेटवर्क संभालने वाली आरामदायक व तकनीकी नौकरी है।',
    overviewEn: 'A specialized technical police desk post operating control-room wireless, radar-linked mobile data terminals, and encryption comms in India’s capital city.',
    perksHi: ['दिल्ली में स्थायी पोस्टिंग (कोई ऑल इंडिया ट्रांसफर नहीं)', 'वर्दी भत्ता एवं साल में 13 महीने का वेतन', 'राजधानी में उत्कृष्ट आवास सुविधाएं'],
    perksEn: ['Permanent Delhi posting (no cross-country transfers)', 'Uniform allowance + 13th month salary bonus', 'Premier central capital medical & housing'],
    badge: '12th PCM विशिष्ट पुलिस भर्ती',
    officialUrl: 'https://delhipolice.gov.in'
  },
  {
    id: 'lab-assistant-state',
    titleHi: 'प्रयोगशाला सहायक (Lab Assistant - स्कूल, कॉलेज एवं फोरेंसिक)',
    titleEn: 'Lab Assistant (Schools, Higher Education & Forensic Labs)',
    stream: 'Both',
    departmentHi: 'विभिन्न राज्य चयन आयोग (RSMSSB, UPSSSC, HSSC, BSSC आदि)',
    departmentEn: 'State Staff Selection Boards (RSMSSB, UPSSSC, BSSC, UKSSSC etc.)',
    category: 'technical',
    ageLimitHi: '18 से 40 वर्ष (राज्यों के अनुसार छूट)',
    ageLimitEn: '18 to 40 Years (State relaxation applicable)',
    qualificationHi: '12वीं साइंस (पीसीएम या पीसीबी - भौतिकी, रसायन विज्ञान, जीव विज्ञान/गणित में से कोई 3 विषय)',
    qualificationEn: '12th Science (PCM or PCB - with any 3 subjects among Physics, Chemistry, Biology, Maths)',
    salaryHi: '₹20,800 से ₹65,900 (पे मैट्रिक्स लेवल 8 या ग्रेड पे 2800) + राज्य भत्ते (इन-हैंड ₹30,000 से ₹38,000)',
    salaryEn: '₹20,800 to ₹65,900 (Pay Level 8 / GP 2800) + State Allowances (In-hand ₹30,000 - ₹38,000)',
    payLevel: 'State Pay Level 8 / Grade Pay ₹2800',
    selectionProcessHi: [
      'लिखित प्रतियोगी परीक्षा (पेपर-1: सामान्य ज्ञान, पेपर-2: 12वीं स्तर की साइंस - PCB/PCM)',
      'मेरिट लिस्ट एवं दस्तावेज सत्यापन'
    ],
    selectionProcessEn: [
      'Written Competitive Exam (Paper 1: GK & State GK; Paper 2: 12th Level Science PCB/PCM)',
      'Merit Ranking & Document Verification'
    ],
    examNameHi: 'राज्य प्रयोगशाला सहायक संयुक्त सीधी भर्ती',
    examNameEn: 'State Laboratory Assistant Joint Recruitment',
    examConductingBody: 'State Staff Selection Commissions (e.g., RSMSSB, UPSSSC)',
    frequencyHi: 'नियमित अंतराल पर',
    frequencyEn: 'Regular state vacancy intervals',
    overviewHi: 'बायोलॉजी (PCB) और मैथ्स (PCM) दोनों तरह के साइंस छात्रों के लिए सबसे तनावमुक्त और शांतिपूर्ण सरकारी नौकरी। सरकारी स्कूलों, कृषि विश्वविद्यालयों या फोरेंसिक साइंस प्रयोगशालाओं में प्रैक्टिकल और उपकरणों के रखरखाव का कार्य होता है।',
    overviewEn: 'One of the most peaceful and zero-stress government jobs available for both PCB & PCM candidates. Work involves laboratory equipment care in govt colleges, universities, and state forensics.',
    perksHi: ['रविवार एवं सभी सरकारी/स्कूल छुट्टियां उपलब्ध', 'गृह जिले में या नजदीकी क्षेत्र में पोस्टिंग', 'अतिरिक्त पढ़ाई (ग्रेजुएशन/UPSC) का पूरा समय'],
    perksEn: ['School & academic calendar vacations', 'Home district posting probability', 'Ample free time for higher education/civil prep'],
    badge: 'PCB और PCM दोनों के लिए उपयुक्त',
    officialUrl: 'https://rsmssb.rajasthan.gov.in'
  },
  {
    id: 'forest-guard-vanrakshak',
    titleHi: 'वनरक्षक एवं फॉरेस्टर (Forest Guard / Vanrakshak)',
    titleEn: 'Forest Guard / Forester (State Forest Departments)',
    stream: 'Both',
    departmentHi: 'पर्यावरण एवं वन विभाग (विभिन्न राज्य सरकारें)',
    departmentEn: 'Department of Environment & Forests (State Governments)',
    category: 'police',
    ageLimitHi: '18 से 28 वर्ष (आरक्षित वर्ग को 3 से 5 वर्ष छूट)',
    ageLimitEn: '18 to 28 Years (Relaxations applicable)',
    qualificationHi: 'मान्यता प्राप्त बोर्ड से 12वीं पास (साइंस और बायोलॉजी के छात्रों को विशेष प्राथमिकता/अंक)',
    qualificationEn: '12th Pass from recognized board (Special priority/marks for Science & Biology students)',
    salaryHi: '₹19,900 से ₹63,200 (पे लेवल 2 / 3) + स्पेशल ड्यूटी अलाउंस (इन-हैंड ₹28,000 से ₹34,000)',
    salaryEn: '₹19,900 to ₹63,200 (Level 2/3) + Special Forest Allowances (In-hand ₹28,000 - ₹34,000)',
    payLevel: 'Pay Level 2 / Level 3',
    selectionProcessHi: [
      'लिखित परीक्षा (पर्यावरण, सामान्य विज्ञान, गणित व सामान्य ज्ञान)',
      'शारीरिक दक्षता परीक्षा (पैदल चाल: पुरुषों के लिए 25 किमी, महिलाओं के लिए 14 किमी)',
      'शारीरिक माप (लंबाई व सीना) एवं मेडिकल'
    ],
    selectionProcessEn: [
      'Written Examination (Environmental Science, General Science, Maths, GK)',
      'Physical Endurance Walk (25 km for males in 4 hrs, 14 km for females)',
      'Physical Standards & Medical'
    ],
    examNameHi: 'राज्य वनरक्षक सीधी भर्ती परीक्षा',
    examNameEn: 'State Forest Guard Direct Recruitment Examination',
    examConductingBody: 'State Subordinate Selection Boards',
    frequencyHi: 'वार्षिक / द्विवार्षिक',
    frequencyEn: 'Annual / Biennial',
    overviewHi: 'प्रकृति, वन्यजीव और पर्यावरण से लगाव रखने वाले 12वीं बायोलॉजी व साइंस छात्रों के लिए बेहतरीन वर्दी वाली सरकारी नौकरी। राष्ट्रीय उद्यानों, अभयारण्यों और वन क्षेत्रों की सुरक्षा का दायित्व होता है।',
    overviewEn: 'Uniformed service job ideal for science and biology enthusiasts guarding wildlife reserves, national parks, and bio-diversity hotspots with government power and quarters.',
    perksHi: ['वर्दी एवं सरकारी आवास सुविधा', 'प्रकृति के बीच प्रदूषण मुक्त कार्यस्थल', 'प्रमोशन होकर फॉरेस्टर और रेंजर बनने का अवसर'],
    perksEn: ['Uniform, govt accommodation in lush reserves', 'Pollution-free working environment', 'Fast-track promotion path to Forester & Ranger'],
    badge: 'वर्दी वाली नौकरी',
    officialUrl: 'https://moef.gov.in'
  },
  {
    id: 'railway-ntpc-undergraduate',
    titleHi: 'रेलवे आरआरबी एनटीपीसी (अंडरग्रेजुएट स्तर - क्लर्क, टाइपिस्ट, कमर्शियल)',
    titleEn: 'Railway RRB NTPC (Undergraduate - Junior Clerk, Accounts Clerk, Trains Clerk)',
    stream: 'Both',
    departmentHi: 'रेलवे भर्ती बोर्ड (RRB)',
    departmentEn: 'Railway Recruitment Boards (RRB)',
    category: 'railway',
    ageLimitHi: '18 से 30 वर्ष',
    ageLimitEn: '18 to 30 Years',
    qualificationHi: '12वीं कक्षा में कम से कम 50% अंकों के साथ उत्तीर्ण (SC/ST के लिए केवल उत्तीर्ण)',
    qualificationEn: '12th (+2 stage) with not less than 50% marks in aggregate (Passing marks for SC/ST)',
    salaryHi: '₹19,900 से ₹63,200 (लेवल 2) या ₹21,700 से ₹69,100 (लेवल 3) + भत्ते (इन-हैंड ₹32,000 से ₹40,000)',
    salaryEn: '₹19,900 to ₹63,200 (Level 2) or ₹21,700 to ₹69,100 (Level 3) + Perks (In-hand ₹32k - ₹40k)',
    payLevel: 'Pay Level 2 & Level 3',
    selectionProcessHi: [
      'प्रथम चरण CBT (100 प्रश्न: गणित, रीजनिंग, सामान्य जागरूकता)',
      'द्वितीय चरण CBT (120 प्रश्न: उन्नत स्तर)',
      'टाइपिंग स्किल टेस्ट (क्लर्क पदों के लिए)',
      'दस्तावेज़ सत्यापन एवं मेडिकल'
    ],
    selectionProcessEn: [
      '1st Stage CBT (100 Questions: Maths, General Intelligence, GA)',
      '2nd Stage CBT (120 Questions)',
      'Computer Based Typing Skill Test (for clerk posts)',
      'Document Verification & Medical'
    ],
    examNameHi: 'RRB NTPC (Undergraduate Posts) Notification',
    examNameEn: 'RRB NTPC (Undergraduate Posts) Notification',
    examConductingBody: 'RRB',
    frequencyHi: 'रेलवे वार्षिक परीक्षा कैलेंडर अनुसार',
    frequencyEn: 'As per annual RRB Recruitment Calendar',
    overviewHi: 'रेलवे स्टेशनों और संभागीय कार्यालयों में टिकट जारी करने, कमर्शियल अकाउंटिंग और ट्रेनों के मूवमेंट रिकॉर्ड का काम। साइंस के छात्रों की मैथ्स और लॉजिकल रीजनिंग मजबूत होने के कारण वे इस परीक्षा में भारी कटऑफ आसानी से निकाल लेते हैं।',
    overviewEn: 'Ticket checking, train manifest keeping, and accounts clerk posts across Indian Railways divisions. Science students have an inherent quantitative edge in clearing these high-scoring exams.',
    perksHi: ['ऑल इंडिया रेलवे फ्री पास', 'बोनस (दिवाली पर ₹17,951+ प्रोडक्टिविटी लिंक्ड बोनस)', 'कैंटीन व रेलवे स्पोर्ट्स क्लब सदस्यता'],
    perksEn: ['All-India Free Rail Pass for family', 'Annual Railway Performance Linked Bonus (~₹18,000)', 'Rail medical and housing perks'],
    badge: 'लोकप्रिय भर्ती',
    officialUrl: 'https://rrbcdg.gov.in'
  },
  {
    id: 'paramedical-nursing-pcb',
    titleHi: 'मिलिट्री नर्सिंग व पैरामेडिकल स्टाफ (12th PCB स्पेशल)',
    titleEn: 'Military Nursing Service (MNS) & Paramedical Govt Staff',
    stream: 'PCB',
    departmentHi: 'भारतीय सशस्त्र बल चिकित्सा सेवा (AFMS) / राज्य स्वास्थ्य विभाग',
    departmentEn: 'Armed Forces Medical Services (AFMS) / State Health Departments',
    category: 'medical',
    ageLimitHi: '17 से 25 वर्ष',
    ageLimitEn: '17 to 25 Years',
    qualificationHi: '12वीं में भौतिकी, रसायन, जीव विज्ञान (PCB) और अंग्रेजी में न्यूनतम 50% अंक',
    qualificationEn: '12th with Physics, Chemistry, Biology (PCB) & English with minimum 50% aggregate marks',
    salaryHi: 'ट्रेनिंग उपरांत सीधे लेफ्टिनेंट रैंक पर ₹56,100 (लेवल 10) + एमएसपी ₹15,500 प्रति माह',
    salaryEn: 'Post training straight Lieutenant rank at ₹56,100 (Level 10) + MSP ₹15,500/month',
    payLevel: 'Pay Level 10 (MNS Officers) / Level 4-6 (Paramedical)',
    selectionProcessHi: [
      'NEET-UG स्कोर के आधार पर शॉर्टलिस्टिंग',
      'कंप्यूटर आधारित टेस्ट (ToGIGE - जनरल इंटेलिजेंस व जनरल इंग्लिश)',
      'साइकोलॉजिकल असेसमेंट एवं पर्सनल इंटरव्यू',
      'विशेष मेडिकल बोर्ड परीक्षण'
    ],
    selectionProcessEn: [
      'Shortlisting based on NEET-UG scores',
      'CBT Test of General Intelligence & General English (ToGIGE)',
      'Psychological Assessment & Personal Interview',
      'Medical Board Examination'
    ],
    examNameHi: 'Military Nursing Service (MNS) B.Sc. Nursing Course Entrance',
    examNameEn: 'Military Nursing Service (MNS) B.Sc. Nursing Course Entrance',
    examConductingBody: 'Indian Army / NTA',
    frequencyHi: 'वर्ष में एक बार (वार्षिक)',
    frequencyEn: 'Once a year (Annual)',
    overviewHi: '12वीं बायोलॉजी (PCB) की छात्राओं के लिए भारतीय सेना में सीधे क्लास-1 ऑफिसर बनने का सुनहरा अवसर। 4 साल की फ्री डिग्री, हॉस्टल व स्टाइपेंड मिलता है और पास होते ही सेना में कैप्टन/मेजर तक पदोन्नति मिलती है।',
    overviewEn: 'Unmatched officer-cadre medical pathway for female PCB students. Free 4-year degree education with stipend and direct commission as Lieutenant in Indian Military Hospitals.',
    perksHi: ['सैन्य अधिकारी का दर्जा व सैल्यूट', 'निःशुल्क 4-वर्षीय डिग्री व हॉस्टल', 'विदेशों में यूएन पीसकीपिंग मिशन तैनाती अवसर'],
    perksEn: ['Military officer status and insignia', 'Free 4-year premier nursing degree with stipend', 'United Nations peacekeeping deployment options'],
    badge: '12th PCB छात्राओं के लिए सर्वश्रेष्ठ',
    officialUrl: 'https://joinindianarmy.nic.in'
  },
  {
    id: 'isro-drdo-technician',
    titleHi: 'इसरो (ISRO) एवं डीआरडीओ (DRDO) - तकनीकी प्रशिक्षु एवं ऑपरेटर',
    titleEn: 'ISRO & DRDO Technical Apprenticeship & Junior Technical Assistants',
    stream: 'PCM',
    departmentHi: 'अंतरिक्ष विभाग (ISRO) / रक्षा अनुसंधान संगठन (DRDO)',
    departmentEn: 'Department of Space (ISRO) / DRDO',
    category: 'technical',
    ageLimitHi: '18 से 28 वर्ष',
    ageLimitEn: '18 to 28 Years',
    qualificationHi: '12वीं साइंस (गणित एवं भौतिकी) अथवा समकक्ष ट्रेड अप्रेंटिस सर्टिफिकेट',
    qualificationEn: '10+2 with Science (Maths & Physics) or Trade Apprentice Certificate',
    salaryHi: 'स्टाइपेंड ₹12,000 - ₹18,000 (ट्रेनिंग काल) एवं स्थायी नियुक्ति पर ₹25,500 से ₹81,100 (लेवल 4)',
    salaryEn: 'Stipend ₹12,000 - ₹18,000 during training; on absorption ₹25,500 to ₹81,100 (Level 4)',
    payLevel: 'Pay Level 4 (Technical)',
    selectionProcessHi: [
      '12वीं साइंस के अंकों पर आधारित मेरिट अथवा लिखित परीक्षा',
      'स्किल एवं प्रैक्टिकल टेस्ट',
      'दस्तावेज़ सत्यापन एवं सिक्योरिटी क्लीयरेंस'
    ],
    selectionProcessEn: [
      '12th Science merit screening or Written Objective Exam',
      'Technical Skill and Practical Laboratory Test',
      'Document Verification & National Security Clearance'
    ],
    examNameHi: 'ISRO / DRDO CEPTAM Technical Trade Recruitment',
    examNameEn: 'ISRO / DRDO CEPTAM Technical Trade Recruitment',
    examConductingBody: 'ISRO / DRDO',
    frequencyHi: 'आवश्यकतानुसार नियमित अंतराल पर',
    frequencyEn: 'Regular intervals as per space/defence project needs',
    overviewHi: 'भारत के रॉकेट मिशन (चंद्रयान, गगनयान) और मिसाइल प्रोग्राम की प्रयोगशालाओं में काम करने का गौरवपूर्ण अवसर। 12वीं साइंस छात्रों को प्रैक्टिकल ट्रेनिंग के साथ सीधे वैज्ञानिक संस्थानों में तकनीकी कैडर में शामिल होने का मौका मिलता है।',
    overviewEn: 'Work directly inside India’s premier space and missile development centers. Provides hands-on exposure to high-tech satellite assembly, telemetry labs, and instrumentation.',
    perksHi: ['भारत के शीर्ष वैज्ञानिकों के साथ कार्य करने का अवसर', 'सर्वोच्च सामाजिक प्रतिष्ठा एवं अनुसंधान वातावरण', 'अंतरिक्ष व रक्षा प्रोजेक्ट्स में योगदान'],
    perksEn: ['Direct collaboration alongside top scientists', 'Pristine campus township amenities', 'Direct role in national prestige space missions'],
    badge: 'रिसर्च व टेक्नोलॉजी',
    officialUrl: 'https://www.isro.gov.in'
  },
  {
    id: 'ssc-stenographer',
    titleHi: 'एसएससी स्टेनोग्राफर ग्रेड ‘C’ व ‘D’ (केंद्रीय मंत्रालय)',
    titleEn: 'SSC Stenographer Grade C & D (Central Ministries)',
    stream: 'Both',
    departmentHi: 'कर्मचारी चयन आयोग (SSC)',
    departmentEn: 'Staff Selection Commission (SSC)',
    category: 'ssc',
    ageLimitHi: '18 से 30 वर्ष (ग्रेड C), 18 से 27 वर्ष (ग्रेड D)',
    ageLimitEn: '18 to 30 Years (Grade C), 18 to 27 Years (Grade D)',
    qualificationHi: 'मान्यता प्राप्त बोर्ड से 12वीं पास (किसी भी साइंस या अन्य स्ट्रीम में)',
    qualificationEn: '12th standard pass or equivalent from a recognized board',
    salaryHi: 'ग्रेड C: ₹44,900 (लेवल 7 - इन-हैंड ₹65,000+); ग्रेड D: ₹25,500 (लेवल 4 - इन-हैंड ₹42,000+)',
    salaryEn: 'Grade C: ₹44,900 (Level 7, In-hand ₹65k+); Grade D: ₹25,500 (Level 4, In-hand ₹42k+)',
    payLevel: 'Pay Level 4 and Pay Level 7',
    selectionProcessHi: [
      'कंप्यूटर आधारित लिखित परीक्षा (रीजनिंग - 50, सामान्य ज्ञान - 50, अंग्रेजी - 100 अंक - कुल 200 अंक; कोई गणित नहीं!)',
      'शॉर्टहैंड स्किल टेस्ट (ग्रेड D के लिए 80 शब्द/मिनट, ग्रेड C के लिए 100 शब्द/मिनट)',
      'दस्तावेज़ सत्यापन'
    ],
    selectionProcessEn: [
      'CBT (Reasoning: 50, GA: 50, English: 100 marks - No Mathematics paper!)',
      'Shorthand Skill Test (80 wpm for Gr D, 100 wpm for Gr C)',
      'Document Verification'
    ],
    examNameHi: 'SSC Stenographer Grade C & D Examination',
    examNameEn: 'SSC Stenographer Grade C & D Examination',
    examConductingBody: 'SSC',
    frequencyHi: 'प्रत्येक वर्ष',
    frequencyEn: 'Annually',
    overviewHi: 'यह उन साइंस छात्रों के लिए वरदान है जिनकी गणित कमजोर है, क्योंकि इसमें गणित का पेपर नहीं होता! केंद्रीय मंत्रियों और आईएएस अधिकारियों के पर्सनल असिस्टेंट (PA) के रूप में सीधे लेवल-7 तक का पद 12वीं पास के तुरंत बाद मिल सकता है।',
    overviewEn: 'Unique central government examination with ZERO mathematics questions. Allows 12th pass students to directly become Personal Assistants to Union Ministers and IAS Secretaries at Level-7.',
    perksHi: ['केंद्रीय सचिवालय में VIP प्रोटोकॉल के साथ कार्य', 'सरकारी आवास (टाइप-III/IV फ्लैट्स नई दिल्ली)', 'शानदार कार्य वातावरण एवं कोई फील्ड ड्यूटी नहीं'],
    perksEn: ['VIP ministry protocol attachments', 'Central Delhi government housing allotment', '100% air-conditioned office environment'],
    badge: 'बिना गणित का पेपर (No Maths Exam)',
    officialUrl: 'https://ssc.gov.in'
  }
];

export const PCM_VS_PCB_COMPARISON: ComparisonItem[] = [
  {
    featureHi: 'मुख्य अवसर (Key Opportunities)',
    featureEn: 'Key Opportunities',
    pcmHi: 'NDA (वायु सेना, नौसेना), रेलवे टेक्नीशियन S&T, SSC CHSL CAG DEO, एयरफोर्स अग्निवीर, इंडियन कोस्ट गार्ड',
    pcmEn: 'NDA (Air Force, Navy), Railway Technician S&T, SSC CHSL CAG DEO, IAF Agniveer, Indian Coast Guard',
    pcbHi: 'मिलिट्री नर्सिंग (MNS), लैब असिस्टेंट (स्कूल/फोरेंसिक), वनरक्षक, पैरामेडिकल स्टाफ, फार्मासिस्ट असिस्टेंट',
    pcbEn: 'Military Nursing Service (MNS), Lab Assistant (Forensics/Colleges), Forest Guard, Paramedical Staff'
  },
  {
    featureHi: 'सैलरी रेंज (Salary Range)',
    featureEn: 'Salary Range',
    pcmHi: '₹30,000 से ₹85,000 प्रति माह (NDA में ₹56,100+ बेसिक पे)',
    pcmEn: '₹30,000 to ₹85,000 per month (NDA Level 10 starts at ₹56,100)',
    pcbHi: '₹28,000 से ₹75,000 प्रति माह (MNS में ₹56,100+ बेसिक पे)',
    pcbEn: '₹28,000 to ₹75,000 per month (MNS Level 10 starts at ₹56,100)'
  },
  {
    featureHi: 'तकनीकी पदों की संख्या',
    featureEn: 'Technical Post Availability',
    pcmHi: 'बहुत अधिक (डिफेंस तकनीकी, रेलवे सिग्नल, मौसम विभाग व आईटी)',
    pcmEn: 'Very High (Defence Tech, Signal & Telecom, Meteorology, IT)',
    pcbHi: 'मध्यम (मुख्य रूप से स्वास्थ्य, पर्यावरण, फोरेंसिक व प्रयोगशालाएं)',
    pcbEn: 'Moderate (Healthcare, Environment, Forensics, Diagnostic Labs)'
  },
  {
    featureHi: 'प्रतियोगिता स्तर (Competition)',
    featureEn: 'Competition Level',
    pcmHi: 'गणित की वजह से पेपर में कटऑफ स्कोर ऊंचा रहता है',
    pcmEn: 'Higher math cutoff scores; requires speedy calculations',
    pcbHi: 'साइंस आधारित पेपरों में थ्योरी आधारित प्रश्न, गणनाएं कम',
    pcbEn: 'Conceptual theory based questions with less calculation load'
  },
  {
    featureHi: 'सामान्य पदों पर पात्रता',
    featureEn: 'Common Open Posts',
    pcmHi: 'एसएससी, रेलवे, पुलिस व राज्य के सभी सामान्य 12वीं पदों के लिए योग्य',
    pcmEn: 'Eligible for all 100% open 12th standard government notifications',
    pcbHi: 'एसएससी, रेलवे, पुलिस व राज्य के सभी सामान्य 12वीं पदों के लिए योग्य',
    pcbEn: 'Eligible for all 100% open 12th standard government notifications'
  }
];

export const STUDY_BOOKS_DATA: BookRecommendation[] = [
  {
    subjectHi: 'सामान्य गणित / परिमाणात्मक योग्यता (Quantitative Aptitude)',
    subjectEn: 'Quantitative Aptitude / Mathematics',
    bookNameHi: 'क्वांटिटेटिव एप्टीट्यूड फॉर कॉम्पिटिटिव एग्जामिनेशंस (हिंदी/अंग्रेजी)',
    bookNameEn: 'Quantitative Aptitude for Competitive Examinations',
    authorOrPublisherHi: 'डॉ. आर. एस. अग्रवाल (एस. चांद पब्लिकेशन)',
    authorOrPublisherEn: 'Dr. R. S. Aggarwal (S. Chand)',
    whyReadHi: 'एसएससी, रेलवे और राज्य परीक्षाओं के बेसिक से एडवांस फॉर्मूले और ट्रिक सीखने के लिए सर्वोत्तम।',
    whyReadEn: 'The undisputed gold standard for building concepts, shortcut tricks, and topic-wise practice.'
  },
  {
    subjectHi: 'तर्कशक्ति एवं रीजनिंग (Reasoning Ability)',
    subjectEn: 'Reasoning Ability (Verbal & Non-Verbal)',
    bookNameHi: 'ए मॉडर्न अप्रोच टू वर्बल एंड नॉन-वर्बल रीजनिंग',
    bookNameEn: 'A Modern Approach to Verbal & Non-Verbal Reasoning',
    authorOrPublisherHi: 'आर. एस. अग्रवाल / अरिहंत मास्टर रीजनिंग',
    authorOrPublisherEn: 'R. S. Aggarwal / Arihant Master Reasoning',
    whyReadHi: 'डिफेंस, एसएससी और रेलवे के कोडिंग-डिकोडिंग, ब्लड रिलेशन और नॉन-वर्बल चित्रों का पूरा अभ्यास।',
    whyReadEn: 'Covers every single logical pattern tested in SSC CHSL, Defence, and State screening tests.'
  },
  {
    subjectHi: 'सामान्य विज्ञान एवं एनसीईआरटी सार (General Science & NCERT)',
    subjectEn: 'General Science & NCERT Summary',
    bookNameHi: 'लुसेंट सामान्य विज्ञान (Lucent General Science - हिंदी)',
    bookNameEn: 'Lucent’s General Science (Hindi & English editions)',
    authorOrPublisherHi: 'लुसेंट पब्लिकेशन (Lucent)',
    authorOrPublisherEn: 'Lucent Publications',
    whyReadHi: '12वीं साइंस के छात्रों के लिए रिवीजन हेतु रामबाण पुस्तक। भौतिकी, रसायन और जीव विज्ञान के तथ्य सार रूप में उपलब्ध।',
    whyReadEn: 'Crisp fact-sheet and chapter-end MCQs ideal for rapid science concept revision.'
  },
  {
    subjectHi: 'एनडीए व डिफेंस स्पेशल गणित (NDA Specific Mathematics)',
    subjectEn: 'Pathfinder for NDA & NA Entrance Examination',
    bookNameHi: 'पाथफाइंडर फॉर एनडीए एवं एनए प्रवेश परीक्षा',
    bookNameEn: 'Pathfinder for NDA & NA Entrance Examination',
    authorOrPublisherHi: 'अरिहंत एक्सपर्ट्स (Arihant Publications)',
    authorOrPublisherEn: 'Arihant Experts',
    whyReadHi: '11वीं और 12वीं के कैलकुलस, मैट्रिक्स, ट्रिगोनोमेट्री और पिछले 10 वर्षों के हल प्रश्न पत्र इसमें शामिल हैं।',
    whyReadEn: 'Complete all-in-one guide strictly tailored for 11th & 12th calculus, algebra, and past 10 years papers.'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    questionHi: '12वीं साइंस पास करने के बाद सबसे अच्छी सरकारी नौकरी कौन सी है?',
    questionEn: 'Which is the best government job after 12th Science?',
    answerHi: '12वीं साइंस (विशेष रूप से PCM) के छात्रों के लिए सबसे प्रतिष्ठित और सर्वोच्च वेतन वाली नौकरी NDA (राष्ट्रीय रक्षा अकादमी) के माध्यम से भारतीय सेना, नौसेना और वायु सेना में लेफ्टिनेंट/अधिकारी का पद है। यदि आप डेस्क जॉब चाहते हैं, तो SSC CHSL में CAG के अंतर्गत डाटा एंट्री ऑपरेटर (DEO Grade A) और रेलवे में सिग्नल एवं टेलीकॉम टेक्नीशियन सर्वश्रेष्ठ विकल्प हैं।',
    answerEn: 'For 12th Science (especially PCM), the most prestigious and highest-paying career is commissioning as a Class-1 Officer (Lieutenant) in the Armed Forces through the NDA exam. If you prefer civil desk jobs, SSC CHSL Data Entry Operator (CAG) and Railway Signal & Telecom Technician are the top options.'
  },
  {
    questionHi: 'क्या 12वीं बायोलॉजी (PCB) वाले छात्र भी सरकारी नौकरी पा सकते हैं?',
    questionEn: 'Can 12th Biology (PCB) students apply for government jobs?',
    answerHi: 'जी हां, बिल्कुल! 12वीं PCB के छात्र प्रयोगशाला सहायक (Lab Assistant - स्कूल, कॉलेज और फोरेंसिक लैब), मिलिट्री नर्सिंग सर्विस (MNS - जिसमें सीधे लेफ्टिनेंट पद मिलता है), राज्य वनरक्षक (Forest Guard), एसएससी सीएचएसएल, दिल्ली पुलिस व राज्य पुलिस कांस्टेबल और रेलवे के विभिन्न क्लर्क पदों के लिए 100% पात्र होते हैं।',
    answerEn: 'Yes, absolutely! 12th PCB students are fully eligible for state Laboratory Assistants (Colleges, Forensics), Military Nursing Service (direct Lieutenant rank), State Forest Guards, SSC CHSL, Police Constable posts, and Railway NTPC Undergraduate vacancies.'
  },
  {
    questionHi: '12वीं साइंस के बाद सरकारी नौकरी में उम्र सीमा (Age Limit) क्या होती है?',
    questionEn: 'What is the age limit for govt jobs after 12th science?',
    answerHi: 'विभिन्न परीक्षाओं के लिए उम्र सीमा इस प्रकार है: NDA के लिए 16.5 से 19.5 वर्ष; भारतीय नौसेना और वायु सेना अग्निवीर के लिए 17.5 से 21 वर्ष; SSC CHSL और दिल्ली पुलिस के लिए 18 से 27 वर्ष; और रेलवे एवं राज्य भर्ती परीक्षाओं के लिए 18 से 30 या 33 वर्ष। आरक्षित श्रेणियों (OBC को 3 वर्ष, SC/ST को 5 वर्ष) को सरकारी नियमानुसार ऊपरी आयु सीमा में अतिरिक्त छूट मिलती है।',
    answerEn: 'Age limits vary: NDA is 16.5 to 19.5 years; Defence Agniveer is 17.5 to 21 years; SSC CHSL and Delhi Police is 18 to 27 years; Railway and State Exams range from 18 to 30 or 33 years. Upper age relaxations apply for OBC (3 years) and SC/ST (5 years).'
  },
  {
    questionHi: '12वीं साइंस के बाद सरकारी नौकरी में शुरुआती सैलरी कितनी मिलती है?',
    questionEn: 'What is the starting salary in government jobs after 12th science?',
    answerHi: '7वें वेतन आयोग (7th Pay Commission) के अनुसार 12वीं स्तर की सरकारी नौकरियों में बेसिक पे ₹19,900 (लेवल 2) से लेकर ₹56,100 (लेवल 10 - NDA/MNS) तक होता है। महंगाई भत्ता (DA), मकान किराया भत्ता (HRA) और परिवहन भत्ता (TA) जोड़कर शुरुआती इन-हैंड सैलरी ₹30,000 से लेकर ₹75,000+ प्रति माह तक बनती है।',
    answerEn: 'Under the 7th Central Pay Commission, basic pay ranges from ₹19,900 (Pay Level 2) up to ₹56,100 (Pay Level 10 for NDA/MNS). Including DA, HRA, and allowances, starting in-hand monthly salary ranges between ₹30,000 and ₹75,000+.'
  },
  {
    questionHi: 'क्या 12वीं के तुरंत बाद बिना किसी डिप्लोमा के सरकारी नौकरी मिल सकती है?',
    questionEn: 'Can I get a govt job immediately after 12th without any diploma or degree?',
    answerHi: 'हां! NDA, SSC CHSL, रेलवे एनटीपीसी अंडरग्रेजुएट, दिल्ली पुलिस AWO/TPO, राज्य पुलिस कांस्टेबल, वनरक्षक और नौसेना/वायु सेना जैसी बड़ी भर्तियों के लिए केवल 12वीं पास का सर्टिफिकेट चाहिए होता है, किसी डिग्री या अतिरिक्त डिप्लोमा की आवश्यकता नहीं होती।',
    answerEn: 'Yes! Major examinations including NDA, SSC CHSL, Railway NTPC Under-grad, Delhi Police, Forest Guard, and Indian Armed Forces recruitment require solely a 12th standard passing certificate without requiring any degree or diploma.'
  },
  {
    questionHi: '12वीं PCM (मैथ्स) के बाद रेलवे में कौन सी सरकारी नौकरी मिलती है?',
    questionEn: 'Which Railway jobs are available after 12th PCM (Maths)?',
    answerHi: '12वीं PCM छात्रों के लिए रेलवे में सबसे प्रमुख पद RRB Technician Grade-III (Signal & Telecom - S&T) है, जिसमें ITI की आवश्यकता नहीं होती (केवल 12वीं भौतिकी व गणित आवश्यक है)। इसके अतिरिक्त RRB NTPC के अंतर्गत कमर्शियल कम टिकट क्लर्क, जूनियर क्लर्क कम टाइपिस्ट और ट्रेन्स क्लर्क के पद भी सीधे 12वीं पास छात्रों के लिए उपलब्ध हैं।',
    answerEn: 'For 12th PCM pass-outs, the premier post in Indian Railways is RRB Technician Grade-III (Signal & Telecom), requiring no ITI diploma. In addition, RRB NTPC Under-graduate vacancies (Commercial cum Ticket Clerk, Junior Clerk typist) are directly open to 12th Science candidates.'
  },
  {
    questionHi: 'क्या लड़कियां भी 12वीं साइंस के बाद सरकारी नौकरी पा सकती हैं?',
    questionEn: 'Can female candidates secure govt jobs after 12th Science?',
    answerHi: 'जी हां, बिल्कुल! लड़कियां UPSC NDA परीक्षा के माध्यम से थल सेना, वायु सेना व नौसेना में सीधे ऑफिसर बन सकती हैं। इसके अलावा मिलिट्री नर्सिंग सर्विस (MNS - 4 वर्षीय बीएससी नर्सिंग के साथ सीधे लेफ्टिनेंट पद), SSC CHSL (CAG DEO/LDC), रेलवे, दिल्ली पुलिस और राज्य प्रयोगशाला सहायक (Lab Assistant) में छात्राओं के लिए विशेष अवसर व आरक्षण उपलब्ध हैं।',
    answerEn: 'Yes, definitely! Female candidates can appear for UPSC NDA to commission directly as Armed Forces Officers. Furthermore, Military Nursing Service (MNS - direct Lieutenant rank for 12th PCB girls), SSC CHSL, Indian Railways, Delhi Police, and State Lab Assistants offer outstanding career opportunities.'
  },
  {
    questionHi: 'सरकारी नौकरी की तैयारी के लिए 6 महीने का सही रोडमैप क्या होना चाहिए?',
    questionEn: 'What is the recommended 6-month study roadmap for govt exams?',
    answerHi: 'पहले 2 महीने: 10वीं व 12वीं के बेसिक मैथ्स, साइंस और रीजनिंग के फंडामेंटल क्लियर करें। महीने 3-4: संबंधित परीक्षा (जैसे SSC, NDA या रेलवे) के सिलेबस के अनुसार टॉपिक-वाइज प्रैक्टिस और नोट्स बनाएं। महीने 5-6: पिछले 5 वर्षों के प्रश्न पत्र (PYQs) हल करें और हर सप्ताह कम से कम 2-3 फुल-लेंथ ऑनलाइन मॉक टेस्ट देकर अपनी स्पीड और एक्यूरेसी सुधारें।',
    answerEn: 'Months 1-2: Master core fundamentals of basic math, general science, and logical reasoning. Months 3-4: Topic-wise practice as per target syllabus and concise formula notes. Months 5-6: Solve past 5 years papers (PYQs) and take 2-3 full-length timed mock tests every week to hone speed and accuracy.'
  }
];

export const SALARY_MATRIX_DATA = [
  { level: 'Pay Level 10 (राजपत्रित अधिकारी - NDA / MNS)', basic: '₹56,100', inHand: '₹75,000 - ₹95,000', posts: 'लेफ्टिनेंट (सेना), सब-लेफ्टिनेंट (नेवी), फ्लाइंग ऑफिसर' },
  { level: 'Pay Level 5 (विशेषज्ञ तकनीकी - SSC CHSL CAG DEO)', basic: '₹29,200', inHand: '₹48,000 - ₹55,000', posts: 'डाटा एंट्री ऑपरेटर ग्रेड A (CAG)' },
  { level: 'Pay Level 4 (तकनीकी / वायरलेस - दिल्ली पुलिस AWO/TPO)', basic: '₹25,500', inHand: '₹42,000 - ₹48,000', posts: 'हेड कांस्टेबल वायरलेस, लैब असिस्टेंट सीनियर, एलडीसी' },
  { level: 'Pay Level 3 (सुरक्षा बल एवं क्लर्क - रेलवे / पुलिस)', basic: '₹21,700', inHand: '₹34,000 - ₹40,000', posts: 'रेलवे कमर्शियल क्लर्क, पुलिस कांस्टेबल, वनरक्षक' },
  { level: 'Pay Level 2 (तकनीशियन - रेलवे S&T / जूनियर क्लर्क)', basic: '₹19,900', inHand: '₹30,000 - ₹36,000', posts: 'आरआरबी सिग्नल एवं टेलीकॉम टेक्नीशियन, जूनियर क्लर्क टाइपिस्ट' },
  { level: 'Agniveer पैकेज (डिफेंस 4 वर्षीय सेवा)', basic: '₹30,000 - ₹40,000', inHand: '₹21,000 - ₹28,000 + ₹11.71 लाख सेवानिधि', posts: 'अग्निवीर वायु (साइंस), अग्निवीर नेवी (SSR)' }
];

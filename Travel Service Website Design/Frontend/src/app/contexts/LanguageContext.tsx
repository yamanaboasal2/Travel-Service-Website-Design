import { createContext, useContext, ReactNode, useEffect } from 'react';

export type Language = 'ar';

interface LanguageContextType {
  language: Language;
  isRTL: boolean;
  t: (key: string, params?: Record<string, string | number>) => string;
  dir: 'rtl';
  textAlign: (align: 'left' | 'right' | 'center') => string;
  flexDirection: (direction?: 'row' | 'col') => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    aboutUs: 'من نحن',
    aboutTitle: 'عن رينبو ترافل',
    services: 'الخدمات',
    offers: 'العروض',
    contact: 'اتصل بنا',
    loginSignup: 'تسجيل الدخول / إنشاء حساب',

    // Search
    searchPlaceholder: 'البحث عن الوجهات، الخدمات، العروض...',
    searchDestinations: 'البحث عن الوجهات...',

    // Hero sections
    welcome: 'مرحباً بكم في رينبو ترافل',
    exploreWorld: 'استكشف العالم معنا',
    journeyBegins: 'الرحلة تبدأ معنا...',
    memoriesYours: 'والذكريات لكم',
    yourTrustedPartner: 'شريككم الموثوق في نابلس، نقدم حلول سفر كاملة وتجارب لا تُنسى حول العالم.',
    discoverDestinations: 'اكتشف وجهات مذهلة',
    topDestinations: 'أفضل وجهات السفر',
    explorePopular: 'استكشف أكثر الدول شعبية التي يحبها الناس زيارتها',
    ourServices: 'خدماتنا',
    completeSolutions: 'حلول سفر كاملة مصممة حسب احتياجاتك. من الحجز إلى التخطيط، نحن نوفر لك كل شيء.',
    specialOffers: 'عروض خاصة',
    offersPageDesc: 'اكتشف عروض سفر رائعة وحزم حصرية لوجهات أحلامك',
    exclusiveDeals: 'عروض حصرية وحزم لتجارب لا تُنسى',
    quickLinks: 'روابط سريعة',
    contactUs: 'اتصل بنا',
    getInTouch: 'نحن هنا لمساعدتك في تخطيط رحلتك المثالية. تواصل معنا اليوم!',

    // Buttons and actions
    getStarted: 'ابدأ الآن',
    learnMore: 'اعرف المزيد',
    bookNow: 'احجز الآن',
    viewDetails: 'عرض التفاصيل',
    sendMessage: 'إرسال الرسالة',
    sending: 'جارٍ الإرسال...',
    submit: 'إرسال',

    // Forms
    fullName: 'الاسم الكامل',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    message: 'الرسالة',
    name: 'الاسم',

    // Services
    flightBooking: 'حجز الطيران',
    flightDesc: 'احجز رحلات طيران إلى وجهات حول العالم بأسعار تنافسية وخيارات مرنة.',
    hotelReservations: 'حجز الفنادق',
    hotelDesc: 'اعثر واحجز الإقامة المثالية لرحلتك.',
    tourPackages: 'حزم الجولات',
    tourDesc: 'استكشف حزم الجولات المصممة بعناية والتي تشمل الطيران والفنادق والجولات والأنشطة.',
    visaAssistance: 'مساعدة التأشيرات',
    visaDesc: 'احصل على مساعدة متخصصة في طلبات التأشيرات والوثائق.',
    travelPlanning: 'تخطيط السفر',
    planningDesc: 'دع مستشاري السفر ذوي الخبرة يساعدونك في تخطيط رحلتك المثالية.',

    // Features
    internationalFlights: 'رحلات دولية ومحلية',
    bestFare: 'ضمان أفضل سعر',
    easyCancellation: 'إلغاء وإعادة جدولة سهلة',
    customerSupport: 'دعم العملاء 24/7',
    wideAccommodations: 'مجموعة واسعة من الإقامات',
    bestPrice: 'ضمان أفضل سعر',
    verifiedReviews: 'تقييمات ومراجعات موثقة',
    groupRates: 'أسعار خاصة للمجموعات',
    allInclusive: 'حزم شاملة',
    customizable: 'جداول زمنية قابلة للتخصيص',
    localGuides: 'مرشدون محليون متخصصون',
    privateTours: 'جولات جماعية وخاصة',
    visaConsultation: 'استشارات التأشيرات',
    documentPrep: 'إعداد الوثائق',
    applicationTracking: 'تتبع الطلبات',
    multipleCountries: 'دعم دول متعددة',
    personalized: 'جداول زمنية مخصصة',
    budgetPlanning: 'تخطيط الميزانية',
    activityRecs: 'توصيات الأنشطة',
    travelInsurance: 'خيارات التأمين على السفر',

    // Contact
    contactTitle: 'تواصل معنا',
    questionsHelp: 'لديك أسئلة أو تحتاج مساعدة؟ نحن هنا للمساعدة!',
    officeLocation: 'موقع المكتب',
    nablusCenter: 'مركز مدينة نابلس، الطابق الثاني، نابلس، فلسطين',
    phoneNumber: 'رقم الهاتف',
    available247: 'متوفر 24/7 للاستفسارات',
    emailAddress: 'البريد الإلكتروني',
    respond24h: 'سنرد خلال 24 ساعة',
    followUs: 'تابعنا على وسائل التواصل الاجتماعي',

    // Footer
    allRightsReserved: 'جميع الحقوق محفوظة.',
    rainbowTravel: 'رينبو ترافل والسياحة',

    // Booking
    bookingForm: 'احجز رحلتك',
    selectService: 'اختر الخدمة',
    selectDestination: 'اختر الوجهة',
    selectDate: 'اختر التاريخ',
    numberOfTravelers: 'عدد المسافرين',
    specialRequests: 'طلبات خاصة',
    passportType: 'نوع الجواز',
    palestinian: 'فلسطيني',
    other: 'أخرى',

    // About
    ourStory: 'قصتنا',
    storyText: 'مع أكثر من 15 عاماً من الخبرة في صناعة السفر، كانت رينبو ترافل شريككم الموثوق للرحلات التي لا تُنسى. نحن متخصصون في تقديم حلول سفر شاملة مصممة حسب احتياجاتكم.',
    ourValues: 'قيمنا',
    whyChoose: 'لماذا تختار رينبو ترافل؟',
    ourMission: 'رسالتنا',
    ourVision: 'رؤيتنا',
    competitivePrices: 'أسعار تنافسية',
    pricesDesc: 'نقدم أفضل قيمة مقابل أموالكم مع عروض حصرية وأسعار تنافسية على جميع حزمنا.',
    excellentService: 'خدمة ممتازة',
    serviceDesc: 'فريقنا المهني والودود ملتزم بتقديم خدمة عملاء استثنائية في كل خطوة.',
    organizedTrips: 'رحلات منظمة',
    organizedDesc: 'يتم التخطيط والتنظيم لكل التفاصيل بعناية لضمان أن تكون رحلتكم سلسة وآمنة وخالية من التوتر.',
    continuousOffers: 'عروض مستمرة',
    offersDesc: 'نحدث عروضنا باستمرار لنقدم لكم أفضل الصفقات وأحدث الوجهات.',

    // Auth
    login: 'تسجيل الدخول',
    signup: 'إنشاء حساب',
    password: 'كلمة المرور',
    confirmPassword: 'تأكيد كلمة المرور',
    forgotPassword: 'نسيت كلمة المرور؟',
    noAccount: 'ليس لديك حساب؟',
    haveAccount: 'لديك حساب بالفعل؟',
    createAccount: 'إنشاء حساب',

    // Common
    loading: 'جارٍ التحميل...',
    error: 'خطأ',
    success: 'نجح',
    close: 'إغلاق',
    yes: 'نعم',
    no: 'لا',
    cancel: 'إلغاء',
    save: 'حفظ',
    delete: 'حذف',
    edit: 'تعديل',
    view: 'عرض',
    back: 'رجوع',
    next: 'التالي',
    previous: 'السابق',
    page: 'صفحة',
    of: 'من',
    contactToday: 'تواصل معنا اليوم ودعنا نساعدك في تخطيط عطلتك المثالية',
    readyToBook: 'جاهز لحجز رحلتك؟',
    contactCustom: 'تواصل معنا وسننشئ حزمة مخصصة لك فقط',
    cantFind: 'لا تجد ما تبحث عنه؟',
    'Explore Destinations': 'استكشف الوجهات',
    'Book Now': 'احجز الآن',
    'Popular Tourist Attractions': 'المعالم السياحية الشهيرة',
    'Discover beautiful beaches, landmarks, and cultural destinations': 'اكتشف الشواطئ الجميلة والمعالم الثقافية والأماكن السياحية',
    'Showing {count} destinations matching your search': 'عرض {count} وجهة تتطابق مع بحثك',
    'View All Offers': 'عرض جميع العروض',
    'What Our Customers Say': 'ماذا يقول عملاؤنا',
    'Real experiences from happy travelers': 'تجارب حقيقية من مسافرين سعداء',
    'Ready to Start Your Journey?': 'هل أنت مستعد لبدء رحلتك؟',
    'Book your dream vacation today and create memories that last a lifetime': 'احجز عطلتك المثالية اليوم واصنع ذكريات تدوم مدى الحياة',
    'Contact Us': 'اتصل بنا',
    'Follow Us': 'تابعنا',
    'Rainbow Travel & Tourism': 'رينبو ترافل والسياحة',
    'All rights reserved.': 'جميع الحقوق محفوظة.',
    'Have questions or need assistance? We are here to help! Reach out to us through any of the following channels.': 'هل لديك أسئلة أو تحتاج مساعدة؟ نحن هنا للمساعدة! تواصل معنا عبر أي من القنوات التالية.',
    'Find Us on the Map': 'اعثر علينا على الخريطة',
    'Visit our office at Nablus City Center': 'قم بزيارة مكتبنا في مركز مدينة نابلس',
    'Office Hours': 'ساعات العمل',
    'Sunday - Thursday': 'الأحد - الخميس',
    'Saturday': 'السبت',
    'Emergency support available 24/7 by phone': 'دعم الطوارئ متاح على مدار الساعة عبر الهاتف',
    'Get in Touch': 'تواصل معنا',
    'Send Us a Message': 'أرسل لنا رسالة',
    'Message Sent Successfully!': 'تم إرسال الرسالة بنجاح!',
    'Thank you for contacting us. We will get back to you within 24 hours.': 'شكراً لتواصلك معنا. سنرد خلال 24 ساعة.',
    'Enter your email': 'أدخل بريدك الإلكتروني',
    // About page specific
    ourMissionText: 'تقديم تجارب سفر استثنائية من خلال تقديم حلول سفر شاملة وموثوقة وبأسعار معقولة. نسعى لجعل كل رحلة سلسة ولا تُنسى، مما يضمن عودة عملائنا إلى منازلهم بقصص تستحق المشاركة وذكريات يحتفظون بها إلى الأبد.',
    ourVisionText: 'أن نصبح الوكالة الرائدة في السفر في فلسطين، معروفة بالتزامنا بالتميز والابتكار ورضا العملاء. نتخيل مستقبلاً يكون فيه السفر متاحاً للجميع، وتكون رينبو ترافل الخيار الأول للمسافرين الذين يبحثون عن الجودة والقيمة.',
    whyChooseDesc: 'نحن أكثر من مجرد وكالة سفر - نحن شركاؤك في المغامرة',
    ourCoreValues: 'قيمنا الأساسية',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const language: Language = 'ar';
  const isRTL = true;
  const dir: 'rtl' = 'rtl';

  // Set document direction when component mounts
  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  const t = (key: string, params?: Record<string, string | number>): string => {
    let text = translations.ar[key as keyof typeof translations.ar] || key;

    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        text = text.replace(new RegExp(`\{${paramKey}\}`, 'g'), String(paramValue));
      });
    }

    return text;
  };

  const textAlign = (align: 'left' | 'right' | 'center'): string => {
    if (align === 'center') return 'text-center';
    return align === 'left' ? 'text-right' : 'text-left';
  };

  const flexDirection = (direction: 'row' | 'col' = 'row'): string => {
    if (direction === 'col') return 'flex-col';
    return 'flex-row-reverse';
  };

  return (
    <LanguageContext.Provider value={{
      language,
      isRTL,
      dir,
      t,
      textAlign,
      flexDirection,
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
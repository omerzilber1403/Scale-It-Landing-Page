export type Lang = 'he' | 'en';

export interface Translations {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    header: string;
    body: string;
  };
  services: {
    header: string;
    service1: {
      title: string;
      description: string;
    };
    service2: {
      title: string;
      description: string;
    };
    service3: {
      title: string;
      description: string;
    };
  };
  whyUs: {
    header: string;
    cmo: {
      title: string;
      description: string;
    };
    campaigns: {
      title: string;
      description: string;
    };
    websites: {
      title: string;
      description: string;
    };
    video: {
      title: string;
      description: string;
    };
    seo: {
      title: string;
      description: string;
    };
    social: {
      title: string;
      description: string;
    };
  };
  media: {
    header: string;
  };
  results: {
    header: string;
    case1: {
      company: string;
      description: string;
      metric1Title: string;
      metric1Value: string;
      metric2Title: string;
      metric2Value: string;
      date: string;
    };
    case2: {
      company: string;
      description: string;
      metric1Title: string;
      metric1Value: string;
      metric2Title: string;
      metric2Value: string;
      date: string;
    };
    case3: {
      company: string;
      description: string;
      metric1Title: string;
      metric1Value: string;
      metric2Title: string;
      metric2Value: string;
      date: string;
    };
  };
  contact: {
    header: string;
    subheader: string;
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    budgetLabel: string;
    budgetOptions: string[];
    submitButton: string;
    nextButton: string;
    previousButton: string;
  };
}

export const translations: Record<Lang, Translations> = {
  he: {
    hero: {
      title: 'מפסיקים לנחש בדיגיטל',
      subtitle: 'יוצרים למותגים מובילים אסטרטגיות גדילה בדיגיטל',
      cta: 'בואו נגדל ביחד',
    },
    about: {
      header: 'מה אנחנו עושים?',
      body: 'אנחנו סוכנות דיגיטל מובילה המתמחה בשיווק דיגיטלי, בניית אתרים וקידום עסקים ברשת.\nאנחנו מאמינים בגישה מבוססת נתונים ותוצאות מדידות.\n\nהצוות שלנו בנוי ממומחי שיווק, מפתחים, מעצבים ואנשי קריאייטיב שעובדים ביחד כדי להביא לכם את התוצאות הטובות ביותר.',
    },
    services: {
      header: 'השירותים שלנו',
      service1: {
        title: 'קמפיינים',
        description: 'ניהול קמפיינים ממומנים בכל הפלטפורמות',
      },
      service2: {
        title: 'קריאייטיב',
        description: 'יצירת תוכן ויזואלי מושך ואפקטיבי',
      },
      service3: {
        title: 'אסטרטגיה',
        description: 'בניית אסטרטגיית שיווק מקיפה',
      },
    },
    whyUs: {
      header: 'איך אנחנו עוזרים לכם לצמוח?',
      cmo: {
        title: 'סמנכ"ל שיווק חיצוני CMO',
        description: 'אחד הבידולים המרכזיים שלנו הוא היכולת לספק לכם סמנכ"ל שיווק במיקור חוץ (CMO). אנחנו לא חלק מהחברה, אבל עובדים בצמוד אליכם – משתתפים בישיבות חשובות, מכירים את בעלי התפקידים, בונים אסטרטגיה ותכנון מסע לקוח, ומוודאים שהיעדים מושגים. ההצלחה שלכם היא גם ההצלחה שלנו, וביחד נוביל את העסק לצמיחה.',
      },
      campaigns: {
        title: 'ניהול קמפיינים',
        description: 'אנחנו לא רק מנהלי קמפיינים – אנחנו מנהלי שיווק. אנחנו מבינים את הצרכים של הקהל שלכם, יודעים לספר סיפור נכון, מייצרים תוכן מדויק לקמפיינים אפקטיביים, ועושים את זה בהצלחה עם עשרות עסקים',
      },
      websites: {
        title: 'בניית אתרים וקידום',
        description: 'עבורנו אתר טוב הוא הרבה מעבר לנראות. אתר הוא הכלי המרכזי שמרכז את החוויה הדיגיטלית של הלקוח מול המותג, ולכן הוא חייב להיות מתוכנן קודם כל סביב צרכי המשתמש – להבין מה מניע אותו, מה חשוב לו, ואיך הוא מקבל החלטות. עיצוב יפה הוא רק השכבה החיצונית; מאחוריו חייב לעמוד אפיון אסטרטגי שממקד את הגולש, מייצר עבורו חוויה ברורה, ומוביל אותו צעד אחר צעד אל ההמרה.',
      },
      video: {
        title: 'הפקות וידאו',
        description: 'אנחנו מתמחים ביצירת תוכן ויזואלי מקצה לקצה – מסרטוני תדמית ופרסומות ועד צילומי כנסים, אירועים ופודקאסטים. צילום טוב מתחיל בתסריט וקונספט יצירתי שמתחברים לקהל, וממשיך בציוד מתקדם וצוות מקצועי שמקפיד על כל פריים. בחדר העריכה אנחנו מוסיפים צבע, סאונד ואפקטים ליצירת חוויה מלאה. התוצאה – תוכן חד, מרגש ומדויק שמחזק את המותג, מגדיל מכירות ובונה נוכחות בלתי נשכחת ברשת.',
      },
      seo: {
        title: 'קידום אתרים SEO',
        description: 'קידום אתרים אורגני (SEO) הוא אחד הכלים החזקים ביותר לייצור תוצאות יציבות וארוכות טווח. אתר שמדורג גבוה בגוגל לא רק מושך יותר תנועה – הוא גם מייצר אמון ומבסס את המותג שלכם כמוביל בתחומו. העבודה שלנו מבוססת על מתודולוגיה ברורה: מחקר מילים מעמיק, אופטימיזציה טכנית, יצירת תוכן איכותי ובניית קישורים נכונה. כל צעד נבדק, נמדד ומבוקר – כדי להבטיח שהאתר שלכם לא רק יופיע בתוצאות החיפוש, אלא גם ימשוך את הקהל המדויק וימיר אותו ללקוחות.',
      },
      social: {
        title: 'ניהול רשתות חברתיות',
        description: 'צוות הסושיאל שלנו מנהל עבורכם את כל הנוכחות ברשתות החברתיות – החל מכתיבת פוסטים ותזמון חכם, דרך צילום ועריכה ברמה גבוהה, ועד התאמת התוכן לכל פלטפורמה. המטרה שלנו ברורה: לא רק "להיות שם", אלא לבנות סביבכם קהילה חיה ונושמת שמתחברת למותג, יוצרת מעורבות, ומובילה לצמיחה אמיתית.',
      },
    },
    media: {
      header: 'מדיה שהפקנו',
    },
    results: {
      header: 'תוצאות',
      case1: {
        company: 'jobspace',
        description: 'חברה טכנולוגית לגיוס עובדים בעזרת בינה מלאכותית',
        metric1Title: 'גדילה במכירות',
        metric1Value: '437%',
        metric2Title: 'ירידה בעלות לקוח',
        metric2Value: '27%',
        date: 'החל מ 01/01/2025',
      },
      case2: {
        company: 'Match HR',
        description: 'פירמת ייעוץ לעסקי כושר ותזונה',
        metric1Title: 'גדילה בשורת רווח חודשית',
        metric1Value: '1740%',
        metric2Title: 'ירידה בעלות לקוח',
        metric2Value: '43%',
        date: 'החל מ 01/06/2024',
      },
      case3: {
        company: 'One',
        description: 'חברה לייעוץ ארגוני',
        metric1Title: 'פגישות שנקבעו',
        metric1Value: '16',
        metric2Title: 'עלות לפגישה',
        metric2Value: '253₪',
        date: 'החל מ 01/06/2025',
      },
    },
    contact: {
      header: 'צרו קשר',
      subheader: 'דברו איתנו ישירות או מלאו את הטופס',
      nameLabel: 'שם',
      namePlaceholder: 'מה השם שלך?',
      companyLabel: 'שם החברה',
      companyPlaceholder: 'שם החברה',
      emailLabel: 'אימייל',
      emailPlaceholder: 'האימייל שלך',
      phoneLabel: 'טלפון',
      phonePlaceholder: 'הטלפון שלך',
      budgetLabel: 'תקציב',
      budgetOptions: ['פחות מ 10,000₪', '10,000₪ - 30,000₪', '30,000₪ - 50,000₪', '50,000₪+'],
      submitButton: 'שליחה',
      nextButton: 'הבא',
      previousButton: 'הקודם',
    },
  },
  en: {
    hero: {
      title: 'Stop Guessing in Digital',
      subtitle: 'Creating growth strategies in digital for leading brands',
      cta: "Let's Grow Together",
    },
    about: {
      header: 'What We Do?',
      body: "We're a leading digital agency specializing in digital marketing, website development and business promotion online.\nWe believe in a data-driven approach with measurable results.\n\nOur team consists of marketing experts, developers, designers and creatives working together to bring you the best results.",
    },
    services: {
      header: 'Our Services',
      service1: {
        title: 'Campaigns',
        description: 'Managing paid campaigns across all platforms',
      },
      service2: {
        title: 'Creative',
        description: 'Creating attractive and effective visual content',
      },
      service3: {
        title: 'Strategy',
        description: 'Building comprehensive marketing strategy',
      },
    },
    whyUs: {
      header: 'How We Help You Grow?',
      cmo: {
        title: 'Outsourced CMO',
        description: 'One of our key differentiators is the ability to provide you with an outsourced Chief Marketing Officer (CMO). We are not part of the company, but work closely with you – participating in important meetings, knowing the stakeholders, building strategy and customer journey planning, and ensuring goals are achieved. Your success is our success, and together we will lead the business to growth.',
      },
      campaigns: {
        title: 'Campaign Management',
        description: "We're not just campaign managers – we're marketing managers. We understand your audience's needs, know how to tell the right story, create precise content for effective campaigns, and do it successfully with dozens of businesses",
      },
      websites: {
        title: 'Website Development & Promotion',
        description: 'For us, a good website is much more than appearance. A website is the central tool that centralizes the digital experience of the customer with the brand, and therefore it must be planned first and foremost around user needs – understand what drives them, what matters to them, and how they make decisions. Beautiful design is just the outer layer; behind it must stand strategic specification that focuses the visitor, creates a clear experience for them, and leads them step by step to conversion.',
      },
      video: {
        title: 'Video Production',
        description: "We specialize in creating visual content end-to-end – from brand videos and commercials to conference, event and podcast shoots. Good filming starts with a script and creative concept that connect with the audience, and continues with advanced equipment and a professional team that pays attention to every frame. In the editing room we add color, sound and effects to create a complete experience. The result – sharp, emotional and precise content that strengthens the brand, increases sales and builds an unforgettable presence online.",
      },
      seo: {
        title: 'SEO - Search Engine Optimization',
        description: 'Organic search engine optimization (SEO) is one of the most powerful tools for generating stable, long-term results. A website that ranks high on Google not only attracts more traffic – it also generates trust and establishes your brand as a leader in its field. Our work is based on a clear methodology: in-depth keyword research, technical optimization, quality content creation and proper link building. Every step is tested, measured and monitored – to ensure that your site not only appears in search results, but also attracts the precise audience and converts them into customers.',
      },
      social: {
        title: 'Social Media Management',
        description: 'Our social media team manages your entire social media presence – from writing posts and smart scheduling, through high-level photography and editing, to adapting content for each platform. Our goal is clear: not just "being there", but building a living, breathing community around you that connects with the brand, creates engagement, and leads to real growth.',
      },
    },
    media: {
      header: 'Media We Produced',
    },
    results: {
      header: 'Results',
      case1: {
        company: 'jobspace',
        description: 'Technology company for employee recruitment using artificial intelligence',
        metric1Title: 'Sales Growth',
        metric1Value: '437%',
        metric2Title: 'Customer Cost Reduction',
        metric2Value: '27%',
        date: 'From 01/01/2025',
      },
      case2: {
        company: 'Match HR',
        description: 'Consulting firm for fitness and nutrition businesses',
        metric1Title: 'Monthly Profit Line Growth',
        metric1Value: '1740%',
        metric2Title: 'Customer Cost Reduction',
        metric2Value: '43%',
        date: 'From 01/06/2024',
      },
      case3: {
        company: 'One',
        description: 'Organizational consulting company',
        metric1Title: 'Meetings Scheduled',
        metric1Value: '16',
        metric2Title: 'Cost Per Meeting',
        metric2Value: '₪253',
        date: 'From 01/06/2025',
      },
    },
    contact: {
      header: 'Contact Us',
      subheader: 'Talk to us directly or fill out the form',
      nameLabel: 'Name',
      namePlaceholder: "What's your name?",
      companyLabel: 'Company Name',
      companyPlaceholder: 'Company Name',
      emailLabel: 'Email',
      emailPlaceholder: 'Your Email',
      phoneLabel: 'Phone',
      phonePlaceholder: 'Your Phone',
      budgetLabel: 'Budget',
      budgetOptions: ['Less than ₪10,000', '₪10,000 - ₪30,000', '₪30,000 - ₪50,000', '₪50,000+'],
      submitButton: 'Submit',
      nextButton: 'Next',
      previousButton: 'Previous',
    },
  },
};

export function getTranslations(lang: Lang): Translations {
  return translations[lang];
}


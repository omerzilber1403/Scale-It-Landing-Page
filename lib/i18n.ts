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
        description: '**הסמנכ"ל שלכם במיקור חוץ**\n\nאחד הבידולים המרכזיים שלנו הוא היכולת לספק לכם סמנכ"ל שיווק במיקור חוץ (CMO). אנחנו לא חלק מהחברה, אבל עובדים בצמוד אליכם:\n\n• משתתפים בישיבות חשובות\n• מכירים את כל בעלי התפקידים\n• בונים אסטרטגיה ותכנון מסע לקוח\n• מוודאים שהיעדים מושגים\n\n**ההצלחה שלכם = ההצלחה שלנו**',
      },
      campaigns: {
        title: 'ניהול קמפיינים',
        description: '**מנהלי שיווק, לא רק קמפיינים**\n\nאנחנו לא רק מנהלי קמפיינים – אנחנו מנהלי שיווק.\n\n**מה אנחנו עושים?**\n\n• מבינים את הצרכים של הקהל שלכם\n• יודעים לספר סיפור נכון\n• מייצרים תוכן מדויק לקמפיינים אפקטיביים\n• עושים את זה בהצלחה עם עשרות עסקים',
      },
      websites: {
        title: 'בניית אתרים וקידום',
        description: '**אתר = הכלי המרכזי שלכם**\n\nעבורנו אתר טוב הוא הרבה מעבר לנראות. אתר הוא הכלי המרכזי שמרכז את החוויה הדיגיטלית של הלקוח מול המותג.\n\n**מה חשוב באתר?**\n\n• מתוכנן סביב צרכי המשתמש\n• מבין מה מניע את הלקוח\n• יוצר חוויה ברורה ומובנת\n• מוביל צעד אחר צעד להמרה\n\n**עיצוב יפה + אפיון אסטרטגי**',
      },
      video: {
        title: 'הפקות וידאו',
        description: '**תוכן ויזואלי מקצה לקצה**\n\nאנחנו מתמחים ביצירת תוכן ויזואלי מקצה לקצה:\n\n• סרטוני תדמית ופרסומות\n• צילומי כנסים ואירועים\n• פודקאסטים מקצועיים\n\n**התהליך שלנו:**\n\n• תסריט וקונספט יצירתי שמתחבר לקהל\n• ציוד מתקדם וצוות מקצועי\n• עריכה עם צבע, סאונד ואפקטים\n\nהתוצאה? תוכן חד, מרגש ומדויק שמחזק את המותג ובונה נוכחות בלתי נשכחת.',
      },
      seo: {
        title: 'קידום אתרים SEO',
        description: '**SEO = תוצאות יציבות וארוכות טווח**\n\nקידום אתרים אורגני (SEO) הוא אחד הכלים החזקים ביותר לייצור תוצאות יציבות וארוכות טווח.\n\n**למה זה חשוב?**\n\nאתר מדורג גבוה בגוגל = יותר תנועה + יותר אמון\n\n**המתודולוגיה שלנו:**\n\n• מחקר מילים מעמיק\n• אופטימיזציה טכנית\n• יצירת תוכן איכותי\n• בניית קישורים נכונה\n\n**כל צעד נבדק, נמדד ומבוקר!**',
      },
      social: {
        title: 'ניהול רשתות חברתיות',
        description: '**נוכחות מלאה ברשתות החברתיות**\n\nצוות הסושיאל שלנו מנהל עבורכם את כל הנוכחות ברשתות החברתיות:\n\n• כתיבת פוסטים ותזמון חכם\n• צילום ועריכה ברמה גבוהה\n• התאמת תוכן לכל פלטפורמה\n\n**המטרה שלנו:**\n\nלא רק "להיות שם" - לבנות קהילה חיה!\n\n• מתחברת למותג\n• יוצרת מעורבות\n• מובילה לצמיחה אמיתית',
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
        description: '**Your Outsourced CMO**\n\nOne of our key differentiators is the ability to provide you with an outsourced Chief Marketing Officer (CMO). We are not part of the company, but work closely with you:\n\n• Participate in important meetings\n• Know all stakeholders\n• Build strategy and customer journey planning\n• Ensure goals are achieved\n\n**Your Success = Our Success**',
      },
      campaigns: {
        title: 'Campaign Management',
        description: "**Marketing Managers, Not Just Campaign Managers**\n\nWe're not just campaign managers – we're marketing managers.\n\n**What we do?**\n\n• Understand your audience's needs\n• Know how to tell the right story\n• Create precise content for effective campaigns\n• Do it successfully with dozens of businesses",
      },
      websites: {
        title: 'Website Development & Promotion',
        description: '**Website = Your Central Tool**\n\nFor us, a good website is much more than appearance. A website is the central tool that centralizes the digital experience of the customer with the brand.\n\n**What matters in a website?**\n\n• Planned around user needs\n• Understand what drives the customer\n• Create clear and understandable experience\n• Lead step by step to conversion\n\n**Beautiful design + strategic specification**',
      },
      video: {
        title: 'Video Production',
        description: '**End-to-End Visual Content**\n\nWe specialize in creating visual content end-to-end:\n\n• Brand videos and commercials\n• Conference and event shoots\n• Professional podcasts\n\n**Our Process:**\n\n• Script and creative concept that connects with the audience\n• Advanced equipment and professional team\n• Editing with color, sound and effects\n\nThe result? Sharp, emotional and precise content that strengthens the brand and builds an unforgettable presence.',
      },
      seo: {
        title: 'SEO - Search Engine Optimization',
        description: '**SEO = Stable, Long-term Results**\n\nOrganic search engine optimization (SEO) is one of the most powerful tools for generating stable, long-term results.\n\n**Why is this important?**\n\nHigh Google ranking = More traffic + More trust\n\n**Our Methodology:**\n\n• In-depth keyword research\n• Technical optimization\n• Quality content creation\n• Proper link building\n\n**Every step tested, measured and monitored!**',
      },
      social: {
        title: 'Social Media Management',
        description: '**Complete Social Media Presence**\n\nOur social media team manages your entire social media presence:\n\n• Post writing and smart scheduling\n• High-level photography and editing\n• Content adaptation for each platform\n\n**Our Goal:**\n\nNot just "being there" - building a living community!\n\n• Connects with the brand\n• Creates engagement\n• Leads to real growth',
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


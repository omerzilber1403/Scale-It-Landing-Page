export interface Video {
  id: string;
  titleHe: string;
  titleEn: string;
  embedUrl: string;
  thumbnail: string;
  category: 'B2B' | 'Tech' | 'Fitness' | 'Legal' | 'Consulting' | 'Other';
  goal: string;
  kpi: string;
  views?: string;
  engagement?: string;
}

// סרטוני YouTube מהאתר של Scale It
export const videos: Video[] = [
  {
    id: '1',
    titleHe: 'jobspace - AI לגיוס עובדים',
    titleEn: 'jobspace - AI Employee Recruitment',
    embedUrl: 'https://youtube.com/shorts/dFt-8nSMXqs',
    thumbnail: 'https://img.youtube.com/vi/dFt-8nSMXqs/maxresdefault.jpg',
    category: 'Tech',
    goal: 'הגברת מודעות למוצר AI לגיוס עובדים',
    kpi: '437% עלייה במכירות',
    views: '50K+',
    engagement: '8.2%'
  },
  {
    id: '2',
    titleHe: 'יאיר כחל - ייעוץ עסקי',
    titleEn: 'Yair Kachal - Business Consulting',
    embedUrl: 'https://youtube.com/shorts/KktWUHM3-zk',
    thumbnail: 'https://img.youtube.com/vi/KktWUHM3-zk/maxresdefault.jpg',
    category: 'Consulting',
    goal: 'מיצוב כמומחה ייעוץ עסקי',
    kpi: '1740% עלייה ברווחים',
    views: '35K+',
    engagement: '12.5%'
  },
  {
    id: '3',
    titleHe: 'ליגל מארק - שירותי משפט',
    titleEn: 'Legal Mark - Legal Services',
    embedUrl: 'https://youtube.com/shorts/LmRmJJ7ot-8',
    thumbnail: 'https://img.youtube.com/vi/LmRmJJ7ot-8/maxresdefault.jpg',
    category: 'Legal',
    goal: 'הגעה לקהל יעד משפטי',
    kpi: '300% עלייה בפניות',
    views: '28K+',
    engagement: '6.8%'
  },
  {
    id: '4',
    titleHe: 'MatchHR - גיוס משאבי אנוש',
    titleEn: 'MatchHR - HR Recruitment',
    embedUrl: 'https://youtube.com/shorts/1gR8z0LwYuc',
    thumbnail: 'https://img.youtube.com/vi/1gR8z0LwYuc/maxresdefault.jpg',
    category: 'B2B',
    goal: 'מיצוב כמוביל בתחום HR',
    kpi: '200% עלייה בלידים',
    views: '42K+',
    engagement: '9.1%'
  },
  {
    id: '5',
    titleHe: 'Jennyka - כושר ותזונה',
    titleEn: 'Jennyka - Fitness & Nutrition',
    embedUrl: 'https://youtube.com/shorts/EGGIEcHIJKg',
    thumbnail: 'https://img.youtube.com/vi/EGGIEcHIJKg/maxresdefault.jpg',
    category: 'Fitness',
    goal: 'הגברת מכירות תוספי תזונה',
    kpi: '980% עלייה בהזמנות',
    views: '65K+',
    engagement: '15.3%'
  },
  {
    id: '6',
    titleHe: 'One - ייעוץ ארגוני',
    titleEn: 'One - Organizational Consulting',
    embedUrl: 'https://youtube.com/shorts/ff218e3X_dU',
    thumbnail: 'https://img.youtube.com/vi/ff218e3X_dU/maxresdefault.jpg',
    category: 'Consulting',
    goal: 'קביעת פגישות עם מקבלי החלטות',
    kpi: '16 פגישות בחודש',
    views: '22K+',
    engagement: '7.2%'
  },
  {
    id: '7',
    titleHe: 'סלע שקד - ייעוץ פיננסי',
    titleEn: 'Sela Shaked - Financial Consulting',
    embedUrl: 'https://youtube.com/shorts/CnfQSLk__34',
    thumbnail: 'https://img.youtube.com/vi/CnfQSLk__34/maxresdefault.jpg',
    category: 'Consulting',
    goal: 'מיצוב כמומחה פיננסי',
    kpi: '150% עלייה בפניות',
    views: '31K+',
    engagement: '11.7%'
  },
  {
    id: '8',
    titleHe: 'יורוליין - מרשנסקי',
    titleEn: 'Euroline - Mershansky',
    embedUrl: 'https://youtube.com/shorts/HI-txwpDTcg',
    thumbnail: 'https://img.youtube.com/vi/HI-txwpDTcg/maxresdefault.jpg',
    category: 'Other',
    goal: 'הגברת מודעות למותג',
    kpi: '250% עלייה בטראפיק',
    views: '38K+',
    engagement: '8.9%'
  },
];


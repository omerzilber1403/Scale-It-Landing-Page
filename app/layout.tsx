import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Scale It — אסטרטגיות גדילה בדיגיטל | Digital Growth Strategies',
  description: 'סוכנות דיגיטל מובילה בישראל. מתמחים בשיווק דיגיטלי, בניית אתרים וקידום עסקים ברשת. תוצאות מוכחות!',
  keywords: ['שיווק דיגיטלי', 'בניית אתרים', 'קידום אתרים', 'SEO', 'קמפיינים ממומנים', 'ניהול רשתות חברתיות', 'digital marketing', 'Scale It', 'CMO חיצוני'],
  authors: [{ name: 'Scale It Media' }],
  creator: 'Scale It Media',
  publisher: 'Scale It Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Scale It — אסטרטגיות גדילה בדיגיטל',
    description: 'יוצרים למותגים מובילים אסטרטגיות גדילה בדיגיטל עם תוצאות מדידות',
    type: 'website',
    url: 'https://scale-it-media.netlify.app',
    siteName: 'Scale It Media',
    locale: 'he_IL',
    alternateLocale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Scale It Media - Digital Growth Strategies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scale It — Digital Growth Strategies',
    description: 'Creating growth strategies in digital for leading brands with proven results',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const lang = localStorage.getItem('lang') || 'he';
                document.documentElement.lang = lang;
                document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Scale It Media',
              alternateName: 'Scale It',
              description: 'Digital marketing agency specializing in growth strategies and measurable results',
              url: 'https://scale-it-media.netlify.app',
              logo: 'https://scale-it-media.netlify.app/icon.svg',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+972-50-123-4567',
                contactType: 'customer service',
                email: 'hello@scale-it.co.il',
                availableLanguage: ['Hebrew', 'English']
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IL',
                addressLocality: 'Israel'
              },
              sameAs: [
                'https://www.instagram.com/scaleitmedia',
                'https://www.linkedin.com/company/scale-it-media',
                'https://wa.me/972501234567'
              ],
              service: [
                {
                  '@type': 'Service',
                  name: 'Digital Marketing',
                  description: 'Paid campaigns, social media management, and digital strategy'
                },
                {
                  '@type': 'Service', 
                  name: 'Website Development',
                  description: 'Custom website design and development'
                },
                {
                  '@type': 'Service',
                  name: 'SEO Services',
                  description: 'Search engine optimization and organic growth'
                }
              ],
              knowsAbout: ['Digital Marketing', 'SEO', 'Website Development', 'Social Media', 'Paid Advertising', 'Content Creation'],
              foundingDate: '2024',
              numberOfEmployees: '5-10'
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}


import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Scale It — אסטרטגיות גדילה בדיגיטל | Digital Growth Strategies',
  description: 'סוכנות דיגיטל מובילה בישראל. מתמחים בשיווק דיגיטלי, בניית אתרים וקידום עסקים ברשת.',
  keywords: ['שיווק דיגיטלי', 'בניית אתרים', 'קידום אתרים', 'SEO', 'digital marketing', 'Scale It'],
  authors: [{ name: 'Scale It Media' }],
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Scale It — אסטרטגיות גדילה בדיגיטל',
    description: 'יוצרים למותגים מובילים אסטרטגיות גדילה בדיגיטל',
    type: 'website',
    locale: 'he_IL',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scale It — Digital Growth Strategies',
    description: 'Creating growth strategies in digital for leading brands',
  },
  robots: 'index, follow',
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
              description: 'Digital marketing agency specializing in growth strategies',
              knowsAbout: ['Digital Marketing', 'SEO', 'Website Development', 'Social Media'],
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


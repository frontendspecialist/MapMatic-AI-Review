import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { JetBrains_Mono, Manrope, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { AdsProvider } from '../components/ads/AdsProvider';
import { GlobalAdScripts } from '../components/ads/GlobalAdScripts';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'MapMatic AI Review 2026: Features, Pricing, Mega Bundle Deal & Bonuses Explained',
  description:
    'In-depth MapMatic AI Review 2026 covering verified interactive map creation features, Mega Bundle Deal, pricing options, bonuses, competitor comparisons, and 22+ buyer FAQs.',
  openGraph: {
    title: 'MapMatic AI Review 2026: Features, Pricing, Mega Bundle Deal & Bonuses Explained',
    description:
      'In-depth MapMatic AI Review 2026 covering local business map discovery, AI website creation, $49 Front-End vs $347 Mega Bundle Deal, 5 Upgrades, ADA Suite & MobiCentric bonuses, and 22+ FAQs.',
    type: 'article',
    images: ['/assets/aistudio/image_fc1ead36.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/aistudio/image_fc1ead36.png'],
  },
};

const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem('mm_theme_preference');var d=s?s==='dark':(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark ${plusJakarta.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <AdsProvider>
          {children}
          <GlobalAdScripts />
        </AdsProvider>
      </body>
    </html>
  );
}

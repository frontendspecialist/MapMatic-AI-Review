import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PLACEHOLDER_CONFIG } from './data/reviewContent';
import { Header } from './components/Header';
import { MobileToc } from './components/MobileToc';
import { StickySidebarToc } from './components/StickySidebarToc';
import { ArticleBody } from './components/ArticleBody';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

gsap.registerPlugin(ScrollTrigger);

function getInitialTheme(): 'dark' | 'light' {
  try {
    const saved = localStorage.getItem('mm_theme_preference');
    if (saved === 'dark' || saved === 'light') return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  } catch {
    // Ignore storage access errors
  }
  return 'dark';
}

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme);

  const affiliateUrl = PLACEHOLDER_CONFIG.AFFILIATE_URL;
  const singlePrice = PLACEHOLDER_CONFIG.SINGLE_PRICE;
  const bundlePrice = PLACEHOLDER_CONFIG.BUNDLE_PRICE;
  const guaranteePeriod = PLACEHOLDER_CONFIG.GUARANTEE_PERIOD;

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('mm_theme_preference', theme);
    } catch {
      // Ignore storage access errors
    }
  }, [theme]);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.mm-reveal').forEach((el) => {
        gsap.from(el, {
          y: 16,
          opacity: 0,
          duration: 0.45,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            once: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#111214] text-[#171421] dark:text-white transition-colors duration-250">
      {/* Subtle Ambient Top Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,rgba(112,36,232,0.08),transparent_72%)] dark:bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,rgba(120,40,255,0.16),transparent_72%)]"
      />

      <Header
        theme={theme}
        onToggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
        affiliateUrl={affiliateUrl}
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 pt-[104px] pb-10">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-5 flex flex-wrap items-center gap-2 text-xs font-medium text-[#666273] dark:text-[#B8B8C4]"
        >
          <a href="#review-overview" className="hover:text-[#7024E8] dark:hover:text-[#A66BFF]">
            Home
          </a>
          <span aria-hidden="true">/</span>
          <a href="#review-overview" className="hover:text-[#7024E8] dark:hover:text-[#A66BFF]">
            Software Reviews
          </a>
          <span aria-hidden="true">/</span>
          <span className="text-[#171421] dark:text-white font-semibold">
            MapMatic AI Review
          </span>
        </nav>

        {/* 2-Column Editorial Layout (72% Main Article / 28% Sticky Right TOC Sidebar) */}
        <div className="grid grid-cols-1 gap-9 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <main className="min-w-0">
            <MobileToc />
            <ArticleBody
              affiliateUrl={affiliateUrl}
              singlePrice={singlePrice}
              bundlePrice={bundlePrice}
              guaranteePeriod={guaranteePeriod}
              bundleContents={PLACEHOLDER_CONFIG.BUNDLE_CONTENTS}
            />
          </main>

          <StickySidebarToc affiliateUrl={affiliateUrl} />
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
}

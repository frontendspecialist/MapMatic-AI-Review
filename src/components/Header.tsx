'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, ExternalLink, MapPin, Menu, Moon, Sun, X } from 'lucide-react';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  affiliateUrl: string;
}

const NAV_LINKS = [
  { href: '#review-overview', label: 'Overview' },
  { href: '#mapmatic-ai-features', label: 'Features' },
  { href: '#mapmatic-ai-mega-bundle', label: 'Bundle' },
  { href: '#mapmatic-ai-pricing', label: 'Pricing' },
  { href: '#mapmatic-ai-faq', label: 'FAQ' },
];

export function Header({ theme, onToggleTheme, affiliateUrl }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isPlaceholder = !affiliateUrl.trim() || affiliateUrl.includes('[INSERT');
  const resolvedHref = isPlaceholder ? '#mapmatic-ai-pricing' : affiliateUrl;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-white/88 dark:bg-[#111214]/88 backdrop-blur-md border-[#E7E1EF] dark:border-[#34313E]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[74px] max-w-[1320px] items-center justify-between gap-8 px-6">
        {/* Zone 1: Brand Wordmark + Small Icon */}
        <a
          href="#review-overview"
          className="inline-flex items-center gap-2.5 font-display text-base font-extrabold tracking-tight text-[#171421] dark:text-white whitespace-nowrap shrink-0"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7024E8] to-[#914CFF] dark:from-[#7828FF] dark:to-[#A66BFF] text-white">
            <MapPin className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>MAPMATIC AI REVIEW</span>
        </a>

        {/* Zone 2: 5 Concise Single-Line Navigation Links */}
        <nav aria-label="Primary Review Navigation" className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#666273] dark:text-[#B8B8C4] hover:text-[#171421] dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Theme Toggle + Primary Affiliate CTA */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] text-[#171421] dark:text-white hover:border-[#7024E8] dark:hover:border-[#A66BFF] transition-colors cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-[#DCC8FF]" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4 text-[#7024E8]" aria-hidden="true" />
            )}
          </button>

          <a
            href={resolvedHref}
            target={isPlaceholder ? undefined : '_blank'}
            rel={isPlaceholder ? undefined : 'sponsored nofollow noopener'}
            data-affiliate-cta="header-primary"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7024E8] to-[#914CFF] dark:from-[#7828FF] dark:to-[#A66BFF] px-4 py-2.5 text-xs font-bold text-white shadow-[0_10px_24px_-8px_rgba(120,40,255,0.45)] hover:opacity-95 transition-opacity whitespace-nowrap shrink-0"
          >
            <span>Get MapMatic AI</span>
            {isPlaceholder ? (
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            )}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label="Toggle mobile navigation menu"
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] text-[#171421] dark:text-white cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-t border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#191A20] px-6 py-4"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-sm font-semibold text-[#171421] dark:text-white border-b border-[#E7E1EF] dark:border-[#34313E]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={resolvedHref}
              target={isPlaceholder ? undefined : '_blank'}
              rel={isPlaceholder ? undefined : 'sponsored nofollow noopener'}
              data-affiliate-cta="header-mobile"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7024E8] to-[#914CFF] dark:from-[#7828FF] dark:to-[#A66BFF] px-4 py-3 text-sm font-bold text-white"
            >
              <span>Get MapMatic AI</span>
              {isPlaceholder ? (
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              ) : (
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              )}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

'use client';

import { ArrowRight, ExternalLink } from 'lucide-react';
import { CtaConfig } from '../data/reviewContent';

interface AffiliateCtaButtonProps {
  cta: CtaConfig;
  affiliateUrl: string;
  boxed?: boolean;
  fullWidth?: boolean;
}

export function AffiliateCtaButton({
  cta,
  affiliateUrl,
  boxed = false,
  fullWidth = false,
}: AffiliateCtaButtonProps) {
  const resolvedHref =
    affiliateUrl.trim() && !affiliateUrl.includes('[INSERT')
      ? affiliateUrl
      : '#official-offer-placeholder';

  const isPlaceholder = resolvedHref === '#official-offer-placeholder';

  const buttonClasses =
    cta.variant === 'primary'
      ? 'bg-gradient-to-r from-[#7024E8] to-[#914CFF] dark:from-[#7828FF] dark:to-[#A66BFF] text-white shadow-[0_12px_28px_-8px_rgba(120,40,255,0.48)] hover:shadow-[0_16px_34px_-8px_rgba(120,40,255,0.62)] hover:-translate-y-0.5'
      : 'bg-[#F6F4FA] dark:bg-[#191A20] text-[#171421] dark:text-white border border-[#E7E1EF] dark:border-[#34313E] hover:border-[#914CFF] dark:hover:border-[#A66BFF] hover:-translate-y-0.5';

  const anchor = (
    <a
      href={resolvedHref}
      target={isPlaceholder ? undefined : '_blank'}
      rel="sponsored nofollow noopener"
      data-affiliate-cta={cta.id}
      onClick={(e) => {
        if (isPlaceholder) {
          e.preventDefault();
          const target = document.getElementById('mapmatic-ai-pricing');
          target?.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl px-5 sm:px-6 py-3.5 text-center text-sm font-bold tracking-tight transition-all duration-200 sm:whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7828FF] ${buttonClasses} ${
        fullWidth ? 'w-full' : 'max-w-full'
      }`}
    >
      <span>{cta.label}</span>
      {isPlaceholder ? (
        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
      ) : (
        <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
      )}
    </a>
  );

  if (!boxed) {
    return anchor;
  }

  return (
    <div className="mm-reveal my-8 rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-gradient-to-br from-[#7024E8]/[0.07] via-transparent to-[#914CFF]/[0.04] dark:from-[#7828FF]/[0.14] dark:via-[#191A20] dark:to-[#202129] p-6 text-center">
      <div className="flex flex-col items-center gap-3">
        {anchor}
        {cta.subtext && (
          <p className="text-xs font-medium text-[#666273] dark:text-[#B8B8C4]">
            {cta.subtext}
          </p>
        )}
      </div>
    </div>
  );
}

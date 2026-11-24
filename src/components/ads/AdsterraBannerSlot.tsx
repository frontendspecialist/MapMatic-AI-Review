'use client';

import { useEffect, useRef } from 'react';
import { useAdsConfig } from './AdsProvider';
import { isBanner250x300Active, parseAdsterraBanner250x300 } from '../../utils/adSlotParser';

interface AdsterraBannerSlotProps {
  placement: 'sidebar' | 'article';
}

// Serialize Adsterra atOptions banner loads to avoid global window.atOptions race conditions
let bannerQueue: Promise<void> = Promise.resolve();

function enqueueBannerLoad(task: () => Promise<void>): void {
  bannerQueue = bannerQueue.then(task).catch(() => {});
}

export function AdsterraBannerSlot({ placement }: AdsterraBannerSlotProps) {
  const { adsConfig } = useAdsConfig();
  const slotRef = useRef<HTMLDivElement | null>(null);

  const cfg = adsConfig.banner250x300;
  const active =
    isBanner250x300Active(cfg) &&
    ((placement === 'sidebar' && cfg.showInSidebar) ||
      (placement === 'article' && cfg.showInArticle));

  const parsed = parseAdsterraBanner250x300(cfg.rawSnippet);
  const key = cfg.key.trim() || parsed.key;
  const scriptSrc = cfg.scriptSrc.trim() || parsed.scriptSrc;
  const width = cfg.width || parsed.width || 250;
  const height = cfg.height || parsed.height || 300;

  useEffect(() => {
    const container = slotRef.current;
    if (!container || !active || !key || !scriptSrc) return;

    let cancelled = false;

    enqueueBannerLoad(
      () =>
        new Promise<void>((resolve) => {
          if (cancelled || !container) {
            resolve();
            return;
          }

          container.innerHTML = '';

          const optionsScript = document.createElement('script');
          optionsScript.type = 'text/javascript';
          optionsScript.text = `atOptions = { 'key': '${key.replace(
            /'/g,
            ''
          )}', 'format': 'iframe', 'height': ${Number(height)}, 'width': ${Number(
            width
          )}, 'params': {} };`;

          const invokeScript = document.createElement('script');
          invokeScript.type = 'text/javascript';
          invokeScript.src = scriptSrc;
          invokeScript.onload = () => resolve();
          invokeScript.onerror = () => resolve();

          container.appendChild(optionsScript);
          container.appendChild(invokeScript);

          // Safety resolve fallback in case invoke.js stalls or gets blocked
          setTimeout(resolve, 1500);
        })
    );

    return () => {
      cancelled = true;
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [active, height, key, scriptSrc, width]);

  if (!active || !key || !scriptSrc) {
    return null;
  }

  return (
    <div
      aria-label={`Sponsored ${width}x${height} Banner`}
      data-testid={`adsterra-banner-${placement}`}
      className={`flex flex-col items-center justify-center rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA]/75 dark:bg-[#191A20]/80 p-3 text-center ${
        placement === 'article' ? 'my-8 mx-auto max-w-[340px]' : 'w-full'
      }`}
    >
      <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#666273] dark:text-[#B8B8C4]">
        Advertisement
      </div>
      <div
        ref={slotRef}
        style={{ minWidth: `${width}px`, minHeight: `${height}px` }}
        className="flex items-center justify-center overflow-hidden rounded-xl"
      />
    </div>
  );
}

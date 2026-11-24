'use client';

import { useEffect, useRef } from 'react';
import { useAdsConfig } from './AdsProvider';
import { isNativeBannerActive, parseAdsterraNativeBanner } from '../../utils/adSlotParser';

export function AdsterraNativeSlot() {
  const { adsConfig } = useAdsConfig();
  const hostRef = useRef<HTMLDivElement | null>(null);

  const active = isNativeBannerActive(adsConfig.nativeBanner);
  const parsed = parseAdsterraNativeBanner(adsConfig.nativeBanner.rawSnippet);
  const scriptSrc = adsConfig.nativeBanner.scriptSrc.trim() || parsed.scriptSrc;
  const containerId = adsConfig.nativeBanner.containerId.trim() || parsed.containerId;

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !active || !scriptSrc || !containerId) return;

    host.innerHTML = '';

    const adTarget = document.createElement('div');
    adTarget.id = containerId;
    host.appendChild(adTarget);

    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = scriptSrc;
    host.appendChild(script);

    return () => {
      if (host) {
        host.innerHTML = '';
      }
    };
  }, [active, containerId, scriptSrc]);

  if (!active || !scriptSrc || !containerId) {
    return null;
  }

  return (
    <div
      aria-label="Sponsored Native Content"
      data-testid="adsterra-native-slot"
      className="my-8 rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA]/70 dark:bg-[#191A20]/70 p-4 text-center"
    >
      <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#666273] dark:text-[#B8B8C4]">
        Advertisement
      </div>
      <div ref={hostRef} className="min-h-[100px] flex items-center justify-center" />
    </div>
  );
}

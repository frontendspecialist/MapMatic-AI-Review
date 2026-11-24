'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAdsConfig } from './AdsProvider';
import {
  isMonetagPopunderActive,
  isSocialBarActive,
  parseAdsterraSocialBar,
  parseMonetagPopunder,
} from '../../utils/adSlotParser';

export function GlobalAdScripts() {
  const pathname = usePathname();
  const { adsConfig } = useAdsConfig();

  // Keep setup page free from popunder/social-bar overlays while editing codes
  const isSetupRoute = pathname?.startsWith('/ads-setup');

  // 1. Adsterra Social Bar Global Script
  useEffect(() => {
    if (isSetupRoute || !isSocialBarActive(adsConfig.socialBar)) return;

    const src =
      adsConfig.socialBar.scriptSrc.trim() ||
      parseAdsterraSocialBar(adsConfig.socialBar.rawSnippet).scriptSrc;

    if (!src) return;

    const scriptId = 'mm-adsterra-socialbar-script';
    document.getElementById(scriptId)?.remove();

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [adsConfig.socialBar, isSetupRoute]);

  // 2. Monetag Popunder Global Script
  useEffect(() => {
    if (isSetupRoute || !isMonetagPopunderActive(adsConfig.monetagPopunder)) return;

    const parsed = parseMonetagPopunder(adsConfig.monetagPopunder.rawSnippet);
    const src = adsConfig.monetagPopunder.scriptSrc.trim() || parsed.scriptSrc;
    const zoneId = adsConfig.monetagPopunder.zoneId.trim() || parsed.zoneId;

    const scriptId = 'mm-monetag-popunder-script';
    document.getElementById(scriptId)?.remove();

    if (src) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = src;
      script.async = true;
      if (zoneId) {
        script.dataset.zone = zoneId;
      }
      script.setAttribute('data-cfasync', 'false');
      (document.body || document.documentElement).appendChild(script);
    } else if (adsConfig.monetagPopunder.rawSnippet.trim()) {
      const inlineMatch = adsConfig.monetagPopunder.rawSnippet.match(
        /<script[^>]*>([\s\S]*?)<\/script>/i
      );
      if (inlineMatch?.[1]) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.text = inlineMatch[1];
        (document.body || document.documentElement).appendChild(script);
      }
    }

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [adsConfig.monetagPopunder, isSetupRoute]);

  return null;
}

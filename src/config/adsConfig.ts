import {
  normalizeScriptUrl,
  type SiteAdsConfig,
} from '../utils/adSlotParser';

/**
 * Central Adsterra & Monetag Configuration for Vercel / Next.js Deployment.
 *
 * Option 1: Edit these values directly and push to GitHub/Vercel.
 * Option 2: Use the interactive `/ads-setup` page in your browser to paste raw snippets
 *           and copy either this file or Vercel NEXT_PUBLIC_* Environment Variables.
 */
export const DEFAULT_ADS_CONFIG: SiteAdsConfig = {
  socialBar: {
    enabled: false,
    scriptSrc: '',
    rawSnippet: '',
  },
  nativeBanner: {
    enabled: false,
    scriptSrc: '',
    containerId: '',
    rawSnippet: '',
  },
  banner250x300: {
    enabled: false,
    key: '',
    scriptSrc: '',
    width: 250,
    height: 300,
    showInSidebar: true,
    showInArticle: true,
    rawSnippet: '',
  },
  monetagPopunder: {
    enabled: false,
    zoneId: '',
    scriptSrc: '',
    rawSnippet: '',
  },
};

export function getResolvedBaseAdsConfig(): SiteAdsConfig {
  const envSocialSrc = normalizeScriptUrl(
    process.env.NEXT_PUBLIC_ADSTERRA_SOCIALBAR_SRC || ''
  );
  const envNativeSrc = normalizeScriptUrl(
    process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_SRC || ''
  );
  const envNativeId = (process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_CONTAINER_ID || '').trim();
  const envBannerKey = (process.env.NEXT_PUBLIC_ADSTERRA_BANNER_250X300_KEY || '').trim();
  const envBannerSrc = normalizeScriptUrl(
    process.env.NEXT_PUBLIC_ADSTERRA_BANNER_250X300_SRC || ''
  );
  const envMonetagSrc = normalizeScriptUrl(
    process.env.NEXT_PUBLIC_MONETAG_POPUNDER_SRC || ''
  );
  const envMonetagZone = (process.env.NEXT_PUBLIC_MONETAG_POPUNDER_ZONE || '').trim();

  return {
    socialBar: {
      enabled: Boolean(envSocialSrc) || DEFAULT_ADS_CONFIG.socialBar.enabled,
      scriptSrc: envSocialSrc || DEFAULT_ADS_CONFIG.socialBar.scriptSrc,
      rawSnippet: DEFAULT_ADS_CONFIG.socialBar.rawSnippet,
    },
    nativeBanner: {
      enabled:
        Boolean(envNativeSrc && envNativeId) || DEFAULT_ADS_CONFIG.nativeBanner.enabled,
      scriptSrc: envNativeSrc || DEFAULT_ADS_CONFIG.nativeBanner.scriptSrc,
      containerId: envNativeId || DEFAULT_ADS_CONFIG.nativeBanner.containerId,
      rawSnippet: DEFAULT_ADS_CONFIG.nativeBanner.rawSnippet,
    },
    banner250x300: {
      enabled:
        Boolean(envBannerKey) || DEFAULT_ADS_CONFIG.banner250x300.enabled,
      key: envBannerKey || DEFAULT_ADS_CONFIG.banner250x300.key,
      scriptSrc:
        envBannerSrc ||
        (envBannerKey
          ? `https://www.highperformanceformat.com/${envBannerKey}/invoke.js`
          : DEFAULT_ADS_CONFIG.banner250x300.scriptSrc),
      width: DEFAULT_ADS_CONFIG.banner250x300.width || 250,
      height: DEFAULT_ADS_CONFIG.banner250x300.height || 300,
      showInSidebar: DEFAULT_ADS_CONFIG.banner250x300.showInSidebar,
      showInArticle: DEFAULT_ADS_CONFIG.banner250x300.showInArticle,
      rawSnippet: DEFAULT_ADS_CONFIG.banner250x300.rawSnippet,
    },
    monetagPopunder: {
      enabled:
        Boolean(envMonetagSrc) || DEFAULT_ADS_CONFIG.monetagPopunder.enabled,
      zoneId: envMonetagZone || DEFAULT_ADS_CONFIG.monetagPopunder.zoneId,
      scriptSrc: envMonetagSrc || DEFAULT_ADS_CONFIG.monetagPopunder.scriptSrc,
      rawSnippet: DEFAULT_ADS_CONFIG.monetagPopunder.rawSnippet,
    },
  };
}

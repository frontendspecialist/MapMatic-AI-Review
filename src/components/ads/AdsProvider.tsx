'use client';

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { getResolvedBaseAdsConfig } from '../../config/adsConfig';
import type { SiteAdsConfig } from '../../utils/adSlotParser';

const STORAGE_KEY = 'mm_ads_preview_config_v1';

interface AdsContextValue {
  adsConfig: SiteAdsConfig;
  hasBrowserOverride: boolean;
  updateBrowserPreview: (next: SiteAdsConfig) => void;
  clearBrowserPreview: () => void;
}

const AdsContext = createContext<AdsContextValue | null>(null);

export function AdsProvider({ children }: { children: ReactNode }) {
  const [adsConfig, setAdsConfig] = useState<SiteAdsConfig>(() => getResolvedBaseAdsConfig());
  const [hasBrowserOverride, setHasBrowserOverride] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<SiteAdsConfig>;
        const base = getResolvedBaseAdsConfig();
        setAdsConfig({
          socialBar: { ...base.socialBar, ...parsed.socialBar },
          nativeBanner: { ...base.nativeBanner, ...parsed.nativeBanner },
          banner250x300: { ...base.banner250x300, ...parsed.banner250x300 },
          monetagPopunder: { ...base.monetagPopunder, ...parsed.monetagPopunder },
        });
        setHasBrowserOverride(true);
      }
    } catch {
      // Ignore invalid or blocked localStorage state
    }
  }, []);

  const updateBrowserPreview = useCallback((next: SiteAdsConfig) => {
    setAdsConfig(next);
    setHasBrowserOverride(true);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage access errors
    }
  }, []);

  const clearBrowserPreview = useCallback(() => {
    setAdsConfig(getResolvedBaseAdsConfig());
    setHasBrowserOverride(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage access errors
    }
  }, []);

  return (
    <AdsContext.Provider
      value={{
        adsConfig,
        hasBrowserOverride,
        updateBrowserPreview,
        clearBrowserPreview,
      }}
    >
      {children}
    </AdsContext.Provider>
  );
}

export function useAdsConfig(): AdsContextValue {
  const ctx = useContext(AdsContext);
  if (!ctx) {
    return {
      adsConfig: getResolvedBaseAdsConfig(),
      hasBrowserOverride: false,
      updateBrowserPreview: () => {},
      clearBrowserPreview: () => {},
    };
  }
  return ctx;
}

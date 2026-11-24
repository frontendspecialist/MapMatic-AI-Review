'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Check,
  Code2,
  Copy,
  Eye,
  LayoutGrid,
  MapPin,
  MousePointerClick,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useAdsConfig } from '../../components/ads/AdsProvider';
import {
  generateAdsConfigTsFile,
  generateVercelEnvBlock,
  isBanner250x300Active,
  isMonetagPopunderActive,
  isNativeBannerActive,
  isSocialBarActive,
  parseAdsterraBanner250x300,
  parseAdsterraNativeBanner,
  parseAdsterraSocialBar,
  parseMonetagPopunder,
  type SiteAdsConfig,
} from '../../utils/adSlotParser';

export default function AdsSetupPage() {
  const { adsConfig, hasBrowserOverride, updateBrowserPreview, clearBrowserPreview } = useAdsConfig();
  const [draft, setDraft] = useState<SiteAdsConfig>(adsConfig);
  const [savedNotice, setSavedNotice] = useState(false);
  const [copiedType, setCopiedType] = useState<'ts' | 'env' | null>(null);

  useEffect(() => {
    setDraft(adsConfig);
  }, [adsConfig]);

  const handleSavePreview = () => {
    updateBrowserPreview(draft);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  const handleReset = () => {
    clearBrowserPreview();
    setSavedNotice(false);
  };

  const handleCopy = async (kind: 'ts' | 'env') => {
    const content =
      kind === 'ts' ? generateAdsConfigTsFile(draft) : generateVercelEnvBlock(draft);
    try {
      await navigator.clipboard.writeText(content);
      setCopiedType(kind);
      setTimeout(() => setCopiedType(null), 2500);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#111214] text-[#171421] dark:text-white">
      <header className="sticky top-0 z-40 border-b border-[#E7E1EF] dark:border-[#34313E] bg-white/90 dark:bg-[#111214]/90 backdrop-blur-md">
        <div className="mx-auto flex h-[74px] max-w-[1160px] items-center justify-between gap-4 px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 font-display text-sm sm:text-base font-extrabold tracking-tight text-[#171421] dark:text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7024E8] to-[#914CFF] dark:from-[#7828FF] dark:to-[#A66BFF] text-white">
              <MapPin className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>MAPMATIC AI REVIEW · AD SYSTEM</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#202129] px-4 py-2 text-xs font-bold text-[#171421] dark:text-white hover:border-[#7024E8] dark:hover:border-[#A66BFF] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to Review Site</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1160px] px-6 py-10">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#7024E8] dark:text-[#A66BFF]">
              Next.js Monetization System · Adsterra + Monetag
            </div>
            <h1 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
              Configure Adsterra &amp; Monetag Ad Slots
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-[#666273] dark:text-[#B8B8C4]">
              Paste your Adsterra Social Bar, Native Banner, 250x300px Banner, and Monetag Popunder snippets below. Values auto-extract immediately—preview in your browser or copy the generated config into GitHub / Vercel Environment Variables for all visitors.
            </p>
          </div>

          {hasBrowserOverride && (
            <div className="inline-flex items-center gap-2 rounded-xl border border-[#7024E8]/35 bg-[#7024E8]/10 px-3.5 py-2 text-xs font-semibold text-[#7024E8] dark:text-[#DCC8FF]">
              <Eye className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Browser Preview Active</span>
            </div>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* 1. Adsterra Social Bar */}
          <section className="rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7024E8]/12 dark:bg-[#7828FF]/20 text-[#7024E8] dark:text-[#A66BFF]">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold">1. Adsterra Social Bar</h2>
                  <p className="text-xs text-[#666273] dark:text-[#B8B8C4]">
                    Global floating bar script loaded once per page
                  </p>
                </div>
              </div>

              <label className="inline-flex items-center gap-2 text-xs font-bold cursor-pointer">
                <input
                  type="checkbox"
                  checked={draft.socialBar.enabled}
                  onChange={(e) =>
                    setDraft((prev) => ({
                      ...prev,
                      socialBar: { ...prev.socialBar, enabled: e.target.checked },
                    }))
                  }
                  className="h-4 w-4 accent-[#7828FF]"
                />
                <span>{isSocialBarActive(draft.socialBar) ? 'Active' : 'Enabled'}</span>
              </label>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <label
                  htmlFor="socialbar-snippet"
                  className="block text-xs font-semibold text-[#666273] dark:text-[#B8B8C4] mb-1"
                >
                  Paste Adsterra Social Bar Script Tag or URL
                </label>
                <textarea
                  id="socialbar-snippet"
                  rows={3}
                  value={draft.socialBar.rawSnippet}
                  onChange={(e) => {
                    const val = e.target.value;
                    const parsed = parseAdsterraSocialBar(val);
                    setDraft((prev) => ({
                      ...prev,
                      socialBar: {
                        ...prev.socialBar,
                        enabled: parsed.scriptSrc ? true : prev.socialBar.enabled,
                        rawSnippet: val,
                        scriptSrc: parsed.scriptSrc || prev.socialBar.scriptSrc,
                      },
                    }));
                  }}
                  placeholder="<script type='text/javascript' src='//plXXXX.profitablecpmrate.com/xx/xx/xx.js'></script>"
                  className="w-full rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#191A20] px-3 py-2 font-mono-tabular text-xs text-[#171421] dark:text-white focus:border-[#7828FF] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="socialbar-src"
                  className="block text-xs font-semibold text-[#666273] dark:text-[#B8B8C4] mb-1"
                >
                  Extracted Script URL
                </label>
                <input
                  id="socialbar-src"
                  type="text"
                  value={draft.socialBar.scriptSrc}
                  onChange={(e) =>
                    setDraft((prev) => ({
                      ...prev,
                      socialBar: { ...prev.socialBar, scriptSrc: e.target.value },
                    }))
                  }
                  placeholder="https://plXXXX.profitablecpmrate.com/.../script.js"
                  className="w-full rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#191A20] px-3 py-2 font-mono-tabular text-xs text-[#171421] dark:text-white focus:border-[#7828FF] focus:outline-none"
                />
              </div>
            </div>
          </section>

          {/* 2. Adsterra Native Banner */}
          <section className="rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7024E8]/12 dark:bg-[#7828FF]/20 text-[#7024E8] dark:text-[#A66BFF]">
                  <LayoutGrid className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold">2. Adsterra Native Banner</h2>
                  <p className="text-xs text-[#666273] dark:text-[#B8B8C4]">
                    Inline article placement between Features &amp; Bundle
                  </p>
                </div>
              </div>

              <label className="inline-flex items-center gap-2 text-xs font-bold cursor-pointer">
                <input
                  type="checkbox"
                  checked={draft.nativeBanner.enabled}
                  onChange={(e) =>
                    setDraft((prev) => ({
                      ...prev,
                      nativeBanner: { ...prev.nativeBanner, enabled: e.target.checked },
                    }))
                  }
                  className="h-4 w-4 accent-[#7828FF]"
                />
                <span>{isNativeBannerActive(draft.nativeBanner) ? 'Active' : 'Enabled'}</span>
              </label>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <label
                  htmlFor="native-snippet"
                  className="block text-xs font-semibold text-[#666273] dark:text-[#B8B8C4] mb-1"
                >
                  Paste Adsterra Native Banner Code (&lt;script&gt; + &lt;div id=&quot;container-...&quot;&gt;)
                </label>
                <textarea
                  id="native-snippet"
                  rows={3}
                  value={draft.nativeBanner.rawSnippet}
                  onChange={(e) => {
                    const val = e.target.value;
                    const parsed = parseAdsterraNativeBanner(val);
                    setDraft((prev) => ({
                      ...prev,
                      nativeBanner: {
                        ...prev.nativeBanner,
                        enabled:
                          parsed.scriptSrc && parsed.containerId
                            ? true
                            : prev.nativeBanner.enabled,
                        rawSnippet: val,
                        scriptSrc: parsed.scriptSrc || prev.nativeBanner.scriptSrc,
                        containerId: parsed.containerId || prev.nativeBanner.containerId,
                      },
                    }));
                  }}
                  placeholder='<script async="async" data-cfasync="false" src="//plXXXX.../invoke.js"></script><div id="container-xxxx"></div>'
                  className="w-full rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#191A20] px-3 py-2 font-mono-tabular text-xs text-[#171421] dark:text-white focus:border-[#7828FF] focus:outline-none"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="native-src"
                    className="block text-xs font-semibold text-[#666273] dark:text-[#B8B8C4] mb-1"
                  >
                    Invoke Script URL
                  </label>
                  <input
                    id="native-src"
                    type="text"
                    value={draft.nativeBanner.scriptSrc}
                    onChange={(e) =>
                      setDraft((prev) => ({
                        ...prev,
                        nativeBanner: { ...prev.nativeBanner, scriptSrc: e.target.value },
                      }))
                    }
                    placeholder="https://.../invoke.js"
                    className="w-full rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#191A20] px-3 py-2 font-mono-tabular text-xs text-[#171421] dark:text-white focus:border-[#7828FF] focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="native-container-id"
                    className="block text-xs font-semibold text-[#666273] dark:text-[#B8B8C4] mb-1"
                  >
                    Container Div ID
                  </label>
                  <input
                    id="native-container-id"
                    type="text"
                    value={draft.nativeBanner.containerId}
                    onChange={(e) =>
                      setDraft((prev) => ({
                        ...prev,
                        nativeBanner: { ...prev.nativeBanner, containerId: e.target.value },
                      }))
                    }
                    placeholder="container-9988776655"
                    className="w-full rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#191A20] px-3 py-2 font-mono-tabular text-xs text-[#171421] dark:text-white focus:border-[#7828FF] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 3. Adsterra 250x300px Banner Ads */}
          <section className="rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7024E8]/12 dark:bg-[#7828FF]/20 text-[#7024E8] dark:text-[#A66BFF]">
                  <Code2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold">3. Adsterra 250x300px Banner</h2>
                  <p className="text-xs text-[#666273] dark:text-[#B8B8C4]">
                    Sticky Sidebar (below TOC) &amp; optional Mid-Article slot
                  </p>
                </div>
              </div>

              <label className="inline-flex items-center gap-2 text-xs font-bold cursor-pointer">
                <input
                  type="checkbox"
                  checked={draft.banner250x300.enabled}
                  onChange={(e) =>
                    setDraft((prev) => ({
                      ...prev,
                      banner250x300: { ...prev.banner250x300, enabled: e.target.checked },
                    }))
                  }
                  className="h-4 w-4 accent-[#7828FF]"
                />
                <span>{isBanner250x300Active(draft.banner250x300) ? 'Active' : 'Enabled'}</span>
              </label>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <label
                  htmlFor="banner-snippet"
                  className="block text-xs font-semibold text-[#666273] dark:text-[#B8B8C4] mb-1"
                >
                  Paste Adsterra atOptions + invoke.js Snippet
                </label>
                <textarea
                  id="banner-snippet"
                  rows={3}
                  value={draft.banner250x300.rawSnippet}
                  onChange={(e) => {
                    const val = e.target.value;
                    const parsed = parseAdsterraBanner250x300(val);
                    setDraft((prev) => ({
                      ...prev,
                      banner250x300: {
                        ...prev.banner250x300,
                        enabled: parsed.key ? true : prev.banner250x300.enabled,
                        rawSnippet: val,
                        key: parsed.key || prev.banner250x300.key,
                        scriptSrc: parsed.scriptSrc || prev.banner250x300.scriptSrc,
                        width: parsed.width || prev.banner250x300.width,
                        height: parsed.height || prev.banner250x300.height,
                      },
                    }));
                  }}
                  placeholder="<script>atOptions = { 'key': '...', 'format': 'iframe', 'height': 300, 'width': 250 };</script><script src='//www.highperformanceformat.com/.../invoke.js'></script>"
                  className="w-full rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#191A20] px-3 py-2 font-mono-tabular text-xs text-[#171421] dark:text-white focus:border-[#7828FF] focus:outline-none"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="banner-key"
                    className="block text-xs font-semibold text-[#666273] dark:text-[#B8B8C4] mb-1"
                  >
                    Adsterra Key
                  </label>
                  <input
                    id="banner-key"
                    type="text"
                    value={draft.banner250x300.key}
                    onChange={(e) =>
                      setDraft((prev) => ({
                        ...prev,
                        banner250x300: { ...prev.banner250x300, key: e.target.value },
                      }))
                    }
                    placeholder="abcd1234ef567890..."
                    className="w-full rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#191A20] px-3 py-2 font-mono-tabular text-xs text-[#171421] dark:text-white focus:border-[#7828FF] focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="banner-src"
                    className="block text-xs font-semibold text-[#666273] dark:text-[#B8B8C4] mb-1"
                  >
                    Invoke Script URL
                  </label>
                  <input
                    id="banner-src"
                    type="text"
                    value={draft.banner250x300.scriptSrc}
                    onChange={(e) =>
                      setDraft((prev) => ({
                        ...prev,
                        banner250x300: { ...prev.banner250x300, scriptSrc: e.target.value },
                      }))
                    }
                    placeholder="https://www.highperformanceformat.com/.../invoke.js"
                    className="w-full rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#191A20] px-3 py-2 font-mono-tabular text-xs text-[#171421] dark:text-white focus:border-[#7828FF] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs">
                <label className="inline-flex items-center gap-2 font-semibold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={draft.banner250x300.showInSidebar}
                    onChange={(e) =>
                      setDraft((prev) => ({
                        ...prev,
                        banner250x300: {
                          ...prev.banner250x300,
                          showInSidebar: e.target.checked,
                        },
                      }))
                    }
                    className="h-3.5 w-3.5 accent-[#7828FF]"
                  />
                  <span>Show in Sticky Sidebar</span>
                </label>

                <label className="inline-flex items-center gap-2 font-semibold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={draft.banner250x300.showInArticle}
                    onChange={(e) =>
                      setDraft((prev) => ({
                        ...prev,
                        banner250x300: {
                          ...prev.banner250x300,
                          showInArticle: e.target.checked,
                        },
                      }))
                    }
                    className="h-3.5 w-3.5 accent-[#7828FF]"
                  />
                  <span>Show Mid-Article</span>
                </label>
              </div>
            </div>
          </section>

          {/* 4. Monetag Popunder Ad */}
          <section className="rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7024E8]/12 dark:bg-[#7828FF]/20 text-[#7024E8] dark:text-[#A66BFF]">
                  <MousePointerClick className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold">4. Monetag Popunder Ad</h2>
                  <p className="text-xs text-[#666273] dark:text-[#B8B8C4]">
                    Global Monetag tag supporting zone ID &amp; script injection
                  </p>
                </div>
              </div>

              <label className="inline-flex items-center gap-2 text-xs font-bold cursor-pointer">
                <input
                  type="checkbox"
                  checked={draft.monetagPopunder.enabled}
                  onChange={(e) =>
                    setDraft((prev) => ({
                      ...prev,
                      monetagPopunder: { ...prev.monetagPopunder, enabled: e.target.checked },
                    }))
                  }
                  className="h-4 w-4 accent-[#7828FF]"
                />
                <span>{isMonetagPopunderActive(draft.monetagPopunder) ? 'Active' : 'Enabled'}</span>
              </label>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <label
                  htmlFor="monetag-snippet"
                  className="block text-xs font-semibold text-[#666273] dark:text-[#B8B8C4] mb-1"
                >
                  Paste Monetag Popunder Tag Snippet
                </label>
                <textarea
                  id="monetag-snippet"
                  rows={3}
                  value={draft.monetagPopunder.rawSnippet}
                  onChange={(e) => {
                    const val = e.target.value;
                    const parsed = parseMonetagPopunder(val);
                    setDraft((prev) => ({
                      ...prev,
                      monetagPopunder: {
                        ...prev.monetagPopunder,
                        enabled:
                          parsed.scriptSrc || parsed.zoneId
                            ? true
                            : prev.monetagPopunder.enabled,
                        rawSnippet: val,
                        zoneId: parsed.zoneId || prev.monetagPopunder.zoneId,
                        scriptSrc: parsed.scriptSrc || prev.monetagPopunder.scriptSrc,
                      },
                    }));
                  }}
                  placeholder="<script>(function(s){s.dataset.zone='XXXXXXX',s.src='https://al5sm.com/tag.min.js'})(...)</script>"
                  className="w-full rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#191A20] px-3 py-2 font-mono-tabular text-xs text-[#171421] dark:text-white focus:border-[#7828FF] focus:outline-none"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="monetag-zone"
                    className="block text-xs font-semibold text-[#666273] dark:text-[#B8B8C4] mb-1"
                  >
                    Zone ID
                  </label>
                  <input
                    id="monetag-zone"
                    type="text"
                    value={draft.monetagPopunder.zoneId}
                    onChange={(e) =>
                      setDraft((prev) => ({
                        ...prev,
                        monetagPopunder: { ...prev.monetagPopunder, zoneId: e.target.value },
                      }))
                    }
                    placeholder="8765432"
                    className="w-full rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#191A20] px-3 py-2 font-mono-tabular text-xs text-[#171421] dark:text-white focus:border-[#7828FF] focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="monetag-src"
                    className="block text-xs font-semibold text-[#666273] dark:text-[#B8B8C4] mb-1"
                  >
                    Tag Script URL
                  </label>
                  <input
                    id="monetag-src"
                    type="text"
                    value={draft.monetagPopunder.scriptSrc}
                    onChange={(e) =>
                      setDraft((prev) => ({
                        ...prev,
                        monetagPopunder: { ...prev.monetagPopunder, scriptSrc: e.target.value },
                      }))
                    }
                    placeholder="https://al5sm.com/tag.min.js"
                    className="w-full rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#191A20] px-3 py-2 font-mono-tabular text-xs text-[#171421] dark:text-white focus:border-[#7828FF] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Save + Deploy Code Actions */}
        <section className="mt-8 rounded-2xl border border-[#7024E8]/30 dark:border-[#7828FF]/40 bg-[#F6F4FA] dark:bg-[#191A20] p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-base font-extrabold flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#7024E8] dark:text-[#A66BFF]" aria-hidden="true" />
                <span>Deploy Your Ads Globally on Vercel</span>
              </h2>
              <p className="mt-1 text-xs text-[#666273] dark:text-[#B8B8C4]">
                Use <strong>Save Browser Preview</strong> to test immediately on this browser, then copy <code>src/config/adsConfig.ts</code> into GitHub or paste the <code>.env</code> variables in Vercel Dashboard so every visitor sees your ads.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handleSavePreview}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7024E8] to-[#914CFF] dark:from-[#7828FF] dark:to-[#A66BFF] px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:opacity-95 cursor-pointer"
              >
                {savedNotice ? <Check className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span>{savedNotice ? 'Preview Saved!' : 'Save Browser Preview'}</span>
              </button>

              <button
                type="button"
                onClick={() => handleCopy('ts')}
                className="inline-flex items-center gap-2 rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] px-4 py-2.5 text-xs font-bold text-[#171421] dark:text-white hover:border-[#7024E8] dark:hover:border-[#A66BFF] cursor-pointer"
              >
                {copiedType === 'ts' ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                <span>{copiedType === 'ts' ? 'Copied adsConfig.ts!' : 'Copy adsConfig.ts'}</span>
              </button>

              <button
                type="button"
                onClick={() => handleCopy('env')}
                className="inline-flex items-center gap-2 rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] px-4 py-2.5 text-xs font-bold text-[#171421] dark:text-white hover:border-[#7024E8] dark:hover:border-[#A66BFF] cursor-pointer"
              >
                {copiedType === 'env' ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                <span>{copiedType === 'env' ? 'Copied .env!' : 'Copy Vercel .env'}</span>
              </button>

              {hasBrowserOverride && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#E7E1EF] dark:border-[#34313E] px-3 py-2.5 text-xs font-semibold text-[#666273] dark:text-[#B8B8C4] hover:text-[#171421] dark:hover:text-white cursor-pointer"
                >
                  <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

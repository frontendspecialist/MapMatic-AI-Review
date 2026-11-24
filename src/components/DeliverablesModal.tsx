import { useMemo, useState } from 'react';
import { Check, Copy, Download, FileCode2, FileText, Settings, X } from 'lucide-react';
import { generateBloggerXmlTheme } from '../deliverables/bloggerThemeXml';
import { generateArticleHtml } from '../deliverables/articleHtmlBuilder';
import {
  DELIVERABLE_3_AFFILIATE_CONFIG,
  DELIVERABLE_4_ADSTERRA_GUIDE,
  DELIVERABLE_5_BLOGGER_INSTALL,
} from '../deliverables/instructions';
import { countVisibleWords, findMissingKeywords, validateBloggerXmlStructure } from '../utils/seoAudit';

interface DeliverablesModalProps {
  open: boolean;
  onClose: () => void;
  affiliateUrl: string;
  onChangeAffiliateUrl: (v: string) => void;
  singlePrice: string;
  onChangeSinglePrice: (v: string) => void;
  bundlePrice: string;
  onChangeBundlePrice: (v: string) => void;
  guaranteePeriod: string;
  onChangeGuaranteePeriod: (v: string) => void;
}

type TabKey = 'd1' | 'd2' | 'd3' | 'd4' | 'd5' | 'config';

export function DeliverablesModal({
  open,
  onClose,
  affiliateUrl,
  onChangeAffiliateUrl,
  singlePrice,
  onChangeSinglePrice,
  bundlePrice,
  onChangeBundlePrice,
  guaranteePeriod,
  onChangeGuaranteePeriod,
}: DeliverablesModalProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('d1');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const xmlContent = useMemo(() => generateBloggerXmlTheme(), []);
  const articleHtml = useMemo(() => generateArticleHtml(), []);
  const wordCount = useMemo(() => countVisibleWords(xmlContent), [xmlContent]);
  const missingKeywords = useMemo(() => findMissingKeywords(xmlContent), [xmlContent]);
  const xmlAudit = useMemo(() => validateBloggerXmlStructure(xmlContent), [xmlContent]);

  if (!open) return null;

  const tabs: { key: TabKey; label: string; filename?: string; content?: string; mime?: string }[] = [
    {
      key: 'd1',
      label: '1. Complete Single XML Theme',
      filename: 'mapmatic-ai-review-theme.xml',
      content: xmlContent,
      mime: 'application/xml',
    },
    {
      key: 'd2',
      label: '2. Merged Article Reference (HTML)',
      filename: 'mapmatic-ai-review-article.html',
      content: articleHtml,
      mime: 'text/html',
    },
    {
      key: 'd3',
      label: '3. Affiliate Config',
      filename: 'affiliate-configuration-guide.md',
      content: DELIVERABLE_3_AFFILIATE_CONFIG,
      mime: 'text/markdown',
    },
    {
      key: 'd4',
      label: '4. Adsterra Setup',
      filename: 'adsterra-integration-guide.md',
      content: DELIVERABLE_4_ADSTERRA_GUIDE,
      mime: 'text/markdown',
    },
    {
      key: 'd5',
      label: '5. 1-Step Install Guide',
      filename: 'blogger-installation-guide.md',
      content: DELIVERABLE_5_BLOGGER_INSTALL,
      mime: 'text/markdown',
    },
    {
      key: 'config',
      label: 'Live Preview Config',
    },
  ];

  const currentTab = tabs.find((t) => t.key === activeTab)!;

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      // Fallback ignored if clipboard permission denied
    }
  };

  const handleDownload = (filename: string, content: string, mime: string) => {
    const blob = new Blob([content], { type: `${mime};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="deliverables-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
    >
      <div className="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#191A20] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 border-b border-[#E7E1EF] dark:border-[#34313E] px-6 py-4">
          <div>
            <h2
              id="deliverables-modal-title"
              className="font-display text-lg font-bold text-[#171421] dark:text-white"
            >
              MapMatic AI Review — Complete Single Blogger XML File
            </h2>
            <p className="mt-0.5 text-xs text-[#666273] dark:text-[#B8B8C4]">
              <span className="font-mono-tabular font-semibold">{wordCount.toLocaleString()}</span>{' '}
              visible words merged · {missingKeywords.length === 0 ? 'All 16 SEO keywords verified' : `${missingKeywords.length} missing keywords`} ·{' '}
              {xmlAudit.valid ? `Valid Blogger XML (${xmlAudit.widgetIds.length} layout widgets)` : 'XML check issue'}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close deliverables export dialog"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E7E1EF] dark:border-[#34313E] text-[#666273] dark:text-[#B8B8C4] hover:text-[#171421] dark:hover:text-white cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Deliverables Tabs"
          className="flex flex-wrap items-center gap-1.5 border-b border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#111214] px-6 py-2.5"
        >
          {tabs.map((tab) => {
            const active = tab.key === activeTab;
            return (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  active
                    ? 'bg-[#7024E8] dark:bg-[#7828FF] text-white'
                    : 'text-[#666273] dark:text-[#B8B8C4] hover:bg-white dark:hover:bg-[#202129]'
                }`}
              >
                {tab.key === 'd1' ? (
                  <FileCode2 className="h-3.5 w-3.5" aria-hidden="true" />
                ) : tab.key === 'config' ? (
                  <Settings className="h-3.5 w-3.5" aria-hidden="true" />
                ) : (
                  <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'config' ? (
            <div className="mx-auto max-w-2xl space-y-4">
              <p className="text-sm text-[#666273] dark:text-[#B8B8C4]">
                Test live replacement of your verified affiliate URL, pricing, and guarantee values inside the preview page before exporting to Blogger:
              </p>

              <label className="block">
                <span className="text-xs font-bold text-[#171421] dark:text-white">
                  AFFILIATE_URL
                </span>
                <input
                  type="text"
                  value={affiliateUrl}
                  onChange={(e) => onChangeAffiliateUrl(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#111214] px-3.5 py-2.5 text-sm text-[#171421] dark:text-white"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-bold text-[#171421] dark:text-white">
                    SINGLE_PRICE
                  </span>
                  <input
                    type="text"
                    value={singlePrice}
                    onChange={(e) => onChangeSinglePrice(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#111214] px-3.5 py-2.5 text-sm text-[#171421] dark:text-white"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-bold text-[#171421] dark:text-white">
                    BUNDLE_PRICE
                  </span>
                  <input
                    type="text"
                    value={bundlePrice}
                    onChange={(e) => onChangeBundlePrice(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#111214] px-3.5 py-2.5 text-sm text-[#171421] dark:text-white"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-xs font-bold text-[#171421] dark:text-white">
                  GUARANTEE_PERIOD
                </span>
                <input
                  type="text"
                  value={guaranteePeriod}
                  onChange={(e) => onChangeGuaranteePeriod(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#111214] px-3.5 py-2.5 text-sm text-[#171421] dark:text-white"
                />
              </label>
            </div>
          ) : (
            <div className="space-y-4">
              {activeTab === 'd1' && (
                <div className="rounded-xl border border-[#7024E8]/30 dark:border-[#7828FF]/40 bg-[#F6F4FA] dark:bg-[#111214] px-4 py-3 text-xs text-[#171421] dark:text-[#DCC8FF]">
                  <strong>All-in-One Single XML File:</strong> Everything — full 4,000+ word review landing page, Featured Image, 3 Pricing Tables, Upgrades #1–#5, Bonuses #1–#2, 22 FAQs, 16+ CTAs, CSS, JS, JSON-LD FAQPage, and all {xmlAudit.widgetIds.length} Blogger Layout widgets — is merged inside this single file. Just restore it in <strong>Blogger -&gt; Theme -&gt; Restore</strong>.
                </div>
              )}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono-tabular text-xs font-semibold text-[#666273] dark:text-[#B8B8C4]">
                  File: {currentTab.filename}
                </span>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleCopy(currentTab.content || '', currentTab.key)}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#202129] px-3.5 py-2 text-xs font-bold text-[#171421] dark:text-white hover:border-[#7024E8] cursor-pointer"
                  >
                    {copiedKey === currentTab.key ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy Source</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      handleDownload(
                        currentTab.filename || 'deliverable.txt',
                        currentTab.content || '',
                        currentTab.mime || 'text/plain'
                      )
                    }
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#7024E8] to-[#914CFF] dark:from-[#7828FF] dark:to-[#A66BFF] px-3.5 py-2 text-xs font-bold text-white cursor-pointer"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download {currentTab.filename}</span>
                  </button>
                </div>
              </div>

              <pre className="max-h-[50vh] overflow-auto rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#111214] p-4 font-mono-tabular text-xs leading-relaxed text-[#171421] dark:text-[#DCC8FF] whitespace-pre-wrap break-words">
                {currentTab.content}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

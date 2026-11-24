export interface SocialBarAdConfig {
  enabled: boolean;
  scriptSrc: string;
  rawSnippet: string;
}

export interface NativeBannerAdConfig {
  enabled: boolean;
  scriptSrc: string;
  containerId: string;
  rawSnippet: string;
}

export interface Banner250x300AdConfig {
  enabled: boolean;
  key: string;
  scriptSrc: string;
  width: number;
  height: number;
  showInSidebar: boolean;
  showInArticle: boolean;
  rawSnippet: string;
}

export interface MonetagPopunderConfig {
  enabled: boolean;
  zoneId: string;
  scriptSrc: string;
  rawSnippet: string;
}

export interface SiteAdsConfig {
  socialBar: SocialBarAdConfig;
  nativeBanner: NativeBannerAdConfig;
  banner250x300: Banner250x300AdConfig;
  monetagPopunder: MonetagPopunderConfig;
}

export function normalizeScriptUrl(raw: string): string {
  const trimmed = raw.trim().replace(/^['"]|['"]$/g, '');
  if (!trimmed) return '';
  if (trimmed.startsWith('//')) {
    return `https:${trimmed}`;
  }
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }
  if (/^[a-z0-9.-]+\.[a-z]{2,}\//i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  return '';
}

export function extractScriptSrcList(snippet: string): string[] {
  const results: string[] = [];
  const srcRegex = /<script[^>]*\bsrc\s*=\s*['"]([^'"]+)['"]/gi;
  let match: RegExpExecArray | null;
  while ((match = srcRegex.exec(snippet)) !== null) {
    const normalized = normalizeScriptUrl(match[1]);
    if (normalized) results.push(normalized);
  }
  return results;
}

export function parseAdsterraSocialBar(snippet: string): { scriptSrc: string } {
  const trimmed = snippet.trim();
  if (!trimmed) return { scriptSrc: '' };

  const srcs = extractScriptSrcList(trimmed);
  if (srcs.length > 0) {
    return { scriptSrc: srcs[0] };
  }

  const singleUrl = normalizeScriptUrl(trimmed);
  return { scriptSrc: singleUrl };
}

export function parseAdsterraNativeBanner(snippet: string): {
  scriptSrc: string;
  containerId: string;
} {
  const trimmed = snippet.trim();
  if (!trimmed) return { scriptSrc: '', containerId: '' };

  const srcs = extractScriptSrcList(trimmed);
  const idMatch = trimmed.match(/<div[^>]*\bid\s*=\s*['"]([^'"]+)['"]/i);
  const fallbackContainer = trimmed.match(/\b(container-[a-z0-9]+)\b/i);

  return {
    scriptSrc: srcs[0] || normalizeScriptUrl(trimmed),
    containerId: idMatch?.[1] || fallbackContainer?.[1] || '',
  };
}

export function parseAdsterraBanner250x300(snippet: string): {
  key: string;
  scriptSrc: string;
  width: number;
  height: number;
} {
  const trimmed = snippet.trim();
  if (!trimmed) {
    return { key: '', scriptSrc: '', width: 250, height: 300 };
  }

  const keyMatch = trimmed.match(/['"]?key['"]?\s*:\s*['"]([a-z0-9]+)['"]/i);
  const widthMatch = trimmed.match(/['"]?width['"]?\s*:\s*(\d+)/i);
  const heightMatch = trimmed.match(/['"]?height['"]?\s*:\s*(\d+)/i);
  const srcs = extractScriptSrcList(trimmed);

  const key = keyMatch?.[1] || '';
  let scriptSrc = srcs[0] || '';
  if (!scriptSrc && key) {
    scriptSrc = `https://www.highperformanceformat.com/${key}/invoke.js`;
  }

  return {
    key,
    scriptSrc,
    width: widthMatch ? Number(widthMatch[1]) : 250,
    height: heightMatch ? Number(heightMatch[1]) : 300,
  };
}

export function parseMonetagPopunder(snippet: string): {
  zoneId: string;
  scriptSrc: string;
} {
  const trimmed = snippet.trim();
  if (!trimmed) return { zoneId: '', scriptSrc: '' };

  // 1. Direct <script src="..." data-zone="...">
  const srcs = extractScriptSrcList(trimmed);
  const dataZoneAttr = trimmed.match(/data-zone\s*=\s*['"](\d+)['"]/i);
  if (srcs.length > 0) {
    return {
      zoneId: dataZoneAttr?.[1] || '',
      scriptSrc: srcs[0],
    };
  }

  // 2. Monetag dataset.zone='123456', s.src='https://...'
  const dsZoneMatch = trimmed.match(/dataset\.zone\s*=\s*['"](\d+)['"]/i);
  const sSrcMatch = trimmed.match(/\.src\s*=\s*['"]((?:https?:)?\/\/[^'"]+)['"]/i);
  if (sSrcMatch) {
    return {
      zoneId: dsZoneMatch?.[1] || '',
      scriptSrc: normalizeScriptUrl(sSrcMatch[1]),
    };
  }

  // 3. Classic Monetag IIFE: (function(d,z,s){s.src='https://'+d+'/400/'+z;...})('domain.com',1234567,...)
  const classicMatch = trimmed.match(/\(['"]([a-z0-9.-]+\.[a-z]{2,})['"]\s*,\s*(\d{5,12})\b/i);
  if (classicMatch) {
    const domain = classicMatch[1];
    const zoneId = classicMatch[2];
    const pathMatch = trimmed.match(/['"](\/\d+\/)['"]/);
    const prefixPath = pathMatch?.[1] || '/400/';
    return {
      zoneId,
      scriptSrc: `https://${domain}${prefixPath}${zoneId}`,
    };
  }

  // 4. Plain URL pasted directly
  const directUrl = normalizeScriptUrl(trimmed);
  if (directUrl) {
    return {
      zoneId: dataZoneAttr?.[1] || '',
      scriptSrc: directUrl,
    };
  }

  return { zoneId: dsZoneMatch?.[1] || dataZoneAttr?.[1] || '', scriptSrc: '' };
}

export function isSocialBarActive(config: SocialBarAdConfig): boolean {
  return Boolean(config.enabled && (config.scriptSrc.trim() || config.rawSnippet.trim()));
}

export function isNativeBannerActive(config: NativeBannerAdConfig): boolean {
  return Boolean(
    config.enabled &&
      ((config.scriptSrc.trim() && config.containerId.trim()) || config.rawSnippet.trim())
  );
}

export function isBanner250x300Active(config: Banner250x300AdConfig): boolean {
  return Boolean(
    config.enabled &&
      ((config.key.trim() && config.scriptSrc.trim()) || config.rawSnippet.trim())
  );
}

export function isMonetagPopunderActive(config: MonetagPopunderConfig): boolean {
  return Boolean(config.enabled && (config.scriptSrc.trim() || config.rawSnippet.trim()));
}

export function generateAdsConfigTsFile(config: SiteAdsConfig): string {
  const serialized = JSON.stringify(config, null, 2);
  return `import type { SiteAdsConfig } from '../utils/adSlotParser';

export const DEFAULT_ADS_CONFIG: SiteAdsConfig = ${serialized};
`;
}

export function generateVercelEnvBlock(config: SiteAdsConfig): string {
  return [
    `NEXT_PUBLIC_ADSTERRA_SOCIALBAR_SRC="${config.socialBar.enabled ? config.socialBar.scriptSrc : ''}"`,
    `NEXT_PUBLIC_ADSTERRA_NATIVE_SRC="${config.nativeBanner.enabled ? config.nativeBanner.scriptSrc : ''}"`,
    `NEXT_PUBLIC_ADSTERRA_NATIVE_CONTAINER_ID="${config.nativeBanner.enabled ? config.nativeBanner.containerId : ''}"`,
    `NEXT_PUBLIC_ADSTERRA_BANNER_250X300_KEY="${config.banner250x300.enabled ? config.banner250x300.key : ''}"`,
    `NEXT_PUBLIC_ADSTERRA_BANNER_250X300_SRC="${config.banner250x300.enabled ? config.banner250x300.scriptSrc : ''}"`,
    `NEXT_PUBLIC_MONETAG_POPUNDER_SRC="${config.monetagPopunder.enabled ? config.monetagPopunder.scriptSrc : ''}"`,
    `NEXT_PUBLIC_MONETAG_POPUNDER_ZONE="${config.monetagPopunder.enabled ? config.monetagPopunder.zoneId : ''}"`,
  ].join('\n');
}

export const REQUIRED_SEO_KEYWORDS = [
  'mapmatic ai review',
  'mapmatic ai',
  'mapmatic ai bundle',
  'mapmatic ai bundle deal',
  'mapmatic ai pricing',
  'mapmatic ai features and bonus',
  'what is mapmatic ai bundle',
  'mapmatic ai discount code',
  'mapmatic ai vs competitor software',
  'ai interactive map generator',
  'how to use mapmatic ai',
  'mapmatic ai vs mapbox',
  'free ai map maker',
  'ai custom map creator for website',
  'best ai tools for geographical mapping',
  'create 3d maps with ai',
] as const;

export function stripHtmlToVisibleText(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#169;/g, '©')
    .replace(/\s+/g, ' ')
    .trim();
}

export function countVisibleWords(html: string): number {
  const text = stripHtmlToVisibleText(html);
  if (!text) return 0;
  return text.split(/\s+/).filter(Boolean).length;
}

export function findMissingKeywords(html: string): string[] {
  const normalized = stripHtmlToVisibleText(html).toLowerCase();
  return REQUIRED_SEO_KEYWORDS.filter((kw) => !normalized.includes(kw));
}

export function countAffiliateLinks(html: string): number {
  const matches = html.match(/rel="sponsored nofollow noopener"/g);
  return matches ? matches.length : 0;
}

export function extractWidgetIds(xml: string): string[] {
  const ids: string[] = [];
  const regex = /<b:widget\b[^>]*\bid=['"]([^'"]+)['"]/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(xml)) !== null) {
    ids.push(match[1]);
  }
  return ids;
}

export function validateBloggerXmlStructure(xml: string): {
  valid: boolean;
  errors: string[];
  widgetIds: string[];
} {
  const errors: string[] = [];
  if (!xml.startsWith('<?xml version="1.0" encoding="UTF-8" ?>')) {
    errors.push('Missing XML declaration header');
  }
  if (!xml.includes("xmlns:b='http://www.google.com/2005/gml/b'")) {
    errors.push('Missing Blogger xmlns:b namespace');
  }
  if (!xml.includes('<b:skin><![CDATA[') || !xml.includes(']]></b:skin>')) {
    errors.push('Missing CDATA-wrapped b:skin');
  }
  if (!xml.includes('<b:template-skin><![CDATA[')) {
    errors.push('Missing CDATA-wrapped b:template-skin');
  }

  const widgetIds = extractWidgetIds(xml);
  const uniqueIds = new Set(widgetIds);
  if (widgetIds.length !== uniqueIds.size) {
    errors.push('Duplicate b:widget IDs detected');
  }
  if (widgetIds.length < 9) {
    errors.push(`Expected at least 9 Blogger widgets, found ${widgetIds.length}`);
  }

  const requiredAdWidgets = [
    'Adsterra Social Bar',
    'Adsterra Native Banner',
    'Adsterra 250x300 Banner',
    'Adsterra 728x90 Banner',
  ];
  for (const title of requiredAdWidgets) {
    if (!xml.includes(title)) {
      errors.push(`Missing Adsterra widget title: ${title}`);
    }
  }

  const ldJsonMatch = xml.match(/<script type='application\/ld\+json'>([\s\S]*?)<\/script>/);
  if (!ldJsonMatch) {
    errors.push('Missing application/ld+json script');
  } else {
    try {
      JSON.parse(ldJsonMatch[1].trim());
    } catch {
      errors.push('Invalid JSON inside application/ld+json');
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    widgetIds,
  };
}

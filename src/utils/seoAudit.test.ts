import test from 'node:test';
import assert from 'node:assert/strict';
import { generateArticleHtml } from '../deliverables/articleHtmlBuilder';
import { generateBloggerXmlTheme } from '../deliverables/bloggerThemeXml';
import { FAQ_ITEMS, CTA_PLACEMENTS, BUNDLE_VALUE_TABLE, TIER_COMPARISON_TABLE } from '../data/reviewContent';
import {
  countVisibleWords,
  findMissingKeywords,
  countAffiliateLinks,
  validateBloggerXmlStructure,
} from './seoAudit';

test('Article HTML meets 4,000+ visible words requirement', () => {
  const html = generateArticleHtml();
  const wordCount = countVisibleWords(html);
  assert.ok(wordCount >= 4000, `Expected >= 4000 words, got ${wordCount}`);
});

test('Article HTML includes all 16 required SEO keywords naturally', () => {
  const html = generateArticleHtml();
  const missing = findMissingKeywords(html);
  assert.deepEqual(missing, [], `Missing keywords: ${missing.join(', ')}`);
});

test('Review includes at least 22 detailed FAQs, 10+ CTAs, Featured Image, and multiple Pricing Tables', () => {
  assert.ok(FAQ_ITEMS.length >= 22, `Expected >= 22 FAQs, got ${FAQ_ITEMS.length}`);
  assert.ok(Object.keys(CTA_PLACEMENTS).length >= 10, 'Expected >= 10 CTA configs');
  assert.ok(BUNDLE_VALUE_TABLE.length === 6, 'Expected 6 rows in Bundle Value Stack table');
  assert.ok(TIER_COMPARISON_TABLE.length >= 7, 'Expected tier comparison matrix rows');

  const html = generateArticleHtml();
  assert.ok(html.includes('/assets/aistudio/image_fc1ead36.png'), 'Expected Featured Image in article HTML');
  assert.ok(html.includes('/assets/products/frontend-mapmatic.png'), 'Expected cropped Front-End image');
  assert.ok(html.includes('/assets/products/upgrade1-unlimited.png'), 'Expected cropped Upgrade #1 image');
  assert.ok(html.includes('/assets/products/upgrade5-reseller.png'), 'Expected cropped Upgrade #5 image');
  assert.ok(html.includes('/assets/products/bonus1-ada-suite.png'), 'Expected cropped Bonus #1 image');
  assert.ok(html.includes('/assets/products/bonus2-mobicentric.png'), 'Expected cropped Bonus #2 image');

  const removedImgs = [
    'image_3da35a01.png',
    'image_654e63aa.png',
    'image_ce7471dc.png',
    'image_2f7cafdc.png',
    'image_ee0225a7.png',
    'image_5c727afd.png',
    'image_9626e0f8.png',
    'image_59e03a83.png',
    'image_42910a35.png',
    'image_00af34cc.png',
    'image_9c2cd0a2.png',
    'image_886b54e6.png',
    'image_4f854629.png',
    'image_14251292.png',
    'image_16f402b3.png',
  ];
  for (const img of removedImgs) {
    assert.ok(!html.includes(img), `Unexpected removed/uncropped image in article HTML: ${img}`);
  }

  assert.ok(html.includes('Pricing Table 1:'), 'Expected Pricing Table 1 heading');
  assert.ok(html.includes('Pricing Table 2:'), 'Expected Pricing Table 2 heading');
  assert.ok(html.includes('Pricing Table 3:'), 'Expected Pricing Table 3 heading');

  const affLinkCount = countAffiliateLinks(html);
  assert.ok(affLinkCount >= 16, `Expected >= 16 affiliate-attributed links in article HTML, got ${affLinkCount}`);
});

test('Single Complete Blogger XML theme merges full review landing page, all 10 layout widgets, 16 SEO keywords, Featured Image, Sidebar order, Adsterra, and JSON-LD validation', () => {
  const xml = generateBloggerXmlTheme();
  const result = validateBloggerXmlStructure(xml);
  assert.equal(result.valid, true, `XML validation errors: ${result.errors.join('; ')}`);

  const expectedWidgets = ['Header1', 'HTML1', 'Blog1', 'HTML2', 'HTML3', 'HTML4', 'HTML5', 'HTML6', 'LinkList1', 'HTML7'];
  assert.deepEqual(result.widgetIds, expectedWidgets, `Expected exact 10 widgets, got ${result.widgetIds.join(', ')}`);

  const xmlWords = countVisibleWords(xml);
  assert.ok(xmlWords >= 4000, `Expected merged XML to include >= 4000 words, got ${xmlWords}`);

  const xmlMissingKeywords = findMissingKeywords(xml);
  assert.deepEqual(xmlMissingKeywords, [], `Missing keywords in merged XML: ${xmlMissingKeywords.join(', ')}`);

  const xmlAffLinks = countAffiliateLinks(xml);
  assert.ok(xmlAffLinks >= 16, `Expected >= 16 affiliate links inside merged XML, got ${xmlAffLinks}`);

  assert.ok(xml.includes("cond='data:view.isHomepage or data:posts.empty'"), 'Expected homepage single-landing-page Blog1 condition');
  assert.ok(xml.includes('Pricing Table 1:') && xml.includes('Pricing Table 2:') && xml.includes('Pricing Table 3:'), 'Expected all 3 pricing tables merged inside single XML');
  assert.ok(xml.includes('/assets/products/frontend-mapmatic.png') && xml.includes('/assets/products/bonus2-mobicentric.png'), 'Expected cropped product & bonus images inside merged XML');
  assert.ok(xml.includes("property='og:image'"), 'Expected og:image meta tag in Blogger XML');
  assert.ok(xml.includes("name='twitter:image'"), 'Expected twitter:image meta tag in Blogger XML');
  assert.ok(xml.includes("itemprop='image'"), 'Expected BlogPosting schema image meta tag');
  assert.ok(
    xml.indexOf("id='sidebar-toc-section'") < xml.indexOf("id='sidebar-ad-section'"),
    'Expected Sidebar Table of Contents to appear before Sidebar 250x300 Adbox'
  );
  assert.ok(xml.includes('overflow-x: clip'), 'Expected overflow-x: clip for sticky sidebar compatibility');
  assert.ok(xml.includes('IntersectionObserver'), 'Expected IntersectionObserver TOC script');
  assert.ok(xml.includes('prefers-reduced-motion'), 'Expected prefers-reduced-motion support');
  assert.ok(xml.includes('getFullYear()'), 'Expected dynamic copyright year script');
});

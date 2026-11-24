import { FAQ_ITEMS, PLACEHOLDER_CONFIG } from '../data/reviewContent';
import { generateArticleBodyHtml } from './articleHtmlBuilder';

export function generateBloggerXmlTheme(): string {
  const faqSchemaJson = JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    null,
    2
  )
    .replace(/&/g, '\\u0026')
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e');

  return `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsVersion='3' b:responsive='true' b:templateUrl='indie.xml' b:templateVersion='1.3.3' expr:dir='data:blog.languageDirection' lang='en' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
  <meta charset='UTF-8'/>
  <meta content='width=device-width, initial-scale=1.0' name='viewport'/>
  <meta content='IE=edge' http-equiv='X-UA-Compatible'/>

  <!-- SEO Title & Meta -->
  <b:if cond='data:view.isHomepage'>
    <title>MapMatic AI Review 2026: Features, Pricing, Mega Bundle Deal &amp; Bonuses Explained</title>
    <meta content='In-depth MapMatic AI Review 2026 covering AI interactive map creation, pricing options, Mega Bundle Deal breakdown, bonuses, competitor comparisons, and 22+ FAQs.' name='description'/>
  <b:elseif cond='data:view.isPost or data:view.isPage'/>
    <title><data:blog.pageName/> | MapMatic AI Review</title>
    <meta expr:content='data:blog.metaDescription ? data:blog.metaDescription : "MapMatic AI Review 2026: Features, pricing, Mega Bundle Deal, bonuses, comparisons, and buyer FAQ."' name='description'/>
  <b:else/>
    <title><data:blog.pageTitle/></title>
    <meta content='MapMatic AI Review 2026: Features, pricing, Mega Bundle Deal, bonuses, and buyer guide.' name='description'/>
  </b:if>

  <link expr:href='data:blog.canonicalUrl' rel='canonical'/>
  <meta content='index, follow, max-image-preview:large' name='robots'/>

  <!-- Open Graph & Twitter Card -->
  <meta content='article' property='og:type'/>
  <meta expr:content='data:blog.title' property='og:site_name'/>
  <meta expr:content='data:blog.canonicalUrl' property='og:url'/>
  <meta expr:content='data:view.isHomepage ? "MapMatic AI Review 2026: Features, Pricing, Mega Bundle Deal &amp; Bonuses Explained" : data:blog.pageName' property='og:title'/>
  <meta expr:content='data:blog.metaDescription ? data:blog.metaDescription : "Discover how MapMatic AI helps users create interactive maps, explore AI-powered geographical mapping, and compare $49 Front-End vs $347 Mega Bundle pricing."' property='og:description'/>
  <meta content='${PLACEHOLDER_CONFIG.FEATURED_IMAGE}' property='og:image'/>
  <meta content='summary_large_image' name='twitter:card'/>
  <meta expr:content='data:view.isHomepage ? "MapMatic AI Review 2026: Features, Pricing, Mega Bundle Deal &amp; Bonuses Explained" : data:blog.pageName' name='twitter:title'/>
  <meta expr:content='data:blog.metaDescription ? data:blog.metaDescription : "MapMatic AI Review 2026: Complete software breakdown, pricing tables, bonuses, and 22+ buyer FAQs."' name='twitter:description'/>
  <meta content='${PLACEHOLDER_CONFIG.FEATURED_IMAGE}' name='twitter:image'/>

  <!-- Preconnect & Google Fonts: Plus Jakarta Sans + Manrope + JetBrains Mono -->
  <link href='https://fonts.googleapis.com' rel='preconnect'/>
  <link crossorigin='anonymous' href='https://fonts.gstatic.com' rel='preconnect'/>
  <link href='https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&amp;family=Manrope:wght@400;500;600;700&amp;family=Plus+Jakarta+Sans:wght@500;600;700;800&amp;display=swap' rel='stylesheet'/>

  <!-- Early Theme Initialization (No Flash of Wrong Theme) -->
  <script type='text/javascript'>
    //<![CDATA[
    (function(){
      try {
        var saved = localStorage.getItem('mm_theme_preference');
        var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = saved === 'light' || saved === 'dark' ? saved : (prefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.classList.add('dark');
      }
    })();
    //]]>
  </script>

  <!-- Central Affiliate & Verified Offer Configuration (Edit Once to Update Across Entire Theme) -->
  <script type='text/javascript'>
    //<![CDATA[
    window.MAPMATIC_CONFIG = {
      AFFILIATE_URL: '${PLACEHOLDER_CONFIG.AFFILIATE_URL}',
      SINGLE_PRICE: '${PLACEHOLDER_CONFIG.SINGLE_PRICE}',
      BUNDLE_PRICE: '${PLACEHOLDER_CONFIG.BUNDLE_PRICE}',
      GUARANTEE_PERIOD: '${PLACEHOLDER_CONFIG.GUARANTEE_PERIOD}',
      BUNDLE_CONTENTS: '${PLACEHOLDER_CONFIG.BUNDLE_CONTENTS}',
      FEATURED_IMAGE: '${PLACEHOLDER_CONFIG.FEATURED_IMAGE}',
      PRODUCT_MAIN_IMAGE: '${PLACEHOLDER_CONFIG.PRODUCT_MAIN_IMAGE}',
      PRODUCT_SUITE_IMAGE: '${PLACEHOLDER_CONFIG.PRODUCT_SUITE_IMAGE}',
      PRODUCT_DASHBOARD_IMAGE: '${PLACEHOLDER_CONFIG.PRODUCT_DASHBOARD_IMAGE}',
      MEGA_BUNDLE_IMAGE: '${PLACEHOLDER_CONFIG.MEGA_BUNDLE_IMAGE}',
      UPGRADE_1_IMAGE: '${PLACEHOLDER_CONFIG.UPGRADE_1_IMAGE}',
      UPGRADE_2_IMAGE: '${PLACEHOLDER_CONFIG.UPGRADE_2_IMAGE}',
      UPGRADE_3_IMAGE: '${PLACEHOLDER_CONFIG.UPGRADE_3_IMAGE}',
      UPGRADE_4_IMAGE: '${PLACEHOLDER_CONFIG.UPGRADE_4_IMAGE}',
      UPGRADE_5_IMAGE: '${PLACEHOLDER_CONFIG.UPGRADE_5_IMAGE}',
      BONUS_1_IMAGE: '${PLACEHOLDER_CONFIG.BONUS_1_IMAGE}',
      BONUS_2_IMAGE: '${PLACEHOLDER_CONFIG.BONUS_2_IMAGE}'
    };
    //]]>
  </script>

  <!-- Blogger Skin CSS -->
  <b:skin><![CDATA[
/* ============================================================================
   MAPMATIC AI REVIEW — LUXURY SAAS BLOGGER XML THEME STYLESHEET
   <Variable name="keycolor" description="Primary Accent" type="color" default="#7828FF" value="#7828FF"/>
============================================================================ */
:root {
  --bg-primary: #FFFFFF;
  --bg-secondary: #F6F4FA;
  --bg-card: #FFFFFF;
  --accent-primary: #7024E8;
  --accent-secondary: #914CFF;
  --accent-highlight: #EDE4FF;
  --text-main: #171421;
  --text-secondary: #666273;
  --border-color: #E7E1EF;
  --header-bg: rgba(255, 255, 255, 0.84);
  --shadow-card: 0 10px 30px -12px rgba(23, 20, 33, 0.08);
  --shadow-cta: 0 12px 26px -8px rgba(112, 36, 232, 0.42);
  --font-display: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --header-h: 74px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --scrollbar-track: #F1ECF8;
  --scrollbar-thumb: #914CFF;
  --scrollbar-thumb-hover: #7024E8;
}

html[data-theme="dark"] {
  --bg-primary: #111214;
  --bg-secondary: #191A20;
  --bg-card: #202129;
  --accent-primary: #7828FF;
  --accent-secondary: #A66BFF;
  --accent-highlight: #DCC8FF;
  --text-main: #FFFFFF;
  --text-secondary: #B8B8C4;
  --border-color: #34313E;
  --header-bg: rgba(17, 18, 20, 0.86);
  --shadow-card: 0 18px 40px -16px rgba(0, 0, 0, 0.55);
  --shadow-cta: 0 14px 32px -8px rgba(120, 40, 255, 0.5);
  --scrollbar-track: #191A20;
  --scrollbar-thumb: #7828FF;
  --scrollbar-thumb-hover: #A66BFF;
}

*, *::before, *::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scrollbar-width: auto;
  scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
}

::-webkit-scrollbar {
  width: 11px;
  height: 11px;
}

::-webkit-scrollbar-track {
  background: var(--scrollbar-track);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 999px;
  border: 2px solid var(--scrollbar-track);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover);
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--bg-primary);
  color: var(--text-main);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  transition: background-color 0.28s ease, color 0.28s ease;
  overflow-x: clip;
}

a {
  color: var(--accent-secondary);
  text-decoration: none;
  transition: color 0.2s ease, opacity 0.2s ease;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Ambient Subtle Top Backdrop */
.mm-ambient-glow {
  position: fixed;
  inset: 0 0 auto 0;
  height: 520px;
  pointer-events: none;
  z-index: 0;
  background: radial-gradient(ellipse 70% 55% at 50% -10%, rgba(120, 40, 255, 0.16), transparent 72%);
}

html[data-theme="light"] .mm-ambient-glow {
  background: radial-gradient(ellipse 70% 55% at 50% -10%, rgba(112, 36, 232, 0.09), transparent 72%);
}

/* Fixed Header */
.mm-site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-h);
  z-index: 90;
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  background: transparent;
  transition: background-color 0.25s ease, border-color 0.25s ease, backdrop-filter 0.25s ease;
}

.mm-site-header.is-scrolled {
  background: var(--header-bg);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom-color: var(--border-color);
}

.mm-header-inner {
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.mm-brand-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--text-main);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 16px;
  letter-spacing: -0.02em;
  white-space: nowrap;
  flex-shrink: 0;
}

.mm-brand-icon {
  width: 32px;
  height: 32px;
  border-radius: 9px;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
}

.mm-nav-links {
  display: flex;
  align-items: center;
  gap: 26px;
}

.mm-nav-links a {
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
  padding: 6px 0;
  position: relative;
}

.mm-nav-links a:hover,
.mm-nav-links a:focus-visible {
  color: var(--text-main);
}

.mm-header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.mm-icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  color: var(--text-main);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.mm-icon-btn:hover {
  border-color: var(--accent-secondary);
  transform: translateY(-1px);
}

.mm-header-cta {
  padding: 9px 16px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: #FFFFFF !important;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: var(--shadow-cta);
}

.mm-mobile-toggle {
  display: none;
}

.mm-mobile-drawer {
  display: none;
  position: fixed;
  top: var(--header-h);
  left: 0;
  right: 0;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  padding: 16px 24px 24px;
  z-index: 88;
}

.mm-mobile-drawer.is-open {
  display: block;
}

.mm-mobile-drawer nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mm-mobile-drawer a {
  color: var(--text-main);
  font-weight: 600;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-color);
}

/* Main Page Container */
.mm-page-shell {
  position: relative;
  z-index: 1;
  max-width: 1320px;
  margin: 0 auto;
  padding: calc(var(--header-h) + 32px) 24px 72px;
}

/* Breadcrumb Navigation */
.mm-breadcrumbs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.mm-breadcrumbs a {
  color: var(--text-secondary);
}

.mm-breadcrumbs a:hover {
  color: var(--accent-secondary);
}

/* Top Banner Ad Slot */
.mm-ad-slot {
  margin: 20px 0 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mm-ad-slot:empty,
.mm-ad-slot.is-empty {
  display: none;
  margin: 0;
}

.mm-ad-728 {
  min-height: 90px;
  width: 100%;
  max-width: 728px;
  margin-left: auto;
  margin-right: auto;
}

.mm-ad-250 {
  min-height: 250px;
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.mm-ad-native {
  width: 100%;
  min-height: 120px;
}

/* 2-Column Editorial Grid: 72% Article / 28% Sticky Sidebar */
.mm-layout-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 36px;
  align-items: start;
}

.mm-main-column {
  min-width: 0;
}

.mm-sidebar-column {
  position: sticky;
  top: calc(var(--header-h) + 20px);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Typography & Anchors */
.mm-section,
.mm-sub-section,
.mm-hero-block,
[id] {
  scroll-margin-top: calc(var(--header-h) + 24px);
}

.mm-meta-line {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent-secondary);
  margin-bottom: 14px;
}

.mm-h1 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2rem, 3.6vw, 3.25rem);
  line-height: 1.12;
  letter-spacing: -0.025em;
  margin: 0 0 18px;
  text-wrap: balance;
  color: var(--text-main);
}

.mm-h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.5rem, 2.4vw, 2.1rem);
  line-height: 1.22;
  letter-spacing: -0.02em;
  margin: 44px 0 16px;
  color: var(--text-main);
}

.mm-h3 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.32;
  margin: 0 0 10px;
  color: var(--text-main);
}

.mm-lead {
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0 0 18px;
}

.mm-body-p {
  margin: 0 0 16px;
  color: var(--text-secondary);
  font-size: 16px;
  line-height: 1.75;
}

.mm-card-kicker {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent-secondary);
  margin-bottom: 8px;
}

.mm-mono {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
}

/* Cards & Surfaces */
.mm-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 26px;
  box-shadow: var(--shadow-card);
}

.mm-disclosure-box {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 16px 20px;
  margin: 22px 0;
  font-size: 14px;
  color: var(--text-secondary);
}

.mm-disclosure-box p {
  margin: 0;
}

/* Lists */
.mm-check-list,
.mm-bullet-list {
  margin: 14px 0 18px;
  padding-left: 20px;
  color: var(--text-secondary);
}

.mm-check-list li,
.mm-bullet-list li {
  margin-bottom: 8px;
}

/* CTA Buttons */
.mm-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin: 22px 0 28px;
}

.mm-cta-box {
  margin: 28px 0;
  padding: 22px 24px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, rgba(120, 40, 255, 0.12), rgba(166, 107, 255, 0.05));
  border: 1px solid var(--border-color);
  text-align: center;
}

.mm-cta-box-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.mm-cta-note {
  margin: 6px 0 0;
  font-size: 13px;
  color: var(--text-secondary);
}

.mm-sub-label {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-main);
  margin: 14px 0 6px;
}

.mm-status-line {
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid var(--border-color);
  font-size: 13px;
  color: var(--accent-secondary);
}

.mm-guarantee-badge-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: var(--bg-secondary);
  margin-bottom: 16px;
}

.mm-guarantee-badge-row .mm-card-kicker {
  margin-bottom: 0;
}

.mm-ad-anchor {
  margin: 18px 0;
}

.mm-ad-anchor:empty {
  display: none;
  margin: 0;
}

.mm-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 26px;
  border-radius: 12px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  text-decoration: none;
}

.mm-btn:hover {
  transform: translateY(-2px);
}

.mm-btn-primary {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: #FFFFFF !important;
  box-shadow: var(--shadow-cta);
}

.mm-btn-secondary {
  background: var(--bg-secondary);
  color: var(--text-main) !important;
  border: 1px solid var(--border-color);
}

.mm-btn-secondary:hover {
  border-color: var(--accent-secondary);
}

.mm-full-btn {
  width: 100%;
  margin-top: 16px;
}

/* Featured Image & Studio Media Frames */
.mm-featured-showcase {
  margin: 24px 0 28px;
  padding: 18px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(120, 40, 255, 0.35);
  background: linear-gradient(180deg, rgba(120, 40, 255, 0.08), transparent);
}

.mm-featured-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--accent-secondary);
  margin-bottom: 12px;
}

.mm-media-frame {
  margin: 24px 0;
}

.mm-featured-media {
  margin: 0;
}

.mm-img-shell,
.mm-bundle-thumb {
  display: block;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-color);
  background: #141519;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.mm-offer-banner {
  margin: 18px 0 24px;
  padding: 18px 22px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: #FFFFFF;
  text-align: center;
}

.mm-offer-banner-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.08rem;
  line-height: 1.35;
}

.mm-offer-banner-sub {
  margin: 6px 0 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.92);
}

.mm-studio-img-wrap {
  padding: 10px;
}

.mm-studio-img-wrap img,
.mm-bundle-thumb img,
.mm-upgrade-media img {
  margin: 0 auto;
  max-height: 540px;
  width: 100%;
  object-fit: contain;
  border-radius: 12px;
}

.mm-bundle-thumb {
  padding: 10px;
  margin-bottom: 14px;
}

.mm-bundle-thumb img,
.mm-upgrade-media img {
  max-height: 280px;
}

.mm-upgrade-media .mm-aff-img-link {
  display: block;
  padding: 10px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  background: #141519;
}

.mm-featured-media .mm-studio-img-wrap img {
  max-height: 450px;
}

.mm-aff-img-link:hover .mm-img-shell,
.mm-aff-img-link:hover {
  border-color: var(--accent-secondary);
}

.mm-img-fallback {
  min-height: 260px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  background: linear-gradient(145deg, rgba(120, 40, 255, 0.14), rgba(25, 26, 32, 0.1));
}

.mm-img-fallback-code {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--accent-secondary);
}

.mm-img-fallback-title {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--text-main);
}

.mm-img-fallback-cta {
  font-size: 13px;
  color: var(--text-secondary);
}

.mm-media-caption {
  margin-top: 10px;
  font-size: 13px;
  color: var(--text-secondary);
  text-align: center;
}

/* Quick Summary */
.mm-summary-grid {
  display: grid;
  gap: 12px;
}

.mm-summary-row {
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  gap: 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border-color);
}

.mm-summary-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.mm-summary-label {
  font-weight: 700;
  font-size: 14px;
  color: var(--text-main);
}

.mm-summary-val {
  font-size: 14px;
  color: var(--text-secondary);
}

/* Grids */
.mm-feature-grid,
.mm-pricing-grid,
.mm-bonus-grid,
.mm-audience-grid,
.mm-pros-cons-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin: 22px 0;
}

.mm-bundle-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin: 24px 0;
}

.mm-bundle-card {
  background: linear-gradient(160deg, rgba(120, 40, 255, 0.16), var(--bg-card) 60%);
  border: 1px solid rgba(166, 107, 255, 0.35);
  border-radius: var(--radius-lg);
  padding: 22px;
  display: flex;
  flex-direction: column;
}

.mm-bundle-price-bar {
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid var(--border-color);
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 600;
  color: var(--accent-secondary);
}

.mm-pricing-featured {
  border-color: var(--accent-primary);
  background: linear-gradient(165deg, rgba(120, 40, 255, 0.14), var(--bg-card) 58%);
}

.mm-price-figure {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--accent-secondary);
  margin: 10px 0 14px;
}

.mm-muted-note {
  font-size: 13px;
  color: var(--text-secondary);
}

/* Tutorial Steps & Upgrades */
.mm-steps-list,
.mm-upgrade-stack {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 22px 0;
}

.mm-step-card {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr);
  gap: 18px;
  align-items: start;
}

.mm-step-num {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 14px;
  color: var(--accent-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 8px 12px;
  text-align: center;
}

.mm-upgrade-card {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 24px;
  align-items: start;
}

.mm-upgrade-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--border-color);
  font-size: 13px;
  color: var(--text-secondary);
}

/* Comparison Table */
.mm-table-wrap {
  overflow-x: auto;
  margin: 22px 0;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  background: var(--bg-card);
}

.mm-compare-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 640px;
  font-size: 14px;
}

.mm-compare-table th,
.mm-compare-table td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
  vertical-align: top;
}

.mm-compare-table th {
  background: var(--bg-secondary);
  color: var(--text-main);
  font-family: var(--font-display);
  font-weight: 700;
}

.mm-compare-table td {
  color: var(--text-secondary);
}

/* FAQ Accordion */
.mm-faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 24px 0;
}

.mm-faq-item {
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  background: var(--bg-card);
  overflow: hidden;
}

.mm-faq-heading {
  margin: 0;
}

.mm-faq-trigger {
  width: 100%;
  background: transparent;
  border: none;
  padding: 18px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  text-align: left;
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  color: var(--text-main);
  cursor: pointer;
}

.mm-faq-icon {
  font-family: var(--font-mono);
  font-size: 18px;
  color: var(--accent-secondary);
  flex-shrink: 0;
}

.mm-faq-panel {
  padding: 0 20px 18px;
  border-top: 1px solid var(--border-color);
}

.mm-faq-panel[hidden] {
  display: none;
}

.mm-faq-panel p {
  margin: 14px 0 0;
}

/* Sticky Right TOC (Top) & Adbox (Below) + Mobile Collapsible TOC */
.mm-toc-box {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 18px;
  box-shadow: var(--shadow-card);
  min-height: 220px;
  max-height: calc(100vh - var(--header-h) - 340px);
  overflow-y: auto;
}

.mm-toc-title {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--text-main);
  margin: 0 0 12px;
}

.mm-toc-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mm-toc-link {
  display: block;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  line-height: 1.4;
}

.mm-toc-link:hover,
.mm-toc-link.is-active {
  color: var(--text-main);
  background: rgba(120, 40, 255, 0.14);
}

.mm-toc-sublist {
  list-style: none;
  margin: 4px 0 4px 12px;
  padding-left: 10px;
  border-left: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mm-toc-sublist.is-collapsed {
  display: none;
}

.mm-toc-parent-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
}

.mm-toc-collapse-btn {
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 12px;
  padding: 4px 6px;
}

.mm-mobile-toc-wrap {
  display: none;
  margin-bottom: 24px;
}

.mm-mobile-toc-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  color: var(--text-main);
  font-family: var(--font-display);
  font-weight: 700;
  cursor: pointer;
}

/* Back to Top Button */
.mm-back-to-top {
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 46px;
  height: 46px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: #FFFFFF;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow-cta);
  opacity: 0;
  visibility: hidden;
  transform: translateY(12px);
  transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease;
  z-index: 85;
}

.mm-back-to-top.is-visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Footer */
.mm-site-footer {
  border-top: 1px solid var(--border-color);
  background: var(--bg-secondary);
  padding: 52px 24px 34px;
  margin-top: 64px;
}

.mm-footer-inner {
  max-width: 1320px;
  margin: 0 auto;
}

.mm-footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--border-color);
}

.mm-footer-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
}

.mm-footer-links a {
  color: var(--text-secondary);
}

.mm-footer-links a:hover {
  color: var(--accent-secondary);
}

.mm-footer-bottom {
  padding-top: 22px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  font-size: 13px;
  color: var(--text-secondary);
}

/* Responsive Breakpoints */
@media (max-width: 1060px) {
  .mm-layout-grid {
    grid-template-columns: minmax(0, 1fr);
  }
  .mm-sidebar-column {
    display: none;
  }
  .mm-mobile-toc-wrap {
    display: block;
  }
  .mm-bundle-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 820px) {
  .mm-nav-links,
  .mm-header-cta {
    display: none;
  }
  .mm-mobile-toggle {
    display: inline-flex;
  }
  .mm-feature-grid,
  .mm-pricing-grid,
  .mm-bonus-grid,
  .mm-audience-grid,
  .mm-pros-cons-grid,
  .mm-footer-grid,
  .mm-upgrade-card,
  .mm-summary-row,
  .mm-step-card {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *, *::before, *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
  ]]></b:skin>

  <!-- Blogger Layout Preview Skin -->
  <b:template-skin><![CDATA[
body#layout .mm-layout-grid {
  display: flex;
  gap: 16px;
}
body#layout .mm-main-column {
  width: 68%;
}
body#layout .mm-sidebar-column {
  width: 32%;
}
body#layout .section {
  border: 1px dashed #7828FF;
  padding: 10px;
  margin-bottom: 12px;
}
  ]]></b:template-skin>

  <!-- Structured Data: FAQPage (Valid XML & Valid JSON-LD) -->
  <script type='application/ld+json'>
${faqSchemaJson}
  </script>
</head>

<body>
  <div aria-hidden='true' class='mm-ambient-glow'></div>

  <!-- ======================================================================
       SECTION 1: HEADER WIDGET + FIXED NAVIGATION BAR
  ====================================================================== -->
  <header class='mm-site-header' id='mm-header' role='banner'>
    <div class='mm-header-inner'>
      <a class='mm-brand-link' expr:href='data:blog.homepageUrl'>
        <span aria-hidden='true' class='mm-brand-icon'>
          <svg fill='none' height='18' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.2' viewBox='0 0 24 24' width='18'>
            <path d='M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z'/>
            <circle cx='12' cy='10' r='2.5'/>
          </svg>
        </span>
        <span>MAPMATIC AI REVIEW</span>
      </a>

      <nav aria-label='Primary Review Navigation' class='mm-nav-links'>
        <a href='#review-overview'>Review</a>
        <a href='#mapmatic-ai-features'>Features</a>
        <a href='#mapmatic-ai-mega-bundle'>Bundle</a>
        <a href='#mapmatic-ai-pricing'>Pricing</a>
        <a href='#mapmatic-ai-bonuses'>Bonuses</a>
        <a href='#mapmatic-ai-faq'>FAQ</a>
      </nav>

      <div class='mm-header-actions'>
        <button aria-label='Toggle dark or light theme' class='mm-icon-btn' id='mm-theme-toggle' type='button'>
          <span aria-hidden='true' id='mm-theme-icon'>&#9790;</span>
        </button>
        <a class='mm-header-cta mm-aff-link' href='${PLACEHOLDER_CONFIG.AFFILIATE_URL}' rel='sponsored nofollow noopener' target='_blank'>
          Get MapMatic AI
        </a>
        <button aria-controls='mm-mobile-drawer' aria-expanded='false' aria-label='Open mobile navigation menu' class='mm-icon-btn mm-mobile-toggle' id='mm-mobile-toggle' type='button'>
          &#9776;
        </button>
      </div>
    </div>
  </header>

  <div class='mm-mobile-drawer' id='mm-mobile-drawer'>
    <nav aria-label='Mobile Review Navigation'>
      <a href='#review-overview'>Review Overview</a>
      <a href='#mapmatic-ai-features'>Features</a>
      <a href='#mapmatic-ai-mega-bundle'>Mega Bundle Deal</a>
      <a href='#mapmatic-ai-pricing'>Pricing Comparison</a>
      <a href='#mapmatic-ai-bonuses'>Bonuses</a>
      <a href='#mapmatic-ai-faq'>FAQ (22 Answers)</a>
    </nav>
  </div>

  <!-- Hidden/Editable Blogger Header Widget Section -->
  <b:section class='mm-hidden-header-widget' id='header-widget-section' maxwidgets='1' name='Header Widget' showaddelement='yes'>
    <b:widget id='Header1' locked='false' title='MAPMATIC AI REVIEW (Header)' type='Header' version='2' visible='true'>
      <b:includable id='main'>
        <div class='mm-sr-only' style='display:none;'><data:title/></div>
      </b:includable>
    </b:widget>
  </b:section>

  <!-- ======================================================================
       MAIN PAGE WRAPPER
  ====================================================================== -->
  <div class='mm-page-shell'>

    <!-- Breadcrumb Navigation + BreadcrumbList Schema -->
    <nav aria-label='Breadcrumb' class='mm-breadcrumbs' itemscope='itemscope' itemtype='https://schema.org/BreadcrumbList'>
      <span itemprop='itemListElement' itemscope='itemscope' itemtype='https://schema.org/ListItem'>
        <a expr:href='data:blog.homepageUrl' itemprop='item'><span itemprop='name'>Home</span></a>
        <meta content='1' itemprop='position'/>
      </span>
      <span aria-hidden='true'>/</span>
      <span itemprop='itemListElement' itemscope='itemscope' itemtype='https://schema.org/ListItem'>
        <a href='#review-overview' itemprop='item'><span itemprop='name'>Software Reviews</span></a>
        <meta content='2' itemprop='position'/>
      </span>
      <span aria-hidden='true'>/</span>
      <span itemprop='itemListElement' itemscope='itemscope' itemtype='https://schema.org/ListItem'>
        <span itemprop='name'>MapMatic AI Review</span>
        <meta content='3' itemprop='position'/>
      </span>
    </nav>

    <!-- SECTION 2 & 8: TOP BANNER / ADSTERRA 728x90 BANNER -->
    <b:section class='mm-ad-slot mm-ad-728' id='top-banner-ad-section' maxwidgets='2' name='Top Banner Advertisement' showaddelement='yes'>
      <b:widget id='HTML1' locked='false' title='Adsterra 728x90 Banner' type='HTML' version='2' visible='true'>
        <b:includable id='main'>
          <div class='mm-ad-inner mm-ad-728-box' id='adsterra-728x90-container'>
            <data:content/>
          </div>
        </b:includable>
      </b:widget>
    </b:section>

    <!-- 2-COLUMN CONTENT + STICKY RIGHT SIDEBAR -->
    <div class='mm-layout-grid'>

      <!-- MAIN ARTICLE COLUMN (72% Desktop) -->
      <main class='mm-main-column' id='main-content' role='main'>

        <!-- Mobile Collapsible Table of Contents -->
        <div class='mm-mobile-toc-wrap' id='mm-mobile-toc-wrap'>
          <button aria-controls='mm-mobile-toc-body' aria-expanded='false' class='mm-mobile-toc-toggle' id='mm-mobile-toc-toggle' type='button'>
            <span>Table of Contents</span>
            <span aria-hidden='true'>+</span>
          </button>
          <div class='mm-toc-box' hidden='hidden' id='mm-mobile-toc-body' style='margin-top:8px; max-height:none;'>
            <ul class='mm-toc-list' id='mm-mobile-toc-list'></ul>
          </div>
        </div>

        <!-- SECTION 3: MAIN REVIEW LANDING PAGE (MERGED COMPLETE SINGLE-PAGE WIDGET) -->
        <b:section class='mm-main-blog-section' id='main-review-section' name='Main Review Landing Page' showaddelement='no'>
          <b:widget id='Blog1' locked='true' title='Main Review Landing Page' type='Blog' version='2' visible='true'>
            <b:includable id='main' var='top'>
              <b:if cond='data:view.isHomepage or data:posts.empty'>
                <article class='mm-post-wrapper mm-article-root' itemscope='itemscope' itemtype='https://schema.org/BlogPosting'>
                  <meta content='MapMatic AI Review 2026: Features, Pricing, Mega Bundle Deal &amp; Bonuses Explained' itemprop='headline'/>
                  <meta expr:content='data:blog.canonicalUrl' itemprop='mainEntityOfPage'/>
                  <meta content='${PLACEHOLDER_CONFIG.FEATURED_IMAGE}' itemprop='image'/>
                  <div class='mm-post-body-content' id='mm-article-content' itemprop='articleBody'>
${generateArticleBodyHtml()}
                  </div>
                </article>
              <b:else/>
                <b:loop values='data:posts' var='post'>
                  <article class='mm-post-wrapper' itemscope='itemscope' itemtype='https://schema.org/BlogPosting'>
                    <meta expr:content='data:post.title' itemprop='headline'/>
                    <meta expr:content='data:post.url' itemprop='mainEntityOfPage'/>
                    <meta expr:content='data:post.featuredImage ? data:post.featuredImage : "${PLACEHOLDER_CONFIG.FEATURED_IMAGE}"' itemprop='image'/>
                    <meta expr:content='data:post.timestampISO8601' itemprop='datePublished'/>
                    <meta expr:content='data:post.lastUpdatedISO8601' itemprop='dateModified'/>
                    <b:if cond='data:post.featuredImage'>
                      <figure class='mm-media-frame mm-featured-media' style='margin-bottom:20px;'>
                        <a class='mm-aff-link mm-aff-img-link' href='${PLACEHOLDER_CONFIG.AFFILIATE_URL}' rel='sponsored nofollow noopener' target='_blank'>
                          <div class='mm-img-shell mm-studio-img-wrap'>
                            <img expr:alt='data:post.title' expr:src='data:post.featuredImage'/>
                          </div>
                        </a>
                      </figure>
                    </b:if>
                    <div class='mm-post-body-content' id='mm-article-content' itemprop='articleBody'>
                      <data:post.body/>
                    </div>
                  </article>
                </b:loop>
              </b:if>
            </b:includable>
          </b:widget>
        </b:section>

        <!-- SECTION 7: ADSTERRA NATIVE BANNER -->
        <b:section class='mm-ad-slot mm-ad-native' id='native-ad-section' maxwidgets='1' name='Native Advertisement' showaddelement='yes'>
          <b:widget id='HTML2' locked='false' title='Adsterra Native Banner' type='HTML' version='2' visible='true'>
            <b:includable id='main'>
              <div class='mm-ad-inner mm-ad-native-box' id='adsterra-native-container'>
                <data:content/>
              </div>
            </b:includable>
          </b:widget>
        </b:section>

      </main>

      <!-- RIGHT STICKY SIDEBAR (28% Desktop) -->
      <aside aria-label='Article Table of Contents and Sidebar' class='mm-sidebar-column' id='right-sidebar'>

        <!-- SECTION 5: SIDEBAR TABLE OF CONTENTS -->
        <b:section class='mm-sidebar-toc-section' id='sidebar-toc-section' maxwidgets='1' name='Sidebar Table of Contents' showaddelement='yes'>
          <b:widget id='HTML3' locked='false' title='Sidebar Table of Contents' type='HTML' version='2' visible='true'>
            <b:includable id='main'>
              <nav aria-label='Table of Contents' class='mm-toc-box'>
                <h2 class='mm-toc-title'>On This Page</h2>
                <ul class='mm-toc-list' id='mm-desktop-toc-list'></ul>
              </nav>
            </b:includable>
          </b:widget>
        </b:section>

        <!-- SECTION 6: SIDEBAR 250x300 ADSTERRA BANNER -->
        <b:section class='mm-ad-slot mm-ad-250' id='sidebar-ad-section' maxwidgets='1' name='Sidebar 250x300 Advertisement' showaddelement='yes'>
          <b:widget id='HTML4' locked='false' title='Adsterra 250x300 Banner' type='HTML' version='2' visible='true'>
            <b:includable id='main'>
              <div class='mm-ad-inner mm-ad-250-box' id='adsterra-250x300-container'>
                <data:content/>
              </div>
            </b:includable>
          </b:widget>
        </b:section>

        <!-- SECTION 4: RIGHT SIDEBAR EXTRA WIDGETS -->
        <b:section class='mm-right-sidebar-extra' id='right-sidebar-section' maxwidgets='3' name='Right Sidebar' showaddelement='yes'>
          <b:widget id='HTML5' locked='false' title='Official Offer Quick Access' type='HTML' version='2' visible='true'>
            <b:includable id='main'>
              <div class='mm-card' style='padding:18px;'>
                <div class='mm-card-kicker'>Verified Offer Access</div>
                <p class='mm-body-p' style='font-size:13px; margin-bottom:12px;'>Check live single-purchase pricing, Mega Bundle upgrades, and refund details on the vendor page.</p>
                <a class='mm-btn mm-btn-primary mm-full-btn mm-aff-link' href='${PLACEHOLDER_CONFIG.AFFILIATE_URL}' rel='sponsored nofollow noopener' style='padding:10px 14px; font-size:13px;' target='_blank'>Visit Official Offer</a>
              </div>
            </b:includable>
          </b:widget>
        </b:section>

      </aside>
    </div>

    <!-- SECTION 8: ADDITIONAL 728x90 ADVERTISEMENT SLOT (RESPONSIVE) -->
    <b:section class='mm-ad-slot mm-ad-728' id='mid-728-ad-section' maxwidgets='1' name='728x90 Advertisement' showaddelement='yes'>
      <b:widget id='HTML6' locked='false' title='Adsterra 728x90 Banner Bottom' type='HTML' version='2' visible='true'>
        <b:includable id='main'>
          <div class='mm-ad-inner' id='adsterra-728x90-bottom-container'>
            <data:content/>
          </div>
        </b:includable>
      </b:widget>
    </b:section>

  </div>

  <!-- ======================================================================
       SECTION 9: FOOTER WIDGETS + DYNAMIC COPYRIGHT YEAR
  ====================================================================== -->
  <footer class='mm-site-footer' role='contentinfo'>
    <div class='mm-footer-inner'>
      <div class='mm-footer-grid'>
        <div>
          <a class='mm-brand-link' expr:href='data:blog.homepageUrl'>
            <span>MAPMATIC AI REVIEW</span>
          </a>
          <p class='mm-body-p' style='margin-top:12px; font-size:14px;'>
            Independent SaaS review publication covering MapMatic AI features, pricing tiers, Mega Bundle upgrades, and practical geographical mapping workflows.
          </p>
        </div>

        <div>
          <h3 class='mm-h3' style='font-size:15px;'>Review Sections</h3>
          <ul class='mm-footer-links'>
            <li><a href='#what-is-mapmatic-ai'>What Is MapMatic AI?</a></li>
            <li><a href='#mapmatic-ai-features'>Features Breakdown</a></li>
            <li><a href='#mapmatic-ai-mega-bundle'>Mega Bundle Deal</a></li>
            <li><a href='#mapmatic-ai-pricing'>Pricing Comparison</a></li>
            <li><a href='#mapmatic-ai-faq'>Buyer FAQ (22 Answers)</a></li>
          </ul>
        </div>

        <div>
          <h3 class='mm-h3' style='font-size:15px;'>Compliance &amp; Legal</h3>
          <b:section class='mm-footer-widgets' id='footer-widgets-section' maxwidgets='2' name='Footer Widgets' showaddelement='yes'>
            <b:widget id='LinkList1' locked='false' title='Legal Navigation' type='LinkList' version='2' visible='true'>
              <b:includable id='main'>
                <ul class='mm-footer-links'>
                  <li><a href='/p/privacy-policy.html'>Privacy Policy</a></li>
                  <li><a href='/p/affiliate-disclosure.html'>Affiliate Disclosure</a></li>
                  <li><a href='/p/terms-and-conditions.html'>Terms and Conditions</a></li>
                  <li><a href='/p/contact.html'>Contact</a></li>
                </ul>
              </b:includable>
            </b:widget>
          </b:section>
        </div>
      </div>

      <div class='mm-footer-bottom'>
        <span id='mm-copyright'>Copyright &#169; <span id='mm-current-year'>2026</span> MAPMATIC AI REVIEW. All Rights Reserved.</span>
        <span>Independent Affiliate Review Publication</span>
      </div>
    </div>
  </footer>

  <!-- Fixed Back-to-Top Button -->
  <button aria-label='Scroll back to top' class='mm-back-to-top' id='mm-back-to-top' type='button'>
    <svg fill='none' height='20' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.4' viewBox='0 0 24 24' width='20'>
      <path d='m18 15-6-6-6 6'/>
    </svg>
  </button>

  <!-- SECTION 10: ADSTERRA SOCIAL BAR (SINGLE GLOBAL SCRIPT LOCATION) -->
  <b:section class='mm-social-bar-section' id='social-bar-ad-section' maxwidgets='1' name='Social Bar Advertisement' showaddelement='yes'>
    <b:widget id='HTML7' locked='false' title='Adsterra Social Bar' type='HTML' version='2' visible='true'>
      <b:includable id='main'>
        <div id='adsterra-social-bar-slot'>
          <data:content/>
        </div>
      </b:includable>
    </b:widget>
  </b:section>

  <!-- GSAP & ScrollTrigger (Deferred, Non-Blocking) -->
  <script defer='defer' src='https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js'></script>
  <script defer='defer' src='https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js'></script>

  <!-- Theme Interactive Controller -->
  <script type='text/javascript'>
    //<![CDATA[
    document.addEventListener('DOMContentLoaded', function() {
      // 1. Dynamic Copyright Year
      var yearEl = document.getElementById('mm-current-year');
      if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
      }

      // 2. Sync Central Affiliate URL, Image URLs & Pricing/Guarantee Placeholders
      var cfg = window.MAPMATIC_CONFIG || {};
      if (cfg.AFFILIATE_URL && cfg.AFFILIATE_URL.indexOf('[INSERT') === -1) {
        document.querySelectorAll('a[href*="[INSERT YOUR MAPMATIC AI AFFILIATE LINK]"], a.mm-aff-link, .mm-cta-box a, .mm-aff-img-link').forEach(function(link) {
          link.setAttribute('href', cfg.AFFILIATE_URL);
        });
      }
      var imgMap = {
        '[INSERT FEATURED IMAGE URL]': cfg.FEATURED_IMAGE,
        '[INSERT PRODUCT IMAGE URL]': cfg.PRODUCT_MAIN_IMAGE,
        '[INSERT DASHBOARD IMAGE URL]': cfg.PRODUCT_DASHBOARD_IMAGE,
        '[INSERT BUNDLE IMAGE URL]': cfg.MEGA_BUNDLE_IMAGE
      };
      document.querySelectorAll('img').forEach(function(img) {
        var key = img.getAttribute('data-mm-img');
        if (key && cfg[key] && cfg[key].indexOf('[INSERT') === -1) {
          img.setAttribute('src', cfg[key]);
          return;
        }
        var s = img.getAttribute('src');
        if (s && imgMap[s] && imgMap[s].indexOf('[INSERT') === -1) {
          img.setAttribute('src', imgMap[s]);
        }
      });
      var textMap = {
        '[VERIFY ORIGINAL FRONT-END PRICE]': cfg.SINGLE_PRICE,
        '[VERIFY ORIGINAL MEGA BUNDLE PRICE]': cfg.BUNDLE_PRICE,
        '[VERIFY OFFICIAL GUARANTEE PERIOD]': cfg.GUARANTEE_PERIOD,
        '[VERIFY INCLUDED PRODUCTS AND UPGRADES]': cfg.BUNDLE_CONTENTS
      };
      Object.keys(textMap).forEach(function(token) {
        var val = textMap[token];
        if (val && val.indexOf('[VERIFY') === -1) {
          var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
          var node;
          while ((node = walker.nextNode())) {
            if (node.nodeValue && node.nodeValue.indexOf(token) !== -1) {
              node.nodeValue = node.nodeValue.split(token).join(val);
            }
          }
        }
      });

      // 3. Hide Empty Adsterra Containers & Mount Non-Empty Native Ad Mid-Article
      var nativeSlot = document.getElementById('native-ad-section');
      var nativeInner = document.getElementById('adsterra-native-container');
      var nativeAnchor = document.querySelector('[data-ad-target="adsterra-native"]');
      if (document.body.id !== 'layout' && nativeSlot && nativeInner && nativeAnchor && nativeInner.innerHTML.trim() !== '') {
        nativeAnchor.appendChild(nativeSlot);
      }

      document.querySelectorAll('.mm-ad-slot').forEach(function(slot) {
        var inner = slot.querySelector('.mm-ad-inner');
        if (inner && inner.innerHTML.trim() === '') {
          slot.classList.add('is-empty');
        }
      });

      // 4. Dark/Light Mode Toggle + Icon Sync
      var themeBtn = document.getElementById('mm-theme-toggle');
      var themeIcon = document.getElementById('mm-theme-icon');
      function updateThemeIcon(t) {
        if (themeIcon) {
          themeIcon.innerHTML = t === 'dark' ? '&#9728;' : '&#9790;';
        }
      }
      updateThemeIcon(document.documentElement.getAttribute('data-theme') || 'dark');

      if (themeBtn) {
        themeBtn.addEventListener('click', function() {
          var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
          var next = current === 'dark' ? 'light' : 'dark';
          document.documentElement.setAttribute('data-theme', next);
          if (next === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
          try { localStorage.setItem('mm_theme_preference', next); } catch (e) {}
          updateThemeIcon(next);
        });
      }

      // 5. Fixed Header Scroll State & Back-to-Top Visibility
      var headerEl = document.getElementById('mm-header');
      var backTopBtn = document.getElementById('mm-back-to-top');
      function onScroll() {
        var y = window.scrollY || window.pageYOffset;
        if (headerEl) {
          headerEl.classList.toggle('is-scrolled', y > 24);
        }
        if (backTopBtn) {
          backTopBtn.classList.toggle('is-visible', y > 420);
        }
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      if (backTopBtn) {
        backTopBtn.addEventListener('click', function() {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      // 6. Mobile Hamburger Navigation
      var mobileToggle = document.getElementById('mm-mobile-toggle');
      var mobileDrawer = document.getElementById('mm-mobile-drawer');
      if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', function() {
          var open = mobileDrawer.classList.toggle('is-open');
          mobileToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        mobileDrawer.querySelectorAll('a').forEach(function(a) {
          a.addEventListener('click', function() {
            mobileDrawer.classList.remove('is-open');
            mobileToggle.setAttribute('aria-expanded', 'false');
          });
        });
      }

      // 7. Auto-Generate Sticky Desktop & Mobile Collapsible Table of Contents
      var articleRoot = document.getElementById('mm-article-content') || document.querySelector('main');
      var desktopToc = document.getElementById('mm-desktop-toc-list');
      var mobileToc = document.getElementById('mm-mobile-toc-list');
      var tocLinksMap = {};

      if (articleRoot && (desktopToc || mobileToc)) {
        var headings = Array.prototype.slice.call(articleRoot.querySelectorAll('h2, h3'));
        var currentGroupList = null;

        headings.forEach(function(h, idx) {
          if (h.classList.contains('mm-faq-heading')) return;
          if (!h.id) {
            h.id = 'sec-' + idx + '-' + h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48);
          }

          if (h.tagName === 'H2') {
            var li = document.createElement('li');
            var row = document.createElement('div');
            row.className = 'mm-toc-parent-row';

            var a = document.createElement('a');
            a.className = 'mm-toc-link';
            a.href = '#' + h.id;
            a.textContent = h.textContent.trim();
            row.appendChild(a);
            li.appendChild(row);

            var subUl = document.createElement('ul');
            subUl.className = 'mm-toc-sublist';
            li.appendChild(subUl);
            currentGroupList = subUl;

            if (desktopToc) desktopToc.appendChild(li);
            tocLinksMap[h.id] = a;

            if (mobileToc) {
              var mLi = document.createElement('li');
              var mA = a.cloneNode(true);
              mLi.appendChild(mA);
              mobileToc.appendChild(mLi);
            }
          } else if (h.tagName === 'H3' && currentGroupList) {
            var subLi = document.createElement('li');
            var subA = document.createElement('a');
            subA.className = 'mm-toc-link';
            subA.href = '#' + h.id;
            subA.textContent = h.textContent.trim();
            subLi.appendChild(subA);
            currentGroupList.appendChild(subLi);
            tocLinksMap[h.id] = subA;
          }
        });

        // Clean empty sublists & add collapse toggles on populated groups
        if (desktopToc) {
          desktopToc.querySelectorAll('.mm-toc-sublist').forEach(function(ul) {
            if (!ul.children.length) {
              ul.remove();
            } else {
              var row = ul.previousElementSibling;
              var btn = document.createElement('button');
              btn.type = 'button';
              btn.className = 'mm-toc-collapse-btn';
              btn.setAttribute('aria-label', 'Toggle sub-headings');
              btn.textContent = '▾';
              btn.addEventListener('click', function() {
                var collapsed = ul.classList.toggle('is-collapsed');
                btn.textContent = collapsed ? '▸' : '▾';
              });
              row.appendChild(btn);
            }
          });
        }

        // IntersectionObserver Active Heading Tracking
        if ('IntersectionObserver' in window) {
          var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                Object.keys(tocLinksMap).forEach(function(k) {
                  tocLinksMap[k].classList.remove('is-active');
                });
                var active = tocLinksMap[entry.target.id];
                if (active) active.classList.add('is-active');
              }
            });
          }, { rootMargin: '-90px 0px -65% 0px', threshold: 0.1 });

          Object.keys(tocLinksMap).forEach(function(id) {
            var target = document.getElementById(id);
            if (target) observer.observe(target);
          });
        }
      }

      // Mobile TOC Toggle
      var mTocBtn = document.getElementById('mm-mobile-toc-toggle');
      var mTocBody = document.getElementById('mm-mobile-toc-body');
      if (mTocBtn && mTocBody) {
        mTocBtn.addEventListener('click', function() {
          var isHidden = mTocBody.hasAttribute('hidden');
          if (isHidden) {
            mTocBody.removeAttribute('hidden');
            mTocBtn.setAttribute('aria-expanded', 'true');
            mTocBtn.lastElementChild.textContent = '−';
          } else {
            mTocBody.setAttribute('hidden', 'hidden');
            mTocBtn.setAttribute('aria-expanded', 'false');
            mTocBtn.lastElementChild.textContent = '+';
          }
        });
      }

      // 8. FAQ Accordion Handler
      document.querySelectorAll('.mm-faq-trigger').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var expanded = btn.getAttribute('aria-expanded') === 'true';
          var panelId = btn.getAttribute('aria-controls');
          var panel = panelId ? document.getElementById(panelId) : null;
          var icon = btn.querySelector('.mm-faq-icon');
          btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
          if (icon) icon.textContent = expanded ? '+' : '−';
          if (panel) {
            if (expanded) panel.setAttribute('hidden', 'hidden');
            else panel.removeAttribute('hidden');
          }
        });
      });

      // 9. GSAP ScrollTrigger Animations (Respects prefers-reduced-motion)
      var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reduceMotion && window.gsap && window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        window.gsap.utils.toArray('.mm-reveal').forEach(function(el) {
          window.gsap.from(el, {
            y: 18,
            opacity: 0,
            duration: 0.55,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              once: true
            }
          });
        });
      }
    });
    //]]>
  </script>
</body>
</html>`;
}

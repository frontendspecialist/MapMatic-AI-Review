import {
  HERO_DATA,
  QUICK_SUMMARY_ROWS,
  INTRODUCTION_PARAGRAPHS,
  FEATURE_GROUPS,
  MEGA_BUNDLE_CARDS,
  BUNDLE_VALUE_TABLE,
  TIER_COMPARISON_TABLE,
  PRICING_COMPARISON,
  BONUS_ITEMS,
  TUTORIAL_STEPS,
  UPGRADE_ANALYSIS_ITEMS,
  COMPARISON_TABLE_ROWS,
  TARGET_AUDIENCES,
  ADVANTAGES_LIST,
  DISADVANTAGES_LIST,
  FAQ_ITEMS,
  CTA_PLACEMENTS,
  PLACEHOLDER_CONFIG,
  BUNDLE_OFFER_TEXT,
} from '../data/reviewContent';
import {
  GUARANTEE_SECTION,
  BUNDLE_DEEP_DIVE_PARAGRAPHS,
  PRICING_GUIDE_PARAGRAPHS,
  COMPETITOR_SECTIONS,
  FINAL_VERDICT_PARAGRAPHS,
} from '../data/reviewLongformSections';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderProductImageLink(
  src: string,
  alt: string,
  caption: string,
  extraClass = '',
  imgKey = ''
): string {
  const keyAttr = imgKey ? ` data-mm-img="${escapeHtml(imgKey)}"` : '';
  return `
<figure class="mm-media-frame mm-reveal ${extraClass}">
  <a class="mm-aff-img-link" href="${PLACEHOLDER_CONFIG.AFFILIATE_URL}" target="_blank" rel="sponsored nofollow noopener" aria-label="${escapeHtml(alt)}">
    <div class="mm-img-shell mm-studio-img-wrap">
      <img${keyAttr} src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" width="1200" height="675" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
      <div class="mm-img-fallback" style="display:none;">
        <span class="mm-img-fallback-code">${escapeHtml(src)}</span>
        <span class="mm-img-fallback-title">${escapeHtml(alt)}</span>
        <span class="mm-img-fallback-cta">Click to View Official MapMatic AI Page</span>
      </div>
    </div>
  </a>
  <figcaption class="mm-media-caption">${escapeHtml(caption)}</figcaption>
</figure>`;
}

function renderCtaBlock(ctaKey: keyof typeof CTA_PLACEMENTS): string {
  const cta = CTA_PLACEMENTS[ctaKey];
  const btnClass =
    cta.variant === 'primary' ? 'mm-btn mm-btn-primary' : 'mm-btn mm-btn-secondary';
  return `
<div class="mm-cta-box mm-reveal">
  <div class="mm-cta-box-inner">
    <a class="${btnClass}" href="${PLACEHOLDER_CONFIG.AFFILIATE_URL}" target="_blank" rel="sponsored nofollow noopener">
      <span>${escapeHtml(cta.label)}</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </a>
    ${cta.subtext ? `<p class="mm-cta-note">${escapeHtml(cta.subtext)}</p>` : ''}
  </div>
</div>`;
}

export function generateArticleBodyHtml(): string {
  const parts: string[] = [];

  // Hero / Intro + Featured Image inside post
  parts.push(`
<section id="review-overview" class="mm-hero-block mm-reveal">
  <div class="mm-meta-line">
    <span>AI Mapping &amp; Local Agency Software</span>
    <span aria-hidden="true">·</span>
    <span>2026 Buyer Guide</span>
    <span aria-hidden="true">·</span>
    <span>Verified Launch Breakdown</span>
  </div>
  <h1 class="mm-h1" itemprop="headline">${escapeHtml(HERO_DATA.h1)}</h1>
  <p class="mm-lead">${escapeHtml(HERO_DATA.supportingHeadline)}</p>

  <div class="mm-featured-showcase">
    <div class="mm-featured-bar">
      <span>Featured Product Showcase · MapMatic AI Suite</span>
      <span class="mm-mono">FE $49 · Mega Bundle $347</span>
    </div>
    ${renderProductImageLink(
      PLACEHOLDER_CONFIG.FEATURED_IMAGE,
      'MapMatic Bundle Featured Image — All-In-One Local Business Growth Suite',
      'Featured Showcase: MapMatic AI All-In-One Suite covering Local Map Search, AI Website Creation, Review Management, Multichannel Outreach, Agency Toolkit, and Reseller License.',
      'mm-featured-media',
      'FEATURED_IMAGE'
    )}
    ${renderCtaBlock('featuredBanner')}
  </div>

  <p class="mm-body-p">${escapeHtml(HERO_DATA.introParagraph)}</p>
  <ul class="mm-check-list">
    ${HERO_DATA.keyBenefits.map((b) => `<li>${escapeHtml(b)}</li>`).join('\n    ')}
  </ul>
</section>`);

  // Affiliate Disclosure immediately before primary CTA
  parts.push(`
<aside class="mm-disclosure-box mm-reveal" aria-label="Affiliate Disclosure">
  <p><strong>Affiliate Disclosure:</strong> ${escapeHtml(HERO_DATA.disclosureText.replace('Affiliate Disclosure: ', ''))}</p>
</aside>`);

  // Hero Primary & Secondary CTA
  parts.push(`
<div class="mm-hero-actions mm-reveal">
  <a class="mm-btn mm-btn-primary mm-aff-link" href="${PLACEHOLDER_CONFIG.AFFILIATE_URL}" target="_blank" rel="sponsored nofollow noopener">
    <span>${escapeHtml(CTA_PLACEMENTS.heroPrimary.label)}</span>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  </a>
  <a class="mm-btn mm-btn-secondary mm-aff-link" href="${PLACEHOLDER_CONFIG.AFFILIATE_URL}" target="_blank" rel="sponsored nofollow noopener">
    <span>${escapeHtml(CTA_PLACEMENTS.heroSecondary.label)}</span>
  </a>
</div>`);

  // Adsterra 728x90 top/mid placement mount
  parts.push(`<div class="mm-ad-anchor" data-ad-target="adsterra-728x90"></div>`);

  // Quick Review Summary
  parts.push(`
<section id="quick-review-summary" class="mm-section mm-reveal">
  <h2 class="mm-h2">Quick Review Summary: MapMatic AI at a Glance</h2>
  <div class="mm-card mm-summary-card">
    <div class="mm-summary-grid">
      ${QUICK_SUMMARY_ROWS.map(
        (row) => `
      <div class="mm-summary-row">
        <div class="mm-summary-label">${escapeHtml(row.label)}</div>
        <div class="mm-summary-val">${escapeHtml(row.value)}</div>
      </div>`
      ).join('')}
    </div>
  </div>
  ${renderCtaBlock('quickSummary')}
</section>`);

  // Product Introduction: What Is MapMatic AI?
  parts.push(`
<section id="what-is-mapmatic-ai" class="mm-section mm-reveal">
  <h2 class="mm-h2">What Is MapMatic AI?</h2>
  ${INTRODUCTION_PARAGRAPHS.map((p) => `<p class="mm-body-p">${escapeHtml(p)}</p>`).join('\n  ')}
  ${renderProductImageLink(
    PLACEHOLDER_CONFIG.PRODUCT_SUITE_IMAGE,
    'Complete 6-Product MapMatic AI Ecosystem Boxes Lineup',
    'Complete MapMatic AI 6-Product Suite: Unlimited Edition, DFY AgencyVault + Sales Toolkit, MapMatic AI Front-End, Reputation Management App, Multichannel Sales Outreach, and Reseller License.',
    '',
    'PRODUCT_SUITE_IMAGE'
  )}
</section>`);

  // Features Section
  parts.push(`
<section id="mapmatic-ai-features" class="mm-section">
  <h2 class="mm-h2 mm-reveal">MapMatic AI Features: Core Capabilities Breakdown</h2>
  <p class="mm-body-p mm-reveal">Understanding what an AI interactive map generator and local business discovery suite actually does inside its cloud dashboard helps you evaluate whether it fits your publishing or agency workflow. Below is the verified breakdown of all 8 core capability areas.</p>
  <div class="mm-feature-grid">
    ${FEATURE_GROUPS.map(
      (feat) => `
    <div id="${escapeHtml(feat.id)}" class="mm-card mm-feature-card mm-reveal">
      <div class="mm-card-kicker">${escapeHtml(feat.category)}</div>
      <h3 class="mm-h3">${escapeHtml(feat.title)}</h3>
      <p class="mm-body-p">${escapeHtml(feat.description)}</p>
      <ul class="mm-bullet-list">
        ${feat.details.map((d) => `<li>${escapeHtml(d)}</li>`).join('\n        ')}
      </ul>
    </div>`
    ).join('\n')}
  </div>
  ${renderProductImageLink(
    PLACEHOLDER_CONFIG.PRODUCT_DASHBOARD_IMAGE,
    'Front-End MapMatic AI ($67 Value) — Local Business Prospecting and AI-Powered Websites',
    'Front-End MapMatic AI ($67 Value Card · $49 Launch Price): Local Business Prospecting & Website Opportunity Discovery System.',
    '',
    'PRODUCT_DASHBOARD_IMAGE'
  )}
  ${renderCtaBlock('features')}
  ${renderCtaBlock('productImage')}
</section>`);

  // Adsterra Native Banner anchor at natural break
  parts.push(`<div class="mm-ad-anchor" data-ad-target="adsterra-native"></div>`);

  // Mega Bundle Deal Section
  parts.push(`
<section id="mapmatic-ai-mega-bundle" class="mm-section mm-bundle-section">
  <h2 class="mm-h2 mm-reveal">MapMatic AI Mega Bundle Deal – Complete Offer Breakdown</h2>
  <div class="mm-offer-banner mm-reveal">
    <div class="mm-offer-banner-title">${escapeHtml(BUNDLE_OFFER_TEXT.discountHeadline)}</div>
    <p class="mm-offer-banner-sub">${escapeHtml(BUNDLE_OFFER_TEXT.priceCompare)}</p>
  </div>
  ${BUNDLE_DEEP_DIVE_PARAGRAPHS.map((p) => `<p class="mm-body-p mm-reveal">${escapeHtml(p)}</p>`).join('\n  ')}
  <div class="mm-card mm-reveal" style="margin-bottom:24px;">
    <div class="mm-card-kicker">${escapeHtml(BUNDLE_OFFER_TEXT.megaHeadline)}</div>
    <p class="mm-body-p" style="margin-bottom:0;">${escapeHtml(BUNDLE_OFFER_TEXT.megaSubheadline)}</p>
  </div>
  <div class="mm-bundle-grid">
    ${MEGA_BUNDLE_CARDS.map(
      (card, idx) => `
    <div class="mm-bundle-card mm-reveal">
      <div class="mm-card-kicker">${escapeHtml(card.badge)}</div>
      <h3 class="mm-h3">${escapeHtml(card.name)}</h3>
      <a class="mm-aff-img-link mm-bundle-thumb" href="${PLACEHOLDER_CONFIG.AFFILIATE_URL}" target="_blank" rel="sponsored nofollow noopener">
        <img data-mm-img="${idx === 0 ? 'PRODUCT_DASHBOARD_IMAGE' : idx === 1 ? 'MEGA_BUNDLE_IMAGE' : 'PRODUCT_SUITE_IMAGE'}" src="${escapeHtml(card.imageUrl)}" alt="${escapeHtml(card.name)}" width="800" height="500" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
        <div class="mm-img-fallback" style="display:none;">
          <span class="mm-img-fallback-code">${escapeHtml(card.imageUrl)}</span>
          <span class="mm-img-fallback-title">${escapeHtml(card.name)}</span>
        </div>
      </a>
      <p class="mm-body-p">${escapeHtml(card.shortDescription)}</p>
      <p class="mm-sub-label">Main Benefits</p>
      <ul class="mm-bullet-list">
        ${card.benefits.map((b) => `<li>${escapeHtml(b)}</li>`).join('\n        ')}
      </ul>
      <p class="mm-sub-label">Included Scope</p>
      <ul class="mm-bullet-list">
        ${card.features.map((f) => `<li>${escapeHtml(f)}</li>`).join('\n        ')}
      </ul>
      <div class="mm-bundle-price-bar">${escapeHtml(card.purchaseInfo)}</div>
    </div>`
    ).join('\n')}
  </div>
  ${renderCtaBlock('megaBundle')}
</section>`);

  // Pricing Section (3 Structured Pricing Tables + Offer Cards)
  parts.push(`
<section id="mapmatic-ai-pricing" class="mm-section">
  <h2 class="mm-h2 mm-reveal">MapMatic AI Pricing – Single Purchase vs Mega Bundle Deal</h2>
  ${PRICING_GUIDE_PARAGRAPHS.map((p) => `<p class="mm-body-p mm-reveal">${escapeHtml(p)}</p>`).join('\n  ')}

  <h3 class="mm-h3 mm-reveal">Pricing Table 1: Front-End License ($49) vs. Mega Bundle Deal ($347)</h3>
  <div class="mm-pricing-grid">
    <div class="mm-card mm-pricing-card mm-reveal">
      <div class="mm-card-kicker">Front-End Option</div>
      <h4 class="mm-h3">${escapeHtml(PRICING_COMPARISON.single.name)}</h4>
      <div class="mm-price-figure">${escapeHtml(PRICING_COMPARISON.single.price)}</div>
      <p class="mm-body-p">${escapeHtml(PRICING_COMPARISON.single.summary)}</p>
      <ul class="mm-check-list">
        ${PRICING_COMPARISON.single.inclusions.map((inc) => `<li>${escapeHtml(inc)}</li>`).join('\n        ')}
      </ul>
      <p class="mm-muted-note"><strong>Consideration:</strong> ${escapeHtml(PRICING_COMPARISON.single.considerations)}</p>
      <a class="mm-btn mm-btn-secondary mm-full-btn mm-aff-link" href="${PLACEHOLDER_CONFIG.AFFILIATE_URL}" target="_blank" rel="sponsored nofollow noopener">${escapeHtml(CTA_PLACEMENTS.pricingSingle.label)}</a>
    </div>
    <div class="mm-card mm-pricing-card mm-pricing-featured mm-reveal">
      <div class="mm-card-kicker">Complete Bundle Package · Save $697</div>
      <h4 class="mm-h3">${escapeHtml(PRICING_COMPARISON.bundle.name)}</h4>
      <div class="mm-price-figure">${escapeHtml(PRICING_COMPARISON.bundle.price)}</div>
      <p class="mm-body-p">${escapeHtml(PRICING_COMPARISON.bundle.summary)}</p>
      <ul class="mm-check-list">
        ${PRICING_COMPARISON.bundle.inclusions.map((inc) => `<li>${escapeHtml(inc)}</li>`).join('\n        ')}
      </ul>
      <p class="mm-muted-note"><strong>Consideration:</strong> ${escapeHtml(PRICING_COMPARISON.bundle.considerations)}</p>
      <a class="mm-btn mm-btn-primary mm-full-btn mm-aff-link" href="${PLACEHOLDER_CONFIG.AFFILIATE_URL}" target="_blank" rel="sponsored nofollow noopener">${escapeHtml(CTA_PLACEMENTS.pricingBundle.label)}</a>
    </div>
  </div>

  <div class="mm-card mm-reveal" style="text-align:center; margin:24px 0;">
    <div class="mm-card-kicker">${escapeHtml(BUNDLE_OFFER_TEXT.commercialNotice)}</div>
    <div class="mm-h3" style="margin-bottom:6px;">${escapeHtml(BUNDLE_OFFER_TEXT.priceCompare)}</div>
    <p class="mm-muted-note" style="margin:0;">${escapeHtml(BUNDLE_OFFER_TEXT.guaranteeNote)}</p>
  </div>

  <h3 class="mm-h3 mm-reveal">Pricing Table 2: Official Bundle Value Stack Breakdown ($1,134 Core Value)</h3>
  <div class="mm-table-wrap mm-reveal">
    <table class="mm-compare-table">
      <thead>
        <tr>
          <th>Product Module</th>
          <th style="text-align:right;">Listed Value</th>
        </tr>
      </thead>
      <tbody>
        ${BUNDLE_VALUE_TABLE.map(
          (row) => `
        <tr>
          <td><strong>${escapeHtml(row.product)}</strong><br/><span style="font-size:12px;">${escapeHtml(row.cardNote)}</span></td>
          <td class="mm-mono" style="text-align:right; font-weight:700;">${escapeHtml(row.value)}</td>
        </tr>`
        ).join('\n')}
        <tr>
          <td><strong>TOTAL SOFTWARE VALUE (+ $994 Fast-Action Bonuses)</strong></td>
          <td class="mm-mono" style="text-align:right; font-weight:800;">$1,134</td>
        </tr>
      </tbody>
    </table>
  </div>
  ${renderCtaBlock('valueTableCta')}

  <h3 class="mm-h3 mm-reveal">Pricing Table 3: Front-End vs. Individual OTOs vs. Mega Bundle Cost Matrix</h3>
  <div class="mm-table-wrap mm-reveal">
    <table class="mm-compare-table">
      <thead>
        <tr>
          <th>Capability / Module</th>
          <th>Front-End ($49)</th>
          <th>Individual OTOs</th>
          <th>Mega Bundle ($347)</th>
        </tr>
      </thead>
      <tbody>
        ${TIER_COMPARISON_TABLE.map(
          (row) => `
        <tr>
          <td><strong>${escapeHtml(row.feature)}</strong></td>
          <td>${escapeHtml(row.frontEnd)}</td>
          <td>${escapeHtml(row.individualOtos)}</td>
          <td><strong>${escapeHtml(row.megaBundle)}</strong></td>
        </tr>`
        ).join('\n')}
      </tbody>
    </table>
  </div>
</section>`);

  // Money-Back Guarantee
  parts.push(`
<section id="money-back-guarantee" class="mm-section mm-reveal">
  <h2 class="mm-h2">${escapeHtml(GUARANTEE_SECTION.heading)}</h2>
  <div class="mm-card mm-guarantee-card">
    <div class="mm-guarantee-badge-row">
      <span class="mm-card-kicker">Verified Refund Coverage:</span>
      <strong class="mm-mono">${escapeHtml(PLACEHOLDER_CONFIG.GUARANTEE_PERIOD)}</strong>
    </div>
    ${GUARANTEE_SECTION.paragraphs.map((p) => `<p class="mm-body-p">${escapeHtml(p)}</p>`).join('\n    ')}
    ${renderCtaBlock('guaranteeCta')}
  </div>
</section>`);

  // Features and Bonuses
  parts.push(`
<section id="mapmatic-ai-bonuses" class="mm-section">
  <div class="mm-card-kicker mm-reveal">EXCLUSIVE BONUSES For The Fast Action Taker</div>
  <h2 class="mm-h2 mm-reveal" style="margin-top:6px;">MapMatic AI Features and Bonus Breakdown ($994 Bonus Value)</h2>
  <p class="mm-body-p mm-reveal">Fast-action buyers grabbing the MapMatic Mega Bundle receive two standalone software bonuses valued at $497 each ($994 combined): ADA Suite for website accessibility services and MobiCentric for client iOS &amp; Android app creation.</p>
  <div class="mm-bonus-grid">
    ${BONUS_ITEMS.map(
      (bonus, idx) => `
    <div class="mm-card mm-bonus-card mm-reveal">
      <a class="mm-aff-img-link mm-bundle-thumb" href="${PLACEHOLDER_CONFIG.AFFILIATE_URL}" target="_blank" rel="sponsored nofollow noopener">
        <img data-mm-img="BONUS_${idx + 1}_IMAGE" src="${escapeHtml(bonus.imageUrl)}" alt="${escapeHtml(bonus.title)}" width="800" height="450" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
        <div class="mm-img-fallback" style="display:none;">
          <span class="mm-img-fallback-code">${escapeHtml(bonus.imageUrl)}</span>
          <span class="mm-img-fallback-title">${escapeHtml(bonus.title)}</span>
        </div>
      </a>
      <div class="mm-card-kicker">${escapeHtml(bonus.valueLabel)}</div>
      <h3 class="mm-h3">${escapeHtml(bonus.title)}</h3>
      <p class="mm-body-p" style="font-weight:600;">${escapeHtml(bonus.subtitle)}</p>
      <p class="mm-body-p">${escapeHtml(bonus.description)}</p>
      <ul class="mm-bullet-list">
        ${bonus.benefits.map((b) => `<li>${escapeHtml(b)}</li>`).join('\n        ')}
      </ul>
      <div class="mm-status-line"><strong>Inclusion Status:</strong> ${escapeHtml(bonus.inclusionStatus)}</div>
    </div>`
    ).join('\n')}
  </div>
  ${renderCtaBlock('bonus')}
</section>`);

  // How to Use MapMatic AI
  parts.push(`
<section id="how-to-use-mapmatic-ai" class="scroll-anchor mm-section">
  <h2 class="mm-h2 mm-reveal">How to Use MapMatic AI: Step-by-Step Beginner Workflow</h2>
  <p class="mm-body-p mm-reveal">If you are wondering how to use MapMatic AI from day one, the eight-step roadmap below covers everything from JVZoo checkout and dashboard login to local Google Maps discovery, AI website creation, and multichannel outreach.</p>
  <div class="mm-steps-list">
    ${TUTORIAL_STEPS.map(
      (s) => `
    <div class="mm-card mm-step-card mm-reveal">
      <div class="mm-step-num">Step 0${s.step}</div>
      <div class="mm-step-content">
        <div class="mm-card-kicker">${escapeHtml(s.type)}</div>
        <h3 class="mm-h3">${escapeHtml(s.title)}</h3>
        <p class="mm-body-p">${escapeHtml(s.description)}</p>
      </div>
    </div>`
    ).join('\n')}
  </div>
  ${renderCtaBlock('tutorial')}
</section>`);

  // Individual Product & Upgrade Analysis
  parts.push(`
<section id="individual-upgrade-analysis" class="mm-section">
  <h2 class="mm-h2 mm-reveal">Individual Product &amp; Upgrade Analysis (Front-End + Upgrades #1–#5)</h2>
  <p class="mm-body-p mm-reveal">Here is a module-by-module inspection of the MapMatic AI Front-End ($49) and all five official OTO upgrades unlocked inside the $347 MapMatic Mega Bundle Deal.</p>
  <div class="mm-upgrade-stack">
    ${UPGRADE_ANALYSIS_ITEMS.map(
      (item, idx) => `
    <div class="mm-card mm-upgrade-card mm-reveal">
      <div class="mm-upgrade-media">
        <a class="mm-aff-img-link" href="${PLACEHOLDER_CONFIG.AFFILIATE_URL}" target="_blank" rel="sponsored nofollow noopener">
          <img data-mm-img="${idx === 0 ? 'PRODUCT_DASHBOARD_IMAGE' : `UPGRADE_${idx}_IMAGE`}" src="${escapeHtml(item.imageUrl)}" alt="${escapeHtml(item.imageAlt)}" width="640" height="400" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
          <div class="mm-img-fallback" style="display:none;">
            <span class="mm-img-fallback-code">${escapeHtml(item.imageUrl)}</span>
            <span class="mm-img-fallback-title">${escapeHtml(item.title)}</span>
          </div>
        </a>
      </div>
      <div class="mm-upgrade-body">
        <div class="mm-card-kicker">${escapeHtml(item.tierLabel)}</div>
        <h3 class="mm-h3">${escapeHtml(item.title)}</h3>
        <p class="mm-body-p" style="font-weight:600;">${escapeHtml(item.subtitle)}</p>
        <p class="mm-body-p"><strong>What It Offers:</strong> ${escapeHtml(item.whatItOffers)}</p>
        <p class="mm-body-p"><strong>Intended Users:</strong> ${escapeHtml(item.intendedUsers)}</p>
        <p class="mm-body-p"><strong>Relationship to Main Product:</strong> ${escapeHtml(item.relationToMain)}</p>
        <ul class="mm-bullet-list">
          ${item.mainFunctions.map((fn) => `<li>${escapeHtml(fn)}</li>`).join('\n          ')}
        </ul>
        <div class="mm-upgrade-meta">
          <span><strong>Mega Bundle Status:</strong> ${escapeHtml(item.includedInBundle)}</span>
          <span><strong>Value / Price:</strong> ${escapeHtml(item.priceField)}</span>
        </div>
      </div>
    </div>`
    ).join('\n')}
  </div>
</section>`);

  // Competitor & Alternative Comparison
  parts.push(`
<section id="competitor-comparison" class="mm-section">
  <h2 class="mm-h2 mm-reveal">${escapeHtml(COMPETITOR_SECTIONS.heading)}</h2>
  ${COMPETITOR_SECTIONS.paragraphs.map((p) => `<p class="mm-body-p mm-reveal">${escapeHtml(p)}</p>`).join('\n  ')}
  <div class="mm-table-wrap mm-reveal">
    <table class="mm-compare-table">
      <thead>
        <tr>
          <th>Comparison Criterion</th>
          <th>MapMatic AI</th>
          <th>Mapbox (Developer SDK)</th>
          <th>Free AI Map Maker Tools</th>
        </tr>
      </thead>
      <tbody>
        ${COMPARISON_TABLE_ROWS.map(
          (row) => `
        <tr>
          <td><strong>${escapeHtml(row.criterion)}</strong></td>
          <td>${escapeHtml(row.mapmatic)}</td>
          <td>${escapeHtml(row.mapbox)}</td>
          <td>${escapeHtml(row.freeTools)}</td>
        </tr>`
        ).join('\n')}
      </tbody>
    </table>
  </div>
  ${(COMPETITOR_SECTIONS.subheadings ?? [])
    .map(
      (sub) => `
  <div id="${escapeHtml(sub.id)}" class="mm-sub-section mm-reveal">
    <h3 class="mm-h3">${escapeHtml(sub.heading)}</h3>
    ${sub.paragraphs.map((p) => `<p class="mm-body-p">${escapeHtml(p)}</p>`).join('\n    ')}
  </div>`
    )
    .join('\n')}
  ${renderCtaBlock('comparison')}
</section>`);

  // Who Should Use MapMatic AI?
  parts.push(`
<section id="who-should-use-mapmatic-ai" class="mm-section">
  <h2 class="mm-h2 mm-reveal">Who Should Use MapMatic AI?</h2>
  <p class="mm-body-p mm-reveal">Interactive geographical content and local Google Maps lead discovery serve a wide range of digital creators and agencies. Here is how ten user groups apply MapMatic AI realistically.</p>
  <div class="mm-audience-grid">
    ${TARGET_AUDIENCES.map(
      (aud) => `
    <div class="mm-card mm-audience-card mm-reveal">
      <h3 class="mm-h3">${escapeHtml(aud.role)}</h3>
      <p class="mm-body-p">${escapeHtml(aud.useCase)}</p>
    </div>`
    ).join('\n')}
  </div>
</section>`);

  // Advantages and Disadvantages
  parts.push(`
<section id="pros-and-cons" class="mm-section">
  <h2 class="mm-h2 mm-reveal">MapMatic AI Advantages and Disadvantages</h2>
  <p class="mm-body-p mm-reveal">No software is ideal for every project. Weighing both verified strengths and practical limitations helps you decide with confidence.</p>
  <div class="mm-pros-cons-grid">
    <div class="mm-card mm-pros-card mm-reveal">
      <h3 class="mm-h3">Verified Advantages</h3>
      <ul class="mm-check-list">
        ${ADVANTAGES_LIST.map((a) => `<li>${escapeHtml(a)}</li>`).join('\n        ')}
      </ul>
    </div>
    <div class="mm-card mm-cons-card mm-reveal">
      <h3 class="mm-h3">Limitations &amp; Considerations</h3>
      <ul class="mm-bullet-list">
        ${DISADVANTAGES_LIST.map((d) => `<li>${escapeHtml(d)}</li>`).join('\n        ')}
      </ul>
    </div>
  </div>
</section>`);

  // Pre-FAQ Offer Callout + CTA
  parts.push(`
<div class="mm-card mm-reveal" style="text-align:center; margin:28px 0 8px;">
  <div class="mm-card-kicker">${escapeHtml(BUNDLE_OFFER_TEXT.commercialNotice)}</div>
  <div class="mm-h3" style="margin-bottom:6px;">${escapeHtml(BUNDLE_OFFER_TEXT.priceCompare)}</div>
  <p class="mm-muted-note" style="margin:0;">${escapeHtml(BUNDLE_OFFER_TEXT.guaranteeNote)}</p>
</div>`);
  parts.push(renderCtaBlock('preFaq'));

  // FAQ Section (22 Questions)
  parts.push(`
<section id="mapmatic-ai-faq" class="mm-section">
  <h2 class="mm-h2 mm-reveal">Frequently Asked Questions About MapMatic AI (22 Answers)</h2>
  <p class="mm-body-p mm-reveal">Below are detailed answers to the most common buyer questions about MapMatic AI pricing ($49 Front-End vs. $347 Mega Bundle), all 5 OTO upgrades, ADA Suite and MobiCentric bonuses, alternatives, and the 30-day guarantee.</p>
  <div class="mm-faq-list" role="region" aria-label="MapMatic AI Frequently Asked Questions">
    ${FAQ_ITEMS.map(
      (faq, idx) => `
    <div class="mm-faq-item mm-reveal">
      <h3 class="mm-faq-heading">
        <button type="button" class="mm-faq-trigger" aria-expanded="${idx === 0 ? 'true' : 'false'}" aria-controls="${escapeHtml(faq.id)}-panel" id="${escapeHtml(faq.id)}-btn">
          <span>${escapeHtml(faq.question)}</span>
          <span class="mm-faq-icon" aria-hidden="true">${idx === 0 ? '−' : '+'}</span>
        </button>
      </h3>
      <div id="${escapeHtml(faq.id)}-panel" class="mm-faq-panel" role="region" aria-labelledby="${escapeHtml(faq.id)}-btn"${idx === 0 ? '' : ' hidden="hidden"'}>
        <p class="mm-body-p">${escapeHtml(faq.answer)}</p>
      </div>
    </div>`
    ).join('\n')}
  </div>
</section>`);

  // Final Verdict
  parts.push(`
<section id="final-verdict" class="mm-section mm-verdict-section mm-reveal">
  <h2 class="mm-h2">Is MapMatic AI Worth It in 2026? Final Verdict</h2>
  ${FINAL_VERDICT_PARAGRAPHS.map((p) => `<p class="mm-body-p">${escapeHtml(p)}</p>`).join('\n  ')}
  ${renderCtaBlock('finalVerdict')}
</section>`);

  return parts.join('\n');
}

export function generateArticleHtml(): string {
  return `<!-- =========================================================================
  MAPMATIC AI REVIEW 2026 — STANDALONE POST BODY HTML
  NOTE: This full review article is ALREADY MERGED inside mapmatic-ai-review-theme.xml.
========================================================================= -->
<article class="mm-article-root" itemscope="itemscope" itemtype="https://schema.org/Article">
${generateArticleBodyHtml()}
</article>`;
}

import {
  Award,
  Check,
  Compass,
  Globe,
  Layers,
  LayoutGrid,
  MapPin,
  Palette,
  ShieldCheck,
  Sliders,
  Sparkles,
} from 'lucide-react';
import {
  ADVANTAGES_LIST,
  BONUS_ITEMS,
  BUNDLE_OFFER_TEXT,
  BUNDLE_VALUE_TABLE,
  COMPARISON_TABLE_ROWS,
  CTA_PLACEMENTS,
  DISADVANTAGES_LIST,
  FEATURE_GROUPS,
  HERO_DATA,
  INTRODUCTION_PARAGRAPHS,
  MEGA_BUNDLE_CARDS,
  PLACEHOLDER_CONFIG,
  PRICING_COMPARISON,
  QUICK_SUMMARY_ROWS,
  TARGET_AUDIENCES,
  TIER_COMPARISON_TABLE,
  TUTORIAL_STEPS,
  UPGRADE_ANALYSIS_ITEMS,
} from '../data/reviewContent';
import {
  BUNDLE_DEEP_DIVE_PARAGRAPHS,
  COMPETITOR_SECTIONS,
  FINAL_VERDICT_PARAGRAPHS,
  GUARANTEE_SECTION,
  PRICING_GUIDE_PARAGRAPHS,
} from '../data/reviewLongformSections';
import { AffiliateCtaButton } from './AffiliateCtaButton';
import { FaqAccordion } from './FaqAccordion';
import { ProductVisualFrame } from './ProductVisualFrame';

interface ArticleBodyProps {
  affiliateUrl: string;
  singlePrice: string;
  bundlePrice: string;
  guaranteePeriod: string;
  bundleContents: string;
}

const FEATURE_ICONS: Record<string, typeof Sparkles> = {
  Sparkles,
  MapPin,
  Compass,
  Palette,
  Globe,
  Layers,
  Sliders,
  LayoutGrid,
};

function resolvePlaceholder(val: string, override: string, prefix: string): string {
  return override && !override.includes(prefix) ? override : val;
}

export function ArticleBody({
  affiliateUrl,
  singlePrice,
  bundlePrice,
  guaranteePeriod,
  bundleContents,
}: ArticleBodyProps) {
  const displaySinglePrice = resolvePlaceholder(
    PLACEHOLDER_CONFIG.SINGLE_PRICE,
    singlePrice,
    '[VERIFY'
  );
  const displayBundlePrice = resolvePlaceholder(
    PLACEHOLDER_CONFIG.BUNDLE_PRICE,
    bundlePrice,
    '[VERIFY'
  );
  const displayGuarantee = resolvePlaceholder(
    PLACEHOLDER_CONFIG.GUARANTEE_PERIOD,
    guaranteePeriod,
    '[VERIFY'
  );
  const displayBundleContents = resolvePlaceholder(
    PLACEHOLDER_CONFIG.BUNDLE_CONTENTS,
    bundleContents,
    '[VERIFY'
  );

  return (
    <article id="mm-live-article" className="min-w-0">
      {/* B. Hero Section + Featured Image */}
      <section id="review-overview" className="scroll-anchor mm-reveal">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#7024E8] dark:text-[#A66BFF]">
          <span>AI Mapping &amp; Local Agency Software</span>
          <span aria-hidden="true">·</span>
          <span>2026 Buyer Guide</span>
          <span aria-hidden="true">·</span>
          <span>Verified Launch Breakdown</span>
        </div>

        <h1 className="font-display text-[clamp(2rem,3.6vw,3.15rem)] font-extrabold leading-[1.12] tracking-tight text-[#171421] dark:text-white [text-wrap:balance]">
          {HERO_DATA.h1}
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-[#666273] dark:text-[#B8B8C4]">
          {HERO_DATA.supportingHeadline}
        </p>

        {/* Featured Image Showcase */}
        <div
          data-testid="featured-image-showcase"
          className="mt-6 rounded-2xl border border-[#7024E8]/30 dark:border-[#7828FF]/40 bg-gradient-to-b from-[#7024E8]/[0.06] to-transparent dark:from-[#7828FF]/[0.14] p-4 sm:p-5"
        >
          <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#7024E8] dark:text-[#DCC8FF]">
            <span className="inline-flex items-center gap-1.5">
              <Award className="h-4 w-4" aria-hidden="true" />
              Featured Product Showcase · MapMatic AI Suite
            </span>
            <span className="font-mono-tabular">FE $49 · Bundle $347</span>
          </div>
          <ProductVisualFrame
            placeholderKey="FEATURED_IMAGE"
            imageUrl={PLACEHOLDER_CONFIG.FEATURED_IMAGE}
            alt="MapMatic Bundle Featured Image — All-In-One Local Business Growth Suite"
            caption="Featured Showcase: MapMatic AI All-In-One Suite covering Local Map Search, AI Website Creation, Review Management, Multichannel Outreach, Agency Toolkit, and Reseller License."
            affiliateUrl={affiliateUrl}
            variant="hero"
            priority
          />
          <AffiliateCtaButton cta={CTA_PLACEMENTS.featuredBanner} affiliateUrl={affiliateUrl} boxed />
        </div>

        <p className="mt-5 text-[16px] leading-[1.75] text-[#666273] dark:text-[#B8B8C4]">
          {HERO_DATA.introParagraph}
        </p>

        <ul className="mt-5 space-y-2.5 text-[15px] text-[#171421] dark:text-[#E7E1EF]">
          {HERO_DATA.keyBenefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2.5">
              <Check className="mt-1 h-4 w-4 shrink-0 text-[#7024E8] dark:text-[#A66BFF]" aria-hidden="true" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        {/* C. Affiliate Disclosure immediately before primary CTA */}
        <aside
          aria-label="Affiliate Disclosure"
          className="mt-6 rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#191A20] px-5 py-4 text-xs leading-relaxed text-[#666273] dark:text-[#B8B8C4]"
        >
          <strong className="text-[#171421] dark:text-white">Affiliate Disclosure:</strong>{' '}
          {HERO_DATA.disclosureText.replace('Affiliate Disclosure: ', '')}
        </aside>

        <div className="mt-6 flex flex-wrap items-center gap-3.5">
          <AffiliateCtaButton cta={CTA_PLACEMENTS.heroPrimary} affiliateUrl={affiliateUrl} />
          <AffiliateCtaButton cta={CTA_PLACEMENTS.heroSecondary} affiliateUrl={affiliateUrl} />
        </div>
      </section>

      {/* Blogger Layout Slot: Adsterra 728x90 Banner */}
      <div
        aria-label="Top 728x90 Advertisement Layout Slot"
        className="my-7 flex min-h-[90px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA]/70 dark:bg-[#191A20]/70 px-4 py-4 text-center"
      >
        <span className="font-mono-tabular text-[11px] font-semibold text-[#7024E8] dark:text-[#A66BFF]">
          Blogger Gadget Slot: HTML1 (Top Banner Advertisement)
        </span>
        <span className="mt-0.5 font-display text-sm font-bold text-[#171421] dark:text-white">
          Adsterra 728x90 Banner
        </span>
      </div>

      {/* D. Quick Review Summary */}
      <section id="quick-review-summary" className="scroll-anchor mt-12 mm-reveal">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171421] dark:text-white mb-5">
          Quick Review Summary: MapMatic AI at a Glance
        </h2>
        <div className="rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] p-6 shadow-sm">
          <div className="divide-y divide-[#E7E1EF] dark:divide-[#34313E]">
            {QUICK_SUMMARY_ROWS.map((row) => {
              let value = row.value;
              if (row.label === 'Front-End Pricing') value = displaySinglePrice;
              if (row.label === 'Mega Bundle Pricing') value = displayBundlePrice;
              if (row.label === 'Included Upgrades (OTOs)') {
                value = displayBundleContents || row.value;
              }
              if (row.label === 'Money-Back Guarantee') value = displayGuarantee;

              return (
                <div
                  key={row.label}
                  className="grid gap-1.5 py-3.5 first:pt-0 last:pb-0 sm:grid-cols-[210px_1fr] sm:gap-4"
                >
                  <div className="text-sm font-bold text-[#171421] dark:text-white">
                    {row.label}
                  </div>
                  <div className="text-sm text-[#666273] dark:text-[#B8B8C4]">{value}</div>
                </div>
              );
            })}
          </div>
        </div>

        <AffiliateCtaButton cta={CTA_PLACEMENTS.quickSummary} affiliateUrl={affiliateUrl} boxed />
      </section>

      {/* E. Product Introduction */}
      <section id="what-is-mapmatic-ai" className="scroll-anchor mt-12 mm-reveal">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171421] dark:text-white mb-4">
          What Is MapMatic AI?
        </h2>
        <div className="space-y-4 text-[16px] leading-[1.75] text-[#666273] dark:text-[#B8B8C4]">
          {INTRODUCTION_PARAGRAPHS.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <ProductVisualFrame
          placeholderKey="PRODUCT_SUITE_IMAGE"
          imageUrl={PLACEHOLDER_CONFIG.PRODUCT_SUITE_IMAGE}
          alt="Complete 6-Product MapMatic AI Ecosystem Boxes Lineup"
          caption="Complete MapMatic AI 6-Product Suite: MapMatic Unlimited, DFY AgencyVault + Sales Toolkit, MapMatic AI Front-End, Reputation Management App, Multichannel Sales Outreach, and Reseller License."
          affiliateUrl={affiliateUrl}
          variant="3d"
        />
      </section>

      {/* F. MapMatic AI Features */}
      <section id="mapmatic-ai-features" className="scroll-anchor mt-12">
        <div className="mm-reveal">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171421] dark:text-white mb-4">
            MapMatic AI Features: Core Capabilities Breakdown
          </h2>
          <p className="text-[16px] leading-[1.75] text-[#666273] dark:text-[#B8B8C4] mb-6">
            Understanding what an AI interactive map generator and local business discovery suite actually does inside its cloud dashboard helps you evaluate whether it fits your publishing or agency workflow. Below is the verified breakdown of all 8 core capability areas.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {FEATURE_GROUPS.map((feat) => {
            const Icon = FEATURE_ICONS[feat.iconName] || Sparkles;
            return (
              <div
                key={feat.id}
                id={feat.id}
                className="scroll-anchor mm-reveal rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7024E8]/10 dark:bg-[#7828FF]/20 text-[#7024E8] dark:text-[#A66BFF]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7024E8] dark:text-[#A66BFF]">
                    {feat.category}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-[#171421] dark:text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#666273] dark:text-[#B8B8C4] mb-3">
                  {feat.description}
                </p>
                <ul className="space-y-1.5 text-sm text-[#666273] dark:text-[#B8B8C4] list-disc pl-4">
                  {feat.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <ProductVisualFrame
          placeholderKey="PRODUCT_DASHBOARD_IMAGE"
          imageUrl={PLACEHOLDER_CONFIG.PRODUCT_DASHBOARD_IMAGE}
          alt="Front-End MapMatic AI ($67 Value) — Local Business Prospecting and AI-Powered Websites"
          caption="Front-End MapMatic AI ($67 Value Card · $49 Launch Price): Local Business Prospecting & Website Opportunity Discovery System."
          affiliateUrl={affiliateUrl}
          variant="dashboard"
        />

        <AffiliateCtaButton cta={CTA_PLACEMENTS.features} affiliateUrl={affiliateUrl} boxed />
        <AffiliateCtaButton cta={CTA_PLACEMENTS.productImage} affiliateUrl={affiliateUrl} boxed />
      </section>

      {/* Blogger Layout Slot: Adsterra Native Banner */}
      <div
        aria-label="Adsterra Native Banner Layout Slot"
        className="my-8 flex min-h-[110px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA]/70 dark:bg-[#191A20]/70 px-4 py-5 text-center"
      >
        <span className="font-mono-tabular text-[11px] font-semibold text-[#7024E8] dark:text-[#A66BFF]">
          Blogger Gadget Slot: HTML2 (Native Advertisement)
        </span>
        <span className="mt-0.5 font-display text-sm font-bold text-[#171421] dark:text-white">
          Adsterra Native Banner
        </span>
      </div>

      {/* G. MapMatic AI Mega Bundle Deal */}
      <section id="mapmatic-ai-mega-bundle" className="scroll-anchor mt-12">
        <div className="mm-reveal">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171421] dark:text-white mb-4">
            MapMatic AI Mega Bundle Deal – Complete Offer Breakdown
          </h2>

          <div className="mb-6 rounded-2xl border border-[#7024E8]/35 dark:border-[#7828FF]/45 bg-gradient-to-r from-[#7024E8] to-[#914CFF] px-6 py-4 text-center text-white shadow-sm">
            <div className="font-display text-base sm:text-lg font-extrabold tracking-tight">
              {BUNDLE_OFFER_TEXT.discountHeadline}
            </div>
            <p className="mt-1 text-xs sm:text-sm text-white/90">
              {BUNDLE_OFFER_TEXT.priceCompare}
            </p>
          </div>

          <div className="space-y-4 text-[16px] leading-[1.75] text-[#666273] dark:text-[#B8B8C4] mb-6">
            {BUNDLE_DEEP_DIVE_PARAGRAPHS.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="mb-6 rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] p-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#7024E8] dark:text-[#A66BFF]">
              {BUNDLE_OFFER_TEXT.megaHeadline}
            </div>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#666273] dark:text-[#B8B8C4]">
              {BUNDLE_OFFER_TEXT.megaSubheadline}
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {MEGA_BUNDLE_CARDS.map((card, idx) => (
            <div
              key={card.id}
              className="mm-reveal flex flex-col rounded-2xl border border-[#914CFF]/35 dark:border-[#A66BFF]/35 bg-gradient-to-b from-[#7024E8]/[0.08] via-white to-white dark:from-[#7828FF]/[0.18] dark:via-[#202129] dark:to-[#202129] p-5"
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#7024E8] dark:text-[#DCC8FF]">
                {card.badge}
              </div>
              <h3 className="mt-1 font-display text-lg font-bold text-[#171421] dark:text-white">
                {card.name}
              </h3>

              <ProductVisualFrame
                placeholderKey={card.id}
                imageUrl={card.imageUrl}
                alt={card.name}
                caption={card.badge}
                affiliateUrl={affiliateUrl}
                variant={idx === 1 ? 'bundle' : idx === 2 ? '3d' : 'dashboard'}
                compact
              />

              <p className="text-sm leading-relaxed text-[#666273] dark:text-[#B8B8C4] mb-3">
                {card.shortDescription}
              </p>

              <div className="text-xs font-bold text-[#171421] dark:text-white mb-1.5">
                Main Benefits
              </div>
              <ul className="space-y-1 text-xs text-[#666273] dark:text-[#B8B8C4] list-disc pl-4 mb-4">
                {card.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="mt-auto border-t border-[#E7E1EF] dark:border-[#34313E] pt-3 font-mono-tabular text-xs font-semibold text-[#7024E8] dark:text-[#DCC8FF]">
                {idx === 0
                  ? displaySinglePrice
                  : idx === 1
                    ? displayBundlePrice
                    : card.purchaseInfo}
              </div>
            </div>
          ))}
        </div>

        <AffiliateCtaButton cta={CTA_PLACEMENTS.megaBundle} affiliateUrl={affiliateUrl} boxed />
      </section>

      {/* H. MapMatic AI Pricing (3 Distinct Pricing Tables + Official Pricing Visuals) */}
      <section id="mapmatic-ai-pricing" className="scroll-anchor mt-12">
        <div className="mm-reveal">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171421] dark:text-white mb-4">
            MapMatic AI Pricing – Single Purchase vs Mega Bundle Deal
          </h2>
          <div className="space-y-4 text-[16px] leading-[1.75] text-[#666273] dark:text-[#B8B8C4] mb-6">
            {PRICING_GUIDE_PARAGRAPHS.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Pricing Table 1: Side-by-Side License Cards */}
        <h3 className="font-display text-lg font-bold text-[#171421] dark:text-white mb-3">
          Pricing Table 1: Front-End License ($49) vs. Mega Bundle Deal ($347)
        </h3>
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div className="mm-reveal flex flex-col rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] p-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#666273] dark:text-[#B8B8C4]">
              Front-End Option
            </div>
            <h4 className="mt-1 font-display text-xl font-bold text-[#171421] dark:text-white">
              {PRICING_COMPARISON.single.name}
            </h4>
            <div className="my-3 font-mono-tabular text-lg font-bold text-[#7024E8] dark:text-[#A66BFF]">
              {displaySinglePrice}
            </div>
            <p className="text-sm leading-relaxed text-[#666273] dark:text-[#B8B8C4] mb-4">
              {PRICING_COMPARISON.single.summary}
            </p>
            <ul className="space-y-2 text-sm text-[#171421] dark:text-[#E7E1EF] mb-4">
              {PRICING_COMPARISON.single.inclusions.map((inc, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#7024E8] dark:text-[#A66BFF]" aria-hidden="true" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-auto mb-4 text-xs text-[#666273] dark:text-[#B8B8C4]">
              <strong className="text-[#171421] dark:text-white">Consideration:</strong>{' '}
              {PRICING_COMPARISON.single.considerations}
            </p>
            <AffiliateCtaButton
              cta={CTA_PLACEMENTS.pricingSingle}
              affiliateUrl={affiliateUrl}
              fullWidth
            />
          </div>

          <div className="mm-reveal flex flex-col rounded-2xl border-2 border-[#7024E8] dark:border-[#7828FF] bg-gradient-to-b from-[#7024E8]/[0.07] via-white to-white dark:from-[#7828FF]/[0.16] dark:via-[#202129] dark:to-[#202129] p-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#7024E8] dark:text-[#DCC8FF]">
              Complete Bundle Package · Save $697 (60% Off)
            </div>
            <h4 className="mt-1 font-display text-xl font-bold text-[#171421] dark:text-white">
              {PRICING_COMPARISON.bundle.name}
            </h4>
            <div className="my-3 font-mono-tabular text-lg font-bold text-[#7024E8] dark:text-[#DCC8FF]">
              {displayBundlePrice}
            </div>
            <p className="text-sm leading-relaxed text-[#666273] dark:text-[#B8B8C4] mb-4">
              {PRICING_COMPARISON.bundle.summary}
            </p>
            <ul className="space-y-2 text-sm text-[#171421] dark:text-[#E7E1EF] mb-4">
              {PRICING_COMPARISON.bundle.inclusions.map((inc, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#7024E8] dark:text-[#A66BFF]" aria-hidden="true" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-auto mb-4 text-xs text-[#666273] dark:text-[#B8B8C4]">
              <strong className="text-[#171421] dark:text-white">Consideration:</strong>{' '}
              {PRICING_COMPARISON.bundle.considerations}
            </p>
            <AffiliateCtaButton
              cta={CTA_PLACEMENTS.pricingBundle}
              affiliateUrl={affiliateUrl}
              fullWidth
            />
          </div>
        </div>

        {/* Text-Based Official Offer Notice (Replaces Promotional Offer Card Images) */}
        <div className="mm-reveal mb-8 rounded-2xl border border-[#7024E8]/35 dark:border-[#7828FF]/45 bg-gradient-to-br from-[#7024E8]/[0.08] to-white dark:from-[#7828FF]/[0.16] dark:to-[#202129] p-6 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[#7024E8] dark:text-[#DCC8FF]">
            {BUNDLE_OFFER_TEXT.commercialNotice}
          </div>
          <div className="mt-2 font-display text-lg sm:text-xl font-extrabold text-[#171421] dark:text-white">
            {BUNDLE_OFFER_TEXT.priceCompare}
          </div>
          <p className="mt-2 text-xs sm:text-sm text-[#666273] dark:text-[#B8B8C4]">
            {BUNDLE_OFFER_TEXT.guaranteeNote}
          </p>
        </div>

        {/* Pricing Table 2: Official $1,134 Bundle Value Stack Breakdown (Full-Width) */}
        <h3 className="font-display text-lg font-bold text-[#171421] dark:text-white mb-3">
          Pricing Table 2: Official Bundle Value Stack Breakdown ($1,134 Core Value)
        </h3>
        <div className="mm-reveal overflow-x-auto rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] min-w-0 mb-8">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm" data-testid="pricing-table-value">
            <thead>
              <tr className="bg-gradient-to-r from-[#7024E8] to-[#914CFF] text-white font-display">
                <th className="p-4 font-bold">Product Module</th>
                <th className="p-4 font-bold text-right">Listed Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7E1EF] dark:divide-[#34313E] text-[#666273] dark:text-[#B8B8C4]">
              {BUNDLE_VALUE_TABLE.map((item) => (
                <tr key={item.product}>
                  <td className="p-4 align-top">
                    <div className="font-bold text-[#171421] dark:text-white">{item.product}</div>
                    <div className="text-xs text-[#666273] dark:text-[#B8B8C4] mt-0.5">{item.cardNote}</div>
                  </td>
                  <td className="p-4 font-mono-tabular font-bold text-[#171421] dark:text-white text-right align-top">
                    {item.value}
                  </td>
                </tr>
              ))}
              <tr className="bg-[#F6F4FA] dark:bg-[#191A20]">
                <td className="p-4 font-display font-extrabold text-[#7024E8] dark:text-[#DCC8FF]">
                  TOTAL SOFTWARE VALUE (+ $994 in Fast-Action Bonuses)
                </td>
                <td className="p-4 font-mono-tabular font-extrabold text-[#7024E8] dark:text-[#DCC8FF] text-right">
                  $1,134
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <AffiliateCtaButton cta={CTA_PLACEMENTS.valueTableCta} affiliateUrl={affiliateUrl} boxed />

        {/* Pricing Table 3: Tier-by-Tier Comparison Matrix */}
        <h3 className="font-display text-lg font-bold text-[#171421] dark:text-white mt-8 mb-3">
          Pricing Table 3: Front-End vs. Individual OTOs vs. Mega Bundle Cost Matrix
        </h3>
        <div className="mm-reveal overflow-x-auto rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] min-w-0">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm" data-testid="pricing-table-matrix">
            <thead>
              <tr className="bg-[#F6F4FA] dark:bg-[#191A20] text-[#171421] dark:text-white font-display">
                <th className="p-3.5 font-bold border-b border-[#E7E1EF] dark:border-[#34313E]">
                  Capability / Module
                </th>
                <th className="p-3.5 font-bold border-b border-[#E7E1EF] dark:border-[#34313E]">
                  Front-End ($49)
                </th>
                <th className="p-3.5 font-bold border-b border-[#E7E1EF] dark:border-[#34313E]">
                  Individual OTOs
                </th>
                <th className="p-3.5 font-bold border-b border-[#E7E1EF] dark:border-[#34313E] text-[#7024E8] dark:text-[#DCC8FF]">
                  Mega Bundle ($347)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7E1EF] dark:divide-[#34313E] text-[#666273] dark:text-[#B8B8C4]">
              {TIER_COMPARISON_TABLE.map((row) => (
                <tr key={row.feature}>
                  <td className="p-3.5 font-semibold text-[#171421] dark:text-white align-top">
                    {row.feature}
                  </td>
                  <td className="p-3.5 align-top">{row.frontEnd}</td>
                  <td className="p-3.5 align-top">{row.individualOtos}</td>
                  <td className="p-3.5 font-semibold text-[#7024E8] dark:text-[#DCC8FF] align-top">
                    {row.megaBundle}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* I. Money-Back Guarantee */}
      <section id={GUARANTEE_SECTION.id} className="scroll-anchor mt-12 mm-reveal">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171421] dark:text-white mb-4">
          {GUARANTEE_SECTION.heading}
        </h2>
        <div className="rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] p-6">
          <div className="mb-4 flex flex-wrap items-center gap-3 rounded-xl bg-[#F6F4FA] dark:bg-[#191A20] px-4 py-3">
            <ShieldCheck className="h-5 w-5 text-[#7024E8] dark:text-[#A66BFF]" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#666273] dark:text-[#B8B8C4]">
              Verified Refund Coverage:
            </span>
            <span className="font-mono-tabular text-sm font-bold text-[#171421] dark:text-white break-words max-w-full">
              {displayGuarantee}
            </span>
          </div>
          <div className="space-y-4 text-[16px] leading-[1.75] text-[#666273] dark:text-[#B8B8C4]">
            {GUARANTEE_SECTION.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
          <div className="mt-5">
            <AffiliateCtaButton cta={CTA_PLACEMENTS.guaranteeCta} affiliateUrl={affiliateUrl} boxed />
          </div>
        </div>
      </section>

      {/* J. Features and Bonuses */}
      <section id="mapmatic-ai-bonuses" className="scroll-anchor mt-12">
        <div className="mm-reveal">
          <div className="text-xs font-bold uppercase tracking-wider text-[#7024E8] dark:text-[#A66BFF] mb-2">
            EXCLUSIVE BONUSES For The Fast Action Taker
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171421] dark:text-white mb-4">
            MapMatic AI Features and Bonus Breakdown ($994 Bonus Value)
          </h2>
          <p className="text-[16px] leading-[1.75] text-[#666273] dark:text-[#B8B8C4] mb-6">
            Fast-action buyers grabbing the MapMatic Mega Bundle receive two standalone software bonuses valued at $497 each ($994 combined): ADA Suite for website accessibility services and MobiCentric for client iOS &amp; Android app creation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {BONUS_ITEMS.map((bonus) => (
            <div
              key={bonus.id}
              className="mm-reveal flex flex-col rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] p-6"
            >
              <ProductVisualFrame
                placeholderKey={bonus.id}
                imageUrl={bonus.imageUrl}
                alt={bonus.title}
                caption={bonus.title}
                affiliateUrl={affiliateUrl}
                variant="bonus"
                compact
              />
              <div className="text-xs font-bold uppercase tracking-wider text-[#7024E8] dark:text-[#A66BFF]">
                {bonus.valueLabel}
              </div>
              <h3 className="mt-1 font-display text-lg font-bold text-[#171421] dark:text-white mb-1.5">
                {bonus.title}
              </h3>
              <p className="text-sm font-semibold text-[#171421]/85 dark:text-[#E7E1EF] mb-2">
                {bonus.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-[#666273] dark:text-[#B8B8C4] mb-3">
                {bonus.description}
              </p>
              <ul className="space-y-1.5 text-sm text-[#666273] dark:text-[#B8B8C4] list-disc pl-4 mb-4">
                {bonus.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="mt-auto border-t border-[#E7E1EF] dark:border-[#34313E] pt-3 font-mono-tabular text-xs font-semibold text-[#7024E8] dark:text-[#A66BFF]">
                {bonus.inclusionStatus}
              </div>
            </div>
          ))}
        </div>

        <AffiliateCtaButton cta={CTA_PLACEMENTS.bonus} affiliateUrl={affiliateUrl} boxed />
      </section>

      {/* K. How to Use MapMatic AI */}
      <section id="how-to-use-mapmatic-ai" className="scroll-anchor mt-12">
        <div className="mm-reveal">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171421] dark:text-white mb-4">
            How to Use MapMatic AI: Step-by-Step Beginner Workflow
          </h2>
          <p className="text-[16px] leading-[1.75] text-[#666273] dark:text-[#B8B8C4] mb-6">
            If you are wondering how to use MapMatic AI from day one, the eight-step roadmap below covers everything from JVZoo checkout and dashboard login to local Google Maps discovery, AI website creation, and multichannel outreach.
          </p>
        </div>

        <div className="space-y-4">
          {TUTORIAL_STEPS.map((s) => (
            <div
              key={s.step}
              className="mm-reveal grid gap-4 rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] p-5 sm:grid-cols-[96px_1fr] sm:items-start"
            >
              <div className="font-mono-tabular rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#191A20] px-3 py-2 text-center text-xs font-bold text-[#7024E8] dark:text-[#A66BFF]">
                Step 0{s.step}
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#7024E8] dark:text-[#A66BFF]">
                  {s.type}
                </div>
                <h3 className="mt-1 font-display text-lg font-bold text-[#171421] dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#666273] dark:text-[#B8B8C4]">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <AffiliateCtaButton cta={CTA_PLACEMENTS.tutorial} affiliateUrl={affiliateUrl} boxed />
      </section>

      {/* L. Individual Product and Upgrade Analysis (Front-End + Upgrades #1–#5) */}
      <section id="individual-upgrade-analysis" className="scroll-anchor mt-12">
        <div className="mm-reveal">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171421] dark:text-white mb-4">
            Individual Product &amp; Upgrade Analysis (Front-End + Upgrades #1–#5)
          </h2>
          <p className="text-[16px] leading-[1.75] text-[#666273] dark:text-[#B8B8C4] mb-6">
            Here is a module-by-module inspection of the MapMatic AI Front-End ($49) and all five official OTO upgrades unlocked inside the $347 MapMatic Mega Bundle Deal.
          </p>
        </div>

        <div className="space-y-5">
          {UPGRADE_ANALYSIS_ITEMS.map((item) => (
            <div
              key={item.id}
              className="mm-reveal grid gap-6 rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] p-6 md:grid-cols-[270px_1fr] min-w-0"
            >
              <ProductVisualFrame
                placeholderKey={item.id}
                imageUrl={item.imageUrl}
                alt={item.imageAlt}
                caption={item.tierLabel}
                affiliateUrl={affiliateUrl}
                variant="bundle"
                compact
              />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#7024E8] dark:text-[#A66BFF]">
                  {item.tierLabel}
                </div>
                <h3 className="mt-1 font-display text-xl font-bold text-[#171421] dark:text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-[#171421]/85 dark:text-[#E7E1EF] mb-3">
                  {item.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-[#666273] dark:text-[#B8B8C4] mb-2">
                  <strong className="text-[#171421] dark:text-white">What It Offers:</strong>{' '}
                  {item.whatItOffers}
                </p>
                <p className="text-sm leading-relaxed text-[#666273] dark:text-[#B8B8C4] mb-2">
                  <strong className="text-[#171421] dark:text-white">Intended Users:</strong>{' '}
                  {item.intendedUsers}
                </p>
                <p className="text-sm leading-relaxed text-[#666273] dark:text-[#B8B8C4] mb-3">
                  <strong className="text-[#171421] dark:text-white">Relationship to Main Product:</strong>{' '}
                  {item.relationToMain}
                </p>
                <ul className="space-y-1 text-sm text-[#666273] dark:text-[#B8B8C4] list-disc pl-4 mb-4">
                  {item.mainFunctions.map((fn, i) => (
                    <li key={i}>{fn}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4 border-t border-[#E7E1EF] dark:border-[#34313E] pt-3 text-xs text-[#666273] dark:text-[#B8B8C4]">
                  <span>
                    <strong className="text-[#171421] dark:text-white">Mega Bundle Status:</strong>{' '}
                    {item.includedInBundle}
                  </span>
                  <span className="font-mono-tabular">
                    <strong className="text-[#171421] dark:text-white">Value / Price:</strong>{' '}
                    {item.priceField}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* M. Competitor and Alternative Comparison */}
      <section id={COMPETITOR_SECTIONS.id} className="scroll-anchor mt-12">
        <div className="mm-reveal">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171421] dark:text-white mb-4">
            {COMPETITOR_SECTIONS.heading}
          </h2>
          {COMPETITOR_SECTIONS.paragraphs.map((p, idx) => (
            <p key={idx} className="text-[16px] leading-[1.75] text-[#666273] dark:text-[#B8B8C4] mb-4">
              {p}
            </p>
          ))}
        </div>

        <div className="mm-reveal my-6 overflow-x-auto rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] min-w-0">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#F6F4FA] dark:bg-[#191A20] text-[#171421] dark:text-white font-display">
                <th className="p-4 font-bold border-b border-[#E7E1EF] dark:border-[#34313E]">
                  Comparison Criterion
                </th>
                <th className="p-4 font-bold border-b border-[#E7E1EF] dark:border-[#34313E]">
                  MapMatic AI
                </th>
                <th className="p-4 font-bold border-b border-[#E7E1EF] dark:border-[#34313E]">
                  Mapbox (Developer SDK)
                </th>
                <th className="p-4 font-bold border-b border-[#E7E1EF] dark:border-[#34313E]">
                  Free AI Map Maker Tools
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7E1EF] dark:divide-[#34313E] text-[#666273] dark:text-[#B8B8C4]">
              {COMPARISON_TABLE_ROWS.map((row) => (
                <tr key={row.criterion}>
                  <td className="p-4 font-bold text-[#171421] dark:text-white align-top">
                    {row.criterion}
                  </td>
                  <td className="p-4 align-top">{row.mapmatic}</td>
                  <td className="p-4 align-top">{row.mapbox}</td>
                  <td className="p-4 align-top">{row.freeTools}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-8 mt-8">
          {(COMPETITOR_SECTIONS.subheadings ?? []).map((sub) => (
            <div key={sub.id} id={sub.id} className="scroll-anchor mm-reveal">
              <h3 className="font-display text-xl font-bold text-[#171421] dark:text-white mb-3">
                {sub.heading}
              </h3>
              <div className="space-y-3 text-[16px] leading-[1.75] text-[#666273] dark:text-[#B8B8C4]">
                {sub.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <AffiliateCtaButton cta={CTA_PLACEMENTS.comparison} affiliateUrl={affiliateUrl} boxed />
      </section>

      {/* N. Who Should Use MapMatic AI? */}
      <section id="who-should-use-mapmatic-ai" className="scroll-anchor mt-12">
        <div className="mm-reveal">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171421] dark:text-white mb-4">
            Who Should Use MapMatic AI?
          </h2>
          <p className="text-[16px] leading-[1.75] text-[#666273] dark:text-[#B8B8C4] mb-6">
            Interactive geographical content and local Google Maps lead discovery serve a wide range of digital creators and agencies. Here is how ten user groups apply MapMatic AI realistically.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {TARGET_AUDIENCES.map((aud) => (
            <div
              key={aud.role}
              className="mm-reveal rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] p-5"
            >
              <h3 className="font-display text-base font-bold text-[#171421] dark:text-white mb-1.5">
                {aud.role}
              </h3>
              <p className="text-sm leading-relaxed text-[#666273] dark:text-[#B8B8C4]">
                {aud.useCase}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* O. Advantages and Disadvantages */}
      <section id="pros-and-cons" className="scroll-anchor mt-12 mm-reveal">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171421] dark:text-white mb-4">
          MapMatic AI Advantages and Disadvantages
        </h2>
        <p className="text-[16px] leading-[1.75] text-[#666273] dark:text-[#B8B8C4] mb-6">
          No software is ideal for every project. Weighing both verified strengths and practical limitations helps you decide with confidence.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] p-6">
            <h3 className="font-display text-lg font-bold text-[#171421] dark:text-white mb-4">
              Verified Advantages
            </h3>
            <ul className="space-y-2.5 text-sm text-[#666273] dark:text-[#B8B8C4]">
              {ADVANTAGES_LIST.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#7024E8] dark:text-[#A66BFF]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] p-6">
            <h3 className="font-display text-lg font-bold text-[#171421] dark:text-white mb-4">
              Limitations &amp; Considerations
            </h3>
            <ul className="space-y-2.5 text-sm text-[#666273] dark:text-[#B8B8C4] list-disc pl-4">
              {DISADVANTAGES_LIST.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pre-FAQ Bundle Offer Callout */}
      <div className="mm-reveal mt-10 rounded-2xl border border-[#7024E8]/35 dark:border-[#7828FF]/45 bg-[#F6F4FA] dark:bg-[#191A20] p-6 text-center">
        <div className="text-xs font-bold uppercase tracking-wider text-[#7024E8] dark:text-[#DCC8FF]">
          {BUNDLE_OFFER_TEXT.commercialNotice}
        </div>
        <div className="mt-1.5 font-display text-lg font-bold text-[#171421] dark:text-white">
          {BUNDLE_OFFER_TEXT.priceCompare}
        </div>
        <p className="mt-1 text-xs text-[#666273] dark:text-[#B8B8C4]">
          {BUNDLE_OFFER_TEXT.guaranteeNote}
        </p>
      </div>
      <AffiliateCtaButton cta={CTA_PLACEMENTS.preFaq} affiliateUrl={affiliateUrl} boxed />

      {/* 22+ FAQ Accordion */}
      <section id="mapmatic-ai-faq" className="scroll-anchor mt-12 mm-reveal">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171421] dark:text-white mb-3">
          Frequently Asked Questions About MapMatic AI (22 Answers)
        </h2>
        <p className="text-[16px] leading-[1.75] text-[#666273] dark:text-[#B8B8C4] mb-6">
          Below are detailed answers to the most common buyer questions about MapMatic AI pricing ($49 Front-End vs. $347 Mega Bundle), all 5 OTO upgrades, ADA Suite and MobiCentric bonuses, alternatives, and the 30-day guarantee.
        </p>
        <FaqAccordion />
      </section>

      {/* P. Final Verdict */}
      <section id="final-verdict" className="scroll-anchor mt-12 mm-reveal">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171421] dark:text-white mb-4">
          Is MapMatic AI Worth It in 2026? Final Verdict
        </h2>
        <div className="space-y-4 text-[16px] leading-[1.75] text-[#666273] dark:text-[#B8B8C4]">
          {FINAL_VERDICT_PARAGRAPHS.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
        <AffiliateCtaButton cta={CTA_PLACEMENTS.finalVerdict} affiliateUrl={affiliateUrl} boxed />
      </section>
    </article>
  );
}

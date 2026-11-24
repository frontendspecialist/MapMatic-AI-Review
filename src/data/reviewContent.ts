export interface CtaConfig {
  id: string;
  label: string;
  subtext?: string;
  placement: string;
  variant: 'primary' | 'secondary' | 'outline';
}

export interface FeatureItem {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface UpgradeItem {
  id: string;
  tierLabel: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  whatItOffers: string;
  mainFunctions: string[];
  keyBenefits: string[];
  intendedUsers: string;
  relationToMain: string;
  includedInBundle: string;
  priceField: string;
}

export interface BonusItem {
  id: string;
  title: string;
  subtitle: string;
  valueLabel: string;
  imageUrl: string;
  description: string;
  benefits: string[];
  inclusionStatus: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ComparisonRow {
  criterion: string;
  mapmatic: string;
  mapbox: string;
  freeTools: string;
}

export interface BundleValueRow {
  product: string;
  cardNote: string;
  value: string;
}

export const PLACEHOLDER_CONFIG = {
  AFFILIATE_URL: '[INSERT YOUR MAPMATIC AI AFFILIATE LINK]',
  SINGLE_PRICE: '$49 One-Time (Front-End License)',
  BUNDLE_PRICE: '$347 Low One-Time Fee (Normal: $997 · Save $697)',
  GUARANTEE_PERIOD: '30-Day 100% Money-Back Guarantee (No Risk · JVZoo)',
  BUNDLE_CONTENTS:
    'MapMatic AI Front-End + Upgrade #1 Unlimited + Upgrade #2 AgencyVault + Upgrade #3 Reputation AI + Upgrade #4 Multichannel AI Sales Employee + Upgrade #5 Reseller License + ADA Suite ($497) + MobiCentric ($497)',
  FEATURED_IMAGE: '/assets/aistudio/image_fc1ead36.png',
  PRODUCT_MAIN_IMAGE: '/assets/aistudio/image_fc1ead36.png',
  PRODUCT_SUITE_IMAGE: '/assets/aistudio/image_08402075.png',
  PRODUCT_DASHBOARD_IMAGE: '/assets/products/frontend-mapmatic.png',
  MEGA_BUNDLE_IMAGE: '/assets/aistudio/image_fc1ead36.png',
  UPGRADE_1_IMAGE: '/assets/products/upgrade1-unlimited.png',
  UPGRADE_2_IMAGE: '/assets/products/upgrade2-agencyvault.png',
  UPGRADE_3_IMAGE: '/assets/products/upgrade3-reputation.png',
  UPGRADE_4_IMAGE: '/assets/products/upgrade4-outreach.png',
  UPGRADE_5_IMAGE: '/assets/products/upgrade5-reseller.png',
  BONUS_1_IMAGE: '/assets/products/bonus1-ada-suite.png',
  BONUS_2_IMAGE: '/assets/products/bonus2-mobicentric.png',
} as const;

export const BUNDLE_OFFER_TEXT = {
  discountHeadline: 'Exclusive Bundle Deal — Get The Upgrades & Bonuses At A Hugely Discounted Price (SAVE $697)',
  megaHeadline: 'MapMatic Mega Bundle Deal: Limited-Time 60% Discount',
  megaSubheadline:
    'Discover local businesses that need websites, turn them into paying clients, build a professional web design agency, add recurring revenue services, and even start your own software reselling business.',
  commercialNotice: 'FREE Commercial License Included ONLY When You Act Now!',
  priceCompare: 'Normal Price: $997 · Current Price: $347 Low One-Time Fee (Total Stack Value: $1,134 + $994 Bonuses)',
  guaranteeNote: 'No Risk · 30-Day 100% Money-Back Guarantee · Advanced Secure Checkout via JVZoo (PayPal, Visa, Mastercard, Discover)',
} as const;

export const CTA_PLACEMENTS: Record<string, CtaConfig> = {
  heroPrimary: {
    id: 'cta-hero-primary',
    label: 'Get Instant Access to MapMatic AI',
    subtext: 'Opens the official MapMatic AI page · 30-Day Money-Back Guarantee',
    placement: 'Hero Section',
    variant: 'primary',
  },
  heroSecondary: {
    id: 'cta-hero-secondary',
    label: 'Get MapMatic Bundle Deal ($347 One-Time)',
    placement: 'Hero Secondary',
    variant: 'secondary',
  },
  featuredBanner: {
    id: 'cta-featured-banner',
    label: 'Claim MapMatic AI + Free Commercial License',
    subtext: 'Verified JVZoo Launch Offer · Instant Cloud Access',
    placement: 'Featured Image Showcase',
    variant: 'primary',
  },
  quickSummary: {
    id: 'cta-quick-summary',
    label: 'Check the Current MapMatic AI Offer',
    subtext: 'Compare $49 Front-End vs. $347 Mega Bundle Deal on the official page',
    placement: 'Quick Review Summary',
    variant: 'primary',
  },
  features: {
    id: 'cta-features',
    label: 'Explore MapMatic AI Features Live',
    subtext: 'See Google Maps business discovery, AI websites, and outreach in action',
    placement: 'Features Section',
    variant: 'primary',
  },
  productImage: {
    id: 'cta-product-image',
    label: 'View the Official Product Suite',
    subtext: 'Inspect the complete 6-product MapMatic AI lineup',
    placement: 'Product Suite Frame',
    variant: 'secondary',
  },
  megaBundle: {
    id: 'cta-mega-bundle',
    label: 'Unlock the MapMatic AI Mega Bundle (Save $697)',
    subtext: 'Includes Front-End + All 5 Upgrades + ADA Suite + MobiCentric Bonuses',
    placement: 'Mega Bundle Section',
    variant: 'primary',
  },
  pricingSingle: {
    id: 'cta-pricing-single',
    label: 'Get Front-End License ($49)',
    placement: 'Single Purchase Card',
    variant: 'secondary',
  },
  pricingBundle: {
    id: 'cta-pricing-bundle',
    label: 'Get MapMatic Bundle Deal For $347 One-Time',
    placement: 'Mega Bundle Pricing Card',
    variant: 'primary',
  },
  valueTableCta: {
    id: 'cta-value-table',
    label: 'Lock In $1,134+ Value Stack For $347 One-Time',
    subtext: '60% Bundle Discount · No Monthly Fees During Launch',
    placement: 'Bundle Value Breakdown Table',
    variant: 'primary',
  },
  guaranteeCta: {
    id: 'cta-guarantee',
    label: 'Try MapMatic AI Risk-Free For 30 Days',
    subtext: 'Protected by the official 30-Day 100% Money-Back Guarantee',
    placement: 'Money-Back Guarantee Section',
    variant: 'secondary',
  },
  bonus: {
    id: 'cta-bonus',
    label: 'Claim ADA Suite & MobiCentric Bonuses ($994 Value)',
    subtext: 'Included for fast-action buyers on the official bundle page',
    placement: 'Bonus Section',
    variant: 'primary',
  },
  tutorial: {
    id: 'cta-tutorial',
    label: 'Get Started with MapMatic AI Today',
    subtext: 'Follow the 8-step setup right after checkout',
    placement: 'How-to-Use Tutorial',
    variant: 'primary',
  },
  comparison: {
    id: 'cta-comparison',
    label: 'Explore the Official MapMatic AI Deal',
    subtext: 'Compare Front-End ($49) vs. Mega Bundle ($347) directly on JVZoo',
    placement: 'Competitor Comparison',
    variant: 'primary',
  },
  preFaq: {
    id: 'cta-pre-faq',
    label: 'Discover the Complete Mega Bundle ($347)',
    subtext: 'Review all 5 upgrades & 2 fast-action bonuses before the FAQ',
    placement: 'Pre-FAQ Callout',
    variant: 'secondary',
  },
  finalVerdict: {
    id: 'cta-final-verdict',
    label: 'Get MapMatic AI Now — 30-Day Money-Back Guarantee',
    subtext: 'Official JVZoo Checkout · Instant Access to MapMatic AI',
    placement: 'Final Verdict',
    variant: 'primary',
  },
};

export const HERO_DATA = {
  kicker: 'AI Mapping & Local Agency Software · 2026 Buyer Guide · Verified Specs',
  h1: 'MapMatic AI Review 2026: Features, Pricing, Mega Bundle Deal & Bonuses Explained',
  supportingHeadline:
    'Discover how MapMatic AI helps users create interactive maps, discover local businesses on Google Maps, build AI-powered local websites, and launch recurring agency services.',
  introParagraph:
    'In this comprehensive MapMatic AI Review, we break down the complete MapMatic AI software suite using the verified product, upgrade, bonus, and pricing details from the official release. MapMatic AI combines an AI interactive map generator and local business prospecting engine with AI website creation, review management, and multichannel client outreach. Below, you will find a transparent breakdown of the $49 Front-End license, every tier in the $347 MapMatic AI bundle deal (normal price $997, total value $1,134+), the two fast-action bonuses worth $994 combined (ADA Suite and MobiCentric), and the 30-day money-back guarantee.',
  keyBenefits: [
    'AI-powered local business prospecting on Google Maps and instant website opportunity discovery',
    'AI-generated local business websites and interactive geographical map showcases built for conversion',
    'Complete agency ecosystem across 5 upgrades: Unlimited, AgencyVault, Reputation AI, Multichannel AI Sales Employee, and Reseller License',
    'Protected by a 30-Day 100% Money-Back Guarantee via JVZoo with a Free Commercial License on qualifying action',
  ],
  disclosureText:
    'Affiliate Disclosure: This MapMatic AI Review contains affiliate links. If you purchase MapMatic AI or the Mega Bundle Deal through links on this page, we may earn a commission at no extra cost to you. All pricing ($49 Front-End, $347 Mega Bundle), upgrade values ($1,134 total stack), bonuses, and the 30-day refund policy reflect the official product materials provided—always confirm live checkout details on JVZoo before completing payment.',
};

export const QUICK_SUMMARY_ROWS = [
  { label: 'Product Name', value: 'MapMatic AI (Front-End & MapMatic Mega Bundle)' },
  {
    label: 'Product Category',
    value: 'AI Interactive Map Generator, Google Maps Prospecting & Local Business Growth Suite',
  },
  {
    label: 'Main Purpose',
    value:
      'Discover local businesses on Google Maps that need websites, create AI-powered websites & interactive map experiences, manage client reviews, and automate multichannel outreach',
  },
  {
    label: 'Key Features',
    value:
      'Local Map Search, AI Website Creation, Interactive Map Pin Trails, Review Management (Reputation AI), Multichannel Outreach, Agency Toolkit, and Reseller Commercial Rights',
  },
  {
    label: 'Front-End Pricing',
    value: '$49 One-Time License ($67 Value Card · Local Business Prospecting & Website Discovery)',
  },
  {
    label: 'Mega Bundle Pricing',
    value: '$347 Low One-Time Fee (Normal Price: $997 · Save $697 / 60% Discount · Total Stack Value: $1,134)',
  },
  {
    label: 'Included Upgrades (OTOs)',
    value:
      'Upgrade #1: MapMatic Unlimited ($97) · Upgrade #2: AgencyVault ($297) · Upgrade #3: Reputation AI ($97) · Upgrade #4: Multichannel AI Sales Employee ($297) · Upgrade #5: Reseller License ($297)',
  },
  {
    label: 'Fast-Action Bonuses',
    value: 'Bonus #1: ADA Suite (Worth $497) + Bonus #2: MobiCentric iOS & Android App Builder (Worth $497)',
  },
  {
    label: 'Money-Back Guarantee',
    value: 'No Risk · 30-Day 100% Money-Back Guarantee (Advanced Secure Checkout via JVZoo)',
  },
  {
    label: 'Recommended Users',
    value:
      'Digital marketers, local SEO agencies, website owners, freelancers, entrepreneurs, bloggers, and software resellers',
  },
];

export const BUNDLE_VALUE_TABLE: BundleValueRow[] = [
  {
    product: 'MapMatic Front-End License',
    cardNote: 'Local Business Prospecting & Website Opportunity Discovery System ($67 Value Card)',
    value: '$49',
  },
  {
    product: 'Upgrade #1: MapMatic Unlimited',
    cardNote: 'Unlimited access, limitless map pin trails & unrestricted business growth',
    value: '$97',
  },
  {
    product: 'Upgrade #2: AgencyVault (DFY AgencyVault + Sales Toolkit)',
    cardNote: 'Done-for-you agency assets, white-label branding, client reporting & sales toolkit ($197–$297 Value)',
    value: '$297',
  },
  {
    product: 'Upgrade #3: MapMatic Reputation AI',
    cardNote: 'Build, manage, respond & improve local business reviews for monthly recurring revenue',
    value: '$97',
  },
  {
    product: 'Upgrade #4: Multichannel AI Sales Employee',
    cardNote: 'Email, phone, chat & social outreach with automated follow-ups ($97–$297 Value)',
    value: '$297',
  },
  {
    product: 'Upgrade #5: MapMatic Reseller License',
    cardNote: 'Create & sell MapMatic accounts to clients under your own brand with commercial rights',
    value: '$297',
  },
];

export const TIER_COMPARISON_TABLE = [
  {
    feature: 'Core AI Map Search & Local Website Discovery',
    frontEnd: 'Included',
    individualOtos: 'Included',
    megaBundle: 'Included',
  },
  {
    feature: 'Unlimited Searches & Limitless Map Pin Trails',
    frontEnd: 'Standard Limits',
    individualOtos: '+$97 (Upgrade #1)',
    megaBundle: 'Included',
  },
  {
    feature: 'DFY AgencyVault & Sales Toolkit',
    frontEnd: 'Not Included',
    individualOtos: '+$197–$297 (Upgrade #2)',
    megaBundle: 'Included',
  },
  {
    feature: 'Reputation Management AI App',
    frontEnd: 'Not Included',
    individualOtos: '+$97 (Upgrade #3)',
    megaBundle: 'Included',
  },
  {
    feature: 'Multichannel AI Sales Outreach Employee',
    frontEnd: 'Not Included',
    individualOtos: '+$97–$297 (Upgrade #4)',
    megaBundle: 'Included',
  },
  {
    feature: 'Full MapMatic Reseller License',
    frontEnd: 'Not Included',
    individualOtos: '+$297 (Upgrade #5)',
    megaBundle: 'Included',
  },
  {
    feature: 'Bonus #1: ADA Suite ($497 Value) + Bonus #2: MobiCentric ($497 Value)',
    frontEnd: 'Verify at Checkout',
    individualOtos: 'Separate Upsells',
    megaBundle: 'Included Free (Fast Action)',
  },
  {
    feature: 'Total Checkout Cost',
    frontEnd: '$49 One-Time',
    individualOtos: 'Up to $1,134 Combined',
    megaBundle: '$347 One-Time (Save $697)',
  },
];

export const INTRODUCTION_PARAGRAPHS = [
  'If you have ever tried to build a clean, interactive geographical map for a website—or prospect local businesses on Google Maps that urgently need modern web design—you already know how fragmented the workflow usually is. Standard embed snippets look generic, developer SDKs like Mapbox require API tokens and JavaScript engineering, and manual cold prospecting across spreadsheets takes dozens of hours per week.',
  'So, what is MapMatic AI? Based on the official MapMatic AI product architecture, MapMatic AI is an AI-powered local business growth and interactive mapping platform designed to discover businesses on Google Maps, identify website and visibility opportunities, create high-converting local business websites, and build interactive geographical map experiences without coding.',
  'In this MapMatic AI Review, we examine both sides of the platform: first, how everyday website owners, bloggers, and creators can use it as an AI interactive map generator and AI custom map creator for website projects; and second, how freelancers and agencies use the full MapMatic Mega Bundle suite—combining MapMatic Unlimited, AgencyVault, Reputation AI, Multichannel AI Sales Employee, and the Reseller License—to turn local map leads into recurring clients.',
  'Because software launches pair a $49 Front-End license with five distinct upgrades totaling $1,134 in retail stack value, knowing what each module actually delivers prevents overspending. Below, we break down every verified feature card, every upgrade box, both fast-action bonuses (ADA Suite and MobiCentric), and the exact pricing math behind the $347 Mega Bundle Deal.',
];

export const FEATURE_GROUPS: FeatureItem[] = [
  {
    id: 'feat-ai-creation',
    title: 'AI-Powered Local Map Search & Discovery',
    category: 'Core Generation Engine',
    description:
      'MapMatic AI starts with guided local map search and opportunity discovery. Users pinpoint niches and cities on interactive map grids to uncover businesses that lack modern websites, weak Google Maps visibility, or low review velocity.',
    details: [
      'Scans local geographical areas to highlight businesses with immediate website or visibility gaps.',
      'Eliminates manual spreadsheet scraping when researching regional directories or local prospects.',
      'Designed for solo creators and marketers without GIS engineering or developer backgrounds.',
    ],
    iconName: 'Sparkles',
  },
  {
    id: 'feat-interactive-geo',
    title: 'Interactive Geographical Mapping & Pin Trails',
    category: 'User Engagement',
    description:
      'Static map PNGs force visitors to squint or leave your page. As an AI interactive map generator, MapMatic AI showcases clickable map pin trails, business preview cards, and interactive inspection layers.',
    details: [
      'Displays clickable local markers with business cards, ratings, distance cues, and action buttons.',
      'Upgrade #1 (MapMatic Unlimited) unlocks limitless map pin trails for multi-city or large-scale projects.',
      'Keeps geographical exploration self-contained inside your web experience.',
    ],
    iconName: 'MapPin',
  },
  {
    id: 'feat-custom-creation',
    title: 'AI-Powered Local Business Website Creation',
    category: 'Tailored Web Assets',
    description:
      'Beyond mapping locations, MapMatic AI generates ready-to-present local business websites engineered to get businesses found on Google Maps and convert local visitors into calls and bookings.',
    details: [
      'Turns discovered map listings into tailored website previews (such as auto repair, plumbing, or retail storefronts).',
      'Supports custom headlines, service callouts, click-to-call buttons, and Google Maps visibility optimization.',
      'Lets agencies present a working live preview before pitching a prospect.',
    ],
    iconName: 'Compass',
  },
  {
    id: 'feat-design-viz',
    title: 'Business Growth Dashboard & Analytics',
    category: 'Visual Presentation',
    description:
      'Inside the MapMatic cloud workspace, users track map views, website visits, new reviews, and generated leads across campaigns in one unified interface.',
    details: [
      'Centralizes Map Views, Website Visits, New Reviews, and Leads into clean visual trend graphs.',
      'Supports dark-mode and light-mode presentation clarity for client reporting.',
      'Includes white-label client reporting tools inside the AgencyVault module.',
    ],
    iconName: 'Palette',
  },
  {
    id: 'feat-website-apps',
    title: 'Website Mapping & Directory Applications',
    category: 'Web Publishing',
    description:
      'For bloggers, agencies, and small business owners, MapMatic AI works as an AI custom map creator for website service pages, local business directories, and niche showcase portals.',
    details: [
      'Ideal for local directory portals, multi-location store locators, and regional lead-gen hubs.',
      'Pair client websites with accessibility (ADA Suite Bonus) and mobile apps (MobiCentric Bonus).',
      'Free Commercial License included on qualifying bundle checkout for client delivery.',
    ],
    iconName: 'Globe',
  },
  {
    id: 'feat-3d-capabilities',
    title: 'Visual 3D Perspectives & Reputation AI',
    category: 'Spatial & Recurring Value',
    description:
      'Creators looking to create 3D maps with AI and visual spatial layers—or monetize ongoing client trust—can pair visual map pin presentations with MapMatic Reputation AI.',
    details: [
      'Visualizes multi-pin regional trails and spatial business clusters clearly for presentations.',
      'MapMatic Reputation AI (Upgrade #3) helps businesses build, manage, respond to, and improve online reviews.',
      'Turns one-time web design prospects into monthly recurring revenue retainers.',
    ],
    iconName: 'Layers',
  },
  {
    id: 'feat-customization',
    title: 'Multichannel AI Sales Outreach',
    category: 'Client Acquisition',
    description:
      'Upgrade #4 introduces the MapMatic Multichannel AI Sales Employee to contact local prospects across Email, Phone, Chat, and Social channels automatically.',
    details: [
      'Reaches local businesses across Email, SMS, Messenger, Facebook, Instagram, and LinkedIn.',
      'Automates follow-up sequences so opportunities discovered on the map do not slip through the cracks.',
      'Tracks outreach replies, meetings booked, and closed deals inside one outreach dashboard.',
    ],
    iconName: 'Sliders',
  },
  {
    id: 'feat-verified-workflow',
    title: 'AgencyVault & Reseller Commercial Ecosystem',
    category: 'Scale & Licensing',
    description:
      'For operators scaling beyond personal use, AgencyVault (Upgrade #2) provides DFY agency assets while the Reseller License (Upgrade #5) lets you sell MapMatic accounts directly to clients.',
    details: [
      'Manage multiple clients, team permissions, and white-label branding inside AgencyVault.',
      'Sell MapMatic accounts under your own reseller business and keep 100% of client revenue (Upgrade #5).',
      'All five upgrades are bundled inside the $347 MapMatic Mega Bundle Deal.',
    ],
    iconName: 'LayoutGrid',
  },
];

export const MEGA_BUNDLE_CARDS = [
  {
    id: 'bundle-core',
    badge: 'Front-End · $49 ($67 Value)',
    name: 'MapMatic AI Front-End License',
    imageUrl: PLACEHOLDER_CONFIG.PRODUCT_DASHBOARD_IMAGE,
    shortDescription:
      'Your Local Business Prospecting & Website Opportunity Discovery System — find local businesses on Google Maps and generate AI-powered websites.',
    benefits: [
      'Uncover local businesses needing websites or Google Maps visibility',
      'Generate AI-powered local business website previews quickly',
      'Ideal entry license ($49) to test the core MapMatic AI workflow',
    ],
    features: [
      'AI Website Creation',
      'Google Maps Visibility & Discovery',
      '30-Day Money-Back Guarantee',
    ],
    purchaseInfo: 'Front-End Price: $49 One-Time ($67 Value)',
  },
  {
    id: 'bundle-mega',
    badge: 'All-In-One Flagship · Save $697',
    name: 'MapMatic Mega Bundle Deal',
    imageUrl: PLACEHOLDER_CONFIG.MEGA_BUNDLE_IMAGE,
    shortDescription:
      'Lock in the Front-End + All 5 Official Upgrades + ADA Suite ($497) + MobiCentric ($497) + Free Commercial License for one $347 payment.',
    benefits: [
      'Saves $697 off the $997 normal price (60% launch bundle discount)',
      'Unlocks $1,134 in core software stack value plus $994 in fast-action bonuses',
      'Eliminates buying individual OTO upgrades separately during the funnel',
    ],
    features: [
      'Front-End + Upgrades #1 through #5',
      'FREE Commercial License Included',
      'ADA Suite + MobiCentric Bonuses Included',
    ],
    purchaseInfo: 'Mega Bundle Price: $347 Low One-Time Fee (JVZoo)',
  },
  {
    id: 'bundle-upgrades',
    badge: 'Full 6-Product Suite · $1,134 Value',
    name: 'All 5 Upgrades + 2 Fast-Action Bonuses',
    imageUrl: PLACEHOLDER_CONFIG.PRODUCT_SUITE_IMAGE,
    shortDescription:
      'Combines Unlimited Edition, DFY AgencyVault + Sales Toolkit, Reputation Management App, Multichannel Sales Outreach, and Reseller License.',
    benefits: [
      'Removes map pin trail and search caps via MapMatic Unlimited ($97)',
      'Adds Reputation AI ($97) and Multichannel AI Sales Employee ($297 value)',
      'Includes Reseller License ($297) to sell accounts directly to clients',
    ],
    features: [
      'All 5 Official OTOs Unlocked Together',
      'Bonus #1: ADA Suite (Worth $497)',
      'Bonus #2: MobiCentric (Worth $497)',
    ],
    purchaseInfo: 'Total Stack Value: $1,134 (+ $994 Bonuses) -> $347 Bundle',
  },
];

export const PRICING_COMPARISON = {
  single: {
    name: 'MapMatic AI Front-End License',
    price: '$49 One-Time ($67 Value)',
    summary:
      'Best suited for solo marketers, bloggers, and website owners who want to test local Google Maps discovery and AI website generation at the lowest entry cost.',
    inclusions: [
      'Core MapMatic AI Local Business Prospecting & Website Discovery System',
      'AI-powered local business website generation workflow',
      'Standard account usage quotas',
      'No Risk · 30-Day 100% Money-Back Guarantee via JVZoo',
    ],
    considerations:
      'Does not include Unlimited pin trails, DFY AgencyVault, Reputation AI, Multichannel AI Sales Employee, Reseller License, or bundle-exclusive bonuses unless upgraded separately.',
  },
  bundle: {
    name: 'MapMatic Mega Bundle Deal (All-In-One)',
    price: '$347 Low One-Time Fee (Normal: $997)',
    summary:
      'Built for agencies, freelancers, and high-output marketers who want all 5 upgrades ($1,134 value) plus ADA Suite ($497) and MobiCentric ($497) for a single one-time payment.',
    inclusions: [
      'MapMatic Front-End ($49) + Upgrade #1 Unlimited ($97) + Upgrade #2 AgencyVault ($297)',
      'Upgrade #3 Reputation AI ($97) + Upgrade #4 Multichannel AI Sales Employee ($297) + Upgrade #5 Reseller ($297)',
      'FREE Commercial License + Bonus #1 ADA Suite ($497) + Bonus #2 MobiCentric ($497)',
      'No Risk · 30-Day 100% Money-Back Guarantee via JVZoo',
    ],
    considerations:
      'Higher initial investment ($347 vs. $49), so it delivers the strongest ROI if you actively serve local clients, run outreach campaigns, or plan to resell accounts.',
  },
};

export const BONUS_ITEMS: BonusItem[] = [
  {
    id: 'bonus-1',
    title: 'New Bonus #1: FREE Access To ADA Suite (Worth $497)',
    subtitle: 'Earn More From Every Client By Offering The Accessibility Service Almost Every Business Website Needs',
    valueLabel: 'Worth $497',
    imageUrl: PLACEHOLDER_CONFIG.BONUS_1_IMAGE,
    description:
      'ADA Suite pairs directly with the websites you generate inside MapMatic AI so you can add accessibility compliance widgets and audits to every client proposal.',
    benefits: [
      'Adds a high-demand accessibility compliance service to your web design offers',
      'Helps local business clients improve website accessibility across desktop and mobile',
      'Included FREE as Fast-Action Bonus #1 (Worth $497)',
    ],
    inclusionStatus: 'Included FREE with Fast-Action Mega Bundle Deal (Worth $497)',
  },
  {
    id: 'bonus-2',
    title: 'New Bonus #2: FREE Access To MobiCentric (Worth $497)',
    subtitle: 'Create Professional iOS & Android Apps For Your Clients In Minutes — And Add Another High-Value Service To Every Deal',
    valueLabel: 'Worth $497',
    imageUrl: PLACEHOLDER_CONFIG.BONUS_2_IMAGE,
    description:
      'MobiCentric turns local business assets into professional iOS and Android mobile apps in minutes, giving your agency a lucrative mobile upsell alongside MapMatic AI websites.',
    benefits: [
      'Builds branded iOS and Android mobile experiences for local businesses quickly',
      'Expands your agency deal size beyond websites and Google Maps optimization',
      'Included FREE as Fast-Action Bonus #2 (Worth $497)',
    ],
    inclusionStatus: 'Included FREE with Fast-Action Mega Bundle Deal (Worth $497)',
  },
];

export const TUTORIAL_STEPS = [
  {
    step: 1,
    type: 'Verified Purchase Flow',
    title: 'Access the Official MapMatic AI Offer',
    description:
      'Visit the official MapMatic AI sales or Mega Bundle page on JVZoo. Confirm whether you want the $49 Front-End license or the $347 MapMatic Mega Bundle Deal (which includes all 5 upgrades and both $497 bonuses).',
  },
  {
    step: 2,
    type: 'Verified Purchase Flow',
    title: 'Complete the Secure JVZoo Checkout Process',
    description:
      'Complete payment via PayPal, Visa, Mastercard, American Express, or Discover through JVZoo’s encrypted checkout. Keep your JVZoo receipt and transaction ID for instant access and 30-day guarantee protection.',
  },
  {
    step: 3,
    type: 'Verified Purchase Flow',
    title: 'Log In to the MapMatic Cloud Dashboard',
    description:
      'Click the member access link in your JVZoo receipt email to sign into the MapMatic AI workspace. If you purchased the Mega Bundle, verify that Unlimited, AgencyVault, Reputation AI, Multichannel Outreach, and Reseller modules are unlocked.',
  },
  {
    step: 4,
    type: 'Illustrative Workflow Guidance',
    title: 'Explore the Business Growth Dashboard',
    description:
      'Review the main dashboard tracking Map Views, Website Visits, New Reviews, and Leads so you understand where active campaigns, saved prospects, and client reports live.',
  },
  {
    step: 5,
    type: 'Illustrative Workflow Guidance',
    title: 'Run Local Map Search or Select a Mapping Workflow',
    description:
      'Enter a target city and local niche (such as auto repair, plumbing, dental, or hospitality) to run a Google Maps search—or choose a custom map trail layout for your own website or blog.',
  },
  {
    step: 6,
    type: 'Illustrative Workflow Guidance',
    title: 'Generate AI Website Previews & Customize Map Options',
    description:
      'Use MapMatic AI to generate a clean local business website preview, adjust interactive markers, map pin trails, colors, and business details, and attach accessibility or mobile app add-ons if pitching clients.',
  },
  {
    step: 7,
    type: 'Illustrative Workflow Guidance',
    title: 'Launch Reputation AI or Multichannel Outreach (Bundle / OTOs)',
    description:
      'If you unlocked Upgrades #3 and #4, activate review monitoring with Reputation AI and configure automated Email, SMS, Messenger, or Social outreach sequences to follow up with warm leads.',
  },
  {
    step: 8,
    type: 'Illustrative Workflow Guidance',
    title: 'Preview, Publish & Deliver to Clients',
    description:
      'Test every interactive map pin, website CTA, and mobile viewport in preview mode, then embed the finished asset on your site or deliver it to clients under your Commercial or Reseller License.',
  },
];

export const UPGRADE_ANALYSIS_ITEMS: UpgradeItem[] = [
  {
    id: 'upgrade-fe',
    tierLabel: 'Front-End License · $49 ($67 Value Card)',
    title: 'FRONT-END: MAPMATIC AI — $67 Value',
    subtitle: 'Your Local Business Prospecting & Website Opportunity Discovery System',
    imageUrl: PLACEHOLDER_CONFIG.PRODUCT_DASHBOARD_IMAGE,
    imageAlt: 'MapMatic AI Front-End 3D software box cover',
    whatItOffers:
      'Your Local Business Prospecting & Website Opportunity Discovery System. Helps you discover local businesses on Google Maps and generate AI-powered local business websites that get found on Google Maps.',
    mainFunctions: [
      'Local business prospecting via Google Maps search',
      'AI-powered local business website creation',
      'Google Maps visibility insights & interactive lead discovery',
    ],
    keyBenefits: [
      'Lowest upfront cost ($49) to test MapMatic AI in real local marketing scenarios',
      'Beginner-friendly workspace requiring zero coding or developer API setup',
    ],
    intendedUsers: 'Solo bloggers, local marketers, and newcomers testing interactive maps and AI website previews.',
    relationToMain: 'This is the core Front-End MapMatic AI software required before applying any upgrades.',
    includedInBundle: 'Yes — included inside the $347 MapMatic Mega Bundle ($49 value in stack).',
    priceField: '$49 One-Time ($67 Value)',
  },
  {
    id: 'upgrade-1',
    tierLabel: 'Upgrade #1 · $97 Value',
    title: 'UPGRADE #1: MAPMATIC UNLIMITED — $97 Value',
    subtitle: 'Remove The Limits And Unlock The FULL Power Of MapMatic!',
    imageUrl: PLACEHOLDER_CONFIG.UPGRADE_1_IMAGE,
    imageAlt: 'MapMatic Unlimited Edition 3D software box cover',
    whatItOffers:
      'Removes starter account caps so you can unlock the full power of MapMatic AI with unlimited access, limitless map pin trails, and unrestricted local business growth.',
    mainFunctions: [
      'Unlimited access to local map prospecting and website creation',
      'Limitless map pin trails across multiple cities and niches',
      'Removes usage bottlenecks for scaling campaigns',
    ],
    keyBenefits: [
      'Essential if you publish maps across multiple sites or prospect high-volume local niches',
      'Prevents running out of search or map creation quotas mid-campaign',
    ],
    intendedUsers: 'High-volume publishers, multi-city local SEO consultants, and growing agencies.',
    relationToMain: 'Lifts usage caps on the core MapMatic AI engine.',
    includedInBundle: 'Yes — included in the $347 MapMatic Mega Bundle.',
    priceField: '$97 Value',
  },
  {
    id: 'upgrade-2',
    tierLabel: 'Upgrade #2 · $197 Card / $297 Table Value',
    title: 'UPGRADE #2: AGENCYVAULT — $197 Value ($297 Stack Value)',
    subtitle: 'Everything You Need To Start And Run A Professional Website Design Agency… Without Building Everything From Scratch!',
    imageUrl: PLACEHOLDER_CONFIG.UPGRADE_2_IMAGE,
    imageAlt: 'MapMatic DFY AgencyVault + Sales Toolkit 3D box cover',
    whatItOffers:
      'Everything you need to start and run a professional website design agency without building assets from scratch—including client management, white-label branding, client reporting, and team permissions.',
    mainFunctions: [
      'Done-for-you agency assets and sales toolkit to close local clients',
      'Manage multiple clients with white-label agency branding',
      'Client reporting dashboards and team member access permissions',
    ],
    keyBenefits: [
      'Turns MapMatic AI from a personal tool into a polished client-facing agency suite',
      'Saves weeks of creating agency pitch decks, reports, and onboarding assets',
    ],
    intendedUsers: 'Freelancers and digital marketing agencies pitching website design to local businesses.',
    relationToMain: 'Adds complete agency infrastructure and DFY sales collateral around MapMatic AI.',
    includedInBundle: 'Yes — included in the $347 MapMatic Mega Bundle.',
    priceField: '$197–$297 Value',
  },
  {
    id: 'upgrade-3',
    tierLabel: 'Upgrade #3 · $97 Value',
    title: 'UPGRADE #3: MAPMATIC REPUTATION AI — $97 Value',
    subtitle: 'Turn Your Existing Website Design Prospects Into Potential Monthly Recurring Revenue Opportunities!',
    imageUrl: PLACEHOLDER_CONFIG.UPGRADE_3_IMAGE,
    imageAlt: 'MapMatic Reputation Management App 3D box cover',
    whatItOffers:
      'Turns your existing website design prospects into monthly recurring revenue opportunities by helping local businesses build, manage, respond to, and improve online reviews.',
    mainFunctions: [
      'Monitor and manage local business star ratings and customer reviews',
      'AI-assisted review responses and reputation improvement workflows',
      'Positions your agency for ongoing monthly retainer billing',
    ],
    keyBenefits: [
      'Local businesses value Google reviews almost as much as their website—easy upsell',
      'Creates sticky recurring income instead of one-off website fees',
    ],
    intendedUsers: 'Agencies, reputation consultants, and local SEO retainers.',
    relationToMain: 'Pairs with MapMatic prospects to add ongoing review management services.',
    includedInBundle: 'Yes — included in the $347 MapMatic Mega Bundle.',
    priceField: '$97 Value',
  },
  {
    id: 'upgrade-4',
    tierLabel: 'Upgrade #4 · $97 Card / $297 Table Value',
    title: 'UPGRADE #4: MAPMATIC MULTICHANNEL AI SALES EMPLOYEE — $97 Value ($297 Stack Value)',
    subtitle: 'Meet Your New AI Sales Employee… Find More Prospects, Start More Conversations, Follow Up Automatically, And Win More Customers!',
    imageUrl: PLACEHOLDER_CONFIG.UPGRADE_4_IMAGE,
    imageAlt: 'MapMatic Multichannel Sales Outreach 3D box cover',
    whatItOffers:
      'Your automated AI outreach assistant designed to find more prospects, start conversations across Email, Phone, Chat, and Social (SMS, Messenger, Facebook, Instagram, LinkedIn), follow up automatically, and win more customers.',
    mainFunctions: [
      'Multichannel outreach across Email, Phone, Chat, and Social platforms',
      'Automated follow-up sequences that nurture prospects into booked calls',
      'Outreach analytics tracking messages sent, replies, and qualified leads',
    ],
    keyBenefits: [
      'Solves the #1 agency bottleneck: consistent daily outreach and follow-up',
      'Keeps prospecting and outreach inside one integrated MapMatic workflow',
    ],
    intendedUsers: 'Solo agency founders and B2B local marketers wanting automated client outreach.',
    relationToMain: 'Connects directly to the leads uncovered by MapMatic AI Front-End.',
    includedInBundle: 'Yes — included in the $347 MapMatic Mega Bundle.',
    priceField: '$97–$297 Value',
  },
  {
    id: 'upgrade-5',
    tierLabel: 'Upgrade #5 · $297 Value',
    title: 'UPGRADE #5: MAPMATIC RESELLER LICENSE — $297 Value',
    subtitle: 'What If You Could Stop Being Just A MapMatic User… And Start Selling MapMatic Yourself?',
    imageUrl: PLACEHOLDER_CONFIG.UPGRADE_5_IMAGE,
    imageAlt: 'MapMatic Reseller License 3D box cover',
    whatItOffers:
      'Lets you stop being just a MapMatic user and start selling MapMatic yourself—create accounts for clients under your brand, build local map directories, and keep 100% of client revenue.',
    mainFunctions: [
      'Official Commercial Reseller License to sell MapMatic access to clients',
      'Create unlimited client websites and local map directories',
      'Charge clients one-time or recurring fees and keep 100% of profits',
    ],
    keyBenefits: [
      'Creates a standalone software-reselling business stream on top of agency services',
      'Single sale or small handful of reseller clients can recoup the bundle price',
    ],
    intendedUsers: 'Software resellers, established agencies, and B2B consultants.',
    relationToMain: 'Grants commercial reseller rights over the MapMatic platform.',
    includedInBundle: 'Yes — included in the $347 MapMatic Mega Bundle.',
    priceField: '$297 Value',
  },
];

export const COMPARISON_TABLE_ROWS: ComparisonRow[] = [
  {
    criterion: 'Intended Use',
    mapmatic: 'Local business map prospecting, AI website generation, interactive pin trails, reputation & outreach suite',
    mapbox: 'Developer-grade mapping SDK, custom vector tiles, navigation, and geospatial web apps',
    freeTools: 'Basic embeddable pins, static maps, or limited-tier community editors',
  },
  {
    criterion: 'Technical Requirements',
    mapmatic: 'Guided cloud dashboard; zero coding or API key management required',
    mapbox: 'Requires API tokens, JavaScript/SDK integration, and developer familiarity',
    freeTools: 'Varies from basic web forms to manual GeoJSON / iframe tweaking',
  },
  {
    criterion: 'Mapping & Business Capabilities',
    mapmatic: 'Google Maps discovery, limitless pin trails (OTO1), AI websites, Reputation AI, and Multichannel outreach',
    mapbox: 'Full vector cartography, custom GL shaders, routing APIs, and large-scale spatial datasets',
    freeTools: 'Standard 2D pins, basic routes, and minimal styling or commercial tools',
  },
  {
    criterion: 'Customization & Agency Rights',
    mapmatic: 'UI-driven styling + white-label agency toolkit & Reseller License in Mega Bundle',
    mapbox: 'Virtually unlimited programmatic styling via Mapbox Studio and GL JS',
    freeTools: 'Restricted to preset themes, platform watermarks, and zero agency outreach',
  },
  {
    criterion: 'Pricing Model',
    mapmatic: '$49 One-Time Front-End or $347 One-Time Mega Bundle (Normal $997 · 30-Day Guarantee)',
    mapbox: 'Usage-based metered billing with a free monthly request tier (check Mapbox pricing)',
    freeTools: 'Free basic access, often capped by views, exports, or watermarks',
  },
  {
    criterion: 'Key Limitations',
    mapmatic: 'Full Unlimited, Agency, Reputation, Outreach & Reseller features require upgrades or the $347 Bundle',
    mapbox: 'Steeper developer learning curve and potential metered billing on high-traffic apps',
    freeTools: 'No AI website generation, no local lead outreach, and limited visual polish',
  },
];

export const TARGET_AUDIENCES = [
  {
    role: 'Digital Marketers',
    useCase:
      'Find local businesses on Google Maps with weak web presence, pitch AI-generated website previews, and automate multichannel outreach.',
  },
  {
    role: 'Website Owners',
    useCase:
      'Replace plain text address lists with visual service-area maps, branch locators, and interactive regional directories.',
  },
  {
    role: 'Bloggers',
    useCase:
      'Turn travel itineraries, city guides, food tours, and local business roundups into clickable map pin trails.',
  },
  {
    role: 'Content Creators',
    useCase:
      'Produce clean local map visuals and interactive regional perspectives for newsletters, guides, and visual explainers.',
  },
  {
    role: 'Entrepreneurs',
    useCase:
      'Launch a local web design agency or MapMatic reseller business using the included DFY AgencyVault and Reseller License.',
  },
  {
    role: 'Small Business Owners',
    useCase:
      'Showcase storefront visibility, improve Google Maps discovery, and manage customer reviews cleanly.',
  },
  {
    role: 'Educators',
    useCase:
      'Illustrate geography lessons, regional business studies, and interactive location trails visually.',
  },
  {
    role: 'Geographic Information Enthusiasts',
    useCase:
      'Experiment with AI-assisted map discovery and interactive location trails without setting up heavy desktop GIS suites.',
  },
  {
    role: 'Developers',
    useCase:
      'Rapidly prototype local business websites and interactive map concepts for clients before deciding on custom SDK builds.',
  },
  {
    role: 'Agencies',
    useCase:
      'Bundle AI websites, Reputation AI retainers, ADA Suite accessibility, and MobiCentric mobile apps into high-ticket client packages.',
  },
];

export const ADVANTAGES_LIST = [
  'Combines Google Maps local prospecting with AI website creation, Reputation AI, and Multichannel outreach in one ecosystem.',
  'Accessible $49 Front-End entry point plus a $347 One-Time Mega Bundle that saves $697 off the $997 normal price.',
  'Zero coding or developer API setup required—runs inside a clean cloud dashboard.',
  'Includes two high-value fast-action bonuses on the bundle: ADA Suite (Worth $497) and MobiCentric (Worth $497).',
  'Free Commercial License on qualifying bundle action plus full Reseller License in Upgrade #5.',
  'Backed by a 30-Day 100% Money-Back Guarantee processed through JVZoo.',
];

export const DISADVANTAGES_LIST = [
  'The $49 Front-End license has standard limits—Unlimited pin trails, AgencyVault, Reputation AI, Outreach, and Reseller rights require upgrades or the $347 Bundle.',
  'Not a replacement for developer geospatial SDKs like Mapbox when building custom real-time GPS or fleet engineering apps.',
  'AI-generated websites, outreach messages, and business listings still benefit from human review before sending to clients.',
  'Launch discounts ($347 vs $997) and fast-action bonuses (ADA Suite & MobiCentric) are time-sensitive and should be verified on the live JVZoo checkout page.',
  'Success in agency or reseller workflows still depends on consistent client outreach and real service delivery.',
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is MapMatic AI?',
    answer:
      'MapMatic AI is an AI-powered local business discovery, interactive mapping, and website creation platform. It helps users find local businesses on Google Maps that need websites, build AI-powered local websites, create interactive map pin trails, and—when paired with its bundle upgrades—manage reviews and automate multichannel client outreach.',
  },
  {
    id: 'faq-2',
    question: 'How does MapMatic AI work?',
    answer:
      'Inside the MapMatic cloud dashboard, you search target cities and niches on Google Maps, identify businesses needing website or visibility upgrades, generate tailored AI local business websites and interactive map visuals, and optionally trigger Reputation AI and Multichannel AI Sales Employee outreach campaigns.',
  },
  {
    id: 'faq-3',
    question: 'Is MapMatic AI suitable for beginners?',
    answer:
      'Yes. MapMatic AI is built specifically for non-technical users, local marketers, and beginner agency owners who want interactive map prospecting and AI website creation without configuring API keys, JavaScript libraries, or complex GIS tools.',
  },
  {
    id: 'faq-4',
    question: 'What are the main MapMatic AI features?',
    answer:
      'Core features include Google Maps local business prospecting, AI-powered website creation, interactive map pin trails, a Business Growth Dashboard (tracking Map Views, Website Visits, New Reviews, and Leads), plus bundle modules for Unlimited access, DFY AgencyVault, Reputation AI, Multichannel Sales Outreach, and Reseller licensing.',
  },
  {
    id: 'faq-5',
    question: 'What is included in the MapMatic AI Mega Bundle?',
    answer:
      'The MapMatic AI Mega Bundle includes the Front-End License ($49) plus all 5 official upgrades: MapMatic Unlimited ($97), AgencyVault ($297), MapMatic Reputation AI ($97), Multichannel AI Sales Employee ($297), and MapMatic Reseller License ($297)—a $1,134 total software value—along with Fast-Action Bonus #1 (ADA Suite, worth $497), Bonus #2 (MobiCentric, worth $497), and a Free Commercial License.',
  },
  {
    id: 'faq-6',
    question: 'What is the difference between MapMatic AI front end and OTO?',
    answer:
      'The $49 Front-End license gives you the core local business prospecting and AI website discovery engine with standard limits. The 5 OTO upgrades expand the platform with Unlimited access & limitless pin trails (OTO 1), DFY AgencyVault & Sales Toolkit (OTO 2), Reputation AI (OTO 3), Multichannel AI Sales Employee (OTO 4), and Reseller rights (OTO 5).',
  },
  {
    id: 'faq-7',
    question: 'How much does MapMatic AI cost?',
    answer:
      'The Front-End single license is $49 one-time ($67 value), while the all-in-one MapMatic Mega Bundle Deal is a $347 low one-time fee (normal price $997, saving $697 / 60% discount during launch). Buying all components individually would total $1,134 before bonuses.',
  },
  {
    id: 'faq-8',
    question: 'Is MapMatic AI available as a single purchase?',
    answer:
      'Yes. You can purchase the MapMatic AI Front-End License as a standalone $49 one-time offer if you want to start with core local map discovery and AI website generation before deciding on any upgrades.',
  },
  {
    id: 'faq-9',
    question: 'What is included in the MapMatic AI bundle deal?',
    answer:
      'The $347 MapMatic AI bundle deal unlocks the entire 6-product suite: Front-End License + MapMatic Unlimited + DFY AgencyVault + Reputation AI + Multichannel AI Sales Employee + Reseller License, plus ADA Suite ($497 value) and MobiCentric ($497 value) as fast-action bonuses.',
  },
  {
    id: 'faq-10',
    question: 'Does MapMatic AI offer a money-back guarantee?',
    answer:
      'Yes. According to the official offer cards, both MapMatic AI purchases and the Mega Bundle Deal are backed by a No-Risk 30-Day 100% Money-Back Guarantee processed through JVZoo.',
  },
  {
    id: 'faq-11',
    question: 'Is there a MapMatic AI discount code?',
    answer:
      'During the launch window, the Mega Bundle already applies a 60% / $697 discount (reducing the $997 normal bundle price to $347 one-time). Check the official JVZoo checkout bar for any extra active launch coupon codes.',
  },
  {
    id: 'faq-12',
    question: 'How do I access MapMatic AI after purchasing?',
    answer:
      'Immediately after completing checkout on JVZoo (via PayPal, Visa, Mastercard, AMEX, or Discover), JVZoo emails your receipt and member portal login link so you can access the cloud dashboard right away.',
  },
  {
    id: 'faq-13',
    question: 'How to use MapMatic AI?',
    answer:
      'Log into the MapMatic cloud dashboard, search a target local niche and city on Google Maps, generate AI-powered local website previews or interactive map pin trails, customize branding, and (with bundle upgrades) launch Reputation AI and Multichannel outreach campaigns.',
  },
  {
    id: 'faq-14',
    question: 'Can MapMatic AI create interactive maps?',
    answer:
      'Yes. MapMatic AI features interactive map search, clickable business pin cards, and—with Upgrade #1 (MapMatic Unlimited)—limitless map pin trails for websites, local directories, and client presentations.',
  },
  {
    id: 'faq-15',
    question: 'Can I use MapMatic AI to create custom maps for websites?',
    answer:
      'Yes. You can use MapMatic AI as an AI custom map creator for website directories, service-area showcases, and local business websites generated directly inside the platform.',
  },
  {
    id: 'faq-16',
    question: 'Can I create 3D maps with AI?',
    answer:
      'MapMatic AI focuses on visual interactive map discovery, multi-pin map trails, and AI-powered local business website experiences. If you specifically need custom WebGL 3D terrain elevation modeling, compare its visual map presentation with specialized 3D GIS or Mapbox GL tools before buying.',
  },
  {
    id: 'faq-17',
    question: 'Is MapMatic AI better than Mapbox?',
    answer:
      'They solve different problems. Mapbox is a developer mapping API/SDK for custom software engineering, vector tiles, and GPS apps. MapMatic AI is a no-code marketing and local agency suite built to discover Google Maps prospects, generate AI websites, manage reviews, and close clients.',
  },
  {
    id: 'faq-18',
    question: 'What are the best AI tools for geographical mapping?',
    answer:
      'Developer teams rely on Mapbox and Deck.gl, spatial analysts use ArcGIS Pro or QGIS, casual users use Google My Maps, and marketers or local agencies looking for automated Google Maps lead discovery, AI websites, and interactive pin trails choose platforms like MapMatic AI.',
  },
  {
    id: 'faq-19',
    question: 'Is there a free AI map maker?',
    answer:
      'Free tools such as Google My Maps or OpenStreetMap editors let you drop basic pins at zero cost, but they do not include AI local website generation, automated multichannel sales outreach, review management, or commercial reseller licensing.',
  },
  {
    id: 'faq-20',
    question: 'Who should buy the MapMatic AI Mega Bundle?',
    answer:
      'The $347 MapMatic AI Mega Bundle is ideal for freelancers, web design agencies, local SEO consultants, and software resellers who want Unlimited pin trails, AgencyVault, Reputation AI, Multichannel Sales Outreach, Reseller rights, and the ADA Suite + MobiCentric bonuses without paying $1,134 separately.',
  },
  {
    id: 'faq-21',
    question: 'Is MapMatic AI worth buying in 2026?',
    answer:
      'If you run a local marketing agency, pitch websites to local businesses, or build local map directories, MapMatic AI offers strong value in 2026—especially at the $347 one-time Mega Bundle price backed by a 30-day money-back guarantee.',
  },
  {
    id: 'faq-22',
    question: 'What should I check before purchasing MapMatic AI?',
    answer:
      'Before completing your JVZoo order, confirm whether the $49 Front-End limits fit your needs or if the $347 Mega Bundle is better for your agency, verify that the Free Commercial License and ADA Suite / MobiCentric fast-action bonuses appear on your checkout summary, and review the 30-day guarantee terms.',
  },
];

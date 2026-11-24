import { Compass, Globe2, Layers, MapPin, Package } from 'lucide-react';

export type VisualFrameVariant = 'hero' | 'dashboard' | 'bundle' | '3d' | 'bonus' | 'pricing';

interface ProductVisualFrameProps {
  placeholderKey: string;
  imageUrl: string;
  alt: string;
  caption: string;
  affiliateUrl: string;
  variant: VisualFrameVariant;
  compact?: boolean;
  priority?: boolean;
}

export function ProductVisualFrame({
  placeholderKey,
  imageUrl,
  alt,
  caption,
  affiliateUrl,
  variant,
  compact = false,
  priority = false,
}: ProductVisualFrameProps) {
  const hasRealImage = Boolean(imageUrl && !imageUrl.includes('[INSERT'));
  const resolvedHref =
    affiliateUrl && !affiliateUrl.includes('[INSERT')
      ? affiliateUrl
      : '#mapmatic-ai-pricing';
  const isPlaceholderHref = resolvedHref === '#mapmatic-ai-pricing';

  const variantMeta: Record<
    VisualFrameVariant,
    { title: string; subtitle: string; Icon: typeof MapPin }
  > = {
    hero: {
      title: 'MapMatic AI Flagship Bundle & Workspace',
      subtitle: 'Featured Product Cover',
      Icon: Compass,
    },
    dashboard: {
      title: 'MapMatic AI Cloud Dashboard & Prospecting Suite',
      subtitle: 'Official Product Showcase',
      Icon: Globe2,
    },
    bundle: {
      title: 'MapMatic Mega Bundle Deal Package',
      subtitle: 'All-In-One Launch Suite',
      Icon: Package,
    },
    '3d': {
      title: 'MapMatic AI Complete 6-Product Ecosystem',
      subtitle: 'Product & Upgrade Lineup',
      Icon: Layers,
    },
    bonus: {
      title: 'Fast-Action Launch Bonus Inclusion',
      subtitle: 'Official Bonus Allocation',
      Icon: MapPin,
    },
    pricing: {
      title: 'Official JVZoo Pricing & Bundle Offer Card',
      subtitle: 'Verified Launch Checkout Details',
      Icon: Package,
    },
  };

  const { title, subtitle, Icon } = variantMeta[variant];

  return (
    <figure className={`mm-reveal ${compact ? 'my-4' : 'my-7'}`}>
      <a
        href={resolvedHref}
        target={isPlaceholderHref ? undefined : '_blank'}
        rel="sponsored nofollow noopener"
        aria-label={alt}
        className="group block overflow-hidden rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-[#141519] shadow-sm transition-all duration-300 hover:border-[#7024E8] dark:hover:border-[#A66BFF]"
      >
        {hasRealImage ? (
          <div className="flex w-full items-center justify-center bg-[#141519] p-2 sm:p-3">
            <img
              src={imageUrl}
              alt={alt}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              referrerPolicy="no-referrer"
              className={`h-auto w-full rounded-xl object-contain transition-transform duration-300 group-hover:scale-[1.01] ${
                compact ? 'max-h-[280px]' : variant === 'hero' ? 'max-h-[450px]' : 'max-h-[540px]'
              }`}
            />
          </div>
        ) : (
          <div className="relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12 bg-[#F6F4FA] dark:bg-[#191A20]">
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7024E8] to-[#914CFF] dark:from-[#7828FF] dark:to-[#A66BFF] text-white shadow-md">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="font-mono-tabular text-xs font-semibold text-[#7024E8] dark:text-[#DCC8FF]">
                {placeholderKey}
              </div>
              <div className="mt-1.5 font-display text-lg font-bold text-[#171421] dark:text-white">
                {title}
              </div>
              <p className="mt-1 text-xs text-[#666273] dark:text-[#B8B8C4]">
                {subtitle} · Linked to Official MapMatic AI Destination
              </p>
            </div>
          </div>
        )}
      </a>
      <figcaption className="mt-2.5 text-center text-xs text-[#666273] dark:text-[#B8B8C4]">
        {caption}
      </figcaption>
    </figure>
  );
}

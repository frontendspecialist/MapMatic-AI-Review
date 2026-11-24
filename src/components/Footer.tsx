import { useState } from 'react';
import { MapPin, X } from 'lucide-react';

type LegalDocKey = 'privacy' | 'disclosure' | 'terms' | 'contact' | null;

const LEGAL_COPY: Record<Exclude<LegalDocKey, null>, { title: string; body: string }> = {
  privacy: {
    title: 'Privacy Policy',
    body: 'This MapMatic AI Review website stores only your chosen Dark/Light mode preference inside browser localStorage and does not require user accounts or tracking cookies.',
  },
  disclosure: {
    title: 'Affiliate Disclosure',
    body: 'Links pointing to MapMatic AI or its Mega Bundle Deal may be affiliate links. If you click an affiliate link and complete a purchase, this site may earn a commission at zero additional cost to you. We never fabricate ratings, customer counts, or unverified discount claims.',
  },
  terms: {
    title: 'Terms and Conditions',
    body: 'All product specifications, pricing, upgrade contents, and refund windows are subject to the official MapMatic AI vendor sales and checkout pages. Buyers should verify live checkout figures before purchasing.',
  },
  contact: {
    title: 'Contact Information',
    body: 'For editorial corrections or updated official pricing submissions regarding MapMatic AI, please reach out through our editorial contact channel.',
  },
};

export function Footer() {
  const [activeDoc, setActiveDoc] = useState<LegalDocKey>(null);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="mt-16 border-t border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA] dark:bg-[#191A20]">
        <div className="mx-auto max-w-[1320px] px-6 py-12">
          <div className="grid gap-10 md:grid-cols-3 border-b border-[#E7E1EF] dark:border-[#34313E] pb-10">
            <div>
              <a
                href="#review-overview"
                className="inline-flex items-center gap-2.5 font-display text-base font-extrabold tracking-tight text-[#171421] dark:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7024E8] to-[#914CFF] dark:from-[#7828FF] dark:to-[#A66BFF] text-white">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>MAPMATIC AI REVIEW</span>
              </a>
              <p className="mt-3 text-sm leading-relaxed text-[#666273] dark:text-[#B8B8C4]">
                Independent software review publication explaining MapMatic AI features, Mega Bundle Deal inclusions, pricing options, and honest competitor comparisons.
              </p>
            </div>

            <div>
              <h3 className="font-display text-sm font-bold text-[#171421] dark:text-white mb-3">
                Review Navigation
              </h3>
              <ul className="space-y-2 text-sm text-[#666273] dark:text-[#B8B8C4]">
                <li>
                  <a href="#what-is-mapmatic-ai" className="hover:text-[#7024E8] dark:hover:text-[#A66BFF]">
                    What Is MapMatic AI?
                  </a>
                </li>
                <li>
                  <a href="#mapmatic-ai-features" className="hover:text-[#7024E8] dark:hover:text-[#A66BFF]">
                    MapMatic AI Features
                  </a>
                </li>
                <li>
                  <a href="#mapmatic-ai-mega-bundle" className="hover:text-[#7024E8] dark:hover:text-[#A66BFF]">
                    Mega Bundle Deal
                  </a>
                </li>
                <li>
                  <a href="#mapmatic-ai-pricing" className="hover:text-[#7024E8] dark:hover:text-[#A66BFF]">
                    Pricing Comparison
                  </a>
                </li>
                <li>
                  <a href="#mapmatic-ai-faq" className="hover:text-[#7024E8] dark:hover:text-[#A66BFF]">
                    Buyer FAQ (22 Answers)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-sm font-bold text-[#171421] dark:text-white mb-3">
                Compliance &amp; Legal
              </h3>
              <ul className="space-y-2 text-sm text-[#666273] dark:text-[#B8B8C4]">
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveDoc('privacy')}
                    className="hover:text-[#7024E8] dark:hover:text-[#A66BFF] cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveDoc('disclosure')}
                    className="hover:text-[#7024E8] dark:hover:text-[#A66BFF] cursor-pointer"
                  >
                    Affiliate Disclosure
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveDoc('terms')}
                    className="hover:text-[#7024E8] dark:hover:text-[#A66BFF] cursor-pointer"
                  >
                    Terms and Conditions
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveDoc('contact')}
                    className="hover:text-[#7024E8] dark:hover:text-[#A66BFF] cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-[#666273] dark:text-[#B8B8C4]">
            <span>Copyright © {currentYear} MAPMATIC AI REVIEW. All Rights Reserved.</span>
            <span>Independent Affiliate Review Publication</span>
          </div>
        </div>
      </footer>

      {activeDoc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        >
          <div className="w-full max-w-lg rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] p-6 shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-[#E7E1EF] dark:border-[#34313E] pb-3">
              <h2 id="legal-modal-title" className="font-display text-lg font-bold text-[#171421] dark:text-white">
                {LEGAL_COPY[activeDoc].title}
              </h2>
              <button
                type="button"
                onClick={() => setActiveDoc(null)}
                aria-label="Close legal information dialog"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E7E1EF] dark:border-[#34313E] text-[#666273] dark:text-[#B8B8C4] hover:text-[#171421] dark:hover:text-white cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#666273] dark:text-[#B8B8C4]">
              {LEGAL_COPY[activeDoc].body}
            </p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveDoc(null)}
                className="rounded-xl bg-[#7024E8] dark:bg-[#7828FF] px-4 py-2 text-xs font-bold text-white cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

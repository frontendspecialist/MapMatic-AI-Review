import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/reviewContent';

export function FaqAccordion() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    [FAQ_ITEMS[0].id]: true,
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-3 my-6" role="region" aria-label="MapMatic AI Frequently Asked Questions">
      {FAQ_ITEMS.map((item) => {
        const isOpen = Boolean(openIds[item.id]);
        return (
          <div
            key={item.id}
            className="rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] overflow-hidden transition-colors"
          >
            <h3 data-toc-ignore="true" className="m-0">
              <button
                type="button"
                id={`${item.id}-btn`}
                aria-expanded={isOpen}
                aria-controls={`${item.id}-panel`}
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-bold text-[#171421] dark:text-white hover:bg-[#F6F4FA]/70 dark:hover:bg-[#191A20]/70 transition-colors cursor-pointer"
              >
                <span>{item.question}</span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F6F4FA] dark:bg-[#191A20] text-[#7024E8] dark:text-[#A66BFF]">
                  {isOpen ? (
                    <Minus className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  )}
                </span>
              </button>
            </h3>
            {isOpen && (
              <div
                id={`${item.id}-panel`}
                role="region"
                aria-labelledby={`${item.id}-btn`}
                className="border-t border-[#E7E1EF] dark:border-[#34313E] px-5 py-4 text-[15px] leading-relaxed text-[#666273] dark:text-[#B8B8C4]"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

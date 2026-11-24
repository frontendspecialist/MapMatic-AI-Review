import { useState } from 'react';
import { ChevronDown, ChevronUp, List } from 'lucide-react';
import { useArticleToc } from './StickySidebarToc';

export function MobileToc() {
  const { groups, activeId } = useArticleToc();
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden mb-6">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-toc-panel"
        className="flex w-full items-center justify-between rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] px-4 py-3.5 text-sm font-bold text-[#171421] dark:text-white cursor-pointer"
      >
        <span className="inline-flex items-center gap-2">
          <List className="h-4 w-4 text-[#7024E8] dark:text-[#A66BFF]" aria-hidden="true" />
          <span>Table of Contents</span>
        </span>
        {open ? (
          <ChevronUp className="h-4 w-4 text-[#666273] dark:text-[#B8B8C4]" aria-hidden="true" />
        ) : (
          <ChevronDown className="h-4 w-4 text-[#666273] dark:text-[#B8B8C4]" aria-hidden="true" />
        )}
      </button>

      {open && (
        <nav
          id="mobile-toc-panel"
          aria-label="Mobile Table of Contents"
          className="mt-2 rounded-xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] p-4"
        >
          <ul className="space-y-1.5">
            {groups.map((group) => (
              <li key={group.id}>
                <a
                  href={`#${group.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-2.5 py-1.5 text-xs font-semibold ${
                    activeId === group.id
                      ? 'bg-[#7024E8]/12 dark:bg-[#7828FF]/20 text-[#7024E8] dark:text-[#DCC8FF]'
                      : 'text-[#666273] dark:text-[#B8B8C4]'
                  }`}
                >
                  {group.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

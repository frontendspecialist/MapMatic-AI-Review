import { useEffect, useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

export interface TocHeadingGroup {
  id: string;
  text: string;
  children: { id: string; text: string }[];
}

interface StickySidebarTocProps {
  affiliateUrl?: string;
  contentVersion?: number;
}

export function useArticleToc(contentVersion = 0) {
  const [groups, setGroups] = useState<TocHeadingGroup[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const root = document.getElementById('mm-live-article');
    if (!root) return;

    const headings = Array.from(root.querySelectorAll('h2, h3')).filter(
      (el) => !el.hasAttribute('data-toc-ignore')
    );

    const parsed: TocHeadingGroup[] = [];
    let current: TocHeadingGroup | null = null;

    headings.forEach((el, index) => {
      if (!el.id) {
        el.id = `toc-sec-${index}`;
      }
      const text = (el.textContent || '').trim();
      if (el.tagName === 'H2') {
        current = { id: el.id, text, children: [] };
        parsed.push(current);
      } else if (el.tagName === 'H3' && current) {
        current.children.push({ id: el.id, text });
      }
    });

    setGroups(parsed);
    if (parsed.length > 0 && !activeId) {
      setActiveId(parsed[0].id);
    }

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-96px 0px -65% 0px', threshold: 0.08 }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [contentVersion]);

  return { groups, activeId };
}

export function StickySidebarToc(_props: StickySidebarTocProps) {
  const { groups, activeId } = useArticleToc();
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (id: string) => {
    setExpandedGroups((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside
      aria-label="Table of Contents and Sidebar Adbox"
      data-testid="sticky-sidebar"
      className="hidden lg:flex flex-col gap-4 sticky top-[88px]"
    >
      {/* 1. Static Table of Contents strictly at the TOP of the sticky sidebar */}
      <nav
        aria-label="Table of Contents"
        data-testid="sidebar-toc"
        className="rounded-2xl border border-[#E7E1EF] dark:border-[#34313E] bg-white dark:bg-[#202129] p-4 shadow-sm max-h-[calc(100vh-375px)] min-h-[200px] overflow-y-auto"
      >
        <h2 className="font-display text-xs font-extrabold uppercase tracking-wider text-[#171421] dark:text-white mb-2">
          Table of Contents
        </h2>
        <ul className="space-y-0.5">
          {groups.map((group) => {
            const isActive =
              activeId === group.id ||
              group.children.some((c) => c.id === activeId);
            const isExpanded = Boolean(expandedGroups[group.id]) || group.children.some((c) => c.id === activeId);

            return (
              <li key={group.id}>
                <div className="flex items-center justify-between gap-1">
                  <a
                    href={`#${group.id}`}
                    className={`flex-1 rounded-lg px-2 py-1 text-xs font-semibold leading-snug transition-colors ${
                      isActive
                        ? 'bg-[#7024E8]/12 dark:bg-[#7828FF]/20 text-[#7024E8] dark:text-[#DCC8FF]'
                        : 'text-[#666273] dark:text-[#B8B8C4] hover:text-[#171421] dark:hover:text-white'
                    }`}
                  >
                    {group.text}
                  </a>
                  {group.children.length > 0 && (
                    <button
                      type="button"
                      onClick={() => toggleGroup(group.id)}
                      aria-label={`Toggle subsections for ${group.text}`}
                      aria-expanded={isExpanded}
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded text-[#666273] dark:text-[#B8B8C4] hover:text-[#171421] dark:hover:text-white cursor-pointer"
                    >
                      {isExpanded ? (
                        <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                      ) : (
                        <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                      )}
                    </button>
                  )}
                </div>

                {group.children.length > 0 && isExpanded && (
                  <ul className="ml-3 mt-1 space-y-1 border-l border-[#E7E1EF] dark:border-[#34313E] pl-2.5">
                    {group.children.map((child) => (
                      <li key={child.id}>
                        <a
                          href={`#${child.id}`}
                          className={`block rounded-md px-2 py-1 text-[11px] font-medium leading-snug transition-colors ${
                            activeId === child.id
                              ? 'bg-[#7024E8]/10 dark:bg-[#7828FF]/18 text-[#7024E8] dark:text-[#DCC8FF]'
                              : 'text-[#666273] dark:text-[#B8B8C4] hover:text-[#171421] dark:hover:text-white'
                          }`}
                        >
                          {child.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 2. Adsterra 250x300 Adbox directly below Static Table of Contents */}
      <div
        aria-label="Sidebar 250x300 Advertisement Layout Slot"
        data-testid="sidebar-adbox"
        className="mx-auto flex h-[250px] w-full max-w-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#E7E1EF] dark:border-[#34313E] bg-[#F6F4FA]/75 dark:bg-[#191A20]/80 p-4 text-center"
      >
        <span className="font-mono-tabular text-[11px] font-semibold text-[#7024E8] dark:text-[#A66BFF]">
          Blogger Gadget Slot: HTML4
        </span>
        <span className="mt-1 font-display text-sm font-bold text-[#171421] dark:text-white">
          Adsterra 250x300 Adbox
        </span>
        <span className="mt-1 text-xs text-[#666273] dark:text-[#B8B8C4]">
          Positioned directly below sticky Table of Contents
        </span>
      </div>
    </aside>
  );
}

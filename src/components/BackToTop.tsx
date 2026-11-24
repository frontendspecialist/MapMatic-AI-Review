import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed right-6 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#7024E8] to-[#914CFF] dark:from-[#7828FF] dark:to-[#A66BFF] text-white shadow-[0_14px_30px_-8px_rgba(120,40,255,0.55)] transition-all duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7828FF] cursor-pointer ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}

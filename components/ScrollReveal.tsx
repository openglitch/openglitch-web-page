'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealAll = () =>
      document.querySelectorAll('.reveal').forEach((e) => e.classList.add('in'));
    if (reduce) {
      revealAll();
      return;
    }

    const check = () => {
      const h = window.innerHeight;
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.92 && r.bottom > 0) el.classList.add('in');
      });
    };

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        check();
      });
    };

    requestAnimationFrame(() => requestAnimationFrame(check));
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    const safety = window.setTimeout(revealAll, 2500);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      clearTimeout(safety);
    };
  }, []);

  return null;
}

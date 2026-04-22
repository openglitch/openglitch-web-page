'use client';

import { MouseEvent, ReactNode, useRef } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  style?: React.CSSProperties;
};

export default function MagneticBtn({ children, className, href, onClick, style }: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.setProperty('--mx', `${x * 0.18}px`);
    el.style.setProperty('--my', `${y * 0.22}px`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--mx', '0px');
    el.style.setProperty('--my', '0px');
  };

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        className={className}
        href={href}
        onClick={onClick}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      className={className}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={style}
      type="button"
    >
      {children}
    </button>
  );
}

'use client';

import { MouseEvent, useEffect, useRef, useState } from 'react';
import MagneticBtn from './MagneticBtn';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4';

function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    let raf = 0;
    let replayTimer = 0;
    const FADE = 0.5;

    const tick = () => {
      if (!v.duration || isNaN(v.duration)) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const t = v.currentTime;
      const d = v.duration;
      let op = 1;
      if (t < FADE) op = t / FADE;
      else if (t > d - FADE) op = Math.max(0, (d - t) / FADE);
      v.style.opacity = String(Math.max(0, Math.min(1, op)));
      raf = requestAnimationFrame(tick);
    };

    const onEnded = () => {
      v.style.opacity = '0';
      clearTimeout(replayTimer);
      replayTimer = window.setTimeout(() => {
        try {
          v.currentTime = 0;
          v.play();
        } catch {}
      }, 100);
    };

    v.addEventListener('ended', onEnded);
    v.play().catch(() => {});
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(replayTimer);
      v.removeEventListener('ended', onEnded);
    };
  }, []);

  return (
    <div className="hero-video-wrap" aria-hidden="true">
      <video ref={ref} className="hero-video" src={VIDEO_URL} muted playsInline preload="auto" />
    </div>
  );
}

function HeroHeadline() {
  const [ready, setReady] = useState(false);
  const glitchRef = useRef<HTMLSpanElement>(null);
  const [scrambled, setScrambled] = useState('glitch');

  useEffect(() => {
    const t = window.setTimeout(() => {
      document.querySelector('.hero')?.classList.add('hero-ready');
      setReady(true);
    }, 220);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const delay = 2 * 55 + 400;
    const start = window.setTimeout(() => {
      const el = glitchRef.current;
      if (!el) return;
      el.classList.add('scrambling');
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*<>?/\\|=+'.split('');
      const target = 'glitch';
      let frame = 0;
      const iv = window.setInterval(() => {
        frame++;
        let out = '';
        for (let i = 0; i < target.length; i++) {
          if (frame > i * 1.2) out += target[i];
          else out += chars[Math.floor(Math.random() * chars.length)].toLowerCase();
        }
        setScrambled(out);
        if (frame > target.length * 2) {
          clearInterval(iv);
          setScrambled(target);
          window.setTimeout(() => el.classList.remove('scrambling'), 50);
        }
      }, 45);
    }, delay);
    return () => clearTimeout(start);
  }, [ready]);

  type Word = { t: string; glitch?: boolean; gradient?: boolean };
  const L1: Word[] = [
    { t: 'El' },
    { t: 'glitch', glitch: true },
    { t: 'no' },
    { t: 'es' },
    { t: 'el' },
    { t: 'error.' },
  ];
  const L2: Word[] = [{ t: 'Es' }, { t: 'la' }, { t: 'señal.', gradient: true }];

  const renderWord = (w: Word, idx: number) => {
    const delay = `${idx * 55}ms`;
    if (w.glitch) {
      return (
        <span key={idx} className="hw-word" style={{ transitionDelay: delay }}>
          <span className="glitch-word gradient-text" ref={glitchRef} data-text="glitch">
            {scrambled}
          </span>
        </span>
      );
    }
    if (w.gradient) {
      return (
        <span key={idx} className="hw-word" style={{ transitionDelay: delay }}>
          <span className="gradient-text">{w.t}</span>
        </span>
      );
    }
    return (
      <span key={idx} className="hw-word" style={{ transitionDelay: delay }}>
        {w.t}
      </span>
    );
  };

  return (
    <h1 className="hero-headline-dark">
      <span className="hw-line">{L1.map((w, i) => renderWord(w, i))}</span>
      <span className="hw-line">{L2.map((w, i) => renderWord(w, i + L1.length))}</span>
    </h1>
  );
}

function HeroNav({
  scrollTo,
}: {
  scrollTo: (sel: string) => (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}) {
  return (
    <>
      <nav className="hero-nav" aria-label="Principal">
        <a href="#" className="hero-brand">
          <svg width="26" height="26" viewBox="0 0 48 48" aria-hidden="true">
            <rect x="0" y="10" width="38" height="30" rx="15" fill="#fff" opacity="0.92" />
            <rect x="6" y="15" width="26" height="20" rx="10" fill="#070311" />
            <rect x="10" y="2" width="28" height="20" rx="10" fill="#a855f7" opacity="0.95" />
            <rect x="14" y="6" width="20" height="12" rx="6" fill="#070311" />
          </svg>
          <span>
            Open<span className="glitch-w">Glitch</span>
          </span>
        </a>
        <div className="hero-nav-links">
          <a href="#tesis" onClick={scrollTo('#tesis')}>
            Tesis{' '}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
          <a href="#productos" onClick={scrollTo('#productos')}>
            Productos
          </a>
          <a href="#estudio" onClick={scrollTo('#estudio')}>
            Estudio
          </a>
          <a href="#faq" onClick={scrollTo('#faq')}>
            FAQ{' '}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </div>
        <a href="#contacto" className="hero-signup" onClick={scrollTo('#contacto')}>
          Hablemos
        </a>
      </nav>
      <div className="hero-nav-divider" aria-hidden="true" />
    </>
  );
}

function HeroMarquee() {
  const items = [
    { name: 'Vórtice', letter: 'V', bg: 'linear-gradient(135deg, #6366f1, #4f46e5)' },
    { name: 'Nimbus', letter: 'N', bg: 'linear-gradient(135deg, #a855f7, #7c3aed)' },
    { name: 'Prysma', letter: 'P', bg: 'linear-gradient(135deg, #fcd34d, #f59e0b)' },
    { name: 'Cirrus', letter: 'C', bg: 'linear-gradient(135deg, #6366f1, #a855f7)' },
    { name: 'Kynder', letter: 'K', bg: 'linear-gradient(135deg, #a855f7, #fcd34d)' },
    { name: 'Halcyn', letter: 'H', bg: 'linear-gradient(135deg, #fcd34d, #6366f1)' },
  ];
  const all = [...items, ...items];
  return (
    <div className="hero-marquee-wrap">
      <div className="hero-marquee-inner">
        <div className="hero-marquee-label">
          Aliados y estudios
          <br />
          con los que construimos
        </div>
        <div className="hero-marquee">
          <div className="hero-marquee-track">
            {all.map((it, i) => (
              <div className="hero-marquee-item" key={i}>
                <span className="hero-marquee-icon liquid-glass" style={{ background: it.bg }}>
                  {it.letter}
                </span>
                <span>{it.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const scrollTo = (sel: string) => (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <section className="hero">
      <HeroVideo />
      <div className="hero-blur-shape" aria-hidden="true" />
      <HeroNav scrollTo={scrollTo} />
      <div className="hero-main">
        <div className="hero-main-inner">
          <div className="hero-eyebrow-dark">
            <span className="dot" />
            Fábrica de producto · Colombia + Canadá
          </div>
          <HeroHeadline />
          <p className="hero-sub-dark">
            SaaS verticales con inteligencia artificial, construidos para los sectores colombianos
            que operan con herramientas que nunca fueron hechas para ellos.
          </p>
          <div className="hero-ctas-dark">
            <MagneticBtn
              className="hero-btn-glass liquid-glass"
              href="#productos"
              onClick={scrollTo('#productos')}
            >
              Qué hacemos <span aria-hidden="true">→</span>
            </MagneticBtn>
            <a href="#contacto" className="hero-link-dark" onClick={scrollTo('#contacto')}>
              Hablemos <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <HeroMarquee />
    </section>
  );
}

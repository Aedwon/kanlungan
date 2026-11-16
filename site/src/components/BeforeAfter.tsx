'use client';
import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import { Photo, photoSize } from './Photo';

// Slider A: a drag handle, Before on the left and After on the right. One component for every pair after the hero.
export function BeforeAfter({ before, after, beforeAlt, afterAlt, label, beforeLabel = 'Before', afterLabel = 'After', sizes = '(min-width: 1280px) 1100px, 100vw' }: {
  before: string; after: string; beforeAlt: string; afterAlt: string; label: string;
  beforeLabel?: string; afterLabel?: string; sizes?: string;
}) {
  const [pos, setPos] = useState(50);
  const root = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const ratio = photoSize(after).ratio;
  const set = (v: number) => setPos(Math.min(100, Math.max(0, v)));
  const fromX = (x: number) => { const b = root.current!.getBoundingClientRect(); return ((x - b.left) / b.width) * 100; };
  const down = (e: PointerEvent) => {
    if (e.button > 0) return;
    dragging.current = true;
    try { root.current?.setPointerCapture(e.pointerId); } catch { /* ignore */ }
    set(fromX(e.clientX));
  };
  const move = (e: PointerEvent) => { if (dragging.current) set(fromX(e.clientX)); };
  const up = () => { dragging.current = false; };
  const key = (e: KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 2;
    const k = e.key;
    if (k === 'ArrowLeft' || k === 'ArrowDown') set(pos - step);
    else if (k === 'ArrowRight' || k === 'ArrowUp') set(pos + step);
    else if (k === 'PageDown') set(pos - 10);
    else if (k === 'PageUp') set(pos + 10);
    else if (k === 'Home') set(0);
    else if (k === 'End') set(100);
    else return;
    e.preventDefault();
  };
  const r = Math.round(pos);
  const text = r <= 2 ? `${beforeLabel} only` : r >= 98 ? `${afterLabel} only` : `${r} percent ${beforeLabel.toLowerCase()}, ${100 - r} percent ${afterLabel.toLowerCase()}`;
  return <div ref={root} className={`cmp cmp-x${ratio > 1.5 ? ' land' : ''}`} style={{ ['--pos' as string]: pos, aspectRatio: String(ratio) }}
    role="group" aria-label={label} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up}>
    <div className="c-after"><Photo name={after} alt={afterAlt} sizes={sizes} />{pos <= 86 && <span className="chip r">{afterLabel}</span>}</div>
    <div className="c-before"><Photo name={before} alt={beforeAlt} sizes={sizes} />{pos >= 14 && <span className="chip l">{beforeLabel}</span>}</div>
    <div className="c-line"><div className="c-grab" role="slider" tabIndex={0} aria-label={`${beforeLabel} and ${afterLabel.toLowerCase()}`} aria-orientation="horizontal"
      aria-valuemin={0} aria-valuemax={100} aria-valuenow={r} aria-valuetext={text} onKeyDown={key}>
      <svg className="grab-svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5" /></svg>
    </div></div>
  </div>;
}

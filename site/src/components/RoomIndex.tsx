'use client';
import { useEffect, useRef, useState } from 'react';

// Sticky index of the rooms. A side list on desktop and a compact bar under the header on phones.
export function RoomIndex({ rooms }: { rooms: { id: string; title: string }[] }) {
  const [current, setCurrent] = useState<string | null>(null);
  const list = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const update = () => {
      const line = window.innerHeight * 0.35;
      let cur = 0;
      rooms.forEach((room, i) => { const el = document.getElementById(room.id); if (el && el.getBoundingClientRect().top < line) cur = i; });
      const first = document.getElementById(rooms[0].id);
      setCurrent(first && first.getBoundingClientRect().top < window.innerHeight * 0.6 ? rooms[cur].id : null);
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [rooms]);
  useEffect(() => {
    const ul = list.current;
    const active = ul?.querySelector<HTMLElement>('[aria-current]');
    if (ul && active && window.matchMedia('(max-width: 1279px)').matches) {
      const left = active.offsetLeft - 16;
      if (Math.abs(ul.scrollLeft - left) > 40) ul.scrollLeft = left;
    }
  }, [current]);
  return <nav className="idx" aria-label="Rooms"><ul ref={list}>{rooms.map((room) =>
    <li key={room.id}><a href={`#${room.id}`} className="t-ui" aria-current={current === room.id ? 'true' : undefined}>{room.title}</a></li>)}</ul></nav>;
}

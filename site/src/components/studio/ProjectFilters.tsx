'use client';
import { createContext, useContext, type CSSProperties, type ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';
const FilterContext = createContext({ selected: 'all', select: (value: string) => { void value; } });
export function ProjectFilters({ children }: { children: ReactNode }) {
  const params = useSearchParams();
  const requested = params.get('type')?.toLowerCase();
  const selected = requested === 'residential' || requested === 'hospitality' ? requested : 'all';
  function select(value: string) {
    const query = new URLSearchParams(params.toString());
    if (value === 'all') query.delete('type'); else query.set('type', value);
    const search = query.toString();
    window.history.pushState(null, '', `/projects${search ? `?${search}` : ''}${window.location.hash}`);
  }
  return <FilterContext.Provider value={{ selected, select }}><div className="projects-filter" data-filter={selected}>{children}</div></FilterContext.Provider>;
}
export function ProjectFilterButton({ children, style, className }: { children: ReactNode; style?: CSSProperties; className?: string }) {
  const { selected, select } = useContext(FilterContext);
  const value = String(children).toLowerCase();
  return <button type="button" className={className} style={style} aria-pressed={selected === value} onClick={() => select(value)}>{children}</button>;
}

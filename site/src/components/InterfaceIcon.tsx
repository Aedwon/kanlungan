export function InterfaceIcon({ name }: { name: 'search' | 'cart' | 'menu' | 'close' | 'back' | 'next' }) {
  return <svg width={name === 'back' || name === 'next' ? 16 : 20} height={name === 'back' || name === 'next' ? 16 : 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'search' && <><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></>}
    {name === 'cart' && <><path d="M5 8h14l-1 12H6L5 8z" /><path d="M9 8V6a3 3 0 016 0v2" /></>}
    {name === 'menu' && <path d="M4 8h16M4 16h16" />}
    {name === 'close' && <path d="M6 6l12 12M18 6L6 18" />}
    {name === 'back' && <path d="M15 6l-6 6 6 6" />}
    {name === 'next' && <path d="M9 6l6 6-6 6" />}
  </svg>;
}

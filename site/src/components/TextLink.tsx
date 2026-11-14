import Link from 'next/link';
import type { ComponentProps } from 'react';
export function TextLink({ children, className = '', ...props }: ComponentProps<typeof Link>) {
  return <Link {...props} className={`lnk text-link ${className}`}>{children} <span className="arr" aria-hidden="true">→</span></Link>;
}

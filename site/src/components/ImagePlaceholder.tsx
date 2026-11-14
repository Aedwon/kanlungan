import type { CSSProperties, ReactNode } from 'react';
export function ImagePlaceholder({ alt, className, style, children }: {
  alt: string; className?: string; style?: CSSProperties; children?: ReactNode;
}) {
  return <div role="img" aria-label={alt} className={className} style={style}>{children}</div>;
}

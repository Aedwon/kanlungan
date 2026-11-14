import Link from 'next/link';
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react';
type Variant = 'primary' | 'secondary' | 'light' | 'outline';
type Common = { variant?: Variant; className?: string; children: ReactNode };
type Props = Common & (
  | ({ href: string } & Omit<ComponentProps<typeof Link>, 'href' | keyof Common>)
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
);
export function Button(props: Props) {
  if (props.href !== undefined) {
    const { variant = 'primary', className = '', children, ...linkProps } = props;
    return <Link {...linkProps} className={`button button-${variant} ${className}`}>{children}</Link>;
  }
  const { variant = 'primary', className = '', children, ...buttonProps } = props;
  return <button type="button" {...buttonProps} className={`button button-${variant} ${className}`}>{children}</button>;
}

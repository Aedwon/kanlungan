import Link from 'next/link';
export function Logo() {
  return <Link href="/" className="logo" aria-label="Kanlungan, Home">
    <svg viewBox="0 0 100 100" width="32" height="32" aria-hidden="true">
      <rect width="100" height="100" rx="1.92" fill="#3A2A20" />
      <path d="M0 46H100V100H0Z" fill="#000" opacity=".2" />
      <g className="logo-light">
        <path d="M40 22L55 16V46H40ZM60 14L75 8V46H60Z" fill="#F2ECE3" />
        <path d="M40 46H55L34 100H13ZM60 46H75L62 100H41Z" fill="#8E4A2C" />
      </g>
    </svg><span>Kanlungan</span>
  </Link>;
}

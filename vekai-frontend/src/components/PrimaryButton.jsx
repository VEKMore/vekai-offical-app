import React from 'react';
import Link from 'next/link';

export default function PrimaryButton({ href, children, variant = 'primary', className = '', ...rest }) {
  const baseStyles = 'inline-flex items-center justify-center rounded-2xl font-black uppercase tracking-wide transition focus:outline-none focus:ring-2 focus:ring-cyberPurple/40 disabled:opacity-40 disabled:pointer-events-none';
  const variants = {
    primary: 'bg-cyberPurple text-white hover:bg-cyberPurpleSoft',
    secondary: 'border border-white/10 bg-white/5 text-white/80 hover:bg-white/10',
    accent: 'bg-cyberYellow text-cyberSurface hover:bg-cyberYellowSoft',
    danger: 'bg-red-500/80 text-white hover:bg-red-500',
  };
  const sizeClasses = 'px-6 py-3 text-sm';
  const classes = `${baseStyles} ${sizeClasses} ${variants[variant] ?? variants.primary} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

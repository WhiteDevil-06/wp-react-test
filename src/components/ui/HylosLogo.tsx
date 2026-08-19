import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HylosLogoProps {
  className?: string;
  height?: number;
  width?: number;
  showText?: boolean;
}

export const HylosLogo: React.FC<HylosLogoProps> = ({
  className = '',
  height = 36,
  width = 160,
}) => {
  return (
    <Link href="/" className={`inline-flex items-center group ${className}`}>
      <Image
        src="/hylos-logo.png"
        alt="Hylos Logo"
        width={width}
        height={height}
        className="object-contain h-9 w-auto group-hover:opacity-90 transition-opacity"
        priority
      />
    </Link>
  );
};

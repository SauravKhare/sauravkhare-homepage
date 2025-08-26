'use client';

import React from 'react';
import * as PhosphorIcons from '@phosphor-icons/react';

interface SocialIconProps {
  iconName?: string;
  size?: number;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill';
  className?: string;
  color: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  iconName,
  size = 24,
  weight = 'regular',
  className,
  color,
}) => {
  const icon = iconName;

  if (!icon) {
    console.warn('SocialIcon: No icon name provided');
    return null;
  }

  const IconComponent = PhosphorIcons[icon as keyof typeof PhosphorIcons] as any;

  if (!IconComponent) {
    console.warn(`SocialIcon: Icon "${icon}" not found in PhosphorIcons`);
    return null;
  }

  return <IconComponent size={size} weight={weight} className={className} fill={color} />;
};

export default SocialIcon;
'use client';

import React from 'react';
import * as MuiIcons from '@mui/icons-material';

interface SocialIconProps {
  iconName?: string;
  size?: number | string;
  className?: string;
  color?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  iconName,
  size = 24,
  className,
  color,
}) => {
  if (!iconName) {
    console.warn('SocialIcon: No icon name provided');
    return null;
  }

  // Retrieve the icon dynamically from the MUI Icons package
  const IconComponent = MuiIcons[iconName as keyof typeof MuiIcons] as React.ElementType;

  if (!IconComponent) {
    console.warn(`SocialIcon: Icon "${iconName}" not found in @mui/icons-material`);
    return null;
  }

  return (
    <IconComponent
      className={className}
      style={{
        fontSize: size,
        color: color || "currentColor",
        fill: color || "currentColor"
      }}
    />
  );
};

export default SocialIcon;
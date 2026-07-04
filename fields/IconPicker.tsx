"use client";

import React, { useState } from 'react';
import { useField } from '@payloadcms/ui';
import * as MuiIcons from '@mui/icons-material';

interface IconPickerProps {
  path: string;
  label?: string;
  required?: boolean;
}

// Define common icons mapped to their Material-UI equivalents
const MUI_ICONS = [
  'Facebook',
  'Twitter',
  'Instagram',
  'LinkedIn',
  'YouTube',
  'GitHub',
  'Telegram',
  'WhatsApp',
  'Reddit',
  'Pinterest',
  'Apple',
  'Android',
  'Google',
  'Email',
  'Phone',
  'LocationOn', // Equivalent to MapPin
  'Public',     // Equivalent to Globe
  'Home',
  'Person',     // Equivalent to User
  'Group',      // Equivalent to Users
  'Favorite',   // Equivalent to Heart
  'Star',
  'Share',
  'Link',
  'ArrowForward',
  'ArrowBack',
  'ArrowUpward',
  'ArrowDownward',
  'Add',        // Equivalent to Plus
  'Remove',     // Equivalent to Minus
  'Close',      // Equivalent to X
  'Check',
  'Info',
  'Warning',
  'Help',       // Equivalent to Question
  'Settings',
  'Search',
  'CalendarToday',
  'AccessTime', // Equivalent to Clock
  'Download',
  'Upload',
  'PlayArrow',
  'Pause',
  'Stop',
  'ShoppingCart',
  'CreditCard',
  'Lock',
  'Visibility',    // Equivalent to Eye
  'VisibilityOff', // Equivalent to EyeSlash
];

const IconPicker: React.FC<IconPickerProps> = ({ path, label = 'Icon', required }) => {
  const { value, setValue } = useField<string>({ path });
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  // Filter available icons based on what actually exists in MuiIcons
  const availableIcons = MUI_ICONS.filter(iconName =>
    MuiIcons[iconName as keyof typeof MuiIcons]
  );

  const filteredIcons = availableIcons.filter(name =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  const renderIcon = (iconName: string, size = 24) => {
    const IconComponent = MuiIcons[iconName as keyof typeof MuiIcons] as React.ElementType;
    // MUI icons use the style prop or fontSize prop for sizing instead of a direct size prop
    return IconComponent ? <IconComponent style={{ fontSize: size, color: '#333' }} /> : null;
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: 'bold'
      }}>
        {label} {required && '*'}
      </label>

      <div style={{ position: 'relative' }}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: '#fff',
            cursor: 'pointer',
            width: '100%'
          }}
        >
          {value ? (
            <>
              {renderIcon(value, 20)}
              <span>{value}</span>
            </>
          ) : (
            <span style={{ color: '#999' }}>Select icon...</span>
          )}
          <span style={{ marginLeft: 'auto' }}>▼</span>
        </button>

        {isOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            maxHeight: '400px',
            overflowY: 'auto',
            zIndex: 1000,
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            <input
              type="text"
              placeholder="Search icons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: 'none',
                borderBottom: '1px solid #eee',
                outline: 'none'
              }}
            />

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
              gap: '8px',
              padding: '1rem',
              maxHeight: '300px',
              overflowY: 'auto'
            }}>
              {filteredIcons.map(iconName => (
                <button
                  key={iconName}
                  type="button"
                  onClick={() => {
                    setValue(iconName);
                    setIsOpen(false);
                    setSearch('');
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px',
                    border: value === iconName ? '2px solid #0066cc' : '1px solid #eee',
                    borderRadius: '4px',
                    backgroundColor: value === iconName ? '#f0f8ff' : '#fff',
                    cursor: 'pointer',
                    fontSize: '10px',
                    textAlign: 'center',
                    color: '#333'
                  }}
                >
                  {renderIcon(iconName, 20)}
                  <span style={{ wordBreak: 'break-all' }}>
                    {iconName.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                </button>
              ))}
            </div>

            {filteredIcons.length === 0 && (
              <div style={{ padding: '1rem', textAlign: 'center', color: '#999' }}>
                No icons found
              </div>
            )}
          </div>
        )}
      </div>

      {value && (
        <button
          type="button"
          onClick={() => setValue('')}
          style={{
            marginTop: '0.5rem',
            padding: '0.25rem 0.5rem',
            fontSize: '12px',
            color: '#666',
            backgroundColor: 'transparent',
            border: '1px solid #ddd',
            borderRadius: '3px',
            cursor: 'pointer'
          }}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default IconPicker;
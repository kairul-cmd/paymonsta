'use client'

import { useMemo } from 'react'

// PayMonsta Design System - 2025 Minimalist Theme
export const theme = {
  colors: {
    // Primary palette
    background: '#181818',    // Main background
    surface: '#222222',       // Cards, panels, secondary surfaces
    primary: '#da5590',       // Main accent color (pink/magenta)
    text: '#eeeee4',         // Primary text color (off-white)
    
    // Extended palette for UI states
    textSecondary: '#a8a8a0', // Muted text
    textMuted: '#6b6b65',     // Very muted text
    border: '#333333',        // Subtle borders
    borderLight: '#2a2a2a',   // Very subtle borders
    
    // Semantic colors
    success: '#4ade80',       // Green for success states
    warning: '#fbbf24',       // Amber for warnings
    error: '#ef4444',         // Red for errors
    info: '#3b82f6',          // Blue for info
    
    // Interactive states
    primaryHover: '#e66ba3',  // Primary color hover state
    primaryActive: '#c44580', // Primary color active state
    surfaceHover: '#2a2a2a',  // Surface hover state
    
    // Modern flat design accents
    accent: '#da5590',        // Primary accent for borders and highlights
    accentMuted: '#da559020', // Accent with 12.5% opacity for subtle backgrounds
    accentBright: '#ff6bb3',  // Brighter accent for key emphasis
    
    // Border variations for modern flat design
    borderAccent: '#da5590',  // Accent color borders
    borderMuted: '#444444',   // Slightly more visible borders
  },
  
  typography: {
    // Font families following 2025 trends
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'Consolas', 'monospace'],
    },
    
    // Font sizes with fluid scaling
    fontSize: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
    },
    
    // Font weights
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    
    // Line heights for readability
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
  },
  
  spacing: {
    // Consistent spacing scale
    0: '0',
    1: '0.25rem',  // 4px
    2: '0.5rem',   // 8px
    3: '0.75rem',  // 12px
    4: '1rem',     // 16px
    5: '1.25rem',  // 20px
    6: '1.5rem',   // 24px
    8: '2rem',     // 32px
    10: '2.5rem',  // 40px
    12: '3rem',    // 48px
    16: '4rem',    // 64px
    20: '5rem',    // 80px
    24: '6rem',    // 96px
  },
  
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    default: '0.25rem', // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    full: '9999px',
  },
  
  shadows: {
    // Subtle shadows for dark theme
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  
  animation: {
    // Smooth transitions following 2025 trends
    transition: {
      fast: '150ms ease-in-out',
      normal: '250ms ease-in-out',
      slow: '350ms ease-in-out',
    },
  },
} as const

export type Theme = typeof theme

export const useTheme = () => {
  const themeWithUtils = useMemo(() => ({
    ...theme,
    
    // Utility functions
    utils: {
      // Get color with opacity
      withOpacity: (color: string, opacity: number) => {
        if (color.startsWith('#')) {
          const hex = color.slice(1)
          const r = parseInt(hex.substr(0, 2), 16)
          const g = parseInt(hex.substr(2, 2), 16)
          const b = parseInt(hex.substr(4, 2), 16)
          return `rgba(${r}, ${g}, ${b}, ${opacity})`
        }
        return color
      },
      
      // Generate consistent component styles
      getButtonStyles: (variant: 'primary' | 'secondary' | 'ghost' = 'primary') => {
        const baseStyles = {
          borderRadius: theme.borderRadius.md,
          fontWeight: theme.typography.fontWeight.medium,
          transition: theme.animation.transition.normal,
          border: 'none',
          cursor: 'pointer',
          fontSize: theme.typography.fontSize.sm,
          padding: `${theme.spacing[3]} ${theme.spacing[6]}`,
        }
        
        switch (variant) {
          case 'primary':
            return {
              ...baseStyles,
              backgroundColor: theme.colors.primary,
              color: theme.colors.text,
              '&:hover': {
                backgroundColor: theme.colors.primaryHover,
              },
              '&:active': {
                backgroundColor: theme.colors.primaryActive,
              },
            }
          case 'secondary':
            return {
              ...baseStyles,
              backgroundColor: theme.colors.surface,
              color: theme.colors.text,
              border: `1px solid ${theme.colors.border}`,
              '&:hover': {
                backgroundColor: theme.colors.surfaceHover,
              },
            }
          case 'ghost':
            return {
              ...baseStyles,
              backgroundColor: 'transparent',
              color: theme.colors.textSecondary,
              '&:hover': {
                backgroundColor: theme.colors.surfaceHover,
                color: theme.colors.text,
              },
            }
          default:
            return baseStyles
        }
      },
      
      // Generate card styles
      getCardStyles: (elevated = false) => ({
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.lg,
        border: `1px solid ${theme.colors.borderLight}`,
        padding: theme.spacing[6],
        boxShadow: elevated ? theme.shadows.md : theme.shadows.sm,
      }),
    },
  }), [])

  return themeWithUtils
}

export default useTheme

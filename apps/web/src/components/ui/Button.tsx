'use client'

import React from 'react'
import { useTheme } from '@/hooks/useTheme'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: React.ReactNode
  'aria-label'?: string
  'aria-describedby'?: string
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  children,
  className = '',
  style,
  ...props
}) => {
  const theme = useTheme()

  const sizeStyles = {
    sm: {
      '--button-padding': `${theme.spacing[2]} ${theme.spacing[4]}`,
      fontSize: theme.typography.fontSize.xs,
    } as React.CSSProperties,
    md: {
      '--button-padding': `${theme.spacing[3]} ${theme.spacing[6]}`,
      fontSize: theme.typography.fontSize.sm,
    } as React.CSSProperties,
    lg: {
      '--button-padding': `${theme.spacing[4]} ${theme.spacing[8]}`,
      fontSize: theme.typography.fontSize.base,
    } as React.CSSProperties,
  }

  const variantStyles: React.CSSProperties = (() => {
    switch (variant) {
      case 'primary':
        return {
          '--button-bg': theme.colors.primary,
          '--button-bg-hover': theme.colors.primaryHover,
          '--button-bg-active': theme.colors.primaryActive,
          '--button-border': `2px solid ${theme.colors.primary}`,
          '--button-color': theme.colors.text,
          '--button-font-weight': theme.typography.fontWeight.semibold,
        } as React.CSSProperties
      case 'secondary':
        return {
          '--button-bg': theme.colors.surface,
          '--button-bg-hover': theme.colors.surfaceHover,
          '--button-bg-active': theme.colors.surfaceHover,
          '--button-border': `2px solid ${theme.colors.border}`,
          '--button-color': theme.colors.text,
          '--button-font-weight': theme.typography.fontWeight.medium,
        } as React.CSSProperties
      case 'ghost':
        return {
          '--button-bg': 'transparent',
          '--button-bg-hover': theme.colors.surfaceHover,
          '--button-bg-active': theme.colors.surfaceHover,
          '--button-border': '2px solid transparent',
          '--button-color': theme.colors.textSecondary,
          '--button-font-weight': theme.typography.fontWeight.medium,
        } as React.CSSProperties
      default:
        return {} as React.CSSProperties
    }
  })()

  const baseStyles: React.CSSProperties = {
    '--button-border-radius': theme.borderRadius.md,
    position: 'relative',
    minWidth: size === 'sm' ? '44px' : 'auto',
    opacity: disabled || loading ? 0.6 : 1,
    ...sizeStyles[size],
    ...variantStyles,
    ...style,
  } as React.CSSProperties

  return (
    <button
      style={baseStyles}
      className={`paymonsta-button ${className}`}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <div
          className="spin"
          style={{
            width: '16px',
            height: '16px',
            border: `2px solid ${variant === 'primary' ? theme.colors.text : theme.colors.textSecondary}`,
            borderTop: '2px solid transparent',
            borderRadius: '50%',
          }}
        />
      )}
      {children}
    </button>
  )
}

export default Button

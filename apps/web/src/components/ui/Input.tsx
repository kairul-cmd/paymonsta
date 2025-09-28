'use client'

import React, { useState } from 'react'
import { useTheme } from '@/hooks/useTheme'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const theme = useTheme()
  const [isFocused, setIsFocused] = useState(false)

  const baseInputStyles: React.CSSProperties = {
    width: '100%',
    backgroundColor: theme.colors.surface,
    border: `1px solid ${error ? theme.colors.error : isFocused ? theme.colors.primary : theme.colors.border}`,
    borderRadius: theme.borderRadius.md,
    padding: `${theme.spacing[3]} ${leftIcon || rightIcon ? theme.spacing[12] : theme.spacing[4]}`,
    paddingLeft: leftIcon ? theme.spacing[12] : theme.spacing[4],
    paddingRight: rightIcon ? theme.spacing[12] : theme.spacing[4],
    fontSize: theme.typography.fontSize.sm,
    fontFamily: theme.typography.fontFamily.sans.join(', '),
    color: theme.colors.text,
    outline: 'none',
    transition: theme.animation.transition.normal,
    opacity: disabled ? 0.6 : 1,
    cursor: disabled ? 'not-allowed' : 'text',
  }

  const labelStyles: React.CSSProperties = {
    display: 'block',
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.text,
    marginBottom: theme.spacing[2],
  }

  const helperTextStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize.xs,
    color: error ? theme.colors.error : theme.colors.textSecondary,
    marginTop: theme.spacing[1],
  }

  const containerStyles: React.CSSProperties = {
    position: 'relative',
    width: '100%',
  }

  const iconStyles: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: theme.colors.textSecondary,
    pointerEvents: 'none',
    width: '16px',
    height: '16px',
  }

  const leftIconStyles: React.CSSProperties = {
    ...iconStyles,
    left: theme.spacing[4],
  }

  const rightIconStyles: React.CSSProperties = {
    ...iconStyles,
    right: theme.spacing[4],
  }

  return (
    <div className={className}>
      {label && (
        <label style={labelStyles}>
          {label}
        </label>
      )}
      
      <div style={containerStyles}>
        {leftIcon && (
          <div style={leftIconStyles}>
            {leftIcon}
          </div>
        )}
        
        <input
          style={baseInputStyles}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        
        {rightIcon && (
          <div style={rightIconStyles}>
            {rightIcon}
          </div>
        )}
      </div>
      
      {(error || helperText) && (
        <div style={helperTextStyles}>
          {error || helperText}
        </div>
      )}
    </div>
  )
}

export default Input

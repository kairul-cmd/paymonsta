import React from 'react'
import { useTheme } from '@/hooks/useTheme'

interface CardProps {
  children: React.ReactNode
  elevated?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  style?: React.CSSProperties
}

export const Card: React.FC<CardProps> = ({
  children,
  elevated = false,
  padding = 'md',
  className = '',
  onClick,
  style = {},
  ...props
}) => {
  const theme = useTheme()

  const paddingStyles = {
    none: { padding: '0' },
    sm: { padding: theme.spacing[4] },
    md: { padding: theme.spacing[6] },
    lg: { padding: theme.spacing[8] },
  }

  const baseStyles: React.CSSProperties = {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    border: `1px solid ${theme.colors.borderLight}`,
    boxShadow: elevated ? theme.shadows.md : theme.shadows.sm,
    transition: theme.animation.transition.normal,
    cursor: onClick ? 'pointer' : 'default',
    ...paddingStyles[padding],
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!onClick) return
    const target = e.currentTarget
    target.style.backgroundColor = theme.colors.surfaceHover
    target.style.borderColor = theme.colors.border
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!onClick) return
    const target = e.currentTarget
    target.style.backgroundColor = theme.colors.surface
    target.style.borderColor = theme.colors.borderLight
  }

  return (
    <div
      style={{
        ...baseStyles,
        ...style,
      }}
      className={className}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card

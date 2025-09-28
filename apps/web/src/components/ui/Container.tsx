import React from 'react'
import { useTheme } from '@/hooks/useTheme'

interface ContainerProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  className?: string
  style?: React.CSSProperties
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  padding = 'md',
  className = '',
  style = {},
}) => {
  const theme = useTheme()

  const sizeStyles = {
    sm: { maxWidth: '640px' },
    md: { maxWidth: '768px' },
    lg: { maxWidth: '1024px' },
    xl: { maxWidth: '1280px' },
    full: { maxWidth: '100%' },
  }

  const paddingStyles = {
    none: { padding: '0' },
    sm: { padding: `0 ${theme.spacing[4]}` },
    md: { padding: `0 ${theme.spacing[6]}` },
    lg: { padding: `0 ${theme.spacing[8]}` },
  }

  const baseStyles: React.CSSProperties = {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    ...sizeStyles[size],
    ...paddingStyles[padding],
  }

  return (
    <div
      style={{
        ...baseStyles,
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  )
}

export default Container

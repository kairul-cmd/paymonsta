'use client'

import Link from 'next/link'
import { useTheme } from '@/components/ui'

export function Header() {
  const theme = useTheme()

  const headerStyles: React.CSSProperties = {
    backgroundColor: theme.colors.background,
    borderBottom: `1px solid ${theme.colors.border}`,
    position: 'sticky',
    top: 0,
    zIndex: 50,
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
  }

  const containerStyles: React.CSSProperties = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: `0 ${theme.spacing[6]}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '4rem',
  }

  const logoSectionStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing[4],
  }

  const logoStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize['2xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing[2],
  }

  const logoIconStyles: React.CSSProperties = {
    width: '2rem',
    height: '2rem',
    backgroundColor: theme.colors.accent,
    borderRadius: theme.borderRadius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
  }

  const taglineStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textMuted,
    fontWeight: theme.typography.fontWeight.medium,
    letterSpacing: '0.025em',
  }

  const navStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing[1],
  }

  const navLinkStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.textSecondary,
    textDecoration: 'none',
    padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
    borderRadius: theme.borderRadius.md,
    transition: theme.animation.transition.normal,
    cursor: 'pointer',
  }

  const ctaButtonStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    backgroundColor: theme.colors.accent,
    textDecoration: 'none',
    padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
    borderRadius: theme.borderRadius.md,
    transition: theme.animation.transition.normal,
    border: 'none',
    cursor: 'pointer',
  }

  const handleNavHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = theme.colors.text
    e.currentTarget.style.backgroundColor = theme.colors.surfaceHover
  }

  const handleNavLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = theme.colors.textSecondary
    e.currentTarget.style.backgroundColor = 'transparent'
  }

  const handleCtaHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = theme.colors.primaryHover
    e.currentTarget.style.transform = 'translateY(-1px)'
  }

  const handleCtaLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = theme.colors.accent
    e.currentTarget.style.transform = 'translateY(0)'
  }

  return (
    <header style={headerStyles}>
      <div style={containerStyles}>
        {/* Logo Section */}
        <div style={logoSectionStyles}>
          <Link href="/" style={logoStyles}>
            <div style={logoIconStyles}>💰</div>
            PayMonsta
          </Link>
          <div style={taglineStyles}>
            AI Bank Statement Score Analyzer
          </div>
        </div>

        {/* Navigation */}
        <nav style={navStyles}>
          <Link
            href="#features"
            style={navLinkStyles}
            onMouseEnter={handleNavHover}
            onMouseLeave={handleNavLeave}
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            style={navLinkStyles}
            onMouseEnter={handleNavHover}
            onMouseLeave={handleNavLeave}
          >
            How it Works
          </Link>
          <Link
            href="#security"
            style={navLinkStyles}
            onMouseEnter={handleNavHover}
            onMouseLeave={handleNavLeave}
          >
            Security
          </Link>
          <Link
            href="#contact"
            style={ctaButtonStyles}
            onMouseEnter={handleCtaHover}
            onMouseLeave={handleCtaLeave}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  )
}
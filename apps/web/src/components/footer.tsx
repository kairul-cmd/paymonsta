'use client'

import Link from 'next/link'
import { useTheme } from '@/components/ui'
import { Github, Mail } from 'lucide-react'

export function Footer() {
  const theme = useTheme()

  const footerStyles: React.CSSProperties = {
    backgroundColor: theme.colors.surface,
    borderTop: `1px solid ${theme.colors.borderMuted}`,
    padding: '32px 0 24px 0',
    marginTop: 'auto',
  }

  const containerStyles: React.CSSProperties = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 24px',
  }

  const mainContentStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '32px',
    alignItems: 'center',
    marginBottom: '24px',
  }

  const brandingStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    fontWeight: theme.typography.fontWeight.medium,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  }

  const flagStyles: React.CSSProperties = {
    fontSize: '1.2rem',
  }

  const linksContainerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    flexWrap: 'wrap',
  }

  const linkStyles: React.CSSProperties = {
    color: theme.colors.textSecondary,
    textDecoration: 'none',
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    padding: '4px 8px',
    borderRadius: '6px',
    transition: 'all 0.2s ease-in-out',
  }

  const socialContainerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '16px',
    alignItems: 'center',
  }

  const socialLinkStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: theme.colors.textSecondary,
    textDecoration: 'none',
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    padding: '6px 10px',
    borderRadius: '8px',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
  }

  const iconStyles: React.CSSProperties = {
    width: '16px',
    height: '16px',
  }

  const copyrightStyles: React.CSSProperties = {
    textAlign: 'center',
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.textMuted,
    paddingTop: '16px',
    borderTop: `1px solid ${theme.colors.borderMuted}`,
  }

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = theme.colors.text
    e.currentTarget.style.backgroundColor = theme.colors.surfaceHover
  }

  const handleLinkLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = theme.colors.textSecondary
    e.currentTarget.style.backgroundColor = 'transparent'
  }

  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <div style={mainContentStyles}>
          {/* Left - Malaysian branding */}
          <div style={brandingStyles}>
            <span style={flagStyles}>🇲🇾</span>
            Made by Malaysian for Malaysian
          </div>

          {/* Center - Quick links */}
          <div style={linksContainerStyles}>
            <Link
              href="/privacy"
              style={linkStyles}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Privacy
            </Link>
            <Link
              href="/security"
              style={linkStyles}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Security
            </Link>
            <Link
              href="/features"
              style={linkStyles}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Features
            </Link>
          </div>

          {/* Right - Social links */}
          <div style={socialContainerStyles}>
            <a
              href="mailto:hello@paymonsta.com"
              style={socialLinkStyles}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <Mail style={iconStyles} />
              Contact
            </a>
            <a
              href="https://github.com/kairul-cmd/paymonsta"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyles}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <Github style={iconStyles} />
              GitHub
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div style={copyrightStyles}>
          © {new Date().getFullYear()} PayMonsta. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

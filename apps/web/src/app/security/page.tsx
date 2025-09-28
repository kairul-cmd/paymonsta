'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Container, useTheme } from '@/components/ui'
import { Shield, FolderOpen, Bot, XCircle, Lock, User, FileCheck, MessageCircle } from 'lucide-react'

export default function SecurityPage() {
  const theme = useTheme()

  const handleSectionHover = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    e.currentTarget.style.transform = 'translateY(-2px)'
  }

  const handleSectionLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
    e.currentTarget.style.transform = 'translateY(0)'
  }

  const mainStyles: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: theme.colors.background,
  }

  const heroStyles: React.CSSProperties = {
    textAlign: 'center',
    paddingTop: theme.spacing[20],
    paddingBottom: theme.spacing[12],
    borderBottom: `1px solid ${theme.colors.borderMuted}`,
  }

  const titleStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize['4xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing[4],
    lineHeight: 1.2,
  }

  const subtitleStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize.xl,
    color: theme.colors.textSecondary,
    maxWidth: '48rem',
    margin: '0 auto',
    lineHeight: 1.6,
  }

  const contentStyles: React.CSSProperties = {
    paddingTop: theme.spacing[16],
    paddingBottom: theme.spacing[16],
  }

  const sectionStyles: React.CSSProperties = {
    marginBottom: theme.spacing[8],
    backgroundColor: theme.colors.surface,
    borderRadius: '16px',
    padding: theme.spacing[10],
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    border: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'default',
  }

  const sectionTitleStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize['2xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing[6],
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing[4],
    letterSpacing: '-0.025em',
  }

  const sectionContentStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.textSecondary,
    lineHeight: 1.8,
    marginBottom: theme.spacing[5],
    letterSpacing: '0.01em',
  }

  const listStyles: React.CSSProperties = {
    paddingLeft: theme.spacing[6],
    color: theme.colors.textSecondary,
    lineHeight: 1.8,
    listStyleType: 'none',
  }

  const listItemStyles: React.CSSProperties = {
    marginBottom: theme.spacing[3],
    position: 'relative',
    paddingLeft: theme.spacing[6],
  }

  const highlightStyles: React.CSSProperties = {
    color: theme.colors.accent,
    fontWeight: theme.typography.fontWeight.semibold,
  }

  const iconStyles: React.CSSProperties = {
    width: '24px',
    height: '24px',
    color: theme.colors.accent,
    flexShrink: 0,
  }

  return (
    <main style={mainStyles}>
      <Header />
      
      {/* Hero Section */}
      <div style={heroStyles}>
        <Container size="lg" padding="md">
          <h1 style={titleStyles}>Security & Data Protection</h1>
          <p style={subtitleStyles}>
            Your financial data security is our top priority. Learn how we protect your information 
            with enterprise-grade security measures and zero data storage policies.
          </p>
        </Container>
      </div>

      {/* Content Sections */}
      <Container size="lg" padding="md">
        <div style={contentStyles}>
          
          {/* Data Security Overview */}
          <section 
            style={sectionStyles}
            onMouseEnter={handleSectionHover}
            onMouseLeave={handleSectionLeave}
          >
            <h2 style={sectionTitleStyles}>
              <Shield style={iconStyles} />
              Data Security Overview
            </h2>
            <p style={sectionContentStyles}>
              PayMonsta employs <span style={highlightStyles}>bank-level security</span> to protect your financial information. 
              Our AI-powered analysis system processes your data with the highest security standards while ensuring 
              <span style={highlightStyles}> zero permanent storage</span> of sensitive information.
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}>
                <span style={{position: 'absolute', left: '0', color: theme.colors.accent, fontWeight: 'bold'}}>•</span>
                End-to-end encryption for all data transmission
              </li>
              <li style={listItemStyles}>
                <span style={{position: 'absolute', left: '0', color: theme.colors.accent, fontWeight: 'bold'}}>•</span>
                Temporary processing with immediate data deletion
              </li>
              <li style={listItemStyles}>
                <span style={{position: 'absolute', left: '0', color: theme.colors.accent, fontWeight: 'bold'}}>•</span>
                No database storage of sensitive financial information
              </li>
              <li style={listItemStyles}>
                <span style={{position: 'absolute', left: '0', color: theme.colors.accent, fontWeight: 'bold'}}>•</span>
                SOC 2 Type II compliant infrastructure
              </li>
            </ul>
          </section>

          {/* Secure File Processing */}
          <section 
            style={sectionStyles}
            onMouseEnter={handleSectionHover}
            onMouseLeave={handleSectionLeave}
          >
            <h2 style={sectionTitleStyles}>
              <FolderOpen style={iconStyles} />
              Secure File Processing
            </h2>
            <p style={sectionContentStyles}>
              Your bank statements are processed using <span style={highlightStyles}>secure, isolated environments</span> 
              that ensure your data never leaves our protected systems during analysis.
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}>Files encrypted during upload using AES-256 encryption</li>
              <li style={listItemStyles}>Processing in isolated, secure containers</li>
              <li style={listItemStyles}>Automatic file deletion after analysis completion</li>
              <li style={listItemStyles}>No file caching or temporary storage on servers</li>
              <li style={listItemStyles}>Virus and malware scanning before processing</li>
            </ul>
          </section>

          {/* AI Analysis Security */}
          <section 
            style={sectionStyles}
            onMouseEnter={handleSectionHover}
            onMouseLeave={handleSectionLeave}
          >
            <h2 style={sectionTitleStyles}>
              <Bot style={iconStyles} />
              AI Analysis Security
            </h2>
            <p style={sectionContentStyles}>
              Our AI models are designed with <span style={highlightStyles}>privacy-first principles</span>, 
              ensuring your financial patterns and data remain confidential throughout the analysis process.
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}>On-premises AI processing with no external data sharing</li>
              <li style={listItemStyles}>Anonymized data processing for pattern recognition</li>
              <li style={listItemStyles}>No model training on user data</li>
              <li style={listItemStyles}>Secure API endpoints with rate limiting</li>
              <li style={listItemStyles}>Real-time analysis with immediate result delivery</li>
            </ul>
          </section>

          {/* Zero Data Storage Policy */}
          <section 
            style={sectionStyles}
            onMouseEnter={handleSectionHover}
            onMouseLeave={handleSectionLeave}
          >
            <h2 style={sectionTitleStyles}>
              <XCircle style={iconStyles} />
              Zero Data Storage Policy
            </h2>
            <p style={sectionContentStyles}>
              We maintain a strict <span style={highlightStyles}>no-storage policy</span> for all sensitive financial data. 
              Your information is processed and immediately discarded, ensuring maximum privacy protection.
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}>No database storage of bank statements or financial data</li>
              <li style={listItemStyles}>Analysis results provided in real-time without storage</li>
              <li style={listItemStyles}>Automatic memory clearing after each session</li>
              <li style={listItemStyles}>No user account creation required</li>
              <li style={listItemStyles}>No tracking or profiling of user behavior</li>
            </ul>
          </section>

          {/* Encryption Standards */}
          <section 
            style={sectionStyles}
            onMouseEnter={handleSectionHover}
            onMouseLeave={handleSectionLeave}
          >
            <h2 style={sectionTitleStyles}>
              <Lock style={iconStyles} />
              Encryption Standards
            </h2>
            <p style={sectionContentStyles}>
              All data transmission and processing uses <span style={highlightStyles}>military-grade encryption</span> 
              to ensure your information remains secure at every step.
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}>TLS 1.3 encryption for all web communications</li>
              <li style={listItemStyles}>AES-256 encryption for file processing</li>
              <li style={listItemStyles}>RSA-4096 key exchange protocols</li>
              <li style={listItemStyles}>Perfect Forward Secrecy (PFS) implementation</li>
              <li style={listItemStyles}>Regular security audits and penetration testing</li>
            </ul>
          </section>

          {/* User Safety Guidelines */}
          <section 
            style={sectionStyles}
            onMouseEnter={handleSectionHover}
            onMouseLeave={handleSectionLeave}
          >
            <h2 style={sectionTitleStyles}>
              <User style={iconStyles} />
              User Safety Guidelines
            </h2>
            <p style={sectionContentStyles}>
              Follow these <span style={highlightStyles}>best practices</span> to ensure maximum security 
              when using PayMonsta for your financial analysis.
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}>Only upload bank statements from secure, trusted devices</li>
              <li style={listItemStyles}>Ensure your internet connection is secure (avoid public Wi-Fi)</li>
              <li style={listItemStyles}>Verify the URL shows &quot;https://&quot; before uploading files</li>
              <li style={listItemStyles}>Close your browser session after completing analysis</li>
              <li style={listItemStyles}>Never share analysis results containing sensitive information</li>
            </ul>
          </section>

          {/* Compliance & Standards */}
          <section 
            style={sectionStyles}
            onMouseEnter={handleSectionHover}
            onMouseLeave={handleSectionLeave}
          >
            <h2 style={sectionTitleStyles}>
              <FileCheck style={iconStyles} />
              Compliance & Standards
            </h2>
            <p style={sectionContentStyles}>
              PayMonsta adheres to <span style={highlightStyles}>international security standards</span> 
              and regulatory requirements to ensure the highest level of data protection.
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}>GDPR compliant data processing practices</li>
              <li style={listItemStyles}>PCI DSS Level 1 security standards</li>
              <li style={listItemStyles}>ISO 27001 information security management</li>
              <li style={listItemStyles}>Bank Negara Malaysia (BNM) regulatory alignment</li>
              <li style={listItemStyles}>Regular third-party security assessments</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section 
            style={sectionStyles}
            onMouseEnter={handleSectionHover}
            onMouseLeave={handleSectionLeave}
          >
            <h2 style={sectionTitleStyles}>
              <MessageCircle style={iconStyles} />
              Security Questions?
            </h2>
            <p style={sectionContentStyles}>
              Have questions about our security practices? Our security team is here to help.
            </p>
            <p style={sectionContentStyles}>
              <span style={highlightStyles}>Email:</span> security@paymonsta.com<br />
              <span style={highlightStyles}>Response Time:</span> Within 24 hours<br />
              <span style={highlightStyles}>Security Reports:</span> security-reports@paymonsta.com
            </p>
          </section>

        </div>
      </Container>
      <Footer />
    </main>
  )
}

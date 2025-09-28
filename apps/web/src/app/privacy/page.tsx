'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Container, useTheme } from '@/components/ui'
import { FileText, BarChart3, Settings, Bot, Clock, User, Globe, Link, Map, RefreshCw, MessageCircle } from 'lucide-react'

export default function PrivacyPage() {
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

  const lastUpdatedStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textMuted,
    fontStyle: 'italic',
    marginBottom: theme.spacing[8],
  }

  return (
    <main style={mainStyles}>
      <Header />
      
      {/* Hero Section */}
      <div style={heroStyles}>
        <Container size="lg" padding="md">
          <h1 style={titleStyles}>Privacy Policy</h1>
          <p style={subtitleStyles}>
            We are committed to protecting your privacy and ensuring transparency in how we handle your data. 
            This policy explains our privacy practices for the PayMonsta service.
          </p>
          <p style={lastUpdatedStyles}>Last updated: September 28, 2025</p>
        </Container>
      </div>

      {/* Content Sections */}
      <Container size="lg" padding="md">
        <div style={contentStyles}>
          
          {/* Overview */}
          <section 
            style={sectionStyles}
            onMouseEnter={handleSectionHover}
            onMouseLeave={handleSectionLeave}
          >
            <h2 style={sectionTitleStyles}>
              <FileText style={iconStyles} />
              Privacy Overview
            </h2>
            <p style={sectionContentStyles}>
              PayMonsta is an <span style={highlightStyles}>AI-powered bank statement analyzer</span> that provides 
              financial insights without storing your sensitive data. We process your information temporarily 
              and <span style={highlightStyles}>immediately delete it</span> after analysis completion.
            </p>
            <p style={sectionContentStyles}>
              <strong>Key Privacy Principles:</strong>
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}>
                <span style={{position: 'absolute', left: '0', color: theme.colors.accent, fontWeight: 'bold'}}>•</span>
                No permanent storage of financial data
              </li>
              <li style={listItemStyles}>
                <span style={{position: 'absolute', left: '0', color: theme.colors.accent, fontWeight: 'bold'}}>•</span>
                Temporary processing only
              </li>
              <li style={listItemStyles}>
                <span style={{position: 'absolute', left: '0', color: theme.colors.accent, fontWeight: 'bold'}}>•</span>
                No user accounts or personal profiles
              </li>
              <li style={listItemStyles}>
                <span style={{position: 'absolute', left: '0', color: theme.colors.accent, fontWeight: 'bold'}}>•</span>
                Minimal data collection
              </li>
              <li style={listItemStyles}>
                <span style={{position: 'absolute', left: '0', color: theme.colors.accent, fontWeight: 'bold'}}>•</span>
                Full transparency in data handling
              </li>
            </ul>
          </section>

          {/* Information Collection */}
          <section 
            style={sectionStyles}
            onMouseEnter={handleSectionHover}
            onMouseLeave={handleSectionLeave}
          >
            <h2 style={sectionTitleStyles}>
              <BarChart3 style={iconStyles} />
              Information We Collect
            </h2>
            <p style={sectionContentStyles}>
              We collect only the <span style={highlightStyles}>minimum information necessary</span> to provide 
              our AI analysis service. Here&apos;s what we collect and why:
            </p>
            
            <h3 style={{...sectionTitleStyles, fontSize: theme.typography.fontSize.xl, marginTop: theme.spacing[6]}}>
              Bank Statement Data (Temporary)
            </h3>
            <ul style={listStyles}>
              <li style={listItemStyles}>Transaction history and patterns</li>
              <li style={listItemStyles}>Account balance information</li>
              <li style={listItemStyles}>Income and expense categorization</li>
              <li style={listItemStyles}>Financial behavior patterns</li>
            </ul>

            <h3 style={{...sectionTitleStyles, fontSize: theme.typography.fontSize.xl, marginTop: theme.spacing[6]}}>
              Technical Information
            </h3>
            <ul style={listStyles}>
              <li style={listItemStyles}>IP address (for security purposes)</li>
              <li style={listItemStyles}>Browser type and version</li>
              <li style={listItemStyles}>Device information (for optimization)</li>
              <li style={listItemStyles}>Session data (temporary)</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section style={sectionStyles}>
            <h2 style={sectionTitleStyles}>
              <Settings style={iconStyles} />
              How We Use Your Information
            </h2>
            <p style={sectionContentStyles}>
              Your information is used <span style={highlightStyles}>exclusively for AI analysis</span> and 
              providing you with financial insights. We do not use your data for any other purposes.
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}>Generate your personalized credit score analysis</li>
              <li style={listItemStyles}>Provide financial health recommendations</li>
              <li style={listItemStyles}>Identify spending patterns and trends</li>
              <li style={listItemStyles}>Ensure service security and prevent fraud</li>
              <li style={listItemStyles}>Improve our AI models (using anonymized, aggregated data only)</li>
            </ul>
          </section>

          {/* Data Processing and AI Analysis */}
          <section style={sectionStyles}>
            <h2 style={sectionTitleStyles}>
              <Bot style={iconStyles} />
              Data Processing & AI Analysis
            </h2>
            <p style={sectionContentStyles}>
              Our AI analysis process is designed with <span style={highlightStyles}>privacy by design</span> principles:
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}><strong>Real-time Processing:</strong> Analysis happens immediately upon upload</li>
              <li style={listItemStyles}><strong>Isolated Environment:</strong> Processing occurs in secure, isolated containers</li>
              <li style={listItemStyles}><strong>No Model Training:</strong> Your data is never used to train our AI models</li>
              <li style={listItemStyles}><strong>Anonymized Analysis:</strong> Personal identifiers are removed during processing</li>
              <li style={listItemStyles}><strong>Immediate Deletion:</strong> All data is deleted within minutes of analysis completion</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section style={sectionStyles}>
            <h2 style={sectionTitleStyles}>
              <Clock style={iconStyles} />
              Data Retention Policy
            </h2>
            <p style={sectionContentStyles}>
              We maintain a <span style={highlightStyles}>zero retention policy</span> for sensitive financial data:
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}><strong>Bank Statement Data:</strong> Deleted immediately after analysis (within 5 minutes)</li>
              <li style={listItemStyles}><strong>Analysis Results:</strong> Provided to you in real-time, not stored on our servers</li>
              <li style={listItemStyles}><strong>Session Data:</strong> Cleared when you close your browser session</li>
              <li style={listItemStyles}><strong>Technical Logs:</strong> Anonymized logs kept for 30 days for security purposes only</li>
              <li style={listItemStyles}><strong>No User Profiles:</strong> We don&apos;t create or maintain user accounts or profiles</li>
            </ul>
          </section>

          {/* User Rights */}
          <section style={sectionStyles}>
            <h2 style={sectionTitleStyles}>
              <User style={iconStyles} />
              Your Rights
            </h2>
            <p style={sectionContentStyles}>
              You have the following rights regarding your data:
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}><strong>Right to Information:</strong> This privacy policy provides full transparency</li>
              <li style={listItemStyles}><strong>Right to Access:</strong> Since we don&apos;t store data, there&apos;s nothing to access after analysis</li>
              <li style={listItemStyles}><strong>Right to Deletion:</strong> Data is automatically deleted - no action needed</li>
              <li style={listItemStyles}><strong>Right to Portability:</strong> Analysis results are provided to you directly</li>
              <li style={listItemStyles}><strong>Right to Object:</strong> Simply don&apos;t use our service if you object to processing</li>
            </ul>
          </section>

          {/* Cookies and Tracking */}
          <section style={sectionStyles}>
            <h2 style={sectionTitleStyles}>
              <Globe style={iconStyles} />
              Cookies & Tracking
            </h2>
            <p style={sectionContentStyles}>
              We use <span style={highlightStyles}>minimal cookies</span> and tracking technologies:
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li style={listItemStyles}><strong>Session Cookies:</strong> Temporary cookies deleted when you close your browser</li>
              <li style={listItemStyles}><strong>No Tracking Cookies:</strong> We don&apos;t use advertising or tracking cookies</li>
              <li style={listItemStyles}><strong>No Third-Party Tracking:</strong> We don&apos;t share data with advertising networks</li>
              <li style={listItemStyles}><strong>Analytics:</strong> Basic, anonymized usage statistics only</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section style={sectionStyles}>
            <h2 style={sectionTitleStyles}>
              <Link style={iconStyles} />
              Third-Party Services
            </h2>
            <p style={sectionContentStyles}>
              We use select third-party services that meet our <span style={highlightStyles}>strict privacy standards</span>:
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}><strong>Cloud Infrastructure:</strong> Secure, compliant cloud providers for processing</li>
              <li style={listItemStyles}><strong>AI Processing:</strong> Our own AI models hosted on secure infrastructure</li>
              <li style={listItemStyles}><strong>Security Services:</strong> DDoS protection and security monitoring</li>
              <li style={listItemStyles}><strong>No Data Sharing:</strong> We never share your financial data with third parties</li>
            </ul>
          </section>

          {/* International Transfers */}
          <section style={sectionStyles}>
            <h2 style={sectionTitleStyles}>
              <Map style={iconStyles} />
              International Data Transfers
            </h2>
            <p style={sectionContentStyles}>
              Your data processing is handled with <span style={highlightStyles}>geographic considerations</span>:
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}>Processing occurs in secure data centers with appropriate safeguards</li>
              <li style={listItemStyles}>All transfers comply with applicable data protection laws</li>
              <li style={listItemStyles}>Data is encrypted during any transfers</li>
              <li style={listItemStyles}>No permanent storage outside of processing requirements</li>
            </ul>
          </section>

          {/* Policy Updates */}
          <section style={sectionStyles}>
            <h2 style={sectionTitleStyles}>
              <RefreshCw style={iconStyles} />
              Policy Updates
            </h2>
            <p style={sectionContentStyles}>
              We may update this privacy policy to reflect changes in our practices or legal requirements:
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}>Updates will be posted on this page with a new &quot;last updated&quot; date</li>
              <li style={listItemStyles}>Material changes will be highlighted prominently</li>
              <li style={listItemStyles}>Continued use of our service constitutes acceptance of updates</li>
              <li style={listItemStyles}>You can always review the current policy on our website</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section style={sectionStyles}>
            <h2 style={sectionTitleStyles}>
              <MessageCircle style={iconStyles} />
              Contact Us
            </h2>
            <p style={sectionContentStyles}>
              If you have questions about this privacy policy or our data practices:
            </p>
            <p style={sectionContentStyles}>
              <span style={highlightStyles}>Email:</span> privacy@paymonsta.com<br />
              <span style={highlightStyles}>Response Time:</span> Within 48 hours<br />
              <span style={highlightStyles}>Data Protection Officer:</span> dpo@paymonsta.com<br />
              <span style={highlightStyles}>Address:</span> PayMonsta Team, Kuala Lumpur, Malaysia
            </p>
            <p style={sectionContentStyles}>
              For security-related inquiries, please use: security@paymonsta.com
            </p>
          </section>

        </div>
      </Container>
      <Footer />
    </main>
  )
}

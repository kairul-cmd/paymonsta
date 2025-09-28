'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Container, useTheme } from '@/components/ui'
import { 
  Brain, 
  Calculator, 
  Lightbulb, 
  Zap, 
  Shield, 
  MapPin,
  FileText,
  BarChart3,
  AlertTriangle,
  Clock,
  Receipt,
  Building2,
  TrendingUp,
  Download,
  ArrowRight,
  Sparkles
} from 'lucide-react'

export default function FeaturesPage() {
  const theme = useTheme()

  const handleSectionHover = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    e.currentTarget.style.transform = 'translateY(-4px)'
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
    paddingBottom: theme.spacing[16],
    borderBottom: `1px solid ${theme.colors.borderMuted}`,
  }

  const titleStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize['4xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing[4],
    lineHeight: 1.2,
    letterSpacing: '-0.025em',
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

  const sectionTitleStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize['3xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing[3],
    textAlign: 'center',
    letterSpacing: '-0.025em',
  }

  const sectionSubtitleStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize.lg,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: theme.spacing[12],
    maxWidth: '42rem',
    margin: `0 auto ${theme.spacing[12]}px auto`,
    lineHeight: 1.6,
  }

  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: theme.spacing[6],
    marginBottom: theme.spacing[16],
  }

  const responsiveGridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 30vw, 320px), 1fr))',
    gap: 'clamp(1.25rem, 2.5vw, 1.5rem)', // Responsive gap that scales between theme.spacing[5] and theme.spacing[6]
    marginBottom: theme.spacing[16],
  }

  const featureCardStyles: React.CSSProperties = {
    backgroundColor: theme.colors.surface,
    borderRadius: '16px',
    padding: theme.spacing[8],
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    border: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'default',
    position: 'relative',
  }

  const iconStyles: React.CSSProperties = {
    width: '48px',
    height: '48px',
    color: theme.colors.accent,
    marginBottom: theme.spacing[4],
    flexShrink: 0,
  }

  const featureTitleStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing[3],
    lineHeight: 1.3,
  }

  const featureDescriptionStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.textSecondary,
    lineHeight: 1.7,
    letterSpacing: '0.01em',
  }

  const upcomingBadgeStyles: React.CSSProperties = {
    position: 'absolute',
    top: theme.spacing[4],
    right: theme.spacing[4],
    backgroundColor: theme.colors.accent,
    color: theme.colors.background,
    fontSize: theme.typography.fontSize.xs,
    fontWeight: theme.typography.fontWeight.semibold,
    padding: `${theme.spacing[1]} ${theme.spacing[3]}`,
    borderRadius: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  }

  const ctaStyles: React.CSSProperties = {
    backgroundColor: theme.colors.surface,
    borderRadius: '20px',
    padding: theme.spacing[12],
    textAlign: 'center',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    marginTop: theme.spacing[16],
  }

  const ctaButtonStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spacing[2],
    backgroundColor: theme.colors.accent,
    color: theme.colors.background,
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    padding: `${theme.spacing[4]} ${theme.spacing[8]}`,
    borderRadius: '12px',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    marginTop: theme.spacing[6],
  }

  const highlightStyles: React.CSSProperties = {
    color: theme.colors.accent,
    fontWeight: theme.typography.fontWeight.semibold,
  }

  return (
    <main style={mainStyles}>
      <Header />
      
      {/* Hero Section */}
      <div style={heroStyles}>
        <Container size="lg" padding="md">
          <h1 style={titleStyles}>
            Powerful Features for <span style={highlightStyles}>Smart Financial Analysis</span>
          </h1>
          <p style={subtitleStyles}>
            Discover how PayMonsta&apos;s AI-powered tools help you understand your financial health, 
            improve your credit score, and make better financial decisions.
          </p>
        </Container>
      </div>

      {/* Content Sections */}
      <Container size="lg" padding="md">
        <div style={contentStyles}>
          
          {/* Core Features */}
          <section>
            <h2 style={sectionTitleStyles}>Core Features</h2>
            <p style={sectionSubtitleStyles}>
              Advanced AI technology meets Malaysian banking expertise to deliver 
              comprehensive financial insights in seconds.
            </p>
            
            <div style={gridStyles}>
              <div 
                style={featureCardStyles}
                onMouseEnter={handleSectionHover}
                onMouseLeave={handleSectionLeave}
              >
                <Brain style={iconStyles} />
                <h3 style={featureTitleStyles}>AI Bank Statement Analysis</h3>
                <p style={featureDescriptionStyles}>
                  Upload your PDF bank statement and let our advanced AI analyze your financial patterns, 
                  transaction history, and spending behavior with 99.9% accuracy.
                </p>
              </div>

              <div 
                style={featureCardStyles}
                onMouseEnter={handleSectionHover}
                onMouseLeave={handleSectionLeave}
              >
                <Calculator style={iconStyles} />
                <h3 style={featureTitleStyles}>Credit Score Calculation</h3>
                <p style={featureDescriptionStyles}>
                  Get your bank statement score on a 1-850 scale with detailed breakdowns of 
                  factors affecting your creditworthiness and financial health.
                </p>
              </div>

              <div 
                style={featureCardStyles}
                onMouseEnter={handleSectionHover}
                onMouseLeave={handleSectionLeave}
              >
                <Lightbulb style={iconStyles} />
                <h3 style={featureTitleStyles}>Smart Recommendations</h3>
                <p style={featureDescriptionStyles}>
                  Receive personalized, actionable advice to improve your financial health, 
                  increase your credit score, and optimize your spending patterns.
                </p>
              </div>

              <div 
                style={featureCardStyles}
                onMouseEnter={handleSectionHover}
                onMouseLeave={handleSectionLeave}
              >
                <Zap style={iconStyles} />
                <h3 style={featureTitleStyles}>Real-time Processing</h3>
                <p style={featureDescriptionStyles}>
                  Get instant results in under 30 seconds. Our optimized AI engine processes 
                  your data quickly without compromising on accuracy or security.
                </p>
              </div>

              <div 
                style={featureCardStyles}
                onMouseEnter={handleSectionHover}
                onMouseLeave={handleSectionLeave}
              >
                <Shield style={iconStyles} />
                <h3 style={featureTitleStyles}>Secure Processing</h3>
                <p style={featureDescriptionStyles}>
                  Your data is processed securely and never stored permanently. We use 
                  bank-level encryption and delete all information immediately after analysis.
                </p>
              </div>

              <div 
                style={featureCardStyles}
                onMouseEnter={handleSectionHover}
                onMouseLeave={handleSectionLeave}
              >
                <MapPin style={iconStyles} />
                <h3 style={featureTitleStyles}>Malaysian Banking Support</h3>
                <p style={featureDescriptionStyles}>
                  Specifically tailored for Malaysian banking patterns, transaction types, 
                  and financial practices to provide the most accurate local insights.
                </p>
              </div>
            </div>
          </section>

          {/* Analysis Features */}
          <section>
            <h2 style={sectionTitleStyles}>Advanced Analysis</h2>
            <p style={sectionSubtitleStyles}>
              Deep dive into your financial data with comprehensive metrics and 
              intelligent risk assessment capabilities.
            </p>
            
            <div style={gridStyles}>
              <div 
                style={featureCardStyles}
                onMouseEnter={handleSectionHover}
                onMouseLeave={handleSectionLeave}
              >
                <FileText style={iconStyles} />
                <h3 style={featureTitleStyles}>Transaction Parsing</h3>
                <p style={featureDescriptionStyles}>
                  Automatically extract and categorize transactions from PDF statements 
                  with intelligent recognition of Malaysian banking formats.
                </p>
              </div>

              <div 
                style={featureCardStyles}
                onMouseEnter={handleSectionHover}
                onMouseLeave={handleSectionLeave}
              >
                <BarChart3 style={iconStyles} />
                <h3 style={featureTitleStyles}>Financial Metrics</h3>
                <p style={featureDescriptionStyles}>
                  Comprehensive breakdown of income, expenses, savings rate, debt-to-income 
                  ratio, and other key financial health indicators.
                </p>
              </div>

              <div 
                style={featureCardStyles}
                onMouseEnter={handleSectionHover}
                onMouseLeave={handleSectionLeave}
              >
                <AlertTriangle style={iconStyles} />
                <h3 style={featureTitleStyles}>Risk Assessment</h3>
                <p style={featureDescriptionStyles}>
                  Identify potential financial risks and positive factors affecting your 
                  creditworthiness with detailed explanations and improvement suggestions.
                </p>
              </div>

              <div 
                style={featureCardStyles}
                onMouseEnter={handleSectionHover}
                onMouseLeave={handleSectionLeave}
              >
                <Clock style={iconStyles} />
                <h3 style={featureTitleStyles}>Payment Consistency Scoring</h3>
                <p style={featureDescriptionStyles}>
                  Track your payment patterns and consistency over time to understand 
                  how your financial behavior impacts your overall credit profile.
                </p>
              </div>
            </div>
          </section>

          {/* Upcoming Features */}
          <section>
            <h2 style={sectionTitleStyles}>Coming Soon</h2>
            <p style={sectionSubtitleStyles}>
              Exciting new features in development to make PayMonsta your complete 
              financial analysis and management platform.
            </p>
            
            <div style={gridStyles}>
              <div 
                style={{...featureCardStyles, position: 'relative'}}
                onMouseEnter={handleSectionHover}
                onMouseLeave={handleSectionLeave}
              >
                <div style={upcomingBadgeStyles}>Coming Soon</div>
                <Receipt style={iconStyles} />
                <h3 style={featureTitleStyles}>Invoice Maker</h3>
                <p style={featureDescriptionStyles}>
                  Create professional invoices with automated calculations, customizable templates, 
                  and seamless integration with your financial analysis data.
                </p>
              </div>

              <div 
                style={{...featureCardStyles, position: 'relative'}}
                onMouseEnter={handleSectionHover}
                onMouseLeave={handleSectionLeave}
              >
                <div style={upcomingBadgeStyles}>Q2 2025</div>
                <Building2 style={iconStyles} />
                <h3 style={featureTitleStyles}>Multi-Bank Support</h3>
                <p style={featureDescriptionStyles}>
                  Expanded support for all major Malaysian banks including specialized 
                  Islamic banking formats and international bank statements.
                </p>
              </div>

              <div 
                style={{...featureCardStyles, position: 'relative'}}
                onMouseEnter={handleSectionHover}
                onMouseLeave={handleSectionLeave}
              >
                <div style={upcomingBadgeStyles}>Q3 2025</div>
                <TrendingUp style={iconStyles} />
                <h3 style={featureTitleStyles}>Historical Tracking</h3>
                <p style={featureDescriptionStyles}>
                  Track your credit score improvements over time with detailed analytics, 
                  progress charts, and milestone achievements.
                </p>
              </div>

              <div 
                style={{...featureCardStyles, position: 'relative'}}
                onMouseEnter={handleSectionHover}
                onMouseLeave={handleSectionLeave}
              >
                <div style={upcomingBadgeStyles}>Q4 2025</div>
                <Download style={iconStyles} />
                <h3 style={featureTitleStyles}>Export Reports</h3>
                <p style={featureDescriptionStyles}>
                  Download comprehensive PDF reports of your financial analysis for 
                  loan applications, financial planning, or personal records.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section style={ctaStyles}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: theme.spacing[3],
              marginBottom: theme.spacing[4],
            }}>
              <Sparkles style={{
                width: '32px',
                height: '32px',
                color: theme.colors.accent,
              }} />
              <h2 style={{
                fontSize: theme.typography.fontSize['2xl'],
                fontWeight: theme.typography.fontWeight.bold,
                color: theme.colors.text,
                margin: 0,
              }}>
                Ready to Analyze Your Financial Health?
              </h2>
            </div>
            <p style={{
              fontSize: theme.typography.fontSize.lg,
              color: theme.colors.textSecondary,
              marginBottom: theme.spacing[6],
              maxWidth: '36rem',
              margin: `0 auto ${theme.spacing[6]}px auto`,
              lineHeight: 1.6,
            }}>
              Upload your bank statement and get instant AI-powered insights to improve 
              your financial health and credit score.
            </p>
            <Link 
              href="/"
              style={ctaButtonStyles}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.primaryHover
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.accent
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Get Started Now
              <ArrowRight style={{ width: '20px', height: '20px' }} />
            </Link>
          </section>

        </div>
      </Container>
      <Footer />
    </main>
  )
}

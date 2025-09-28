'use client'

import { UploadSection } from '@/components/upload-section'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Container, useTheme, TypingAnimation } from '@/components/ui'

function HomeContent() {
  const theme = useTheme()

  const handleStatHover = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    e.currentTarget.style.transform = 'translateY(-4px)'
  }

  const handleStatLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
    e.currentTarget.style.transform = 'translateY(0)'
  }

  const heroStyles: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '0px', // Ultra-minimal - no gap between hero and content
    paddingTop: 'clamp(16px, 2vh, 32px)',   // Ultra-reduced padding
    paddingBottom: 'clamp(8px, 1vh, 16px)', // Ultra-reduced padding
    minHeight: 'clamp(40vh, 45vh, 55vh)', // Much smaller hero for ultra-compact layout
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const titleStyles: React.CSSProperties = {
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', // Responsive typography
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    marginBottom: '8px', // Ultra-tight spacing
    lineHeight: 1.1, // Tighter line height for compactness
    letterSpacing: '-0.025em',
    maxWidth: '56rem', // Constrain line length
  }

  const subtitleStyles: React.CSSProperties = {
    fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', // Responsive typography
    color: theme.colors.textSecondary,
    maxWidth: '42rem', // Optimal reading width
    margin: '0 auto',
    lineHeight: 1.4, // Tighter for ultra-compact layout
            marginBottom: '0px', // No spacing - seamless connection to content
    letterSpacing: '0.01em',
  }

  const accentTextStyles: React.CSSProperties = {
    color: theme.colors.accent,
    fontWeight: theme.typography.fontWeight.semibold,
  }

  const mainStyles: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: theme.colors.background,
    position: 'relative',
    overflow: 'hidden', // Prevent horizontal scroll
  }


  const statsStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', // Tighter mobile fit
    gap: 'clamp(16px, 3vw, 24px)', // Enhanced spacing for better visual separation
    maxWidth: '64rem',
    margin: '0 auto',
    marginBottom: '80px', // Increased spacing before footer to match header visual weight
    textAlign: 'center',
    padding: '0 16px', // Reduced padding
  }

  const statItemStyles: React.CSSProperties = {
    backgroundColor: theme.colors.surface,
    borderRadius: '12px', // Smaller radius for compactness
    padding: '20px 16px', // Ultra-minimal padding
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.06)',
    border: 'none', // Remove border for modern look
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'default',
  }

  const statNumberStyles: React.CSSProperties = {
    fontSize: 'clamp(2rem, 4.5vw, 2.75rem)', // Slightly smaller for compactness
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.accent,
    marginBottom: '8px', // Ultra-minimal spacing
    lineHeight: 1.0, // Tighter line height
    letterSpacing: '-0.02em',
  }

  const statLabelStyles: React.CSSProperties = {
    fontSize: 'clamp(0.875rem, 2vw, 1.125rem)', // Responsive typography
    color: theme.colors.textSecondary,
    fontWeight: theme.typography.fontWeight.medium,
    lineHeight: 1.5,
    letterSpacing: '0.01em',
  }

  return (
    <main style={mainStyles}>
      <Header />
      
      {/* Ultra-Compact Hero Section */}
      <Container size="xl" padding="sm">
        <div style={heroStyles}>
          {/* Typing Animation Above Title */}
          <div style={{ marginBottom: '4px' }}> {/* Ultra-minimal spacing */}
            <TypingAnimation 
              words={['Smart', 'Secure', 'Fast']}
            />
          </div>
          
          <h1 style={titleStyles}>
            AI-Powered <span style={accentTextStyles}>Bank Statement Score</span><br />
            Analysis for Malaysia
          </h1>
          <p style={subtitleStyles}>
            Upload your bank statement and get instant, <span style={accentTextStyles}>AI-driven insights</span> 
            {' '}with personalized recommendations to improve your financial health.
          </p>
        </div>

        {/* Enhanced Bento Content Layout */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px', // Improved spacing for better bento design
          maxWidth: '72rem', // Better content width
          margin: '0 auto',
          padding: '0 16px', // Reduced padding
          marginBottom: '64px', // Increased spacing to match header-to-hero visual weight
        }}>
          {/* Upload Section */}
          <UploadSection />

          {/* Enhanced AI Engine Section */}
          <div style={{
            backgroundColor: theme.colors.surface,
            borderRadius: '20px', // Larger radius to match upload area
            padding: '40px 32px', // Enhanced padding for better proportion
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            border: 'none', // Remove border for modern look
            marginBottom: '0px', // No margin - gap handles spacing
          }}>
            <div style={{ 
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', // Enhanced size for better hierarchy
              fontWeight: theme.typography.fontWeight.bold,
              color: theme.colors.accent,
              marginBottom: '20px', // Improved spacing for better proportion
              letterSpacing: '-0.025em',
            }}>
              AI-Powered Engine
            </div>
            <p style={{ 
              fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)', // Enhanced typography for better readability
              color: theme.colors.textSecondary,
              lineHeight: 1.6,
              maxWidth: '42rem', // Optimal reading width
              letterSpacing: '0.01em',
              margin: 0, // Remove default margin
            }}>
              Advanced machine learning algorithms analyze your financial data 
              to provide accurate credit scoring and personalized recommendations
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div style={statsStyles}>
          <div 
            style={statItemStyles}
            onMouseEnter={handleStatHover}
            onMouseLeave={handleStatLeave}
          >
            <div style={statNumberStyles}>850</div>
            <div style={statLabelStyles}>Max Bank Statement Score</div>
          </div>
          <div 
            style={statItemStyles}
            onMouseEnter={handleStatHover}
            onMouseLeave={handleStatLeave}
          >
            <div style={statNumberStyles}>75.5%</div>
            <div style={statLabelStyles}>Accuracy Rate</div>
          </div>
          <div 
            style={statItemStyles}
            onMouseEnter={handleStatHover}
            onMouseLeave={handleStatLeave}
          >
            <div style={statNumberStyles}>{'< 1min'}</div>
            <div style={statLabelStyles}>Analysis Time</div>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}

export default function Home() {
  return <HomeContent />
}
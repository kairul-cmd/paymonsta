'use client'

import { UploadSection } from '@/components/upload-section'
import { Header } from '@/components/header'
import { Container, useTheme, TypingAnimation } from '@/components/ui'

function HomeContent() {
  const theme = useTheme()

  const heroStyles: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: theme.spacing[12],
    paddingTop: theme.spacing[20],
    paddingBottom: theme.spacing[16],
  }

  const titleStyles: React.CSSProperties = {
    fontSize: '4.5rem',
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing[6],
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
  }

  const subtitleStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize['2xl'],
    color: theme.colors.textSecondary,
    maxWidth: '48rem',
    margin: '0 auto',
    lineHeight: 1.5,
    marginBottom: theme.spacing[8],
  }

  const accentTextStyles: React.CSSProperties = {
    color: theme.colors.accent,
    fontWeight: theme.typography.fontWeight.semibold,
  }

  const mainStyles: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: theme.colors.background,
    position: 'relative',
  }


  const statsStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing[8],
    maxWidth: '60rem',
    margin: '0 auto',
    marginBottom: theme.spacing[16],
    textAlign: 'center',
  }

  const statItemStyles: React.CSSProperties = {
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.borderMuted}`,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing[8],
  }

  const statNumberStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize['4xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.accent,
    marginBottom: theme.spacing[2],
  }

  const statLabelStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize.lg,
    color: theme.colors.textSecondary,
    fontWeight: theme.typography.fontWeight.medium,
  }

  return (
    <main style={mainStyles}>
      <Header />
      
      {/* Hero Section */}
      <Container size="xl" padding="md">
        <div style={heroStyles}>
          {/* Typing Animation Above Title */}
          <div style={{ marginBottom: theme.spacing[4] }}>
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

        {/* Compact Bento Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'repeat(4, minmax(100px, auto))',
          gap: theme.spacing[6],
          maxWidth: '80rem',
          margin: '0 auto',
          padding: `0 ${theme.spacing[6]}`,
          marginBottom: theme.spacing[16],
        }}>
          {/* Main Upload Area - No Container */}
          <div style={{
            gridColumn: '3 / 11',
            gridRow: '1 / 3',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '280px',
            padding: theme.spacing[4],
          }}>
            <UploadSection />
          </div>

          {/* AI-Powered Engine - Bottom Section */}
          <div style={{
            gridColumn: '3 / 11',
            gridRow: '3 / 5',
            backgroundColor: theme.colors.surface,
            border: `2px solid ${theme.colors.accent}`,
            borderRadius: theme.borderRadius.xl,
            padding: theme.spacing[8],
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <div style={{ 
              fontSize: theme.typography.fontSize['3xl'], 
              fontWeight: theme.typography.fontWeight.bold,
              color: theme.colors.accent,
              marginBottom: theme.spacing[4],
            }}>
              AI-Powered Engine
            </div>
            <p style={{ 
              fontSize: theme.typography.fontSize.lg, 
              color: theme.colors.text,
              lineHeight: 1.6,
              maxWidth: '48rem',
            }}>
              Advanced machine learning algorithms analyze your financial data 
              to provide accurate credit scoring and personalized recommendations
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div style={statsStyles}>
          <div style={statItemStyles}>
            <div style={statNumberStyles}>850</div>
            <div style={statLabelStyles}>Max Bank Statement Score</div>
          </div>
          <div style={statItemStyles}>
            <div style={statNumberStyles}>99.9%</div>
            <div style={statLabelStyles}>Accuracy Rate</div>
          </div>
          <div style={statItemStyles}>
            <div style={statNumberStyles}>{'< 30s'}</div>
            <div style={statLabelStyles}>Analysis Time</div>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default function Home() {
  return <HomeContent />
}
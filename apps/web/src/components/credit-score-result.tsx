'use client'

import { Button, Card, Container, useTheme } from '@/components/ui'

interface BankTransaction {
  date: string
  description: string
  amount: number
  balance: number
  transaction_type: 'credit' | 'debit'
}

interface IncomeBreakdown {
  salary_income?: number
  other_income?: number
  fund_transfers_in: number
  total_credits: number
  calculation_method: string
}

interface ExpenseBreakdown {
  actual_expenses: number
  fund_transfers_out: number
  total_debits: number
  calculation_method: string
}

interface CreditScoreAnalysis {
  overall_score: number
  score_category: string
  monthly_income?: number
  monthly_expenses?: number
  income_breakdown?: IncomeBreakdown
  expense_breakdown?: ExpenseBreakdown
  savings_rate?: number
  debt_to_income_ratio?: number
  payment_consistency_score: number
  account_stability_months: number
  risk_factors: string[]
  positive_factors: string[]
  recommendations: string[]
  detailed_analysis: string
}

interface CreditScoreResultProps {
  analysis: CreditScoreAnalysis
  transactions: BankTransaction[]
  onNewAnalysis: () => void
}

export function CreditScoreResult({ analysis, transactions, onNewAnalysis }: CreditScoreResultProps) {
  const theme = useTheme()
  
  // Log transaction count for monitoring
  console.log(`Displaying ${transactions.length} transactions from bank statement analysis`)

  const getScoreColor = (score: number) => {
    if (score >= 800) return theme.colors.success
    if (score >= 740) return theme.colors.info
    if (score >= 670) return theme.colors.warning
    if (score >= 580) return '#ff8c00' // Orange
    return theme.colors.error
  }

  const getScoreBackground = (score: number) => {
    if (score >= 800) return theme.utils.withOpacity(theme.colors.success, 0.1)
    if (score >= 740) return theme.utils.withOpacity(theme.colors.info, 0.1)
    if (score >= 670) return theme.utils.withOpacity(theme.colors.warning, 0.1)
    if (score >= 580) return 'rgba(255, 140, 0, 0.1)' // Orange with opacity
    return theme.utils.withOpacity(theme.colors.error, 0.1)
  }

  // Malaysian Ringgit currency formatter
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ms-MY', {
      style: 'currency',
      currency: 'MYR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount)
  }

  // Format percentage with color coding
  const formatPercentage = (value: number, isPositive?: boolean) => {
    const formatted = `${value.toFixed(1)}%`
    if (isPositive === undefined) return formatted
    
    const color = value >= 0 ? theme.colors.success : theme.colors.error
    return <span style={{ color }}>{formatted}</span>
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-MY', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    })
  }

  // Modern styling constants
  const containerStyles: React.CSSProperties = {
    maxWidth: '90rem',
    margin: '0 auto',
    padding: `${theme.spacing[8]} ${theme.spacing[6]}`,
  }

  // Modern Bento Grid Layout for Results
  const bentoGridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(auto-fit, minmax(120px, auto))',
    gap: theme.spacing[6],
    marginBottom: theme.spacing[8],
  }

  const headerStyles: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: theme.spacing[8],
  }

  const scoreCardStyles: React.CSSProperties = {
    backgroundColor: theme.colors.surface,
    border: `2px solid ${theme.colors.accent}`,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing[8],
    textAlign: 'center',
    maxWidth: '32rem',
    margin: '0 auto',
    marginBottom: theme.spacing[8],
    position: 'relative',
    // Modern flat design - clean lines, no gradients
  }

  const scoreNumberStyles: React.CSSProperties = {
    fontSize: '4rem',
    fontWeight: theme.typography.fontWeight.bold,
    color: getScoreColor(analysis.overall_score),
    lineHeight: 1,
    marginBottom: theme.spacing[2],
  }

  const scoreCategoryStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    marginBottom: theme.spacing[1],
  }

  const scoreSubtitleStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
  }

  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
    gap: theme.spacing[6],
    marginBottom: theme.spacing[8],
  }

  const metricCardStyles: React.CSSProperties = {
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing[6],
    transition: theme.animation.transition.normal,
  }

  const accentMetricCardStyles: React.CSSProperties = {
    backgroundColor: theme.colors.surface,
    border: `2px solid ${theme.colors.accent}`,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing[6],
    transition: theme.animation.transition.normal,
    position: 'relative',
  }

  const metricTitleStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing[2],
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing[2],
  }

  const metricValueStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize['2xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    lineHeight: 1.2,
  }

  const sectionTitleStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing[4],
  }

  const transactionSummaryStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
    gap: theme.spacing[4],
    marginBottom: theme.spacing[6],
  }

  const summaryItemStyles: React.CSSProperties = {
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing[4],
    textAlign: 'center',
  }

  const summaryLabelStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize.xs,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing[1],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing[1],
  }

  const summaryValueStyles: React.CSSProperties = {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
  }

  return (
    <div style={containerStyles}>
      {/* Header with Analyze Another Statement Button */}
      <div style={headerStyles}>
        <Button
          onClick={onNewAnalysis}
          variant="ghost"
          size="sm"
          style={{ 
            marginBottom: theme.spacing[6],
            color: theme.colors.primary,
          }}
        >
          ← Analyze Another Statement
        </Button>
        
        {/* Bank Statement Score Card */}
        <div style={scoreCardStyles}>
          <div style={scoreNumberStyles}>
            {analysis.overall_score}
          </div>
          <div style={scoreCategoryStyles}>
            {analysis.score_category}
          </div>
          <div style={scoreSubtitleStyles}>
            Payment Consistency: {analysis.payment_consistency_score}/100
          </div>
        </div>
      </div>

      {/* Financial Overview Grid */}
      <div style={gridStyles}>
        {/* Monthly Income - Accent Border */}
        <Card style={accentMetricCardStyles}>
          <div style={metricTitleStyles}>
            <span>💰</span>
            Monthly Income
          </div>
          <div style={{
            ...metricValueStyles,
            color: analysis.monthly_income ? theme.colors.accent : theme.colors.textMuted,
          }}>
            {analysis.monthly_income ? formatCurrency(analysis.monthly_income) : 'N/A'}
          </div>
        </Card>

        {/* Monthly Expenses - Accent Border */}
        <Card style={accentMetricCardStyles}>
          <div style={metricTitleStyles}>
            <span>💳</span>
            Monthly Expenses
          </div>
          <div style={{
            ...metricValueStyles,
            color: analysis.monthly_expenses ? theme.colors.accent : theme.colors.textMuted,
          }}>
            {analysis.monthly_expenses ? formatCurrency(analysis.monthly_expenses) : 'N/A'}
          </div>
        </Card>

        {/* Savings Rate - Accent Border */}
        <Card style={accentMetricCardStyles}>
          <div style={metricTitleStyles}>
            <span>📈</span>
            Savings Rate
          </div>
          <div style={{
            ...metricValueStyles,
            color: analysis.income_breakdown && analysis.expense_breakdown 
              ? theme.colors.accent
              : theme.colors.textMuted,
          }}>
            {analysis.income_breakdown && analysis.expense_breakdown 
              ? formatPercentage(((analysis.income_breakdown.total_credits - analysis.expense_breakdown.total_debits) / analysis.income_breakdown.total_credits) * 100, true)
              : 'N/A'
            }
          </div>
        </Card>

        {/* Debt-to-Income */}
        <Card style={metricCardStyles}>
          <div style={metricTitleStyles}>
            <span>📊</span>
            Debt-to-Income
          </div>
          <div style={metricValueStyles}>
            {analysis.debt_to_income_ratio ? formatPercentage(analysis.debt_to_income_ratio) : 'N/A'}
          </div>
        </Card>

        {/* Account Stability */}
        <Card style={metricCardStyles}>
          <div style={metricTitleStyles}>
            <span>🏦</span>
            Account Stability
          </div>
          <div style={metricValueStyles}>
            {analysis.account_stability_months} {analysis.account_stability_months === 1 ? 'month' : 'months'}
          </div>
        </Card>
      </div>

      {/* Transaction Summary - Modern Flat Design */}
      {(analysis.income_breakdown || analysis.expense_breakdown) && (
        <Card style={{
          ...metricCardStyles,
          border: `2px solid ${theme.colors.accent}`,
        }}>
          <h3 style={{
            ...sectionTitleStyles,
            color: theme.colors.accent,
            borderBottom: `1px solid ${theme.colors.borderMuted}`,
            paddingBottom: theme.spacing[2],
            marginBottom: theme.spacing[6],
          }}>Transaction Summary</h3>
          <div style={transactionSummaryStyles}>
            {analysis.income_breakdown && (
              <div style={{
                ...summaryItemStyles,
                border: `1px solid ${theme.colors.success}`,
                backgroundColor: theme.utils.withOpacity(theme.colors.success, 0.05),
              }}>
                <div style={summaryLabelStyles}>
                  <span>💰</span>
                  Total Credits
                </div>
                <div style={{
                  ...summaryValueStyles,
                  color: theme.colors.success,
                }}>
                  {formatCurrency(analysis.income_breakdown.total_credits)}
                </div>
              </div>
            )}
            
            {analysis.expense_breakdown && (
              <div style={{
                ...summaryItemStyles,
                border: `1px solid ${theme.colors.error}`,
                backgroundColor: theme.utils.withOpacity(theme.colors.error, 0.05),
              }}>
                <div style={summaryLabelStyles}>
                  <span>💳</span>
                  Total Debits
                </div>
                <div style={{
                  ...summaryValueStyles,
                  color: theme.colors.error,
                }}>
                  {formatCurrency(analysis.expense_breakdown.total_debits)}
                </div>
              </div>
            )}
            
            {analysis.income_breakdown && analysis.expense_breakdown && (
              <div style={{
                ...summaryItemStyles,
                border: `1px solid ${theme.colors.accent}`,
                backgroundColor: theme.colors.accentMuted,
              }}>
                <div style={summaryLabelStyles}>
                  <span>💎</span>
                  Balance
                </div>
                <div style={{
                  ...summaryValueStyles,
                  color: theme.colors.accent,
                  fontWeight: theme.typography.fontWeight.bold,
                }}>
                  {formatCurrency(analysis.income_breakdown.total_credits - analysis.expense_breakdown.total_debits)}
                </div>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Key Factors */}
      <div style={gridStyles}>
        {/* Positive Factors */}
        <Card style={metricCardStyles}>
          <h3 style={sectionTitleStyles}>Positive Factors</h3>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing[3],
          }}>
            {analysis.positive_factors.map((factor, index) => (
              <li key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: theme.spacing[2],
                fontSize: theme.typography.fontSize.sm,
                color: theme.colors.textSecondary,
                lineHeight: 1.5,
              }}>
                <span style={{ color: theme.colors.success, flexShrink: 0 }}>✓</span>
                {factor}
              </li>
            ))}
          </ul>
        </Card>

        {/* Risk Factors */}
        <Card style={metricCardStyles}>
          <h3 style={sectionTitleStyles}>Risk Factors</h3>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing[3],
          }}>
            {analysis.risk_factors.map((factor, index) => (
              <li key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: theme.spacing[2],
                fontSize: theme.typography.fontSize.sm,
                color: theme.colors.textSecondary,
                lineHeight: 1.5,
              }}>
                <span style={{ color: theme.colors.error, flexShrink: 0 }}>⚠</span>
                {factor}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Recommendations - Modern Flat Design */}
      <Card style={{
        ...metricCardStyles,
        border: `2px solid ${theme.colors.accent}`,
      }}>
        <h3 style={{
          ...sectionTitleStyles,
          color: theme.colors.accent,
          borderBottom: `1px solid ${theme.colors.borderMuted}`,
          paddingBottom: theme.spacing[2],
          marginBottom: theme.spacing[6],
        }}>Recommendations</h3>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0, 
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing[4],
        }}>
          {analysis.recommendations.map((recommendation, index) => (
            <li key={index} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: theme.spacing[3],
              fontSize: theme.typography.fontSize.sm,
              color: theme.colors.text,
              lineHeight: 1.6,
              padding: theme.spacing[4],
              backgroundColor: theme.colors.accentMuted,
              borderRadius: theme.borderRadius.md,
              border: `1px solid ${theme.colors.accent}`,
              borderLeft: `4px solid ${theme.colors.accent}`,
            }}>
              <span style={{ 
                color: theme.colors.accent, 
                flexShrink: 0,
                fontSize: theme.typography.fontSize.lg,
                fontWeight: theme.typography.fontWeight.bold,
              }}>💡</span>
              {recommendation}
            </li>
          ))}
        </ul>
      </Card>

      {/* Detailed Analysis */}
      <Card style={metricCardStyles}>
        <h3 style={sectionTitleStyles}>Detailed Analysis</h3>
        <p style={{
          fontSize: theme.typography.fontSize.sm,
          color: theme.colors.textSecondary,
          lineHeight: 1.6,
          margin: 0,
          whiteSpace: 'pre-line',
        }}>
          {analysis.detailed_analysis}
        </p>
      </Card>
    </div>
  )
}
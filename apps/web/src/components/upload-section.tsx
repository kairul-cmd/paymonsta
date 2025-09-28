'use client'

import { useState } from 'react'
import { CreditScoreResult } from './credit-score-result'
import { Button, useTheme } from '@/components/ui'

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

interface AnalysisResult {
  analysis: CreditScoreAnalysis
  transactions: BankTransaction[]
  transactionCount: number
}

export function UploadSection() {
  const theme = useTheme()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [isDropzoneHovered, setIsDropzoneHovered] = useState(false)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file)
      setError(null)
    } else {
      setSelectedFile(null)
      setError('Please select a valid PDF file.')
    }
    // Clear the input value to allow selecting the same file again if needed
    event.target.value = ''
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragOver(false)
    
    const files = event.dataTransfer.files
    const file = files[0]
    
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file)
      setError(null)
    } else {
      setSelectedFile(null)
      setError('Please select a valid PDF file.')
    }
  }


  const handleAnalyze = async () => {
    if (!selectedFile) return

    setIsAnalyzing(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('file', selectedFile)

      const response = await fetch('/api/analyze', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to analyze the bank statement')
      }

      const result = await response.json()
      setAnalysisResult(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred')
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleNewAnalysis = () => {
    setAnalysisResult(null)
    setSelectedFile(null)
    setError(null)
    setIsAnalyzing(false)
  }

  // If analysis result exists, show the results page
  if (analysisResult) {
    return (
      <CreditScoreResult 
        analysis={analysisResult.analysis}
        transactions={analysisResult.transactions}
        onNewAnalysis={handleNewAnalysis}
      />
    )
  }

  // Modern 2025 Upload Dropzone Interface
  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'relative',
    }}>
      {/* Modern Upload Dropzone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onMouseEnter={() => setIsDropzoneHovered(true)}
        onMouseLeave={() => setIsDropzoneHovered(false)}
        style={{
          width: '100%',
          maxWidth: '36rem',
          minHeight: '20rem',
          backgroundColor: theme.colors.surface,
          border: `2px dashed ${isDragOver ? theme.colors.accent : (selectedFile ? theme.colors.success : theme.colors.accent)}`,
          borderRadius: theme.borderRadius.xl,
          padding: theme.spacing[8],
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          transition: theme.animation.transition.normal,
          cursor: selectedFile ? 'default' : 'pointer',
          position: 'relative',
          transform: isDropzoneHovered || isDragOver ? 'translateY(-2px)' : 'translateY(0)',
          boxShadow: isDropzoneHovered || isDragOver
            ? `0 8px 32px ${theme.utils.withOpacity(theme.colors.accent, 0.15)}`
            : `0 4px 16px ${theme.utils.withOpacity(theme.colors.accent, 0.08)}`,
        }}
        onClick={!selectedFile ? () => document.getElementById('file-upload')?.click() : undefined}
      >
        {/* Upload Icon */}
        <div style={{
          fontSize: '4rem',
          color: selectedFile ? theme.colors.success : (isDragOver ? theme.colors.accent : theme.colors.textMuted),
          marginBottom: theme.spacing[4],
          transition: theme.animation.transition.normal,
        }}>
          {selectedFile ? '📄' : (isDragOver ? '📁' : '📤')}
        </div>

        {/* Main Title */}
        <h2 style={{
          fontSize: theme.typography.fontSize['2xl'],
          fontWeight: theme.typography.fontWeight.bold,
          color: theme.colors.text,
          marginBottom: theme.spacing[3],
          lineHeight: theme.typography.lineHeight.tight,
        }}>
          {selectedFile ? 'File Selected' : (isDragOver ? 'Drop Your File Here' : 'Upload Your Bank Statement')}
        </h2>

        {/* File Info or Instructions */}
        {selectedFile ? (
          <div style={{
            backgroundColor: theme.utils.withOpacity(theme.colors.success, 0.1),
            border: `1px solid ${theme.utils.withOpacity(theme.colors.success, 0.3)}`,
            borderRadius: theme.borderRadius.lg,
            padding: theme.spacing[4],
            marginBottom: theme.spacing[6],
            width: '100%',
            maxWidth: '24rem',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing[3],
              marginBottom: theme.spacing[2],
            }}>
              <span style={{ fontSize: theme.typography.fontSize.lg }}>📄</span>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <p style={{
                  fontSize: theme.typography.fontSize.sm,
                  fontWeight: theme.typography.fontWeight.semibold,
                  color: theme.colors.success,
                  margin: 0,
                  marginBottom: theme.spacing[1],
                }}>
                  {selectedFile.name}
                </p>
                <p style={{
                  fontSize: theme.typography.fontSize.xs,
                  color: theme.colors.textSecondary,
                  margin: 0,
                }}>
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB • PDF
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ marginBottom: theme.spacing[6] }}>
            <p style={{
              fontSize: theme.typography.fontSize.base,
              color: theme.colors.textSecondary,
              marginBottom: theme.spacing[2],
              lineHeight: theme.typography.lineHeight.relaxed,
            }}>
              {isDragOver 
                ? 'Release to upload your PDF file' 
                : 'Drag and drop your bank statement here, or click to browse'
              }
            </p>
            <p style={{
              fontSize: theme.typography.fontSize.sm,
              color: theme.colors.textMuted,
            }}>
              Supported format: PDF • Max size: 10MB
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: theme.spacing[3],
          alignItems: 'center',
        }}>
          {selectedFile ? (
            <>
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  handleAnalyze()
                }}
                disabled={isAnalyzing}
                loading={isAnalyzing}
                variant="primary"
                size="lg"
                style={{ minWidth: '160px' }}
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Statement'}
              </Button>
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedFile(null)
                  setError(null)
                  // Clear the file input as well
                  const fileInput = document.getElementById('file-upload') as HTMLInputElement
                  if (fileInput) fileInput.value = ''
                }}
                variant="secondary"
                size="md"
              >
                Remove
              </Button>
            </>
          ) : (
            <Button
              variant="primary"
              size="lg"
              onClick={(e) => {
                e.stopPropagation()
                document.getElementById('file-upload')?.click()
              }}
              style={{ minWidth: '160px' }}
            >
              Select File
            </Button>
          )}
        </div>

        {/* Hidden File Input */}
        <input
          id="file-upload"
          type="file"
          accept=".pdf"
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
      </div>

      {/* Error Display */}
      {error && (
        <div style={{
          position: 'fixed',
          top: theme.spacing[6],
          right: theme.spacing[6],
          backgroundColor: theme.colors.surface,
          border: `2px solid ${theme.colors.error}`,
          borderRadius: theme.borderRadius.lg,
          padding: theme.spacing[6],
          maxWidth: '24rem',
          boxShadow: `0 10px 25px ${theme.utils.withOpacity(theme.colors.error, 0.1)}`,
          zIndex: 1000,
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: theme.spacing[3] }}>
            <div style={{
              fontSize: theme.typography.fontSize.xl,
              color: theme.colors.error,
            }}>⚠️</div>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: theme.typography.fontSize.base,
                fontWeight: theme.typography.fontWeight.semibold,
                color: theme.colors.error,
                margin: 0,
                marginBottom: theme.spacing[2],
              }}>
                Upload Error
              </h3>
              <p style={{
                fontSize: theme.typography.fontSize.sm,
                color: theme.colors.textSecondary,
                margin: 0,
                marginBottom: theme.spacing[3],
                lineHeight: 1.5,
              }}>
                {error}
              </p>
              <Button 
                onClick={() => setError(null)}
                variant="secondary"
                size="sm"
              >
                Try Again
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
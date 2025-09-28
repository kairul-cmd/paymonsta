import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'PayMonsta - AI Bank Statement Score Analyzer',
  description: 'AI-powered Malaysian bank statement score analyzer built with cutting-edge AI technology',
  keywords: 'bank statement score, bank statement analyzer, AI, Malaysia, financial analysis',
  authors: [{ name: 'PayMonsta Team' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body 
        className={inter.className}
        style={{
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          backgroundColor: '#181818',
          color: '#eeeee4',
          fontFamily: 'Inter, system-ui, sans-serif',
          lineHeight: 1.5,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        {children}
      </body>
    </html>
  )
}

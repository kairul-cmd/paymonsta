'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/hooks/useTheme'

interface TypingAnimationProps {
  words: string[]
  className?: string
  style?: React.CSSProperties
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({
  words,
  className = '',
  style = {},
}) => {
  const theme = useTheme()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const typingSpeed = isDeleting ? 40 : 80
    const pauseTime = isDeleting ? 300 : 1500

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        } else {
          // Finished typing, start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, words])

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(cursorTimer)
  }, [])

  const [isHovered, setIsHovered] = useState(false)

  const containerStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${theme.spacing[1]} ${theme.spacing[3]}`,
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.accent}`,
    borderRadius: theme.borderRadius.full, // Rounded corners as requested
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.accent,
    width: `${Math.max(80, currentText.length * 8 + 40)}px`, // Dynamic width based on text
    height: '28px', // Fixed height
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: isHovered 
      ? `0 4px 12px ${theme.utils.withOpacity(theme.colors.accent, 0.15)}`
      : `0 2px 8px ${theme.utils.withOpacity(theme.colors.accent, 0.1)}`,
    transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'default',
    userSelect: 'none',
    ...style,
  }

  const textStyles: React.CSSProperties = {
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    minHeight: '1em', // Ensure consistent height even when empty
    display: 'inline-block', // Maintain layout structure
  }

  const cursorStyles: React.CSSProperties = {
    display: 'inline-block',
    width: '1px',
    height: '0.9em',
    backgroundColor: theme.colors.accent,
    marginLeft: '1px',
    opacity: showCursor ? 1 : 0,
    transition: 'opacity 0.1s ease-in-out',
  }

  return (
    <div 
      className={className}
      style={containerStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={textStyles}>
        {currentText}
      </span>
      <span style={cursorStyles}></span>
    </div>
  )
}

export default TypingAnimation

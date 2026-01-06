"use client"

import { useEffect, type ReactNode } from 'react'

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Add smooth scroll behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Handle anchor link clicks with smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      
      if (anchor) {
        const href = anchor.getAttribute('href')
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault()
          const targetElement = document.querySelector(href)
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.documentElement.style.scrollBehavior = ''
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return <>{children}</>
}

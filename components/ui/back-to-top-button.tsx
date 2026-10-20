"use client"

import { ArrowUp } from 'lucide-react'

export function BackToTopButton() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <button
      onClick={scrollToTop}
      className="flex items-center gap-1 text-xs text-ink-foreground/50 hover:text-ink-foreground"
      aria-label="العودة إلى أعلى الصفحة"
    >
      <ArrowUp className="size-4" aria-hidden="true" />
      عودة إلى الأعلى
    </button>
  )
}

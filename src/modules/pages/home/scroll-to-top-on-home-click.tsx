'use client'

import { useEffect } from 'react'

export function ScrollToTopOnHomeClick() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (window.location.pathname !== '/') return
      const target = e.target as HTMLElement | null
      const link = target?.closest<HTMLAnchorElement>('a[href="/"]')
      if (!link) return
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])
  return null
}

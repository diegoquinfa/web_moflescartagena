'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ComponentPropsWithoutRef } from 'react'

type HomeLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, 'href'>

export function HomeLink({ onClick, children, ...rest }: HomeLinkProps) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <Link
      href="/"
      onClick={(e) => {
        if (isHome) {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        onClick?.(e)
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}

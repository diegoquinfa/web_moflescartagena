import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

type HomeLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, 'href'>

export function HomeLink({ children, ...rest }: HomeLinkProps) {
  return (
    <Link href="/" {...rest}>
      {children}
    </Link>
  )
}

import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

const SITE_URL = 'https://moflescartagena.com'

type HomeLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, 'href'>

export function HomeLink({ children, ...rest }: HomeLinkProps) {
  return (
    <Link href={`${SITE_URL}/`} {...rest}>
      {children}
    </Link>
  )
}

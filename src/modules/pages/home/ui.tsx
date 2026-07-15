import type React from "react"
import { cn } from "@/shared/ui/lib/utils"

/* Signature diagonal yellow/black hazard strip — one per screen region */
export function HazardBar({ className }: { className?: string }) {
  return <div className={cn("hazard-stripe h-2 w-full", className)} aria-hidden="true" />
}

/* Twin-pipe divider echoing the logo's exhaust pipes */
export function PipeDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center py-2", className)} aria-hidden="true">
      <div className="relative flex w-30 flex-col gap-2">
        <span className="h-1.5 w-full rounded-full bg-chrome-steel" />
        <span className="h-1.5 w-full rounded-full bg-chrome-steel" />
        <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-diesel-navy bg-cartagena-sand" />
      </div>
    </div>
  )
}

/* Stamped, license-plate style chip for phones, handles, codes */
export function PlateTag({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center gap-2 rounded-xs bg-diesel-navy py-1.5 pl-4 pr-3 font-space-mono text-[13px] uppercase tracking-[0.08em] text-pure-white",
        className,
      )}
    >
      <span className="absolute left-1 top-1/2 h-[70%] w-0.5 -translate-y-1/2 bg-taller-yellow" aria-hidden="true" />
      {children}
    </span>
  )
}

/* Eyebrow label in stamped mono */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        "font-space-mono text-[13px] font-bold uppercase tracking-[0.08em] text-signal-red",
        className,
      )}
    >
      {children}
    </p>
  )
}

export function PrimaryButton({
  children,
  href,
  className,
  ...props
}: {
  children: React.ReactNode
  href?: string
  className?: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg bg-taller-yellow px-7 py-3.5 font-archivo font-bold uppercase tracking-wide text-asphalt-black",
        "shadow-sign-sm transition-all duration-150",
        "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-sign-md",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export function SecondaryButton({
  children,
  href,
  className,
  ...props
}: {
  children: React.ReactNode
  href?: string
  className?: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg border-2 border-diesel-navy bg-transparent px-7 py-3 font-archivo font-semibold uppercase tracking-wide text-diesel-navy",
        "transition-colors duration-150 hover:bg-diesel-navy hover:text-pure-white",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  className,
  id,
}: {
  eyebrow: string
  title: string
  className?: string
  id?: string
}) {
  return (
    <div className={cn("flex flex-col items-center gap-3 text-center", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="font-bebas-neue text-4xl leading-none tracking-[0.01em] text-diesel-navy sm:text-5xl md:text-[56px]"
      >
        {title}
      </h2>
    </div>
  )
}

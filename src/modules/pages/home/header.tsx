"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { NAV_LINKS, PHONE_TEL, PHONE_DISPLAY } from "./site-data"
import { PlateTag } from "./ui"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b-2 border-asphalt-black bg-cartagena-sand/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-295 items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/images/logo.webp"
            alt="Logo Mofles Cartagena"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full"
          />
          <span className="font-bebas-neue text-2xl leading-none tracking-[0.01em] text-diesel-navy">
            Mofles Cartagena
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-archivo text-sm font-semibold text-asphalt-black transition-colors hover:text-signal-red"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href={`tel:${PHONE_TEL}`} className="hidden md:inline-flex">
          <PlateTag>
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {PHONE_DISPLAY}
          </PlateTag>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-asphalt-black text-asphalt-black lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t-2 border-asphalt-black bg-cartagena-sand px-4 py-4 lg:hidden"
          aria-label="Menú móvil"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 font-archivo font-semibold text-asphalt-black hover:bg-taller-yellow"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

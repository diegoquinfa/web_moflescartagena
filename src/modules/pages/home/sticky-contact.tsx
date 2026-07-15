import { Phone, MessageCircle } from "lucide-react"
import { PHONE_TEL, WHATSAPP_URL } from "./site-data"

export function StickyContact() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="hazard-stripe h-2 w-full" aria-hidden="true" />
      <div className="bg-asphalt-black">
        <div className="mx-auto flex max-w-295 items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <span className="hidden font-space-mono text-[13px] uppercase tracking-[0.08em] text-taller-yellow sm:inline">
            Diagnóstico gratis
          </span>
          <div className="flex flex-1 items-center justify-end gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-pure-white px-4 py-2 font-archivo text-sm font-semibold uppercase text-pure-white transition-colors hover:bg-pure-white hover:text-asphalt-black"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Llamar
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-taller-yellow px-4 py-2 font-archivo text-sm font-bold uppercase text-asphalt-black shadow-[3px_3px_0px_0px_rgba(242,183,5,0.35)] transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

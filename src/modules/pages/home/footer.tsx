import Image from "next/image"
import { Phone, AtSign, MapPin, Clock } from "lucide-react"
import {
  PHONE_TEL,
  PHONE_DISPLAY,
  INSTAGRAM,
  INSTAGRAM_URL,
  ADDRESS,
} from "./site-data"
import { PlateTag, HazardBar } from "./ui"

export function Footer() {
  return (
    <footer className="bg-asphalt-black">
      <HazardBar />
      <div className="mx-auto grid max-w-295 gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.webp"
              alt="Logo Mofles Cartagena"
              width={52}
              height={52}
              className="h-13 w-13 rounded-full"
            />
            <span className="font-bebas-neue text-2xl leading-none tracking-[0.01em] text-taller-yellow">
              Mofles Cartagena
            </span>
          </div>
          <p className="max-w-xs font-archivo text-sm leading-relaxed text-chrome-steel">
            Silenciadores · Pre silenciadores · Flexibles · Catalizadores · Empaques y soportes ·
            Instalación de tubería de escape.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-bebas-neue text-xl tracking-[0.01em] text-pure-white">Contacto</h3>
          <a href={`tel:${PHONE_TEL}`} className="inline-flex w-fit">
            <PlateTag>
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {PHONE_DISPLAY}
            </PlateTag>
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit">
            <PlateTag>
              <AtSign className="h-3.5 w-3.5" aria-hidden="true" />
              {INSTAGRAM}
            </PlateTag>
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-bebas-neue text-xl tracking-[0.01em] text-pure-white">Ubicación y horario</h3>
          <p className="inline-flex items-start gap-2 font-archivo text-sm text-chrome-steel">
            <MapPin className="mt-0.5 h-4 w-4 text-caribbean-sky" aria-hidden="true" />
            {ADDRESS}
          </p>
          <p className="inline-flex items-start gap-2 font-archivo text-sm text-chrome-steel">
            <Clock className="mt-0.5 h-4 w-4 text-caribbean-sky" aria-hidden="true" />
            Lunes a Sábado · 7:00am – 5:00pm
          </p>
        </div>
      </div>

      <div className="border-t border-chrome-steel/20 py-5 text-center">
        <p className="font-space-mono text-[12px] uppercase tracking-[0.08em] text-chrome-steel">
          © {new Date().getFullYear()} Mofles Cartagena · Diagnóstico gratuito
        </p>
      </div>
    </footer>
  )
}

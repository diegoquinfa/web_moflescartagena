import Image from 'next/image'
import { Phone, MapPin, Clock } from 'lucide-react'
import { TEL_HREF, PHONE_DISPLAY, ADDRESS } from './site-data'
import { PrimaryButton, PlateTag, Eyebrow, HazardBar } from './ui'
import StoreStatusBadge from '@/shared/ui/components/store-status-badge'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="bg-taller-yellow">
      <div className="mx-auto grid max-w-295 items-center gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow className="text-diesel-navy">Taller de escapes · Cartagena</Eyebrow>
            <StoreStatusBadge />
          </div>

          <h1
            id="hero-heading"
            className="font-bebas-neue text-[56px] leading-[0.95] tracking-[0.01em] text-diesel-navy sm:text-[72px] md:text-[84px]"
          >
            <span className='sr-only'>Mofles Cartagena</span> Taller de reparación de silenciadores, flexibles y catalizadores
          </h1>

          <p className="max-w-xl font-archivo text-lg leading-relaxed text-asphalt-black">
            Reparación e instalación de sistemas de escape con repuestos de calidad. Diagnóstico
            gratuito y trabajo garantizado en Cartagena.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <PrimaryButton href={TEL_HREF}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              Llama y cotiza
            </PrimaryButton>
            <a href={TEL_HREF}>
              <PlateTag className="py-2.5 text-[15px]">{PHONE_DISPLAY}</PlateTag>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 font-archivo text-sm font-semibold text-diesel-navy">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden="true" />
              Lun–Sáb · 7:00am – 5:00pm
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {ADDRESS}
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="rotate-[-1.5deg] rounded-lg border-[6px] border-pure-white shadow-sign-lg">
            <Image
              src="/images/storefront.webp"
              alt="Fachada del taller Mofles Cartagena: local amarillo con puerta de enrollable negra y aviso distintivo en el barrio Torices"
              width={1080}
              height={920}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full w-full rounded-xs object-cover"
              priority
              fetchPriority="high"
            />
          </div>
          <div className="absolute -bottom-4 -left-3 rotate-2 rounded-xs bg-signal-red px-4 py-2 font-space-mono text-[13px] font-bold uppercase tracking-[0.08em] text-pure-white shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
            Diagnóstico gratis
          </div>
        </div>
      </div>
      <HazardBar />
    </section>
  )
}

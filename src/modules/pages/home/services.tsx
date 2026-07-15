import Image from 'next/image'
import { Gauge, Phone, Wrench } from 'lucide-react'
import { TEL_HREF } from './site-data'
import { SectionHeading, PipeDivider, PrimaryButton } from './ui'

const SERVICES_IMGS = [
  {
    img: '/images/producto-silenciador.webp',
    name: 'Silenciadores',
    code: 'SIL-01',
    desc: 'Reparación y cambio de silenciadores y pre silenciadores para un escape sin ruidos.',
  },
  {
    img: '/images/producto-catalizador.webp',
    name: 'Catalizadores',
    code: 'CAT-02',
    desc: 'Diagnóstico y reemplazo de catalizadores para cumplir con la emisión de gases.',
  },
  {
    img: '/images/producto-flexible.webp',
    name: 'Flexibles',
    code: 'FLX-03',
    desc: 'Reemplazo de flexibles rotos que eliminan fugas y vibraciones en el sistema de escape.',
  },
  {
    img: '/images/producto-tuberia.webp',
    name: 'Instalación de tubería',
    code: 'TUB-04',
    desc: 'Fabricación e instalación de tubería de escape a la medida de tu vehículo.',
  },
]

const SERVICES_ICON = [
  {
    icon: Wrench,
    title: 'Empaques y soportes',
    desc: 'Instalación de empaques y soportes que sellan y fijan correctamente el escape.',
  },
  {
    icon: Gauge,
    title: 'Diagnóstico gratuito',
    desc: 'Revisamos tu sistema de escape sin costo y te decimos exactamente qué necesita.',
    free: true,
  },
]

export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-heading" className="bg-cartagena-sand">
      <div className="mx-auto max-w-295 px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading id="servicios-heading" eyebrow="Lo que hacemos" title="Servicios especializados" />
        <PipeDivider className="mt-6" />

        <div className="mt-10 grid gap-6 grid-cols-2 lg:grid-cols-4">
          {SERVICES_IMGS.map((product) => (
            <article
              key={product.code}
              className="flex flex-col overflow-hidden rounded-lg border-2 border-asphalt-black bg-pure-white shadow-sign-sm"
            >
              <div className="relative aspect-4/3 border-b-2 border-asphalt-black bg-cartagena-sand">
                <Image
                  src={product.img || '/placeholder.svg'}
                  alt={`${product.name} instalado en taller Mofles Cartagena`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  loading="lazy"
                />
                {/*<PlateTag className="hidden absolute left-3 top-3 text-[12px]">{product.code}</PlateTag>*/}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="font-bebas-neue text-2xl leading-none tracking-[0.01em] text-diesel-navy">
                  {product.name}
                </h3>
                <p className="font-archivo text-sm leading-relaxed text-asphalt-black">
                  {product.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {SERVICES_ICON.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="relative flex flex-col gap-4 justify-center rounded-lg border-2 border-asphalt-black bg-pure-white p-6 shadow-sign-sm"
              >
                <div
                  className="corrugated-top absolute inset-x-0 top-0 h-2 rounded-t-xs"
                  aria-hidden="true"
                />
                {service.free && (
                  <span className="absolute -right-2 top-3 rotate-2 rounded-xs bg-signal-red px-2.5 py-1 font-space-mono text-[12px] font-bold uppercase tracking-[0.08em] text-pure-white shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
                    Gratis
                  </span>
                )}
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-diesel-navy text-pure-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="font-bebas-neue text-2xl leading-none tracking-[0.01em] text-diesel-navy">
                  {service.title}
                </h3>
                <p className="font-archivo text-sm leading-relaxed text-asphalt-black">
                  {service.desc}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <PrimaryButton href={TEL_HREF}>
            <Phone className="h-4 w-4" aria-hidden="true" />
            Solicitar información
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}

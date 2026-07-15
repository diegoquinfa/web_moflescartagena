import Image from "next/image"
import { Eyebrow, PlateTag } from "./ui"
import { INSTAGRAM } from "./site-data"

export function About() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-heading" className="bg-cartagena-sand">
      <div className="mx-auto grid max-w-295 items-center gap-12 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="rotate-[-1.5deg] rounded-lg border-[6px] border-pure-white shadow-sign-lg">
              <Image
                src="/images/bay.webp"
                alt="Bahía de servicio (Pista 2) de Mofles Cartagena con un vehículo en proceso de revisión de escape"
                width={1080}
                height={1350}
                className="h-full w-full rounded-xs object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-3 rotate-2">
              <PlateTag className="text-[13px]">PISTA 2</PlateTag>
            </div>
          </div>
        </div>

        <div className="order-1 flex flex-col gap-5 lg:order-2">
          <Eyebrow className="text-signal-red">Nuestra empresa</Eyebrow>
          <h2
            id="nosotros-heading"
            className="font-bebas-neue text-4xl leading-none tracking-[0.01em] text-diesel-navy sm:text-5xl md:text-[56px]"
          >
            Un taller hecho en Cartagena, para los carros de Cartagena
          </h2>
          <p className="font-archivo text-base leading-relaxed text-asphalt-black">
            Mofles Cartagena nació como un taller de barrio con una idea clara: hacer bien una sola
            cosa, los sistemas de escape. Con los años nos convertimos en el punto de referencia de
            la ciudad para silenciadores, flexibles, catalizadores y tubería de escape.
          </p>
          <p className="font-archivo text-base leading-relaxed text-asphalt-black">
            Atendemos carros con el mismo compromiso: diagnóstico honesto, repuestos de
            calidad y trabajo garantizado. Somos un negocio familiar que conoce cada vehículo que
            entra a la pista.
          </p>
          <p className="font-archivo text-base leading-relaxed text-asphalt-black">
            Estamos en Torices, a pocos minutos de Manga, Bocagrande y Pie de la Popa, y
            recibimos carros de toda Cartagena.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <PlateTag>{INSTAGRAM}</PlateTag>
            <PlateTag>Cartagena · Bolívar</PlateTag>
          </div>
        </div>
      </div>
    </section>
  )
}

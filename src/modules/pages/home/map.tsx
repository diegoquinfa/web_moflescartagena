import { MapPin, Clock, Navigation } from "lucide-react"
import { ADDRESS } from "./site-data"
import { SectionHeading, SecondaryButton } from "./ui"

const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.925899064051!2d-75.53819299999999!3d10.427455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62f1a6ff52c81%3A0x343afed73d4a8d6a!2sMOFLES%20CARTAGENA!5e0!3m2!1ses!2sco!4v1784094142270!5m2!1ses!2sco"

const DIRECTIONS_URL =
  `https://www.google.com/maps/dir/10.4395817,-75.5190667/MOFLES+CARTAGENA,+Cra.+14+%2335-138,+Torices,+Cartagena+de+Indias,+Bol%C3%ADvar/@10.4349836,-75.5336158,16z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x8ef62f1a6ff52c81:0x343afed73d4a8d6a!2m2!1d-75.538193!2d10.427455!3e0?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D`

export function MapSection() {
  return (
    <section id="ubicacion" aria-labelledby="ubicacion-heading" className="bg-cartagena-sand">
      <div className="mx-auto max-w-295 px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading id="ubicacion-heading" eyebrow="Visítanos" title="Encuéntranos en Cartagena" />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border-2 border-asphalt-black bg-pure-white shadow-sign-md">
            <iframe
              src={MAP_URL}
              title="Ubicación de Mofles Cartagena en Google Maps"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="min-h-90 border-0 lg:min-h-105"
            />
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div className="flex flex-col gap-3 rounded-lg border-2 border-asphalt-black bg-pure-white p-6 shadow-sign-sm">
              <h3 className="font-bebas-neue text-2xl tracking-[0.01em] text-diesel-navy">
                DIRECCIÓN Y HORARIO
              </h3>
              <p className="inline-flex items-start gap-3 font-archivo text-base text-asphalt-black">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-caribbean-sky" aria-hidden="true" />
                {ADDRESS}
              </p>
              <p className="inline-flex items-start gap-3 font-archivo text-base text-asphalt-black">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-caribbean-sky" aria-hidden="true" />
                Lunes a Sábado · 7:00am – 5:00pm
              </p>
            </div>

            <SecondaryButton
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-fit"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Cómo llegar
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

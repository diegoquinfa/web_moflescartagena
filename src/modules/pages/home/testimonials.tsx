import { Star } from "lucide-react"
import { SectionHeading, PipeDivider, PrimaryButton } from "./ui"

const TESTIMONIALS = [
  {
    quote:
      "Excelente atención, excelente servicio y ni hablar de la calidad del trabajo. El sr Boris  su propietario un gran anfitrión, 200% recomendado.",
    name: "Felipe Andres Martinez Plaza",
    score: 5,
  },
  {
    quote:
      "Llevé el carro a este taller por las buenas calificaciones que ha recibido de sus clientes. En mi opinión, se trata de un buen taller, con gente amable y profesional. Me informaron qué daño tenía el carro y cuál iba a ser el arreglo. En más o menos una hora el carro estaba listo. El costo del trabajo fue razonable, Lo recomiendo!!!",
    name: "Federico Gallego",
    score: 5,
  },
  {
    quote:
      "Excelente servicio, 100% recomendado, el personal es capacitado y los precios son justos",
    name: "Jesus D Martinez",
    score: 5,
  },
  {
    quote:
      "Excelente servicio, recomendado 100%,su personal es muy calificado y honesto trabajo perfecto, garantizado y la atención muy buena voy a recomendarlo a todos mis amigos",
    name: "Jesahel Zakzuk alcazar",
    score: 5,
  },
  {
    quote:
      "Muy buen trabajo, rápido, te plantean el problema y de forma sencilla te explican mostrando la situación, honestidad es clave en este trabajo.",
    name: "Oliver Anaya",
    score: 5,
  },
  {
    quote:
      "La atención fue buena, me hicieron un cambio de mofle en menos de 1 hora, te permiten ver el resultado final, me hicieron un descuento y además me dan 3 meses de garantía de servicio, yo personalmente los recomiendo.",
    name: "Samir Cano",
    score: 5,
  },
  {
    quote: "Excelente servicio y muy amable atención!",
    name: "Carlos mario galan",
    score: 5,
  },
]

function TestimonialCard({ testimonial }: { testimonial: (typeof TESTIMONIALS)[number] }) {
  return (
    <figure className="flex h-[280px] w-[320px] shrink-0 flex-col rounded-lg border-2 border-asphalt-black bg-pure-white p-6 shadow-sign-sm sm:h-[300px] sm:w-[360px]">
      <div className="flex gap-0.5 text-taller-yellow" aria-label="5 de 5 estrellas">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="mt-4 line-clamp-5 font-archivo text-base leading-relaxed text-asphalt-black">
        {`"${testimonial.quote}"`}
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3 border-t-2 border-cartagena-sand pt-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-diesel-navy font-bebas-neue text-lg text-taller-yellow">
          {testimonial.name.charAt(0)}
        </span>
        <span className="line-clamp-2 font-archivo text-sm font-bold text-diesel-navy">
          {testimonial.name}
        </span>
      </figcaption>
    </figure>
  )
}

function TestimonialTrack() {
  return (
    <>
      {TESTIMONIALS.map((t) => (
        <TestimonialCard key={t.name} testimonial={t} />
      ))}
    </>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonios"
      aria-label="Opiniones de nuestros clientes"
      className="overflow-hidden bg-cartagena-sand py-20 md:py-24"
    >
      <div className="mx-auto max-w-295 px-4 sm:px-6">
        <SectionHeading eyebrow="Clientes" title="Lo que dicen de nosotros" />
        <PipeDivider className="mt-6" />
      </div>

      <div
        className="mt-10 overflow-hidden motion-reduce:overflow-x-auto motion-reduce:px-4"
        draggable={false}
      >
        <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused] motion-reduce:w-fit motion-reduce:animate-none motion-reduce:gap-4">
          <TestimonialTrack />
          <TestimonialTrack />
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <PrimaryButton
          href="https://maps.google.com/?cid=3763600639021190506&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=es&gl=CO&source=embed"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver todos los testimonios
        </PrimaryButton>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { SectionHeading, PipeDivider } from "./ui"

const FAQS = [
  {
    q: "¿El diagnóstico realmente es gratis?",
    a: "Sí. Revisamos tu sistema de escape sin ningún costo y te damos un presupuesto claro antes de hacer cualquier trabajo.",
  },
  {
    q: "¿Cuánto tardan en reparar mi vehículo?",
    a: "La mayoría de reparaciones de silenciadores y flexibles se resuelven el mismo día. Trabajos más grandes te los cotizamos con tiempo estimado.",
  },
  {
    q: "¿Los repuestos tienen garantía?",
    a: "Instalamos repuestos de calidad y ofrecemos garantía sobre el trabajo realizado. Te explicamos las condiciones en el momento de la cotización.",
  },
  {
    q: "¿Necesito cita previa?",
    a: "No es obligatorio, pero puedes escribirnos por WhatsApp para coordinar tu visita y evitar esperas.",
  },
  {
    q: "¿Cómo pido una cotización?",
    a: "Escríbenos por WhatsApp al 321 889 5253 con la marca y modelo de tu vehículo y el problema que presenta. Te respondemos rápido.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-cartagena-sand">
      <div className="mx-auto max-w-205 px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading id="faq-heading" eyebrow="Dudas frecuentes" title="Preguntas frecuentes" />
        <PipeDivider className="mt-6" />

        <div className="mt-10 flex flex-col gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className="rounded-lg border-2 border-asphalt-black bg-pure-white shadow-sign-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-bebas-neue text-xl leading-tight tracking-[0.01em] text-diesel-navy">
                    {faq.q}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-taller-yellow text-asphalt-black">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="border-t-2 border-cartagena-sand px-5 py-4 font-archivo text-base leading-relaxed text-asphalt-black">
                    {faq.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

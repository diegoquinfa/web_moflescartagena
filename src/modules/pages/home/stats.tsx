const STATS = [
  { value: "+12", label: "Años de experiencia" },
  { value: "+8.500", label: "Vehículos atendidos" },
  { value: "100%", label: "Diagnósticos gratuitos" },
  { value: "5 ★", label: "Calificación de clientes" },
]

export function Stats() {
  return (
    <section className="bg-diesel-navy" aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="sr-only">
        Nuestros números en Cartagena
      </h2>
      <div className="mx-auto grid max-w-295 grid-cols-2 gap-px overflow-hidden px-4 py-12 sm:px-6 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 px-4 py-4 text-center">
            <span className="font-bebas-neue text-5xl leading-none tracking-[0.01em] text-taller-yellow md:text-6xl">
              {stat.value}
            </span>
            <span className="font-archivo text-sm font-semibold text-pure-white">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

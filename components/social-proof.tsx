const logos = [
  "TechBrasil",
  "Construtora Viva",
  "Grupo Mentoria",
  "FinPro",
  "MedLab",
  "SolarTech",
  "LogiMax",
  "AgroVerde",
  "DataBridge",
  "PrimeConsult",
]

export function SocialProof() {
  return (
    <section className="py-10 border-y border-white/5 bg-[#111111] overflow-hidden">
      <p className="text-center text-[10px] text-[#a1a1aa] uppercase tracking-[0.2em] mb-6">
        Empresas que confiam no Método DG
      </p>
      <div className="relative">
        <div className="flex gap-14 animate-marquee whitespace-nowrap w-max">
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="text-xs font-semibold text-[#a1a1aa]/40 uppercase tracking-widest hover:text-[#a1a1aa] transition-colors cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#111111] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#111111] to-transparent" />
      </div>
    </section>
  )
}

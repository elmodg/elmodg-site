"use client"

const WA = "https://wa.me/5521992166374?text=Ol%C3%A1!%20Estou%20vindo%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."

export function Hero() {
  const scroll = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] noise pt-[72px]">
      {/* Ambient red glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#ef4444]/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ef4444]/5 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a]/80 border border-[#ef4444]/30 mb-10 backdrop-blur-sm">
          <span className="w-2 h-2 bg-[#ef4444] rounded-full animate-pulse" />
          <span className="text-xs font-medium text-[#a1a1aa] uppercase tracking-widest">
            Método validado por +50 empresas B2B
          </span>
        </div>

        {/* Headline — akeo-style massive type */}
        <h1 className="text-[clamp(3rem,10vw,9rem)] font-black tracking-tighter leading-[0.88] text-white mb-6 text-balance">
          Autoridade
          <br />
          <span className="gradient-text">Que Vende</span>
        </h1>

        {/* Sub-headline — exact text requested */}
        <p className="text-xl md:text-2xl text-[#a1a1aa] max-w-2xl mx-auto mb-6 leading-relaxed text-pretty">
          Forjamos identidades Fortes que transmitem{" "}
          <span className="text-white font-semibold">autoridade</span> e{" "}
          <span className="text-white font-semibold">grandeza</span>
        </p>

        {/* Insight callout */}
        <div className="max-w-xl mx-auto mb-12 p-5 bg-[#1a1a1a]/60 border border-white/10 backdrop-blur-sm">
          <p className="text-sm text-[#a1a1aa] leading-relaxed">
            <span className="text-white font-semibold">Insight cruel:</span> Empresas não perdem vendas por falta de
            anúncios. Perdem porque{" "}
            <span className="text-[#ef4444] font-semibold">não parecem confiáveis o suficiente</span> para vender caro.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <button
            onClick={() => scroll("#diagnostico")}
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#ef4444] text-white font-bold text-base uppercase tracking-wider hover:bg-[#dc2626] transition-all duration-300 hover:scale-105 red-glow"
          >
            Solicitar Diagnóstico Estratégico
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] text-white font-bold text-base uppercase tracking-wider hover:bg-green-600 transition-all duration-300 hover:scale-105 whatsapp-glow"
          >
            <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp Agora
          </a>
        </div>

        <p className="text-xs text-[#a1a1aa] mb-16">Resposta em até 30 min • Atendimento humano, sem bots</p>

        {/* Social proof avatars */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex -space-x-3">
            {["CT", "MF", "RL"].map((i) => (
              <div
                key={i}
                className="w-11 h-11 rounded-full bg-[#1a1a1a] flex items-center justify-center border-2 border-[#0a0a0a] text-[#ef4444] font-bold text-xs"
              >
                {i}
              </div>
            ))}
            <div className="w-11 h-11 rounded-full bg-[#ef4444] flex items-center justify-center border-2 border-[#0a0a0a] text-white font-bold text-xs">
              +50
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#ef4444] tracking-wider">★★★★★</span>
            <span className="text-[#a1a1aa]">4.9/5 — Empresas transformadas</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <svg className="w-5 h-5 text-[#a1a1aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

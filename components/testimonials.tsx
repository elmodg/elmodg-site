const testimonials = [
  {
    initials: "CT",
    name: "Carlos Teixeira",
    role: "CEO, TechBrasil",
    quote:
      "Em 60 dias, nosso ticket médio subiu 40%. Os clientes passaram a perceber o valor antes mesmo de ver o preço. O Método DG é transformador.",
    result: "+40% ticket médio",
  },
  {
    initials: "MF",
    name: "Mariana Fonseca",
    role: "Diretora Comercial, FinPro",
    quote:
      "Antes éramos mais um. Depois do reposicionamento, viramos referência no setor financeiro. As indicações triplicaram em 3 meses.",
    result: "3x mais indicações",
  },
  {
    initials: "RL",
    name: "Roberto Lima",
    role: "Sócio, Construtora Viva",
    quote:
      "A Elmo DG não faz site bonito. Ela faz marca que vende. Fechamos dois projetos corporativos que antes nem chegavam até nós.",
    result: "2 contratos corporativos",
  },
  {
    initials: "AG",
    name: "Ana Guimarães",
    role: "Fundadora, MedLab",
    quote:
      "Gastar com anúncio sem ter autoridade é jogar dinheiro fora. A DG mostrou isso na prática. Nosso CAC caiu 55% após o reposicionamento.",
    result: "-55% CAC",
  },
  {
    initials: "RP",
    name: "Ricardo Pinheiro",
    role: "Diretor, AgroVerde",
    quote:
      "A garantia de 90 dias foi o que me convenceu a tentar. Mas o resultado veio muito antes. Não precisei nem acionar a garantia.",
    result: "ROI em 45 dias",
  },
  {
    initials: "JS",
    name: "Juliana Santos",
    role: "CEO, LogiMax",
    quote:
      "Minha empresa existia há 8 anos sendo ignorada. Depois do Método DG, estou sendo convidada para palestrar em congressos do setor.",
    result: "Autoridade reconhecida",
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-[#111111] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-[10px] text-[#ef4444] uppercase tracking-[0.2em] mb-3 font-semibold">
            — Palavras dos Clientes
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white text-balance leading-[0.95] max-w-2xl">
            O que acontece quando você para de{" "}
            <span className="gradient-text">parecer pequeno</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#111111] p-8 flex flex-col gap-5 hover:bg-[#1a1a1a] transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-[#ef4444] text-sm">&#9733;</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-[#a1a1aa] leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Result badge */}
              <span className="text-xs font-bold text-white bg-[#ef4444] px-2.5 py-1 w-fit">
                {t.result}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-xs font-bold text-[#ef4444] shrink-0 border border-white/10">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-[#a1a1aa]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

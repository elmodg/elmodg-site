const steps = [
  {
    number: "01",
    title: "Diagnóstico de Percepção",
    description:
      "Mapeamos como seu mercado realmente te vê hoje vs. como deveria te ver. Identificamos o gap que está travando suas vendas.",
  },
  {
    number: "02",
    title: "Imagem de Autoridade",
    description:
      "Criamos identidade visual e verbal que comunica confiança instantânea. Seu cliente sente que está tratando com o líder do setor.",
  },
  {
    number: "03",
    title: "Amplificação Estratégica",
    description:
      "Posicionamos você nos canais certos para ser encontrado pelos clientes certos, no momento certo da decisão de compra.",
  },
  {
    number: "04",
    title: "Conversão por Confiança",
    description:
      "Sistema de vendas que converte autoridade em receita previsível. Mais fechamentos, tickets maiores, menos objeções.",
  },
]

const guarantees = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#ef4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Garantia de Resultado",
    description: "Se não houver aumento de percepção em 90 dias, devolvemos 100%",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#ef4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Dados 100% Seguros",
    description: "Seus dados e estratégia são confidenciais e protegidos por NDA",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#ef4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Primeiros Sinais em 30 Dias",
    description: "Você verá mudança na percepção do mercado no primeiro mês",
  },
]

export function Methodology() {
  return (
    <section id="metodo" className="py-24 bg-[#111111] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[10px] text-[#ef4444] uppercase tracking-[0.2em] mb-3 font-semibold">
            — O Método DG de Autoridade
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white text-balance leading-[0.95] max-w-2xl">
            4 passos para sua marca virar{" "}
            <span className="gradient-text">referência do nicho</span>
          </h2>
        </div>

        {/* Steps grid — akeo tile pattern */}
        <div className="grid md:grid-cols-2 gap-[1px] bg-white/5 mb-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#111111] p-10 hover:bg-[#1a1a1a] transition-colors group"
            >
              <span className="text-6xl font-black text-[#ef4444]/15 group-hover:text-[#ef4444]/30 transition-colors block mb-4 leading-none select-none">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="grid md:grid-cols-3 gap-[1px] bg-white/5">
          {guarantees.map((g) => (
            <div key={g.title} className="bg-[#111111] p-8 flex gap-5 items-start hover:bg-[#1a1a1a] transition-colors">
              <div className="shrink-0 mt-0.5">{g.icon}</div>
              <div>
                <p className="text-sm font-bold text-white mb-1">{g.title}</p>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">{g.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

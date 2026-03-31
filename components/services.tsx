const services = [
  {
    tag: "Fundação",
    title: "Branding de Autoridade",
    description:
      "Identidade visual e verbal completa que posiciona sua empresa como líder do setor. Logo, paleta, tipografia, tom de voz e guia de marca.",
    deliverables: ["Identidade visual completa", "Manual de marca", "Tom de voz e messaging", "Perfis sociais otimizados"],
  },
  {
    tag: "Posicionamento",
    title: "Estratégia de Percepção",
    description:
      "Mapeamento completo do gap entre como você é visto e como deveria ser visto. Plano estratégico de reposicionamento com KPIs claros.",
    deliverables: ["Diagnóstico de percepção", "Análise competitiva", "Plano de reposicionamento", "Dashboard de métricas"],
  },
  {
    tag: "Amplificação",
    title: "Presença Digital Premium",
    description:
      "Site institucional de alta conversão, SEO estratégico e presença nos canais onde seus clientes tomam decisões de compra.",
    deliverables: ["Site institucional", "SEO técnico e conteúdo", "LinkedIn Premium", "Google Meu Negócio"],
  },
  {
    tag: "Conversão",
    title: "Sistema de Vendas por Confiança",
    description:
      "Estrutura completa de materiais de vendas que converte autoridade em contratos: propostas, cases, pitch deck e scripts.",
    deliverables: ["Pitch deck premium", "Proposta comercial padrão", "Cases e portfólio", "Scripts de vendas"],
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[10px] text-[#ef4444] uppercase tracking-[0.2em] mb-3 font-semibold">
              — Serviços &amp; Expertise
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white text-balance leading-[0.95] max-w-xl">
              Tudo que sua marca<br />
              precisa para{" "}
              <span className="gradient-text">vender caro</span>
            </h2>
          </div>
          <a
            href="#diagnostico"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#ef4444] border border-[#ef4444]/30 px-6 py-3 hover:border-[#ef4444] hover:bg-[#ef4444]/10 transition-all shrink-0 self-start md:self-auto"
          >
            Solicitar proposta
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Cards — akeo tile layout */}
        <div className="grid md:grid-cols-2 gap-[1px] bg-white/5">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-[#0a0a0a] p-8 md:p-10 flex flex-col gap-6 hover:bg-[#111111] transition-colors group"
            >
              <div className="flex items-start justify-between">
                <span className="text-[10px] font-bold text-[#ef4444] uppercase tracking-widest border border-[#ef4444]/30 px-2 py-1">
                  {s.tag}
                </span>
                <svg
                  className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#ef4444] group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">{s.description}</p>
              </div>
              <ul className="flex flex-col gap-2 mt-auto">
                {s.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-[#a1a1aa]">
                    <span className="w-1 h-1 rounded-full bg-[#ef4444] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

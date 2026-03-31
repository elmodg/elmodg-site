const posts = [
  {
    tag: "Branding",
    title: "Por que marcas B2B que não parecem confiáveis perdem para concorrentes mais fracos",
    excerpt:
      "O problema não é o produto. É a percepção. Descubra como o gap de confiança está destruindo seus resultados de vendas.",
    date: "12 Mar 2025",
    readTime: "5 min",
  },
  {
    tag: "Estratégia",
    title: "Os 3 sinais de que sua empresa está deixando dinheiro na mesa por falta de autoridade",
    excerpt:
      "Objeções de preço frequentes, ciclo de vendas longo e dificuldade de indicações são sintomas de um problema de percepção.",
    date: "28 Fev 2025",
    readTime: "7 min",
  },
  {
    tag: "Posicionamento",
    title: "Como uma construtora aumentou seu ticket em 60% sem aumentar seu orçamento de marketing",
    excerpt:
      "Um case real de reposicionamento de autoridade que transformou uma empresa em referência reconhecida do setor em menos de 90 dias.",
    date: "15 Fev 2025",
    readTime: "9 min",
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#111111] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[10px] text-[#ef4444] uppercase tracking-[0.2em] mb-3 font-semibold">
              — Insights &amp; Estratégia
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white text-balance leading-[0.95] max-w-xl">
              Conteúdo que<br />
              <span className="gradient-text">transforma percepção</span>
            </h2>
          </div>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#a1a1aa] hover:text-white transition-colors shrink-0 self-start md:self-auto"
          >
            Ver todos os artigos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-[1px] bg-white/5">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-[#111111] p-8 flex flex-col gap-4 hover:bg-[#1a1a1a] transition-colors group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#ef4444] uppercase tracking-widest border border-[#ef4444]/30 px-2 py-1">
                  {post.tag}
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

              <h3 className="text-base font-bold text-white leading-snug text-balance">{post.title}</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed flex-1">{post.excerpt}</p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5 text-xs text-[#a1a1aa]">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>{post.readTime} de leitura</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

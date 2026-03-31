const WA = "https://wa.me/5521992166374?text=Ol%C3%A1!%20Estou%20vindo%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."

const links = {
  Método: [
    { label: "Diagnóstico de Percepção", href: "#metodo" },
    { label: "Imagem de Autoridade", href: "#metodo" },
    { label: "Amplificação Estratégica", href: "#metodo" },
    { label: "Conversão por Confiança", href: "#metodo" },
  ],
  Serviços: [
    { label: "Branding de Autoridade", href: "#servicos" },
    { label: "Estratégia de Percepção", href: "#servicos" },
    { label: "Presença Digital Premium", href: "#servicos" },
    { label: "Sistema de Vendas", href: "#servicos" },
  ],
  Empresa: [
    { label: "Portfólio", href: "#portfolio" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Blog", href: "#blog" },
    { label: "Diagnóstico Gratuito", href: "#diagnostico" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      {/* CTA strip */}
      <div className="border-b border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="text-[10px] text-[#ef4444] uppercase tracking-[0.2em] mb-3 font-semibold">
              — Pronto para crescer?
            </p>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-[0.95] text-balance">
              CRESÇA FORTE,<br />
              <span className="gradient-text">AGENDE UMA CALL!</span>
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#diagnostico"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ef4444] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#dc2626] transition-colors red-glow whitespace-nowrap"
            >
              Solicitar Diagnóstico
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-wider hover:border-[#25D366] hover:text-[#25D366] transition-all whitespace-nowrap"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <a
              href="#"
              className="text-xl font-black tracking-tight text-white mb-4 block"
            >
              Elmo <span className="text-[#ef4444]">DG</span>
            </a>
            <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4">
              Forjamos identidades fortes que transmitem autoridade e grandeza.
            </p>
            <p className="text-xs text-[#a1a1aa]/50">elmodg.com.br</p>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-5">{title}</p>
              <ul className="flex flex-col gap-3">
                {items.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-[#a1a1aa] hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#a1a1aa]/50">
            &copy; {new Date().getFullYear()} Elmo DG. Autoridade Que Vende. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-[#a1a1aa]/50">contato@elmodg.com.br</span>
            <span className="text-xs text-[#a1a1aa]/50">São Paulo, Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

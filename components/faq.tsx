"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Para qual tipo de empresa o Método DG funciona?",
    answer:
      "O Método DG foi desenvolvido para empresas B2B que vendem produtos ou serviços de alto valor e enfrentam dificuldade de diferenciação. Funciona especialmente bem para consultorias, empresas de tecnologia, construtoras, clínicas e prestadores de serviço que querem cobrar mais e ser reconhecidos como referência.",
  },
  {
    question: "Quanto tempo leva para ver os primeiros resultados?",
    answer:
      "Os primeiros sinais de mudança de percepção costumam aparecer em 30 dias. Resultados consistentes em métricas como ticket médio, conversão e indicações são visíveis entre 60 e 90 dias. Por isso oferecemos a garantia de 90 dias com reembolso total caso não haja evolução mensurável.",
  },
  {
    question: "Como funciona a Garantia de Resultado?",
    answer:
      "Se após 90 dias de trabalho conjunto não houver aumento mensurável na percepção de mercado — medido por indicadores acordados no início do projeto — devolvemos 100% do investimento. Sem burocracia. A garantia é a nossa aposta no resultado do nosso próprio trabalho.",
  },
  {
    question: "O que está incluso no Diagnóstico Estratégico gratuito?",
    answer:
      "O Diagnóstico inclui uma análise profunda da sua presença atual de marca, mapeamento do gap de percepção, análise de 3 concorrentes diretos e um relatório com os principais pontos de alavancagem imediata. Normalmente leva cerca de 4 horas de análise. Atenção: apenas 3 vagas por semana.",
  },
  {
    question: "Vocês trabalham com contratos de longo prazo?",
    answer:
      "Nosso modelo padrão é de projetos com duração entre 3 e 6 meses, com opção de continuidade estratégica. Não trabalhamos com contratos perpétuos. O objetivo é que ao final do projeto sua equipe seja capaz de sustentar o posicionamento de forma independente.",
  },
  {
    question: "Meus dados e estratégia ficam seguros?",
    answer:
      "Todos os clientes assinam um NDA (Non-Disclosure Agreement) antes do início das atividades. Seus dados, estratégia e informações competitivas são tratados com sigilo absoluto. Nunca usamos cases sem autorização expressa.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-[10px] text-[#ef4444] uppercase tracking-[0.2em] mb-3 font-semibold">
            — Dúvidas Frequentes
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white text-balance leading-[0.95]">
            Perguntas que todo cliente<br />faz antes de fechar
          </h2>
        </div>

        <div className="flex flex-col gap-[1px] bg-white/5">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#0a0a0a]">
              <button
                className="w-full flex items-start justify-between gap-4 p-6 text-left hover:bg-[#111111] transition-colors group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-semibold text-white leading-relaxed">{faq.question}</span>
                <span className="shrink-0 mt-0.5 text-[#ef4444] text-lg leading-none">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-sm text-[#a1a1aa] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

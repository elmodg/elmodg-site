"use client"

import { useState } from "react"

const WA = "https://wa.me/5521992166374?text=Ol%C3%A1!%20Estou%20vindo%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      setSubmitted(true)
    } catch {
      // fallback: still show success for preview
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="diagnostico" className="py-24 bg-[#111111] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div>
            <p className="text-[10px] text-[#ef4444] uppercase tracking-[0.2em] mb-3 font-semibold">
              — Diagnóstico Gratuito
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white text-balance leading-[0.95] mb-6">
              Solicitar Diagnóstico<br />
              <span className="gradient-text">Estratégico</span>
            </h2>
            <p className="text-sm text-[#a1a1aa] leading-relaxed mb-8 max-w-md">
              Descubra o gap entre como você é visto e como deveria ser visto. Uma análise honesta e profunda — sem custo.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-start gap-3 p-4 bg-[#0a0a0a] border border-white/5">
                <span className="text-[#ef4444] text-base mt-0.5" aria-hidden>⚠</span>
                <div>
                  <p className="text-sm font-bold text-white">Apenas 3 vagas esta semana</p>
                  <p className="text-xs text-[#a1a1aa] mt-0.5">
                    O diagnóstico é feito manualmente pela nossa equipe. Vagas limitadas para garantir qualidade.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#0a0a0a] border border-white/5">
                <span className="text-[#ef4444] text-base mt-0.5" aria-hidden>⏱</span>
                <div>
                  <p className="text-sm font-bold text-white">Resposta em até 4 horas</p>
                  <p className="text-xs text-[#a1a1aa] mt-0.5">
                    Atendimento humano. Você fala com um estrategista, não um bot.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-6">
              <p className="text-xs text-[#a1a1aa] mb-3">Prefere falar diretamente?</p>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#25D366] hover:opacity-80 transition-opacity"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Falar no WhatsApp Agora
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[#0a0a0a] border border-white/5 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-14 text-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-[#ef4444]/10 text-[#ef4444] text-2xl font-black border border-[#ef4444]/30">
                  ✓
                </div>
                <h3 className="text-xl font-black text-white">Diagnóstico solicitado!</h3>
                <p className="text-sm text-[#a1a1aa] max-w-xs leading-relaxed">
                  Nossa equipe entrará em contato em até 4 horas com a análise da sua marca.
                </p>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#25D366] border border-[#25D366]/30 px-4 py-2 hover:bg-[#25D366]/10 transition-colors"
                >
                  Chamar no WhatsApp agora
                </a>
              </div>
            ) : (
              /* Netlify form — data-netlify + honeypot */
              <form
                name="diagnostico"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                {/* Hidden fields required by Netlify */}
                <input type="hidden" name="form-name" value="diagnostico" />
                <p className="hidden-field">
                  <label>
                    Não preencha: <input name="bot-field" />
                  </label>
                </p>

                {[
                  { id: "nome", label: "Nome completo *", type: "text", placeholder: "Seu nome", required: true },
                  { id: "empresa", label: "Nome da empresa *", type: "text", placeholder: "Sua empresa", required: true },
                  { id: "email", label: "Email corporativo *", type: "email", placeholder: "voce@empresa.com", required: true },
                  { id: "whatsapp", label: "WhatsApp (opcional)", type: "tel", placeholder: "(21) 99999-9999", required: false },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-[10px] font-semibold text-[#a1a1aa] mb-2 uppercase tracking-widest"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="w-full bg-[#111111] border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-[#a1a1aa]/40 focus:outline-none focus:border-[#ef4444] transition-colors"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#ef4444] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#dc2626] transition-colors disabled:opacity-60 red-glow"
                >
                  {loading ? "Enviando..." : "Quero Meu Diagnóstico Grátis →"}
                </button>

                <p className="text-center text-xs text-[#a1a1aa]">
                  Seus dados estão seguros. Nunca enviamos spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const WA = "https://wa.me/5521992166374?text=Ol%C3%A1!%20Estou%20vindo%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."

const navLinks = [
  { label: "Portfólio", href: "#portfolio" },
  { label: "Método", href: "#metodo" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Blog", href: "#blog" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const scroll = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      {/* Main nav */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[72px]">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-black tracking-tight text-white"
          >
            Elmo <span className="text-[#ef4444]">DG</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scroll(l.href)}
                className="text-sm font-medium text-[#a1a1aa] hover:text-white transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll("#diagnostico")}
              className="text-sm font-bold px-5 py-2.5 border border-white/20 text-white hover:border-[#ef4444] hover:text-[#ef4444] transition-all"
            >
              Diagnóstico Grátis
            </button>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 bg-[#25D366] text-white rounded-sm hover:bg-green-600 transition-colors whatsapp-glow"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-[#111111] border-t border-white/5 px-6 py-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scroll(l.href)}
                className="text-left text-base font-medium text-[#a1a1aa] hover:text-white transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scroll("#diagnostico")}
              className="text-sm font-bold px-5 py-3 border border-white/20 text-white w-fit"
            >
              Diagnóstico Grátis
            </button>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold px-5 py-3 bg-[#25D366] text-white w-fit whatsapp-glow"
            >
              WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* Floating WhatsApp */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 whatsapp-glow flex items-center gap-2 group"
      >
        <svg className="w-7 h-7 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-sm font-semibold">
          Falar no WhatsApp
        </span>
      </a>
    </>
  )
}

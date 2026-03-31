"use client"

import Image from "next/image"
import { useState } from "react"

const WA = "https://wa.me/5521992166374?text=Ol%C3%A1!%20Estou%20vindo%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."

// YouTube Shorts — embed via nocookie for privacy & perf
const videos = [
  {
    id: "6XGR7YBkFnU",
    title: "Identidade de marca que impõe respeito",
    tag: "Branding",
  },
  {
    id: "Onsah8qHG3M",
    title: "Posicionamento que fecha contratos maiores",
    tag: "Estratégia",
  },
  {
    id: "fv5IlDyhk2g",
    title: "Como a percepção decide quem vende caro",
    tag: "Autoridade",
  },
]

const images = [
  {
    src: "/portfolio-1.jpg",
    title: "Rebranding B2B — TechBrasil",
    tag: "Identidade Visual",
  },
  {
    src: "/portfolio-2.jpg",
    title: "Guia de Marca — FinPro",
    tag: "Brand System",
  },
  {
    src: "/portfolio-3.jpg",
    title: "Presença Digital — Construtora Viva",
    tag: "Presença Premium",
  },
]

function VideoCard({ video }: { video: (typeof videos)[0] }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="group relative bg-[#111111] border border-white/5 overflow-hidden flex flex-col">
      {/* Tag */}
      <div className="absolute top-3 left-3 z-20">
        <span className="text-[10px] font-semibold uppercase tracking-widest px-2 py-1 bg-[#ef4444] text-white">
          {video.tag}
        </span>
      </div>

      {/* Video — 9:16 short aspect ratio */}
      <div className="relative w-full" style={{ aspectRatio: "9/16" }}>
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&controls=1&modestbranding=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <>
            {/* Thumbnail via YouTube */}
            <img
              src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            {/* Play button */}
            <button
              onClick={() => setPlaying(true)}
              aria-label={`Reproduzir: ${video.title}`}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#ef4444] flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.5)] group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </>
        )}
      </div>

      {/* Caption */}
      <div className="p-4 flex-1 flex items-end">
        <p className="text-sm font-semibold text-white leading-snug">{video.title}</p>
      </div>
    </div>
  )
}

function ImageCard({ item }: { item: (typeof images)[0] }) {
  return (
    <div className="group relative bg-[#111111] border border-white/5 overflow-hidden">
      <div className="absolute top-3 left-3 z-10">
        <span className="text-[10px] font-semibold uppercase tracking-widest px-2 py-1 bg-[#0a0a0a]/80 text-[#a1a1aa] border border-white/10 backdrop-blur-sm">
          {item.tag}
        </span>
      </div>

      <div className="relative overflow-hidden" style={{ aspectRatio: "1080/1350" }}>
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      </div>

      <div className="p-4">
        <p className="text-sm font-semibold text-white leading-snug">{item.title}</p>
      </div>
    </div>
  )
}

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header — akeo style: big left-aligned label + right CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[10px] text-[#ef4444] uppercase tracking-[0.2em] mb-3 font-semibold">
              — Trabalhos Recentes
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white text-balance leading-[0.95]">
              FINEST<br />
              <span className="gradient-text">SELECTION</span>
            </h2>
          </div>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-white border border-white/20 px-6 py-3 hover:border-[#ef4444] hover:text-[#ef4444] transition-all shrink-0 self-start md:self-auto"
          >
            Quero um projeto assim
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Grid: 3 columns on desktop, stacked on mobile */}
        {/* Videos row */}
        <div className="mb-2">
          <p className="text-[10px] text-[#a1a1aa] uppercase tracking-widest mb-4">Conteúdo em vídeo</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5">
            {videos.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        </div>

        {/* Images row */}
        <div className="mt-1">
          <p className="text-[10px] text-[#a1a1aa] uppercase tracking-widest mb-4 mt-8">Identidades visuais</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5">
            {images.map((img) => (
              <ImageCard key={img.src} item={img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

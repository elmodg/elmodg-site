import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#E10600]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#FFD700]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f5f7] rounded-full mb-8">
              <span className="w-2 h-2 bg-[#E10600] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#6e6e73]">
                Agência de Marketing Digital
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1a1a1a] leading-[1.05] mb-6">
              Autoridade
              <br />
              <span className="gradient-text">Que Vende</span>
            </h1>

            <p className="text-lg lg:text-xl text-[#6e6e73] max-w-xl mb-10 leading-relaxed">
              Construímos marcas que parecem maiores, mais confiáveis e mais
              desejadas. Transforme sua presença digital em uma máquina de
              conversão.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E10600] text-white text-base font-semibold rounded-full hover:bg-[#c00500] transition-all duration-300 hover:shadow-lg hover:shadow-[#E10600]/25 group"
              >
                Solicitar Diagnóstico
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#metodo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1a1a1a] text-base font-semibold rounded-full border border-black/10 hover:bg-[#f5f5f7] transition-all duration-300 group"
              >
                <Play className="w-5 h-5 text-[#E10600]" />
                Conhecer Método
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-black/5">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-[#1a1a1a]">
                  150+
                </div>
                <div className="text-sm text-[#6e6e73] mt-1">
                  Marcas Transformadas
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-[#1a1a1a]">
                  3x
                </div>
                <div className="text-sm text-[#6e6e73] mt-1">
                  Média de Crescimento
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-[#1a1a1a]">
                  98%
                </div>
                <div className="text-sm text-[#6e6e73] mt-1">
                  Clientes Satisfeitos
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-[2.5rem] p-8 lg:p-10 shadow-2xl overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#E10600]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FFD700]/10 rounded-full blur-2xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <img
                        src="/logo.png"
                        alt="Elmo DG"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Elmo DG</div>
                      <div className="text-white/60 text-sm">
                        Autoridade Que Vende
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-2xl p-5 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white/60 text-sm">
                          Reconhecimento de Marca
                        </span>
                        <span className="text-[#FFD700] text-sm font-semibold">
                          +287%
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[87%] bg-gradient-to-r from-[#E10600] to-[#FFD700] rounded-full" />
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-5 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white/60 text-sm">
                          Taxa de Conversão
                        </span>
                        <span className="text-[#FFD700] text-sm font-semibold">
                          +156%
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[72%] bg-gradient-to-r from-[#E10600] to-[#FFD700] rounded-full" />
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-5 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white/60 text-sm">
                          Autoridade no Nicho
                        </span>
                        <span className="text-[#FFD700] text-sm font-semibold">
                          +342%
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[94%] bg-gradient-to-r from-[#E10600] to-[#FFD700] rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="text-white/60 text-sm">
                        Resultado em 90 dias
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-sm font-medium">
                          Em crescimento
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-black/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E10600]/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#E10600]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#1a1a1a] font-bold text-lg">
                      +245%
                    </div>
                    <div className="text-[#6e6e73] text-xs">Vendas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

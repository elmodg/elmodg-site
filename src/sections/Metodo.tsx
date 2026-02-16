import { useEffect, useRef, useState } from 'react';
import { Search, Palette, Megaphone, TrendingUp, Check } from 'lucide-react';

export function Metodo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Diagnóstico de Percepção',
      description:
        'Analisamos como sua marca é percebida atualmente e identificamos gaps de autoridade que estão impedindo seu crescimento.',
      features: [
        'Análise de presença digital',
        'Mapeamento de concorrência',
        'Identificação de oportunidades',
      ],
      color: '#E10600',
    },
    {
      number: '02',
      icon: Palette,
      title: 'Construção de Imagem Forte',
      description:
        'Desenvolvemos uma identidade visual e verbal que transmite autoridade, expertise e confiança desde o primeiro contato.',
      features: [
        'Identidade visual premium',
        'Tom de voz autoritário',
        'Narrativa de marca',
      ],
      color: '#FFD700',
    },
    {
      number: '03',
      icon: Megaphone,
      title: 'Amplificação Estratégica',
      description:
        'Multiplicamos o alcance da sua mensagem através de canais estratégicos que reforçam sua posição de autoridade.',
      features: [
        'Conteúdo de valor',
        'Social proof estratégico',
        'Parcerias de influência',
      ],
      color: '#E10600',
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Conversão por Confiança',
      description:
        'Convertemos visitantes em clientes através de uma jornada de vendas que elimina objeções antes mesmo delas surgirem.',
      features: [
        'Jornada otimizada',
        'Remoção de fricções',
        'Aumento de ticket médio',
      ],
      color: '#FFD700',
    },
  ];

  return (
    <section ref={sectionRef} id="metodo" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f5f7] rounded-full text-sm font-medium text-[#1a1a1a] mb-6">
            Nosso Processo
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-tight mb-6">
            Método DG de{' '}
            <span className="gradient-text">Autoridade</span>
          </h2>

          <p className="text-lg text-[#6e6e73] leading-relaxed">
            Um processo estruturado em 4 etapas para transformar sua marca em
            uma autoridade irresistível no seu mercado.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`group relative bg-[#f5f5f7] rounded-3xl p-8 lg:p-10 hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-500 border border-transparent hover:border-black/5 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Number */}
              <div
                className="absolute top-6 right-6 text-6xl font-bold opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ color: step.color }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${step.color}15` }}
              >
                <step.icon
                  className="w-7 h-7"
                  style={{ color: step.color }}
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
                {step.title}
              </h3>

              <p className="text-[#6e6e73] leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {step.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-[#1a1a1a]"
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${step.color}15` }}
                    >
                      <Check
                        className="w-3 h-3"
                        style={{ color: step.color }}
                      />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(to right, ${step.color}, ${step.color}80)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white text-base font-semibold rounded-full hover:bg-[#E10600] transition-colors duration-300"
          >
            Quero Aplicar o Método DG
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

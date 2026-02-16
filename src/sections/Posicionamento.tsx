import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, TrendingUp, Target, Shield } from 'lucide-react';

export function Posicionamento() {
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

  const problems = [
    {
      icon: AlertTriangle,
      title: 'Falta de Credibilidade',
      description:
        'Potenciais clientes desconfiam quando sua marca não transmite autoridade.',
    },
    {
      icon: TrendingUp,
      title: 'Concorrência Acirrada',
      description:
        'Mercados saturados onde o menor preço parece ser a única opção.',
    },
    {
      icon: Target,
      title: 'Baixa Conversão',
        description:
        'Visitantes não se tornam clientes por falta de percepção de valor.',
    },
    {
      icon: Shield,
      title: 'Imagem Fraca',
      description:
        'Sua marca não é lembrada ou diferenciada da concorrência.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="posicionamento"
      className="py-24 lg:py-32 bg-[#f5f5f7]"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-[#E10600] mb-6 shadow-sm">
              O Problema
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-tight mb-6">
              Empresas não perdem vendas por falta de anúncios.
            </h2>

            <p className="text-xl lg:text-2xl text-[#6e6e73] leading-relaxed mb-8">
              Perdem porque{' '}
              <span className="text-[#1a1a1a] font-semibold">
                não parecem confiáveis o suficiente
              </span>{' '}
              para vender caro.
            </p>

            <p className="text-base text-[#6e6e73] leading-relaxed mb-8">
              A maioria das empresas investe em tráfego, mas esquece o elemento
              mais importante: a{' '}
              <span className="text-[#E10600] font-medium">
                percepção de autoridade
              </span>
              . Quando sua marca transmite confiança e expertise, o preço
              deixa de ser uma objeção e se torna um reflexo do seu valor.
            </p>

            <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-black/5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E10600] to-[#FFD700] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-[#1a1a1a] font-semibold mb-1">
                  A Solução
                </div>
                <div className="text-[#6e6e73] text-sm">
                  Construir uma marca que transmite autoridade, confiança e
                  desejabilidade antes mesmo do primeiro contato.
                </div>
              </div>
            </div>
          </div>

          {/* Problems Grid */}
          <div
            className={`grid sm:grid-cols-2 gap-4 transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {problems.map((problem, index) => (
              <div
                key={problem.title}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-black/5 hover:shadow-lg hover:border-[#E10600]/20 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#f5f5f7] group-hover:bg-[#E10600]/10 flex items-center justify-center mb-4 transition-colors">
                  <problem.icon className="w-6 h-6 text-[#6e6e73] group-hover:text-[#E10600] transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

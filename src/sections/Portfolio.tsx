import { useEffect, useRef, useState } from 'react';
import { ExternalLink, TrendingUp, Users, Award } from 'lucide-react';

export function Portfolio() {
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

  const projects = [
    {
      category: 'E-commerce',
      title: 'Loja de Moda Premium',
      description:
        'Reposicionamento de marca que resultou em 340% de aumento nas vendas em 6 meses.',
      stats: [
        { icon: TrendingUp, value: '+340%', label: 'Vendas' },
        { icon: Users, value: '+180%', label: 'Tráfego' },
      ],
      gradient: 'from-[#E10600] to-[#ff6b6b]',
    },
    {
      category: 'Serviços',
      title: 'Consultoria Financeira',
      description:
        'Construção de autoridade que permitiu aumento de 85% no ticket médio.',
      stats: [
        { icon: Award, value: '+85%', label: 'Ticket Médio' },
        { icon: TrendingUp, value: '+220%', label: 'Leads' },
      ],
      gradient: 'from-[#FFD700] to-[#ffed4a]',
    },
    {
      category: 'Tecnologia',
      title: 'SaaS B2B',
      description:
        'Estratégia de autoridade que gerou 500+ novos trials qualificados por mês.',
      stats: [
        { icon: Users, value: '500+', label: 'Trials/Mês' },
        { icon: TrendingUp, value: '+156%', label: 'Conversão' },
      ],
      gradient: 'from-[#1a1a1a] to-[#4a4a4a]',
    },
  ];

  const testimonials = [
    {
      quote:
        'A Elmo DG transformou completamente nossa presença digital. Hoje somos reconhecidos como autoridade no nosso nicho.',
      author: 'Carlos Mendes',
      role: 'CEO, TechFlow',
      avatar: 'CM',
    },
    {
      quote:
        'O método deles é impressionante. Em 90 dias, nossa taxa de conversão triplicou.',
      author: 'Ana Paula Silva',
      role: 'Diretora de Marketing, Luxo Moda',
      avatar: 'AS',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="py-24 lg:py-32 bg-[#f5f5f7]"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-[#1a1a1a] mb-6 shadow-sm">
              Portfólio
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
              Resultados que{' '}
              <span className="gradient-text">falam por si</span>
            </h2>
          </div>

          <p className="text-lg text-[#6e6e73] max-w-md">
            Marcas que transformamos em autoridades reconhecidas e lucrativas.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card Header */}
              <div
                className={`h-32 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-end`}
              >
                <span className="text-white/80 text-sm font-medium mb-1">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-bold">
                  {project.title}
                </h3>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-[#6e6e73] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {project.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-[#f5f5f7] rounded-xl p-4"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <stat.icon className="w-4 h-4 text-[#E10600]" />
                        <span className="text-lg font-bold text-[#1a1a1a]">
                          {stat.value}
                        </span>
                      </div>
                      <span className="text-xs text-[#6e6e73]">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#1a1a1a]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1a1a1a] text-sm font-semibold rounded-full hover:bg-[#E10600] hover:text-white transition-colors">
                  Ver Case Completo
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-center text-sm font-medium text-[#6e6e73] uppercase tracking-wider mb-8">
            O que nossos clientes dizem
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#FFD700]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-[#1a1a1a] text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E10600] to-[#FFD700] flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-[#1a1a1a] font-semibold">
                      {testimonial.author}
                    </div>
                    <div className="text-[#6e6e73] text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

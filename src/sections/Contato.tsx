import { useEffect, useRef, useState } from 'react';
import { Send, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

export function Contato() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    contato: '',
    empresa: '',
    desafio: '',
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ nome: '', contato: '', empresa: '', desafio: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+55 (11) 99999-9999',
      href: 'https://wa.me/5511999999999',
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'contato@elmodg.com.br',
      href: 'mailto:contato@elmodg.com.br',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'São Paulo, SP',
      href: '#',
    },
  ];

  return (
    <section ref={sectionRef} id="contato" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f5f7] rounded-full text-sm font-medium text-[#E10600] mb-6">
              Comece Agora
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-tight mb-6">
              Solicitar{' '}
              <span className="gradient-text">Diagnóstico Estratégico</span>
            </h2>

            <p className="text-lg text-[#6e6e73] leading-relaxed mb-10">
              Descubra oportunidades ocultas de autoridade na sua marca. Nossa
              análise gratuita revela exatamente onde você pode ganhar mais
              confiança e converter melhor.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {[
                'Análise completa da sua presença digital',
                'Identificação de gaps de autoridade',
                'Roadmap personalizado de 90 dias',
                'Sem compromisso, 100% gratuito',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E10600]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#E10600]" />
                  </div>
                  <span className="text-[#1a1a1a]">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-[#f5f5f7] rounded-xl hover:bg-white hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#E10600]/10 flex items-center justify-center transition-colors">
                    <info.icon className="w-5 h-5 text-[#6e6e73] group-hover:text-[#E10600] transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-[#6e6e73]">{info.label}</div>
                    <div className="text-[#1a1a1a] font-medium">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-[#f5f5f7] rounded-3xl p-8 lg:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                    Solicitação Enviada!
                  </h3>
                  <p className="text-[#6e6e73]">
                    Entraremos em contato em até 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-sm font-medium text-[#1a1a1a] mb-2"
                    >
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      placeholder="Como podemos te chamar?"
                      className="w-full px-5 py-4 bg-white rounded-xl border border-black/10 text-[#1a1a1a] placeholder:text-[#6e6e73]/60 focus:outline-none focus:ring-2 focus:ring-[#E10600]/20 focus:border-[#E10600] transition-all"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contato"
                        className="block text-sm font-medium text-[#1a1a1a] mb-2"
                      >
                        WhatsApp ou E-mail
                      </label>
                      <input
                        type="text"
                        id="contato"
                        name="contato"
                        value={formData.contato}
                        onChange={handleChange}
                        required
                        placeholder="Como entrar em contato?"
                        className="w-full px-5 py-4 bg-white rounded-xl border border-black/10 text-[#1a1a1a] placeholder:text-[#6e6e73]/60 focus:outline-none focus:ring-2 focus:ring-[#E10600]/20 focus:border-[#E10600] transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="empresa"
                        className="block text-sm font-medium text-[#1a1a1a] mb-2"
                      >
                        Empresa (opcional)
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Nome da sua empresa"
                        className="w-full px-5 py-4 bg-white rounded-xl border border-black/10 text-[#1a1a1a] placeholder:text-[#6e6e73]/60 focus:outline-none focus:ring-2 focus:ring-[#E10600]/20 focus:border-[#E10600] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="desafio"
                      className="block text-sm font-medium text-[#1a1a1a] mb-2"
                    >
                      Qual seu maior desafio? (opcional)
                    </label>
                    <textarea
                      id="desafio"
                      name="desafio"
                      value={formData.desafio}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Conte um pouco sobre o que está impedindo seu crescimento..."
                      className="w-full px-5 py-4 bg-white rounded-xl border border-black/10 text-[#1a1a1a] placeholder:text-[#6e6e73]/60 focus:outline-none focus:ring-2 focus:ring-[#E10600]/20 focus:border-[#E10600] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E10600] text-white text-base font-semibold rounded-xl hover:bg-[#c00500] transition-all duration-300 hover:shadow-lg hover:shadow-[#E10600]/25 group"
                  >
                    Solicitar Diagnóstico Gratuito
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-sm text-[#6e6e73]">
                    Ao enviar, você concorda em receber nosso contato.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

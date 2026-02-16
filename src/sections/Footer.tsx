import { Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const navLinks = [
    { href: '#posicionamento', label: 'Posicionamento' },
    { href: '#metodo', label: 'Método' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="Elmo DG"
                    className="w-9 h-9 object-contain"
                  />
                </div>
                <span className="font-bold text-xl">Elmo DG</span>
              </a>

              <p className="text-white/60 max-w-md mb-8 leading-relaxed">
                Construímos marcas que parecem maiores, mais confiáveis e mais
                desejadas. Autoridade que vende.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#E10600] transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-6">Navegação</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-6">Contato</h4>
              <ul className="space-y-4 text-white/60">
                <li>
                  <a
                    href="mailto:contato@elmodg.com.br"
                    className="hover:text-white transition-colors"
                  >
                    contato@elmodg.com.br
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5511999999999"
                    className="hover:text-white transition-colors"
                  >
                    +55 (11) 99999-9999
                  </a>
                </li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} Elmo DG. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

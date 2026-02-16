# Elmo DG - Autoridade Que Vende

Site institucional da agência de marketing digital Elmo DG, desenvolvido com React, TypeScript, Tailwind CSS e Vite.

## 🚀 Tecnologias

- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool ultrarrápida
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI reutilizáveis

## 📁 Estrutura do Projeto

```
├── public/
│   └── logo.png              # Logo da Elmo DG
├── src/
│   ├── sections/             # Seções do site
│   │   ├── Header.tsx        # Cabeçalho fixo
│   │   ├── Hero.tsx          # Seção principal
│   │   ├── Posicionamento.tsx # Problema e solução
│   │   ├── Metodo.tsx        # Método DG de Autoridade
│   │   ├── Portfolio.tsx     # Cases e depoimentos
│   │   ├── Contato.tsx       # Formulário de contato
│   │   └── Footer.tsx        # Rodapé
│   ├── App.tsx               # Componente principal
│   ├── App.css               # Estilos específicos
│   └── index.css             # Estilos globais
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🌐 Deploy no Netlify

### Opção 1: Deploy via GitHub (Recomendado)

1. **Crie um repositório no GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/elmo-dg-site.git
   git push -u origin main
   ```

2. **Conecte ao Netlify**
   - Acesse [netlify.com](https://netlify.com) e faça login (gratuito)
   - Clique em "Add new site" → "Import an existing project"
   - Selecione GitHub e autorize o Netlify
   - Escolha o repositório `elmo-dg-site`

3. **Configure o build**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Clique em "Deploy site"

4. **Deploy automático**
   - A cada push na branch `main`, o Netlify faz deploy automaticamente

### Opção 2: Deploy Manual (Drag & Drop)

1. Execute o build local:
   ```bash
   npm run build
   ```

2. Acesse [netlify.com](https://netlify.com)

3. Arraste a pasta `dist` para a área indicada

4. Seu site estará online em segundos!

## 🎨 Personalização

### Cores

As cores principais estão definidas em `src/index.css`:

```css
--elmo-red: #E10600;      /* Vermelho principal */
--elmo-gold: #FFD700;     /* Dourado */
--elmo-dark: #1a1a1a;     /* Preto */
--elmo-gray: #6e6e73;     /* Cinza */
--elmo-light: #f5f5f7;    /* Cinza claro */
```

### Conteúdo

Edite os arquivos em `src/sections/` para alterar o conteúdo do site.

### Logo

Substitua `public/logo.png` pela nova logo (mantenha o mesmo nome).

## 📱 Seções do Site

1. **Hero** - Apresentação impactante com estatísticas
2. **Posicionamento** - Problema que a agência resolve
3. **Método** - Processo de 4 etapas (Diagnóstico → Construção → Amplificação → Conversão)
4. **Portfólio** - Cases de sucesso e depoimentos
5. **Contato** - Formulário de diagnóstico gratuito

## 📄 Licença

© 2026 Elmo DG. Todos os direitos reservados.

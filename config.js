// CONFIGURAÇÃO ELMO DG - Landing Page
// Altere os valores abaixo para atualizar imagens, vídeo e logo
// Não precisa tocar no index.html!

const ELMO_CONFIG = {
    // LOGO: Coloque sua imagem na pasta assets/ como 'logo.png'
    // Ou altere o caminho abaixo para outro arquivo
    logo: {
        src: 'assets/logo.png',
        alt: 'Elmo DG - Autoridade Que Vende',
        width: 150,
        height: 50
    },

    // VÍDEO HERO: Coloque seu vídeo em assets/hero-video.mp4
    // Ou altere para URL externa (YouTube, Vimeo, etc)
    video: {
        src: 'assets/hero-video.mp4',
        poster: 'assets/video-poster.webp', // Imagem de capa antes de tocar
        autoplay: true,
        muted: true,
        loop: true
    },

    // IMAGENS DA GALERIA/SEÇÕES
    // Adicione quantas quiser, elas aparecerão automaticamente
    imagens: {
        // Hero/Prova social (fotos de clientes/rosto)
        provaSocial: [
            'assets/cliente1.webp',
            'assets/cliente2.webp', 
            'assets/cliente3.webp',
            'assets/cliente4.webp'
        ],
        
        // Galeria de trabalhos/resultados (seção opcional)
        galeria: [
            'assets/trabalho1.webp',
            'assets/trabalho2.webp',
            'assets/trabalho3.webp'
        ],
        
        // Badge/Selos (opcional)
        badges: [
            'assets/selo-garantia.webp',
            'assets/selo-seguranca.webp'
        ]
    },

    // WHATSAPP
    whatsapp: {
        numero: '5521992166374',
        mensagem: 'Olá!, Estou vindo do site e gostaria de mais informações.',
        textoBotao: 'Falar no WhatsApp',
        posicao: 'floating' // 'floating' (flutuante) ou 'hero' (no hero apenas)
    },

    // CORES (opcional - altere se quiser mudar a paleta)
    cores: {
        primaria: '#a3e635',    // Verde limão
        secundaria: '#0a0a0a',  // Preto
        texto: '#ffffff'
    }
};

// Exporta para uso global
window.ELMO_CONFIG = ELMO_CONFIG;
export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  procedure: string;
  quote: string;
  location: string;
  rating: number;
}

export const EXPERT_INFO = {
  name: "Dra. Thayana Ulrichsen",
  title: "Cirurgiã-Dentista",
  specialties: "Clareamento 3D • Ortodontia • Ortopedia • Invisalign",
  tagline: "Planejamento e cuidado exclusivo em cada sorriso",
  cro: "CRO-RJ",
  city: "Madureira, Rio de Janeiro - RJ",
  address: "Rua Carolina Machado, 560 - Sala 533",
  neighborhood: "Madureira",
  state: "Rio de Janeiro, RJ",
  cep: "21351-000",
  // Primary WhatsApp URL with pre-filled message
  whatsappUrl: "https://api.whatsapp.com/send?phone=5521982892880&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra%20Thayana%20%F0%9F%98%83",
  whatsappNumberDisplay: "(21) 98289-2880",
  // Secondary WhatsApp if needed
  whatsappBackupUrl: "https://api.whatsapp.com/send/?phone=5521995987029&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%2C%20por%20favor!",
  // Instagram profiles
  instagramUrl: "https://www.instagram.com/drathayanaulrichsen/",
  instagramSecondaryUrl: "https://www.instagram.com/dralaissimas/",
  instagramHandle: "@drathayanaulrichsen",
  googleMapsUrl: "https://maps.google.com/?q=Rua+Carolina+Machado+560+Madureira+Rio+de+Janeiro+RJ",
  heroPhoto: "https://i.imgur.com/EMzc5sI.png",
  authorityPhoto: "https://i.imgur.com/DKmgq5n.png",
};

/**
 * GALERIA DE RESULTADOS / ANTES E DEPOIS
 * Você pode adicionar mais imagens a qualquer momento incluindo novos itens neste array:
 * {
 *   id: "novo-id",
 *   url: "https://link-da-sua-imagem.png",
 *   title: "Título do procedimento",
 *   category: "Categoria (ex: Clareamento 3D ou Invisalign)",
 *   description: "Breve detalhe do caso"
 * }
 */
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "caso-1",
    url: "https://i.imgur.com/uXrGfYu.png",
    title: "Alinhamento & Estética Dental",
    category: "Ortodontia & Clareamento",
    description: "Harmonização completa do arco com correção de apinhamento e clareamento."
  },
  {
    id: "caso-2",
    url: "https://i.imgur.com/sJ3N6vM.png",
    title: "Transformação do Sorriso",
    category: "Clareamento 3D",
    description: "Remoção de pigmentações e realce do brilho natural dos dentes."
  },
  {
    id: "caso-3",
    url: "https://i.imgur.com/I0UZMjR.png",
    title: "Harmonia e Alinhamento Preciso",
    category: "Invisalign / Alinhadores",
    description: "Correção de mordida e espaçamento sem o desconforto de braquetes metálicos."
  },
  {
    id: "caso-4",
    url: "https://i.imgur.com/DBMKCFs.png",
    title: "Fechamento de Diastemas",
    category: "Ortopedia & Ortodontia",
    description: "Planejamento funcional para sorriso alinhado e melhora na mastigação."
  },
  {
    id: "caso-5",
    url: "https://i.imgur.com/ceJ9mM6.png",
    title: "Evolução do Tratamento Digital",
    category: "Invisalign",
    description: "Acompanhamento milimétrico com tecnologia 3D até a posição ideal."
  },
  {
    id: "caso-6",
    url: "https://i.imgur.com/jfjeexs.png",
    title: "Resultado Natural & Luminoso",
    category: "Clareamento 3D",
    description: "Técnica personalizada com máxima proteção e zero sensibilidade pós-procedimento."
  }
];

export const TRUST_POINTS = [
  {
    icon: "UserCheck",
    title: "Atendimento 100% Comigo",
    description: "Você não será atendido por estagiários nem trocado de dentista a cada mês. Eu planejo e executo cada detalhe do seu sorriso."
  },
  {
    icon: "ShieldCheck",
    title: "Avaliação Honesta e Clara",
    description: "Diagnóstico transparente, sem termos técnicos complicados e sem empurrar procedimentos desnecessários."
  },
  {
    icon: "Sparkles",
    title: "Tecnologia 3D & Invisalign",
    description: "Planejamento digital moderno para você prever o resultado antes mesmo de iniciar o tratamento."
  },
  {
    icon: "Clock",
    title: "Respeito ao Seu Tempo",
    description: "Consultas com horário marcado individual e sem filas intermináveis na sala de espera de clínica."
  },
  {
    icon: "HeartHandshake",
    title: "Cuidado Sem Julgamentos",
    description: "Seja por medo de dentista ou vergonha de sorrir, aqui você encontra um ambiente seguro, acolhedor e gentil."
  },
  {
    icon: "MapPin",
    title: "Fácil Acesso em Madureira",
    description: "Consultório moderno na Rua Carolina Machado 560, sala 533, com portaria e segurança central."
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Clique no WhatsApp",
    subtitle: "Conversa direta",
    description: "Você me envia uma mensagem e minha equipe ou eu respondemos rapidamente para escolher seu melhor dia e horário."
  },
  {
    step: "02",
    title: "Consulta no Consultório",
    subtitle: "Avaliação 100% gratuita",
    description: "Nos encontramos em Madureira. Analiso seus dentes, ouço suas vontades e explico o estado do seu sorriso com total calma."
  },
  {
    step: "03",
    title: "Planejamento Sem Compromisso",
    subtitle: "Decisão no seu tempo",
    description: "Apresento o melhor caminho (Clareamento 3D, Ortodontia ou Invisalign) com valores e prazos claros. Você decide sem pressão."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Mariana Siqueira",
    procedure: "Clareamento 3D",
    location: "Madureira - RJ",
    quote: "A Dra. Thayana foi impecável! Tinha muito medo de sensibilidade por experiências ruins anteriores, mas o clareamento com ela foi super tranquilo e meu sorriso ficou lindo.",
    rating: 5
  },
  {
    id: "t2",
    name: "Carlos Eduardo Mendes",
    procedure: "Invisalign",
    location: "Vila Valqueire - RJ",
    quote: "O atendimento dela é diferenciado. Em clínicas comuns parecia que ninguém olhava na minha cara. Com a Dra. Thayana, cada consulta é uma aula de atenção e cuidado.",
    rating: 5
  },
  {
    id: "t3",
    name: "Juliana Peixoto",
    procedure: "Ortodontia & Estética",
    location: "Cascadura - RJ",
    quote: "A primeira consulta gratuita me passou tanta segurança que comecei no mesmo mês. Hoje não escondo mais meu sorriso nas fotos!",
    rating: 5
  }
];

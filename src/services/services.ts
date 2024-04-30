export const themaList = [
  "light",
  "dark",
  // "cupcake",
  // "bumblebee",
  // "emerald",
  // "corporate",
  // "synthwave",
  // "retro",
  // "cyberpunk",
  // "valentine",
  // "halloween",
  // "garden",
  "forest",
  // "aqua",
  // "lofi",
  // "pastel",
  "fantasy",
  // "wireframe",
  // "black",
  "luxury",
  "dracula",
  // "cmyk",
  // "autumn",
  // "business",
  // "acid",
  // "lemonade",
  "night",
  "coffee",
  // "winter",
  // "dim",
  // "nord",
  // "sunset",
];

export const categoriasServicos = [
  {
    categoria: "Serviços de Construção e Reforma",
    icon: "icons/construcao.svg",
    subcategorias: [
      "Pedreiro",
      "Encanador",
      "Eletricista",
      "Pintor",
      "Marceneiro",
      "Jardineiro",
      "Arquiteto",
      "Engenheiro Civil",
    ],
  },
  {
    categoria: "Serviços de Beleza e Estética",
    icon: "icons/beleza.svg",
    subcategorias: [
      "Cabeleireiro",
      "Manicure",
      "Esteticista",
      "Maquiador",
      "Barbeiro",
      "Massagista",
      "Depiladora",
    ],
  },
  {
    categoria: "Serviços de Saúde e Bem-Estar",
    icon: "icons/saude.svg",
    subcategorias: [
      "Nutricionista",
      "Personal Trainer",
      "Fisioterapeuta",
      "Psicólogo",
      "Quiropraxista",
      "Terapeuta Holístico",
      "Coach de Vida",
    ],
  },
  {
    categoria: "Serviços de cnologia e Informática",
    icon: "icons/tech.svg",
    subcategorias: [
      "Desenvolvedor Web",
      "Designer Gráfico",
      "Suporte Técnico",
      "Consultor de TI",
      "Especialista em Redes",
      "Analista de Dados",
      "Programador",
    ],
  },
  {
    categoria: "Serviços de Consultoria e Assessoria",
    icon: "icons/consultoria.svg",
    subcategorias: [
      "Consultor Financeiro",
      "Consultor de Marketing",
      "Consultor Jurídico",
      "Consultor de Recursos Humanos",
      "Assessor Contábil",
      "Assessor de Imprensa",
      "Assessor de Eventos",
    ],
  },
  {
    categoria: "Alimantação",
    icon: "icons/alimento.svg",
    subcategorias: [
      "Consultor Financeiro",
      "Consultor de Marketing",
      "Consultor Jurídico",
      "Consultor de Recursos Humanos",
      "Assessor Contábil",
      "Assessor de Imprensa",
      "Assessor de Eventos",
    ],
  },
];

export const userServico = {
  usuarios: [
    {
      id: "01",
      avatar: "/images/dev8.svg",
      descricao: "Profissional liberal",
      star: 5,
      nome: "Maria Oliveira",
      profissao: "Web Designer",
      experiencia: "8 anos",
      especialidades: ["UI/UX Design", "Responsive Design"],
      contato: {
        email: "maria.designer@email.com",
        telefone: "(11) 98765-4321",
      },
      portfolio: [
        {
          projeto: "Website Corporativo",
          cliente: "Empresa ABC",
          resultado: "Aumento de tráfego",
        },
        {
          projeto: "Redesign de Aplicativo",
          cliente: "Startup XYZ",
          resultado: "Melhoria na usabilidade",
        },
      ],
    },
    {
      id: "02",
      avatar: "/images/dev3.svg",
      descricao: "Profissional liberal",
      star: 5,
      nome: "João Silva",
      profissao: "Desenvolvedor Front-end",
      experiencia: "6 anos",
      especialidades: ["HTML", "CSS", "JavaScript"],
      contato: {
        email: "joao.dev@email.com",
        telefone: "(11) 12345-6789",
      },
      portfolio: [
        {
          projeto: "E-commerce",
          cliente: "Loja Online",
          resultado: "Aumento nas vendas",
        },
        {
          projeto: "Aplicativo de Blog",
          cliente: "Blog pessoal",
          resultado: "Aumento no engajamento",
        },
      ],
    },
    {
      id: "03",
      avatar: "/images/dev4.svg",
      descricao: "Profissional liberal",
      star: 5,
      nome: "Ana Santos",
      profissao: "Desenvolvedora Full Stack",
      experiencia: "7 anos",
      especialidades: ["JavaScript", "Node.js", "React", "MongoDB"],
      contato: {
        email: "ana.fullstack@email.com",
        telefone: "(11) 55555-5555",
      },
      portfolio: [
        {
          projeto: "Sistema de Gestão de Projetos",
          cliente: "Empresa XYZ",
          resultado: "Aumento na eficiência operacional",
        },
        {
          projeto: "Aplicativo de Chat",
          cliente: "Startup ABC",
          resultado: "Aumento na interação do usuário",
        },
      ],
    },
    {
      id: "04",
      avatar: "/images/dev3.svg",
      descricao: "Profissional liberal",
      star: 5,
      nome: "Pedro Lima",
      profissao: "Analista de Dados",
      experiencia: "5 anos",
      especialidades: ["Python", "SQL", "Machine Learning"],
      contato: {
        email: "pedro.data@email.com",
        telefone: "(11) 77777-7777",
      },
      portfolio: [
        {
          projeto: "Análise de Mercado",
          cliente: "Empresa ABC",
          resultado: "Identificação de novas oportunidades",
        },
        {
          projeto: "Previsão de Vendas",
          cliente: "Varejista XYZ",
          resultado: "Aumento na precisão das previsões",
        },
      ],
    },
    {
      id: "05",
      avatar: "/images/dev6.svg",
      descricao: "Profissional liberal",
      star: 5,
      nome: "Carlos Ferreira",
      profissao: "Engenheiro de Software",
      experiencia: "10 anos",
      especialidades: ["Java", "Spring Boot", "Microservices"],
      contato: {
        email: "carlos.engineer@email.com",
        telefone: "(11) 12345-6789",
      },
      portfolio: [
        {
          projeto: "Sistema de Gestão de Finanças",
          cliente: "Instituição Financeira",
          resultado: "Redução de custos operacionais",
        },
        {
          projeto: "Plataforma de E-commerce",
          cliente: "Empresa de Varejo",
          resultado: "Aumento nas vendas online",
        },
      ],
    },
    {
      id: "06",
      avatar: "/images/dev7.svg",
      descricao: "Profissional liberal",
      star: 5,
      nome: "Laura Martins",
      profissao: "Analista de Marketing Digital",
      experiencia: "6 anos",
      especialidades: ["SEO", "Marketing de Conteúdo", "Google Analytics"],
      contato: {
        email: "laura.marketing@email.com",
        telefone: "(11) 98765-4321",
      },
      portfolio: [
        {
          projeto: "Campanha de Redes Sociais",
          cliente: "Empresa de Tecnologia",
          resultado: "Aumento no engajamento do público-alvo",
        },
        {
          projeto: "Estratégia de Email Marketing",
          cliente: "Startup de E-commerce",
          resultado: "Aumento nas taxas de conversão",
        },
      ],
    },
    {
      id: "07",
      avatar: "/images/dev6.svg",
      descricao: "Profissional liberal",
      star: 5,
      nome: "Laura Martins",
      profissao: "Analista de Marketing Digital",
      experiencia: "6 anos",
      especialidades: ["SEO", "Marketing de Conteúdo", "Google Analytics"],
      contato: {
        email: "laura.marketing@email.com",
        telefone: "(11) 98765-4321",
      },
      portfolio: [
        {
          projeto: "Campanha de Redes Sociais",
          cliente: "Empresa de Tecnologia",
          resultado: "Aumento no engajamento do público-alvo",
        },
        {
          projeto: "Estratégia de Email Marketing",
          cliente: "Startup de E-commerce",
          resultado: "Aumento nas taxas de conversão",
        },
      ],
    },
    {
      id: "08",
      avatar: "/images/dev8.svg",
      descricao: "Profissional liberal",
      star: 5,
      nome: "Maria Oliveira",
      profissao: "Web Designer",
      experiencia: "8 anos",
      especialidades: ["UI/UX Design", "Responsive Design"],
      contato: {
        email: "maria.designer@email.com",
        telefone: "(11) 98765-4321",
      },
      portfolio: [
        {
          projeto: "Website Corporativo",
          cliente: "Empresa ABC",
          resultado: "Aumento de tráfego",
        },
        {
          projeto: "Redesign de Aplicativo",
          cliente: "Startup XYZ",
          resultado: "Melhoria na usabilidade",
        },
      ],
    },
  ],
};

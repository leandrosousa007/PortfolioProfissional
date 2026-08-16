import type { NavigationItem, Project, TechnologyGroup, TimelineEntry } from "../types/portfolio";

export const navigationItems: NavigationItem[] = [
  { id: "inicio", label: "Início" },
  { id: "trajetoria", label: "Minha trajetória" },
  { id: "tecnologias", label: "Tecnologias" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
];

export const education: TimelineEntry[] = [
  {
    id: "ufu",
    type: "education",
    title: "Bacharelado em Ciência da Computação",
    organization: "Universidade Federal de Uberlândia - UFU",
    period: "dez/2024 - jun/2028",
    role: "5º semestre",
    description:
      "Na graduação, amplio minha base em desenvolvimento de software, programação orientada a objetos e banco de dados. A formação também se conecta às minhas atividades de monitoria, extensão e empresa júnior.",
    focusAreas: [
      "Desenvolvimento de Software",
      "Programação Orientada a Objetos",
      "Banco de Dados",
      "Projetos Web",
    ],
  },
  {
    id: "iftm",
    type: "education",
    title: "Ensino Médio Técnico em Desenvolvimento de Sistemas",
    organization: "Instituto Federal do Triângulo Mineiro - IFTM",
    period: "2022 - 2024",
    description:
      "Formação integrada que consolidou minha base em programação, desenvolvimento web, banco de dados e construção de sistemas. Em 2024, apresentei um trabalho na Feira de Inovação do IFTM.",
    focusAreas: [
      "Lógica de Programação",
      "Desenvolvimento Web",
      "Banco de Dados",
      "Desenvolvimento de Sistemas",
    ],
  },
];

export const experiences: TimelineEntry[] = [
  {
    id: "ascii",
    type: "experience",
    title: "ASCII Empresa Júnior",
    organization: "Universidade Federal de Uberlândia",
    role: "Assessor do Administrativo e Financeiro",
    description:
      "Atuo em projetos web com foco em landing pages e design responsivo. Também apoio a diretoria em rotinas financeiras e administrativas da empresa júnior.",
    focusAreas: ["Landing Pages", "Design Responsivo", "Gestão Administrativa", "Finanças", "Trabalho em Equipe"],
  },
  {
    id: "monitoria-poo",
    type: "experience",
    title: "Programação Orientada a Objetos",
    organization: "Universidade Federal de Uberlândia",
    role: "Monitor",
    description:
      "Auxiliei estudantes em dúvidas teóricas e práticas, corrigi atividades de laboratório e apoiei diretamente a professora da disciplina.",
    focusAreas: ["POO", "Java", "Apoio Didático", "Atividades de Laboratório"],
  },
  {
    id: "museu-extensao",
    type: "experience",
    title: "Projeto de Extensão Museu da Computação",
    organization: "FACOM - UFU",
    role: "Extensionista",
    description:
      "Fui responsável pela manutenção técnica e atualização do site do museu, além de conduzir workshops e apresentações para divulgação científica e tecnológica.",
    focusAreas: ["Manutenção Web", "Workshops", "Apresentações", "Divulgação Científica"],
  },
  {
    id: "museu-monitor",
    type: "experience",
    title: "Museu da Computação",
    organization: "FACOM - UFU",
    role: "Monitor",
    description:
      "Orientei estudantes responsáveis pelo site, apoiando a implementação de funcionalidades e a identificação de erros no código.",
    focusAreas: ["Mentoria", "Depuração", "Implementação Web", "Colaboração"],
  },
  {
    id: "atletica",
    type: "experience",
    title: "Atlética Computação UFU",
    organization: "Universidade Federal de Uberlândia",
    role: "Diretor de Marketing",
    description:
      "Gerenciei redes sociais e comunicação visual, criando artes, editando vídeos e planejando a divulgação de eventos e competições.",
    focusAreas: ["Marketing", "Redes Sociais", "Design", "Edição de Vídeo", "Eventos"],
  },
  
];

export const certifications = [
  "Inglês básico",
  "Programação em C++ - níveis iniciante e intermediário",
  "Fundamentos de SQL e manipulação de dados",
  "DevFest Triângulo 2023 e 2025",
  "Apresentador na Feira de Inovação 2024 - IFTM",
  "Mesa-redonda: Como os computadores evoluíram - IV Seminário das UCPs",
];

export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Linguagens",
    technologies: [
      { name: "Java", icon: "language-java", color: "#E76F00" },
      { name: "JavaScript", icon: "language-javascript", color: "#C9A900" },
      { name: "C", icon: "language-c", color: "#5C6BC0" },
      { name: "C++", icon: "language-cpp", color: "#00599C" },
      { name: "SQL", icon: "database-search", color: "#2F6F9F" },
      { name: "HTML", icon: "language-html5", color: "#E85D26" },
      { name: "CSS", icon: "language-css3", color: "#2465F1" },
    ],
  },
  {
    title: "Frontend e mobile",
    technologies: [
      { name: "Angular", icon: "angular", color: "#DD0031" },
      { name: "React Native", icon: "react", color: "#149ECA" },
    ],
  },
  {
    title: "Backend",
    technologies: [{ name: "Spring Boot", icon: "leaf", color: "#6DB33F" }],
  },
  {
    title: "Banco de dados",
    technologies: [
      { name: "PostgreSQL", icon: "elephant", color: "#336791" },
      { name: "MySQL", icon: "dolphin", color: "#00758F" },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "viveiro-brasil-cerrado",
    name: "Viveiro Brasil Cerrado",
    category: "Site institucional",
    description: "Site criado para um viveiro de Araguari apresentar a empresa, seus serviços e facilitar o contato com clientes.",
    details: "Projeto institucional desenvolvido para organizar a presença digital do Viveiro Brasil Cerrado. A página apresenta a empresa, seus produtos e serviços em uma estrutura responsiva, além de facilitar o contato de potenciais clientes.",
    stack: ["HTML", "CSS", "JavaScript"],
    competencies: ["Desenvolvimento responsivo", "Arquitetura de conteúdo", "Interface institucional", "Publicação web", "Experiência do usuário"],
    image: require("../assets/images/projects/viveiro.jpg"),
    liveUrl: "https://viveirobrasilcerrado.com.br/",
  },
  {
    slug: "ra-pratas",
    name: "RA Pratas",
    category: "Site de vendas",
    description: "Presença digital desenvolvida para a venda de joias, com foco na apresentação dos produtos da marca.",
    details: "Site desenvolvido para fortalecer a presença digital da RA Pratas e apresentar suas joias de forma clara e visual. O projeto prioriza navegação simples, adaptação para diferentes telas e acesso rápido às informações da marca.",
    stack: ["HTML", "CSS", "JavaScript"],
    competencies: ["Design responsivo", "Apresentação de produtos", "Identidade visual", "Organização de catálogo", "Deploy na Vercel"],
    image: require("../assets/images/projects/pratas.jpg"),
    liveUrl: "https://ra-pratas.vercel.app/",
  },
  {
    slug: "society-education",
    name: "Society Education",
    category: "Projeto integrador",
    description: "Sistema para cadastrar escolas, alunos e ocorrências disciplinares, conectado a um banco de dados.",
    details: "Sistema acadêmico criado para centralizar o cadastro de escolas, estudantes e ocorrências disciplinares. A aplicação combina uma interface web com regras de negócio em Java e persistência em banco de dados.",
    stack: ["Java", "Spring Boot", "SQL", "JavaScript"],
    competencies: ["Programação orientada a objetos", "APIs e regras de negócio", "Modelagem de dados", "Integração front-end e back-end", "Operações CRUD"],
    image: require("../assets/images/projects/society-education.jpg"),
    repositoryUrl: "https://github.com/leandrosousa007/projetoIntegrador/tree/main/SocietyEducationFinal",
  },
  {
    slug: "tartamat",
    name: "TartaMat",
    category: "Aplicativo mobile",
    description: "Aplicativo feito para auxiliar estudantes com dificuldades em conteúdos de matemática básica.",
    details: "Aplicativo educacional desenvolvido para apoiar estudantes na revisão de conteúdos de matemática básica. A experiência foi pensada para dispositivos móveis, com navegação direta e apresentação acessível dos conteúdos.",
    stack: ["React Native"],
    competencies: ["Desenvolvimento mobile", "Componentização", "Navegação em aplicativo", "Interface educacional", "Design responsivo"],
    image: require("../assets/images/projects/tartamat.jpg"),
    download: true,
  },
  {
    slug: "gymrat",
    name: "GymRat",
    category: "Projeto web",
    description: "Site temático sobre uma rede fictícia de academias para ratos, desenvolvido para praticar front-end.",
    details: "Projeto web temático criado para praticar composição visual, estruturação de páginas e interações com JavaScript. A proposta transforma uma academia fictícia em uma experiência descontraída e responsiva.",
    stack: ["HTML", "CSS", "JavaScript"],
    competencies: ["Front-end", "Criatividade visual", "Layout responsivo", "Interações com JavaScript", "Publicação no GitHub Pages"],
    image: require("../assets/images/projects/gymrat.jpg"),
    liveUrl: "https://leandrosousa007.github.io/gymRat/",
  },
  {
    slug: "gerenciador-de-truco",
    name: "Gerenciador de Partidas de Truco",
    category: "Sistema em Java",
    description: "Sistema para cadastrar jogadores, formar duplas e executar partidas completas de truco por console ou interface gráfica.",
    details: "Sistema desenvolvido em Java para simular partidas de truco com regras como Mão de 11, pedidos de Truco, Seis, Nove e Doze e jogada no escuro. O projeto possui interface de console, interface gráfica em Swing, exceções personalizadas e geração automática de logs das partidas.",
    stack: ["Java", "Java Swing", "Maven"],
    competencies: ["Programação orientada a objetos", "Arquitetura em camadas", "Tratamento de exceções", "Interface gráfica", "Regras de negócio", "Persistência em logs"],
    cover: { icon: "cards-playing-outline", colors: ["#276749", "#102A22"] },
    repositoryUrl: "https://github.com/leandrosousa007/Trabalho-Truco",
  },
  {
    slug: "gerenciamento-de-cursos",
    name: "Gerenciamento de Cursos e Disciplinas",
    category: "Estruturas de dados",
    description: "Sistema em C para gerenciar cursos e disciplinas utilizando uma lista duplamente encadeada genérica.",
    details: "Projeto final de Algoritmos e Estruturas de Dados I. O sistema permite cadastrar, remover, consultar e favoritar cursos e disciplinas, gerar relatórios acadêmicos e carregar dados de arquivo. Sua estrutura principal é uma lista duplamente encadeada genérica implementada em C.",
    stack: ["C", "Estruturas de Dados", "Arquivos"],
    competencies: ["Listas duplamente encadeadas", "Ponteiros", "Alocação dinâmica", "Modularização em C", "Persistência em arquivos", "Relatórios e consultas"],
    cover: { icon: "account-school-outline", colors: ["#345C8C", "#182A46"] },
    repositoryUrl: "https://github.com/leandrosousa007/Trabalho-Gerenciamento-de-Cursos-e-Disciplinas",
  },
  {
    slug: "framework-de-quizzes",
    name: "Framework de Quizzes",
    category: "Padrões de projeto",
    description: "Framework Java reutilizado por dois quizzes com interfaces, modos de jogo e estratégias de pontuação diferentes.",
    details: "Trabalho final de Princípios e Padrões de Projeto. O framework sustenta um quiz de programação em Java Swing e um quiz de League of Legends para dois jogadores no console, reaproveitando a mesma base com Template Method, Factory Method, Strategy, Observer, anotações e reflexão.",
    stack: ["Java", "Java Swing", "Reflection", "Design Patterns"],
    competencies: ["Template Method", "Factory Method", "Strategy", "Observer", "Anotações e reflexão", "Framework reutilizável", "Logging"],
    cover: { icon: "head-question-outline", colors: ["#6B4FA1", "#2A2046"] },
    repositoryUrl: "https://github.com/leandrosousa007/Trabalho-Final-PPP",
  },
  {
    slug: "programacao-para-internet",
    name: "Programação para Internet",
    category: "Coleção de projetos web",
    description: "Conjunto de atividades práticas que percorre front-end, JavaScript, PHP e integração com MySQL.",
    details: "Repositório acadêmico com dez conjuntos de exercícios de desenvolvimento para internet. As atividades evoluem de páginas estruturadas com HTML e CSS para interações em JavaScript, formulários, aplicações em PHP e exemplos de acesso ao MySQL com consultas e prepared statements.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    competencies: ["Desenvolvimento front-end", "Manipulação do DOM", "Formulários web", "Programação back-end com PHP", "Integração com MySQL", "Prepared statements"],
    cover: { icon: "web", colors: ["#2F6F9F", "#15334A"] },
    repositoryUrl: "https://github.com/leandrosousa007/programacao-para-internet",
  },
];

import { FAQItem, ResourceItem, Testimonial, KitOption } from "./types";

export const RESOURCE_ITEMS: ResourceItem[] = [
  {
    id: "ativ-1",
    title: "Atividade terapêutica 1",
    subtitle: "Identificação e Aceitação de Emoções",
    description: "Um material visual e dinâmico que ajuda o paciente adulto a identificar, nomear e aceitar estados emocionais complexos, superando a barreira do silêncio ou da racionalização excessiva.",
    color: "from-rose-500 to-orange-500",
    imageEmoji: "🎡",
    previewType: "wheel"
  },
  {
    id: "ativ-2",
    title: "Atividade terapêutica 2",
    subtitle: "Termômetro de Regulação da Ansiedade",
    description: "Ajuda o paciente a mapear os gatilhos físicos e cognitivos da ansiedade de 1 a 5, facilitando a aplicação imediata de técnicas de ancoragem de acordo com o nível detectado.",
    color: "from-amber-500 to-red-600",
    imageEmoji: "🌡️",
    previewType: "thermometer"
  },
  {
    id: "ativ-3",
    title: "Atividade terapêutica 3",
    subtitle: "Rastreador de Pensamentos Ansiosos e Repetitivos",
    description: "Exercício sensorial para desacelerar o fluxo de pensamentos obsessivos (ruminação mental), estimulando foco no momento presente e regulação respiratória.",
    color: "from-teal-500 to-emerald-600",
    imageEmoji: "🌀",
    previewType: "maze"
  },
  {
    id: "ativ-4",
    title: "Atividade terapêutica 4",
    subtitle: "Pote da Autocompaixão e Autoestima",
    description: "Estratégia prática para atenuar a autocrítica severa e a culpa exagerada, auxiliando o paciente adulto a documentar, reconhecer e internalizar conquistas e aspectos positivos.",
    color: "from-indigo-500 to-purple-600",
    imageEmoji: "🏺",
    previewType: "jar"
  },
  {
    id: "ativ-5",
    title: "Atividade terapêutica 5",
    subtitle: "Cartas de Crenças Limitantes e Autoimagem",
    description: "Baralho terapêutico interativo para identificar e reestruturar pensamentos disfuncionais e esquemas que travam o desenvolvimento pessoal e profissional do adulto.",
    color: "from-sky-500 to-blue-600",
    imageEmoji: "🃏",
    previewType: "cards"
  },
  {
    id: "rec-1",
    title: "Cartas terapêuticas",
    subtitle: "Perguntas de Conexão e Autoexploração",
    description: "Cartas com perguntas estratégicas para quebrar o gelo e abrir espaço para o paciente falar sobre o que sente, superando respostas automáticas.",
    color: "from-cyan-500 to-blue-700",
    imageEmoji: "🃏",
    previewType: "cards"
  },
  {
    id: "rec-2",
    title: "Exercícios de reflexão",
    subtitle: "Mapeamento Somático e Sensações Corporais",
    description: "Mapeamento anatômico de reações corporais do estresse, ansiedade e raiva. Excelente para pacientes com alexitimia ou forte bloqueio corporal.",
    color: "from-violet-500 to-fuchsia-600",
    imageEmoji: "🧍",
    previewType: "behavior"
  },
  {
    id: "rec-3",
    title: "Fichas de emoções",
    subtitle: "Expressão e Diferenciação de Sentimentos",
    description: "Fichas visuais para facilitar a diferenciação de sentimentos secundários (como frustração, mágoa, rejeição) e promover insights profundos.",
    color: "from-amber-600 to-orange-700",
    imageEmoji: "🎭",
    previewType: "expressions"
  },
  {
    id: "rec-4",
    title: "Atividades de autoconhecimento",
    subtitle: "Identificação de Valores e Propósito",
    description: "Exercício de seleção e priorização de valores fundamentais para tomada de decisões importantes, transições de carreira e reconstrução pós-crise.",
    color: "from-emerald-500 to-teal-600",
    imageEmoji: "🏺",
    previewType: "jar"
  },
  {
    id: "ativ-6",
    title: "Atividade terapêutica 6",
    subtitle: "Definição de Limites nos Relacionamentos",
    description: "Roteiro interativo e visual para exercitar a assertividade, estabelecer limites saudáveis com familiares ou cônjuges e combater a codependência.",
    color: "from-blue-500 to-indigo-600",
    imageEmoji: "🧱",
    previewType: "maze"
  },
  {
    id: "ativ-7",
    title: "Atividade terapêutica 7",
    subtitle: "Ciclo de Devolutiva de Autossabotagem",
    description: "Roda interativa que ajuda a mapear comportamentos autossabotadores, identificando o gatilho, a resposta protetiva e a consequência negativa.",
    color: "from-indigo-600 to-pink-600",
    imageEmoji: "🔄",
    previewType: "wheel"
  },
  {
    id: "ativ-8",
    title: "Atividade terapêutica 8",
    subtitle: "Matriz de Resolução e Tomada de Decisão",
    description: "Estrutura lógica para organizar escolhas complexas de vida, ponderando valores e riscos de forma equilibrada e sem estresse.",
    color: "from-purple-600 to-rose-600",
    imageEmoji: "⚖️",
    previewType: "cards"
  },
  {
    id: "ativ-9",
    title: "Atividade terapêutica 9",
    subtitle: "Termômetro da Procrastinação e Inércia",
    description: "Gráfico de gradação para rastrear o nível de resistência interna a tarefas importantes e definir micropassos para sair da inércia.",
    color: "from-orange-500 to-red-600",
    imageEmoji: "⏳",
    previewType: "thermometer"
  },
  {
    id: "ativ-10",
    title: "Atividade terapêutica 10",
    subtitle: "Pote da Resiliência e Recursos Pessoais",
    description: "Estratégia visual de resgate de enfrentamentos bem-sucedidos anteriores para fortalecer a autoeficácia de pacientes em momentos de extrema sobrecarga.",
    color: "from-rose-500 to-pink-600",
    imageEmoji: "🏺",
    previewType: "jar"
  },
  {
    id: "rec-5",
    title: "Recursos para ansiedade",
    subtitle: "Mapeamento de Diálogo Interno Crítico",
    description: "Fichas visuais para identificar os pensamentos automáticos destrutivos e substituí-los por respostas mais gentis e racionais durante crises.",
    color: "from-teal-600 to-cyan-600",
    imageEmoji: "📈",
    previewType: "thermometer"
  },
  {
    id: "rec-6",
    title: "Recursos para autoestima",
    subtitle: "Cartas de Enfrentamento Psicológico",
    description: "Frases de apoio cognitivo e lembretes realistas prontos para carregar na carteira ou celular para combater pensamentos catastróficos.",
    color: "from-blue-600 to-purple-700",
    imageEmoji: "🎯",
    previewType: "behavior"
  },
  {
    id: "rec-7",
    title: "Recursos para relacionamentos",
    subtitle: "Grade de Autogestão e Diário de Limites",
    description: "Checklist de rituais de autocuidado diário e hábitos de higiene mental projetados para monitorar a evolução e o bem-estar semanal do paciente.",
    color: "from-emerald-600 to-green-700",
    imageEmoji: "✅",
    previewType: "expressions"
  },
  {
    id: "rec-8",
    title: "Recursos para regulação emocional",
    subtitle: "Guia de Controle e Tolerância ao Mal-Estar",
    description: "Fichas práticas com técnicas cognitivas e comportamentais para tolerar e suavizar crises emocionais agudas sem agir por impulso.",
    color: "from-violet-600 to-purple-600",
    imageEmoji: "📈",
    previewType: "behavior"
  }
];

export const CHALLENGE_ITEMS = [
  {
    id: "not-knowing",
    emoji: "😶",
    text: "O paciente que diz que não sabe o que está sentindo"
  },
  {
    id: "all-good",
    emoji: "🙂",
    text: "A pessoa que responde apenas “está tudo bem”"
  },
  {
    id: "changing-topic",
    emoji: "🏃‍♂️",
    text: "O adulto que muda de assunto quando a conversa fica mais profunda"
  },
  {
    id: "rationalization",
    emoji: "🧠",
    text: "O paciente que racionaliza tudo, mas não consegue acessar as próprias emoções"
  },
  {
    id: "anxious-thoughts",
    emoji: "💭",
    text: "A pessoa ansiosa que fica presa nos mesmos pensamentos"
  },
  {
    id: "self-blame",
    emoji: "😔",
    text: "O paciente que se culpa por tudo e se cobra excessivamente"
  },
  {
    id: "boundary-issue",
    emoji: "🧱",
    text: "A pessoa que não consegue estabelecer limites nos relacionamentos"
  },
  {
    id: "procrastination",
    emoji: "⏳",
    text: "O adulto que procrastina, se sente travado e não consegue tomar decisões"
  },
  {
    id: "silent-patient",
    emoji: "🤫",
    text: "O paciente que permanece em silêncio e espera que você conduza toda a sessão"
  },
  {
    id: "knowing-no-change",
    emoji: "🔄",
    text: "A pessoa que entende o problema, mas não consegue mudar seus comportamentos"
  }
];

export const BENEFIT_ITEMS = [
  {
    id: "directed",
    emoji: "🎯",
    title: "Sessões mais direcionadas",
    description: "Você entra sabendo quais caminhos pode explorar. Sem depender apenas de perguntas improvisadas ou perder tempo procurando uma atividade de última hora."
  },
  {
    id: "participative",
    emoji: "👥",
    title: "Paciente mais participativo",
    description: "Cartas, exercícios e recursos visuais ajudam o paciente a organizar pensamentos, identificar emoções e participar mais ativamente da sessão."
  },
  {
    id: "depth",
    emoji: "💬",
    title: "Mais profundidade na conversa",
    description: "Os recursos ajudam a sair das respostas automáticas e conduzem o paciente para reflexões mais específicas."
  },
  {
    id: "confident",
    emoji: "🛡️",
    title: "Mais confiança na condução",
    description: "Ter diferentes possibilidades em mãos ajuda você a selecionar o recurso mais adequado para cada momento da sessão."
  },
  {
    id: "alternative",
    emoji: "💳",
    title: "Alternativa aos materiais caros",
    description: "Tenha acesso a dezenas de cartas, fichas, exercícios e atividades por uma fração do valor que gastaria comprando materiais separadamente."
  }
];

export const BONUS_ITEMS = [
  {
    id: "1",
    title: "Fichas de Anamnese para Atendimento de Adultos",
    description: "Modelos estruturados para organizar o primeiro atendimento e reunir as informações mais importantes da história do paciente. Chegue à primeira sessão com um roteiro claro e profissional.",
    originalPrice: 27,
    free: true
  },
  {
    id: "2",
    title: "Roteiro de Devolutiva Terapêutica",
    description: "Estruturas prontas para organizar percepções, avanços e pontos importantes do processo de maneira clara e acolhedora. Sem travar na hora de comunicar o que precisa ser trabalhado.",
    originalPrice: 19,
    free: true
  },
  {
    id: "3",
    title: "Checklist de Planejamento de Sessão",
    description: "Um passo a passo para definir objetivos, selecionar recursos e organizar cada atendimento antes de começar. Menos improviso e mais intencionalidade.",
    originalPrice: 17,
    free: true
  },
  {
    id: "4",
    title: "Guia para Pacientes Resistentes ou Silenciosos",
    description: "Estratégias práticas e perguntas terapêuticas para atendimentos em que o paciente responde pouco, evita assuntos importantes ou apresenta dificuldade para se expressar.",
    originalPrice: 17,
    free: true
  },
  {
    id: "5",
    title: "Kit de Psicoeducação Visual para Adultos",
    description: "Materiais visuais para explicar ansiedade, pensamentos automáticos, regulação emocional, autoestima, limites e procrastinação de forma simples e compreensível. Ajude o paciente a entender melhor o que está acontecendo e participar mais ativamente do processo.",
    originalPrice: 17,
    free: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Dra. Camila R. (Psicóloga)",
    avatar: "CR",
    messages: [
      { sender: "parent", text: "Passando para compartilhar que as cartas de emoções e as perguntas direcionadas ajudaram muito a organizar a conversa!", time: "10:14" },
      { sender: "parent", text: "Eu tinha alguns pacientes que respondiam apenas ‘não sei’ e era difícil aprofundar certos assuntos. Hoje consigo conduzir essas sessões com mais estrutura e segurança.", time: "10:15" },
      { sender: "therapist", text: "Que alegria ler isso, Camila! O silêncio ou o 'não sei' é um grande desafio, mas o suporte visual quebra essa barreira de forma muito natural e acolhedora.", time: "10:20" }
    ]
  },
  {
    id: "test-2",
    name: "Mariana S. (Psicóloga Clínica)",
    avatar: "MS",
    messages: [
      { sender: "parent", text: "O que mais gostei foi a organização por demanda no Kit Destrava Sessão!", time: "14:22" },
      { sender: "parent", text: "Antes eu perdia muito tempo procurando atividades para ansiedade, autoestima e relacionamentos. Agora seleciono o recurso, imprimo e adapto de acordo com o objetivo da sessão. Facilitou bastante minha rotina.", time: "14:23" },
      { sender: "therapist", text: "Perfeito, Mariana! Economizar tempo na preparação das sessões é fundamental para termos mais qualidade de vida e foco no que realmente importa.", time: "14:28" }
    ]
  },
  {
    id: "test-3",
    name: "Dr. Lucas M. (Psicólogo)",
    avatar: "LM",
    messages: [
      { sender: "parent", text: "Os recursos visuais deixaram alguns pacientes mais participativos, principalmente aqueles que tinham dificuldade para nomear o que estavam sentindo.", time: "16:45" },
      { sender: "parent", text: "O material é bem organizado, fácil de usar e oferece diferentes caminhos para trabalhar durante a sessão.", time: "16:47" },
      { sender: "therapist", text: "Fantástico, Lucas! Ter diferentes vias de acesso à subjetividade de cada paciente de forma clara enriquece demais o raciocínio clínico.", time: "16:52" }
    ]
  }
];

export const KIT_OPTIONS: KitOption[] = [
  {
    id: "basic",
    name: "Kit Básico",
    tagline: "+80 Recursos Essenciais",
    price: 19.90,
    originalPrice: 47.90,
    ctaText: "Quero o kit básico",
    features: [
      "+80 recursos terapêuticos para adultos",
      "Organizados por demanda clínica",
      "Cartas, fichas e exercícios prontos para usar",
      "Materiais em formato PDF",
      "Acesso imediato após a compra",
      "Funciona em atendimentos presenciais e online",
      "Suporte por e-mail",
      "Garantia incondicional de 15 dias"
    ]
  },
  {
    id: "complete",
    name: "Kit Completo",
    tagline: "+160 Recursos + 5 Bônus Exclusivos",
    price: 37.90,
    originalPrice: 114.90,
    installments: "6x de R$ 7,45",
    savings: 77.00,
    popular: true,
    ctaText: "Quero o kit completo",
    features: [
      "+160 recursos terapêuticos para adultos",
      "Organizados por demanda clínica",
      "Cartas, fichas, exercícios e atividades",
      "Materiais prontos para imprimir",
      "Funciona em atendimentos online e presenciais",
      "Acesso imediato em PDF",
      "Fichas de Anamnese para Adultos (R$27,00)",
      "Roteiro de Devolutiva Terapêutica (R$19,00)",
      "Checklist de Planejamento de Sessão (R$17,00)",
      "Guia para Pacientes Resistentes ou Silenciosos (R$17,00)",
      "Kit de Psicoeducação Visual para Adultos (R$17,00)",
      "Suporte prioritário por e-mail",
      "Garantia incondicional de 15 dias"
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como acesso o material depois da compra?",
    answer: "Após a confirmação do pagamento, você receberá as instruções de acesso no e-mail informado durante a compra. O acesso é digital e liberado automaticamente."
  },
  {
    id: "faq-2",
    question: "Em qual formato vem o kit?",
    answer: "Os recursos são entregues em formato PDF, prontos para imprimir ou utilizar digitalmente durante os atendimentos online."
  },
  {
    id: "faq-3",
    question: "Posso imprimir os materiais quantas vezes quiser?",
    answer: "Sim. Você poderá imprimir os recursos sempre que precisar para uso nos seus próprios atendimentos profissionais. A revenda, distribution ou compartilhamento dos arquivos não é permitida."
  },
  {
    id: "faq-4",
    question: "Preciso ter experiência no atendimento de adultos para utilizar?",
    answer: "Os materiais possuem uma estrutura simples e intuitiva, mas devem ser utilizados por profissionais ou estudantes da área, respeitando seus limites de atuação, formação e supervisão."
  },
  {
    id: "faq-5",
    question: "Os recursos servem para qualquer abordagem terapêutica?",
    answer: "Os materiais podem complementar diferentes formas de condução clínica. Cada profissional deve selecionar e adaptar os recursos de acordo com sua abordagem, avaliação, objetivos terapêuticos e necessidades de cada paciente."
  },
  {
    id: "faq-6",
    question: "Funciona com pacientes que respondem apenas “não sei”?",
    answer: "Os recursos foram desenvolvidos para ajudar a estimular reflexão, expressão emocional e participação durante a sessão. A resposta pode variar de acordo com o paciente, o vínculo terapêutico, o contexto clínico e a forma de aplicação."
  },
  {
    id: "faq-7",
    question: "Funciona com pacientes silenciosos ou resistentes?",
    answer: "O kit inclui perguntas, exercícios visuais e atividades que podem facilitar a comunicação e abrir novos caminhos para a conversa. A escolha do recurso e o momento da aplicação devem ser definidos pelo profissional responsável pelo atendimento."
  },
  {
    id: "faq-8",
    question: "Serve para atendimento online?",
    answer: "Sim. Os recursos podem ser compartilhados na tela, enviados ao paciente ou utilizados como apoio durante a videochamada."
  },
  {
    id: "faq-9",
    question: "Posso enviar as atividades para o paciente?",
    answer: "Sim, desde que sejam utilizadas como parte do seu próprio atendimento profissional. O compartilhamento do kit completo, a revenda ou a distribuição dos arquivos não são permitidos."
  },
  {
    id: "faq-10",
    question: "Como funciona a garantia?",
    answer: "Você terá 15 dias após a compra para conhecer o material. Caso decida que o kit não atende às suas necessidades, poderá solicitar o reembolso dentro do prazo de garantia."
  },
  {
    id: "faq-11",
    question: "O pagamento é seguro?",
    answer: "Sim. O pagamento é processado por uma plataforma segura, responsável por proteger os dados utilizados durante a compra."
  }
];

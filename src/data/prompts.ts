export interface Prompt {
  id: number;
  title: string;
  content: string;
  level: string;
}

export const modulePrompts: Record<number, Prompt[]> = {
  1: [
    {
      id: 1,
      title: "Vocabulário de Viagem",
      content: "Atue como meu professor de inglês. Ensine-me 20 palavras essenciais para viagem em inglês, incluindo pronúncia, significado e uma frase de exemplo para cada palavra. Organize por categorias: aeroporto, hotel, restaurante e transporte.",
      level: "Iniciante"
    },
    {
      id: 2,
      title: "Vocabulário de Negócios",
      content: "Como professor de inglês para negócios, me ensine 15 termos essenciais do mundo corporativo em inglês. Para cada termo, forneça: definição, contexto de uso, exemplo em frase e possíveis sinônimos.",
      level: "Intermediário"
    },
    {
      id: 3,
      title: "Vocabulário do Cotidiano",
      content: "Atue como meu tutor de inglês. Crie uma lista de 25 palavras do dia a dia em inglês que todo iniciante deve saber. Inclua: palavra, tradução, pronúncia fonética e uma situação real onde usaria cada palavra.",
      level: "Iniciante"
    }
  ],
  2: [
    {
      id: 1,
      title: "Conversação Básica",
      content: "Vamos praticar conversação em inglês. Você será meu parceiro de conversa. Comece me fazendo perguntas simples sobre minha rotina diária. Corrija meus erros gentilmente e sugira formas mais naturais de me expressar.",
      level: "Iniciante"
    },
    {
      id: 2,
      title: "Debate sobre Temas Atuais",
      content: "Atue como moderador de debate em inglês. Escolha um tema atual interessante e me faça perguntas que me incentivem a expressar minha opinião. Corrija minha gramática e sugira vocabulário mais avançado quando apropriado.",
      level: "Avançado"
    }
  ],
  3: [
    {
      id: 1,
      title: "Correção de Textos",
      content: "Atue como corretor de textos em inglês. Vou enviar um parágrafo que escrevi e quero que você: 1) Corrija erros gramaticais, 2) Melhore a fluidez, 3) Sugira vocabulário mais sofisticado, 4) Explique as correções feitas.",
      level: "Intermediário"
    },
    {
      id: 2,
      title: "Estrutura de Essays",
      content: "Como professor de escrita acadêmica, me ensine a estrutura de um essay em inglês. Explique cada parte (introduction, body paragraphs, conclusion) e me dê um exemplo prático sobre o tema 'tecnologia na educação'.",
      level: "Avançado"
    }
  ],
  4: [
    {
      id: 1,
      title: "Entrevista de Emprego",
      content: "Simule uma entrevista de emprego em inglês. Você é o entrevistador para uma vaga de [sua área]. Faça perguntas típicas de entrevista, avalie minhas respostas e dê feedback sobre como melhorar minha performance e confiança.",
      level: "Intermediário"
    },
    {
      id: 2,
      title: "Situações do Aeroporto",
      content: "Simule situações reais de aeroporto em inglês. Você será funcionário do aeroporto e eu serei o passageiro. Pratique: check-in, segurança, embarque, problemas com bagagem. Corrija minha pronúncia e gramática.",
      level: "Iniciante"
    }
  ],
  5: [
    {
      id: 1,
      title: "Plano de Estudos Personalizado",
      content: "Atue como consultor educacional. Com base no meu nível atual de inglês [descreva seu nível], crie um plano de estudos de 30 dias. Inclua: objetivos diários, recursos recomendados, métodos de prática e formas de medir progresso.",
      level: "Todos os níveis"
    },
    {
      id: 2,
      title: "Cronograma de Aprendizado",
      content: "Como especialista em aprendizado de idiomas, me ajude a criar um cronograma semanal de estudos de inglês. Tenho [X horas] disponíveis por semana. Distribua o tempo entre: gramática, vocabulário, listening, speaking, reading e writing.",
      level: "Todos os níveis"
    }
  ],
  6: [
    {
      id: 1,
      title: "Expressões Idiomáticas",
      content: "Ensine-me 10 expressões idiomáticas em inglês muito usadas no dia a dia. Para cada uma, explique: significado literal, significado real, contexto de uso e dê 2 exemplos em frases diferentes.",
      level: "Intermediário"
    },
    {
      id: 2,
      title: "Tradução Contextual",
      content: "Atue como tradutor especializado. Vou enviar frases em português e quero que traduza para inglês considerando: contexto, registro (formal/informal), nuances culturais. Explique suas escolhas de tradução.",
      level: "Avançado"
    }
  ],
  7: [
    {
      id: 1,
      title: "Tempos Verbais na Prática",
      content: "Como professor de gramática, me explique a diferença entre Present Perfect e Simple Past. Use exemplos práticos, crie exercícios para eu praticar e corrija meus erros explicando o porquê da correção.",
      level: "Intermediário"
    },
    {
      id: 2,
      title: "Preposições Problemáticas",
      content: "Ensine-me as preposições mais confusas em inglês (in/on/at, for/since, etc.). Crie regras práticas para lembrar, dê exemplos contrastivos e faça exercícios para fixar o aprendizado.",
      level: "Iniciante a Intermediário"
    }
  ],
  8: [
    {
      id: 1,
      title: "Preparação TOEFL Speaking",
      content: "Atue como examinador TOEFL. Simule a seção de Speaking: faça perguntas no formato do exame, cronometre minhas respostas, avalie fluência, pronúncia e organização das ideias. Dê feedback específico para melhorar.",
      level: "Avançado"
    },
    {
      id: 2,
      title: "Estratégias IELTS Writing",
      content: "Como especialista em IELTS, me ensine estratégias para Task 1 e Task 2 do Writing. Analise um exemplo de cada task, explique critérios de avaliação e me dê um template para organizar minhas respostas.",
      level: "Avançado"
    }
  ],
  9: [
    {
      id: 1,
      title: "Instruções para Listening e Reading",
      content: "INSTRUÇÕES IMPORTANTES PARA USAR ESTE MÓDULO:\n\n1. LISTENING PRACTICE:\n- Peça ao ChatGPT para criar exercícios de compreensão auditiva\n- Solicite transcrições de áudios para verificar sua compreensão\n- Pratique com diferentes sotaques (americano, britânico, australiano)\n- Use velocidades diferentes (normal, lenta, rápida)\n\n2. READING PRACTICE:\n- Peça textos adequados ao seu nível\n- Solicite exercícios de compreensão após a leitura\n- Pratique diferentes tipos de texto (notícias, acadêmicos, literários)\n- Peça explicações de vocabulário complexo\n\n3. DICAS GERAIS:\n- Sempre peça feedback sobre sua compreensão\n- Solicite explicações de expressões idiomáticas encontradas\n- Pratique resumir o que ouviu/leu\n- Peça exercícios progressivos (do fácil ao difícil)\n\nUSE ESTES PROMPTS COMO BASE E ADAPTE CONFORME SUA NECESSIDADE!",
      level: "Instruções gerais"
    },
    {
      id: 2,
      title: "Compreensão de Áudio",
      content: "Atue como instrutor de listening. Crie um exercício de compreensão auditiva: descreva um áudio de 2-3 minutos sobre [tema de sua escolha], faça 5 perguntas de compreensão e depois forneça as respostas com explicações.",
      level: "Intermediário"
    },
    {
      id: 3,
      title: "Análise de Texto",
      content: "Como professor de reading, me forneça um texto interessante de nível intermediário sobre [tema atual]. Depois, faça perguntas sobre: ideia principal, detalhes específicos, vocabulário e opinião pessoal sobre o tema.",
      level: "Intermediário"
    }
  ],
  10: [
    {
      id: 1,
      title: "Esclarecimento de Dúvidas",
      content: "Atue como meu tutor pessoal de inglês. Tenho uma dúvida específica: [descreva sua dúvida]. Explique de forma clara e didática, use exemplos práticos e crie exercícios para eu fixar o conceito.",
      level: "Todos os níveis"
    },
    {
      id: 2,
      title: "Revisão de Conceitos",
      content: "Como professor particular, me ajude a revisar [tópico específico do inglês]. Explique o conceito, mostre aplicações práticas, identifique erros comuns e crie um mini-teste para verificar meu entendimento.",
      level: "Todos os níveis"
    }
  ]
};
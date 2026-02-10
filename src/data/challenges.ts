export type ChallengeType = 'emoji' | 'hino';

export interface Challenge {
  id: number;
  type: ChallengeType;
  prompt: string;
  answer: string;
  reference?: string;
  category: 'Bíblia' | 'Música';
}

export const challenges: Challenge[] = [
  // Desafios em Emoji - Bíblia
  {
    id: 1,
    type: 'emoji',
    category: 'Bíblia',
    prompt: '🐑➡️👑🎶',
    answer: 'Davi, o pastor que se tornou rei de Israel.',
    reference: '1 Samuel 16–17'
  },
  {
    id: 2,
    type: 'emoji',
    category: 'Bíblia',
    prompt: '🐍🍎👩‍🦰👨‍🦱',
    answer: 'Adão e Eva no jardim do Éden, enganados pela serpente.',
    reference: 'Gênesis 3'
  },
  {
    id: 3,
    type: 'emoji',
    category: 'Bíblia',
    prompt: '🚢🌧️🐘🐒',
    answer: 'Noé e a arca durante o dilúvio.',
    reference: 'Gênesis 6–9'
  },
  {
    id: 4,
    type: 'emoji',
    category: 'Bíblia',
    prompt: '🔥🌿👣',
    answer: 'Moisés diante da sarça ardente.',
    reference: 'Êxodo 3'
  },
  {
    id: 5,
    type: 'emoji',
    category: 'Bíblia',
    prompt: '🦁🕳️🙏',
    answer: 'Daniel orando na cova dos leões.',
    reference: 'Daniel 6'
  },
  {
    id: 6,
    type: 'emoji',
    category: 'Bíblia',
    prompt: '🐋😮‍💨🙏',
    answer: 'Jonas lançado ao mar e engolido pelo grande peixe.',
    reference: 'Jonas 1–2'
  },
  {
    id: 7,
    type: 'emoji',
    category: 'Bíblia',
    prompt: '🍞🍞🍞🍞🍞🐟🐟👨‍👩‍👧‍👦',
    answer: 'Multiplicação dos pães e peixes para a grande multidão.',
    reference: 'Mateus 14:13-21'
  },
  {
    id: 8,
    type: 'emoji',
    category: 'Bíblia',
    prompt: '✝️🌅🙌',
    answer: 'Ressurreição de Jesus ao terceiro dia.',
    reference: 'Mateus 28'
  },
  {
    id: 9,
    type: 'emoji',
    category: 'Bíblia',
    prompt: '🌈⛅🤝',
    answer: 'Aliança de Deus com Noé, com o arco-íris como sinal.',
    reference: 'Gênesis 9:8-17'
  },
  {
    id: 10,
    type: 'emoji',
    category: 'Bíblia',
    prompt: '📜⚡🏔️',
    answer: 'Deus entregando os Dez Mandamentos no monte Sinai.',
    reference: 'Êxodo 20'
  },
  {
    id: 11,
    type: 'emoji',
    category: 'Bíblia',
    prompt: '🪖🪨🧔‍♂️👑',
    answer: 'Davi enfrentando o gigante Golias.',
    reference: '1 Samuel 17'
  },
  {
    id: 12,
    type: 'emoji',
    category: 'Bíblia',
    prompt: '👼📣👩‍🦰👶',
    answer: 'O anjo anunciando a Maria que ela daria à luz Jesus.',
    reference: 'Lucas 1:26-38'
  },
  {
    id: 13,
    type: 'emoji',
    category: 'Bíblia',
    prompt: '🏜️😣🙏40️⃣',
    answer: 'Jejum de 40 dias de Jesus no deserto.',
    reference: 'Mateus 4:1-11'
  },
  {
    id: 14,
    type: 'emoji',
    category: 'Bíblia',
    prompt: '🚶‍♂️🌊🌬️✋',
    answer: 'Jesus andando sobre as águas e acalmando o vento.',
    reference: 'Mateus 14:22-33'
  },
  {
    id: 15,
    type: 'emoji',
    category: 'Bíblia',
    prompt: '🧑‍🦯👀🙌',
    answer: 'Cura do cego de nascença.',
    reference: 'João 9'
  },
  {
    id: 16,
    type: 'emoji',
    category: 'Bíblia',
    prompt: '🛏️🧔‍♂️➡️🚶',
    answer: 'Cura do paralítico que passou a andar.',
    reference: 'Marcos 2:1-12'
  },
  {
    id: 17,
    type: 'emoji',
    category: 'Bíblia',
    prompt: '🍷🍞👨‍👩‍👧‍👦',
    answer: 'A Última Ceia de Jesus com os discípulos.',
    reference: 'Lucas 22:7-20'
  },

  // Desafios de Hinos
  {
    id: 101,
    type: 'hino',
    category: 'Música',
    prompt: 'Complete o hino: \"Como ovelhas que não tem nenhum Pastor...\"',
    answer:
      'Longe do bem e do amor do Criador,\nTodos andávamos no mal, sem enxergar\nO bom caminho celestial para trilhar.',
    reference: 'Desafio de hino 1'
  },
  {
    id: 102,
    type: 'hino',
    category: 'Música',
    prompt: 'Complete o hino: \"Vinde às fileiras do bom Salvador,\"',
    answer:
      'Que vos cingirá com armas de amor,\nPara combaterdes sem nenhum temor\nContra o pecado, com todo o vigor.',
    reference: 'Desafio de hino 2'
  },
  {
    id: 103,
    type: 'hino',
    category: 'Música',
    prompt: 'Complete o hino: \"Em toda a prova, irmão, o Senhor\"',
    answer:
      'Força do céu te dará;\nCristo te salva, te faz vencedor,\nEle jamais falhará.',
    reference: 'Desafio de hino 3'
  },
  {
    id: 104,
    type: 'hino',
    category: 'Música',
    prompt: 'Complete o hino: \"Vivendo sempre em doce esperança,\"',
    answer:
      'Em Cristo sinto divinal prazer;\nReceberei no céu a minha herança\nQue Deus irá, na glória, conceder.',
    reference: 'Desafio de hino 4'
  },
  {
    id: 105,
    type: 'hino',
    category: 'Música',
    prompt: 'Cante um hino com a palavra \"Esperança\".',
    answer:
      'Resposta livre – a equipe deve cantar um hino que contenha a palavra \"Esperança\".',
    reference: 'Desafio de hino 5'
  },
  {
    id: 106,
    type: 'hino',
    category: 'Música',
    prompt: 'Cante um hino com a palavra \"Estrela D\'alva\".',
    answer:
      'Resposta livre – a equipe deve cantar um hino que contenha a expressão \"Estrela D\'alva\".',
    reference: 'Desafio de hino 6'
  }
];


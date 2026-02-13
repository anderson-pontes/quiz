export interface Question {
  id: number;
  category: 'Bíblia' | 'Música';
  question: string;
  options: string[];
  correctAnswer: number; // índice (0-3)
  explanation: string;
  level: 'Fácil' | 'Médio' | 'Difícil';
}

const rawQuestions: Question[] = [
  {
    id: 1,
    category: 'Bíblia',
    question: 'Quem foi lançado na cova dos leões por continuar orando a Deus, desafiando o decreto do rei?',
    options: ['Elias', 'Daniel', 'Davi', 'José'],
    correctAnswer: 1,
    explanation: 'Daniel foi lançado na cova dos leões por continuar orando a Deus três vezes ao dia, mesmo com o decreto do rei Dario proibindo orações.',
    level: 'Médio'
  },
  {
    id: 2,
    category: 'Bíblia',
    question: 'Qual foi o primeiro milagre de Jesus registrado no Evangelho de João?',
    options: ['Cura do paralítico', 'Transformação da água em vinho', 'Multiplicação dos pães', 'Cura do cego de nascença'],
    correctAnswer: 1,
    explanation: 'O primeiro milagre de Jesus registrado no Evangelho de João foi a transformação da água em vinho nas bodas de Caná.',
    level: 'Fácil'
  },
  {
    id: 3,
    category: 'Bíblia',
    question: 'Quantos livros compõem o Antigo Testamento na Bíblia protestante?',
    options: ['27 livros', '39 livros', '46 livros', '66 livros'],
    correctAnswer: 1,
    explanation: 'O Antigo Testamento na Bíblia protestante contém 39 livros, enquanto o Novo Testamento tem 27 livros, totalizando 66 livros.',
    level: 'Médio'
  },
  {
    id: 4,
    category: 'Música',
    question: 'Qual instrumento musical é mencionado no Salmo 150 como instrumento de louvor?',
    options: ['Harpa', 'Tamborim', 'Trombeta', 'Todos os mencionados'],
    correctAnswer: 3,
    explanation: 'O Salmo 150 menciona vários instrumentos: trombeta, saltério, harpa, adufe, cordas, flautas e címbalos, incentivando o uso de todos para louvar a Deus.',
    level: 'Fácil'
  },
  {
    id: 5,
    category: 'Música',
    question: 'Qual é o livro da Bíblia que contém mais referências a cânticos e música?',
    options: ['Salmos', '1 Crônicas', 'Apocalipse', 'Efésios'],
    correctAnswer: 0,
    explanation: 'O livro de Salmos é uma coletânea de 150 cânticos e hinos, sendo o livro com mais referências musicais na Bíblia.',
    level: 'Fácil'
  },
  {
    id: 6,
    category: 'Bíblia',
    question: 'Quem construiu a arca que salvou sua família e os animais do dilúvio?',
    options: ['Moisés', 'Noé', 'Abraão', 'Josué'],
    correctAnswer: 1,
    explanation: 'Noé construiu a arca conforme as instruções de Deus para salvar sua família e um par de cada animal do dilúvio.',
    level: 'Fácil'
  },
  {
    id: 7,
    category: 'Bíblia',
    question: 'Qual apóstolo escreveu mais livros do Novo Testamento?',
    options: ['Pedro', 'Paulo', 'João', 'Tiago'],
    correctAnswer: 1,
    explanation: 'Paulo escreveu 13 ou 14 livros do Novo Testamento (dependendo se Hebreus é atribuído a ele), mais do que qualquer outro autor.',
    level: 'Médio'
  },
  {
    id: 8,
    category: 'Música',
    question: 'No livro de 1 Samuel, quem tocava harpa para acalmar o rei Saul?',
    options: ['Davi', 'Salomão', 'Samuel', 'Jônatas'],
    correctAnswer: 0,
    explanation: 'Davi tocava harpa para acalmar o rei Saul quando ele era atormentado por um espírito maligno.',
    level: 'Médio'
  },
  {
    id: 9,
    category: 'Bíblia',
    question: 'Qual foi o último livro do Antigo Testamento a ser escrito?',
    options: ['Malaquias', 'Zacarias', 'Ageu', 'Daniel'],
    correctAnswer: 0,
    explanation: 'Malaquias é considerado o último livro do Antigo Testamento a ser escrito, por volta de 430-420 a.C.',
    level: 'Difícil'
  },
  {
    id: 10,
    category: 'Música',
    question: 'Qual salmo é conhecido como "O Salmo do Bom Pastor"?',
    options: ['Salmo 1', 'Salmo 23', 'Salmo 91', 'Salmo 119'],
    correctAnswer: 1,
    explanation: 'O Salmo 23 é conhecido como "O Salmo do Bom Pastor", começando com "O Senhor é o meu pastor; nada me faltará".',
    level: 'Fácil'
  },
  // Perguntas Bíblicas - Fácil (IDs 11-20)
  {
    id: 11,
    category: 'Bíblia',
    question: 'Quem foi o primeiro homem criado por Deus?',
    options: ['Abel', 'Adão', 'Enoque', 'Set'],
    correctAnswer: 1,
    explanation: 'Adão foi o primeiro homem criado por Deus, conforme descrito em Gênesis 2:7.',
    level: 'Fácil'
  },
  {
    id: 12,
    category: 'Bíblia',
    question: 'Qual foi o primeiro livro da Bíblia?',
    options: ['Êxodo', 'Gênesis', 'Levítico', 'Números'],
    correctAnswer: 1,
    explanation: 'Gênesis é o primeiro livro da Bíblia e narra a criação do mundo e a história dos patriarcas.',
    level: 'Fácil'
  },
  {
    id: 13,
    category: 'Bíblia',
    question: 'Quem foi vendido como escravo por seus irmãos?',
    options: ['Isaque', 'José', 'Jacó', 'Benjamim'],
    correctAnswer: 1,
    explanation: 'José foi vendido como escravo por seus irmãos, que tinham ciúmes dele por ser o filho favorito de Jacó.',
    level: 'Fácil'
  },
  {
    id: 14,
    category: 'Bíblia',
    question: 'Quem separou as águas do Mar Vermelho?',
    options: ['Josué', 'Moisés', 'Aarão', 'Calebe'],
    correctAnswer: 1,
    explanation: 'Moisés, com o poder de Deus, separou as águas do Mar Vermelho para que os israelitas pudessem escapar do Egito.',
    level: 'Fácil'
  },
  {
    id: 15,
    category: 'Bíblia',
    question: 'Quantos discípulos Jesus escolheu?',
    options: ['10', '12', '15', '20'],
    correctAnswer: 1,
    explanation: 'Jesus escolheu 12 discípulos para estarem com Ele e para enviá-los a pregar o evangelho.',
    level: 'Fácil'
  },
  {
    id: 16,
    category: 'Bíblia',
    question: 'Quem foi o primeiro rei de Israel?',
    options: ['Davi', 'Salomão', 'Saul', 'Roboão'],
    correctAnswer: 2,
    explanation: 'Saul foi o primeiro rei de Israel, ungido pelo profeta Samuel conforme 1 Samuel 10:1.',
    level: 'Fácil'
  },
  {
    id: 17,
    category: 'Bíblia',
    question: 'Quem negou Jesus três vezes antes do galo cantar?',
    options: ['Judas', 'Pedro', 'Tomé', 'João'],
    correctAnswer: 1,
    explanation: 'Pedro negou Jesus três vezes antes do galo cantar, conforme Jesus havia predito.',
    level: 'Fácil'
  },
  {
    id: 18,
    category: 'Bíblia',
    question: 'Qual é o maior livro da Bíblia?',
    options: ['Gênesis', 'Salmos', 'Jeremias', 'Isaías'],
    correctAnswer: 1,
    explanation: 'O livro de Salmos é o maior livro da Bíblia, contendo 150 capítulos.',
    level: 'Fácil'
  },
  {
    id: 19,
    category: 'Bíblia',
    question: 'Quem foi o rei mais sábio de Israel?',
    options: ['Saul', 'Davi', 'Salomão', 'Roboão'],
    correctAnswer: 2,
    explanation: 'Salomão foi o rei mais sábio de Israel. Deus lhe concedeu sabedoria extraordinária quando ele pediu.',
    level: 'Fácil'
  },
  {
    id: 20,
    category: 'Bíblia',
    question: 'Qual foi o primeiro livro do Novo Testamento?',
    options: ['João', 'Lucas', 'Marcos', 'Mateus'],
    correctAnswer: 3,
    explanation: 'Mateus é o primeiro livro do Novo Testamento, seguido por Marcos, Lucas e João.',
    level: 'Fácil'
  },
  // Perguntas Bíblicas - Médio (IDs 21-30)
  {
    id: 21,
    category: 'Bíblia',
    question: 'Qual profeta foi engolido por um grande peixe?',
    options: ['Isaías', 'Jeremias', 'Jonas', 'Ezequiel'],
    correctAnswer: 2,
    explanation: 'Jonas foi engolido por um grande peixe (ou baleia) após tentar fugir da missão que Deus lhe deu.',
    level: 'Médio'
  },
  {
    id: 22,
    category: 'Bíblia',
    question: 'Quantos anos durou o dilúvio na Terra?',
    options: ['30 dias', '40 dias e 40 noites', '100 dias', '1 ano'],
    correctAnswer: 1,
    explanation: 'O dilúvio durou 40 dias e 40 noites de chuva contínua, conforme Gênesis 7:12.',
    level: 'Médio'
  },
  {
    id: 23,
    category: 'Bíblia',
    question: 'Qual apóstolo era conhecido como "o discípulo amado"?',
    options: ['Pedro', 'Paulo', 'João', 'Tiago'],
    correctAnswer: 2,
    explanation: 'João era conhecido como "o discípulo amado" e escreveu o Evangelho de João, três epístolas e o Apocalipse.',
    level: 'Médio'
  },
  {
    id: 24,
    category: 'Bíblia',
    question: 'Quem foi o primeiro mártir cristão?',
    options: ['Pedro', 'Paulo', 'Estevão', 'Tiago'],
    correctAnswer: 2,
    explanation: 'Estevão foi o primeiro mártir cristão, apedrejado até a morte por pregar sobre Jesus.',
    level: 'Médio'
  },
  {
    id: 25,
    category: 'Bíblia',
    question: 'Qual livro da Bíblia contém a história de Rute?',
    options: ['Juízes', 'Rute', '1 Samuel', 'Rute e Juízes'],
    correctAnswer: 1,
    explanation: 'O livro de Rute conta a história de Rute, uma moabita que se tornou ancestral do rei Davi e de Jesus.',
    level: 'Médio'
  },
  {
    id: 26,
    category: 'Bíblia',
    question: 'Quantos livros compõem o Novo Testamento?',
    options: ['25 livros', '27 livros', '29 livros', '30 livros'],
    correctAnswer: 1,
    explanation: 'O Novo Testamento contém 27 livros: 4 evangelhos, 1 livro histórico (Atos), 21 epístolas e 1 livro profético (Apocalipse).',
    level: 'Médio'
  },
  {
    id: 27,
    category: 'Bíblia',
    question: 'Quem foi transformado em uma estátua de sal?',
    options: ['A mulher de Ló', 'A mulher de Noé', 'Rebeca', 'Raquel'],
    correctAnswer: 0,
    explanation: 'A mulher de Ló foi transformada em uma estátua de sal por desobedecer e olhar para trás durante a destruição de Sodoma.',
    level: 'Médio'
  },
  {
    id: 28,
    category: 'Bíblia',
    question: 'Qual foi o último livro do Novo Testamento a ser escrito?',
    options: ['Judas', '2 Pedro', 'Apocalipse', '3 João'],
    correctAnswer: 2,
    explanation: 'O Apocalipse foi o último livro do Novo Testamento a ser escrito, por volta de 95 d.C., pelo apóstolo João.',
    level: 'Médio'
  },
  {
    id: 29,
    category: 'Bíblia',
    question: 'Quem foi o pai de Isaque?',
    options: ['Noé', 'Abraão', 'Jacó', 'José'],
    correctAnswer: 1,
    explanation: 'Abraão foi o pai de Isaque, que foi o filho da promessa e ancestral do povo de Israel.',
    level: 'Médio'
  },
  {
    id: 30,
    category: 'Bíblia',
    question: 'Qual profeta enfrentou os profetas de Baal no monte Carmelo?',
    options: ['Ezequiel', 'Elias', 'Eliseu', 'Isaías'],
    correctAnswer: 1,
    explanation: 'Elias enfrentou os 450 profetas de Baal no monte Carmelo em um desafio para provar qual deus era verdadeiro.',
    level: 'Médio'
  },
  // Perguntas Bíblicas - Difícil (IDs 31-35)
  {
    id: 31,
    category: 'Bíblia',
    question: 'Quantos anos tinha Abraão quando Isaque nasceu?',
    options: ['90 anos', '100 anos', '110 anos', '120 anos'],
    correctAnswer: 1,
    explanation: 'Abraão tinha 100 anos quando Isaque nasceu, conforme Gênesis 21:5, cumprindo a promessa de Deus.',
    level: 'Difícil'
  },
  {
    id: 32,
    category: 'Bíblia',
    question: 'Qual foi o nome dado ao lugar onde Jesus foi crucificado?',
    options: ['Getsêmani', 'Gólgota', 'Betânia', 'Nazaré'],
    correctAnswer: 1,
    explanation: 'Gólgota (que significa "lugar da caveira") foi onde Jesus foi crucificado, também conhecido como Calvário.',
    level: 'Difícil'
  },
  {
    id: 33,
    category: 'Bíblia',
    question: 'Quantas gerações há de Abraão até Davi, segundo Mateus 1?',
    options: ['12 gerações', '14 gerações', '16 gerações', '18 gerações'],
    correctAnswer: 1,
    explanation: 'Segundo Mateus 1:17, há 14 gerações de Abraão até Davi, 14 de Davi até o exílio, e 14 do exílio até Cristo.',
    level: 'Difícil'
  },
  {
    id: 34,
    category: 'Bíblia',
    question: 'Qual é o menor livro do Antigo Testamento?',
    options: ['Obadias', 'Naum', 'Ageu', 'Sofonias'],
    correctAnswer: 0,
    explanation: 'Obadias é o menor livro do Antigo Testamento, contendo apenas 21 versículos em um único capítulo.',
    level: 'Difícil'
  },
  {
    id: 35,
    category: 'Bíblia',
    question: 'Quem foi o sumo sacerdote que condenou Jesus?',
    options: ['Anás', 'Caifás', 'Herodes', 'Pilatos'],
    correctAnswer: 1,
    explanation: 'Caifás foi o sumo sacerdote que presidiu o julgamento de Jesus e o condenou à morte.',
    level: 'Difícil'
  },  
  
  
 
  // Perguntas de Teoria Musical - Fácil (IDs 36-45)
  {
    id: 36,
    category: 'Música',
    question: 'Quantas notas musicais existem na escala cromática ocidental?',
    options: ['7 notas', '12 notas', '15 notas', '24 notas'],
    correctAnswer: 1,
    explanation: 'A escala cromática ocidental possui 12 notas: Dó, Dó#, Ré, Ré#, Mi, Fá, Fá#, Sol, Sol#, Lá, Lá#, Si.',
    level: 'Fácil'
  },
  {
    id: 37,
    category: 'Música',
    question: 'Qual é o nome da nota que vem depois de Sol na escala de Dó maior?',
    options: ['Fá', 'Lá', 'Si', 'Dó'],
    correctAnswer: 1,
    explanation: 'Na escala de Dó maior, a sequência é: Dó, Ré, Mi, Fá, Sol, Lá, Si. Portanto, Lá vem depois de Sol.',
    level: 'Fácil'
  },
  {
    id: 38,
    category: 'Música',
    question: 'Quantas linhas tem uma pauta musical padrão?',
    options: ['3 linhas', '4 linhas', '5 linhas', '6 linhas'],
    correctAnswer: 2,
    explanation: 'Uma pauta musical padrão (pentagrama) possui 5 linhas horizontais onde as notas são escritas.',
    level: 'Fácil'
  },
  {
    id: 39,
    category: 'Música',
    question: 'Qual é o símbolo que indica que uma nota deve ser tocada mais forte?',
    options: ['Piano (p)', 'Forte (f)', 'Crescendo', 'Diminuendo'],
    correctAnswer: 1,
    explanation: 'O símbolo "f" (forte) indica que a nota ou passagem deve ser tocada com mais volume/intensidade.',
    level: 'Fácil'
  },
  {
    id: 40,
    category: 'Música',
    question: 'Qual instrumento de cordas é tocado com arco?',
    options: ['Violão', 'Violino', 'Harpa', 'Banjo'],
    correctAnswer: 1,
    explanation: 'O violino é um instrumento de cordas tocado com arco, assim como a viola, o violoncelo e o contrabaixo.',
    level: 'Fácil'
  },
  {
    id: 41,
    category: 'Música',
    question: 'Quantos tempos tem uma semínima em um compasso 4/4?',
    options: ['1 tempo', '2 tempos', '3 tempos', '4 tempos'],
    correctAnswer: 0,
    explanation: 'Em um compasso 4/4, a semínima vale 1 tempo. A mínima vale 2 tempos, a semibreve vale 4 tempos.',
    level: 'Fácil'
  },
  {
    id: 42,
    category: 'Música',
    question: 'Qual é o nome da clave mais usada para instrumentos agudos?',
    options: ['Clave de Fá', 'Clave de Dó', 'Clave de Sol', 'Clave de Ré'],
    correctAnswer: 2,
    explanation: 'A clave de Sol é a mais usada para instrumentos agudos e vozes femininas, indicando que a nota Sol está na segunda linha.',
    level: 'Fácil'
  },
  {
    id: 43,
    category: 'Música',
    question: 'O que significa "piano" (p) em uma partitura?',
    options: ['Tocar forte', 'Tocar suave', 'Tocar rápido', 'Tocar lento'],
    correctAnswer: 1,
    explanation: 'O símbolo "p" (piano) indica que a música deve ser tocada suavemente, com pouco volume.',
    level: 'Fácil'
  },
  {
    id: 44,
    category: 'Música',
    question: 'Quantas oitavas completas existem em um piano padrão de 88 teclas?',
    options: ['5 oitavas', '6 oitavas', '7 oitavas', '8 oitavas'],
    correctAnswer: 2,
    explanation: 'Um piano padrão de 88 teclas possui aproximadamente 7 oitavas completas, desde Lá0 até Dó8.',
    level: 'Fácil'
  },
  {
    id: 45,
    category: 'Música',
    question: 'Qual é o nome do símbolo que aumenta a altura de uma nota em meio tom?',
    options: ['Bemol (♭)', 'Sustenido (♯)', 'Bequadro (♮)', 'Fermata'],
    correctAnswer: 1,
    explanation: 'O sustenido (♯) aumenta a altura de uma nota em meio tom. O bemol (♭) diminui em meio tom.',
    level: 'Fácil'
  },
  // Perguntas de Teoria Musical - Médio (IDs 46-55)
  {
    id: 46,
    category: 'Música',
    question: 'Quantos semitons existem em uma quinta justa?',
    options: ['5 semitons', '6 semitons', '7 semitons', '8 semitons'],
    correctAnswer: 2,
    explanation: 'Uma quinta justa contém 7 semitons. Por exemplo, de Dó a Sol é uma quinta justa.',
    level: 'Médio'
  },
  {
    id: 47,
    category: 'Música',
    question: 'Qual é a fórmula de intervalos da escala maior?',
    options: ['T-T-ST-T-T-T-ST', 'T-ST-T-T-ST-T-T', 'T-T-ST-T-T-ST-T', 'ST-T-T-T-ST-T-T'],
    correctAnswer: 0,
    explanation: 'A escala maior segue o padrão: Tom-Tom-Semiton-Tom-Tom-Tom-Semiton (T-T-ST-T-T-T-ST).',
    level: 'Médio'
  },
  {
    id: 48,
    category: 'Música',
    question: 'Quantas notas tem um acorde de sétima dominante?',
    options: ['3 notas', '4 notas', '5 notas', '6 notas'],
    correctAnswer: 1,
    explanation: 'Um acorde de sétima dominante contém 4 notas: tônica, terça maior, quinta justa e sétima menor.',
    level: 'Médio'
  },
  {
    id: 49,
    category: 'Música',
    question: 'Qual é o relativo menor de Dó maior?',
    options: ['Lá menor', 'Si menor', 'Ré menor', 'Mi menor'],
    correctAnswer: 0,
    explanation: 'Lá menor é o relativo menor de Dó maior, pois compartilham as mesmas notas (sem acidentes).',
    level: 'Médio'
  },
  {
    id: 50,
    category: 'Música',
    question: 'O que é um trítono?',
    options: ['Intervalo de 3 tons', 'Intervalo de 4 tons', 'Intervalo de 6 semitons', 'Intervalo de 8 semitons'],
    correctAnswer: 2,
    explanation: 'Um trítono é um intervalo de 6 semitons (3 tons inteiros), considerado dissonante e instável, como de Fá a Si.',
    level: 'Médio'
  },
  {
    id: 51,
    category: 'Música',
    question: 'Qual é a função do acorde de dominante em uma progressão harmônica?',
    options: ['Estabilidade', 'Tensão que resolve na tônica', 'Modulação', 'Repouso'],
    correctAnswer: 1,
    explanation: 'O acorde de dominante (V) cria tensão harmônica que naturalmente resolve no acorde de tônica (I), proporcionando sensação de conclusão.',
    level: 'Médio'
  },
  {
    id: 52,
    category: 'Música',
    question: 'Quantos acidentes (sustenidos) tem a escala de Sol maior?',
    options: ['0 sustenidos', '1 sustenido', '2 sustenidos', '3 sustenidos'],
    correctAnswer: 1,
    explanation: 'A escala de Sol maior possui 1 sustenido: Fá#. Segue o círculo de quintas: Dó (0), Sol (1#), Ré (2#), etc.',
    level: 'Médio'
  },
  {
    id: 53,
    category: 'Música',
    question: 'O que significa "legato" em uma partitura?',
    options: ['Tocar separado', 'Tocar ligado', 'Tocar rápido', 'Tocar forte'],
    correctAnswer: 1,
    explanation: 'Legato significa tocar as notas de forma ligada, sem interrupção entre elas, criando um som contínuo e fluido.',
    level: 'Médio'
  },
  {
    id: 54,
    category: 'Música',
    question: 'Qual é a diferença entre um acorde maior e um acorde menor?',
    options: ['Apenas a tônica', 'Apenas a terça', 'Apenas a quinta', 'Apenas a sétima'],
    correctAnswer: 1,
    explanation: 'A diferença entre acorde maior e menor está na terça: maior tem terça maior (4 semitons da tônica), menor tem terça menor (3 semitons).',
    level: 'Médio'
  },
  {
    id: 55,
    category: 'Música',
    question: 'O que é uma cadência perfeita?',
    options: ['V-I', 'IV-I', 'I-V', 'V-IV'],
    correctAnswer: 0,
    explanation: 'Uma cadência perfeita é a progressão V-I (dominante para tônica), que proporciona a sensação mais forte de conclusão e repouso.',
    level: 'Médio'
  },
  // Perguntas de Teoria Musical - Difícil (IDs 56-65)
  {
    id: 56,
    category: 'Música',
    question: 'Qual é o modo grego que corresponde à escala maior natural?',
    options: ['Dórico', 'Frígio', 'Lídio', 'Jônio'],
    correctAnswer: 3,
    explanation: 'O modo jônio corresponde à escala maior natural. Os modos gregos são: Jônio (maior), Dórico, Frígio, Lídio, Mixolídio, Eólio (menor natural), Lócrio.',
    level: 'Difícil'
  },
  {
    id: 57,
    category: 'Música',
    question: 'O que é contraponto na música?',
    options: ['Técnica de harmonização', 'Técnica de composição com linhas melódicas independentes', 'Técnica de ritmo', 'Técnica de dinâmica'],
    correctAnswer: 1,
    explanation: 'Contraponto é uma técnica de composição onde duas ou mais linhas melódicas independentes são tocadas simultaneamente, criando uma textura polifônica.',
    level: 'Difícil'
  },
  {
    id: 58,
    category: 'Música',
    question: 'Quantos semitons existem em uma nona maior?',
    options: ['12 semitons', '13 semitons', '14 semitons', '15 semitons'],
    correctAnswer: 2,
    explanation: 'Uma nona maior contém 14 semitons (uma oitava + 1 tom). Por exemplo, de Dó a Ré na oitava seguinte.',
    level: 'Difícil'
  },
  {
    id: 59,
    category: 'Música',
    question: 'O que é uma modulação enarmônica?',
    options: ['Modulação usando acordes com mesmo som mas nomes diferentes', 'Modulação cromática', 'Modulação por dominante secundária', 'Modulação diatônica'],
    correctAnswer: 0,
    explanation: 'Modulação enarmônica ocorre quando se usa a equivalência enarmônica (mesmo som, nomes diferentes) para mudar de tonalidade, como Ré# = Mi♭.',
    level: 'Difícil'
  },
  {
    id: 60,
    category: 'Música',
    question: 'Qual é a função do acorde de sétima diminuta?',
    options: ['Tônica', 'Subdominante', 'Dominante secundária ou cromática', 'Relativo'],
    correctAnswer: 2,
    explanation: 'O acorde de sétima diminuta é frequentemente usado como dominante secundária ou para criar movimento cromático, devido à sua simetria e instabilidade.',
    level: 'Difícil'
  },
  {
    id: 61,
    category: 'Música',
    question: 'O que é uma progressão de quintas no círculo de quintas?',
    options: ['Movimento por intervalos de quinta ascendente', 'Movimento por intervalos de quinta descendente', 'Movimento cromático', 'Movimento por segundas'],
    correctAnswer: 0,
    explanation: 'O círculo de quintas organiza as tonalidades em progressão de quintas ascendentes: Dó, Sol, Ré, Lá, Mi, Si, Fá#, etc., cada uma adicionando um sustenido.',
    level: 'Difícil'
  },
  {
    id: 62,
    category: 'Música',
    question: 'O que é harmonia funcional?',
    options: ['Sistema que classifica acordes por sua função tonal', 'Sistema de escalas', 'Sistema de ritmo', 'Sistema de dinâmica'],
    correctAnswer: 0,
    explanation: 'Harmonia funcional é um sistema que classifica acordes baseado em suas funções na tonalidade: tônica (I), subdominante (IV), dominante (V) e suas variações.',
    level: 'Difícil'
  },
  {
    id: 63,
    category: 'Música',
    question: 'Qual é a diferença entre modo e escala?',
    options: ['Não há diferença', 'Modo é uma escala com padrão específico de intervalos começando em diferentes graus', 'Escala é um modo específico', 'Modo é apenas para música antiga'],
    correctAnswer: 1,
    explanation: 'Um modo é essencialmente uma escala que começa em um grau diferente da tônica. Por exemplo, o modo dórico de Ré usa as notas de Dó maior, mas começa em Ré.',
    level: 'Difícil'
  },
  {
    id: 64,
    category: 'Música',
    question: 'O que é uma cadência deceptiva?',
    options: ['V-VI em vez de V-I', 'I-V', 'IV-I', 'V-IV'],
    correctAnswer: 0,
    explanation: 'Uma cadência deceptiva ocorre quando o acorde de dominante (V) resolve em um acorde diferente da tônica esperada, geralmente no relativo menor (VI), criando surpresa.',
    level: 'Difícil'
  },
  {
    id: 65,
    category: 'Música',
    question: 'O que é análise harmônica?',
    options: ['Análise de ritmo', 'Análise de melodia', 'Identificação e classificação de acordes e suas relações em uma peça musical', 'Análise de timbre'],
    correctAnswer: 2,
    explanation: 'Análise harmônica é o processo de identificar acordes, suas funções tonais, progressões e relações estruturais em uma composição musical.',
    level: 'Difícil'
  },
  // Perguntas Bíblicas - Fácil (IDs 66-102)
  {
    id: 66,
    category: 'Bíblia',
    question: 'Quem construiu a arca?',
    options: ['Moisés', 'Noé', 'Jacó', 'Abraão'],
    correctAnswer: 1,
    explanation: 'Noé construiu a arca conforme as instruções de Deus (Gênesis 6:14).',
    level: 'Fácil'
  },
  {
    id: 67,
    category: 'Bíblia',
    question: 'Qual sinal Deus colocou no céu após o dilúvio?',
    options: ['Uma estrela', 'O arco-íris', 'Uma nuvem especial', 'Um relâmpago'],
    correctAnswer: 1,
    explanation: 'Deus colocou o arco-íris nas nuvens como sinal da aliança após o dilúvio (Gênesis 9:13).',
    level: 'Fácil'
  },
  {
    id: 68,
    category: 'Bíblia',
    question: 'O que o povo quis construir em Babel?',
    options: ['Um castelo', 'Uma cidade e uma torre', 'Um templo', 'Um grande palácio'],
    correctAnswer: 1,
    explanation: 'O povo decidiu construir uma cidade e uma torre cuja torre chegasse aos céus (Gênesis 11:4).',
    level: 'Fácil'
  },
  {
    id: 69,
    category: 'Bíblia',
    question: 'O que Deus fez para parar a construção da torre de Babel?',
    options: ['Mandou um terremoto', 'Confundiu a língua do povo', 'Quebrou a torre', 'Mandou fogo do céu'],
    correctAnswer: 1,
    explanation: 'Deus confundiu a linguagem do povo para que não se entendessem, e assim a obra parou (Gênesis 11:7).',
    level: 'Fácil'
  },
  {
    id: 70,
    category: 'Bíblia',
    question: 'Como Esaú nasceu?',
    options: ['Careca', 'Cheio de pelos', 'De chapéu', 'Com asas'],
    correctAnswer: 1,
    explanation: 'Esaú nasceu ruivo e todo coberto de pelos, como um manto de pelos (Gênesis 25:25).',
    level: 'Fácil'
  },
  {
    id: 71,
    category: 'Bíblia',
    question: 'O que Jacó segurava quando nasceu?',
    options: ['Um brinquedo', 'O pé do irmão', 'Um copo', 'Uma corda'],
    correctAnswer: 1,
    explanation: 'Jacó nasceu com a mão segurando o calcanhar de Esaú (Gênesis 25:26).',
    level: 'Fácil'
  },
  {
    id: 72,
    category: 'Bíblia',
    question: 'Qual era o nome do jardim onde Adão e Eva viviam?',
    options: ['Jardim Feliz', 'Jardim do Éden', 'Jardim Azul', 'Jardim da Promessa'],
    correctAnswer: 1,
    explanation: 'Deus colocou Adão no jardim do Éden para o lavrar e o guardar (Gênesis 2:15).',
    level: 'Fácil'
  },
  {
    id: 73,
    category: 'Bíblia',
    question: 'Qual animal falou com Eva?',
    options: ['Cachorro', 'Serpente', 'Cavalo', 'Leão'],
    correctAnswer: 1,
    explanation: 'A serpente enganou Eva, fazendo-a duvidar das palavras de Deus (Gênesis 3:1-6).',
    level: 'Fácil'
  },
  {
    id: 74,
    category: 'Bíblia',
    question: 'Quem eram os gêmeos filhos de Isaque?',
    options: ['José e Benjamim', 'Esaú e Jacó', 'Caim e Abel', 'Davi e Jônatas'],
    correctAnswer: 1,
    explanation: 'Esaú e Jacó eram gêmeos, filhos de Isaque e Rebeca (Gênesis 25:24-26).',
    level: 'Fácil'
  },
  {
    id: 75,
    category: 'Bíblia',
    question: 'O que Deus criou no primeiro dia?',
    options: ['As plantas', 'A luz', 'Os animais', 'Os astros'],
    correctAnswer: 1,
    explanation: 'No primeiro dia Deus disse: \"Haja luz\"; e houve luz (Gênesis 1:3).',
    level: 'Fácil'
  },
  {
    id: 76,
    category: 'Bíblia',
    question: 'O que Deus fez no sétimo dia da criação?',
    options: ['Trabalhou mais', 'Dormiu', 'Descansou', 'Começou tudo de novo'],
    correctAnswer: 2,
    explanation: 'Depois de terminar a criação, Deus descansou no sétimo dia (Gênesis 2:2).',
    level: 'Fácil'
  },
  {
    id: 77,
    category: 'Bíblia',
    question: 'Que tipo de luz Deus colocou no céu para governar o dia?',
    options: ['A lua', 'O sol', 'As estrelas', 'O arco-íris'],
    correctAnswer: 1,
    explanation: 'Deus fez os dois grandes luminares: o maior para governar o dia (o sol) e o menor para governar a noite (a lua) (Gênesis 1:16).',
    level: 'Fácil'
  },
  {
    id: 78,
    category: 'Bíblia',
    question: 'Que material Deus mandou usar na construção da arca de Noé?',
    options: ['Madeira', 'Pedra', 'Ferro', 'Bronze'],
    correctAnswer: 0,
    explanation: 'Deus mandou Noé fazer a arca de madeira de gofer (Gênesis 6:14).',
    level: 'Fácil'
  },
  {
    id: 79,
    category: 'Bíblia',
    question: 'Quanto tempo choveu sem parar durante o dilúvio?',
    options: ['7 dias', '20 dias', '40 dias', '100 dias'],
    correctAnswer: 2,
    explanation: 'Choveu quarenta dias e quarenta noites sobre a terra (Gênesis 7:12).',
    level: 'Fácil'
  },
  {
    id: 80,
    category: 'Bíblia',
    question: 'Que ave Noé soltou primeiro depois do dilúvio?',
    options: ['Um corvo', 'Uma pomba', 'Um pardal', 'Uma águia'],
    correctAnswer: 0,
    explanation: 'Noé soltou primeiro um corvo, que ia e vinha (Gênesis 8:7).',
    level: 'Fácil'
  },
  {
    id: 81,
    category: 'Bíblia',
    question: 'O que aconteceu com a esposa de Ló quando olhou para trás?',
    options: ['Caiu e dormiu', 'Virou uma estátua de sal', 'Fugiu para outra cidade', 'Virou pedra'],
    correctAnswer: 1,
    explanation: 'A mulher de Ló olhou para trás e transformou-se numa estátua de sal (Gênesis 19:26).',
    level: 'Fácil'
  },
  {
    id: 82,
    category: 'Bíblia',
    question: 'Quem lutou com um anjo até ser abençoado?',
    options: ['Jacó', 'Adão', 'Noé', 'Abraão'],
    correctAnswer: 0,
    explanation: 'Jacó lutou com o anjo durante a noite e recebeu a bênção e o novo nome Israel (Gênesis 32:24-28).',
    level: 'Fácil'
  },
  {
    id: 83,
    category: 'Bíblia',
    question: 'Quem ofereceu o fruto proibido a Eva?',
    options: ['Seu esposo', 'Uma serpente', 'Um papagaio', 'Um anjo'],
    correctAnswer: 1,
    explanation: 'A serpente enganou Eva e a levou a comer do fruto proibido (Gênesis 3:1-6).',
    level: 'Fácil'
  },
  {
    id: 84,
    category: 'Bíblia',
    question: 'Quem interpretou os sonhos do faraó no Egito?',
    options: ['Daniel', 'José', 'Arão', 'Moisés'],
    correctAnswer: 1,
    explanation: 'José, pela sabedoria que Deus lhe deu, interpretou os sonhos do faraó (Gênesis 41:15-16).',
    level: 'Fácil'
  },
  {
    id: 85,
    category: 'Bíblia',
    question: 'Quem vendeu o direito de primogenitura por um prato de comida?',
    options: ['Jacó', 'Esaú', 'Ismael', 'Benjamim'],
    correctAnswer: 1,
    explanation: 'Esaú vendeu o seu direito de primogenitura a Jacó por um prato de lentilhas (Gênesis 25:34).',
    level: 'Fácil'
  },
  {
    id: 86,
    category: 'Bíblia',
    question: 'Para qual terra Deus prometeu levar Abraão?',
    options: ['Canaã', 'Egito', 'Síria', 'Babilônia'],
    correctAnswer: 0,
    explanation: 'Deus prometeu dar a Abraão e à sua descendência a terra de Canaã (Gênesis 12:5-7).',
    level: 'Fácil'
  },
  {
    id: 87,
    category: 'Bíblia',
    question: 'Quem era o rei de Sodoma quando Ló foi capturado?',
    options: ['Quedorlaomer', 'Bera', 'Abimeleque', 'Faraó'],
    correctAnswer: 1,
    explanation: 'Bera era o rei de Sodoma na época em que Ló foi levado cativo (Gênesis 14:1-2).',
    level: 'Fácil'
  },
  {
    id: 88,
    category: 'Bíblia',
    question: 'Qual foi o nome do filho de Abraão com Agar?',
    options: ['Isaque', 'Ismael', 'Esaú', 'Ló'],
    correctAnswer: 1,
    explanation: 'Abraão gerou Ismael com Agar, serva de Sara (Gênesis 16:15).',
    level: 'Fácil'
  },
  {
    id: 89,
    category: 'Bíblia',
    question: 'Quem foi levado para o céu sem ver a morte?',
    options: ['Noé', 'Enoque', 'Abraão', 'Elias'],
    correctAnswer: 1,
    explanation: 'Enoque andou com Deus e Deus para si o tomou, sem que ele visse a morte (Gênesis 5:24).',
    level: 'Fácil'
  },
  {
    id: 90,
    category: 'Bíblia',
    question: 'Qual filho de Jacó recebeu uma túnica de várias cores?',
    options: ['Judá', 'José', 'Benjamim', 'Rúben'],
    correctAnswer: 1,
    explanation: 'Jacó amava mais a José e lhe deu uma túnica de várias cores (Gênesis 37:3).',
    level: 'Fácil'
  },
  {
    id: 91,
    category: 'Bíblia',
    question: 'Quem foi levada para o Egito e ficou na casa de Faraó?',
    options: ['Rebeca', 'Sara', 'Raquel', 'Miriã'],
    correctAnswer: 1,
    explanation: 'Sara foi levada para a casa de Faraó quando Abraão desceu ao Egito (Gênesis 12:15).',
    level: 'Fácil'
  },
  {
    id: 92,
    category: 'Bíblia',
    question: 'Onde Jacó lutou com o anjo de Deus?',
    options: ['Betel', 'Peniel', 'Siquém', 'Hebrom'],
    correctAnswer: 1,
    explanation: 'Jacó chamou aquele lugar de Peniel, porque disse que viu Deus face a face (Gênesis 32:30).',
    level: 'Fácil'
  },
  {
    id: 93,
    category: 'Bíblia',
    question: 'Quem teve muitos filhos que se tornaram as 12 tribos de Israel?',
    options: ['Abraão', 'Isaque', 'Jacó', 'José'],
    correctAnswer: 2,
    explanation: 'Os filhos de Jacó formaram as 12 tribos de Israel (Gênesis 35:22-26).',
    level: 'Fácil'
  },
  {
    id: 94,
    category: 'Bíblia',
    question: 'Quem mentiu dizendo que a esposa era sua irmã?',
    options: ['Abraão', 'Noé', 'José', 'Isaque'],
    correctAnswer: 0,
    explanation: 'Por medo, Abraão disse que Sara era sua irmã ao descer ao Egito (Gênesis 12:13).',
    level: 'Fácil'
  },
  {
    id: 95,
    category: 'Bíblia',
    question: 'Quem foi jogado numa cisterna por seus irmãos?',
    options: ['Judá', 'José', 'Benjamim', 'Esaú'],
    correctAnswer: 1,
    explanation: 'Os irmãos de José o jogaram numa cisterna vazia antes de vendê-lo como escravo (Gênesis 37:24).',
    level: 'Fácil'
  },
  {
    id: 96,
    category: 'Bíblia',
    question: 'Quem nasceu primeiro: Esaú ou Jacó?',
    options: ['Jacó', 'Esaú', 'Isaque', 'Abraão'],
    correctAnswer: 1,
    explanation: 'Esaú nasceu primeiro e Jacó nasceu em seguida segurando o seu calcanhar (Gênesis 25:25-26).',
    level: 'Fácil'
  },
  {
    id: 97,
    category: 'Bíblia',
    question: 'Quem foi o primeiro filho de Abraão?',
    options: ['Isaque', 'Ismael', 'Esaú', 'José'],
    correctAnswer: 1,
    explanation: 'Ismael, filho de Abraão com Agar, foi o primeiro filho de Abraão (Gênesis 16:15).',
    level: 'Fácil'
  },
  {
    id: 98,
    category: 'Bíblia',
    question: 'Quem foi buscar uma esposa para Isaque?',
    options: ['O próprio Isaque', 'O servo de Abraão', 'Jacó', 'Ló'],
    correctAnswer: 1,
    explanation: 'Abraão enviou o seu servo para buscar uma esposa para Isaque entre seus parentes (Gênesis 24:2-4).',
    level: 'Fácil'
  },
  {
    id: 99,
    category: 'Bíblia',
    question: 'Quem foi vendido pelos irmãos por vinte moedas de prata?',
    options: ['José', 'Benjamim', 'Judá', 'Simeão'],
    correctAnswer: 0,
    explanation: 'Os irmãos de José o venderam por vinte moedas de prata a mercadores ismaelitas (Gênesis 37:28).',
    level: 'Fácil'
  },
  {
    id: 100,
    category: 'Bíblia',
    question: 'No relato da criação, o que Deus criou no quarto dia?',
    options: ['As aves do céu e os peixes do mar', 'O homem e a mulher', 'A vegetação e as árvores frutíferas', 'O sol, a lua e as estrelas'],
    correctAnswer: 3,
    explanation: 'No quarto dia Deus criou os luminares: sol, lua e estrelas para governar o dia e a noite (Gênesis 1:14-19).',
    level: 'Fácil'
  },
  {
    id: 101,
    category: 'Bíblia',
    question: 'Qual material foi usado para calafetar a arca de Noé por dentro e por fora?',
    options: ['Cimento', 'Barro', 'Betume (piche)', 'Resina de pinheiro'],
    correctAnswer: 2,
    explanation: 'Deus mandou Noé calafetar a arca por dentro e por fora com betume (Gênesis 6:14).',
    level: 'Fácil'
  },
  {
    id: 102,
    category: 'Bíblia',
    question: 'Por que preço Esaú vendeu o seu direito de primogenitura a Jacó?',
    options: ['Um rebanho de ovelhas', 'Um prato de lentilhas e pão', 'Trinta moedas de prata', 'A túnica colorida de Jacó'],
    correctAnswer: 1,
    explanation: 'Esaú vendeu o seu direito de primogenitura a Jacó por um prato de comida (Gênesis 25:34).',
    level: 'Fácil'
  },
  // Perguntas Bíblicas - Médio (IDs 103-115)
  {
    id: 103,
    category: 'Bíblia',
    question: 'Por que Sara expulsou Agar e Ismael de sua casa?',
    options: ['Porque viu Ismael zombando de Isaque', 'Porque Ismael roubou a comida de Isaque', 'Por ordem direta de um anjo a Sara', 'Porque Abraão pediu isso a ela'],
    correctAnswer: 0,
    explanation: 'Sara viu Ismael zombando de Isaque e pediu que Abraão mandasse Agar e o filho embora (Gênesis 21:9-10).',
    level: 'Médio'
  },
  {
    id: 104,
    category: 'Bíblia',
    question: 'O que Deus proveu para ser sacrificado no lugar de Isaque no monte Moriá?',
    options: ['Uma pomba', 'Um carneiro preso num matagal', 'Um novilho', 'Um cordeiro branco'],
    correctAnswer: 1,
    explanation: 'Abraão viu um carneiro preso pelos chifres no mato e o ofereceu em lugar de Isaque (Gênesis 22:13).',
    level: 'Médio'
  },
  {
    id: 105,
    category: 'Bíblia',
    question: 'Quando Abraão e Ló se separaram, para onde Ló escolheu ir?',
    options: ['De volta para a Caldeia', 'Para as montanhas de Hebrom', 'Para a planície do Jordão, perto de Sodoma', 'Para o deserto do Neguebe'],
    correctAnswer: 2,
    explanation: 'Ló escolheu toda a planície do Jordão e armou as suas tendas até Sodoma (Gênesis 13:10-12).',
    level: 'Médio'
  },
  {
    id: 106,
    category: 'Bíblia',
    question: 'Quem era a mãe de José e Benjamim, os filhos preferidos de Jacó?',
    options: ['Raquel', 'Lia', 'Bila', 'Zilpa'],
    correctAnswer: 0,
    explanation: 'Raquel foi a mãe de José e de Benjamim, filhos muito amados por Jacó (Gênesis 30:22-24; 35:18).',
    level: 'Médio'
  },
  {
    id: 107,
    category: 'Bíblia',
    question: 'O que José fez quando seus irmãos foram ao Egito comprar trigo?',
    options: ['Revelou-se logo no primeiro encontro', 'Testou-os, tratando-os como espiões antes de se revelar', 'Fingiu que não os conhecia e mandou-os embora sem nada', 'Mandou-os prender e executar imediatamente'],
    correctAnswer: 1,
    explanation: 'José reconheceu seus irmãos, mas os tratou como estrangeiros e os provou antes de revelar quem era (Gênesis 42:7-20).',
    level: 'Médio'
  },
  {
    id: 108,
    category: 'Bíblia',
    question: 'Quais são os quatro rios que se ramificavam do rio que saía do Éden?',
    options: ['Pison, Giom, Nilo e Sena', 'Jaboque, Arnom, Querite e Eufrates', 'Nilo, Jordão, Tigre e Eufrates', 'Pison, Giom, Tigre (Hidéquel) e Eufrates'],
    correctAnswer: 3,
    explanation: 'Daquele rio que saía do Éden se dividiam Pison, Giom, Hidéquel (Tigre) e Eufrates (Gênesis 2:10-14).',
    level: 'Médio'
  },
  {
    id: 109,
    category: 'Bíblia',
    question: 'Quais eram as dimensões da arca de Noé em côvados?',
    options: ['500 de comprimento, 100 de largura e 50 de altura', '300 de comprimento, 50 de largura e 30 de altura', '100 de comprimento, 50 de largura e 30 de altura', '400 de comprimento, 75 de largura e 45 de altura'],
    correctAnswer: 1,
    explanation: 'Deus ordenou que a arca tivesse 300 côvados de comprimento, 50 de largura e 30 de altura (Gênesis 6:15).',
    level: 'Médio'
  },
  {
    id: 110,
    category: 'Bíblia',
    question: 'Após a morte de Sara, com quem Abraão se casou novamente?',
    options: ['Milca', 'Ada', 'Quetura', 'Basemate'],
    correctAnswer: 2,
    explanation: 'Depois da morte de Sara, Abraão tomou outra mulher, cujo nome era Quetura (Gênesis 25:1).',
    level: 'Médio'
  },
  {
    id: 111,
    category: 'Bíblia',
    question: 'Qual dos filhos de Jacó não deu nome a uma das 12 tribos originais de Israel, sendo substituído por seus dois filhos?',
    options: ['Judá', 'Levi', 'José', 'Benjamim'],
    correctAnswer: 2,
    explanation: 'José não deu nome a uma tribo; em seu lugar ficaram seus filhos Efraim e Manassés (Gênesis 48:5).',
    level: 'Médio'
  },
  {
    id: 112,
    category: 'Bíblia',
    question: 'Na visão da escada de Jacó, o que os anjos de Deus faziam?',
    options: ['Estavam parados vigiando Jacó', 'Subiam e desciam pela escada', 'Desciam apenas para falar com ele', 'Lutavam contra as trevas'],
    correctAnswer: 1,
    explanation: 'Jacó viu uma escada posta na terra e os anjos de Deus subindo e descendo por ela (Gênesis 28:12).',
    level: 'Médio'
  },
  {
    id: 113,
    category: 'Bíblia',
    question: 'Qual era a característica física mencionada sobre Lia, a primeira esposa de Jacó?',
    options: ['Ela era muda', 'Ela foi estéril por toda a vida', 'Ela era coxa de uma perna', 'Ela tinha olhos baços (fracos)'],
    correctAnswer: 3,
    explanation: 'A Bíblia diz que Lia tinha olhos baços, enquanto Raquel era formosa de semblante e formosa à vista (Gênesis 29:17).',
    level: 'Médio'
  },
  {
    id: 114,
    category: 'Bíblia',
    question: 'Qual foi a reação de Sara ao ouvir que teria um filho na velhice?',
    options: ['Ela riu consigo mesma', 'Ela expulsou o mensageiro', 'Ela caiu por terra em adoração', 'Ela chorou de emoção'],
    correctAnswer: 0,
    explanation: 'Sara riu consigo mesma ao ouvir que teria um filho, por já ser velha e de idade avançada (Gênesis 18:12).',
    level: 'Médio'
  },
  {
    id: 115,
    category: 'Bíblia',
    question: 'Qual irmão sugeriu jogar José numa cisterna para livrá-lo da morte?',
    options: ['Rúben', 'Benjamim', 'Levi', 'Judá'],
    correctAnswer: 0,
    explanation: 'Rúben aconselhou seus irmãos a não matarem José, mas a lançá-lo numa cisterna, planejando salvá-lo depois (Gênesis 37:21-22).',
    level: 'Médio'
  },
  {
    id: 116,
    category: 'Bíblia',
    question: 'Qual rei teve lepra até a morte por não buscar ao Senhor?',
    options: ['Uzias', 'Asa', 'Jorão', 'Jeú'],
    correctAnswer: 1,
    explanation: 'Asa, mesmo doente, confiou apenas nos médicos e não buscou ao Senhor.',
    level: 'Difícil'
  },
  {
    id: 117,
    category: 'Bíblia',
    question: 'Qual rei viu o sol retroceder como sinal de Deus?',
    options: ['Josias', 'Ezequias', 'Acabe', 'Manassés'],
    correctAnswer: 1,
    explanation: 'Deus fez a sombra do sol voltar dez graus como sinal da cura de Ezequias.',
    level: 'Difícil'
  },
  {
    id: 118,
    category: 'Bíblia',
    question: 'Qual rei foi humilhado e passou a viver como animal por um tempo?',
    options: ['Dario', 'Belsazar', 'Nabucodonosor', 'Ciro'],
    correctAnswer: 2,
    explanation: 'Por orgulho, Nabucodonosor foi afastado do convívio humano até reconhecer o poder de Deus.',
    level: 'Difícil'
  },
  {
    id: 119,
    category: 'Bíblia',
    question: 'Qual profeta chorou tanto por Jerusalém que ficou conhecido como "o profeta chorão"?',
    options: ['Isaías', 'Jeremias', 'Ezequiel', 'Oséias'],
    correctAnswer: 1,
    explanation: 'Jeremias lamentou profundamente a destruição de Jerusalém.',
    level: 'Difícil'
  },
  {
    id: 120,
    category: 'Bíblia',
    question: 'Qual profeta viu um vale cheio de ossos secos que ganharam vida?',
    options: ['Isaías', 'Jeremias', 'Daniel', 'Ezequiel'],
    correctAnswer: 3,
    explanation: 'Deus mostrou a Ezequiel que Israel, mesmo "morto espiritualmente", seria restaurado.',
    level: 'Difícil'
  },
  {
    id: 121,
    category: 'Bíblia',
    question: 'Qual profeta casou com uma mulher infiel por ordem de Deus?',
    options: ['Amós', 'Oséias', 'Jonas', 'Miqueias'],
    correctAnswer: 1,
    explanation: 'O casamento simbolizava a infidelidade de Israel a Deus.',
    level: 'Difícil'
  },
  {
    id: 122,
    category: 'Bíblia',
    question: 'Qual rei morreu comendo grama como boi por causa do orgulho?',
    options: ['Ciro', 'Dario', 'Nabucodonosor', 'Belsazar'],
    correctAnswer: 2,
    explanation: 'Deus o humilhou até ele reconhecer que o Altíssimo governa.',
    level: 'Difícil'
  },
  {
    id: 123,
    category: 'Bíblia',
    question: 'Quem escreveu o livro de Atos dos Apóstolos?',
    options: ['Pedro', 'Paulo', 'João', 'Lucas'],
    correctAnswer: 3,
    explanation: 'Lucas também escreveu o Evangelho de Lucas.',
    level: 'Difícil'
  },
  {
    id: 124,
    category: 'Bíblia',
    question: 'Quem foi mordido por uma serpente e curado ao olhar para a serpente de bronze?',
    options: ['Moisés', 'Arão', 'O povo de Israel', 'Josué'],
    correctAnswer: 2,
    explanation: 'Quem olhava para a serpente de bronze era curado.',
    level: 'Difícil'
  },
  {
    id: 125,
    category: 'Bíblia',
    question: 'Quem foi alimentado por corvos no deserto?',
    options: ['Eliseu', 'Elias', 'Jeremias', 'João Batista'],
    correctAnswer: 1,
    explanation: 'Deus enviou corvos com pão e carne.',
    level: 'Difícil'
  },
  {
    id: 126,
    category: 'Bíblia',
    question: 'O que aconteceu com os rapazes que zombaram da calvície do profeta Eliseu?',
    options: ['Ficaram todos calvos instantaneamente', 'Ficaram mudos para sempre', 'Foram atacados por duas ursas', 'Foram engolidos pela terra'],
    correctAnswer: 2,
    explanation: 'Então subiram do bosque duas ursas e despedaçaram quarenta e dois daqueles rapazes.',
    level: 'Difícil'
  },
  {
    id: 127,
    category: 'Bíblia',
    question: 'Qual era a profissão de Lucas, o autor de um dos Evangelhos e do livro de Atos dos Apóstolos?',
    options: ['Pescador', 'Médico', 'Fabricante de tendas', 'Cobrador de impostos'],
    correctAnswer: 1,
    explanation: 'Saúda-vos Lucas, o médico amado, e Demas.',
    level: 'Difícil'
  },
  {
    id: 128,
    category: 'Música',
    question: 'Qual desses é um instrumento de sopro?',
    options: ['Violino', 'Clarinete', 'Órgão'],
    correctAnswer: 1,
    explanation: 'O clarinete é um instrumento de sopro da família das madeiras — o som é produzido pelo ar que passa pela palheta. O violino é de cordas e o órgão é considerado de teclado (com tubos ou circuito).',
    level: 'Fácil'
  },
  {
    id: 129,
    category: 'Música',
    question: 'Por que a orquestra precisa estudar música?',
    options: ['Para tocar mais bonito para Deus', 'Para ser famosa', 'Para competir'],
    correctAnswer: 0,
    explanation: 'Estudar música ajuda a orquestra a tocar com excelência, harmonia e respeito, oferecendo o melhor a Deus e às pessoas que ouvem.',
    level: 'Fácil'
  },
  {
    id: 130,
    category: 'Música',
    question: 'O que é uma partitura?',
    options: ['Um desenho qualquer', 'O papel onde está escrita a música', 'Um livro de histórias'],
    correctAnswer: 1,
    explanation: 'A partitura é onde a música é escrita com notas, pausas e símbolos, para que o músico saiba o que tocar ou cantar.',
    level: 'Fácil'
  },
  {
    id: 131,
    category: 'Música',
    question: 'Qual nota vem depois do Sol?',
    options: ['Lá', 'Fá', 'Mi'],
    correctAnswer: 0,
    explanation: 'A sequência das notas é: Dó – Ré – Mi – Fá – Sol – Lá – Si.',
    level: 'Fácil'
  },
  {
    id: 132,
    category: 'Música',
    question: 'Quantas notas musicais existem?',
    options: ['5', '7', '12'],
    correctAnswer: 1,
    explanation: 'As 7 notas musicais são: Dó – Ré – Mi – Fá – Sol – Lá – Si.',
    level: 'Fácil'
  },
  {
    id: 133,
    category: 'Música',
    question: 'Um som longo é aquele que:',
    options: ['Dura bastante', 'É muito forte', 'É muito fino'],
    correctAnswer: 0,
    explanation: 'Som longo se refere à duração — ou seja, ele permanece por mais tempo. "Forte" fala de intensidade e "fino" fala de altura (grave/agudo).',
    level: 'Fácil'
  },
  {
    id: 134,
    category: 'Música',
    question: 'Qual é a principal função da orquestra na CCB?',
    options: ['Fazer show', 'Ajudar a irmandade nos cânticos dos hinos', 'Ensaiar só para músicos'],
    correctAnswer: 1,
    explanation: 'A orquestra existe para servir à congregação, ajudando a irmandade a cantar os hinos com mais firmeza, harmonia e reverência.',
    level: 'Fácil'
  },
  {
    id: 135,
    category: 'Música',
    question: 'A orquestra da CCB existe para…',
    options: ['Aparecer', 'Louvar a Deus', 'Ganhar'],
    correctAnswer: 1,
    explanation: 'A orquestra existe para servir ao culto e louvar a Deus com humildade e dedicação, usando a música como instrumento de adoração.',
    level: 'Fácil'
  },
  {
    id: 136,
    category: 'Música',
    question: 'Qual desses instrumentos faz parte da orquestra da CCB?',
    options: ['Guitarra elétrica', 'Violino', 'Bateria'],
    correctAnswer: 1,
    explanation: 'Na orquestra da CCB, os instrumentos são tradicionais e acústicos, como violino, viola, violoncelo, flauta, clarinete, trompete, etc. A guitarra elétrica e a bateria não fazem parte da formação da orquestra.',
    level: 'Fácil'
  },
  {
    id: 137,
    category: 'Música',
    question: 'Quem orienta os músicos durante o ensaio?',
    options: ['O encarregado', 'O ancião', 'O porteiro'],
    correctAnswer: 0,
    explanation: 'O encarregado da orquestra é quem orienta os músicos nos ensaios: marca entradas, corrige ritmo, afinação e ajuda todos a tocarem juntos em harmonia.',
    level: 'Fácil'
  },
  {
    id: 138,
    category: 'Música',
    question: 'Um som muito alto é chamado de…',
    options: ['Fraco', 'Forte', 'Longo'],
    correctAnswer: 1,
    explanation: 'Um som forte tem alta intensidade, ou seja, é alto. Fraco → baixo. Longo → duração, não intensidade.',
    level: 'Fácil'
  },
  {
    id: 139,
    category: 'Música',
    question: 'Um som que dura pouco tempo é…',
    options: ['Longo', 'Curto', 'Alto'],
    correctAnswer: 1,
    explanation: 'Quando o som dura pouco, dizemos que ele é curto. "Longo" é o oposto, e "alto" se refere à intensidade, não à duração.',
    level: 'Fácil'
  },
  {
    id: 140,
    category: 'Música',
    question: 'Qual propriedade mostra se o som é forte ou fraco?',
    options: ['Intensidade', 'Altura', 'Timbre'],
    correctAnswer: 0,
    explanation: 'A intensidade indica se o som é forte (alto) ou fraco (baixo). Altura → grave ou agudo. Timbre → "cor" do som (o que diferencia um violino de um piano, por exemplo).',
    level: 'Fácil'
  },
  {
    id: 141,
    category: 'Música',
    question: 'Um som fraco é:',
    options: ['Alto', 'Baixinho', 'Longo'],
    correctAnswer: 1,
    explanation: 'Som fraco se refere à intensidade baixa — é um som suave, baixinho. "Alto" é forte, e "longo" é duração.',
    level: 'Fácil'
  },
  {
    id: 142,
    category: 'Música',
    question: 'O que é uma pausa na música?',
    options: ['Um grito', 'Um silêncio', 'Uma corrida'],
    correctAnswer: 1,
    explanation: 'A pausa indica que não se deve emitir som durante certo período de tempo. Ela marca silêncio na música, mantendo a duração da nota correspondente.',
    level: 'Fácil'
  },
  {
    id: 143,
    category: 'Música',
    question: 'Quantas linhas tem a pauta musical?',
    options: ['3', '5', '7'],
    correctAnswer: 1,
    explanation: 'A pauta musical tem 5 linhas horizontais, onde são colocadas as notas musicais e símbolos para indicar a altura e a duração do som. As linhas e os espaços representam diferentes notas.',
    level: 'Fácil'
  },
  {
    id: 144,
    category: 'Música',
    question: 'Qual desses é um instrumento de cordas?',
    options: ['Trompete', 'Violão', 'Tambor'],
    correctAnswer: 1,
    explanation: 'O violão produz som por meio de cordas vibrantes. Trompete → é de sopro. Tambor → é de percussão.',
    level: 'Fácil'
  },
  {
    id: 145,
    category: 'Música',
    question: 'O que é timbre?',
    options: ['A força do som', 'A origem do som', 'A velocidade da música'],
    correctAnswer: 1,
    explanation: 'O timbre é a característica que diferencia os sons, permitindo identificar qual instrumento ou voz está produzindo o som, mesmo que toquem a mesma nota. Força do som → intensidade. Velocidade da música → andamento.',
    level: 'Fácil'
  },
  {
    id: 146,
    category: 'Música',
    question: 'Qual é a unidade de tempo em 6/8?',
    options: ['Colcheia', 'Semínima pontuada', 'Mínima'],
    correctAnswer: 1,
    explanation: 'No compasso 6/8, há 6 colcheias por compasso, mas a unidade de tempo principal é a semínima pontuada, que agrupa 3 colcheias cada. Isso dá o ritmo composto típico do 6/8.',
    level: 'Médio'
  },
  {
    id: 147,
    category: 'Música',
    question: 'O que é a barra de compasso?',
    options: ['Um traço que separa os compassos', 'Um enfeite musical', 'Um silêncio'],
    correctAnswer: 0,
    explanation: 'A barra de compasso divide a música em medidas iguais, facilitando a leitura e ajudando os músicos a manter o ritmo correto.',
    level: 'Médio'
  },
  {
    id: 148,
    category: 'Música',
    question: 'Onde fica a clave?',
    options: ['No meio do pentagrama', 'No começo do pentagrama', 'No final do pentagrama'],
    correctAnswer: 1,
    explanation: 'A clave indica a altura das notas no pentagrama e sempre fica no início, ajudando o músico a saber quais linhas e espaços representam quais notas.',
    level: 'Fácil'
  },
  {
    id: 149,
    category: 'Música',
    question: 'Qual símbolo indica que a música acabou?',
    options: ['Ponto final', 'Barra dupla (uma fina e outra grossa)', 'Vírgula'],
    correctAnswer: 1,
    explanation: 'A barra dupla, sendo uma linha fina e outra grossa, indica o fim da peça musical.',
    level: 'Fácil'
  },
  {
    id: 150,
    category: 'Música',
    question: 'O que usamos para marcar o tempo da música?',
    options: ['Relógio', 'Compasso', 'Lápis'],
    correctAnswer: 1,
    explanation: 'O compasso organiza a música em tempos iguais, ajudando músicos a tocar no ritmo certo.',
    level: 'Médio'
  },
  {
    id: 151,
    category: 'Música',
    question: 'Em 3/4, o compasso é:',
    options: ['Binário', 'Ternário', 'Quaternário'],
    correctAnswer: 1,
    explanation: 'No compasso 3/4 existem 3 tempos por compasso; cada tempo corresponde a uma semínima. É chamado de compasso ternário simples, típico de valsas.',
    level: 'Médio'
  },
  {
    id: 152,
    category: 'Música',
    question: 'Em 2/4, o compasso tem:',
    options: ['2 tempos e a semínima vale 1 tempo', '2 tempos e a mínima vale 1 tempo', '2 tempos e a colcheia vale 1 tempo'],
    correctAnswer: 0,
    explanation: 'No compasso 2/4 existem 2 tempos por compasso; cada tempo corresponde a uma semínima. É um exemplo clássico de compasso simples binário.',
    level: 'Médio'
  },
  {
    id: 153,
    category: 'Música',
    question: 'O compasso 6/8 é classificado como:',
    options: ['Simples binário', 'Composto binário', 'Simples ternário'],
    correctAnswer: 1,
    explanation: 'O 6/8 é composto binário porque possui 2 tempos principais; cada tempo é dividido em 3 partes (ternário). Isso é típico de compassos compostos.',
    level: 'Médio'
  },
  {
    id: 154,
    category: 'Música',
    question: 'Em 9/8, cada compasso tem:',
    options: ['9 tempos e a colcheia vale 1 tempo', '3 tempos com divisão ternária', '9 tempos e a semínima vale 1 tempo'],
    correctAnswer: 1,
    explanation: 'O compasso 9/8 é composto ternário: possui 3 tempos principais, cada um dividido em 3 colcheias. Isso dá 9 colcheias no total por compasso.',
    level: 'Médio'
  },
  {
    id: 155,
    category: 'Música',
    question: 'Em um compasso composto binário, temos:',
    options: ['2 tempos divididos em 3 partes', '2 tempos divididos em 2 partes', '3 tempos divididos em 2 partes'],
    correctAnswer: 0,
    explanation: 'Um compasso composto binário tem 2 tempos principais, e cada tempo é dividido em 3 subtempos. Exemplo: 6/8 → 2 tempos (semínima pontuada) com 3 colcheias cada.',
    level: 'Médio'
  },
  {
    id: 156,
    category: 'Música',
    question: 'Qual é a armadura de clave de Ré maior?',
    options: ['1 sustenido', '2 sustenidos', '2 bemóis'],
    correctAnswer: 1,
    explanation: 'A armadura de clave indica quais notas serão sempre sustenidas ou bemolizadas na música: Ré maior possui F# e C# → 2 sustenidos.',
    level: 'Médio'
  },
  {
    id: 157,
    category: 'Música',
    question: 'Qual é o intervalo entre Dó e Sol?',
    options: ['Terça justa', 'Quinta justa', 'Sexta maior'],
    correctAnswer: 1,
    explanation: 'Contando Dó – Ré – Mi – Fá – Sol, temos 5 notas. Esse intervalo é chamado de quinta justa, muito usado em escalas e acordes.',
    level: 'Difícil'
  },
  {
    id: 158,
    category: 'Música',
    question: 'O que o número de cima da fórmula de compasso indica?',
    options: ['O valor da nota', 'Quantos tempos tem o compasso', 'A velocidade da música'],
    correctAnswer: 1,
    explanation: 'Na fórmula de compasso, o número de cima mostra quantos tempos existem no compasso; o número de baixo indica qual figura vale 1 tempo.',
    level: 'Médio'
  },
  {
    id: 159,
    category: 'Música',
    question: 'O que o número de baixo da fórmula de compasso indica?',
    options: ['Quantos compassos tem a música', 'Qual figura vale 1 tempo', 'O tom da música'],
    correctAnswer: 1,
    explanation: 'Na fórmula de compasso, o número de cima indica quantos tempos há em cada compasso; o número de baixo indica qual figura recebe 1 tempo (ex.: 4 = semínima, 8 = colcheia).',
    level: 'Médio'
  },
  {
    id: 160,
    category: 'Música',
    question: 'Em 4/4, cada compasso tem:',
    options: ['4 tempos e a semínima vale 1 tempo', '4 compassos e a mínima vale 1 tempo', '4 tempos e a colcheia vale 1 tempo'],
    correctAnswer: 0,
    explanation: 'O compasso 4/4 é o mais comum na música ocidental: possui 4 tempos por compasso; cada tempo equivale a uma semínima. É chamado de compasso quaternário simples.',
    level: 'Médio'
  },
  {
    id: 161,
    category: 'Música',
    question: 'O que é um acorde?',
    options: ['Uma nota sozinha', 'Duas ou mais notas juntas', 'Um silêncio'],
    correctAnswer: 1,
    explanation: 'Um acorde é a combinação de duas ou mais notas tocadas ao mesmo tempo, criando harmonia na música.',
    level: 'Médio'
  },
  {
    id: 162,
    category: 'Música',
    question: 'Quando duas notas têm o mesmo som, dizemos que são…',
    options: ['Iguais', 'Enarmônicas', 'Diferentes'],
    correctAnswer: 1,
    explanation: 'Notas enarmônicas têm nomes diferentes, mas produzem o mesmo som. Ex.: Dó# e Ré♭ soam iguais, mas têm nomes diferentes.',
    level: 'Médio'
  },
  {
    id: 163,
    category: 'Música',
    question: 'O que é o compasso?',
    options: ['A divisão do tempo da música', 'O nome da canção', 'O instrumento'],
    correctAnswer: 0,
    explanation: 'O compasso organiza a música em medidas iguais, facilitando a leitura e ajudando os músicos a manter o ritmo correto. Ex.: 4/4 → 4 tempos por compasso.',
    level: 'Médio'
  },
  {
    id: 164,
    category: 'Música',
    question: 'Qual é a fórmula de tons e semitons da escala maior?',
    options: ['T – S – T – T – S – T – T', 'T – T – S – T – T – T – S', 'S – T – T – S – T – T – S'],
    correctAnswer: 1,
    explanation: 'A escala maior segue sempre o padrão: T = tom (2 semitons), S = semitom (1 semitom). Exemplo em Dó maior: Dó (T) Ré (T) Mi (S) Fá (T) Sol (T) Lá (T) Si (S) Dó.',
    level: 'Difícil'
  },
  {
    id: 165,
    category: 'Música',
    question: 'O que indica o andamento?',
    options: ['A altura da nota', 'A velocidade da música', 'A letra'],
    correctAnswer: 1,
    explanation: 'O andamento define quão rápido ou devagar a música deve ser executada. Ex.: Lento, Moderato, Allegro.',
    level: 'Médio'
  },
  {
    id: 166,
    category: 'Música',
    question: 'O que é um semitom?',
    options: ['Um tom inteiro', 'Meio tom', 'Dois tons'],
    correctAnswer: 1,
    explanation: 'O semitom é a menor distância entre duas notas consecutivas na música ocidental. Ex.: Dó → Dó# ou Mi → Fá. Um tom inteiro equivale a dois semitons.',
    level: 'Médio'
  },
  {
    id: 167,
    category: 'Música',
    question: 'O que o bemol (♭) faz com a nota?',
    options: ['Sobe meio tom', 'Abaixa meio tom', 'Deixa mais forte'],
    correctAnswer: 1,
    explanation: 'O bemol (♭) abaixa a nota em meio tom, tornando-a mais grave.',
    level: 'Fácil'
  },
  {
    id: 168,
    category: 'Música',
    question: 'O que o sustenido (♯) faz com a nota?',
    options: ['Abaixa o som', 'Sobe meio tom', 'Apaga a nota'],
    correctAnswer: 1,
    explanation: 'O sustenido (♯) eleva a nota em meio tom, tornando-a um pouco mais aguda. O bemol (♭) faz o contrário, abaixa meio tom.',
    level: 'Fácil'
  },
  {
    id: 169,
    category: 'Música',
    question: 'O que é a armadura de clave?',
    options: ['Um enfeite da música', 'Os sustenidos ou bemóis no começo da pauta', 'O nome do hino'],
    correctAnswer: 1,
    explanation: 'A armadura de clave indica quais notas serão sempre sustenidas (#) ou bemolizadas (b) durante toda a música, facilitando a leitura e execução.',
    level: 'Médio'
  },
  {
    id: 170,
    category: 'Música',
    question: 'Qual é o acorde de Dó maior?',
    options: ['Dó – Ré – Mi', 'Dó – Mi – Sol', 'Dó – Fá – Lá'],
    correctAnswer: 1,
    explanation: 'Um acorde maior é formado por: Tônica (nota principal, Dó), Terça maior (Mi), Quinta justa (Sol). Juntas, essas notas criam o acorde de Dó maior.',
    level: 'Médio'
  },
  {
    id: 171,
    category: 'Música',
    question: 'O que é um intervalo?',
    options: ['A distância entre duas notas', 'Uma pausa longa', 'Um acorde'],
    correctAnswer: 0,
    explanation: 'O intervalo mede quantos tons ou semitons separam duas notas. Ex.: Dó → Mi = terça maior; Dó → Sol = quinta justa.',
    level: 'Fácil'
  },
  {
    id: 172,
    category: 'Música',
    question: 'Qual é a escala que começa no Dó e não tem sustenidos nem bemóis?',
    options: ['Escala de Sol', 'Escala de Dó maior', 'Escala de Ré'],
    correctAnswer: 1,
    explanation: 'A escala de Dó maior é pura, sem sustenidos (#) nem bemóis (♭): Notas: Dó – Ré – Mi – Fá – Sol – Lá – Si – Dó.',
    level: 'Fácil'
  },
  {
    id: 173,
    category: 'Música',
    question: 'O que é uma escala?',
    options: ['Um tipo de compasso', 'Uma sequência de notas', 'Um instrumento'],
    correctAnswer: 1,
    explanation: 'Uma escala é uma sequência ordenada de notas dentro de uma tonalidade, usada para criar melodias e harmonias. Ex.: Dó maior → Dó, Ré, Mi, Fá, Sol, Lá, Si, Dó.',
    level: 'Fácil'
  },
  {
    id: 174,
    category: 'Música',
    question: 'Quando o compasso é 4/4, isso quer dizer que:',
    options: ['Cada compasso tem 4 tempos', 'Tem 4 notas diferentes', 'Tem 4 claves'],
    correctAnswer: 0,
    explanation: 'O 4/4 é um compasso quaternário simples: número de cima (4) → indica 4 tempos por compasso; número de baixo (4) → indica que cada tempo vale uma semínima.',
    level: 'Fácil'
  }
];

function sortByCategoryAndLevel(a: Question, b: Question): number {
  if (a.category !== b.category) return a.category === 'Bíblia' ? -1 : 1;
  const levelOrder: Record<Question['level'], number> = { 'Fácil': 0, 'Médio': 1, 'Difícil': 2 };
  return levelOrder[a.level] - levelOrder[b.level];
}

export const questions: Question[] = rawQuestions
  .slice()
  .sort(sortByCategoryAndLevel)
  .map((q, i) => ({ ...q, id: i + 1 }));

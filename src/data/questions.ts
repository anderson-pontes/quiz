export interface Question {
  id: number;
  category: 'Bíblia' | 'Música';
  question: string;
  options: string[];
  correctAnswer: number; // índice (0-3)
  explanation: string;
  level: 'Fácil' | 'Médio' | 'Difícil';
}

export const questions: Question[] = [
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
  // Perguntas Bíblicas - Difícil (IDs 31-40)
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
  {
    id: 36,
    category: 'Bíblia',
    question: 'Quantos anos durou o reinado de Salomão?',
    options: ['30 anos', '40 anos', '50 anos', '60 anos'],
    correctAnswer: 1,
    explanation: 'Salomão reinou por 40 anos em Israel, de aproximadamente 970 a 930 a.C.',
    level: 'Difícil'
  },
  {
    id: 37,
    category: 'Bíblia',
    question: 'Qual profeta foi arrebatado ao céu em um carro de fogo?',
    options: ['Elias', 'Enoque', 'Ezequiel', 'Eliseu'],
    correctAnswer: 0,
    explanation: 'Elias foi arrebatado ao céu em um redemoinho, enquanto Eliseu observava um carro de fogo e cavalos de fogo.',
    level: 'Difícil'
  },
  {
    id: 38,
    category: 'Bíblia',
    question: 'Quantos capítulos tem o livro de Salmos?',
    options: ['148 capítulos', '149 capítulos', '150 capítulos', '151 capítulos'],
    correctAnswer: 2,
    explanation: 'O livro de Salmos contém exatamente 150 capítulos, sendo o maior livro da Bíblia.',
    level: 'Difícil'
  },
  {
    id: 39,
    category: 'Bíblia',
    question: 'Qual foi o nome do lugar onde Jesus foi traído por Judas?',
    options: ['Monte das Oliveiras', 'Getsêmani', 'Gólgota', 'Betânia'],
    correctAnswer: 1,
    explanation: 'Getsêmani foi o jardim no monte das Oliveiras onde Jesus foi traído por Judas e preso.',
    level: 'Difícil'
  },
  {
    id: 40,
    category: 'Bíblia',
    question: 'Quantos anos durou o cativeiro babilônico de Judá?',
    options: ['60 anos', '70 anos', '80 anos', '90 anos'],
    correctAnswer: 1,
    explanation: 'O cativeiro babilônico durou 70 anos, conforme profetizado por Jeremias, terminando quando Ciro permitiu o retorno dos judeus.',
    level: 'Difícil'
  },
  // Perguntas de Teoria Musical - Fácil (IDs 41-50)
  {
    id: 41,
    category: 'Música',
    question: 'Quantas notas musicais existem na escala cromática ocidental?',
    options: ['7 notas', '12 notas', '15 notas', '24 notas'],
    correctAnswer: 1,
    explanation: 'A escala cromática ocidental possui 12 notas: Dó, Dó#, Ré, Ré#, Mi, Fá, Fá#, Sol, Sol#, Lá, Lá#, Si.',
    level: 'Fácil'
  },
  {
    id: 42,
    category: 'Música',
    question: 'Qual é o nome da nota que vem depois de Sol na escala de Dó maior?',
    options: ['Fá', 'Lá', 'Si', 'Dó'],
    correctAnswer: 1,
    explanation: 'Na escala de Dó maior, a sequência é: Dó, Ré, Mi, Fá, Sol, Lá, Si. Portanto, Lá vem depois de Sol.',
    level: 'Fácil'
  },
  {
    id: 43,
    category: 'Música',
    question: 'Quantas linhas tem uma pauta musical padrão?',
    options: ['3 linhas', '4 linhas', '5 linhas', '6 linhas'],
    correctAnswer: 2,
    explanation: 'Uma pauta musical padrão (pentagrama) possui 5 linhas horizontais onde as notas são escritas.',
    level: 'Fácil'
  },
  {
    id: 44,
    category: 'Música',
    question: 'Qual é o símbolo que indica que uma nota deve ser tocada mais forte?',
    options: ['Piano (p)', 'Forte (f)', 'Crescendo', 'Diminuendo'],
    correctAnswer: 1,
    explanation: 'O símbolo "f" (forte) indica que a nota ou passagem deve ser tocada com mais volume/intensidade.',
    level: 'Fácil'
  },
  {
    id: 45,
    category: 'Música',
    question: 'Qual instrumento de cordas é tocado com arco?',
    options: ['Violão', 'Violino', 'Harpa', 'Banjo'],
    correctAnswer: 1,
    explanation: 'O violino é um instrumento de cordas tocado com arco, assim como a viola, o violoncelo e o contrabaixo.',
    level: 'Fácil'
  },
  {
    id: 46,
    category: 'Música',
    question: 'Quantos tempos tem uma semínima em um compasso 4/4?',
    options: ['1 tempo', '2 tempos', '3 tempos', '4 tempos'],
    correctAnswer: 0,
    explanation: 'Em um compasso 4/4, a semínima vale 1 tempo. A mínima vale 2 tempos, a semibreve vale 4 tempos.',
    level: 'Fácil'
  },
  {
    id: 47,
    category: 'Música',
    question: 'Qual é o nome da clave mais usada para instrumentos agudos?',
    options: ['Clave de Fá', 'Clave de Dó', 'Clave de Sol', 'Clave de Ré'],
    correctAnswer: 2,
    explanation: 'A clave de Sol é a mais usada para instrumentos agudos e vozes femininas, indicando que a nota Sol está na segunda linha.',
    level: 'Fácil'
  },
  {
    id: 48,
    category: 'Música',
    question: 'O que significa "piano" (p) em uma partitura?',
    options: ['Tocar forte', 'Tocar suave', 'Tocar rápido', 'Tocar lento'],
    correctAnswer: 1,
    explanation: 'O símbolo "p" (piano) indica que a música deve ser tocada suavemente, com pouco volume.',
    level: 'Fácil'
  },
  {
    id: 49,
    category: 'Música',
    question: 'Quantas oitavas completas existem em um piano padrão de 88 teclas?',
    options: ['5 oitavas', '6 oitavas', '7 oitavas', '8 oitavas'],
    correctAnswer: 2,
    explanation: 'Um piano padrão de 88 teclas possui aproximadamente 7 oitavas completas, desde Lá0 até Dó8.',
    level: 'Fácil'
  },
  {
    id: 50,
    category: 'Música',
    question: 'Qual é o nome do símbolo que aumenta a altura de uma nota em meio tom?',
    options: ['Bemol (♭)', 'Sustenido (♯)', 'Bequadro (♮)', 'Fermata'],
    correctAnswer: 1,
    explanation: 'O sustenido (♯) aumenta a altura de uma nota em meio tom. O bemol (♭) diminui em meio tom.',
    level: 'Fácil'
  },
  // Perguntas de Teoria Musical - Médio (IDs 51-60)
  {
    id: 51,
    category: 'Música',
    question: 'Quantos semitons existem em uma quinta justa?',
    options: ['5 semitons', '6 semitons', '7 semitons', '8 semitons'],
    correctAnswer: 2,
    explanation: 'Uma quinta justa contém 7 semitons. Por exemplo, de Dó a Sol é uma quinta justa.',
    level: 'Médio'
  },
  {
    id: 52,
    category: 'Música',
    question: 'Qual é a fórmula de intervalos da escala maior?',
    options: ['T-T-ST-T-T-T-ST', 'T-ST-T-T-ST-T-T', 'T-T-ST-T-T-ST-T', 'ST-T-T-T-ST-T-T'],
    correctAnswer: 0,
    explanation: 'A escala maior segue o padrão: Tom-Tom-Semiton-Tom-Tom-Tom-Semiton (T-T-ST-T-T-T-ST).',
    level: 'Médio'
  },
  {
    id: 53,
    category: 'Música',
    question: 'Quantas notas tem um acorde de sétima dominante?',
    options: ['3 notas', '4 notas', '5 notas', '6 notas'],
    correctAnswer: 1,
    explanation: 'Um acorde de sétima dominante contém 4 notas: tônica, terça maior, quinta justa e sétima menor.',
    level: 'Médio'
  },
  {
    id: 54,
    category: 'Música',
    question: 'Qual é o relativo menor de Dó maior?',
    options: ['Lá menor', 'Si menor', 'Ré menor', 'Mi menor'],
    correctAnswer: 0,
    explanation: 'Lá menor é o relativo menor de Dó maior, pois compartilham as mesmas notas (sem acidentes).',
    level: 'Médio'
  },
  {
    id: 55,
    category: 'Música',
    question: 'O que é um trítono?',
    options: ['Intervalo de 3 tons', 'Intervalo de 4 tons', 'Intervalo de 6 semitons', 'Intervalo de 8 semitons'],
    correctAnswer: 2,
    explanation: 'Um trítono é um intervalo de 6 semitons (3 tons inteiros), considerado dissonante e instável, como de Fá a Si.',
    level: 'Médio'
  },
  {
    id: 56,
    category: 'Música',
    question: 'Qual é a função do acorde de dominante em uma progressão harmônica?',
    options: ['Estabilidade', 'Tensão que resolve na tônica', 'Modulação', 'Repouso'],
    correctAnswer: 1,
    explanation: 'O acorde de dominante (V) cria tensão harmônica que naturalmente resolve no acorde de tônica (I), proporcionando sensação de conclusão.',
    level: 'Médio'
  },
  {
    id: 57,
    category: 'Música',
    question: 'Quantos acidentes (sustenidos) tem a escala de Sol maior?',
    options: ['0 sustenidos', '1 sustenido', '2 sustenidos', '3 sustenidos'],
    correctAnswer: 1,
    explanation: 'A escala de Sol maior possui 1 sustenido: Fá#. Segue o círculo de quintas: Dó (0), Sol (1#), Ré (2#), etc.',
    level: 'Médio'
  },
  {
    id: 58,
    category: 'Música',
    question: 'O que significa "legato" em uma partitura?',
    options: ['Tocar separado', 'Tocar ligado', 'Tocar rápido', 'Tocar forte'],
    correctAnswer: 1,
    explanation: 'Legato significa tocar as notas de forma ligada, sem interrupção entre elas, criando um som contínuo e fluido.',
    level: 'Médio'
  },
  {
    id: 59,
    category: 'Música',
    question: 'Qual é a diferença entre um acorde maior e um acorde menor?',
    options: ['Apenas a tônica', 'Apenas a terça', 'Apenas a quinta', 'Apenas a sétima'],
    correctAnswer: 1,
    explanation: 'A diferença entre acorde maior e menor está na terça: maior tem terça maior (4 semitons da tônica), menor tem terça menor (3 semitons).',
    level: 'Médio'
  },
  {
    id: 60,
    category: 'Música',
    question: 'O que é uma cadência perfeita?',
    options: ['V-I', 'IV-I', 'I-V', 'V-IV'],
    correctAnswer: 0,
    explanation: 'Uma cadência perfeita é a progressão V-I (dominante para tônica), que proporciona a sensação mais forte de conclusão e repouso.',
    level: 'Médio'
  },
  // Perguntas de Teoria Musical - Difícil (IDs 61-70)
  {
    id: 61,
    category: 'Música',
    question: 'Qual é o modo grego que corresponde à escala maior natural?',
    options: ['Dórico', 'Frígio', 'Lídio', 'Jônio'],
    correctAnswer: 3,
    explanation: 'O modo jônio corresponde à escala maior natural. Os modos gregos são: Jônio (maior), Dórico, Frígio, Lídio, Mixolídio, Eólio (menor natural), Lócrio.',
    level: 'Difícil'
  },
  {
    id: 62,
    category: 'Música',
    question: 'O que é contraponto na música?',
    options: ['Técnica de harmonização', 'Técnica de composição com linhas melódicas independentes', 'Técnica de ritmo', 'Técnica de dinâmica'],
    correctAnswer: 1,
    explanation: 'Contraponto é uma técnica de composição onde duas ou mais linhas melódicas independentes são tocadas simultaneamente, criando uma textura polifônica.',
    level: 'Difícil'
  },
  {
    id: 63,
    category: 'Música',
    question: 'Quantos semitons existem em uma nona maior?',
    options: ['12 semitons', '13 semitons', '14 semitons', '15 semitons'],
    correctAnswer: 2,
    explanation: 'Uma nona maior contém 14 semitons (uma oitava + 1 tom). Por exemplo, de Dó a Ré na oitava seguinte.',
    level: 'Difícil'
  },
  {
    id: 64,
    category: 'Música',
    question: 'O que é uma modulação enarmônica?',
    options: ['Modulação usando acordes com mesmo som mas nomes diferentes', 'Modulação cromática', 'Modulação por dominante secundária', 'Modulação diatônica'],
    correctAnswer: 0,
    explanation: 'Modulação enarmônica ocorre quando se usa a equivalência enarmônica (mesmo som, nomes diferentes) para mudar de tonalidade, como Ré# = Mi♭.',
    level: 'Difícil'
  },
  {
    id: 65,
    category: 'Música',
    question: 'Qual é a função do acorde de sétima diminuta?',
    options: ['Tônica', 'Subdominante', 'Dominante secundária ou cromática', 'Relativo'],
    correctAnswer: 2,
    explanation: 'O acorde de sétima diminuta é frequentemente usado como dominante secundária ou para criar movimento cromático, devido à sua simetria e instabilidade.',
    level: 'Difícil'
  },
  {
    id: 66,
    category: 'Música',
    question: 'O que é uma progressão de quintas no círculo de quintas?',
    options: ['Movimento por intervalos de quinta ascendente', 'Movimento por intervalos de quinta descendente', 'Movimento cromático', 'Movimento por segundas'],
    correctAnswer: 0,
    explanation: 'O círculo de quintas organiza as tonalidades em progressão de quintas ascendentes: Dó, Sol, Ré, Lá, Mi, Si, Fá#, etc., cada uma adicionando um sustenido.',
    level: 'Difícil'
  },
  {
    id: 67,
    category: 'Música',
    question: 'O que é harmonia funcional?',
    options: ['Sistema que classifica acordes por sua função tonal', 'Sistema de escalas', 'Sistema de ritmo', 'Sistema de dinâmica'],
    correctAnswer: 0,
    explanation: 'Harmonia funcional é um sistema que classifica acordes baseado em suas funções na tonalidade: tônica (I), subdominante (IV), dominante (V) e suas variações.',
    level: 'Difícil'
  },
  {
    id: 68,
    category: 'Música',
    question: 'Qual é a diferença entre modo e escala?',
    options: ['Não há diferença', 'Modo é uma escala com padrão específico de intervalos começando em diferentes graus', 'Escala é um modo específico', 'Modo é apenas para música antiga'],
    correctAnswer: 1,
    explanation: 'Um modo é essencialmente uma escala que começa em um grau diferente da tônica. Por exemplo, o modo dórico de Ré usa as notas de Dó maior, mas começa em Ré.',
    level: 'Difícil'
  },
  {
    id: 69,
    category: 'Música',
    question: 'O que é uma cadência deceptiva?',
    options: ['V-VI em vez de V-I', 'I-V', 'IV-I', 'V-IV'],
    correctAnswer: 0,
    explanation: 'Uma cadência deceptiva ocorre quando o acorde de dominante (V) resolve em um acorde diferente da tônica esperada, geralmente no relativo menor (VI), criando surpresa.',
    level: 'Difícil'
  },
  {
    id: 70,
    category: 'Música',
    question: 'O que é análise harmônica?',
    options: ['Análise de ritmo', 'Análise de melodia', 'Identificação e classificação de acordes e suas relações em uma peça musical', 'Análise de timbre'],
    correctAnswer: 2,
    explanation: 'Análise harmônica é o processo de identificar acordes, suas funções tonais, progressões e relações estruturais em uma composição musical.',
    level: 'Difícil'
  },
  // Perguntas Bíblicas - Fácil (IDs 71-107)
  {
    id: 71,
    category: 'Bíblia',
    question: 'Quem construiu a arca?',
    options: ['Moisés', 'Noé', 'Jacó', 'Abraão'],
    correctAnswer: 1,
    explanation: 'Noé construiu a arca conforme as instruções de Deus (Gênesis 6:14).',
    level: 'Fácil'
  },
  {
    id: 72,
    category: 'Bíblia',
    question: 'Qual sinal Deus colocou no céu após o dilúvio?',
    options: ['Uma estrela', 'O arco-íris', 'Uma nuvem especial', 'Um relâmpago'],
    correctAnswer: 1,
    explanation: 'Deus colocou o arco-íris nas nuvens como sinal da aliança após o dilúvio (Gênesis 9:13).',
    level: 'Fácil'
  },
  {
    id: 73,
    category: 'Bíblia',
    question: 'O que o povo quis construir em Babel?',
    options: ['Um castelo', 'Uma cidade e uma torre', 'Um templo', 'Um grande palácio'],
    correctAnswer: 1,
    explanation: 'O povo decidiu construir uma cidade e uma torre cuja torre chegasse aos céus (Gênesis 11:4).',
    level: 'Fácil'
  },
  {
    id: 74,
    category: 'Bíblia',
    question: 'O que Deus fez para parar a construção da torre de Babel?',
    options: ['Mandou um terremoto', 'Confundiu a língua do povo', 'Quebrou a torre', 'Mandou fogo do céu'],
    correctAnswer: 1,
    explanation: 'Deus confundiu a linguagem do povo para que não se entendessem, e assim a obra parou (Gênesis 11:7).',
    level: 'Fácil'
  },
  {
    id: 75,
    category: 'Bíblia',
    question: 'Como Esaú nasceu?',
    options: ['Careca', 'Cheio de pelos', 'De chapéu', 'Com asas'],
    correctAnswer: 1,
    explanation: 'Esaú nasceu ruivo e todo coberto de pelos, como um manto de pelos (Gênesis 25:25).',
    level: 'Fácil'
  },
  {
    id: 76,
    category: 'Bíblia',
    question: 'O que Jacó segurava quando nasceu?',
    options: ['Um brinquedo', 'O pé do irmão', 'Um copo', 'Uma corda'],
    correctAnswer: 1,
    explanation: 'Jacó nasceu com a mão segurando o calcanhar de Esaú (Gênesis 25:26).',
    level: 'Fácil'
  },
  {
    id: 77,
    category: 'Bíblia',
    question: 'Qual era o nome do jardim onde Adão e Eva viviam?',
    options: ['Jardim Feliz', 'Jardim do Éden', 'Jardim Azul', 'Jardim da Promessa'],
    correctAnswer: 1,
    explanation: 'Deus colocou Adão no jardim do Éden para o lavrar e o guardar (Gênesis 2:15).',
    level: 'Fácil'
  },
  {
    id: 78,
    category: 'Bíblia',
    question: 'Qual animal falou com Eva?',
    options: ['Cachorro', 'Serpente', 'Cavalo', 'Leão'],
    correctAnswer: 1,
    explanation: 'A serpente enganou Eva, fazendo-a duvidar das palavras de Deus (Gênesis 3:1-6).',
    level: 'Fácil'
  },
  {
    id: 79,
    category: 'Bíblia',
    question: 'Quem eram os gêmeos filhos de Isaque?',
    options: ['José e Benjamim', 'Esaú e Jacó', 'Caim e Abel', 'Davi e Jônatas'],
    correctAnswer: 1,
    explanation: 'Esaú e Jacó eram gêmeos, filhos de Isaque e Rebeca (Gênesis 25:24-26).',
    level: 'Fácil'
  },
  {
    id: 80,
    category: 'Bíblia',
    question: 'O que Deus criou no primeiro dia?',
    options: ['As plantas', 'A luz', 'Os animais', 'Os astros'],
    correctAnswer: 1,
    explanation: 'No primeiro dia Deus disse: \"Haja luz\"; e houve luz (Gênesis 1:3).',
    level: 'Fácil'
  },
  {
    id: 81,
    category: 'Bíblia',
    question: 'O que Deus fez no sétimo dia da criação?',
    options: ['Trabalhou mais', 'Dormiu', 'Descansou', 'Começou tudo de novo'],
    correctAnswer: 2,
    explanation: 'Depois de terminar a criação, Deus descansou no sétimo dia (Gênesis 2:2).',
    level: 'Fácil'
  },
  {
    id: 82,
    category: 'Bíblia',
    question: 'Que tipo de luz Deus colocou no céu para governar o dia?',
    options: ['A lua', 'O sol', 'As estrelas', 'O arco-íris'],
    correctAnswer: 1,
    explanation: 'Deus fez os dois grandes luminares: o maior para governar o dia (o sol) e o menor para governar a noite (a lua) (Gênesis 1:16).',
    level: 'Fácil'
  },
  {
    id: 83,
    category: 'Bíblia',
    question: 'Que material Deus mandou usar na construção da arca de Noé?',
    options: ['Madeira', 'Pedra', 'Ferro', 'Bronze'],
    correctAnswer: 0,
    explanation: 'Deus mandou Noé fazer a arca de madeira de gofer (Gênesis 6:14).',
    level: 'Fácil'
  },
  {
    id: 84,
    category: 'Bíblia',
    question: 'Quanto tempo choveu sem parar durante o dilúvio?',
    options: ['7 dias', '20 dias', '40 dias', '100 dias'],
    correctAnswer: 2,
    explanation: 'Choveu quarenta dias e quarenta noites sobre a terra (Gênesis 7:12).',
    level: 'Fácil'
  },
  {
    id: 85,
    category: 'Bíblia',
    question: 'Que ave Noé soltou primeiro depois do dilúvio?',
    options: ['Um corvo', 'Uma pomba', 'Um pardal', 'Uma águia'],
    correctAnswer: 0,
    explanation: 'Noé soltou primeiro um corvo, que ia e vinha (Gênesis 8:7).',
    level: 'Fácil'
  },
  {
    id: 86,
    category: 'Bíblia',
    question: 'O que aconteceu com a esposa de Ló quando olhou para trás?',
    options: ['Caiu e dormiu', 'Virou uma estátua de sal', 'Fugiu para outra cidade', 'Virou pedra'],
    correctAnswer: 1,
    explanation: 'A mulher de Ló olhou para trás e transformou-se numa estátua de sal (Gênesis 19:26).',
    level: 'Fácil'
  },
  {
    id: 87,
    category: 'Bíblia',
    question: 'Quem lutou com um anjo até ser abençoado?',
    options: ['Jacó', 'Adão', 'Noé', 'Abraão'],
    correctAnswer: 0,
    explanation: 'Jacó lutou com o anjo durante a noite e recebeu a bênção e o novo nome Israel (Gênesis 32:24-28).',
    level: 'Fácil'
  },
  {
    id: 88,
    category: 'Bíblia',
    question: 'Quem ofereceu o fruto proibido a Eva?',
    options: ['Seu esposo', 'Uma serpente', 'Um papagaio', 'Um anjo'],
    correctAnswer: 1,
    explanation: 'A serpente enganou Eva e a levou a comer do fruto proibido (Gênesis 3:1-6).',
    level: 'Fácil'
  },
  {
    id: 89,
    category: 'Bíblia',
    question: 'Quem interpretou os sonhos do faraó no Egito?',
    options: ['Daniel', 'José', 'Arão', 'Moisés'],
    correctAnswer: 1,
    explanation: 'José, pela sabedoria que Deus lhe deu, interpretou os sonhos do faraó (Gênesis 41:15-16).',
    level: 'Fácil'
  },
  {
    id: 90,
    category: 'Bíblia',
    question: 'Quem vendeu o direito de primogenitura por um prato de comida?',
    options: ['Jacó', 'Esaú', 'Ismael', 'Benjamim'],
    correctAnswer: 1,
    explanation: 'Esaú vendeu o seu direito de primogenitura a Jacó por um prato de lentilhas (Gênesis 25:34).',
    level: 'Fácil'
  },
  {
    id: 91,
    category: 'Bíblia',
    question: 'Para qual terra Deus prometeu levar Abraão?',
    options: ['Canaã', 'Egito', 'Síria', 'Babilônia'],
    correctAnswer: 0,
    explanation: 'Deus prometeu dar a Abraão e à sua descendência a terra de Canaã (Gênesis 12:5-7).',
    level: 'Fácil'
  },
  {
    id: 92,
    category: 'Bíblia',
    question: 'Quem era o rei de Sodoma quando Ló foi capturado?',
    options: ['Quedorlaomer', 'Bera', 'Abimeleque', 'Faraó'],
    correctAnswer: 1,
    explanation: 'Bera era o rei de Sodoma na época em que Ló foi levado cativo (Gênesis 14:1-2).',
    level: 'Fácil'
  },
  {
    id: 93,
    category: 'Bíblia',
    question: 'Qual foi o nome do filho de Abraão com Agar?',
    options: ['Isaque', 'Ismael', 'Esaú', 'Ló'],
    correctAnswer: 1,
    explanation: 'Abraão gerou Ismael com Agar, serva de Sara (Gênesis 16:15).',
    level: 'Fácil'
  },
  {
    id: 94,
    category: 'Bíblia',
    question: 'Quem foi levado para o céu sem ver a morte?',
    options: ['Noé', 'Enoque', 'Abraão', 'Elias'],
    correctAnswer: 1,
    explanation: 'Enoque andou com Deus e Deus para si o tomou, sem que ele visse a morte (Gênesis 5:24).',
    level: 'Fácil'
  },
  {
    id: 95,
    category: 'Bíblia',
    question: 'Qual filho de Jacó recebeu uma túnica de várias cores?',
    options: ['Judá', 'José', 'Benjamim', 'Rúben'],
    correctAnswer: 1,
    explanation: 'Jacó amava mais a José e lhe deu uma túnica de várias cores (Gênesis 37:3).',
    level: 'Fácil'
  },
  {
    id: 96,
    category: 'Bíblia',
    question: 'Quem foi levada para o Egito e ficou na casa de Faraó?',
    options: ['Rebeca', 'Sara', 'Raquel', 'Miriã'],
    correctAnswer: 1,
    explanation: 'Sara foi levada para a casa de Faraó quando Abraão desceu ao Egito (Gênesis 12:15).',
    level: 'Fácil'
  },
  {
    id: 97,
    category: 'Bíblia',
    question: 'Onde Jacó lutou com o anjo de Deus?',
    options: ['Betel', 'Peniel', 'Siquém', 'Hebrom'],
    correctAnswer: 1,
    explanation: 'Jacó chamou aquele lugar de Peniel, porque disse que viu Deus face a face (Gênesis 32:30).',
    level: 'Fácil'
  },
  {
    id: 98,
    category: 'Bíblia',
    question: 'Quem teve muitos filhos que se tornaram as 12 tribos de Israel?',
    options: ['Abraão', 'Isaque', 'Jacó', 'José'],
    correctAnswer: 2,
    explanation: 'Os filhos de Jacó formaram as 12 tribos de Israel (Gênesis 35:22-26).',
    level: 'Fácil'
  },
  {
    id: 99,
    category: 'Bíblia',
    question: 'Quem mentiu dizendo que a esposa era sua irmã?',
    options: ['Abraão', 'Noé', 'José', 'Isaque'],
    correctAnswer: 0,
    explanation: 'Por medo, Abraão disse que Sara era sua irmã ao descer ao Egito (Gênesis 12:13).',
    level: 'Fácil'
  },
  {
    id: 100,
    category: 'Bíblia',
    question: 'Quem foi jogado numa cisterna por seus irmãos?',
    options: ['Judá', 'José', 'Benjamim', 'Esaú'],
    correctAnswer: 1,
    explanation: 'Os irmãos de José o jogaram numa cisterna vazia antes de vendê-lo como escravo (Gênesis 37:24).',
    level: 'Fácil'
  },
  {
    id: 101,
    category: 'Bíblia',
    question: 'Quem nasceu primeiro: Esaú ou Jacó?',
    options: ['Jacó', 'Esaú', 'Isaque', 'Abraão'],
    correctAnswer: 1,
    explanation: 'Esaú nasceu primeiro e Jacó nasceu em seguida segurando o seu calcanhar (Gênesis 25:25-26).',
    level: 'Fácil'
  },
  {
    id: 102,
    category: 'Bíblia',
    question: 'Quem foi o primeiro filho de Abraão?',
    options: ['Isaque', 'Ismael', 'Esaú', 'José'],
    correctAnswer: 1,
    explanation: 'Ismael, filho de Abraão com Agar, foi o primeiro filho de Abraão (Gênesis 16:15).',
    level: 'Fácil'
  },
  {
    id: 103,
    category: 'Bíblia',
    question: 'Quem foi buscar uma esposa para Isaque?',
    options: ['O próprio Isaque', 'O servo de Abraão', 'Jacó', 'Ló'],
    correctAnswer: 1,
    explanation: 'Abraão enviou o seu servo para buscar uma esposa para Isaque entre seus parentes (Gênesis 24:2-4).',
    level: 'Fácil'
  },
  {
    id: 104,
    category: 'Bíblia',
    question: 'Quem foi vendido pelos irmãos por vinte moedas de prata?',
    options: ['José', 'Benjamim', 'Judá', 'Simeão'],
    correctAnswer: 0,
    explanation: 'Os irmãos de José o venderam por vinte moedas de prata a mercadores ismaelitas (Gênesis 37:28).',
    level: 'Fácil'
  },
  {
    id: 105,
    category: 'Bíblia',
    question: 'No relato da criação, o que Deus criou no quarto dia?',
    options: ['As aves do céu e os peixes do mar', 'O homem e a mulher', 'A vegetação e as árvores frutíferas', 'O sol, a lua e as estrelas'],
    correctAnswer: 3,
    explanation: 'No quarto dia Deus criou os luminares: sol, lua e estrelas para governar o dia e a noite (Gênesis 1:14-19).',
    level: 'Fácil'
  },
  {
    id: 106,
    category: 'Bíblia',
    question: 'Qual material foi usado para calafetar a arca de Noé por dentro e por fora?',
    options: ['Cimento', 'Barro', 'Betume (piche)', 'Resina de pinheiro'],
    correctAnswer: 2,
    explanation: 'Deus mandou Noé calafetar a arca por dentro e por fora com betume (Gênesis 6:14).',
    level: 'Fácil'
  },
  {
    id: 107,
    category: 'Bíblia',
    question: 'Por que preço Esaú vendeu o seu direito de primogenitura a Jacó?',
    options: ['Um rebanho de ovelhas', 'Um prato de lentilhas e pão', 'Trinta moedas de prata', 'A túnica colorida de Jacó'],
    correctAnswer: 1,
    explanation: 'Esaú vendeu o seu direito de primogenitura a Jacó por um prato de comida (Gênesis 25:34).',
    level: 'Fácil'
  },
  // Perguntas Bíblicas - Médio (IDs 108-120)
  {
    id: 108,
    category: 'Bíblia',
    question: 'Por que Sara expulsou Agar e Ismael de sua casa?',
    options: ['Porque viu Ismael zombando de Isaque', 'Porque Ismael roubou a comida de Isaque', 'Por ordem direta de um anjo a Sara', 'Porque Abraão pediu isso a ela'],
    correctAnswer: 0,
    explanation: 'Sara viu Ismael zombando de Isaque e pediu que Abraão mandasse Agar e o filho embora (Gênesis 21:9-10).',
    level: 'Médio'
  },
  {
    id: 109,
    category: 'Bíblia',
    question: 'O que Deus proveu para ser sacrificado no lugar de Isaque no monte Moriá?',
    options: ['Uma pomba', 'Um carneiro preso num matagal', 'Um novilho', 'Um cordeiro branco'],
    correctAnswer: 1,
    explanation: 'Abraão viu um carneiro preso pelos chifres no mato e o ofereceu em lugar de Isaque (Gênesis 22:13).',
    level: 'Médio'
  },
  {
    id: 110,
    category: 'Bíblia',
    question: 'Quando Abraão e Ló se separaram, para onde Ló escolheu ir?',
    options: ['De volta para a Caldeia', 'Para as montanhas de Hebrom', 'Para a planície do Jordão, perto de Sodoma', 'Para o deserto do Neguebe'],
    correctAnswer: 2,
    explanation: 'Ló escolheu toda a planície do Jordão e armou as suas tendas até Sodoma (Gênesis 13:10-12).',
    level: 'Médio'
  },
  {
    id: 111,
    category: 'Bíblia',
    question: 'Quem era a mãe de José e Benjamim, os filhos preferidos de Jacó?',
    options: ['Raquel', 'Lia', 'Bila', 'Zilpa'],
    correctAnswer: 0,
    explanation: 'Raquel foi a mãe de José e de Benjamim, filhos muito amados por Jacó (Gênesis 30:22-24; 35:18).',
    level: 'Médio'
  },
  {
    id: 112,
    category: 'Bíblia',
    question: 'O que José fez quando seus irmãos foram ao Egito comprar trigo?',
    options: ['Revelou-se logo no primeiro encontro', 'Testou-os, tratando-os como espiões antes de se revelar', 'Fingiu que não os conhecia e mandou-os embora sem nada', 'Mandou-os prender e executar imediatamente'],
    correctAnswer: 1,
    explanation: 'José reconheceu seus irmãos, mas os tratou como estrangeiros e os provou antes de revelar quem era (Gênesis 42:7-20).',
    level: 'Médio'
  },
  {
    id: 113,
    category: 'Bíblia',
    question: 'Quais são os quatro rios que se ramificavam do rio que saía do Éden?',
    options: ['Pison, Giom, Nilo e Sena', 'Jaboque, Arnom, Querite e Eufrates', 'Nilo, Jordão, Tigre e Eufrates', 'Pison, Giom, Tigre (Hidéquel) e Eufrates'],
    correctAnswer: 3,
    explanation: 'Daquele rio que saía do Éden se dividiam Pison, Giom, Hidéquel (Tigre) e Eufrates (Gênesis 2:10-14).',
    level: 'Médio'
  },
  {
    id: 114,
    category: 'Bíblia',
    question: 'Quais eram as dimensões da arca de Noé em côvados?',
    options: ['500 de comprimento, 100 de largura e 50 de altura', '300 de comprimento, 50 de largura e 30 de altura', '100 de comprimento, 50 de largura e 30 de altura', '400 de comprimento, 75 de largura e 45 de altura'],
    correctAnswer: 1,
    explanation: 'Deus ordenou que a arca tivesse 300 côvados de comprimento, 50 de largura e 30 de altura (Gênesis 6:15).',
    level: 'Médio'
  },
  {
    id: 115,
    category: 'Bíblia',
    question: 'Após a morte de Sara, com quem Abraão se casou novamente?',
    options: ['Milca', 'Ada', 'Quetura', 'Basemate'],
    correctAnswer: 2,
    explanation: 'Depois da morte de Sara, Abraão tomou outra mulher, cujo nome era Quetura (Gênesis 25:1).',
    level: 'Médio'
  },
  {
    id: 116,
    category: 'Bíblia',
    question: 'Qual dos filhos de Jacó não deu nome a uma das 12 tribos originais de Israel, sendo substituído por seus dois filhos?',
    options: ['Judá', 'Levi', 'José', 'Benjamim'],
    correctAnswer: 2,
    explanation: 'José não deu nome a uma tribo; em seu lugar ficaram seus filhos Efraim e Manassés (Gênesis 48:5).',
    level: 'Médio'
  },
  {
    id: 117,
    category: 'Bíblia',
    question: 'Na visão da escada de Jacó, o que os anjos de Deus faziam?',
    options: ['Estavam parados vigiando Jacó', 'Subiam e desciam pela escada', 'Desciam apenas para falar com ele', 'Lutavam contra as trevas'],
    correctAnswer: 1,
    explanation: 'Jacó viu uma escada posta na terra e os anjos de Deus subindo e descendo por ela (Gênesis 28:12).',
    level: 'Médio'
  },
  {
    id: 118,
    category: 'Bíblia',
    question: 'Qual era a característica física mencionada sobre Lia, a primeira esposa de Jacó?',
    options: ['Ela era muda', 'Ela foi estéril por toda a vida', 'Ela era coxa de uma perna', 'Ela tinha olhos baços (fracos)'],
    correctAnswer: 3,
    explanation: 'A Bíblia diz que Lia tinha olhos baços, enquanto Raquel era formosa de semblante e formosa à vista (Gênesis 29:17).',
    level: 'Médio'
  },
  {
    id: 119,
    category: 'Bíblia',
    question: 'Qual foi a reação de Sara ao ouvir que teria um filho na velhice?',
    options: ['Ela riu consigo mesma', 'Ela expulsou o mensageiro', 'Ela caiu por terra em adoração', 'Ela chorou de emoção'],
    correctAnswer: 0,
    explanation: 'Sara riu consigo mesma ao ouvir que teria um filho, por já ser velha e de idade avançada (Gênesis 18:12).',
    level: 'Médio'
  },
  {
    id: 120,
    category: 'Bíblia',
    question: 'Qual irmão sugeriu jogar José numa cisterna para livrá-lo da morte?',
    options: ['Rúben', 'Benjamim', 'Levi', 'Judá'],
    correctAnswer: 0,
    explanation: 'Rúben aconselhou seus irmãos a não matarem José, mas a lançá-lo numa cisterna, planejando salvá-lo depois (Gênesis 37:21-22).',
    level: 'Médio'
  }
];

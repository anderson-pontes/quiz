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
  }
];

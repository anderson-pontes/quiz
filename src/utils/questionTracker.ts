import { Question, questions } from '../data/questions';

type Category = 'Bíblia' | 'Música';
type Level = 'Fácil' | 'Médio' | 'Difícil' | 'Mistas';

const STORAGE_KEY = 'quiz_answered_all';

/**
 * Retorna array de IDs de perguntas já respondidas globalmente
 */
export const getAnsweredQuestions = (): number[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as number[];
    }
    return [];
  } catch (error) {
    console.error('Erro ao ler perguntas respondidas do localStorage:', error);
    return [];
  }
};

/**
 * Marca uma pergunta como respondida (rastreamento global)
 */
export const markQuestionAsAnswered = (questionId: number): void => {
  try {
    const answered = getAnsweredQuestions();
    
    if (!answered.includes(questionId)) {
      answered.push(questionId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answered));
    }
  } catch (error) {
    console.error('Erro ao salvar pergunta respondida no localStorage:', error);
  }
};

/**
 * Reseta perguntas respondidas
 * Se category for fornecido, reseta apenas os IDs daquela categoria
 * Se não fornecido, reseta tudo
 */
export const resetAnsweredQuestions = (category?: Category): void => {
  try {
    if (category) {
      // Resetar apenas perguntas da categoria especificada
      const answered = getAnsweredQuestions();
      const categoryQuestionIds = questions
        .filter(q => q.category === category)
        .map(q => q.id);
      
      const updatedAnswered = answered.filter(id => !categoryQuestionIds.includes(id));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedAnswered));
    } else {
      // Resetar tudo
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (error) {
    console.error('Erro ao resetar perguntas respondidas:', error);
  }
};

/**
 * Filtra perguntas por categoria e nível, e remove as já respondidas globalmente
 * 
 * Fluxo:
 * 1. Filtra por categoria primeiro
 * 2. Se nível não for "Mistas", filtra por nível específico
 * 3. Remove perguntas já respondidas (usando array global)
 * 4. Se todas foram respondidas, reseta automaticamente apenas aquela categoria
 *    (não tudo) e retorna todas as perguntas filtradas novamente
 */
export const getAvailableQuestions = (
  allQuestions: Question[],
  category: Category,
  level: Level
): Question[] => {
  // 1. Filtrar por categoria primeiro
  let filtered = allQuestions.filter(q => q.category === category);

  // 2. Se nível não for "Mistas", filtrar por nível específico
  if (level !== 'Mistas') {
    filtered = filtered.filter(q => q.level === level);
  }

  // 3. Obter perguntas já respondidas globalmente
  const answeredIds = getAnsweredQuestions();

  // 4. Filtrar perguntas não respondidas (usando array global)
  let available = filtered.filter(q => !answeredIds.includes(q.id));

  // 5. Reset inteligente: Se todas as perguntas filtradas foram respondidas,
  //    resetar apenas os IDs daquela categoria (preservando outras categorias)
  //    e retornar todas as perguntas filtradas novamente
  if (available.length === 0 && filtered.length > 0) {
    // Verificar se realmente todas as perguntas filtradas foram respondidas
    const allFilteredAnswered = filtered.every(q => answeredIds.includes(q.id));
    
    if (allFilteredAnswered) {
      // Resetar apenas a categoria especificada (não todas as categorias)
      resetAnsweredQuestions(category);
      // Após resetar, todas as perguntas filtradas estão disponíveis novamente
      available = filtered;
    }
  }

  return available;
};

import { Challenge, ChallengeType, challenges } from '../data/challenges';

const CHALLENGE_STORAGE_KEY = 'quiz_challenges_done';

/**
 * Retorna array de IDs de desafios já concluídos
 */
export const getCompletedChallenges = (): number[] => {
  try {
    const stored = localStorage.getItem(CHALLENGE_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as number[];
    }
    return [];
  } catch (error) {
    console.error('Erro ao ler desafios concluídos do localStorage:', error);
    return [];
  }
};

/**
 * Marca um desafio como concluído
 */
export const markChallengeAsCompleted = (id: number): void => {
  try {
    const completed = getCompletedChallenges();

    if (!completed.includes(id)) {
      completed.push(id);
      localStorage.setItem(CHALLENGE_STORAGE_KEY, JSON.stringify(completed));
    }
  } catch (error) {
    console.error('Erro ao salvar desafio concluído no localStorage:', error);
  }
};

/**
 * Reseta desafios concluídos
 * Se type for fornecido, reseta apenas os IDs daquele tipo
 * Se não for fornecido, reseta tudo
 */
export const resetCompletedChallenges = (type?: ChallengeType): void => {
  try {
    if (type) {
      const completed = getCompletedChallenges();
      const typeChallengeIds = challenges
        .filter(challenge => challenge.type === type)
        .map(challenge => challenge.id);

      const updatedCompleted = completed.filter(id => !typeChallengeIds.includes(id));
      localStorage.setItem(CHALLENGE_STORAGE_KEY, JSON.stringify(updatedCompleted));
    } else {
      localStorage.removeItem(CHALLENGE_STORAGE_KEY);
    }
  } catch (error) {
    console.error('Erro ao resetar desafios concluídos:', error);
  }
};

/**
 * Retorna desafios disponíveis para um determinado tipo, sem repetir
 * até que todos daquele tipo tenham sido concluídos.
 */
export const getAvailableChallenges = (
  all: Challenge[],
  type: ChallengeType
): Challenge[] => {
  // 1. Filtrar por tipo
  const filtered = all.filter(challenge => challenge.type === type);

  // 2. Obter desafios já concluídos
  const completedIds = getCompletedChallenges();

  // 3. Filtrar desafios não concluídos
  let available = filtered.filter(challenge => !completedIds.includes(challenge.id));

  // 4. Se nenhum disponível e houver desafios do tipo, verificar se todos foram concluídos
  if (available.length === 0 && filtered.length > 0) {
    const allFilteredCompleted = filtered.every(challenge =>
      completedIds.includes(challenge.id)
    );

    if (allFilteredCompleted) {
      // Resetar apenas os desafios do tipo especificado
      resetCompletedChallenges(type);
      // Após resetar, todos os desafios filtrados estão disponíveis novamente
      available = filtered;
    }
  }

  return available;
};


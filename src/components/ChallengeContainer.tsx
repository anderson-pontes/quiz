import React, { useMemo, useState, useEffect } from 'react';
import { challenges, Challenge, ChallengeType } from '../data/challenges';
import {
  getAvailableChallenges,
  markChallengeAsCompleted
} from '../utils/challengeTracker';
import ProgressBar from './ProgressBar';
import styles from '../styles/ChallengeContainer.module.css';

interface ChallengeContainerProps {
  type: ChallengeType;
  onExit: () => void;
}

const ChallengeContainer: React.FC<ChallengeContainerProps> = ({ type, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const availableChallenges = useMemo(
    () => getAvailableChallenges(challenges, type),
    [type, refreshKey]
  );

  useEffect(() => {
    if (currentIndex >= availableChallenges.length && availableChallenges.length > 0) {
      setCurrentIndex(0);
    }
  }, [availableChallenges.length, currentIndex]);

  const currentChallenge: Challenge | undefined = availableChallenges[currentIndex];
  const totalChallenges = availableChallenges.length;

  const handleExit = () => {
    if (currentChallenge) {
      markChallengeAsCompleted(currentChallenge.id);
    }
    onExit();
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleNext = () => {
    if (!currentChallenge) return;

    // Marcar desafio atual como concluído
    markChallengeAsCompleted(currentChallenge.id);

    if (currentIndex + 1 >= totalChallenges) {
      // Recarregar desafios disponíveis (respeitando lógica de não repetição)
      setRefreshKey(prev => prev + 1);
      setCurrentIndex(0);
      setShowAnswer(false);
    } else {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
    }
  };

  const handleRestartCycle = () => {
    setRefreshKey(prev => prev + 1);
    setCurrentIndex(0);
    setShowAnswer(false);
  };

  const getTitle = () => {
    if (type === 'emoji') return 'Desafios da Bíblia em Emoji';
    if (type === 'mimica') return 'Mímica Bíblica';
    return 'Desafios de Hinos';
  };

  const getSubtitle = () => {
    if (type === 'emoji') {
      return 'Olhe para os emojis e tente adivinhar qual história bíblica eles representam!';
    }
    if (type === 'mimica') {
      return 'Cada equipe representa histórias ou personagens da Bíblia sem falar; os colegas têm que adivinhar.';
    }
    return 'Leia o trecho ou instrução e complete o hino com o restante da letra, ou siga o desafio proposto.';
  };

  if (totalChallenges === 0 || !currentChallenge) {
    return (
      <div className={styles.challengeContainer}>
        <div className={styles.emptyState}>
          <h2 className={styles.emptyTitle}>Nenhum desafio disponível</h2>
          <p className={styles.emptyText}>
            Não há desafios disponíveis deste tipo no momento.
          </p>
          <button className={styles.submitBtn} onClick={handleExit}>
            Voltar para Home
          </button>
        </div>
      </div>
    );
  }

  const isEmoji = type === 'emoji';
  const isMimica = type === 'mimica';

  return (
    <div className={styles.challengeContainer}>
      <header className={styles.header}>
        <span className={styles.typeBadge}>
          {type === 'emoji' ? 'Emoji Bíblia' : type === 'mimica' ? 'Mímica Bíblica' : 'Hinos'}
        </span>
        <button
          className={styles.exitBtn}
          onClick={handleExit}
          title="Sair dos desafios"
        >
          Sair
        </button>
      </header>

      <div className={styles.progressWrapper}>
        <ProgressBar current={currentIndex + 1} total={totalChallenges} />
      </div>

      <main className={styles.content}>
        <h2 className={styles.title}>{getTitle()}</h2>
        <p className={styles.subtitle}>{getSubtitle()}</p>

        {isEmoji ? (
          <div className={styles.promptEmoji}>{currentChallenge.prompt}</div>
        ) : isMimica ? (
          <div className={styles.promptText}>
            <strong>Represente (sem falar):</strong>
            <div style={{ marginTop: 12, fontSize: '1.25rem' }}>{currentChallenge.prompt}</div>
          </div>
        ) : (
          <div className={styles.promptText}>{currentChallenge.prompt}</div>
        )}

        {showAnswer && (
          <div className={styles.answerBox}>
            <strong>Resposta / Dica:</strong>
            <div style={{ marginTop: 8, whiteSpace: 'pre-line' }}>
              {currentChallenge.answer}
            </div>
            {currentChallenge.reference && (
              <div className={styles.answerReference}>
                <strong>Referência:</strong> {currentChallenge.reference}
              </div>
            )}
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <div className={styles.buttonsRow}>
          <button
            className={styles.secondaryBtn}
            onClick={handleShowAnswer}
            disabled={showAnswer}
          >
            {showAnswer ? 'Resposta exibida' : 'Mostrar resposta'}
          </button>
          <button className={styles.submitBtn} onClick={handleNext}>
            Próximo desafio
          </button>
        </div>
      </footer>

      {totalChallenges === 1 && (
        <div className={styles.emptyState}>
          <button className={styles.secondaryBtn} onClick={handleRestartCycle}>
            Recomeçar desafios
          </button>
        </div>
      )}
    </div>
  );
};

export default ChallengeContainer;


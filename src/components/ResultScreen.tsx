import React from 'react';
import styles from '../styles/ResultScreen.module.css';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onBackToHome: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({
  score,
  totalQuestions,
  onRestart,
  onBackToHome
}) => {
  // Score é em pontos (10 por resposta correta), então dividimos por 10 para obter número de acertos
  const correctAnswers = score / 10;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  const getMessage = () => {
    if (percentage === 100) return 'Perfeito! Você acertou todas!';
    if (percentage >= 80) return 'Excelente! Você foi muito bem!';
    if (percentage >= 60) return 'Bom trabalho! Continue estudando!';
    if (percentage >= 40) return 'Não foi dessa vez, mas continue tentando!';
    return 'Continue estudando! Você vai melhorar!';
  };

  return (
    <div className={styles.resultContainer}>
      <h1 className={styles.resultTitle}>Quiz Finalizado!</h1>
      <div className={styles.resultScore}>
        {correctAnswers} / {totalQuestions}
      </div>
      <div className={styles.resultSubtitle}>
        {percentage}% de acertos • {getMessage()}
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.restartBtn} onClick={onRestart}>
          Reiniciar Quiz
        </button>
        <button className={styles.homeBtn} onClick={onBackToHome}>
          Voltar para Home
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;

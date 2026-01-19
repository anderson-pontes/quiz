import React, { useState, useMemo, useEffect } from 'react';
import { questions, Question } from '../data/questions';
import { getAvailableQuestions, markQuestionAsAnswered } from '../utils/questionTracker';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import OptionButton from './OptionButton';
import ResultScreen from './ResultScreen';
import styles from '../styles/QuizContainer.module.css';

type Category = 'Bíblia' | 'Música';
type Level = 'Fácil' | 'Médio' | 'Difícil' | 'Mistas';

interface QuizContainerProps {
  category: Category;
  level: Level;
  onExit: () => void;
}

const QuizContainer: React.FC<QuizContainerProps> = ({ category, level, onExit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // Filtrar perguntas disponíveis baseado na categoria, nível e perguntas já respondidas
  // refreshKey é usado para forçar recálculo quando necessário
  const availableQuestions = useMemo(() => {
    return getAvailableQuestions(questions, category, level);
  }, [category, level, refreshKey]);

  // Ajustar índice se necessário (caso a lista de perguntas mude)
  useEffect(() => {
    if (currentQuestionIndex >= availableQuestions.length && availableQuestions.length > 0) {
      setCurrentQuestionIndex(0);
    }
  }, [availableQuestions.length, currentQuestionIndex]);

  const currentQuestion: Question | undefined = availableQuestions[currentQuestionIndex];
  const totalQuestions = availableQuestions.length;

  const handleOptionClick = (index: number) => {
    if (showFeedback) return; // Não permite mudar resposta após confirmar
    setSelectedAnswer(index);
  };

  const handleConfirm = () => {
    if (selectedAnswer === null) return;

    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    // Marcar pergunta como respondida (rastreamento global)
    markQuestionAsAnswered(currentQuestion.id);

    if (correct) {
      setScore(prev => prev + 10); // 10 pontos por resposta correta
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 >= totalQuestions) {
      setIsQuizFinished(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setIsCorrect(false);
    }
  };

  const handleRestart = () => {
    // Forçar recálculo das perguntas disponíveis
    setRefreshKey(prev => prev + 1);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(false);
    setIsQuizFinished(false);
  };

  // Recarregar perguntas quando o componente montar ou quando category/level mudarem
  useEffect(() => {
    setRefreshKey(prev => prev + 1);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(false);
    setIsQuizFinished(false);
  }, [category, level]);

  if (isQuizFinished) {
    return (
      <ResultScreen
        score={score}
        totalQuestions={totalQuestions}
        onRestart={handleRestart}
        onBackToHome={onExit}
      />
    );
  }

  // Se não houver perguntas disponíveis ou pergunta atual não existir, mostrar mensagem
  if (totalQuestions === 0 || !currentQuestion) {
    return (
      <div className={styles.quizContainer}>
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <h2 style={{ color: 'var(--text-light)', marginBottom: '16px' }}>
            Nenhuma pergunta disponível
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
            Não há perguntas disponíveis para esta combinação de categoria e nível.
          </p>
          <button className={styles.submitBtn} onClick={onExit}>
            Voltar para Home
          </button>
        </div>
      </div>
    );
  }

  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className={styles.quizContainer}>
      <header className={styles.header}>
        <span className={styles.categoryBadge}>{currentQuestion.category}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className={styles.scoreDisplay}>Pontos: {score}</div>
          <button
            className={styles.exitBtn}
            onClick={onExit}
            title="Sair do quiz"
          >
            Sair
          </button>
        </div>
      </header>

      <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />

      <main>
        <QuestionCard
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
        />

        <div className={styles.optionsGrid}>
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectOption = showFeedback && index === currentQuestion.correctAnswer;
            const isWrongOption = showFeedback && isSelected && !isCorrect;

            return (
              <OptionButton
                key={index}
                option={option}
                letter={letters[index]}
                isSelected={isSelected}
                isCorrect={isCorrectOption}
                isWrong={isWrongOption}
                onClick={() => handleOptionClick(index)}
                disabled={showFeedback}
              />
            );
          })}
        </div>

        {showFeedback && (
          <div className={styles.explanation}>
            <strong>Explicação:</strong> {currentQuestion.explanation}
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <button
          className={styles.submitBtn}
          onClick={showFeedback ? handleNext : handleConfirm}
          disabled={!showFeedback && selectedAnswer === null}
          style={{
            opacity: (!showFeedback && selectedAnswer === null) ? 0.5 : 1,
            cursor: (!showFeedback && selectedAnswer === null) ? 'not-allowed' : 'pointer'
          }}
        >
          {showFeedback 
            ? (currentQuestionIndex + 1 >= totalQuestions ? 'Ver Resultados' : 'Próxima Pergunta')
            : 'Confirmar Resposta'}
        </button>
      </footer>
    </div>
  );
};

export default QuizContainer;

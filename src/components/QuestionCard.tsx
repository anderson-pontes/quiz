import React from 'react';
import styles from '../styles/QuestionCard.module.css';
import { Question } from '../data/questions';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions
}) => {
  return (
    <>
      <div className={styles.questionMeta}>
        Pergunta {questionNumber} de {totalQuestions} • Nível {question.level}
      </div>
      <h2 className={styles.questionText}>
        {question.question}
      </h2>
    </>
  );
};

export default QuestionCard;

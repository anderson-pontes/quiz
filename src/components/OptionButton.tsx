import React from 'react';
import styles from '../styles/OptionButton.module.css';

interface OptionButtonProps {
  option: string;
  letter: string;
  isSelected: boolean;
  isCorrect?: boolean;
  isWrong?: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const OptionButton: React.FC<OptionButtonProps> = ({
  option,
  letter,
  isSelected,
  isCorrect,
  isWrong,
  onClick,
  disabled = false
}) => {
  const getButtonClass = () => {
    let className = styles.optionBtn;
    
    if (disabled && !isSelected && !isCorrect && !isWrong) {
      // Não adiciona classes especiais se estiver desabilitado e não tiver feedback
    } else if (isCorrect) {
      className += ` ${styles.correct}`;
    } else if (isWrong) {
      className += ` ${styles.wrong}`;
    } else if (isSelected) {
      className += ` ${styles.selected}`;
    }
    
    return className;
  };

  return (
    <button
      className={getButtonClass()}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.optionLetter}>{letter}.</span>
      {option}
    </button>
  );
};

export default OptionButton;

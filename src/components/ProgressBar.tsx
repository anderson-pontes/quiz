import React from 'react';
import styles from '../styles/ProgressBar.module.css';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className={styles.progressTrack}>
      <div 
        className={styles.progressFill} 
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;

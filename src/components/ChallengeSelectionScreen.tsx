import React from 'react';
import styles from '../styles/HomeScreen.module.css';
import {
  BiblicalCross,
  MusicalClef,
  StarOfDavid,
  Dove,
  Harp,
  MusicSheet,
  Rainbow,
  MusicalNote
} from './Illustrations';

interface ChallengeSelectionScreenProps {
  onStartChallenge: (type: 'emoji' | 'hino') => void;
  onBackToHome: () => void;
}

const ChallengeSelectionScreen: React.FC<ChallengeSelectionScreenProps> = ({
  onStartChallenge,
  onBackToHome
}) => {
  return (
    <div className={styles.homeContainer}>
      {/* Elementos decorativos de fundo */}
      <div className={styles.backgroundDecorations}>
        <StarOfDavid
          color="#F59E0B"
          size={40}
          className={styles.bgDecoration1}
        />
        <Dove
          color="#06B6D4"
          size={35}
          className={styles.bgDecoration2}
        />
        <Harp
          color="#F59E0B"
          size={30}
          className={styles.bgDecoration3}
        />
        <MusicSheet
          color="#06B6D4"
          size={32}
          className={styles.bgDecoration4}
        />
        <Rainbow
          color="#06B6D4"
          size={28}
          className={styles.bgDecoration5}
        />
        <MusicalNote
          color="#F59E0B"
          size={25}
          className={styles.bgDecoration6}
        />
        <BiblicalCross
          color="#06B6D4"
          size={30}
          className={styles.bgDecoration7}
        />
        <MusicalClef
          color="#F59E0B"
          size={35}
          className={styles.bgDecoration8}
        />
      </div>

      <div className={styles.header}>
        <div className={styles.headerDecorations}>
          <BiblicalCross
            color="#F59E0B"
            size={32}
            className={styles.headerIconLeft}
            animated={true}
          />
          <MusicalClef
            color="#06B6D4"
            size={32}
            className={styles.headerIconRight}
            animated={true}
          />
        </div>
        <h1 className={styles.title}>2º Encontro Musical e Bíblico CCB</h1>
        <p className={styles.subtitle}>
          Organização: Centro Novo e Santa Luzia do Paruá
        </p>
      </div>

      <div className={styles.selectionSection}>
        <h2 className={styles.sectionTitle}>Selecione o tipo de desafio</h2>
        <div className={styles.optionsGrid}>
          <button
            className={styles.selectionBtn}
            onClick={() => onStartChallenge('emoji')}
          >
            <span className={styles.buttonContent}>
              <span
                role="img"
                aria-label="Desafios da Bíblia em Emoji"
                className={styles.categoryIcon}
              >
                😄📖
              </span>
              <span>Desafios da Bíblia em Emoji</span>
            </span>
          </button>
          <button
            className={styles.selectionBtn}
            onClick={() => onStartChallenge('hino')}
          >
            <span className={styles.buttonContent}>
              <span
                role="img"
                aria-label="Desafios de Hinos"
                className={styles.categoryIcon}
              >
                🎵🎤
              </span>
              <span>Desafios de Hinos</span>
            </span>
          </button>
        </div>
      </div>

      <div className={styles.actionsContainer}>
        <button
          className={styles.backBtn}
          onClick={onBackToHome}
        >
          Voltar para Home
        </button>
      </div>
    </div>
  );
};

export default ChallengeSelectionScreen;


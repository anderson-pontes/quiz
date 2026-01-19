import React from 'react';
import styles from '../styles/WelcomeScreen.module.css';
import {
  BiblicalCharacter,
  MusicalCharacter,
  AngelCharacter,
  ProphetCharacter,
  HarpPlayerCharacter
} from './PixelCharacters';

interface WelcomeScreenProps {
  onStartSelection: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartSelection }) => {
  return (
    <div className={styles.welcomeContainer}>
      {/* Personagens decorativos de fundo */}
      <div className={styles.backgroundCharacters}>
        <div className={styles.charTopLeft}>
          <BiblicalCharacter size={80} className={styles.pixelChar} />
        </div>
        <div className={styles.charTopRight}>
          <MusicalCharacter size={80} className={styles.pixelChar} />
        </div>
        <div className={styles.charBottomLeft}>
          <ProphetCharacter size={70} className={styles.pixelChar} />
        </div>
        <div className={styles.charBottomRight}>
          <HarpPlayerCharacter size={70} className={styles.pixelChar} />
        </div>
        <div className={styles.charCenterTop}>
          <AngelCharacter size={60} className={styles.pixelChar} />
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>2º Encontro</h1>
          <h2 className={styles.subtitle}>Musical e Bíblico</h2>
          <p className={styles.organization}>
            Organização Centro Novo e Santa Luzia do Paruá
          </p>
        </div>

        <div className={styles.centralCharacter}>
          <div className={styles.charWrapper}>
            <BiblicalCharacter size={150} className={styles.mainChar} />
            <MusicalCharacter size={150} className={styles.mainChar} />
          </div>
        </div>

        <div className={styles.actionSection}>
          <button
            className={styles.startButton}
            onClick={onStartSelection}
          >
            <span className={styles.buttonText}>INICIAR QUIZ</span>
            <span className={styles.buttonGlow}></span>
          </button>
          <p className={styles.hint}>
            Teste seus conhecimentos sobre Bíblia e Música!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;

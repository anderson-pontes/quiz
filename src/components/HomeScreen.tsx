import React, { useState } from 'react';
import styles from '../styles/HomeScreen.module.css';
import { BiblicalCross, MusicalClef, BiblicalBook, MusicalNote, StarOfDavid, Dove, Harp, MusicSheet, Rainbow } from './Illustrations';

export type Category = 'Bíblia' | 'Música';
export type Level = 'Fácil' | 'Médio' | 'Difícil' | 'Mistas';

interface HomeScreenProps {
  onStartQuiz: (category: Category, level: Level) => void;
  onBackToWelcome: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onStartQuiz, onBackToWelcome }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);

  const categories: Category[] = ['Bíblia', 'Música'];
  const levels: Level[] = ['Fácil', 'Médio', 'Difícil', 'Mistas'];

  const handleStartQuiz = () => {
    if (selectedCategory && selectedLevel) {
      onStartQuiz(selectedCategory, selectedLevel);
    }
  };

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
        <h1 className={styles.title}>2º Encontro Musical e Bíblico</h1>
        <p className={styles.subtitle}>Organização Centro Novo e Santa Luzia do Paruá</p>
      </div>

      <div className={styles.selectionSection}>
        <h2 className={styles.sectionTitle}>Selecione a Categoria</h2>
        <div className={styles.optionsGrid}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.selectionBtn} ${selectedCategory === category ? styles.selected : ''} ${category === 'Música' ? styles.musicCategory : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              <span className={styles.buttonContent}>
                {category === 'Bíblia' ? (
                  <BiblicalBook 
                    color={selectedCategory === category ? '#F59E0B' : '#F1F5F9'} 
                    size={20} 
                    className={styles.categoryIcon}
                  />
                ) : (
                  <MusicalNote 
                    color={selectedCategory === category ? '#06B6D4' : '#F1F5F9'} 
                    size={20} 
                    className={styles.categoryIcon}
                  />
                )}
                <span>{category}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.selectionSection}>
        <h2 className={styles.sectionTitle}>Selecione o Nível</h2>
        <div className={styles.optionsGrid}>
          {levels.map((level) => (
            <button
              key={level}
              className={`${styles.selectionBtn} ${selectedLevel === level ? styles.selected : ''}`}
              onClick={() => setSelectedLevel(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.actionsContainer}>
        <button
          className={styles.backBtn}
          onClick={onBackToWelcome}
        >
          Voltar para Home
        </button>
        <button
          className={styles.startBtn}
          onClick={handleStartQuiz}
          disabled={!selectedCategory || !selectedLevel}
        >
          Iniciar Quiz
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;

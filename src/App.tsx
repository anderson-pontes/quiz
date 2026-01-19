import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import HomeScreen, { Category, Level } from './components/HomeScreen';
import QuizContainer from './components/QuizContainer';
import BackgroundMusic from './components/BackgroundMusic';
import styles from './styles/App.module.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'selection' | 'quiz'>('welcome');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);

  const handleStartSelection = () => {
    setCurrentScreen('selection');
  };

  const handleStartQuiz = (category: Category, level: Level) => {
    setSelectedCategory(category);
    setSelectedLevel(level);
    setCurrentScreen('quiz');
  };

  const handleExitQuiz = () => {
    setCurrentScreen('welcome');
  };

  const handleBackToWelcome = () => {
    setCurrentScreen('welcome');
  };

  return (
    <div className={styles.app}>
      <BackgroundMusic autoPlay={true} volume={0.3} />
      {currentScreen === 'welcome' ? (
        <WelcomeScreen onStartSelection={handleStartSelection} />
      ) : currentScreen === 'selection' ? (
        <HomeScreen onStartQuiz={handleStartQuiz} onBackToWelcome={handleBackToWelcome} />
      ) : (
        selectedCategory &&
        selectedLevel && (
          <QuizContainer
            category={selectedCategory}
            level={selectedLevel}
            onExit={handleExitQuiz}
          />
        )
      )}
      <footer className={styles.footer}>
        Desenvolvido por Anderson P. S. Pontes
      </footer>
    </div>
  );
}

export default App;

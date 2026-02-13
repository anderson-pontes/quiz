import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import HomeScreen, { Category, Level } from './components/HomeScreen';
import QuizContainer from './components/QuizContainer';
import ChallengeContainer from './components/ChallengeContainer';
import ChallengeSelectionScreen from './components/ChallengeSelectionScreen';
import BackgroundMusic from './components/BackgroundMusic';
import styles from './styles/App.module.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState<
    'welcome' | 'selection' | 'quiz' | 'challenge' | 'challengeSelection'
  >('welcome');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [challengeType, setChallengeType] = useState<'emoji' | 'hino' | 'mimica' | null>(null);

  const handleStartSelection = () => {
    setCurrentScreen('selection');
  };

  const handleStartQuiz = (category: Category, level: Level) => {
    setSelectedCategory(category);
    setSelectedLevel(level);
    setCurrentScreen('quiz');
  };

  const handleStartChallenge = (type: 'emoji' | 'hino' | 'mimica') => {
    setChallengeType(type);
    setCurrentScreen('challenge');
  };

  const handleOpenChallengeSelection = () => {
    setCurrentScreen('challengeSelection');
  };

  const handleExitQuiz = () => {
    setCurrentScreen('welcome');
  };

  const handleBackToWelcome = () => {
    setCurrentScreen('welcome');
  };

  const handleBackFromChallengeSelection = () => {
    setCurrentScreen('welcome');
  };

  const handleExitChallenge = () => {
    setCurrentScreen('welcome');
    setChallengeType(null);
  };

  return (
    <div className={styles.app}>
      <BackgroundMusic
        autoPlay={true}
        volume={0.3}
        showControls={currentScreen === 'welcome'}
      />
      {currentScreen === 'welcome' ? (
        <WelcomeScreen
          onStartSelection={handleStartSelection}
          onOpenChallengeSelection={handleOpenChallengeSelection}
        />
      ) : currentScreen === 'selection' ? (
        <HomeScreen
          onStartQuiz={handleStartQuiz}
          onBackToWelcome={handleBackToWelcome}
          onOpenChallengeSelection={handleOpenChallengeSelection}
        />
      ) : currentScreen === 'challengeSelection' ? (
        <ChallengeSelectionScreen
          onStartChallenge={handleStartChallenge}
          onBackToHome={handleBackFromChallengeSelection}
        />
      ) : currentScreen === 'quiz' ? (
        selectedCategory &&
        selectedLevel && (
          <QuizContainer
            category={selectedCategory}
            level={selectedLevel}
            onExit={handleExitQuiz}
          />
        )
      ) : currentScreen === 'challenge' && challengeType ? (
        <ChallengeContainer type={challengeType} onExit={handleExitChallenge} />
      ) : null}
      <footer className={styles.footer}>
        Desenvolvido por Anderson P. S. Pontes
      </footer>
    </div>
  );
}

export default App;

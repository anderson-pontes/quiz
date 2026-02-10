import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/BackgroundMusic.module.css';
import musicFile from '../assets/public/Super Mario Bros (NES) Music - Overworld Theme.mp3';

interface BackgroundMusicProps {
  autoPlay?: boolean;
  volume?: number;
  showControls?: boolean;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({
  autoPlay = true,
  volume = 0.3,
  showControls = true
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnabled, setIsEnabled] = useState(() => {
    const saved = localStorage.getItem('backgroundMusicEnabled');
    return saved !== null ? saved === 'true' : true;
  });
  const [currentVolume, setCurrentVolume] = useState(() => {
    const saved = localStorage.getItem('backgroundMusicVolume');
    return saved ? parseFloat(saved) : volume;
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userInteractedRef = useRef<boolean>(false);
  const interactionListenersAddedRef = useRef<boolean>(false);

  // Inicializa o elemento de áudio
  const initAudio = () => {
    if (!audioRef.current) {
      const audio = new Audio(musicFile);
      audio.loop = true;
      audio.volume = currentVolume;
      audio.preload = 'auto';
      
      // Event listeners para sincronizar estado
      audio.addEventListener('play', () => setIsPlaying(true));
      audio.addEventListener('pause', () => setIsPlaying(false));
      audio.addEventListener('ended', () => setIsPlaying(false));
      
      audioRef.current = audio;
    }
  };

  const startMusic = async () => {
    if (!isEnabled || isPlaying || !audioRef.current) return;
    
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Erro ao iniciar música:', error);
      setIsPlaying(false);
    }
  };

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const toggleMusic = async () => {
    // Garante que áudio está inicializado ao clicar
    if (!audioRef.current) {
      initAudio();
    }
    
    if (!userInteractedRef.current) {
      userInteractedRef.current = true;
    }
    
    if (isPlaying) {
      // Pausa sem voltar para o início, para continuar de onde parou
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      await startMusic();
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setCurrentVolume(newVolume);
    localStorage.setItem('backgroundMusicVolume', newVolume.toString());
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleToggleEnabled = async () => {
    // Garante que áudio está inicializado ao clicar
    if (!audioRef.current) {
      initAudio();
    }
    
    if (!userInteractedRef.current) {
      userInteractedRef.current = true;
    }
    
    const newEnabled = !isEnabled;
    setIsEnabled(newEnabled);
    localStorage.setItem('backgroundMusicEnabled', newEnabled.toString());
    
    if (newEnabled) {
      await startMusic();
    } else {
      stopMusic();
    }
  };

  const handleUserInteraction = async () => {
    if (userInteractedRef.current) return;
    
    userInteractedRef.current = true;
    
    // Inicializa áudio na primeira interação
    initAudio();
    
    // Tenta iniciar música se estiver habilitada e com autoplay
    if (autoPlay && isEnabled && !isPlaying && audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Erro ao iniciar música após interação:', error);
      }
    }
  };

  // Adiciona listeners para primeira interação do usuário
  useEffect(() => {
    if (interactionListenersAddedRef.current) return;
    
    const events = ['click', 'touchstart', 'keydown'];
    const handlers: Array<() => void> = [];
    
    events.forEach(eventType => {
      const handler = () => {
        handleUserInteraction();
        // Remove todos os listeners após primeira interação
        handlers.forEach((h, index) => {
          document.removeEventListener(events[index], h);
        });
      };
      handlers.push(handler);
      document.addEventListener(eventType, handler, { once: true, passive: true });
    });
    
    interactionListenersAddedRef.current = true;
    
    return () => {
      handlers.forEach((h, index) => {
        document.removeEventListener(events[index], h);
      });
    };
  }, []);

  // Inicializa áudio quando componente monta
  useEffect(() => {
    initAudio();
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Atualiza volume quando mudar
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = currentVolume;
    }
  }, [currentVolume]);
  
  if (!showControls) {
    // Mantém a música e efeitos, mas sem renderizar os controles na tela
    return null;
  }

  return (
    <div className={styles.musicControls}>
      <button
        className={styles.musicButton}
        onClick={handleToggleEnabled}
        aria-label={isEnabled ? 'Desativar música' : 'Ativar música'}
        title={isEnabled ? 'Desativar música' : 'Ativar música'}
      >
        {isEnabled ? '🔊' : '🔇'}
      </button>
      
      {isEnabled && (
        <>
          <button
            className={styles.musicButton}
            onClick={toggleMusic}
            aria-label={isPlaying ? 'Pausar música' : 'Tocar música'}
            title={isPlaying ? 'Pausar música' : 'Tocar música'}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          
          <div className={styles.volumeControl}>
            <label htmlFor="volume" className={styles.volumeLabel}>
              🔊
            </label>
            <input
              id="volume"
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={currentVolume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className={styles.volumeSlider}
              aria-label="Volume"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BackgroundMusic;

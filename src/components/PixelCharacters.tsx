import React from 'react';

// Props base para todos os personagens
interface PixelCharacterProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

// Personagem Bíblico (Davi/Moisés estilo pixel art)
export const BiblicalCharacter: React.FC<PixelCharacterProps> = ({
  size = 128,
  className = '',
  animated: _animated = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={`${className} pixel-art`}
      style={{ 
        imageRendering: 'pixelated'
      }}
      aria-label="Personagem bíblico"
      role="img"
    >
      {/* Cabeça */}
      <rect x="12" y="4" width="8" height="8" fill="#F4C2A1" />
      {/* Cabelo */}
      <rect x="10" y="4" width="12" height="6" fill="#8B4513" />
      {/* Corpo (túnica) */}
      <rect x="10" y="12" width="12" height="16" fill="#4A90E2" />
      {/* Cinto */}
      <rect x="10" y="20" width="12" height="2" fill="#D4AF37" />
      {/* Braços */}
      <rect x="6" y="14" width="4" height="8" fill="#F4C2A1" />
      <rect x="22" y="14" width="4" height="8" fill="#F4C2A1" />
      {/* Pernas */}
      <rect x="12" y="28" width="4" height="4" fill="#654321" />
      <rect x="16" y="28" width="4" height="4" fill="#654321" />
      {/* Olhos */}
      <rect x="13" y="7" width="2" height="2" fill="#000" />
      <rect x="17" y="7" width="2" height="2" fill="#000" />
      {/* Boca */}
      <rect x="14" y="10" width="4" height="1" fill="#000" />
    </svg>
  );
};

// Personagem Musical (Tocador de harpa/cantor)
export const MusicalCharacter: React.FC<PixelCharacterProps> = ({
  size = 128,
  className = '',
  animated: _animated = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={`${className} pixel-art`}
      style={{ 
        imageRendering: 'pixelated'
      }}
      aria-label="Personagem musical"
      role="img"
    >
      {/* Cabeça */}
      <rect x="12" y="4" width="8" height="8" fill="#F4C2A1" />
      {/* Cabelo */}
      <rect x="10" y="4" width="12" height="6" fill="#FFD700" />
      {/* Corpo (túnica) */}
      <rect x="10" y="12" width="12" height="16" fill="#06B6D4" />
      {/* Cinto */}
      <rect x="10" y="20" width="12" height="2" fill="#F59E0B" />
      {/* Braços */}
      <rect x="6" y="14" width="4" height="8" fill="#F4C2A1" />
      <rect x="22" y="14" width="4" height="8" fill="#F4C2A1" />
      {/* Pernas */}
      <rect x="12" y="28" width="4" height="4" fill="#654321" />
      <rect x="16" y="28" width="4" height="4" fill="#654321" />
      {/* Olhos */}
      <rect x="13" y="7" width="2" height="2" fill="#000" />
      <rect x="17" y="7" width="2" height="2" fill="#000" />
      {/* Boca (cantando) */}
      <rect x="14" y="10" width="4" height="2" fill="#000" />
      {/* Nota musical decorativa */}
      <rect x="24" y="8" width="2" height="2" fill="#F59E0B" />
      <rect x="26" y="6" width="2" height="6" fill="#F59E0B" />
    </svg>
  );
};

// Anjo decorativo
export const AngelCharacter: React.FC<PixelCharacterProps> = ({
  size = 128,
  className = '',
  animated: _animated = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={`${className} pixel-art`}
      style={{ 
        imageRendering: 'pixelated'
      }}
      aria-label="Anjo"
      role="img"
    >
      {/* Cabeça */}
      <rect x="12" y="6" width="8" height="8" fill="#F4C2A1" />
      {/* Halo */}
      <rect x="10" y="4" width="12" height="2" fill="#FFD700" />
      {/* Corpo (túnica branca) */}
      <rect x="10" y="14" width="12" height="14" fill="#FFFFFF" />
      {/* Asas */}
      <rect x="2" y="16" width="8" height="12" fill="#E8E8E8" />
      <rect x="22" y="16" width="8" height="12" fill="#E8E8E8" />
      {/* Detalhes das asas */}
      <rect x="4" y="18" width="4" height="2" fill="#D0D0D0" />
      <rect x="24" y="18" width="4" height="2" fill="#D0D0D0" />
      {/* Braços */}
      <rect x="8" y="16" width="2" height="6" fill="#F4C2A1" />
      <rect x="22" y="16" width="2" height="6" fill="#F4C2A1" />
      {/* Olhos */}
      <rect x="13" y="9" width="2" height="2" fill="#000" />
      <rect x="17" y="9" width="2" height="2" fill="#000" />
      {/* Sorriso */}
      <rect x="14" y="12" width="4" height="1" fill="#000" />
    </svg>
  );
};

// Profeta/Figura bíblica
export const ProphetCharacter: React.FC<PixelCharacterProps> = ({
  size = 128,
  className = '',
  animated: _animated = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={`${className} pixel-art`}
      style={{ 
        imageRendering: 'pixelated'
      }}
      aria-label="Profeta"
      role="img"
    >
      {/* Cabeça */}
      <rect x="12" y="4" width="8" height="8" fill="#F4C2A1" />
      {/* Barba */}
      <rect x="13" y="10" width="6" height="6" fill="#8B4513" />
      {/* Cabelo */}
      <rect x="10" y="4" width="12" height="4" fill="#654321" />
      {/* Corpo (manto) */}
      <rect x="8" y="16" width="16" height="16" fill="#8B4513" />
      {/* Túnica interna */}
      <rect x="12" y="20" width="8" height="12" fill="#4A4A4A" />
      {/* Braços */}
      <rect x="6" y="18" width="4" height="10" fill="#F4C2A1" />
      <rect x="22" y="18" width="4" height="10" fill="#F4C2A1" />
      {/* Pernas */}
      <rect x="14" y="28" width="4" height="4" fill="#654321" />
      {/* Olhos */}
      <rect x="13" y="7" width="2" height="2" fill="#000" />
      <rect x="17" y="7" width="2" height="2" fill="#000" />
      {/* Pergaminho/rolo */}
      <rect x="24" y="20" width="4" height="6" fill="#F5F5DC" />
      <rect x="25" y="21" width="2" height="1" fill="#000" />
    </svg>
  );
};

// Personagem com harpa
export const HarpPlayerCharacter: React.FC<PixelCharacterProps> = ({
  size = 128,
  className = '',
  animated: _animated = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={`${className} pixel-art`}
      style={{ 
        imageRendering: 'pixelated'
      }}
      aria-label="Tocador de harpa"
      role="img"
    >
      {/* Cabeça */}
      <rect x="12" y="4" width="8" height="8" fill="#F4C2A1" />
      {/* Cabelo */}
      <rect x="10" y="4" width="12" height="6" fill="#FFD700" />
      {/* Corpo */}
      <rect x="10" y="12" width="12" height="16" fill="#4A90E2" />
      {/* Braços */}
      <rect x="6" y="14" width="4" height="8" fill="#F4C2A1" />
      <rect x="22" y="14" width="4" height="8" fill="#F4C2A1" />
      {/* Pernas */}
      <rect x="12" y="28" width="4" height="4" fill="#654321" />
      <rect x="16" y="28" width="4" height="4" fill="#654321" />
      {/* Olhos */}
      <rect x="13" y="7" width="2" height="2" fill="#000" />
      <rect x="17" y="7" width="2" height="2" fill="#000" />
      {/* Harpa */}
      <rect x="20" y="8" width="2" height="20" fill="#8B4513" />
      <rect x="24" y="8" width="2" height="20" fill="#8B4513" />
      <rect x="20" y="8" width="6" height="2" fill="#D4AF37" />
      <rect x="20" y="26" width="6" height="2" fill="#D4AF37" />
      {/* Cordas da harpa */}
      <line x1="21" y1="10" x2="21" y2="25" stroke="#F5F5DC" strokeWidth="0.5" />
      <line x1="22.5" y1="10" x2="22.5" y2="25" stroke="#F5F5DC" strokeWidth="0.5" />
      <line x1="24" y1="10" x2="24" y2="25" stroke="#F5F5DC" strokeWidth="0.5" />
      <line x1="25.5" y1="10" x2="25.5" y2="25" stroke="#F5F5DC" strokeWidth="0.5" />
    </svg>
  );
};

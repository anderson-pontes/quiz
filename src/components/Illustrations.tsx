import React from 'react';

// Props base para todos os componentes de ilustração
interface IllustrationProps {
  color?: string;
  size?: number;
  className?: string;
  animated?: boolean;
}

// ========== ELEMENTOS BÍBLICOS ==========

export const BiblicalCross: React.FC<IllustrationProps> = ({
  color = '#F59E0B',
  size = 24,
  className = '',
  animated: _animated = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Cruz bíblica"
      role="img"
    >
      <path
        d="M12 2L12 10M12 14L12 22M6 12L14 12M10 12L18 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
};

export const BiblicalBook: React.FC<IllustrationProps> = ({
  color = '#F59E0B',
  size = 24,
  className = '',
  animated: _animated = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Livro bíblico"
      role="img"
    >
      <path
        d="M4 19.5C4 18.837 4.263 18.201 4.732 17.732C5.201 17.263 5.837 17 6.5 17H20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 2H20V20H6.5C5.837 20 5.201 19.737 4.732 19.268C4.263 18.799 4 18.163 4 17.5V4.5C4 3.837 4.263 3.201 4.732 2.732C5.201 2.263 5.837 2 6.5 2Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="9"
        y1="7"
        x2="15"
        y2="7"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="9"
        y1="10"
        x2="15"
        y2="10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="9"
        y1="13"
        x2="13"
        y2="13"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const StarOfDavid: React.FC<IllustrationProps> = ({
  color = '#F59E0B',
  size = 24,
  className = '',
  animated: _animated = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Estrela de Davi"
      role="img"
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 2L8.91 8.26L2 9.27L7 14.14L5.82 21.02L12 17.77L18.18 21.02L17 14.14L22 9.27L15.09 8.26L12 2Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export const Dove: React.FC<IllustrationProps> = ({
  color = '#06B6D4',
  size = 24,
  className = '',
  animated: _animated = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Pomba do Espírito Santo"
      role="img"
    >
      <path
        d="M12 2C10 4 8 6 6 8C4 10 3 12 3 14C3 16 4 18 6 19C7 20 8 20 9 20C10 20 11 19 12 18C13 19 14 20 15 20C16 20 17 20 18 19C20 18 21 16 21 14C21 12 20 10 18 8C16 6 14 4 12 2Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M9 12C9 12.5 9.5 13 10 13C10.5 13 11 12.5 11 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13 12C13 12.5 13.5 13 14 13C14.5 13 15 12.5 15 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 18L12 22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 20L14 20"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const Rainbow: React.FC<IllustrationProps> = ({
  color = '#06B6D4',
  size = 24,
  className = '',
  animated: _animated = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Arco-íris da aliança"
      role="img"
    >
      <path
        d="M3 18C5 16 7 14 9 12C11 10 13 8 15 6C17 8 19 10 21 12"
        stroke="#EF4444"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M4 17C5.5 15.5 7 14 8.5 12.5C10 11 11.5 9.5 13 8C14.5 9.5 16 11 17.5 12.5C19 14 20.5 15.5 22 17"
        stroke="#F59E0B"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M5 16C6 15 7 14 8 13C9 12 10 11 11 10C12 11 13 12 14 13C15 14 16 15 17 16"
        stroke="#22C55E"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M6 15C6.5 14.5 7 14 7.5 13.5C8 13 8.5 12.5 9 12C9.5 12.5 10 13 10.5 13.5C11 14 11.5 14.5 12 15C12.5 14.5 13 14 13.5 13.5C14 13 14.5 12.5 15 12C15.5 12.5 16 13 16.5 13.5C17 14 17.5 14.5 18 15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

// ========== ELEMENTOS MUSICAIS ==========

export const MusicalClef: React.FC<IllustrationProps> = ({
  color = '#06B6D4',
  size = 24,
  className = '',
  animated: _animated = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Clave de Sol"
      role="img"
    >
      <path
        d="M8 2C8 2 8 4 8 6C8 8 8 10 8 12C8 14 8 16 8 18C8 20 8 22 8 22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M8 6C10 6 12 7 13 9C14 11 14 13 13 15C12 17 10 18 8 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M8 10C9 10 10 10.5 10.5 11.5C11 12.5 11 13.5 10.5 14.5C10 15.5 9 16 8 16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M8 14C8.5 14 9 14.2 9 14.5C9 14.8 8.5 15 8 15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export const MusicalNote: React.FC<IllustrationProps> = ({
  color = '#06B6D4',
  size = 24,
  className = '',
  animated: _animated = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Nota musical"
      role="img"
    >
      <ellipse
        cx="7"
        cy="17"
        rx="3"
        ry="3"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <ellipse
        cx="17"
        cy="15"
        rx="3"
        ry="3"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M10 17L10 4L18 2L18 15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1="10"
        y1="4"
        x2="18"
        y2="2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const Harp: React.FC<IllustrationProps> = ({
  color = '#F59E0B',
  size = 24,
  className = '',
  animated: _animated = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Harpa"
      role="img"
    >
      <path
        d="M4 2L4 22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 2L20 22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 2L20 2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 22L20 22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 4L18 4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 6L18 6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 8L18 8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 10L18 10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 12L18 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 14L18 14"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 16L18 16"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 18L18 18"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 12L20 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
    </svg>
  );
};

export const MusicSheet: React.FC<IllustrationProps> = ({
  color = '#F59E0B',
  size = 24,
  className = '',
  animated: _animated = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Partitura musical"
      role="img"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        stroke={color}
        strokeWidth="2"
        fill="none"
        rx="1"
      />
      <line
        x1="5"
        y1="7"
        x2="19"
        y2="7"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="5"
        y1="10"
        x2="19"
        y2="10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="5"
        y1="13"
        x2="19"
        y2="13"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="5"
        y1="16"
        x2="19"
        y2="16"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="8"
        cy="7"
        r="1.5"
        fill={color}
      />
      <circle
        cx="11"
        cy="10"
        r="1.5"
        fill={color}
      />
      <circle
        cx="14"
        cy="13"
        r="1.5"
        fill={color}
      />
      <circle
        cx="17"
        cy="16"
        r="1.5"
        fill={color}
      />
    </svg>
  );
};

export const Cymbals: React.FC<IllustrationProps> = ({
  color = '#F59E0B',
  size = 24,
  className = '',
  animated: _animated = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Címbalos"
      role="img"
    >
      <circle
        cx="8"
        cy="12"
        r="5"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="8"
        cy="12"
        r="3"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="16"
        cy="12"
        r="5"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="16"
        cy="12"
        r="3"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="8"
        cy="12"
        r="1"
        fill={color}
      />
      <circle
        cx="16"
        cy="12"
        r="1"
        fill={color}
      />
    </svg>
  );
};

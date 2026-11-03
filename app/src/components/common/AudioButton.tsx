import React from 'react';
import { Volume2 } from 'lucide-react';

interface AudioButtonProps {
  text: string;
  tone?: number;
  onSpeak: (text: string, tone?: number) => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost';
  label?: string;
  className?: string;
  title?: string;
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  tone,
  onSpeak,
  size = 'md',
  variant = 'secondary',
  label,
  className = '',
  title = 'Phát âm'
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSpeak(text, tone);
  };

  const sizeClasses = {
    sm: 'p-1.5 text-xs',
    md: 'p-2 text-xs',
    lg: 'px-3.5 py-2 text-sm'
  };

  const iconSizes = {
    sm: 13,
    md: 15,
    lg: 16
  };

  const variantClasses = {
    primary: 'bg-cinnabar-600 hover:bg-cinnabar-700 text-white shadow-xs',
    secondary: 'bg-stone-100 hover:bg-stone-200 text-slate-700 hover:text-slate-900 border border-stone-200/80',
    ghost: 'hover:bg-indigo-50 text-indigo-600 hover:text-indigo-800'
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      title={title}
      className={`rounded-xl font-bold transition flex items-center justify-center gap-1.5 active:scale-95 shrink-0 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <Volume2 size={iconSizes[size]} />
      {label && <span>{label}</span>}
    </button>
  );
};

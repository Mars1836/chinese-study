import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'amber' | 'slate';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'secondary',
  size = 'sm',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5 rounded-md font-bold',
    md: 'text-xs px-2.5 py-1 rounded-xl font-extrabold'
  };

  const variantClasses = {
    primary: 'bg-indigo-50 text-indigo-700 border border-indigo-200/60',
    secondary: 'bg-stone-100 text-slate-700 border border-stone-200/80',
    success: 'bg-emerald-50 text-emerald-800 border border-emerald-200/60',
    warning: 'bg-amber-50 text-amber-800 border border-amber-200/60',
    danger: 'bg-rose-50 text-rose-700 border border-rose-200/60',
    amber: 'bg-amber-400 text-slate-950 font-black',
    slate: 'bg-slate-900 text-white font-bold'
  };

  return (
    <span className={`inline-flex items-center gap-1 uppercase tracking-wider shrink-0 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

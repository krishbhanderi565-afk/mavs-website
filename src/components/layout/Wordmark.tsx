import React from 'react';
import { Link } from 'react-router-dom';

interface WordmarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Wordmark: React.FC<WordmarkProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true
}) => {
  const sizeClasses = {
    sm: 'text-xl tracking-tight',
    md: 'text-2xl tracking-tight',
    lg: 'text-3xl md:text-4xl tracking-tight'
  };

  return (
    <Link
      to="/"
      className={`inline-flex flex-col group transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EC5478] rounded-lg ${className}`}
      aria-label="MAVS — Mithi AI Voice Studio Home"
    >
      <div className="flex items-center gap-1.5">
        <span
          className={`font-black font-['DM_Sans',sans-serif] text-[#2C1030] ${sizeClasses[size]} select-none`}
        >
          M<span className="text-[#FF9B36] group-hover:text-[#EC5478] transition-colors">A</span>
          <span className="text-[#EC5478] group-hover:text-[#FF9B36] transition-colors">V</span>S
        </span>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#EC5478] group-hover:scale-125 transition-transform" />
      </div>
      {showSubtitle && (
        <span className="text-[10px] tracking-wider uppercase font-semibold text-[#806C80] group-hover:text-[#2C1030] transition-colors -mt-0.5">
          Mithi AI Voice Studio
        </span>
      )}
    </Link>
  );
};

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface TutorialLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imgSrc: string;
  title: string;
  caption: string;
}

export const TutorialLightbox: React.FC<TutorialLightboxProps> = ({
  isOpen,
  onClose,
  imgSrc,
  title,
  caption
}) => {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative max-w-5xl w-full bg-[#180A1A] rounded-3xl border border-white/20 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lightbox Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#110513] border-b border-white/10 text-white">
          <div>
            <h3 className="font-bold text-base sm:text-lg text-[#FAEEDE]">
              {title}
            </h3>
            <p className="text-xs text-[#806C80]">{caption}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Lightbox Image Stage */}
        <div className="p-4 flex items-center justify-center overflow-auto bg-[#0E040F]">
          <img
            src={imgSrc}
            alt={title}
            className="max-h-[72vh] w-auto max-w-full rounded-xl object-contain shadow-lg"
          />
        </div>

        {/* Lightbox Footer */}
        <div className="px-6 py-3 bg-[#110513] border-t border-white/10 flex items-center justify-between text-xs text-white/60">
          <span>MAVS Official Tutorial Screenshot</span>
          <span className="font-mono text-[#FF9B36]">Press ESC or click outside to close</span>
        </div>
      </div>
    </div>
  );
};

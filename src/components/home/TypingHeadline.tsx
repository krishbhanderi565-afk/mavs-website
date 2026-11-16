import React, { useState, useEffect } from 'react';

const PHRASES = [
  'Your Words. Your Language. Your Voice.',
  'Generate AI Voiceovers in 11 Indian Languages.',
  'Satvik & Charvi Voices with Lossless WAV Export.',
  '100% Offline Desktop Studio Powered by Mithi v1 Flash.'
];

export const TypingHeadline: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  useEffect(() => {
    if (isReducedMotion) return;

    const currentPhrase = PHRASES[phraseIndex];
    let timer: number;

    if (!isDeleting) {
      // Typing character by character
      if (displayText.length < currentPhrase.length) {
        timer = window.setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 55); // Smooth natural typing pace
      } else {
        // Completed phrase -> hold before backspacing
        timer = window.setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      // Deleting character by character
      if (displayText.length > 0) {
        timer = window.setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 25); // Fast backspace
      } else {
        // Move to next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, isReducedMotion]);

  if (isReducedMotion) {
    return (
      <div className="py-2 text-center" aria-label="MAVS Services and Features">
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#2C1030] tracking-tight">
          Your Words. Your Language. Your Voice.
        </p>
        <p className="text-sm text-[#806C80] mt-1">
          Generate AI voiceovers in 11 Indian languages with Satvik &amp; Charvi voices.
        </p>
      </div>
    );
  }

  return (
    <div
      className="relative flex items-center justify-center min-h-[48px] sm:min-h-[56px] md:min-h-[64px] px-4 w-full"
      aria-label="MAVS Multilingual Features"
    >
      <span className="sr-only">
        {PHRASES.join(' ')}
      </span>

      <div className="text-center">
        <span className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-bold text-[#2C1030] tracking-tight inline-block">
          {displayText}
        </span>
        {/* Blinking cursor */}
        <span
          className="inline-block w-[3px] h-[1.1em] bg-[#EC5478] ml-1.5 rounded-xs animate-cursor align-middle select-none"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

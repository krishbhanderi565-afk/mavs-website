import React from 'react';
import { SUPPORTED_LANGUAGES } from '../../data/languages';
import type { LanguageItem } from '../../data/languages';
import { Sparkles, Volume2 } from 'lucide-react';

export const LanguageMarquee: React.FC = () => {
  // Track 1
  const track1 = [...SUPPORTED_LANGUAGES, ...SUPPORTED_LANGUAGES];
  // Track 2 in reverse
  const track2 = [...SUPPORTED_LANGUAGES].reverse().concat([...SUPPORTED_LANGUAGES].reverse());

  // Colors and font classes for the flowing language typography
  const getLanguageStyle = (langId: string) => {
    switch (langId) {
      case 'bengali':
        return {
          font: 'font-indic-bengali font-bold',
          color: 'text-[#2C1030] hover:text-[#EC5478]',
          size: 'text-2xl sm:text-3xl'
        };
      case 'gujarati':
        return {
          font: 'font-indic-gujarati font-semibold',
          color: 'text-[#FF9B36] hover:text-[#d6701c]',
          size: 'text-2xl sm:text-3xl'
        };
      case 'telugu':
        return {
          font: 'font-indic-telugu font-bold',
          color: 'text-[#2C1030] hover:text-[#EC5478]',
          size: 'text-2xl sm:text-3xl'
        };
      case 'kannada':
        return {
          font: 'font-indic-kannada font-semibold',
          color: 'text-[#2C1030] hover:text-[#FF9B36]',
          size: 'text-xl sm:text-2xl'
        };
      case 'tamil':
        return {
          font: 'font-indic-tamil font-bold',
          color: 'text-[#EC5478] hover:text-[#2C1030]',
          size: 'text-2xl sm:text-3xl'
        };
      case 'hindi':
        return {
          font: 'font-indic-devanagari font-bold',
          color: 'text-[#2C1030] hover:text-[#FF9B36]',
          size: 'text-2xl sm:text-3xl'
        };
      case 'marathi':
        return {
          font: 'font-indic-devanagari font-medium',
          color: 'text-[#EC5478] hover:text-[#2C1030]',
          size: 'text-xl sm:text-2xl'
        };
      case 'punjabi':
        return {
          font: 'font-indic-punjabi font-semibold',
          color: 'text-[#806C80] hover:text-[#2C1030]',
          size: 'text-xl sm:text-2xl'
        };
      case 'malayalam':
        return {
          font: 'font-indic-malayalam font-semibold',
          color: 'text-[#2C1030]/90 hover:text-[#EC5478]',
          size: 'text-xl sm:text-2xl'
        };
      case 'odia':
        return {
          font: 'font-indic-odia font-semibold',
          color: 'text-[#FF9B36] hover:text-[#e07f1d]',
          size: 'text-xl sm:text-2xl'
        };
      default:
        return {
          font: 'font-medium',
          color: 'text-[#EC5478] hover:text-[#2C1030]',
          size: 'text-lg sm:text-xl'
        };
    }
  };

  const renderLanguageItem = (lang: LanguageItem, keyPrefix: string, index: number) => {
    const style = getLanguageStyle(lang.id);
    return (
      <div
        key={`${keyPrefix}-${lang.id}-${index}`}
        className="inline-flex items-center gap-3.5 px-4 py-2 cursor-default select-none group transition-transform duration-200 hover:scale-105"
        role="article"
        aria-label={`${lang.name} - ${lang.nativeName}`}
      >
        <div className="flex items-baseline gap-2">
          <span
            className={`${style.font} ${style.size} ${style.color} tracking-wide transition-colors drop-shadow-2xs`}
          >
            {lang.nativeName}
          </span>
          <span className="text-xs text-[#806C80]/80 font-mono font-medium">
            ({lang.name})
          </span>
        </div>
        {/* Decorative separating ornament */}
        <span className="text-[#FF9B36] opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all text-xs font-serif pl-2">
          ✦
        </span>
      </div>
    );
  };

  return (
    <section className="py-14 bg-[#FAEEDE] border-b border-[#2C1030]/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-[#2C1030]/10 text-xs font-bold text-[#EC5478] mb-2 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#FF9B36]" />
          <span>Multilingual Speech Flow</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2C1030] tracking-tight">
          11 Indian Languages. Boundless Storytelling.
        </h3>
        <p className="text-xs sm:text-sm text-[#806C80] max-w-xl mx-auto mt-2">
          Native script phonetics and text normalization across India&apos;s most spoken tongues.
        </p>
      </div>

      {/* Opposing Tracks Container with Smooth Edge Fades (Pure Typography, No Box Cards) */}
      <div className="relative w-full overflow-hidden py-3 space-y-3">
        {/* Left & Right gradient fades for smooth infinite edge */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-[#FAEEDE] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-[#FAEEDE] to-transparent z-10" />

        {/* Track 1: Moving Left */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-left flex items-center">
            {track1.map((lang, idx) => renderLanguageItem(lang, 't1', idx))}
          </div>
        </div>

        {/* Track 2: Moving Right */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-right flex items-center">
            {track2.map((lang, idx) => renderLanguageItem(lang, 't2', idx))}
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <span className="text-[11px] text-[#806C80] inline-flex items-center gap-1.5 bg-white/40 px-3 py-1 rounded-full border border-[#2C1030]/5">
          <Volume2 className="w-3 h-3 text-[#FF9B36]" />
          Hover over any language to pause movement
        </span>
      </div>
    </section>
  );
};

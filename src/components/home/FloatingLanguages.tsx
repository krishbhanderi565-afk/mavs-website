import React from 'react';

interface LanguageFloatingItem {
  id: string;
  native: string;
  name: string;
  fontClass: string;
  desktopStyle: string;
  colorClass: string;
  fontSizeClass: string;
  animClass: string;
  delay: string;
}

const FLOATING_LANGUAGES: LanguageFloatingItem[] = [
  // 1. Gujarati: Upper-center-left
  {
    id: 'gujarati',
    native: 'ગુજરાતી',
    name: 'Gujarati',
    fontClass: 'font-indic-gujarati font-semibold',
    desktopStyle: 'top-[10%] left-[28%] lg:left-[31%]',
    colorClass: 'text-[#FF9B36] hover:text-[#e07f1d]',
    fontSizeClass: 'text-2xl lg:text-[28px]',
    animClass: 'animate-float-1',
    delay: '0.2s'
  },
  // 2. Bengali: Upper-left
  {
    id: 'bengali',
    native: 'বাংলা',
    name: 'Bengali',
    fontClass: 'font-indic-bengali font-bold',
    desktopStyle: 'top-[22%] left-[8%] lg:left-[11%]',
    colorClass: 'text-[#2C1030] hover:text-[#EC5478]',
    fontSizeClass: 'text-3xl lg:text-[34px]',
    animClass: 'animate-float-2',
    delay: '1.1s'
  },
  // 3. Telugu: Upper-right
  {
    id: 'telugu',
    native: 'తెలుగు',
    name: 'Telugu',
    fontClass: 'font-indic-telugu font-bold',
    desktopStyle: 'top-[16%] right-[8%] lg:right-[11%]',
    colorClass: 'text-[#2C1030] hover:text-[#EC5478]',
    fontSizeClass: 'text-3xl lg:text-[32px]',
    animClass: 'animate-float-3',
    delay: '0.7s'
  },
  // 4. Kannada: Mid-upper-right
  {
    id: 'kannada',
    native: 'ಕನ್ನಡ',
    name: 'Kannada',
    fontClass: 'font-indic-kannada font-semibold',
    desktopStyle: 'top-[34%] right-[10%] lg:right-[13%]',
    colorClass: 'text-[#2C1030] hover:text-[#FF9B36]',
    fontSizeClass: 'text-2xl lg:text-[27px]',
    animClass: 'animate-float-4',
    delay: '1.9s'
  },
  // 5. English: Mid-right
  {
    id: 'english',
    native: 'English',
    name: 'English',
    fontClass: 'font-semibold',
    desktopStyle: 'top-[50%] right-[8%] lg:right-[11%]',
    colorClass: 'text-[#EC5478] hover:text-[#2C1030]',
    fontSizeClass: 'text-base lg:text-[19px]',
    animClass: 'animate-float-1',
    delay: '2.5s'
  },
  // 6. Punjabi: Mid-left
  {
    id: 'punjabi',
    native: 'ਪੰਜਾਬੀ',
    name: 'Punjabi',
    fontClass: 'font-indic-punjabi font-semibold',
    desktopStyle: 'top-[46%] left-[8%] lg:left-[11%]',
    colorClass: 'text-[#806C80] hover:text-[#2C1030]',
    fontSizeClass: 'text-2xl lg:text-[26px]',
    animClass: 'animate-float-3',
    delay: '1.4s'
  },
  // 7. Malayalam: Lower-mid-right
  {
    id: 'malayalam',
    native: 'മലയാളം',
    name: 'Malayalam',
    fontClass: 'font-indic-malayalam font-semibold',
    desktopStyle: 'top-[68%] right-[14%] lg:right-[18%]',
    colorClass: 'text-[#2C1030] hover:text-[#EC5478]',
    fontSizeClass: 'text-2xl lg:text-[26px]',
    animClass: 'animate-float-2',
    delay: '2.1s'
  },
  // 8. Marathi: Lower-left corner
  {
    id: 'marathi',
    native: 'मराठी',
    name: 'Marathi',
    fontClass: 'font-indic-devanagari font-medium',
    desktopStyle: 'bottom-[12%] left-[8%] lg:left-[11%]',
    colorClass: 'text-[#EC5478] hover:text-[#2C1030]',
    fontSizeClass: 'text-2xl lg:text-[25px]',
    animClass: 'animate-float-3',
    delay: '0.9s'
  },
  // 9. Odia: Lower-mid-left (clear to the left of the center buttons)
  {
    id: 'odia',
    native: 'ଓଡ଼ିଆ',
    name: 'Odia',
    fontClass: 'font-indic-odia font-semibold',
    desktopStyle: 'bottom-[10%] left-[26%] lg:left-[28%]',
    colorClass: 'text-[#FF9B36] hover:text-[#e07f1d]',
    fontSizeClass: 'text-2xl lg:text-[28px]',
    animClass: 'animate-float-2',
    delay: '2.8s'
  },
  // 10. Hindi: Lower-right corner
  {
    id: 'hindi',
    native: 'हिन्दी',
    name: 'Hindi',
    fontClass: 'font-indic-devanagari font-bold',
    desktopStyle: 'bottom-[12%] right-[8%] lg:right-[11%]',
    colorClass: 'text-[#2C1030] hover:text-[#FF9B36]',
    fontSizeClass: 'text-3xl lg:text-[30px]',
    animClass: 'animate-float-4',
    delay: '0.5s'
  },
  // 11. Tamil: Lower-mid-right (clear to the right of the center buttons)
  {
    id: 'tamil',
    native: 'தமிழ்',
    name: 'Tamil',
    fontClass: 'font-indic-tamil font-bold',
    desktopStyle: 'bottom-[10%] right-[26%] lg:right-[28%]',
    colorClass: 'text-[#EC5478] hover:text-[#2C1030]',
    fontSizeClass: 'text-3xl lg:text-[30px]',
    animClass: 'animate-float-1',
    delay: '1.7s'
  }
];

export const FloatingLanguages: React.FC = () => {
  return (
    <>
      {/* Desktop / Tablet Floating Elements Layer */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none z-10 overflow-hidden"
        aria-hidden="true"
      >
        {FLOATING_LANGUAGES.map((lang) => (
          <div
            key={lang.id}
            style={{ animationDelay: lang.delay }}
            className={`absolute pointer-events-auto select-none transition-all duration-300 cursor-default hover:scale-110 active:scale-95 ${lang.desktopStyle} ${lang.animClass}`}
          >
            <span
              className={`${lang.fontClass} ${lang.fontSizeClass} ${lang.colorClass} tracking-wide drop-shadow-2xs transition-colors`}
              title={`${lang.name} (${lang.native})`}
            >
              {lang.native}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile Discoverability Strip (< 768px) */}
      <div className="md:hidden w-full overflow-hidden py-3 px-2 mt-4 z-10" aria-label="Supported Languages">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
          {FLOATING_LANGUAGES.map((lang) => (
            <span
              key={`mob-${lang.id}`}
              className={`${lang.fontClass} ${lang.colorClass} text-xs font-semibold tracking-wide bg-white/50 px-2.5 py-0.5 rounded-full border border-[#2C1030]/5`}
            >
              {lang.native}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

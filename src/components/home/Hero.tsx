import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { HeroDecorations } from './HeroDecorations';
import { FloatingLanguages } from './FloatingLanguages';
import { TypingHeadline } from './TypingHeadline';
import { OFFICIAL_MODEL_HUGGINGFACE } from '../../data/platforms';

export const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full h-[calc(100vh-76px)] min-h-[560px] max-h-[760px] flex flex-col items-center justify-center overflow-hidden bg-[#FAEEDE] border-b border-[#2C1030]/10 px-4 sm:px-6 lg:px-8"
      aria-label="MAVS Multilingual Studio Hero"
    >
      {/* Layer 1: Traditional Floral & Sunburst Ornaments */}
      <HeroDecorations />

      {/* Layer 2: 11 Floating Indian Languages (Balanced Perimeter Orbit) */}
      <FloatingLanguages />

      {/* Layer 3: Central Balanced Brand & Actions Stack */}
      <div className="relative z-20 max-w-xl mx-auto text-center flex flex-col items-center justify-center pointer-events-auto py-2">
        {/* Brand Wordmark */}
        <div className="select-none mb-1">
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[104px] font-black tracking-[-0.04em] text-[#2C1030] leading-none font-['DM_Sans',sans-serif]">
            M<span className="text-[#FF9B36]">A</span><span className="text-[#EC5478]">V</span>S
          </h1>
        </div>

        {/* Full Form Subtitle */}
        <div className="mt-1 mb-4">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.28em] text-[#EC5478]">
            Mithi AI Voice Studio
          </p>
        </div>

        {/* Dynamic Typing Headline */}
        <div className="w-full max-w-lg mb-6">
          <TypingHeadline />
        </div>

        {/* Action Buttons: Download for Windows & Explore MAVS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-4">
          <Link
            to="/download"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#2C1030] hover:bg-[#431B48] text-[#FAEEDE] text-sm sm:text-base font-bold px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EC5478]"
          >
            <Download className="w-4 h-4 text-[#FF9B36] group-hover:-translate-y-0.5 transition-transform" />
            <span>Download for Windows</span>
          </Link>

          <Link
            to="/explore"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-[#2C1030] text-sm sm:text-base font-semibold px-6 py-3 rounded-full border border-[#2C1030]/15 shadow-2xs hover:shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EC5478]"
          >
            <span>Explore MAVS</span>
            <ArrowRight className="w-4 h-4 text-[#806C80]" />
          </Link>
        </div>

        {/* Subtle Model Attribution & System Specifications */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-xs text-[#806C80]">
          <p>
            Powered by{' '}
            <a
              href={OFFICIAL_MODEL_HUGGINGFACE}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#2C1030] hover:text-[#EC5478] underline decoration-[#EC5478]/40 underline-offset-2 transition-colors"
            >
              Mithi v1 Flash
            </a>
            , created by <span className="font-semibold text-[#2C1030]">Oomni</span>.
          </p>
          <span className="hidden sm:inline text-[#2C1030]/20">•</span>
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center gap-1 text-emerald-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              100% Offline
            </span>
            <span className="text-[#2C1030]/20">•</span>
            <span className="inline-flex items-center gap-1 text-[#2C1030]">
              <Cpu className="w-3.5 h-3.5 text-[#FF9B36]" />
              Windows 10/11 x64
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

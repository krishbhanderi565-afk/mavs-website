import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { OFFICIAL_MODEL_HUGGINGFACE } from '../../data/platforms';

export const OomniCreditBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#2C1030] via-[#3B1540] to-[#2C1030] text-[#FAEEDE] relative overflow-hidden">
      {/* Decorative floral glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#EC5478]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#FF9B36]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#FF9B36] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Foundational AI Research Acknowledgement</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Powered by Mithi v1 Flash
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#FAEEDE]/85 max-w-3xl mx-auto leading-relaxed">
          MAVS is an independently developed desktop application built to make Mithi voice generation easier to use. The original Mithi model was created by <strong>Oomni</strong>. We sincerely acknowledge their foundational research and contribution to multilingual Indian voice technology.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={OFFICIAL_MODEL_HUGGINGFACE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#EC5478] hover:bg-[#d84366] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-md transition-all active:scale-95"
          >
            <span>Explore the Original Mithi Model</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-6 text-xs text-[#FAEEDE]/60 flex items-center justify-center gap-1.5">
          <span>Model Architecture: 99.1M Parameters</span>
          <span>•</span>
          <span>Apache License 2.0</span>
          <span>•</span>
          <span>Hosted on Hugging Face</span>
        </div>
      </div>
    </section>
  );
};

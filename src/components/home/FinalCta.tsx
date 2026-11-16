import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Sparkles, HelpCircle } from 'lucide-react';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FAEEDE] to-[#F9DDE2]/60 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#2C1030]/10 text-xs font-bold text-[#EC5478] shadow-2xs mb-4">
          <Sparkles className="w-4 h-4 text-[#FF9B36]" />
          <span>Independent Multilingual Voice Studio</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-[#2C1030] tracking-tight">
          Your Next Voiceover Starts Here.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#806C80] max-w-xl mx-auto leading-relaxed">
          Bring your words to life across Indian languages with MAVS. Download the verified Windows installer today or explore the browser Script Enhancer.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/download"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2C1030] hover:bg-[#431B48] text-white text-base font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <Download className="w-5 h-5 text-[#FF9B36]" />
            <span>Explore Downloads (Windows x64)</span>
          </Link>

          <Link
            to="/faq"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-[#2C1030] text-base font-semibold px-6 py-4 rounded-full border border-[#2C1030]/10 transition-colors"
          >
            <HelpCircle className="w-4 h-4 text-[#806C80]" />
            <span>Read FAQ</span>
          </Link>
        </div>

        <p className="mt-6 text-xs text-[#806C80]">
          Windows 10/11 (64-bit) available now • macOS, Android & iOS coming soon
        </p>
      </div>
    </section>
  );
};

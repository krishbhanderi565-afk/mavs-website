import React from 'react';
import { Link } from 'react-router-dom';
import { Download, GitBranch, CheckCircle2, Clock } from 'lucide-react';
import { GITHUB_REPO_URL } from '../../data/platforms';

export const ExploreCta: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#2C1030] to-[#1D0820] text-[#FAEEDE] relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EC5478]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF9B36]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-xs font-bold uppercase tracking-wider text-[#FF9B36] bg-white/10 px-4 py-1.5 rounded-full inline-block mb-6 border border-white/10">
          Get Started Today
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight font-['DM_Sans',sans-serif]">
          Ready to Create Your{' '}
          <span className="text-[#FF9B36]">First AI Voice?</span>
        </h2>

        <p className="mt-5 text-base sm:text-lg text-[#FAEEDE]/80 max-w-2xl mx-auto leading-relaxed">
          Download MAVS for Windows now to experience fast, native 11-language Indian speech synthesis running 100% locally on your computer.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/download"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FF9B36] hover:bg-[#FF8D1E] text-[#2C1030] font-black text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Download className="w-5 h-5 text-[#2C1030] group-hover:-translate-y-0.5 transition-transform" />
            <span>Download MAVS for Windows</span>
          </Link>

          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-7 py-4 rounded-full border border-white/20 shadow-xs hover:shadow-md transition-all duration-200"
          >
            <GitBranch className="w-5 h-5 text-[#EC5478]" />
            <span>View Source Code</span>
          </a>
        </div>

        {/* Platform Status Transparency */}
        <div className="mt-12 pt-8 border-t border-white/10 max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-4 text-xs">
          <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Windows 10/11 x64 (Available Now)
          </span>
          <span className="inline-flex items-center gap-1.5 text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <Clock className="w-3.5 h-3.5 text-amber-400/80" />
            macOS (Coming Soon)
          </span>
          <span className="inline-flex items-center gap-1.5 text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <Clock className="w-3.5 h-3.5 text-amber-400/80" />
            Linux (Coming Soon)
          </span>
        </div>
      </div>
    </section>
  );
};

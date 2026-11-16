import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Compass, ShieldCheck, CheckCircle2, Volume2, Sparkles, Monitor } from 'lucide-react';
import { OFFICIAL_MODEL_HUGGINGFACE } from '../../data/platforms';

export const ExploreHero: React.FC = () => {
  const [activeView, setActiveView] = useState<'generation' | 'overview'>('generation');

  return (
    <section className="relative w-full bg-[#FAEEDE] border-b border-[#2C1030]/10 overflow-hidden pt-12 pb-16 lg:py-20">
      {/* Decorative floral & sunburst background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EC5478]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF9B36]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Eyebrow & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9DDE2] border border-[#EC5478]/30 text-xs font-bold text-[#EC5478] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>MEET MAVS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#2C1030] tracking-tight leading-[1.1] font-['DM_Sans',sans-serif]">
            Making Powerful Indian AI Voices{' '}
            <span className="text-[#EC5478]">Accessible to Everyone.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#806C80] leading-relaxed max-w-2xl mx-auto">
            MAVS is a desktop application designed to make Oomni's Mithi v1 Flash text-to-speech model easier to download, access and use. Create spoken content in Indian languages through a simplified desktop experience, without manually setting up the underlying model.
          </p>

          {/* Quick Specifications Pill Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-[#2C1030]">
            <span className="inline-flex items-center gap-1.5 bg-white/80 border border-[#2C1030]/10 px-3 py-1.5 rounded-full shadow-2xs">
              <Monitor className="w-3.5 h-3.5 text-[#2C1030]" />
              Windows 10/11 x64
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/80 border border-[#2C1030]/10 px-3 py-1.5 rounded-full shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9B36]" />
              11 Supported Languages
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/80 border border-[#2C1030]/10 px-3 py-1.5 rounded-full shadow-2xs">
              <Volume2 className="w-3.5 h-3.5 text-[#EC5478]" />
              Satvik &amp; Charvi Voices
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/80 border border-[#2C1030]/10 px-3 py-1.5 rounded-full shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Free &amp; Open Source
            </span>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/download"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#2C1030] hover:bg-[#431B48] text-[#FAEEDE] text-base font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EC5478]"
            >
              <Download className="w-4 h-4 text-[#FF9B36] group-hover:-translate-y-0.5 transition-transform" />
              <span>Download MAVS</span>
            </Link>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-[#2C1030] text-base font-semibold px-7 py-3.5 rounded-full border border-[#2C1030]/15 shadow-2xs hover:shadow-sm transition-all duration-200"
            >
              <Compass className="w-4 h-4 text-[#806C80]" />
              <span>Explore How It Works</span>
            </a>
          </div>

          {/* Model Attribution Footnote */}
          <p className="mt-4 text-xs text-[#806C80]">
            Powered by{' '}
            <a
              href={OFFICIAL_MODEL_HUGGINGFACE}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#2C1030] hover:text-[#EC5478] underline decoration-[#EC5478]/40 underline-offset-2 transition-colors"
            >
              Mithi v1 Flash
            </a>
            {' — created by '}
            <span className="font-semibold text-[#2C1030]">Oomni</span>.
          </p>
        </div>

        {/* Real Screenshot Showcase Frame */}
        <div className="max-w-5xl mx-auto mt-8">
          {/* Tab switcher */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <button
              type="button"
              onClick={() => setActiveView('generation')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeView === 'generation'
                  ? 'bg-[#2C1030] text-white shadow-xs'
                  : 'bg-white/60 text-[#806C80] hover:text-[#2C1030] border border-[#2C1030]/10'
              }`}
            >
              Active Speech Generation &amp; Audio Player
            </button>
            <button
              type="button"
              onClick={() => setActiveView('overview')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeView === 'overview'
                  ? 'bg-[#2C1030] text-white shadow-xs'
                  : 'bg-white/60 text-[#806C80] hover:text-[#2C1030] border border-[#2C1030]/10'
              }`}
            >
              Studio Desktop Workspace Overview
            </button>
          </div>

          {/* Screenshot Card Container */}
          <div className="rounded-3xl p-3 bg-gradient-to-b from-[#2C1030]/15 to-white/40 border border-[#2C1030]/15 shadow-2xl">
            <div className="rounded-2xl overflow-hidden bg-[#180A1A] border border-white/10">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#110513] border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#EC5478]" />
                  <span className="w-3 h-3 rounded-full bg-[#FF9B36]" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="font-mono text-white/80 ml-2">
                    {activeView === 'generation'
                      ? 'MAVS — Live Voice Generation Studio (Windows 11)'
                      : 'MAVS — Desktop Studio Interface Overview'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Live Application
                  </span>
                </div>
              </div>

              {/* Image Preview */}
              <div className="relative aspect-auto bg-[#0E040F] flex items-center justify-center">
                <img
                  src={
                    activeView === 'generation'
                      ? '/assets/verified_generation_screenshot.png'
                      : '/assets/live_installed_screenshot.png'
                  }
                  alt={
                    activeView === 'generation'
                      ? 'Actual MAVS application running speech generation in Marathi with waveform audio player'
                      : 'Actual MAVS desktop workspace overview running natively on Windows'
                  }
                  className="w-full h-auto object-contain max-h-[600px] select-none"
                  loading="eager"
                />
              </div>

              {/* Caption Banner */}
              <div className="px-4 py-2.5 bg-[#140616] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-white/70 gap-2">
                <span className="font-mono">
                  {activeView === 'generation'
                    ? '📸 Real Application Capture: 11 Languages • Satvik / Charvi • Lossless 24 kHz WAV'
                    : '📸 Real Application Capture: Native Electron & Local PyTorch Runtime'}
                </span>
                <span className="text-[#FF9B36] font-semibold">
                  100% Offline • Zero Cloud Telemetry
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

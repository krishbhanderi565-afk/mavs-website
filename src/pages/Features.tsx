import React from 'react';
import { APPLICATION_FEATURES } from '../data/features';
import { SUPPORTED_LANGUAGES } from '../data/languages';
import { Languages, Users, Cpu, AudioWaveform, Laptop, Sparkles, CheckCircle2, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Features: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Languages,
    Users,
    Cpu,
    AudioWaveform,
    Laptop,
    Sparkles
  };

  return (
    <div className="py-12 md:py-20 bg-[#FAEEDE] min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9DDE2] border border-[#EC5478]/30 text-xs font-bold text-[#EC5478] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Studio Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#2C1030] tracking-tight">
            Features Built for Creators
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#806C80] leading-relaxed">
            Honest, verified desktop features. No fictional promises, cloud lock-in, or artificial limits.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {APPLICATION_FEATURES.map((feature) => {
            const Icon = iconMap[feature.iconName] || Sparkles;
            return (
              <div
                key={feature.id}
                className="bg-white/90 rounded-3xl p-7 border border-[#2C1030]/10 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAEEDE] text-[#EC5478] group-hover:bg-[#EC5478] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    {feature.badge && (
                      <span className="text-[11px] font-bold text-[#2C1030] bg-[#F9DDE2] px-2.5 py-1 rounded-full">
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#2C1030] mb-2">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-[#806C80] leading-relaxed mb-4">
                    {feature.detailedDesc}
                  </p>

                  <div className="pt-3 border-t border-[#2C1030]/5">
                    <ul className="space-y-2 text-xs text-[#2C1030]">
                      {feature.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 11 Languages Interactive Reference Table */}
        <div className="bg-white/90 rounded-3xl p-8 sm:p-10 border border-[#2C1030]/10 shadow-xs mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EC5478]">
              Multilingual Coverage
            </span>
            <h3 className="text-2xl font-bold text-[#2C1030] mt-1">
              All 11 Supported Indic Languages
            </h3>
            <p className="text-xs sm:text-sm text-[#806C80] mt-2">
              Each language is processed through Maya text normalization and localized phoneme mappings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <div
                key={lang.id}
                className="p-4 rounded-2xl bg-[#FAEEDE]/40 border border-[#2C1030]/10 hover:border-[#EC5478]/40 transition-colors"
              >
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-lg font-bold text-[#2C1030] font-['DM_Sans',sans-serif]">
                    {lang.nativeName}
                  </span>
                  <span className="text-xs font-mono text-[#806C80] font-semibold">
                    {lang.name}
                  </span>
                </div>
                <p className="text-xs text-[#806C80] italic truncate mb-2">
                  &quot;{lang.samplePhrase}&quot;
                </p>
                <div className="flex justify-between items-center text-[10px] text-[#806C80]/80 pt-2 border-t border-[#2C1030]/5">
                  <span>{lang.script} Script</span>
                  <span>{lang.speakersEst}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Desktop Screenshot Walkthrough */}
        <div className="rounded-3xl p-8 bg-gradient-to-br from-[#2C1030] to-[#3B1540] text-white shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF9B36] bg-white/10 px-3 py-1 rounded-full">
                Genuine Interface
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Clean, Focused Studio Workspace
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                No cluttered menus, floating ads, or confusing parameters. Paste your text, choose between Satvik or Charvi, and click Generate.
              </p>
              <ul className="space-y-2.5 text-xs text-white/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Real-time character counter and input length guard</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Immediate playback with scrub bar, elapsed timer, and volume slider</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Direct WAV download with automatic timestamped filename</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  to="/download"
                  className="inline-flex items-center gap-2 bg-[#EC5478] hover:bg-[#d84366] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download for Windows (x64)</span>
                </Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <img
                src="/assets/verified_generation_screenshot.png"
                alt="MAVS Studio verified interface"
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

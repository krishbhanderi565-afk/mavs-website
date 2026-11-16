import React, { useState } from 'react';
import { CheckCircle2, Volume2, Download, Layers, ShieldCheck } from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'generation' | 'installed'>('generation');

  const tourPoints = [
    {
      title: 'Voice Persona Selector',
      desc: 'Toggle instantaneously between Satvik (grounded male) and Charvi (melodic female) with acoustic preview.',
      icon: Volume2
    },
    {
      title: 'Indic Language Dropdown',
      desc: 'Select from 11 verified languages with native script rendering and automated numeral expansion.',
      icon: Layers
    },
    {
      title: 'Studio Waveform Player',
      desc: 'Interactive scrub bar, elapsed time tracker, volume slider, and instant lossless WAV download.',
      icon: Download
    },
    {
      title: '100% Local Inference Status',
      desc: 'Supervised background PyTorch runtime indicator showing local CPU health and zero cloud leaks.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 bg-[#FAEEDE] border-b border-[#2C1030]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF9B36] bg-[#2C1030] px-3.5 py-1 rounded-full">
            Real Application Interface
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C1030] tracking-tight mt-3">
            Built for Desktop. Polished for Creators.
          </h2>
          <p className="mt-3 text-base text-[#806C80]">
            Take a look at the real MAVS desktop studio in action on Windows 11. No mockups or fictional interface renders.
          </p>

          {/* Screenshot Switcher Tabs */}
          <div className="mt-6 inline-flex items-center gap-2 p-1.5 rounded-2xl bg-white/70 border border-[#2C1030]/10 shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveTab('generation')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'generation'
                  ? 'bg-[#2C1030] text-white shadow-xs'
                  : 'text-[#806C80] hover:text-[#2C1030]'
              }`}
            >
              Active Voice Generation & Audio Player
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('installed')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'installed'
                  ? 'bg-[#2C1030] text-white shadow-xs'
                  : 'text-[#806C80] hover:text-[#2C1030]'
              }`}
            >
              Studio Window Overview
            </button>
          </div>
        </div>

        {/* Real Screenshot Display Window */}
        <div className="max-w-5xl mx-auto rounded-3xl p-3 bg-gradient-to-b from-[#2C1030]/15 to-white/40 border border-[#2C1030]/10 shadow-xl">
          <div className="rounded-2xl overflow-hidden bg-[#1A0A1C] border border-[#2C1030]/40">
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#130715] border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#EC5478]" />
                <span className="w-3 h-3 rounded-full bg-[#FF9B36]" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="font-mono text-white/70 ml-2">
                  {activeTab === 'generation' ? 'MAVS — Voiceover Synthesis Studio' : 'MAVS — Desktop Workspace'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Build v1.0.0
                </span>
              </div>
            </div>

            {/* Active Screenshot */}
            <div className="relative aspect-auto bg-[#0F0410]">
              <img
                src={
                  activeTab === 'generation'
                    ? '/assets/verified_generation_screenshot.png'
                    : '/assets/live_installed_screenshot.png'
                }
                alt={
                  activeTab === 'generation'
                    ? 'Verified MAVS speech generation interface with Charvi voice and waveform audio player'
                    : 'MAVS live desktop window on Windows 11'
                }
                className="w-full h-auto object-contain block transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Studio Highlights Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tourPoints.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/60 border border-[#2C1030]/10 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="w-9 h-9 rounded-xl bg-[#F9DDE2] text-[#EC5478] flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#2C1030] mb-1">{pt.title}</h4>
                <p className="text-xs text-[#806C80] leading-relaxed">{pt.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

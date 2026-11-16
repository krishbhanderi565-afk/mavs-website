import React, { useState } from 'react';
import { TUTORIAL_STEPS } from '../../data/tutorialSteps';
import { CheckCircle2, Clock, Maximize2, Camera } from 'lucide-react';

interface TutorialSectionProps {
  onOpenLightbox: (imgSrc: string, title: string, caption: string) => void;
  onOpenChecklist: () => void;
}

export const TutorialSection: React.FC<TutorialSectionProps> = ({
  onOpenLightbox,
  onOpenChecklist
}) => {
  const [filter, setFilter] = useState<'all' | 'download' | 'installation' | 'studio'>('all');

  const filteredSteps = TUTORIAL_STEPS.filter(
    (step) => filter === 'all' || step.category === filter
  );

  return (
    <section id="tutorial" className="py-16 sm:py-24 bg-[#FAEEDE] border-b border-[#2C1030]/10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2C1030] text-[#FF9B36] text-xs font-bold mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>PRACTICAL WINDOWS ONBOARDING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C1030] tracking-tight font-['DM_Sans',sans-serif]">
            Complete Screenshot-Based{' '}
            <span className="text-[#EC5478]">Tutorial.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#806C80] leading-relaxed">
            Follow this step-by-step visual guide to download, install, set up, and produce your first studio-quality Indian-language voiceover with MAVS.
          </p>

          {/* Developer Checklist Toggle Pill */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={onOpenChecklist}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 hover:bg-white text-xs font-bold text-[#2C1030] border border-[#2C1030]/15 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
            >
              <Camera className="w-3.5 h-3.5 text-[#FF9B36]" />
              <span>Developer Screenshot Capture Checklist (13 Steps)</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#2C1030] text-white shadow-xs'
                : 'bg-white/60 text-[#806C80] hover:text-[#2C1030] border border-[#2C1030]/10'
            }`}
          >
            All Steps (13)
          </button>
          <button
            type="button"
            onClick={() => setFilter('download')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === 'download'
                ? 'bg-[#2C1030] text-white shadow-xs'
                : 'bg-white/60 text-[#806C80] hover:text-[#2C1030] border border-[#2C1030]/10'
            }`}
          >
            1. Download (Steps 1–2)
          </button>
          <button
            type="button"
            onClick={() => setFilter('installation')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === 'installation'
                ? 'bg-[#2C1030] text-white shadow-xs'
                : 'bg-white/60 text-[#806C80] hover:text-[#2C1030] border border-[#2C1030]/10'
            }`}
          >
            2. Installation (Steps 3–5)
          </button>
          <button
            type="button"
            onClick={() => setFilter('studio')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === 'studio'
                ? 'bg-[#2C1030] text-white shadow-xs'
                : 'bg-white/60 text-[#806C80] hover:text-[#2C1030] border border-[#2C1030]/10'
            }`}
          >
            3. Studio Speech Workflow (Steps 6–13)
          </button>
        </div>

        {/* 13-Step Detailed Tutorial Cards */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {filteredSteps.map((item) => (
            <div
              key={item.step}
              id={`step-${item.step}`}
              className="bg-white/90 rounded-3xl p-6 sm:p-10 border border-[#2C1030]/10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Step Details & Narrative */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#EC5478] bg-[#F9DDE2] px-3 py-1 rounded-full">
                      {item.stepNumber}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                        item.captureStatus === 'live_capture'
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-amber-50 text-amber-800 border border-amber-200'
                      }`}
                    >
                      {item.captureStatus === 'live_capture' ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Live Application Capture
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3 text-amber-600" />
                          Installer Staged Capture
                        </>
                      )}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#2C1030] leading-tight font-['DM_Sans',sans-serif]">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-[#FF9B36] uppercase tracking-wide">
                    {item.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-[#806C80] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Action Callout */}
                  <div className="p-3.5 rounded-2xl bg-[#FAEEDE] border border-[#2C1030]/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2C1030] block mb-1">
                      Action to Take
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#2C1030]/90">
                      👉 {item.keyAction}
                    </p>
                  </div>

                  {/* UI Elements Checklist */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#806C80] block mb-2">
                      Key UI Elements in this Screen
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.uiElements.map((el, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono bg-white px-2.5 py-1 rounded-lg border border-[#2C1030]/10 text-[#2C1030]"
                        >
                          {el}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Screenshot Window Frame with Lightbox Zoom */}
                <div className="lg:col-span-7">
                  <div className="rounded-2xl overflow-hidden border border-[#2C1030]/20 bg-[#140616] shadow-xl group relative">
                    {/* Fake Window Header Bar */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#0F0410] border-b border-white/10 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EC5478]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF9B36]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span className="font-mono text-white/60 ml-2 text-[11px]">
                          {item.stepNumber} — {item.title}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => onOpenLightbox(item.screenshot, `${item.stepNumber}: ${item.title}`, item.caption)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 text-[11px] font-medium transition-colors cursor-pointer"
                        title="Enlarge screenshot"
                      >
                        <Maximize2 className="w-3 h-3 text-[#FF9B36]" />
                        <span>Enlarge</span>
                      </button>
                    </div>

                    {/* Screenshot Body */}
                    <div
                      className="relative aspect-auto bg-[#0A020B] flex items-center justify-center cursor-pointer p-1"
                      onClick={() => onOpenLightbox(item.screenshot, `${item.stepNumber}: ${item.title}`, item.caption)}
                    >
                      <img
                        src={item.screenshot}
                        alt={item.alt}
                        className="w-full h-auto object-contain max-h-[420px] rounded-lg transition-transform duration-300 group-hover:scale-101"
                        loading="lazy"
                      />
                    </div>

                    {/* Bottom Caption */}
                    <div className="px-4 py-2.5 bg-[#0F0410] border-t border-white/5 flex items-center justify-between text-xs text-white/70">
                      <span className="text-[11px] font-mono truncate mr-2">
                        {item.caption}
                      </span>
                      <span className="text-[10px] text-[#FF9B36] font-mono shrink-0">
                        Click to Zoom
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

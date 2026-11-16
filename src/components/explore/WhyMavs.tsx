import React from 'react';
import { Terminal, Check, X, Zap, ShieldAlert, Sparkles } from 'lucide-react';

export const WhyMavs: React.FC = () => {
  const beforePoints = [
    { text: 'Manual Python 3.10+ installation & virtual environment management', icon: X },
    { text: 'Complex pip dependencies (PyTorch, TorchAudio, Transformers, SoundFile)', icon: X },
    { text: 'Hunting Hugging Face model repository branches and manual weight downloads', icon: X },
    { text: 'Debugging CLI runtime flags, CUDA path mismatches, and broken environment variables', icon: X },
    { text: 'Commercial cloud alternatives gated behind expensive monthly subscriptions or credit paywalls', icon: X }
  ];

  const withMavsPoints = [
    { text: 'Single Windows installer (.exe) with automatic runtime initialization', icon: Check },
    { text: 'Clean, distraction-free desktop interface designed for video creators and educators', icon: Check },
    { text: 'One-click automated model loading with 100% offline local CPU execution', icon: Check },
    { text: 'Instant visual controls: 11 Indian languages, Satvik & Charvi voices, live waveform preview', icon: Check },
    { text: 'Unlimited local generations with broadcast-quality 24 kHz uncompressed WAV export', icon: Check }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white/60 border-b border-[#2C1030]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Context */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EC5478] bg-[#F9DDE2] px-3.5 py-1 rounded-full">
            The Origin &amp; Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C1030] tracking-tight mt-4 font-['DM_Sans',sans-serif]">
            An Incredible Model Shouldn't Be{' '}
            <span className="text-[#FF9B36]">Difficult to Use.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#806C80] leading-relaxed">
            Open-source AI research has unlocked remarkable vocal fidelity for regional Indian languages. Yet for millions of everyday storytellers, educators, and video editors, accessing that power meant confronting an intimidating wall of technical requirements.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-center">
          <div className="space-y-5 text-sm sm:text-base text-[#2C1030]/85 leading-relaxed bg-[#FAEEDE]/70 p-6 sm:p-8 rounded-3xl border border-[#2C1030]/10">
            <h3 className="text-xl font-bold text-[#2C1030] flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#EC5478]" />
              The Practical Friction of Running Local AI
            </h3>
            <p>
              When Oomni released <strong>Mithi v1 Flash</strong>—a groundbreaking 99-million parameter model capable of synthesizing 11 Indian languages at 24 kHz—the technical potential was immense. But like many machine learning releases, it was primarily designed for engineers and data scientists comfortable with code terminals, Python environments, and PyTorch tensors.
            </p>
            <p>
              Creators who simply wanted an authentic Marathi, Gujarati, or Bengali voiceover for a YouTube video essay or Instagram Reel faced hours of troubleshooting: missing C++ build tools, conflicting package versions, and broken audio output drivers.
            </p>
            <p className="text-xs text-[#806C80] italic">
              Note: Commercial SaaS voice platforms exist, but recurring subscription tiers and restricted per-minute character credits can create persistent friction for frequent independent creators.
            </p>
          </div>

          <div className="space-y-5 text-sm sm:text-base text-[#2C1030]/85 leading-relaxed bg-[#FAEEDE]/70 p-6 sm:p-8 rounded-3xl border border-[#2C1030]/10">
            <h3 className="text-xl font-bold text-[#2C1030] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FF9B36]" />
              The Motivation Behind MAVS
            </h3>
            <p>
              Krish Bhanderi recognized that the gap between open-source neural models and everyday creative workflows was fundamentally an engineering and UX challenge. An extraordinary model deserves an intuitive desktop home.
            </p>
            <p>
              <strong>MAVS (Mithi AI Voice Studio)</strong> was conceived to solve this problem independently: wrap the complex Python inference pipeline inside a clean, native desktop shell that runs completely on modern CPUs without requiring an expensive GPU or cloud API key.
            </p>
            <p className="font-semibold text-[#2C1030]">
              The objective was simple: turn written words into spoken Indian-language voiceovers in three clicks, honoring the original model while respecting the creator's time and privacy.
            </p>
          </div>
        </div>

        {/* Visual Comparison: BEFORE MAVS vs WITH MAVS */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#2C1030]">
              The Workflow Transformation
            </h3>
            <p className="text-xs sm:text-sm text-[#806C80] mt-1">
              Comparing the traditional terminal pipeline against the streamlined MAVS studio experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* BEFORE MAVS */}
            <div className="bg-[#1C0E1F] text-white p-6 sm:p-8 rounded-3xl border border-red-500/20 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-2.5">
                    <Terminal className="w-5 h-5 text-red-400" />
                    <span className="font-bold text-sm sm:text-base text-red-300">
                      BEFORE MAVS
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-white/50 bg-white/5 px-2.5 py-0.5 rounded-full">
                    Terminal / Script Workflow
                  </span>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-white/80">
                  {beforePoints.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-red-950/80 text-red-400 flex items-center justify-center shrink-0 mt-0.5 border border-red-500/30">
                        <item.icon className="w-3 h-3" />
                      </span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 font-mono text-[11px] text-red-400/80">
                ⚠️ High technical barrier • Fragile dependencies • CLI only
              </div>
            </div>

            {/* WITH MAVS */}
            <div className="bg-gradient-to-br from-[#2C1030] to-[#3B1540] text-[#FAEEDE] p-6 sm:p-8 rounded-3xl border border-[#EC5478]/30 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#EC5478]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <Zap className="w-5 h-5 text-[#FF9B36]" />
                    <span className="font-bold text-sm sm:text-base text-[#FF9B36]">
                      WITH MAVS
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    Streamlined Desktop Studio
                  </span>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-[#FAEEDE]/90 relative z-10">
                  {withMavsPoints.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-950/80 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                        <item.icon className="w-3 h-3" />
                      </span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#FF9B36] font-semibold relative z-10">
                <span>✨ 3 Clicks: Text ➜ Voice ➜ WAV</span>
                <span className="text-white/60 font-mono text-[11px]">100% Offline</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

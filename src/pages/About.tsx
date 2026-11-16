import React from 'react';
import { ExternalLink, User, Sparkles, CheckCircle2, Shield, Compass } from 'lucide-react';
import { OFFICIAL_MODEL_HUGGINGFACE, OFFICIAL_CONTACT_EMAIL } from '../data/platforms';

export const About: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-[#FAEEDE] min-h-[calc(100vh-80px)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9DDE2] border border-[#EC5478]/30 text-xs font-bold text-[#EC5478] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Story & Attribution</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#2C1030] tracking-tight">
            About MAVS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#806C80] leading-relaxed">
            Making Indian-language AI voice generation accessible to creators, educators, and storytellers through thoughtful software engineering.
          </p>
        </div>

        {/* Why MAVS Was Created */}
        <div className="bg-white/90 rounded-3xl p-8 sm:p-10 border border-[#2C1030]/10 shadow-xs mb-12">
          <h2 className="text-2xl font-bold text-[#2C1030] mb-4">
            The Purpose Behind MAVS
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-[#806C80] leading-relaxed">
            <p>
              Multilingual artificial intelligence research has advanced at a tremendous pace. Brilliant models exist for regional languages, but setting them up often requires technical literacy—configuring Python virtual environments, managing deep learning dependencies, resolving CUDA paths, and executing terminal commands.
            </p>
            <p>
              For content creators, educators, and video editors who just want to produce an authentic Hindi, Bengali, or Gujarati voiceover for their next project, that technical barrier can feel insurmountable.
            </p>
            <p className="font-semibold text-[#2C1030]">
              MAVS (Mithi AI Voice Studio) was developed to eliminate that friction. It packages complex machine learning pipelines into a single, respectful, distraction-free desktop application where anyone can paste a script, pick a voice, and export broadcast-quality WAV audio.
            </p>
          </div>
        </div>

        {/* Creator Attribution & Separation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Founder & Developer Card */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-white to-[#FAEEDE]/60 border-2 border-[#2C1030]/20 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#2C1030] text-[#FF9B36] flex items-center justify-center font-bold text-xl shadow-xs">
                  <User className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#EC5478]">
                    Founder & Developer
                  </span>
                  <h3 className="text-2xl font-black text-[#2C1030]">
                    Krish Bhanderi
                  </h3>
                  <p className="text-xs text-[#806C80]">Creator of MAVS Desktop Studio</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-xs sm:text-sm text-[#806C80] leading-relaxed">
                  Krish conceptualized, designed, and developed the MAVS desktop studio as an independent software initiative to bridge research-grade speech synthesis with everyday creators.
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C1030] pt-2">
                  Application Contributions:
                </h4>
                <ul className="space-y-2 text-xs text-[#2C1030]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Product concept & studio architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Desktop UI/UX design & React renderer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Python runtime supervisor & port allocation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Integration of Mithi v1 Flash acoustic pipeline</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Installer packaging (NSIS .exe) & documentation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#2C1030]/10 text-xs">
              <span className="text-[#806C80]">Direct Contact: </span>
              <a
                href={`mailto:${OFFICIAL_CONTACT_EMAIL}`}
                className="font-bold text-[#EC5478] hover:underline"
              >
                {OFFICIAL_CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Original Model Creators Card — Oomni */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-[#2C1030] to-[#3B1540] text-[#FAEEDE] border-2 border-[#4A1848] shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#EC5478] text-white flex items-center justify-center font-bold text-xl shadow-xs">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF9B36]">
                    Original Model Creators
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    Oomni
                  </h3>
                  <p className="text-xs text-[#FAEEDE]/70">Creators of Mithi v1 Flash</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-xs sm:text-sm text-[#FAEEDE]/85 leading-relaxed">
                  Oomni developed and trained the underlying <strong>Mithi v1 Flash</strong> neural text-to-speech model. MAVS acknowledges and honors their foundational work in open-source speech research.
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF9B36] pt-2">
                  Model Specifications & Research:
                </h4>
                <ul className="space-y-2 text-xs text-[#FAEEDE]/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>99.1M Parameter neural speech model</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Non-autoregressive flow-matching architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Trained on 11 Indian languages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Satvik & Charvi character voices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Released under Apache License 2.0</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs">
              <a
                href={OFFICIAL_MODEL_HUGGINGFACE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#FF9B36] hover:text-white font-bold transition-colors"
              >
                <span>View Mithi v1 Flash on Hugging Face</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Clear Brand Distinction Callout */}
        <div className="p-6 rounded-2xl bg-[#F9DDE2]/70 border border-[#EC5478]/30 flex items-start gap-4">
          <Shield className="w-6 h-6 text-[#EC5478] flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#2C1030] leading-relaxed">
            <h4 className="font-bold text-sm mb-1">Clear Distinction of Roles</h4>
            MAVS is an independent desktop application designed to package and interface with Mithi v1 Flash. The developer of MAVS makes no claim of ownership or authorship over the original Mithi neural network model. Both projects respect open-source licensing principles for the benefit of the multilingual developer and creator community.
          </div>
        </div>
      </div>
    </div>
  );
};

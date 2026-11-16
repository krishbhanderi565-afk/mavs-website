import React from 'react';
import { ExternalLink, User, Sparkles, CheckCircle2, GitBranch } from 'lucide-react';
import { OFFICIAL_MODEL_HUGGINGFACE, GITHUB_REPO_URL } from '../../data/platforms';

export const ContributionPanels: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAEEDE] border-b border-[#2C1030]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EC5478] bg-[#F9DDE2] px-3.5 py-1 rounded-full">
            Transparent Attribution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C1030] tracking-tight mt-4 font-['DM_Sans',sans-serif]">
            One Open-Source Model.{' '}
            <span className="text-[#EC5478]">One Independent Application.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#806C80] leading-relaxed">
            Honest attribution and clear boundaries are foundational to open-source software. Here is the exact distinction between the underlying speech model and the desktop studio application.
          </p>
        </div>

        {/* Central Core Statement Banner */}
        <div className="max-w-4xl mx-auto mb-12 bg-white/80 p-5 sm:p-6 rounded-2xl border-2 border-[#EC5478]/30 shadow-xs text-center">
          <p className="text-base sm:text-lg font-bold text-[#2C1030]">
            &ldquo;Oomni created the model. Krish Bhanderi built MAVS to make it easier for people to use.&rdquo;
          </p>
          <p className="text-xs text-[#806C80] mt-1">
            Two distinct, complementary contributions to the Indian-language AI ecosystem.
          </p>
        </div>

        {/* Dual Contribution Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* PANEL A — OOMNI */}
          <div className="bg-white/90 rounded-3xl p-8 sm:p-10 border border-[#2C1030]/10 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9B36]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FF9B36]/15 text-[#FF9B36] flex items-center justify-center font-bold text-xl">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF9B36]">
                    Original Model Creators
                  </span>
                  <h3 className="text-2xl font-black text-[#2C1030]">
                    Oomni
                  </h3>
                  <p className="text-xs text-[#806C80]">Multilingual Neural Voice Model Research</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#2C1030]/85 leading-relaxed mb-6">
                Oomni created <strong>Mithi v1 Flash</strong>, the underlying multilingual text-to-speech deep learning model that powers MAVS.
              </p>

              {/* Verified Model Details */}
              <div className="space-y-3 pt-4 border-t border-[#2C1030]/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#806C80]">
                  Verified Model Contributions
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#2C1030]/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Mithi v1 Flash:</strong> 99 Million parameters, 24 kHz acoustic architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>11 Indian Languages:</strong> Hindi, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu, English</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Voice Personas:</strong> Satvik (masculine) &amp; Charvi (feminine) acoustic representations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Open License:</strong> Distributed under the Apache 2.0 model licence</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Hugging Face CTA Button */}
            <div className="mt-8 pt-6 border-t border-[#2C1030]/10">
              <a
                href={OFFICIAL_MODEL_HUGGINGFACE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#FAEEDE] hover:bg-[#F5E6D3] text-[#2C1030] font-bold text-sm px-5 py-3 rounded-2xl border border-[#2C1030]/15 transition-all shadow-2xs hover:shadow-xs group"
              >
                <span>Explore Mithi on Hugging Face</span>
                <ExternalLink className="w-4 h-4 text-[#806C80] group-hover:text-[#EC5478] transition-colors" />
              </a>
            </div>
          </div>

          {/* PANEL B — KRISH BHANDERI */}
          <div className="bg-gradient-to-br from-white to-[#FDF4EC] rounded-3xl p-8 sm:p-10 border-2 border-[#2C1030]/20 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#EC5478]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#2C1030] text-[#EC5478] flex items-center justify-center font-bold text-xl shadow-xs">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#EC5478]">
                    Founder &amp; Developer of MAVS
                  </span>
                  <h3 className="text-2xl font-black text-[#2C1030]">
                    Krish Bhanderi
                  </h3>
                  <p className="text-xs text-[#806C80]">Desktop Workstation Software Engineering</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#2C1030]/85 leading-relaxed mb-6">
                I independently developed MAVS as a native desktop application to make the existing Mithi model more approachable, accessible, and practical for everyday creators.
              </p>

              {/* Verified Application Contributions */}
              <div className="space-y-3 pt-4 border-t border-[#2C1030]/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#806C80]">
                  Verified Application Contributions
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#2C1030]/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Product Concept &amp; UX:</strong> Designed the complete desktop workflow, prompt canvas, and audio preview player</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Desktop Engineering:</strong> Built the native Electron + React + TypeScript shell with automatic port discovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Python Backend Runtime:</strong> Integrated local PyTorch CPU inference and automated weight lifecycle management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Packaging &amp; Distribution:</strong> Built the Windows installer (<code className="font-mono text-xs bg-[#FAEEDE] px-1 py-0.5 rounded">MAVS-Setup-x64.exe</code>), release pipelines, and setup wizard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Documentation &amp; User Guides:</strong> Authored complete installation manuals, developer docs, and onboarding tutorials</span>
                  </li>
                </ul>
              </div>

              {/* Integrity Notice */}
              <div className="mt-4 p-3 rounded-xl bg-[#2C1030]/5 border border-[#2C1030]/10 text-[11px] text-[#806C80] leading-relaxed">
                ℹ️ Krish Bhanderi did not train the Mithi model, did not create the voice models, and does not claim upstream code contributions to Oomni's model repository.
              </div>
            </div>

            {/* GitHub Source Code Button */}
            <div className="mt-8 pt-6 border-t border-[#2C1030]/10">
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#2C1030] hover:bg-[#431B48] text-[#FAEEDE] font-bold text-sm px-5 py-3 rounded-2xl transition-all shadow-xs hover:shadow-md group"
              >
                <GitBranch className="w-4 h-4 text-[#FF9B36]" />
                <span>Explore MAVS Source Code</span>
                <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

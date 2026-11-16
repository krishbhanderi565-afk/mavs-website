import React from 'react';
import { ExternalLink, GitBranch, Scale, Info } from 'lucide-react';
import { OFFICIAL_MODEL_HUGGINGFACE, GITHUB_REPO_URL } from '../../data/platforms';

export const OpenSourceCredits: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAEEDE] border-b border-[#2C1030]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EC5478] bg-[#F9DDE2] px-3.5 py-1 rounded-full">
            Licensing &amp; Legal Clarity
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C1030] tracking-tight mt-4 font-['DM_Sans',sans-serif]">
            Built on Open Source.{' '}
            <span className="text-[#2C1030]">Made Easier to Use.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#806C80] leading-relaxed">
            MAVS stands proudly on the shoulders of open-source artificial intelligence research while preserving rigorous legal boundaries between software application and machine learning model weights.
          </p>
        </div>

        {/* Dual License & Attribution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Model License Card */}
          <div className="bg-white/90 rounded-3xl p-7 sm:p-8 border border-[#2C1030]/10 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF9B36]/15 text-[#FF9B36] flex items-center justify-center">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF9B36]">
                    Machine Learning Model
                  </span>
                  <h3 className="text-xl font-bold text-[#2C1030]">
                    Mithi v1 Flash
                  </h3>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#806C80] leading-relaxed">
                <p>
                  Created and published by <strong>Oomni</strong> under the permissive <strong>Apache 2.0 Licence</strong>.
                </p>
                <p>
                  The Apache 2.0 licence permits commercial and non-commercial utilization, modification, and distribution of the model architecture, provided original copyright notices, disclaimer of warranty, and patent grants are maintained.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2C1030]/10">
              <a
                href={OFFICIAL_MODEL_HUGGINGFACE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#2C1030] hover:text-[#EC5478] transition-colors"
              >
                <span>Read Mithi v1 Flash Licence on Hugging Face</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Desktop Studio Application Card */}
          <div className="bg-white/90 rounded-3xl p-7 sm:p-8 border border-[#2C1030]/10 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#2C1030] text-[#EC5478] flex items-center justify-center">
                  <GitBranch className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#EC5478]">
                    Desktop Workstation Software
                  </span>
                  <h3 className="text-xl font-bold text-[#2C1030]">
                    MAVS Desktop Studio
                  </h3>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#806C80] leading-relaxed">
                <p>
                  Independently authored by <strong>Krish Bhanderi</strong>. The application software shell (Electron, React, Python runner, and Windows packaging) carries its own dedicated software licence terms.
                </p>
                <p>
                  The application does not automatically adopt Apache 2.0 merely by integrating an Apache 2.0 model. Both components coexist respectfully under their respective terms.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2C1030]/10">
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#2C1030] hover:text-[#EC5478] transition-colors"
              >
                <span>Inspect MAVS Repository &amp; Software Licence</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Clear Redistribution & Community Guarantee */}
        <div className="max-w-4xl mx-auto bg-[#F5E6D3] rounded-2xl p-5 sm:p-6 border border-[#2C1030]/10 text-xs sm:text-sm text-[#2C1030]/85 flex items-start gap-3">
          <Info className="w-5 h-5 text-[#FF9B36] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Community Notice:</strong> All third-party dependencies bundled into MAVS (including Electron, PyTorch, Libsndfile, and React) retain their original upstream copyright notices, disclaimers, and open-source licenses as documented in the application&apos;s <code className="font-mono bg-white/70 px-1.5 py-0.5 rounded">THIRD_PARTY_NOTICES.md</code>.
          </p>
        </div>
      </div>
    </section>
  );
};

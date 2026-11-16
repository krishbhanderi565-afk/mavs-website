import React from 'react';
import { GitBranch, ExternalLink, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_GITHUB_REPO } from '../data/platforms';
import { Link } from 'react-router-dom';

export const OpenSource: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-[#FAEEDE] min-h-[calc(100vh-80px)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9DDE2] border border-[#EC5478]/30 text-xs font-bold text-[#EC5478] mb-3">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Community & Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#2C1030] tracking-tight">
            Open Source Philosophy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#806C80] leading-relaxed">
            MAVS is built on the belief that speech technology should be transparent, accessible, and respectful of community research.
          </p>
        </div>

        {/* GitHub Repository Spotlight Banner */}
        <div className="bg-white/90 rounded-3xl p-8 sm:p-10 border border-[#2C1030]/10 shadow-xs mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EC5478]">
              Source Code Repository
            </span>
            <h2 className="text-2xl font-black text-[#2C1030]">
              Explore MAVS on GitHub
            </h2>
            <p className="text-xs sm:text-sm text-[#806C80] leading-relaxed">
              Inspect the desktop Electron container, Python runtime manager, React renderer, and packaging automation. Contributions, bug reports, and pull requests are welcomed.
            </p>
          </div>

          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={OFFICIAL_GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#2C1030] hover:bg-[#431B48] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow-xs transition-all"
            >
              <span>GitHub Repository</span>
              <ExternalLink className="w-4 h-4 text-[#FF9B36]" />
            </a>
            <a
              href={`${OFFICIAL_GITHUB_REPO}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F9DDE2] hover:bg-[#f2c7d0] text-[#2C1030] text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-full transition-colors"
            >
              <span>Report an Issue</span>
            </a>
          </div>
        </div>

        {/* Separation of MAVS Application vs Mithi Model */}
        <div className="bg-white/90 rounded-3xl p-8 sm:p-10 border border-[#2C1030]/10 shadow-xs mb-12">
          <h3 className="text-xl font-bold text-[#2C1030] mb-4">
            Understanding Component Licences
          </h3>
          <p className="text-xs sm:text-sm text-[#806C80] leading-relaxed mb-6">
            MAVS bundles and integrates multiple open-source technologies, each governed by its own respective license. We maintain clear boundaries between the application software and the underlying neural model.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAEEDE]/50 border border-[#2C1030]/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-[#2C1030]">MAVS Desktop Application</span>
                <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                  MIT License
                </span>
              </div>
              <p className="text-xs text-[#806C80] leading-relaxed">
                Authored by <strong>Krish Bhanderi</strong>. Governs the desktop interface, runtime supervisor, custom packaging scripts, and frontend components.
              </p>
              <ul className="text-xs text-[#2C1030] space-y-1 pt-2 border-t border-[#2C1030]/5">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Free to study, modify, and distribute</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Permissive open source terms</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAEEDE]/50 border border-[#2C1030]/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-[#2C1030]">Mithi v1 Flash Neural Model</span>
                <span className="text-[11px] font-mono font-bold text-blue-800 bg-blue-100 px-2.5 py-0.5 rounded-md">
                  Apache-2.0
                </span>
              </div>
              <p className="text-xs text-[#806C80] leading-relaxed">
                Created and trained by <strong>Oomni</strong>. Governs the 99.1M parameter acoustic model, checkpoint weights, and speech generation architecture.
              </p>
              <ul className="text-xs text-[#2C1030] space-y-1 pt-2 border-t border-[#2C1030]/5">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Weights verified from Hugging Face</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Preserves original Oomni copyright notice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Contribute */}
        <div className="bg-white/90 rounded-3xl p-8 sm:p-10 border border-[#2C1030]/10 shadow-xs mb-12">
          <h3 className="text-xl font-bold text-[#2C1030] mb-4">
            How to Contribute to MAVS
          </h3>
          <div className="space-y-4 text-xs sm:text-sm text-[#806C80] leading-relaxed">
            <p>
              We welcome contributions from engineers, designers, and linguists across the Indian developer community:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-[#2C1030] font-medium pl-2">
              <li><strong>Bug Reports & Feedback:</strong> Submit reproduction steps on GitHub Issues or email Krish Bhanderi directly.</li>
              <li><strong>Language & Pronunciation Improvements:</strong> Suggest phonetic tuning or text normalization rules for specific Indian dialects.</li>
              <li><strong>Cross-Platform Development:</strong> Help test and verify upcoming macOS (ARM64/Intel) and Linux desktop packages.</li>
              <li><strong>Documentation:</strong> Enhance installation guides and translate documentation into regional languages.</li>
            </ol>
          </div>
          <div className="mt-6 pt-4 border-t border-[#2C1030]/10 flex justify-between items-center text-xs">
            <span className="text-[#806C80]">Detailed licensing information available on our License page:</span>
            <Link to="/license" className="font-bold text-[#EC5478] hover:underline">
              View All Licences →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

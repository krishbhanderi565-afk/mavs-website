import React from 'react';
import { Link } from 'react-router-dom';
import { GitBranch, Shield, Heart, ArrowRight, ExternalLink } from 'lucide-react';
import { OFFICIAL_GITHUB_REPO } from '../../data/platforms';

export const OpenSourcePreview: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAEEDE] border-b border-[#2C1030]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-white/80 border border-[#2C1030]/10 shadow-xs relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAEEDE] border border-[#2C1030]/10 text-xs font-bold text-[#2C1030]">
                <GitBranch className="w-3.5 h-3.5 text-[#EC5478]" />
                <span>Open-Source Philosophy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2C1030] tracking-tight">
                Open Source. Accessible Voice Technology.
              </h2>
              <p className="text-sm sm:text-base text-[#806C80] leading-relaxed">
                MAVS is intended to make access to underlying open-source voice technology easier for everyday creators. Transparent code, clear licensing, community issue tracking, and respectful attribution.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#2C1030] pt-2">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  MIT / Apache 2.0 Licences
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#EC5478]" />
                  Community Contributions Welcome
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto flex-shrink-0">
              <a
                href={OFFICIAL_GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#2C1030] hover:bg-[#431B48] text-white text-sm font-bold px-6 py-3.5 rounded-full shadow-xs transition-all"
              >
                <span>View on GitHub</span>
                <ExternalLink className="w-4 h-4 text-[#FF9B36]" />
              </a>
              <Link
                to="/open-source"
                className="inline-flex items-center justify-center gap-2 bg-[#F9DDE2] hover:bg-[#f6cad2] text-[#2C1030] text-sm font-semibold px-6 py-3.5 rounded-full transition-colors"
              >
                <span>Read Open Source Docs</span>
                <ArrowRight className="w-4 h-4 text-[#EC5478]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

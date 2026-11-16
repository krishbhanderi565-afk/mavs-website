import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { LICENSES_DATA, ASSET_CREDITS_DATA } from '../data/licenses';
import { OFFICIAL_MODEL_HUGGINGFACE, OFFICIAL_GITHUB_REPO } from '../data/platforms';

export const License: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-[#FAEEDE] min-h-[calc(100vh-80px)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9DDE2] border border-[#EC5478]/30 text-xs font-bold text-[#EC5478] mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Open Source Licences & Notices</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#2C1030] tracking-tight">
            Licensing & Attribution
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#806C80] leading-relaxed">
            MAVS embraces transparent open-source software. Below is the complete breakdown of licenses governing the application, underlying model, and third-party libraries.
          </p>
        </div>

        {/* Primary Dual Breakdown: App vs Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* MAVS License */}
          <div className="rounded-3xl p-8 bg-white/90 border-2 border-[#2C1030]/20 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#EC5478]">
                  Application License
                </span>
                <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                  MIT License
                </span>
              </div>
              <h2 className="text-2xl font-black text-[#2C1030]">
                MAVS Studio Software
              </h2>
              <p className="text-xs text-[#806C80]">
                Copyright © 2026 Krish Bhanderi.
              </p>
              <div className="p-4 rounded-2xl bg-[#FAEEDE]/60 font-mono text-[11px] text-[#2C1030]/80 leading-relaxed border border-[#2C1030]/10 max-h-48 overflow-y-auto">
                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the &quot;Software&quot;), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, subject to retaining the copyright notice.
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-[#2C1030]/10">
              <a
                href={OFFICIAL_GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EC5478] hover:text-[#2C1030] transition-colors"
              >
                <span>View Full License on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Mithi v1 Flash License */}
          <div className="rounded-3xl p-8 bg-[#2C1030] text-[#FAEEDE] border-2 border-[#4A1848] shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF9B36]">
                  Neural Model License
                </span>
                <span className="text-xs font-mono font-bold bg-blue-900 text-blue-200 px-2.5 py-0.5 rounded-full border border-blue-500/30">
                  Apache License 2.0
                </span>
              </div>
              <h2 className="text-2xl font-black text-white">
                Mithi v1 Flash Model
              </h2>
              <p className="text-xs text-[#FAEEDE]/70">
                Created and trained by Oomni.
              </p>
              <div className="p-4 rounded-2xl bg-white/5 font-mono text-[11px] text-[#FAEEDE]/85 leading-relaxed border border-white/10 max-h-48 overflow-y-auto">
                Licensed under the Apache License, Version 2.0 (the &quot;License&quot;); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an &quot;AS IS&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND.
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10">
              <a
                href={OFFICIAL_MODEL_HUGGINGFACE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF9B36] hover:text-white transition-colors"
              >
                <span>View Model on Hugging Face</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Third Party Libraries List */}
        <div className="bg-white/90 rounded-3xl p-8 sm:p-10 border border-[#2C1030]/10 shadow-xs mb-16">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#2C1030]">Third-Party Open-Source Components</h3>
            <p className="text-xs text-[#806C80]">Key dependencies incorporated in the desktop application runtime</p>
          </div>

          <div className="divide-y divide-[#2C1030]/10">
            {LICENSES_DATA.map((item, index) => (
              <div key={index} className="py-4 space-y-1 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#2C1030]">{item.component}</span>
                    <span className="text-[11px] font-mono text-[#806C80]">({item.creator})</span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#2C1030] bg-[#FAEEDE] px-2.5 py-0.5 rounded border border-[#2C1030]/10 w-fit">
                    {item.licenseType}
                  </span>
                </div>
                <p className="text-[#806C80] leading-relaxed">{item.scope}</p>
                <div className="pt-1">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#EC5478] hover:text-[#2C1030] inline-flex items-center gap-1 font-medium transition-colors"
                  >
                    <span>{item.url}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Asset & Icon Credits Table */}
        <div className="bg-white/90 rounded-3xl p-8 sm:p-10 border border-[#2C1030]/10 shadow-xs">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#2C1030]">Asset & Design Credits</h3>
            <p className="text-xs text-[#806C80]">Documenting fonts, icons, and visual references</p>
          </div>

          <div className="space-y-4">
            {ASSET_CREDITS_DATA.map((asset, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#FAEEDE]/40 border border-[#2C1030]/10 text-xs space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-bold text-sm text-[#2C1030]">{asset.assetName}</span>
                  <span className="font-mono text-[#806C80] font-semibold">{asset.license}</span>
                </div>
                <p className="text-[#806C80]">{asset.creator}</p>
                <p className="text-[#2C1030] text-[11px] pt-1">{asset.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

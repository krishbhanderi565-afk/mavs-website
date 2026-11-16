import React from 'react';
import { Video, Clapperboard, GraduationCap, BookOpen, Terminal, CheckCircle2, XCircle } from 'lucide-react';

export const WhatIsMavs: React.FC = () => {
  const audience = [
    {
      icon: Clapperboard,
      title: 'YouTube Creators',
      desc: 'Dub educational content, technical tutorials, and long-form documentaries across 11 Indian languages with consistent audio clarity.'
    },
    {
      icon: Video,
      title: 'Instagram & Shorts',
      desc: 'Produce high-engagement voiceovers for vertical videos in seconds, perfectly timed for fast-paced social algorithms.'
    },
    {
      icon: GraduationCap,
      title: 'Educators & EdTech',
      desc: 'Narrate regional study materials and vernacular e-learning modules with articulate, trustworthy speech cadence.'
    },
    {
      icon: BookOpen,
      title: 'Storytellers & Audio',
      desc: 'Bring regional folk tales, fiction, and character dialogue to life using Satvik and Charvi neural voices.'
    }
  ];

  return (
    <section className="py-20 bg-[#FAEEDE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9DDE2] border border-[#EC5478]/20 text-xs font-bold text-[#EC5478] uppercase tracking-wider mb-3">
            Why MAVS Exists
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C1030] tracking-tight">
            Multilingual Voice AI Made Human & Accessible
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#806C80] leading-relaxed">
            MAVS brings multilingual AI voice generation into a simple desktop experience. It helps creators turn written scripts into natural-sounding speech without dealing with complicated model setup, virtual environments, or terminal workflows.
          </p>
        </div>

        {/* The Problem vs Solution Comparison Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Traditional Way */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white/40 border border-[#2C1030]/10 shadow-2xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-red-100 flex items-center justify-center text-red-600">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#2C1030]">The Complex Manual Way</h3>
                <p className="text-xs text-[#806C80]">Setting up open-source TTS independently</p>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-[#806C80]">
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Requires Python 3.12, PyTorch, CUDA libraries, and C++ build tools.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Manual Git cloning, conda environment configuration, and dependency conflicts.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Running manual terminal commands every time you want to synthesize audio.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span>No integrated audio preview, waveform scrubber, or easy export.</span>
              </li>
            </ul>
          </div>

          {/* The MAVS Way */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white to-[#F9DDE2]/60 border border-[#EC5478]/30 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#EC5478] flex items-center justify-center text-white">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#2C1030]">The MAVS Desktop Experience</h3>
                <p className="text-xs text-[#EC5478] font-semibold">One-click installation and effortless workflow</p>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-[#2C1030]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#EC5478] mt-0.5 flex-shrink-0" />
                <span>Single Windows installer (`.exe`) with automated runtime supervisor.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#EC5478] mt-0.5 flex-shrink-0" />
                <span>Automatic one-time weight fetching from Hugging Face with hash verification.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#EC5478] mt-0.5 flex-shrink-0" />
                <span>Visual studio interface: pick language, choose Satvik or Charvi, and click Generate.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#EC5478] mt-0.5 flex-shrink-0" />
                <span>100% private offline inference with broadcast-ready 24 kHz WAV export.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Creator Audience Grid */}
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-[#2C1030]">
            Crafted for Content Creators Across India
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audience.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white/70 hover:bg-white border border-[#2C1030]/10 shadow-2xs hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FAEEDE] group-hover:bg-[#FF9B36] group-hover:text-white text-[#2C1030] flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base text-[#2C1030] mb-2">{item.title}</h4>
                <p className="text-xs text-[#806C80] leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

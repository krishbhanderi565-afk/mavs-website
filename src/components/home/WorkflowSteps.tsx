import React from 'react';
import { PenLine, Languages, Sparkles, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WorkflowSteps: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Write Your Script',
      desc: 'Type or paste your text directly in the MAVS studio editor. Use our browser Script Enhancer for optimal spoken cadence.',
      icon: PenLine,
      color: 'bg-[#FF9B36]'
    },
    {
      step: '02',
      title: 'Select Language & Voice',
      desc: 'Pick from 11 Indian languages and toggle between Satvik (articulate male) or Charvi (warm, expressive female).',
      icon: Languages,
      color: 'bg-[#EC5478]'
    },
    {
      step: '03',
      title: 'Generate in One Click',
      desc: 'Hit Generate Voiceover. The optimized PyTorch CPU engine synthesizes neural acoustic frames locally in seconds.',
      icon: Sparkles,
      color: 'bg-[#2C1030]'
    },
    {
      step: '04',
      title: 'Preview & Export WAV',
      desc: 'Listen immediately on the integrated waveform scrubber and export lossless 24 kHz WAV straight into your video editor.',
      icon: Download,
      color: 'bg-emerald-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#F9DDE2]/40 border-b border-[#2C1030]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EC5478] bg-[#FAEEDE] px-3 py-1 rounded-full border border-[#EC5478]/20">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C1030] tracking-tight mt-3">
            From Written Script to Studio Audio in Seconds
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#806C80]">
            No complicated machine learning parameters. Clean, predictable, and creator-focused.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white/80 rounded-3xl p-6 border border-[#2C1030]/10 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#806C80] px-2.5 py-1 rounded-lg bg-[#FAEEDE]">
                      STEP {item.step}
                    </span>
                    <div className={`w-10 h-10 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#2C1030] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#806C80] leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#2C1030]/5 flex items-center justify-between text-xs text-[#2C1030] font-semibold">
                  <span className="text-[#806C80]">Step {index + 1} of 4</span>
                  {index < steps.length - 1 ? (
                    <span className="text-[#EC5478] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Next <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  ) : (
                    <span className="text-emerald-600 font-bold">Ready to Edit</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Script Enhancer callout banner */}
        <div className="mt-12 max-w-3xl mx-auto rounded-2xl bg-white p-5 border border-[#2C1030]/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#F9DDE2] text-[#EC5478] flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#2C1030]">Need help making your script TTS-ready?</h4>
              <p className="text-xs text-[#806C80]">Use our free in-browser Script Enhancer to format breath pauses and regional tone.</p>
            </div>
          </div>
          <Link
            to="/script-enhancer"
            className="flex-shrink-0 inline-flex items-center gap-1.5 bg-[#2C1030] text-white text-xs font-bold px-4 py-2.5 rounded-full hover:bg-[#4A1848] transition-colors"
          >
            <span>Open Script Enhancer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

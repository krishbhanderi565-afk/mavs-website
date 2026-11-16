import React, { useState } from 'react';
import { Download, Monitor, Play, FileText, Sliders, Volume2, Save, Maximize2 } from 'lucide-react';

interface WorkflowStepItem {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  screenshot: string;
  caption: string;
}

const WORKFLOW_STEPS: WorkflowStepItem[] = [
  {
    number: '01',
    title: 'Download MAVS',
    description: 'Grab the official Windows installer (.exe) verified for Windows 10/11 x64 architecture.',
    icon: Download,
    screenshot: '/assets/live_installed_screenshot.png',
    caption: 'Download genuine MAVS-Setup-x64.exe installer package.'
  },
  {
    number: '02',
    title: 'Install the Application',
    description: 'Run the setup wizard to unpack application binaries and automatically configure the local runtime.',
    icon: Monitor,
    screenshot: '/assets/live_installed_screenshot.png',
    caption: 'Fast Windows installation with automated runtime verification.'
  },
  {
    number: '03',
    title: 'Launch MAVS',
    description: 'Open the studio from your Desktop or Start Menu. The embedded inference engine boots silently in the background.',
    icon: Play,
    screenshot: '/assets/live_installed_screenshot.png',
    caption: 'Instant studio launch with local port discovery.'
  },
  {
    number: '04',
    title: 'Enter Your Script',
    description: 'Type or paste up to 100,000 characters in native Indian script with real-time character counting.',
    icon: FileText,
    screenshot: '/assets/verified_generation_screenshot.png',
    caption: 'Spacious script prompt canvas supporting extended text.'
  },
  {
    number: '05',
    title: 'Choose Language & Voice',
    description: 'Select your language from 11 Indic choices and toggle between Satvik (masculine) and Charvi (feminine).',
    icon: Sliders,
    screenshot: '/assets/verified_generation_screenshot.png',
    caption: '11 Indian languages with Satvik & Charvi voice personas.'
  },
  {
    number: '06',
    title: 'Generate Speech',
    description: 'Click Generate Audio or press Ctrl+Enter. Local CPU vector acceleration synthesizes tokens in 1.5–3s.',
    icon: Volume2,
    screenshot: '/assets/verified_generation_screenshot.png',
    caption: 'High-contrast Generate Audio button with live elapsed timer.'
  },
  {
    number: '07',
    title: 'Listen and Export WAV',
    description: 'Audition the audio using the interactive scrub bar and export studio-quality 24 kHz uncompressed WAV.',
    icon: Save,
    screenshot: '/assets/verified_generation_screenshot.png',
    caption: 'Waveform audio player with instant lossless WAV download.'
  }
];

interface HowMavsWorksProps {
  onOpenLightbox?: (imgSrc: string, title: string, caption: string) => void;
}

export const HowMavsWorks: React.FC<HowMavsWorksProps> = ({ onOpenLightbox }) => {
  const [activeStep, setActiveStep] = useState(0);

  const current = WORKFLOW_STEPS[activeStep];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white/70 border-b border-[#2C1030]/10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EC5478] bg-[#F9DDE2] px-3.5 py-1 rounded-full">
            Simple 7-Step Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C1030] tracking-tight mt-4 font-['DM_Sans',sans-serif]">
            From Written Words to{' '}
            <span className="text-[#FF9B36]">Spoken Audio.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#806C80] leading-relaxed">
            MAVS turns an intricate deep learning pipeline into a natural, intuitive creative sequence. No command line, no cloud subscriptions, no technical obstacles.
          </p>
        </div>

        {/* Step Selector Ribbon */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {WORKFLOW_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#2C1030] text-[#FAEEDE] shadow-md scale-105'
                    : 'bg-[#FAEEDE]/80 text-[#806C80] hover:text-[#2C1030] hover:bg-[#FAEEDE] border border-[#2C1030]/5'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${
                  isSelected ? 'bg-[#FF9B36] text-[#2C1030]' : 'bg-[#2C1030]/10 text-[#806C80]'
                }`}>
                  {step.number}
                </span>
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#EC5478]' : ''}`} />
                <span>{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Interactive Showcase Card */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#FAEEDE] to-white rounded-3xl p-6 sm:p-10 border border-[#2C1030]/10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Step Explanation */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2C1030] text-[#FF9B36] text-xs font-mono font-bold">
                <span>STEP {current.number} OF 07</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#2C1030]">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-[#806C80] leading-relaxed">
                {current.description}
              </p>

              <div className="pt-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#EC5478] mb-1">
                  Verified Interface Element
                </div>
                <p className="text-xs text-[#2C1030]/80 font-mono bg-white/80 p-2.5 rounded-xl border border-[#2C1030]/10">
                  {current.caption}
                </p>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold border border-[#2C1030]/15 bg-white hover:bg-[#FAEEDE] disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
                >
                  ← Previous Step
                </button>
                <button
                  type="button"
                  disabled={activeStep === WORKFLOW_STEPS.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(WORKFLOW_STEPS.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#2C1030] text-[#FAEEDE] hover:bg-[#431B48] disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
                >
                  Next Step →
                </button>
              </div>
            </div>

            {/* Step Screenshot Preview with Lightbox Trigger */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-[#2C1030]/20 bg-[#160818] shadow-md group relative">
                <img
                  src={current.screenshot}
                  alt={current.title}
                  className="w-full h-auto object-contain max-h-[380px] transition-transform duration-300 group-hover:scale-102"
                />

                {/* Lightbox button overlay */}
                {onOpenLightbox && (
                  <button
                    type="button"
                    onClick={() => onOpenLightbox(current.screenshot, current.title, current.caption)}
                    className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2C1030]/90 hover:bg-[#2C1030] text-white text-xs font-semibold backdrop-blur-xs border border-white/10 shadow-md cursor-pointer transition-all"
                    aria-label={`Enlarge screenshot for ${current.title}`}
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#FF9B36]" />
                    <span>Zoom</span>
                  </button>
                )}
              </div>
              <p className="text-[11px] text-[#806C80] text-center mt-2 italic">
                📸 Actual MAVS desktop workspace capture
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

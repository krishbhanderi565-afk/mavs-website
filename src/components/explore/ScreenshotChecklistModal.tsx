import React from 'react';
import { X, CheckCircle2, Clock, Camera, AlertCircle } from 'lucide-react';
import { TUTORIAL_STEPS } from '../../data/tutorialSteps';

interface ScreenshotChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScreenshotChecklistModal: React.FC<ScreenshotChecklistModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const liveCount = TUTORIAL_STEPS.filter((s) => s.captureStatus === 'live_capture').length;
  const readyCount = TUTORIAL_STEPS.filter((s) => s.captureStatus === 'ready_for_capture').length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Developer Screenshot Capture Checklist"
    >
      <div
        className="relative max-w-3xl w-full bg-[#FAEEDE] rounded-3xl border border-[#2C1030]/20 shadow-2xl overflow-hidden flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#2C1030] text-[#FAEEDE] border-b border-[#4A1848]">
          <div className="flex items-center gap-2.5">
            <Camera className="w-5 h-5 text-[#FF9B36]" />
            <div>
              <h3 className="font-bold text-lg text-white">
                Developer Screenshot Capture Checklist
              </h3>
              <p className="text-xs text-[#FAEEDE]/70">
                13-Step Windows Onboarding Asset Tracking for Krish Bhanderi
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Bar */}
        <div className="px-6 py-3.5 bg-[#F5E6D3] border-b border-[#2C1030]/10 flex flex-wrap items-center justify-between text-xs gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              {liveCount} Live Captures Active
            </span>
            <span className="inline-flex items-center gap-1 font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              {readyCount} Installer Screens Staged
            </span>
          </div>
          <span className="font-mono text-[#806C80]">
            Target Folder: <code className="text-[#2C1030] font-bold">public/assets/</code>
          </span>
        </div>

        {/* Checklist Content */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1 text-xs sm:text-sm">
          {TUTORIAL_STEPS.map((step) => (
            <div
              key={step.step}
              className={`p-3.5 rounded-2xl border transition-all ${
                step.captureStatus === 'live_capture'
                  ? 'bg-white/90 border-emerald-500/30'
                  : 'bg-white/70 border-amber-500/40'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-xs text-[#EC5478]">
                      {step.stepNumber}
                    </span>
                    <span className="font-bold text-[#2C1030]">{step.title}</span>
                  </div>
                  <p className="text-xs text-[#806C80]">{step.caption}</p>
                  {step.captureNotes && (
                    <p className="text-[11px] text-amber-900 font-mono bg-amber-50 p-1.5 rounded-lg border border-amber-200 mt-1">
                      📸 Capture note: {step.captureNotes}
                    </p>
                  )}
                </div>

                <span
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 flex items-center gap-1 ${
                    step.captureStatus === 'live_capture'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {step.captureStatus === 'live_capture' ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Live Capture
                    </>
                  ) : (
                    <>
                      <Clock className="w-3 h-3 text-amber-600" />
                      Ready for Capture
                    </>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Guidance */}
        <div className="px-6 py-4 bg-[#F5E6D3] border-t border-[#2C1030]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#806C80] gap-2">
          <span className="flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-[#FF9B36]" />
            Recommended screenshot resolution: 1920×1080 or native 100% DPI PNG
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[#2C1030] text-white rounded-xl font-bold hover:bg-[#431B48] transition-colors cursor-pointer"
          >
            Close Checklist
          </button>
        </div>
      </div>
    </div>
  );
};

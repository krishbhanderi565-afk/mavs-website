import React, { useState } from 'react';
import { Sparkles, Copy, Check, ExternalLink, RefreshCw, AlertCircle, ShieldCheck, HelpCircle } from 'lucide-react';
import { buildMithiPrompt } from '../lib/promptBuilder';
import type { ScriptEnhancerInput } from '../lib/promptBuilder';
import { copyToClipboard } from '../lib/clipboard';
import { SUPPORTED_LANGUAGES } from '../data/languages';

const CONTENT_TYPES = [
  'YouTube Video',
  'Instagram Reel / Short',
  'Educational / Tutorial',
  'Storytelling / Fiction',
  'Advertisement / Commercial',
  'Other'
];

const TONES = [
  'Natural',
  'Energetic',
  'Professional',
  'Emotional',
  'Conversational'
];

export const ScriptEnhancer: React.FC = () => {
  const [script, setScript] = useState('');
  const [language, setLanguage] = useState('Hindi (हिन्दी)');
  const [contentType, setContentType] = useState('YouTube Video');
  const [tone, setTone] = useState('Natural');
  const [duration, setDuration] = useState('60 seconds');
  const [additionalNotes, setAdditionalNotes] = useState('');

  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!script.trim()) {
      setValidationError('Please enter your script text before preparing the prompt.');
      return;
    }
    setValidationError(null);

    const inputData: ScriptEnhancerInput = {
      script,
      language,
      contentType,
      tone,
      duration,
      additionalNotes
    };

    const promptText = buildMithiPrompt(inputData);
    setGeneratedPrompt(promptText);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!generatedPrompt) return;
    const success = await copyToClipboard(generatedPrompt);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleReset = () => {
    setScript('');
    setAdditionalNotes('');
    setGeneratedPrompt(null);
    setValidationError(null);
  };

  const loadSample = () => {
    setScript(`Welcome back to our channel! In today's video, we are exploring 5 key habits that will help you stay focused, beat procrastination, and achieve your creative goals this year. Make sure you watch till the very end for our bonus tip.`);
    setLanguage('Hindi (हिन्दी)');
    setContentType('YouTube Video');
    setTone('Conversational');
    setDuration('45 seconds');
    setValidationError(null);
  };

  return (
    <div className="py-12 md:py-20 bg-[#FAEEDE] min-h-[calc(100vh-80px)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9DDE2] border border-[#EC5478]/30 text-xs font-bold text-[#EC5478] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Browser-Side Preprocessing Tool</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#2C1030] tracking-tight">
            Script Enhancer for MAVS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#806C80] leading-relaxed">
            Format your written ideas into natural, breathless, spoken-ready dialogue for Mithi v1 Flash. Runs entirely in your browser with zero server uploads and no API key required.
          </p>
        </div>

        {/* Privacy Callout Banner */}
        <div className="mb-8 rounded-2xl bg-white/70 border border-emerald-500/20 p-4 flex items-start gap-3 shadow-2xs">
          <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-[#2C1030] leading-relaxed">
            <span className="font-bold text-emerald-800">100% Client-Side Privacy: </span>
            Your script is processed locally in your browser memory to construct the optimized prompt. MAVS does not upload your script to any backend server, log it to a database, or store your text.
          </div>
        </div>

        {/* Main Grid: Form on Left, Output on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Input Form (7 cols) */}
          <div className="lg:col-span-7 bg-white/90 rounded-3xl p-6 sm:p-8 border border-[#2C1030]/10 shadow-xs">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2C1030]/10">
              <h2 className="text-xl font-bold text-[#2C1030] flex items-center gap-2">
                <span>Script & Dialogue Settings</span>
              </h2>
              <button
                type="button"
                onClick={loadSample}
                className="text-xs font-semibold text-[#EC5478] hover:text-[#2C1030] underline underline-offset-2 transition-colors"
              >
                Load Sample Script
              </button>
            </div>

            <form onSubmit={handleGenerate} className="space-y-5">
              {/* Script Textarea */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label htmlFor="originalScript" className="block text-xs font-bold uppercase tracking-wider text-[#2C1030]">
                    Original Script / Text <span className="text-[#EC5478]">*</span>
                  </label>
                  <span className="text-xs text-[#806C80] font-mono">
                    {script.length} characters • ~{Math.ceil(script.split(/\s+/).filter(Boolean).length / 2.5)}s estimated
                  </span>
                </div>
                <textarea
                  id="originalScript"
                  rows={6}
                  value={script}
                  onChange={(e) => setScript(e.target.value)}
                  placeholder="Enter your drafted script, notes, or spoken draft here in English or your native language..."
                  className="w-full p-4 rounded-2xl bg-[#FAEEDE]/40 border border-[#2C1030]/20 text-[#2C1030] placeholder-[#806C80]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#EC5478] focus:border-transparent transition-all"
                  aria-required="true"
                />
              </div>

              {validationError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Language & Content Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="targetLanguage" className="block text-xs font-bold uppercase tracking-wider text-[#2C1030] mb-1.5">
                    Target Language
                  </label>
                  <select
                    id="targetLanguage"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#FAEEDE]/40 border border-[#2C1030]/20 text-sm text-[#2C1030] font-medium focus:outline-none focus:ring-2 focus:ring-[#EC5478]"
                  >
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <option key={lang.id} value={`${lang.name} (${lang.nativeName})`}>
                        {lang.name} — {lang.nativeName}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contentType" className="block text-xs font-bold uppercase tracking-wider text-[#2C1030] mb-1.5">
                    Content Format
                  </label>
                  <select
                    id="contentType"
                    value={contentType}
                    onChange={(e) => setContentType(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#FAEEDE]/40 border border-[#2C1030]/20 text-sm text-[#2C1030] font-medium focus:outline-none focus:ring-2 focus:ring-[#EC5478]"
                  >
                    {CONTENT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tone & Duration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="desiredTone" className="block text-xs font-bold uppercase tracking-wider text-[#2C1030] mb-1.5">
                    Spoken Tone
                  </label>
                  <select
                    id="desiredTone"
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#FAEEDE]/40 border border-[#2C1030]/20 text-sm text-[#2C1030] font-medium focus:outline-none focus:ring-2 focus:ring-[#EC5478]"
                  >
                    {TONES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="durationInput" className="block text-xs font-bold uppercase tracking-wider text-[#2C1030] mb-1.5">
                    Target Duration
                  </label>
                  <input
                    id="durationInput"
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="e.g. 30s, 60 seconds, 2 mins"
                    className="w-full p-3 rounded-xl bg-[#FAEEDE]/40 border border-[#2C1030]/20 text-sm text-[#2C1030] focus:outline-none focus:ring-2 focus:ring-[#EC5478]"
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label htmlFor="additionalNotes" className="block text-xs font-bold uppercase tracking-wider text-[#2C1030] mb-1.5">
                  Additional Notes (Optional)
                </label>
                <input
                  id="additionalNotes"
                  type="text"
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  placeholder="e.g. Pronounce technical terms simply, include pauses after key names"
                  className="w-full p-3 rounded-xl bg-[#FAEEDE]/40 border border-[#2C1030]/20 text-sm text-[#2C1030] focus:outline-none focus:ring-2 focus:ring-[#EC5478]"
                />
              </div>

              {/* Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#2C1030] hover:bg-[#431B48] text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#FF9B36]" />
                  <span>Prepare My Script</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto py-3.5 px-5 rounded-full bg-white hover:bg-gray-50 text-[#806C80] font-semibold text-sm border border-[#2C1030]/15 transition-colors flex items-center justify-center gap-1.5"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Reset</span>
                </button>
              </div>
            </form>
          </div>

          {/* Output & Instructions (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/90 rounded-3xl p-6 sm:p-7 border border-[#2C1030]/10 shadow-xs">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#2C1030]/10">
                <h3 className="font-bold text-base text-[#2C1030] flex items-center gap-2">
                  <span>Generated AI Prompt</span>
                </h3>
                {generatedPrompt && (
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md font-semibold">
                    Ready to Copy
                  </span>
                )}
              </div>

              {generatedPrompt ? (
                <div className="space-y-4">
                  <div className="relative">
                    <pre className="p-4 rounded-2xl bg-[#2C1030] text-[#FAEEDE] text-xs font-mono whitespace-pre-wrap max-h-80 overflow-y-auto leading-relaxed border border-[#2C1030]/40">
                      {generatedPrompt}
                    </pre>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs ${
                        copied
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#EC5478] hover:bg-[#d94266] text-white active:scale-95'
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Prompt</span>
                        </>
                      )}
                    </button>

                    <a
                      href="https://chatgpt.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-[#2C1030] hover:bg-[#431B48] text-white flex items-center justify-center gap-1.5 transition-all shadow-xs"
                    >
                      <span>Open ChatGPT</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#FF9B36]" />
                    </a>
                  </div>

                  <p className="text-[11px] text-[#806C80] text-center">
                    Copy the prompt, open ChatGPT in a new tab, paste it, and run. Then copy the refined text straight into MAVS!
                  </p>
                </div>
              ) : (
                <div className="py-12 px-4 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAEEDE] text-[#806C80] flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-6 h-6 text-[#EC5478]" />
                  </div>
                  <h4 className="font-bold text-sm text-[#2C1030] mb-1">Prompt Output Panel</h4>
                  <p className="text-xs text-[#806C80] max-w-xs mx-auto">
                    Fill in your script parameters on the left and click &quot;Prepare My Script&quot; to build an optimized prompt.
                  </p>
                </div>
              )}
            </div>

            {/* How to Use Callout Box */}
            <div className="bg-[#F9DDE2]/60 rounded-3xl p-6 border border-[#EC5478]/20 text-xs text-[#2C1030] space-y-3">
              <h4 className="font-bold text-sm text-[#2C1030] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#EC5478]" />
                <span>How This Enhancer Works</span>
              </h4>
              <ol className="list-decimal list-inside space-y-1.5 text-[#2C1030]/85 leading-relaxed">
                <li>We construct a specialized linguistic prompt containing your script and constraints.</li>
                <li>You click <strong>Copy Prompt</strong> and open <strong>ChatGPT</strong>.</li>
                <li>Paste the prompt. ChatGPT rewrites your script with natural pause punctuation and phonetic clarity.</li>
                <li>Paste the returned dialogue into MAVS on Windows and hit <strong>Generate Voiceover</strong>!</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

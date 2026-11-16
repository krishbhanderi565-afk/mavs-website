import React from 'react';
import { Download, Laptop, HelpCircle, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OFFICIAL_CONTACT_EMAIL } from '../data/platforms';

export const GettingStarted: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Download the Windows Installer',
      desc: 'Download the verified MAVS-Setup-x64.exe installer from our Downloads page or the official GitHub repository.',
      details: 'Ensure you have at least 4 GB free disk space for the studio application and the local Mithi v1 Flash model weights.'
    },
    {
      num: '02',
      title: 'Run the Setup & Bypass SmartScreen',
      desc: 'Double-click MAVS-Setup-x64.exe to launch the installer.',
      details: 'If Windows SmartScreen displays "Windows protected your PC", click "More info" and select "Run anyway". This occurs because MAVS is an independent open-source release without an enterprise EV certificate.'
    },
    {
      num: '03',
      title: 'First Launch & Automatic Weights Fetch',
      desc: 'Open MAVS from your Desktop or Start Menu.',
      details: 'On the very first launch, MAVS connects to Hugging Face to verify and download the ~239 MB Mithi v1 Flash model weights. This takes approximately 1–3 minutes depending on your internet connection. Once completed, all subsequent launches run 100% offline.'
    },
    {
      num: '04',
      title: 'Select Language & Voice Persona',
      desc: 'Choose your desired language from the 11 supported Indic languages.',
      details: 'Toggle between Satvik (articulate, grounded male voice) or Charvi (gentle, warm female voice).'
    },
    {
      num: '05',
      title: 'Paste Your Script & Generate',
      desc: 'Enter your dialogue or narration text into the studio editor.',
      details: 'Click "Generate Voiceover". The local PyTorch CPU engine processes the phonetics and acoustic flow. A progress bar will reflect local inference.'
    },
    {
      num: '06',
      title: 'Listen & Export Lossless WAV Audio',
      desc: 'Preview the synthesized speech using the built-in waveform player.',
      details: 'Click "Download WAV" to save the uncompressed 24 kHz 16-bit Mono PCM file. You can import this file directly into video editing software like Premiere, DaVinci Resolve, or CapCut.'
    }
  ];

  const troubleshooting = [
    {
      problem: 'Windows SmartScreen blocks the installer',
      solution: 'Click "More info" on the blue Windows Defender dialog, then click "Run anyway". You can also verify the SHA-256 checksum on our Downloads page.'
    },
    {
      problem: 'First launch seems stuck on "Downloading Model"',
      solution: 'Ensure your internet connection is active during the initial launch so the ~239 MB model weights can be downloaded from Hugging Face. Once downloaded, you will never need internet access again.'
    },
    {
      problem: 'Backend indicator shows "Backend Disconnected"',
      solution: 'MAVS uses an automatic port supervisor. If an antivirus software blocks localhost communication, add an exception for MAVS on 127.0.0.1 or restart the application.'
    },
    {
      problem: 'Audio generation is slower on older laptops',
      solution: 'MAVS uses multi-threaded CPU execution. On older 2-core or 4-core processors, generating speech for long scripts (200+ words) may take 15–30 seconds. For faster results, generate paragraph by paragraph.'
    },
    {
      problem: 'Text pronunciation sounds awkward or unnatural',
      solution: 'Use our free in-browser Script Enhancer tool to add natural breath punctuation (commas and periods) and expand complex abbreviations or numbers into written words.'
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-[#FAEEDE] min-h-[calc(100vh-80px)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9DDE2] border border-[#EC5478]/30 text-xs font-bold text-[#EC5478] mb-3">
            <Laptop className="w-3.5 h-3.5" />
            <span>Installation & User Manual</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#2C1030] tracking-tight">
            Getting Started with MAVS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#806C80] leading-relaxed">
            Follow this step-by-step guide to install MAVS on Windows, configure your first voiceover, and export studio audio.
          </p>
        </div>

        {/* Step by Step Sequence */}
        <div className="space-y-6 mb-16">
          {steps.map((st, i) => (
            <div
              key={i}
              className="bg-white/90 rounded-3xl p-6 sm:p-8 border border-[#2C1030]/10 shadow-xs flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#2C1030] text-[#FF9B36] font-mono font-bold text-lg flex items-center justify-center flex-shrink-0 shadow-2xs">
                {st.num}
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-bold text-[#2C1030]">{st.title}</h3>
                <p className="text-sm text-[#2C1030] font-medium leading-relaxed">{st.desc}</p>
                <p className="text-xs text-[#806C80] leading-relaxed pt-1 border-t border-[#2C1030]/5">
                  {st.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SmartScreen Visual Callout */}
        <div className="mb-16 rounded-3xl p-6 sm:p-8 bg-amber-50/80 border border-amber-300 text-amber-950 flex flex-col sm:flex-row gap-4 items-start shadow-xs">
          <ShieldAlert className="w-7 h-7 text-amber-600 flex-shrink-0 mt-1" />
          <div className="space-y-2 text-xs sm:text-sm">
            <h4 className="font-bold text-base text-amber-900">
              Important: Windows SmartScreen Instructions
            </h4>
            <p className="leading-relaxed">
              When launching <code>MAVS-Setup-x64.exe</code> for the first time, Microsoft Defender SmartScreen might show an alert dialog saying: <em>&quot;Windows protected your PC&quot;</em>.
            </p>
            <p className="leading-relaxed">
              <strong>How to resolve:</strong> Click the small text link labeled <strong>&quot;More info&quot;</strong>, and then click the button labeled <strong>&quot;Run anyway&quot;</strong>. MAVS is completely safe, transparent, and open-source.
            </p>
          </div>
        </div>

        {/* Troubleshooting Accordion */}
        <div className="bg-white/90 rounded-3xl p-8 border border-[#2C1030]/10 shadow-xs mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-[#F9DDE2] text-[#EC5478] flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#2C1030]">Common Questions & Troubleshooting</h3>
              <p className="text-xs text-[#806C80]">Quick solutions for installation and runtime scenarios</p>
            </div>
          </div>

          <div className="space-y-4">
            {troubleshooting.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#FAEEDE]/40 border border-[#2C1030]/10 space-y-1.5"
              >
                <h4 className="font-bold text-sm text-[#2C1030] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#EC5478]" />
                  <span>{item.problem}</span>
                </h4>
                <p className="text-xs text-[#806C80] leading-relaxed pl-4">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#2C1030]/10 text-xs text-center text-[#806C80]">
            Still experiencing an issue? Email Krish Bhanderi at{' '}
            <a href={`mailto:${OFFICIAL_CONTACT_EMAIL}`} className="font-bold text-[#EC5478] hover:underline">
              {OFFICIAL_CONTACT_EMAIL}
            </a>
          </div>
        </div>

        {/* Next Steps CTA */}
        <div className="text-center">
          <Link
            to="/download"
            className="inline-flex items-center gap-2 bg-[#2C1030] hover:bg-[#431B48] text-white text-sm font-bold px-7 py-3.5 rounded-full shadow-md transition-all"
          >
            <Download className="w-4 h-4 text-[#FF9B36]" />
            <span>Ready? Go to Downloads</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

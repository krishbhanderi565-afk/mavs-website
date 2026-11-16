import React, { useState } from 'react';
import { Download, CheckCircle2, Clock, ShieldCheck, Copy, Check, FileCode, AlertTriangle, ArrowRight, Laptop, UploadCloud, ExternalLink, Info } from 'lucide-react';
import { PLATFORMS_CONFIG } from '../data/platforms';
import { WINDOWS_RELEASE_CONFIG } from '../data/releases';
import { copyToClipboard } from '../lib/clipboard';
import { Link } from 'react-router-dom';

export const Downloads: React.FC = () => {
  const [checksumCopied, setChecksumCopied] = useState(false);
  const [showPublishGuide, setShowPublishGuide] = useState(false);

  const handleCopyChecksum = async () => {
    if (!WINDOWS_RELEASE_CONFIG.sha256) return;
    const success = await copyToClipboard(WINDOWS_RELEASE_CONFIG.sha256);
    if (success) {
      setChecksumCopied(true);
      setTimeout(() => setChecksumCopied(false), 3000);
    }
  };

  const isLive = WINDOWS_RELEASE_CONFIG.isPublished && Boolean(WINDOWS_RELEASE_CONFIG.downloadUrl);

  return (
    <div className="py-12 md:py-20 bg-[#FAEEDE] min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-[#2C1030]/10 text-xs font-bold text-[#2C1030] shadow-2xs mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Official Desktop Releases</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#2C1030] tracking-tight">
            Download MAVS Studio
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#806C80] leading-relaxed">
            MAVS follows a Windows-first release strategy. Verified installer binaries are distributed through GitHub Releases.
          </p>
        </div>

        {/* Primary Windows Download Card */}
        <div className="mb-14 rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-white via-white to-[#F9DDE2]/50 border-2 border-[#2C1030]/20 shadow-lg relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2.5 flex-wrap">
                {isLive ? (
                  <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Available Platform
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full border border-amber-300">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    Installer Compiled • Pending GitHub Upload
                  </span>
                )}
                {WINDOWS_RELEASE_CONFIG.version && (
                  <span className="text-xs font-mono font-bold text-[#806C80] bg-[#FAEEDE] px-2.5 py-1 rounded-full">
                    {WINDOWS_RELEASE_CONFIG.version} ({WINDOWS_RELEASE_CONFIG.releaseDate})
                  </span>
                )}
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C1030] tracking-tight">
                MAVS for Windows
              </h2>

              <p className="text-sm font-semibold text-[#2C1030]">
                Available for Windows 10 and Windows 11.
              </p>

              <p className="text-xs sm:text-sm text-[#806C80] leading-relaxed">
                Standalone installer containing the full desktop studio shell, UI frontend, and automated Python runtime supervisor.
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2">
                <div className="p-2.5 rounded-xl bg-[#FAEEDE]/60 border border-[#2C1030]/10">
                  <span className="text-[#806C80] block text-[10px] uppercase font-semibold">Architecture</span>
                  <span className="font-bold text-[#2C1030]">{WINDOWS_RELEASE_CONFIG.architecture}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAEEDE]/60 border border-[#2C1030]/10">
                  <span className="text-[#806C80] block text-[10px] uppercase font-semibold">Format</span>
                  <span className="font-bold text-[#2C1030]">{WINDOWS_RELEASE_CONFIG.format}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAEEDE]/60 border border-[#2C1030]/10">
                  <span className="text-[#806C80] block text-[10px] uppercase font-semibold">Installer Name</span>
                  <span className="font-bold text-[#2C1030] truncate block">{WINDOWS_RELEASE_CONFIG.installerName}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAEEDE]/60 border border-[#2C1030]/10">
                  <span className="text-[#806C80] block text-[10px] uppercase font-semibold">File Size</span>
                  <span className="font-bold text-[#2C1030]">{WINDOWS_RELEASE_CONFIG.fileSize}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons Column */}
            <div className="w-full lg:w-auto flex-shrink-0 flex flex-col gap-3 min-w-[260px]">
              {isLive ? (
                <a
                  href={WINDOWS_RELEASE_CONFIG.downloadUrl!}
                  download={WINDOWS_RELEASE_CONFIG.installerName}
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#2C1030] hover:bg-[#431B48] text-white text-base font-bold px-8 py-4 rounded-2xl shadow-md hover:shadow-xl transition-all active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#EC5478]"
                >
                  <Download className="w-5 h-5 text-[#FF9B36] group-hover:-translate-y-0.5 transition-transform" />
                  <span>Download for Windows</span>
                </a>
              ) : (
                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-gray-100 text-gray-500 border border-gray-300 text-sm font-bold px-6 py-4 rounded-2xl cursor-not-allowed select-none"
                  >
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>Installer not yet published</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowPublishGuide(!showPublishGuide)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#2C1030] text-white text-xs font-semibold py-2.5 px-4 rounded-xl hover:bg-[#431B48] transition-colors"
                  >
                    <UploadCloud className="w-3.5 h-3.5 text-[#FF9B36]" />
                    <span>{showPublishGuide ? 'Hide Release Steps' : 'How to Publish on GitHub'}</span>
                  </button>
                </div>
              )}

              <Link
                to="/getting-started"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F9DDE2] hover:bg-[#f3cbd3] text-[#2C1030] text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors text-center"
              >
                <Laptop className="w-4 h-4 text-[#EC5478]" />
                <span>Getting Started Guide</span>
              </Link>

              <a
                href={WINDOWS_RELEASE_CONFIG.releasesPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs text-[#806C80] hover:text-[#2C1030] underline underline-offset-2 transition-colors pt-1 flex items-center justify-center gap-1"
              >
                <span>GitHub Releases Page</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Model Note Below the Button */}
          <div className="mt-6 p-4 rounded-2xl bg-[#FAEEDE]/70 border border-[#2C1030]/10 flex items-start gap-3 text-xs text-[#2C1030]">
            <Info className="w-4 h-4 text-[#EC5478] flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Note: </strong>{WINDOWS_RELEASE_CONFIG.modelFirstLaunchNote}
            </p>
          </div>

          {/* SHA-256 Checksum Display */}
          {WINDOWS_RELEASE_CONFIG.sha256 && (
            <div className="mt-6 pt-6 border-t border-[#2C1030]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 overflow-hidden text-ellipsis">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-bold text-[#2C1030]">SHA-256 Checksum:</span>
                <code className="font-mono text-[11px] text-[#806C80] bg-white px-2 py-1 rounded border border-[#2C1030]/10 truncate max-w-xs sm:max-w-md">
                  {WINDOWS_RELEASE_CONFIG.sha256}
                </code>
              </div>
              <button
                type="button"
                onClick={handleCopyChecksum}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#2C1030]/15 text-[#2C1030] font-semibold text-xs hover:bg-gray-50 transition-colors"
              >
                {checksumCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied Hash</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#806C80]" />
                    <span>Copy Checksum</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* GitHub Releases Step-by-Step Instruction Panel (if opened) */}
        {showPublishGuide && (
          <div className="mb-14 rounded-3xl p-6 sm:p-8 bg-white border-2 border-[#EC5478]/30 shadow-md animate-fadeIn">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#2C1030]/10">
              <div className="flex items-center gap-2">
                <UploadCloud className="w-5 h-5 text-[#EC5478]" />
                <h3 className="font-bold text-base text-[#2C1030]">How to Publish the Windows Installer to GitHub Releases</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPublishGuide(false)}
                className="text-xs text-[#806C80] hover:text-[#2C1030]"
              >
                Close
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#806C80] mb-4 leading-relaxed">
              Your genuine installer is ready on your machine. To make it downloadable by visitors worldwide without committing a large 500MB binary into the git repository:
            </p>

            <ol className="list-decimal list-inside space-y-2.5 text-xs text-[#2C1030] leading-relaxed">
              <li>
                Open GitHub Releases for your repository:{' '}
                <a
                  href={`${WINDOWS_RELEASE_CONFIG.repoUrl}/releases/new`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#EC5478] underline"
                >
                  Create New Release on GitHub
                </a>
              </li>
              <li>
                Set the Tag version to: <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono font-bold">v1.0.0</code>
              </li>
              <li>
                Set the Release Title to: <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono font-bold">MAVS v1.0.0 — Initial Windows Release</code>
              </li>
              <li>
                Drag &amp; drop your installer file into the binary asset box:
                <br />
                <code className="text-[11px] bg-[#FAEEDE] text-[#2C1030] p-1.5 rounded block mt-1 font-mono break-all">
                  C:\Users\Jayesh Bhanderi\Desktop\MAVS software\Windows\MAVS-Setup-x64.exe
                </code>
              </li>
              <li>
                Click <strong>&quot;Publish release&quot;</strong>. Once published, the direct asset link{' '}
                <code className="text-[11px] text-blue-700 font-mono break-all">{WINDOWS_RELEASE_CONFIG.expectedDownloadUrl}</code>{' '}
                becomes immediately live.
              </li>
              <li>
                In <code className="font-mono text-emerald-800">src/data/releases.ts</code>, set <code className="font-mono font-bold text-emerald-800">IS_GITHUB_RELEASE_PUBLISHED = true</code>. The website download button will instantly become active!
              </li>
            </ol>
          </div>
        )}

        {/* Platform Status Matrix (All 4 Platforms) */}
        <div className="mb-16">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#2C1030]">
              Multi-Platform Availability Matrix
            </h3>
            <p className="text-xs sm:text-sm text-[#806C80]">
              Windows is our initial release platform. macOS, Android, and iOS are under active development and remain disabled.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLATFORMS_CONFIG.map((platform) => {
              const isWin = platform.id === 'windows';
              return (
                <div
                  key={platform.id}
                  className={`rounded-3xl p-6 border transition-all flex flex-col justify-between ${
                    isWin
                      ? 'bg-white border-[#2C1030]/20 shadow-md ring-2 ring-[#2C1030]/10'
                      : 'bg-white/50 border-[#2C1030]/10 opacity-80'
                  }`}
                >
                  <div>
                    {/* Header with status pill */}
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-extrabold text-lg text-[#2C1030]">
                        {platform.name}
                      </h4>
                      {isWin ? (
                        isLive ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                            <CheckCircle2 className="w-3 head-3 text-emerald-600" />
                            Available
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                            <Clock className="w-3 h-3 text-amber-600" />
                            Release Ready
                          </span>
                        )
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#806C80] bg-[#FAEEDE] px-2.5 py-0.5 rounded-full border border-[#2C1030]/10">
                          <Clock className="w-3 h-3 text-[#FF9B36]" />
                          Coming Soon
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[#806C80] leading-relaxed mb-4">
                      {platform.summary}
                    </p>

                    <div className="space-y-2 text-xs mb-6">
                      <div className="flex justify-between py-1 border-b border-[#2C1030]/5">
                        <span className="text-[#806C80]">Architecture</span>
                        <span className="font-semibold text-[#2C1030]">
                          {platform.architectures.join(', ')}
                        </span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#2C1030]/5">
                        <span className="text-[#806C80]">Installer Format</span>
                        <span className="font-semibold text-[#2C1030]">
                          {platform.installerFormat}
                        </span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#2C1030]/5">
                        <span className="text-[#806C80]">Target OS</span>
                        <span className="font-semibold text-[#2C1030]">
                          {platform.targetOs}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div>
                    {isWin ? (
                      isLive ? (
                        <a
                          href={platform.downloadUrl!}
                          download={WINDOWS_RELEASE_CONFIG.installerName}
                          className="w-full inline-flex items-center justify-center gap-2 bg-[#2C1030] hover:bg-[#431B48] text-white text-xs font-bold py-3 px-4 rounded-xl shadow-xs transition-colors"
                        >
                          <Download className="w-4 h-4 text-[#FF9B36]" />
                          <span>Download .exe Installer</span>
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          aria-disabled="true"
                          className="w-full inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-500 border border-gray-200 text-xs font-bold py-3 px-4 rounded-xl cursor-not-allowed select-none"
                        >
                          <Clock className="w-3.5 h-3.5 text-gray-400" />
                          <span>Installer not yet published</span>
                        </button>
                      )
                    ) : (
                      <button
                        type="button"
                        disabled
                        aria-disabled="true"
                        className="w-full inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-400 text-xs font-semibold py-3 px-4 rounded-xl cursor-not-allowed border border-gray-200 select-none"
                      >
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        <span>Coming Soon</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* System Requirements & Verification Guidance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-3xl bg-white/80 border border-[#2C1030]/10">
            <h4 className="font-bold text-base text-[#2C1030] mb-3 flex items-center gap-2">
              <FileCode className="w-4 h-4 text-[#EC5478]" />
              <span>Recommended Hardware Specifications (Windows)</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#806C80]">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EC5478] mt-1.5" />
                <span><strong>OS:</strong> {WINDOWS_RELEASE_CONFIG.minSpecs.os}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EC5478] mt-1.5" />
                <span><strong>CPU:</strong> {WINDOWS_RELEASE_CONFIG.minSpecs.cpu}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EC5478] mt-1.5" />
                <span><strong>RAM:</strong> {WINDOWS_RELEASE_CONFIG.minSpecs.ram}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EC5478] mt-1.5" />
                <span><strong>Disk:</strong> {WINDOWS_RELEASE_CONFIG.minSpecs.storage}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EC5478] mt-1.5" />
                <span><strong>GPU:</strong> {WINDOWS_RELEASE_CONFIG.minSpecs.gpu}</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-white/80 border border-[#2C1030]/10">
            <h4 className="font-bold text-base text-[#2C1030] mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#FF9B36]" />
              <span>Windows Defender / SmartScreen Notice</span>
            </h4>
            <p className="text-xs text-[#806C80] leading-relaxed mb-3">
              Because MAVS is an independently developed open-source community release without an enterprise EV code-signing certificate, Windows SmartScreen may show an informational &quot;Windows protected your PC&quot; alert.
            </p>
            <p className="text-xs text-[#2C1030] font-medium leading-relaxed">
              To proceed: click <strong>&quot;More info&quot;</strong> and then click <strong>&quot;Run anyway&quot;</strong>. You can verify the executable against the SHA-256 checksum published above.
            </p>
            <div className="mt-4 pt-3 border-t border-[#2C1030]/5">
              <Link
                to="/getting-started"
                className="text-xs font-bold text-[#EC5478] hover:text-[#2C1030] inline-flex items-center gap-1 transition-colors"
              >
                <span>Read step-by-step setup documentation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

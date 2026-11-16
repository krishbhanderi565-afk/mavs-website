export interface WindowsReleaseConfig {
  platform: 'Windows';
  status: 'available' | 'unavailable' | 'not_published';
  isPublished: boolean;
  version: string | null;
  architecture: string;
  installerName: string;
  installerFilename: string; // alias
  format: string;
  downloadUrl: string | null;
  expectedDownloadUrl: string;
  releasesPageUrl: string;
  repoUrl: string;
  fileSizeBytes: number;
  fileSize: string;
  fileSizeFormatted: string; // alias
  sha256: string | null;
  releaseDate: string | null;
  targetOs: string;
  modelFirstLaunchNote: string;
  minSpecs: {
    os: string;
    cpu: string;
    ram: string;
    storage: string;
    gpu: string;
  };
  releaseNotes: string[];
}

export const GITHUB_REPO_URL = 'https://github.com/krishbhanderi565-afk/mithi-voice-studio';
export const GITHUB_RELEASES_URL = 'https://github.com/krishbhanderi565-afk/mithi-voice-studio/releases';
export const EXPECTED_INSTALLER_URL = 'https://github.com/krishbhanderi565-afk/mithi-voice-studio/releases/download/v1.0.1/MAVS-Setup-x64.exe';

/**
 * Verified release metadata for MAVS v1.0.1:
 * Installer: MAVS-Setup-x64.exe
 * Size: 313,573,029 bytes (~299.1 MB)
 * SHA-256: E10289D4B6D726F5B2025394156D181346DA72B0F3EC33E97F31F1A9F6A656AD
 * 
 * GitHub release v1.0.1 published and verified.
 */
const IS_GITHUB_RELEASE_PUBLISHED = true;

export const WINDOWS_RELEASE_CONFIG: WindowsReleaseConfig = {
  platform: 'Windows',
  status: IS_GITHUB_RELEASE_PUBLISHED ? 'available' : 'not_published',
  isPublished: IS_GITHUB_RELEASE_PUBLISHED,
  version: 'v1.0.1',
  architecture: 'x64',
  installerName: 'MAVS-Setup-x64.exe',
  installerFilename: 'MAVS-Setup-x64.exe',
  format: 'Windows Installer (.exe)',
  downloadUrl: IS_GITHUB_RELEASE_PUBLISHED ? EXPECTED_INSTALLER_URL : null,
  expectedDownloadUrl: EXPECTED_INSTALLER_URL,
  releasesPageUrl: GITHUB_RELEASES_URL,
  repoUrl: GITHUB_REPO_URL,
  fileSizeBytes: 313573029,
  fileSize: '299.1 MB',
  fileSizeFormatted: '299.1 MB',
  sha256: 'E10289D4B6D726F5B2025394156D181346DA72B0F3EC33E97F31F1A9F6A656AD',
  releaseDate: 'November 17, 2026',
  targetOs: 'Windows 10 and Windows 11',
  modelFirstLaunchNote: 'The application initializes required neural voice weights (~239 MB) on first launch. Generation runs 100% locally on CPU with zero cloud telemetry.',
  minSpecs: {
    os: 'Windows 10 (64-bit) or Windows 11 (64-bit)',
    cpu: 'Intel Core i3 / AMD Ryzen 3 or equivalent x86_64 processor',
    ram: '8 GB RAM recommended (4 GB minimum)',
    storage: '4 GB free disk space (app + ~239 MB Mithi v1 Flash weights)',
    gpu: 'Not required (CPU multi-threaded inference supported)'
  },
  releaseNotes: [
    'Critical TTS inference performance optimizations with zero-allocation prosody loop and integer math.',
    '4-tier intelligent chunking preventing quadratic decoder latency on unpunctuated or long scripts.',
    'Real-time sentence generation progress indicator with percentage completion and active elapsed timer.',
    'Dedicated safe cancellation button allowing users to abort active generation requests cleanly.',
    'Updated and verified v1.0.1 desktop studio user interface with refreshed control workflows.',
    'Full offline local inference across 11 Indian languages with Satvik and Charvi voices.',
    'Studio-grade 24 kHz 16-bit Mono PCM WAV audio generation and export.'
  ]
};

export const WINDOWS_CURRENT_RELEASE = WINDOWS_RELEASE_CONFIG;

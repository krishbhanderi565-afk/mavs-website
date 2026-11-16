export interface WindowsReleaseConfig {
  platform: 'Windows';
  status: 'available' | 'unavailable' | 'not_published';
  isPublished: boolean; // Set to true once the GitHub release asset is uploaded
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
export const EXPECTED_INSTALLER_URL = 'https://github.com/krishbhanderi565-afk/mithi-voice-studio/releases/latest/download/MAVS-Setup-x64.exe';

/**
 * Verified release metadata from local installer files:
 * 1) C:\Users\Jayesh Bhanderi\Desktop\MAVS software\Windows\MAVS-Setup-x64.exe
 * 2) C:\Users\Jayesh Bhanderi\Desktop\mithi-voice-studio\release\MAVS-Setup-x64.exe
 * Both files are 100% identical.
 * 
 * Set IS_GITHUB_RELEASE_PUBLISHED = true once you publish the release on GitHub.
 */
const IS_GITHUB_RELEASE_PUBLISHED = false;

export const WINDOWS_RELEASE_CONFIG: WindowsReleaseConfig = {
  platform: 'Windows',
  status: IS_GITHUB_RELEASE_PUBLISHED ? 'available' : 'not_published',
  isPublished: IS_GITHUB_RELEASE_PUBLISHED,
  version: 'v1.0.0',
  architecture: 'x64',
  installerName: 'MAVS-Setup-x64.exe',
  installerFilename: 'MAVS-Setup-x64.exe',
  format: 'Windows Installer (.exe)',
  downloadUrl: IS_GITHUB_RELEASE_PUBLISHED ? EXPECTED_INSTALLER_URL : null,
  expectedDownloadUrl: EXPECTED_INSTALLER_URL,
  releasesPageUrl: GITHUB_RELEASES_URL,
  repoUrl: GITHUB_REPO_URL,
  fileSizeBytes: 521626438,
  fileSize: '497.5 MB',
  fileSizeFormatted: '497.5 MB',
  sha256: 'EC18773872F13EA0EB484CD942503D89B6BAC7108777FF5FAE59F7CA98C62710',
  releaseDate: 'November 2026',
  targetOs: 'Windows 10 and Windows 11',
  modelFirstLaunchNote: 'The application may download its required model files during the first launch. Generation performance depends on your system.',
  minSpecs: {
    os: 'Windows 10 (64-bit) or Windows 11 (64-bit)',
    cpu: 'Intel Core i3 / AMD Ryzen 3 or equivalent x86_64 processor',
    ram: '8 GB RAM recommended (4 GB minimum)',
    storage: '4 GB free disk space (app + ~239 MB Mithi v1 Flash weights)',
    gpu: 'Not required (CPU multi-threaded inference supported)'
  },
  releaseNotes: [
    'Official desktop release for Windows 10 & 11 (x64).',
    'Official integration of Mithi v1 Flash 99.1M parameter speech model.',
    'Full support for 11 Indian languages with native text normalization.',
    'Satvik (male) and Charvi (female) acoustic personas.',
    'Studio-grade 24 kHz 16-bit Mono PCM WAV audio generation and export.',
    'Dynamic internal backend lifecycle management and port allocation.',
    '100% offline local inference after initial model weights download.'
  ]
};

export const WINDOWS_CURRENT_RELEASE = WINDOWS_RELEASE_CONFIG;

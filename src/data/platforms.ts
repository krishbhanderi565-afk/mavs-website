import { WINDOWS_RELEASE_CONFIG, GITHUB_REPO_URL, GITHUB_RELEASES_URL } from './releases';
export { GITHUB_REPO_URL, GITHUB_RELEASES_URL, WINDOWS_RELEASE_CONFIG };

export interface PlatformRelease {
  id: 'windows' | 'macos' | 'android' | 'ios';
  name: string;
  badge: 'Available' | 'Coming Soon' | 'Pending GitHub Upload';
  isAvailable: boolean;
  architectures: string[];
  installerFormat: string;
  targetOs: string;
  summary: string;
  downloadUrl?: string | null;
  version?: string | null;
  releaseDate?: string | null;
  fileSize?: string;
  sha256?: string | null;
  minRequirements?: string[];
  releaseNotesUrl?: string;
}

export const OFFICIAL_GITHUB_REPO = GITHUB_REPO_URL;
export const OFFICIAL_GITHUB_RELEASES = GITHUB_RELEASES_URL;
export const OFFICIAL_MODEL_HUGGINGFACE = 'https://huggingface.co/Oomni/mithi-v1-flash';
export const OFFICIAL_CONTACT_EMAIL = 'krishbhanderi565@gmail.com';

export const PLATFORMS_CONFIG: PlatformRelease[] = [
  {
    id: 'windows',
    name: 'Windows',
    badge: WINDOWS_RELEASE_CONFIG.isPublished ? 'Available' : 'Pending GitHub Upload',
    isAvailable: WINDOWS_RELEASE_CONFIG.isPublished,
    architectures: ['x64 (64-bit)'],
    installerFormat: WINDOWS_RELEASE_CONFIG.format,
    targetOs: WINDOWS_RELEASE_CONFIG.targetOs,
    summary: 'The official desktop studio for Windows. Full local synthesis, voice preview, and WAV export.',
    downloadUrl: WINDOWS_RELEASE_CONFIG.downloadUrl,
    version: WINDOWS_RELEASE_CONFIG.version,
    releaseDate: WINDOWS_RELEASE_CONFIG.releaseDate,
    fileSize: WINDOWS_RELEASE_CONFIG.fileSizeFormatted,
    sha256: WINDOWS_RELEASE_CONFIG.sha256,
    minRequirements: [
      'Windows 10 or Windows 11 (64-bit)',
      'x86_64 CPU (Intel Core i3 / AMD Ryzen 3 or higher)',
      '8 GB RAM recommended (4 GB minimum)',
      '4 GB free disk space for local Mithi v1 Flash weights',
      'No dedicated GPU strictly required (CPU inference supported)'
    ],
    releaseNotesUrl: `${GITHUB_RELEASES_URL}/tag/${WINDOWS_RELEASE_CONFIG.version}`
  },
  {
    id: 'macos',
    name: 'macOS',
    badge: 'Coming Soon',
    isAvailable: false,
    architectures: ['Apple Silicon (ARM64)', 'Intel (x64)'],
    installerFormat: '.dmg disk image',
    targetOs: 'macOS 12.0 Monterey or later',
    summary: 'Native macOS studio with CoreAudio integration and Apple Neural Engine acceleration.',
  },
  {
    id: 'android',
    name: 'Android',
    badge: 'Coming Soon',
    isAvailable: false,
    architectures: ['ARM64-v8a', 'armeabi-v7a'],
    installerFormat: 'Android APK / Google Play Package',
    targetOs: 'Android 10.0 or later',
    summary: 'Mobile studio application for on-the-go regional voiceover production.',
  },
  {
    id: 'ios',
    name: 'iOS',
    badge: 'Coming Soon',
    isAvailable: false,
    architectures: ['Universal (iPhone & iPad)'],
    installerFormat: 'Apple App Store',
    targetOs: 'iOS 16.0 or later',
    summary: 'Optimized touch-first multilingual voice generation on iPhone and iPad.',
  }
];

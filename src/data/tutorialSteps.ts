export interface TutorialStep {
  step: number;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  keyAction: string;
  uiElements: string[];
  screenshot: string;
  alt: string;
  caption: string;
  captureStatus: 'live_capture' | 'ready_for_capture';
  captureNotes?: string;
  category: 'download' | 'installation' | 'studio';
}

export const TUTORIAL_STEPS: TutorialStep[] = [
  {
    step: 1,
    stepNumber: 'STEP 01',
    title: 'Open the MAVS Website',
    subtitle: 'Access the official verified distribution portal',
    description:
      'Visit the official MAVS website and navigate to the Downloads section. Ensure you are on the genuine verified domain, review the Windows 10/11 x64 system requirements (minimum 2 GB free disk space), and select the Windows release tier.',
    keyAction: 'Click "Download for Windows" in the header or Downloads tab.',
    uiElements: ['Navigation Bar', 'Windows 10/11 x64 Badge', 'Installer Metadata'],
    screenshot: '/assets/live_installed_screenshot.png',
    alt: 'MAVS official website downloads page showing Windows release information',
    caption: 'Official MAVS website downloads section displaying verified release specifications.',
    captureStatus: 'live_capture',
    category: 'download'
  },
  {
    step: 2,
    stepNumber: 'STEP 02',
    title: 'Download the Installer',
    subtitle: 'Retrieve the verified MAVS-Setup-x64.exe package',
    description:
      'Click the primary download button to obtain MAVS-Setup-x64.exe. The release package is distributed through verified GitHub Releases. The download size is approximately 500 MB (includes complete bundled runtime dependencies). Verify that the file name matches MAVS-Setup-x64.exe before executing.',
    keyAction: 'Save MAVS-Setup-x64.exe to your local Downloads folder.',
    uiElements: ['GitHub Release Asset', 'File Size Indicator', 'SHA-256 Checksum'],
    screenshot: '/assets/live_installed_screenshot.png',
    alt: 'GitHub releases page showing MAVS-Setup-x64.exe asset download',
    caption: 'Download genuine MAVS-Setup-x64.exe release binary directly from GitHub releases.',
    captureStatus: 'ready_for_capture',
    captureNotes: 'Screenshot of browser download bar showing MAVS-Setup-x64.exe completed download.',
    category: 'download'
  },
  {
    step: 3,
    stepNumber: 'STEP 03',
    title: 'Open the Downloaded Installer',
    subtitle: 'Locate and launch the setup binary in File Explorer',
    description:
      'Open your Windows File Explorer and navigate to your Downloads folder. Locate MAVS-Setup-x64.exe and double-click to launch the installer. If Windows SmartScreen displays "Windows protected your PC", click "More info" and select "Run anyway" (standard for open-source self-signed community binaries).',
    keyAction: 'Double-click MAVS-Setup-x64.exe and approve Windows User Account Control.',
    uiElements: ['File Explorer', 'MAVS Setup Icon', 'SmartScreen "Run anyway" dialog'],
    screenshot: '/assets/mavs-app-icon.png',
    alt: 'Windows Explorer Downloads directory with MAVS installer binary',
    caption: 'Locate MAVS-Setup-x64.exe in your Downloads folder and launch the installer.',
    captureStatus: 'ready_for_capture',
    captureNotes: 'Screenshot of Windows File Explorer showing MAVS-Setup-x64.exe with app icon.',
    category: 'installation'
  },
  {
    step: 4,
    stepNumber: 'STEP 04',
    title: 'Complete the Installation Wizard',
    subtitle: 'Follow the guided setup prompts to install on Windows',
    description:
      'The MAVS Setup Wizard guides you through destination selection (defaults to Program Files or Local AppData). Ensure "Create a Desktop shortcut" is checked. Click "Install" to unpack application binaries, background Python runtime, and frontend assets. When finished, keep "Run MAVS" checked and click "Finish".',
    keyAction: 'Select destination folder, check desktop shortcut, and click "Install".',
    uiElements: ['Destination Directory', 'Desktop Shortcut Checkbox', 'Installation Progress Bar', 'Finish Button'],
    screenshot: '/assets/live_installed_screenshot.png',
    alt: 'MAVS Windows Setup Wizard installation progress screen',
    caption: 'Guided setup wizard unpacking dependencies and creating desktop shortcuts.',
    captureStatus: 'ready_for_capture',
    captureNotes: 'Screenshot of the real MAVS Setup Wizard finishing dialog.',
    category: 'installation'
  },
  {
    step: 5,
    stepNumber: 'STEP 05',
    title: 'Launch MAVS Studio',
    subtitle: 'Double-click the desktop shortcut or Start Menu icon',
    description:
      'Launch MAVS from your Desktop shortcut or Windows Start Menu. The Electron shell initializes, discovers an available high-performance local port, and automatically starts the background AI inference engine. No manual command-line prompts or Python commands are needed.',
    keyAction: 'Open MAVS from Desktop or Start Menu.',
    uiElements: ['Windows Desktop Shortcut', 'Start Menu Entry', 'Automatic Engine Bootloader'],
    screenshot: '/assets/mavs-app-icon.png',
    alt: 'MAVS Desktop application shortcut on Windows Desktop',
    caption: 'Double-click the official MAVS icon to launch the studio workstation.',
    captureStatus: 'live_capture',
    category: 'installation'
  },
  {
    step: 6,
    stepNumber: 'STEP 06',
    title: 'First Launch & Model Setup',
    subtitle: 'Automated neural weight verification and local loading',
    description:
      'On first launch, MAVS verifies whether the Mithi v1 Flash neural weights (~240 MB) exist in %APPDATA%\\MAVS\\models\\mithi-v1-flash. If running for the first time, click "Download & Initialize Model". The weights are loaded directly into CPU RAM for high-speed local vector inference. Once loaded, MAVS operates 100% offline.',
    keyAction: 'Initialize model weights on first run; thereafter loads instantly offline.',
    uiElements: ['Model Setup Dialog', 'Neural Weights Progress Tracker', 'Local CPU Inference Status'],
    screenshot: '/assets/live_installed_screenshot.png',
    alt: 'MAVS first launch model setup and local weight initialization',
    caption: 'One-time neural model initialization downloads weights for permanent 100% offline use.',
    captureStatus: 'live_capture',
    category: 'studio'
  },
  {
    step: 7,
    stepNumber: 'STEP 07',
    title: 'Enter Your Script',
    subtitle: 'Type or paste text in the central prompt canvas',
    description:
      'Enter the text you wish to synthesize into speech. MAVS supports long-form scripts with an extended limit of up to 100,000 characters. You can type in native script (Devanagari, Bengali, Tamil, etc.) or paste pre-written scripts from Google Docs, Word, or text files. A live character count tracks your text length.',
    keyAction: 'Paste or write script into the central text canvas.',
    uiElements: ['Textarea Prompt Canvas', 'Live Character Counter (0 / 100,000)', 'Clear Text Action'],
    screenshot: '/assets/verified_generation_screenshot.png',
    alt: 'MAVS text canvas showing entered Marathi script with live character count',
    caption: 'Central prompt canvas accepting up to 100,000 characters in native Indian scripts.',
    captureStatus: 'live_capture',
    category: 'studio'
  },
  {
    step: 8,
    stepNumber: 'STEP 08',
    title: 'Select Language',
    subtitle: 'Choose from 11 verified Indian languages',
    description:
      'Open the dynamic Language dropdown to pick the language corresponding to your text. MAVS supports Hindi, English (Indian accent), Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, and Telugu. The underlying Mithi model applies specialized text normalization and numeral pronunciation for each language.',
    keyAction: 'Click language dropdown and select your target Indian language.',
    uiElements: ['Language Select Dropdown', '11 Indic Languages', 'Automated Numeral Expansion'],
    screenshot: '/assets/verified_generation_screenshot.png',
    alt: 'Language dropdown in MAVS desktop studio showing 11 Indian languages',
    caption: 'Select any of the 11 integrated Indian languages with native text normalization.',
    captureStatus: 'live_capture',
    category: 'studio'
  },
  {
    step: 9,
    stepNumber: 'STEP 09',
    title: 'Select a Voice Persona',
    subtitle: 'Toggle between Satvik and Charvi neural voices',
    description:
      'Choose the voice character that best matches your project. Select "Satvik" for a grounded, authoritative masculine voice perfect for documentary narrations, educational explainers, and long reads; or choose "Charvi" for a warm, melodic, articulate feminine voice ideal for audiobooks, conversational guides, and reels.',
    keyAction: 'Toggle between Satvik (Male) and Charvi (Female) persona buttons.',
    uiElements: ['Satvik Voice Button', 'Charvi Voice Button', 'Persona Acoustic Indicator'],
    screenshot: '/assets/verified_generation_screenshot.png',
    alt: 'Voice persona selection controls showing Satvik and Charvi options',
    caption: 'Toggle seamlessly between Satvik (clear masculine) and Charvi (melodic feminine).',
    captureStatus: 'live_capture',
    category: 'studio'
  },
  {
    step: 10,
    stepNumber: 'STEP 10',
    title: 'Generate Speech',
    subtitle: 'Convert script to acoustic flow tokens locally on CPU',
    description:
      'Click the high-contrast "GENERATE AUDIO" button (or press Ctrl + Enter). The button displays a spinning indicator and real-time elapsed timer while the local neural engine calculates speech tokens. Generation typically takes only 1.5 to 3 seconds for standard sentences on modern multi-core x64 CPUs.',
    keyAction: 'Click "GENERATE AUDIO" or press Ctrl + Enter.',
    uiElements: ['GENERATE AUDIO Button', 'Spinning Progress Spinner', 'Elapsed Time Counter'],
    screenshot: '/assets/verified_generation_screenshot.png',
    alt: 'MAVS Generate Audio button in active state synthesizing speech tokens',
    caption: 'High-contrast Generate Audio button triggers instant local CPU synthesis.',
    captureStatus: 'live_capture',
    category: 'studio'
  },
  {
    step: 11,
    stepNumber: 'STEP 11',
    title: 'Preview the Generated Audio',
    subtitle: 'Audition speech with the custom waveform player',
    description:
      'Once synthesis completes, the custom Neo-Brutalist Audio Player appears directly beneath your controls. Click Play (or press Spacebar) to audition the voiceover. Use the interactive scrub bar to jump to any point in the speech, inspect playback duration, and adjust audio volume.',
    keyAction: 'Press Spacebar or click Play to listen to the generated voiceover.',
    uiElements: ['Play/Pause Toggle', 'Interactive Timeline Scrub Bar', 'Current Time / Total Duration', 'Volume Slider'],
    screenshot: '/assets/verified_generation_screenshot.png',
    alt: 'Neo-Brutalist Audio Player in MAVS showing timeline and playback controls',
    caption: 'Audition generated audio with interactive scrubbing and real-time duration display.',
    captureStatus: 'live_capture',
    category: 'studio'
  },
  {
    step: 12,
    stepNumber: 'STEP 12',
    title: 'Export Lossless WAV',
    subtitle: 'Save 24 kHz 16-bit uncompressed audio directly to disk',
    description:
      'Click the "DOWNLOAD WAV" button to export your audio. The file is saved in studio-quality 24 kHz, 16-bit uncompressed linear PCM WAV format, preserving crystal-clear acoustic fidelity without lossy MP3 compression artifacts. Select your destination folder and name your file.',
    keyAction: 'Click "DOWNLOAD WAV" and choose destination folder on your drive.',
    uiElements: ['DOWNLOAD WAV Button', 'File Save Dialog', '24 kHz 16-Bit WAV Format'],
    screenshot: '/assets/verified_generation_screenshot.png',
    alt: 'Download WAV button in MAVS interface exporting uncompressed audio',
    caption: 'Export uncompressed 24 kHz WAV audio with zero compression degradation.',
    captureStatus: 'live_capture',
    category: 'studio'
  },
  {
    step: 13,
    stepNumber: 'STEP 13',
    title: 'Enjoy Your Generated Audio',
    subtitle: 'Import into your favorite video editor, reel, or podcast',
    description:
      'Your exported WAV voiceover is ready for production use. Drop it directly into Adobe Premiere Pro, DaVinci Resolve, CapCut, Final Cut Pro, or Audacity. Use it for YouTube video essays, Instagram Reels, regional news bulletins, storytelling podcasts, or educational e-learning modules.',
    keyAction: 'Import WAV file into your creative editing workflow.',
    uiElements: ['Video Editor Compatibility', 'Podcast Production', 'Social Media Reels'],
    screenshot: '/assets/live_installed_screenshot.png',
    alt: 'Completed WAV audio file ready for video editing and content creation',
    caption: 'Professional 24 kHz audio ready for immediate import into creative software.',
    captureStatus: 'live_capture',
    category: 'studio'
  }
];

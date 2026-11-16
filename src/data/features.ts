export interface FeatureItem {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  iconName: string;
  badge?: string;
  bullets: string[];
}

export const APPLICATION_FEATURES: FeatureItem[] = [
  {
    id: 'languages',
    title: '11 Indic Languages Supported',
    shortDesc: 'Native speech generation across 11 major Indian languages without complex font or encoding problems.',
    detailedDesc: 'MAVS natively accepts Hindi, Bengali, Marathi, Telugu, Tamil, Gujarati, Kannada, Odia, Malayalam, Punjabi, and Indian English with language-specific text normalization rules.',
    iconName: 'Languages',
    badge: '11 Languages',
    bullets: [
      'Devanagari, Bengali, Dravidian, Gurmukhi, and Odia script support',
      'Integrated Maya Indic text normalization pipeline',
      'Automated numeral-to-word expansion for regional numerals',
      'Accurate punctuation and pause handling'
    ]
  },
  {
    id: 'voices',
    title: 'Satvik & Charvi Personas',
    shortDesc: 'Two carefully tuned neural voices providing articulate masculine and gentle feminine vocal characteristics.',
    detailedDesc: 'Choose between Satvik (a calm, grounded, authoritative voice ideal for narration and education) and Charvi (a melodic, friendly, expressive voice ideal for reels and storytelling).',
    iconName: 'Users',
    badge: '2 Neural Voices',
    bullets: [
      'Satvik: Grounded, articulate, confident male timbre',
      'Charvi: Warm, natural, melodic female timbre',
      'Consistent acoustic characteristics across all 11 languages',
      'Non-autoregressive flow-matching for natural pacing'
    ]
  },
  {
    id: 'offline-inference',
    title: '100% Local Inference',
    shortDesc: 'All speech synthesis runs completely on your local machine using PyTorch CPU optimizations.',
    detailedDesc: 'Once the ~239 MB Mithi v1 Flash neural weights are fetched on initial launch, MAVS requires zero internet connection to generate speech. Your scripts never leave your computer.',
    iconName: 'Cpu',
    badge: 'Private & Offline',
    bullets: [
      'Zero cloud subscriptions or API fees',
      'Optimized multi-threaded PyTorch CPU runtime',
      'No GPU strictly required — runs on standard laptops & desktops',
      'Absolute privacy: your scripts never touch external servers'
    ]
  },
  {
    id: 'wav-export',
    title: 'Studio-Grade 24 kHz WAV Export',
    shortDesc: 'Generate clean, broadcast-ready 24,000 Hz 16-bit Mono PCM WAV files ready for video editing.',
    detailedDesc: 'Export pristine audio directly to your hard drive. Drop the files straight into Premiere Pro, DaVinci Resolve, Final Cut, CapCut, or Audacity without resampling distortion.',
    iconName: 'AudioWaveform',
    badge: '24 kHz PCM',
    bullets: [
      'Lossless 24 kHz 16-bit Mono PCM format',
      'Zero compression artifacts or lossy MP3 degradation',
      'Built-in audio player with waveform scrub bar and volume control',
      'One-click direct file save to your chosen directory'
    ]
  },
  {
    id: 'desktop-experience',
    title: 'Simple Desktop Studio',
    shortDesc: 'An intuitive desktop application that eliminates all terminal commands and environment headaches.',
    detailedDesc: 'No need to set up Python virtual environments, CUDA drivers, or dependency trees. The MAVS desktop installer provides a complete turnkey studio right out of the box.',
    iconName: 'Laptop',
    badge: 'Zero Terminal',
    bullets: [
      'Self-contained executable installer',
      'Automated background runtime supervisor & port allocation',
      'Clean, distraction-free visual interface with real-time feedback',
      'Designed specifically for creators, educators, and storytellers'
    ]
  },
  {
    id: 'open-model',
    title: 'Powered by Mithi v1 Flash',
    shortDesc: 'Built on the 99.1M parameter open-source speech model created and trained by Oomni.',
    detailedDesc: 'MAVS connects the cutting-edge open-source acoustic research of Oomni with a practical, friendly desktop experience for everyday content creators.',
    iconName: 'Sparkles',
    badge: 'Oomni AI Model',
    bullets: [
      '99.1M parameter flow-matching architecture',
      'Apache License 2.0 open neural model',
      'Independent application wrapper built by Krish Bhanderi',
      'Transparent attribution and direct links to Hugging Face'
    ]
  }
];

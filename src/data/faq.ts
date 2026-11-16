export interface FaqItem {
  id: string;
  category: 'general' | 'technical' | 'platforms' | 'audio';
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'what-is-mavs',
    category: 'general',
    question: 'What is MAVS and what does it stand for?',
    answer: 'MAVS stands for Mithi AI Voice Studio. It is an independently developed desktop application designed to make Indian-language AI voice generation accessible to creators, educators, video editors, and storytellers without requiring command-line tools or machine learning configuration.'
  },
  {
    id: 'model-vs-app',
    category: 'general',
    question: 'Is MAVS a new AI model or a desktop application?',
    answer: 'MAVS is the desktop application and workflow interface. The underlying neural speech synthesis model is Mithi v1 Flash, an open-source 99.1M parameter model created and trained by Oomni. MAVS was developed independently by Krish Bhanderi to package, supervise, and present the Mithi model in a friendly, turnkey desktop application.'
  },
  {
    id: 'developer-attribution',
    category: 'general',
    question: 'Who developed MAVS and who created Mithi?',
    answer: 'Krish Bhanderi is the Founder & Developer of MAVS, responsible for the product concept, desktop application, user interface, runtime manager, installer packaging, and documentation. Oomni created and trained the original Mithi v1 Flash neural model (available on Hugging Face under Apache-2.0). MAVS acknowledges Oomni’s foundational machine learning research.'
  },
  {
    id: 'supported-languages',
    category: 'general',
    question: 'Which languages are supported?',
    answer: 'MAVS supports 11 Indian languages: Hindi, Bengali, Marathi, Telugu, Tamil, Gujarati, Kannada, Odia, Malayalam, Punjabi, and Indian-accented English. Each language includes integrated script normalization and numeral pronunciation.'
  },
  {
    id: 'voices-available',
    category: 'audio',
    question: 'What voices can I generate?',
    answer: 'MAVS includes two distinctive neural voices: Satvik (a grounded, articulate, authoritative male voice) and Charvi (a warm, melodic, natural female voice). Both voices are available across all 11 supported languages.'
  },
  {
    id: 'offline-capability',
    category: 'technical',
    question: 'Does MAVS work offline without an internet connection?',
    answer: 'Yes! Once the initial ~239 MB neural weights are downloaded from Hugging Face during the first launch, MAVS runs 100% locally on your computer. You can generate speech in airplane mode or in remote locations without an active internet connection.'
  },
  {
    id: 'hardware-requirements',
    category: 'technical',
    question: 'Do I need an expensive dedicated GPU (graphics card) to run MAVS?',
    answer: 'No. MAVS is specifically optimized for CPU inference using multi-threaded PyTorch execution. Any standard modern 64-bit multi-core processor (Intel Core i3/i5/i7 or AMD Ryzen 3/5/7) with 8 GB of RAM will run MAVS smoothly.'
  },
  {
    id: 'audio-format',
    category: 'audio',
    question: 'What audio format does MAVS export?',
    answer: 'MAVS exports uncompressed, studio-grade 24,000 Hz (24 kHz) 16-bit Mono PCM WAV audio. This lossless format ensures optimal fidelity and can be directly imported into Premiere Pro, DaVinci Resolve, Final Cut, Audacity, or CapCut without transcoding loss.'
  },
  {
    id: 'platform-availability',
    category: 'platforms',
    question: 'Which platforms are currently available?',
    answer: 'Windows 10 and Windows 11 (64-bit) are currently available with an official standalone installer. macOS (Apple Silicon and Intel), Android, and iOS are under active development and marked as Coming Soon. We never provide placeholder or fake download links.'
  },
  {
    id: 'macos-timeline',
    category: 'platforms',
    question: 'When will the macOS and mobile versions be released?',
    answer: 'macOS builds (for Apple Silicon ARM64 and Intel x64) and mobile builds for Android and iOS are in development. We follow an honest release policy and do not make unverified date promises. You can check the Downloads page or follow the GitHub repository for updates.'
  },
  {
    id: 'cost-and-licensing',
    category: 'general',
    question: 'Is MAVS free to use? Are there hidden fees?',
    answer: 'MAVS is free and open-source software built with an open ecosystem philosophy. There are no monthly subscriptions, usage quotas, token paywalls, or credit card requirements.'
  },
  {
    id: 'script-enhancer-privacy',
    category: 'technical',
    question: 'How does the browser-based Script Enhancer protect my privacy?',
    answer: 'The Script Enhancer runs entirely inside your browser using client-side JavaScript. Your text is never uploaded to a MAVS server or stored in a database. It formats an optimized prompt that you can copy to ChatGPT with a single click, without requiring an OpenAI API key on our site.'
  },
  {
    id: 'contact-developer',
    category: 'general',
    question: 'How do I report a bug or contact the developer?',
    answer: 'You can email Krish Bhanderi directly at krishbhanderi565@gmail.com for product enquiries, feedback, bug reports, and collaboration opportunities, or submit an issue on the official GitHub repository.'
  }
];

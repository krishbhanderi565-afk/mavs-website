export interface LanguageItem {
  id: string;
  code: string;
  name: string;
  nativeName: string;
  script: string;
  samplePhrase: string;
  sampleTranslation: string;
  speakersEst: string;
  badge?: string;
}

export const SUPPORTED_LANGUAGES: LanguageItem[] = [
  {
    id: 'hindi',
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    script: 'Devanagari',
    samplePhrase: 'माव्स के साथ अपनी आवाज़ को सशक्त बनाएं।',
    sampleTranslation: 'Empower your voice with MAVS.',
    speakersEst: '600M+ speakers'
  },
  {
    id: 'bengali',
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    script: 'Bengali',
    samplePhrase: 'আপনার কথা, আপনার ভাষা, আপনার নিজস্ব কন্ঠস্বর।',
    sampleTranslation: 'Your words, your language, your own voice.',
    speakersEst: '300M+ speakers'
  },
  {
    id: 'marathi',
    code: 'mr',
    name: 'Marathi',
    nativeName: 'मराठी',
    script: 'Devanagari',
    samplePhrase: 'सोप्या आणि सुंदर पद्धतीने भारतीय भाषांमध्ये आवाज तयार करा.',
    sampleTranslation: 'Create speech in Indian languages simply and beautifully.',
    speakersEst: '95M+ speakers'
  },
  {
    id: 'telugu',
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    script: 'Telugu',
    samplePhrase: 'మీ ఆలోచనలకు స్వచ్ఛమైన భారతీయ స్వర రూపం ఇవ్వండి.',
    sampleTranslation: 'Give your thoughts a pure Indian voice form.',
    speakersEst: '95M+ speakers'
  },
  {
    id: 'tamil',
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    script: 'Tamil',
    samplePhrase: 'உங்கள் வார்த்தைகள், உங்கள் மொழி, உங்கள் தனித்துவ குரல்.',
    sampleTranslation: 'Your words, your language, your distinct voice.',
    speakersEst: '85M+ speakers'
  },
  {
    id: 'gujarati',
    code: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    script: 'Gujarati',
    samplePhrase: 'તમારા શબ્દો, તમારી ભાષા, તમારો અવાજ માવ્સ સાથે.',
    sampleTranslation: 'Your words, your language, your voice with MAVS.',
    speakersEst: '60M+ speakers'
  },
  {
    id: 'kannada',
    code: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    script: 'Kannada',
    samplePhrase: 'ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಸ್ಪಷ್ಟ ಮತ್ತು ಸಹಜ ಧ್ವನಿ ರಚಿಸಿ.',
    sampleTranslation: 'Create clear and natural voice in your language.',
    speakersEst: '50M+ speakers'
  },
  {
    id: 'odia',
    code: 'or',
    name: 'Odia',
    nativeName: 'ଓଡ଼ିଆ',
    script: 'Odia',
    samplePhrase: 'ଆପଣଙ୍କ ଭାଷାରେ ମନମୁଗ୍ଧକର କଣ୍ଠସ୍ୱର ସୃଷ୍ଟି କରନ୍ତୁ।',
    sampleTranslation: 'Create enchanting voiceovers in your language.',
    speakersEst: '40M+ speakers'
  },
  {
    id: 'malayalam',
    code: 'ml',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    script: 'Malayalam',
    samplePhrase: 'നിങ്ങളുടെ വാക്കുകൾ നിങ്ങളുടെ സ്വന്തം ഭാഷയിൽ കേൾക്കൂ.',
    sampleTranslation: 'Hear your words in your own language.',
    speakersEst: '38M+ speakers'
  },
  {
    id: 'punjabi',
    code: 'pa',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    script: 'Gurmukhi',
    samplePhrase: 'ਆਪਣੀ ਬੋਲੀ ਵਿੱਚ ਸਪਸ਼ਟ ਅਤੇ ਕੁਦਰਤੀ ਅਵਾਜ਼ ਤਿਆਰ ਕਰੋ।',
    sampleTranslation: 'Produce clear and natural speech in your dialect.',
    speakersEst: '35M+ speakers'
  },
  {
    id: 'english',
    code: 'en',
    name: 'English (Indian Accent)',
    nativeName: 'English',
    script: 'Latin',
    samplePhrase: 'Clear, natural English voiceovers with authentic Indian resonance.',
    sampleTranslation: 'Clear, natural English voiceovers with authentic Indian resonance.',
    speakersEst: 'Pan-India & Global'
  }
];

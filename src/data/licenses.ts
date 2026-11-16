export interface LicenseSection {
  component: string;
  creator: string;
  licenseType: string;
  url: string;
  scope: string;
  summary: string;
}

export const LICENSES_DATA: LicenseSection[] = [
  {
    component: 'MAVS Desktop Application & Website',
    creator: 'Krish Bhanderi',
    licenseType: 'MIT License',
    url: 'https://github.com/krishbhanderi/MAVS',
    scope: 'Desktop shell, UI/UX, runtime supervisor, website frontend, prompt enhancer',
    summary: 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction.'
  },
  {
    component: 'Mithi v1 Flash Neural TTS Model',
    creator: 'Oomni',
    licenseType: 'Apache License 2.0',
    url: 'https://huggingface.co/Oomni/mithi-v1-flash',
    scope: 'Acoustic model architecture, trained neural weights (99.1M params), Maya Indic text normalizer, frontend G2P pipeline',
    summary: 'Licensed under the Apache License, Version 2.0. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0. Users must preserve copyright, patent, trademark, and attribution notices.'
  },
  {
    component: 'Kokoro-82M Vocoder Core',
    creator: 'hexgrad / StyleTTS 2 / iSTFTNet',
    licenseType: 'Apache License 2.0 / MIT',
    url: 'https://github.com/hexgrad/kokoro',
    scope: 'Non-autoregressive neural vocoder and acoustic frame generation',
    summary: 'Incorporated under open-source research and engineering licenses.'
  },
  {
    component: 'Indic-BERT Representations',
    creator: 'AI4Bharat / Hugging Face',
    licenseType: 'Apache License 2.0',
    url: 'https://github.com/AI4Bharat/indic-bert',
    scope: 'Multilingual contextual embeddings for Indian languages',
    summary: 'Open Indic NLP representation models developed for public benefit and academic research.'
  },
  {
    component: 'PyTorch',
    creator: 'The Linux Foundation / PyTorch Team',
    licenseType: 'BSD-3-Clause',
    url: 'https://pytorch.org',
    scope: 'Core tensor engine and CPU inference runtime',
    summary: 'Redistribution and use in source and binary forms are permitted provided the copyright notice and disclaimer are retained.'
  },
  {
    component: 'SoundFile & libsndfile',
    creator: 'Bastian Bechtold / Erik de Castro Lopo',
    licenseType: 'BSD-3-Clause / LGPL-2.1',
    url: 'https://github.com/bastibe/python-soundfile',
    scope: 'Lossless 24 kHz WAV audio writing and encoding',
    summary: 'Standard high-fidelity audio encoding library utilized for uncompressed audio export.'
  },
  {
    component: 'Electron',
    creator: 'OpenJS Foundation / GitHub Inc.',
    licenseType: 'MIT License',
    url: 'https://www.electronjs.org',
    scope: 'Native desktop application packaging container',
    summary: 'Cross-platform container runtime for desktop distribution.'
  }
];

export const ASSET_CREDITS_DATA = [
  {
    assetName: 'Visual Banner & Floral Background Reference',
    creator: 'Inspired by Mithi artistic styling (Oomni)',
    license: 'Artistic Reference & Community Derivative',
    notes: 'Warm floral and sunburst background artwork crafted without reproducing original trademark logos.'
  },
  {
    assetName: 'Interface & System Icons',
    creator: 'Lucide Icons & Flaticon Creators',
    license: 'ISC License (Lucide) / Flaticon Standard License',
    notes: 'Carefully styled SVG vector icons ensuring consistent stroke weights and aesthetic harmony.'
  },
  {
    assetName: 'Google Fonts (DM Sans, Inter, Noto Sans Indic Family)',
    creator: 'Colophon Foundry, Rasmus Andersson, Google Fonts',
    license: 'SIL Open Font License 1.1',
    notes: 'High-legibility typography optimized for English and Indian regional scripts.'
  }
];

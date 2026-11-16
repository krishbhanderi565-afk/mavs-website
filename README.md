# MAVS Official Website — Mithi AI Voice Studio

Official website for **MAVS (Mithi AI Voice Studio)** — an independently developed desktop application that makes Indian-language AI voice generation accessible to creators, educators, video editors, and storytellers across 11 languages using Mithi v1 Flash.

---

## 🌟 Brand & Project Summary

- **Product Name:** MAVS — Mithi AI Voice Studio
- **Tagline:** *Your Words. Your Language. Your Voice.*
- **Founder & Developer:** Krish Bhanderi
- **Official Contact:** `krishbhanderi565@gmail.com`
- **Underlying AI Model:** Mithi v1 Flash (99.1M parameters, Apache License 2.0)
- **Original Model Creators:** Oomni ([Hugging Face Model Card](https://huggingface.co/Oomni/mithi-v1-flash))
- **Software Philosophy:** Free and open-source software, not a commercial SaaS platform.

---

## 🎨 Design System & Palette

- **Warm Cream:** `#FAEEDE` (Page Background)
- **Deep Plum:** `#2C1030` (Primary Typography & Dark Surfaces)
- **Primary Pink:** `#EC5478` (Primary Action & Highlights)
- **Accent Orange:** `#FF9B36` (Accents, Buttons & Badges)
- **Muted Plum:** `#806C80` (Supporting Descriptions)
- **Light Pink Surface:** `#F9DDE2` (Pills & Feature Cards)

---

## 🧭 Page Architecture & Routes

| Route | Page Name | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Hero with floating language pills, opposing infinite language marquee, creator workflow, real application screenshot walkthrough, Oomni attribution, and Windows download CTA. |
| `/about` | **About MAVS** | Founder & Developer introduction (Krish Bhanderi) alongside a separate acknowledgement panel for Oomni. |
| `/features` | **Features** | 11 Indic languages, Satvik & Charvi voices, local CPU inference, and 24 kHz WAV audio export. |
| `/script-enhancer` | **Script Enhancer** | 100% in-browser client-side tool to format scripts with breath punctuation, copy prompt to clipboard, and open ChatGPT. |
| `/download` | **Downloads** | Platform availability matrix (Windows available now; macOS, Android, and iOS marked Coming Soon). |
| `/getting-started`| **Getting Started**| Step-by-step installation instructions, SmartScreen bypass guide, initial model weights fetch, and troubleshooting. |
| `/open-source` | **Open Source** | Open-source philosophy, GitHub repository link, contribution guidelines, and licensing boundaries. |
| `/faq` | **FAQ** | Searchable categorized accordion FAQ covering offline inference, voices, hardware, and audio formats. |
| `/privacy` | **Privacy Policy**| Zero tracking, no server-side script uploads, no user database, and offline desktop operation. |
| `/license` | **Licenses** | Breakdown of MAVS MIT license vs Mithi Apache-2.0 model terms and third-party notices. |
| `/contact` | **Contact** | Official email communication with Krish Bhanderi (`krishbhanderi565@gmail.com`) with message helper templates. |
| `*` | **404 Not Found** | Custom fallback page with quick navigation back to Home or Downloads. |

---

## ⚙️ Central Release Configuration

Platform availability and verified installer details are managed centrally in:
- `src/data/platforms.ts` (Platform definitions, architectures, and availability status)
- `src/data/releases.ts` (Windows installer metadata: version, size, SHA-256 hash, and specs)

### Current Release Status:
- **Windows 10/11 (x64):** Available (`MAVS-Setup-x64.exe`, 497.5 MB, SHA-256: `EC18773872F13EA0EB484CD942503D89B6BAC7108777FF5FAE59F7CA98C62710`)
- **macOS (Apple Silicon & Intel):** Coming Soon (Disabled, no placeholder links)
- **Android App:** Coming Soon (Disabled, no fake APK)
- **iOS App:** Coming Soon (Disabled, no fake App Store link)

---

## 🛠️ Local Development & Build

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```
Built production assets are generated in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🚀 Netlify Deployment Configuration

The repository is configured for zero-config Netlify deployment:
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **SPA Fallback:** Configured in `netlify.toml` and `public/_redirects` (`/* /index.html 200`) so direct navigation to any page works without 404 errors.

---

## 📄 Licensing & Credits

- **MAVS Website & Application:** Copyright © 2026 Krish Bhanderi. Licensed under the [MIT License](LICENSE).
- **Mithi v1 Flash Neural Model:** Created by Oomni. Licensed under [Apache License 2.0](https://huggingface.co/Oomni/mithi-v1-flash).
- Detailed asset licensing is documented in [ASSET_CREDITS.md](ASSET_CREDITS.md).

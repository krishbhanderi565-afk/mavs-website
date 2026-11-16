import React from 'react';
import { Link } from 'react-router-dom';
import { Wordmark } from './Wordmark';
import { Mail, ExternalLink, Heart, CheckCircle2, Clock } from 'lucide-react';
import { OFFICIAL_CONTACT_EMAIL, OFFICIAL_MODEL_HUGGINGFACE } from '../../data/platforms';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C1030] text-[#FAEEDE] border-t border-[#4A1848] relative overflow-hidden">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EC5478]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF9B36]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand & Purpose Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block bg-white/10 p-2.5 rounded-2xl">
              <Wordmark size="md" showSubtitle={true} className="[&_span]:text-white" />
            </div>
            <p className="text-sm font-semibold tracking-wide text-[#FF9B36]">
              Your Words. Your Language. Your Voice.
            </p>
            <p className="text-sm text-[#FAEEDE]/75 leading-relaxed max-w-sm">
              An independent, creator-friendly desktop studio to generate natural Indian-language AI voiceovers across 11 languages using Mithi v1 Flash.
            </p>
            <div className="pt-2">
              <div className="text-xs text-[#FAEEDE]/60 uppercase tracking-wider font-semibold mb-1.5">
                Official Contact
              </div>
              <a
                href={`mailto:${OFFICIAL_CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 text-sm text-[#FF9B36] hover:text-white font-medium transition-colors"
                aria-label={`Send email to ${OFFICIAL_CONTACT_EMAIL}`}
              >
                <Mail className="w-4 h-4" />
                <span>{OFFICIAL_CONTACT_EMAIL}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#EC5478]">
              Product & Studio
            </h3>
            <ul className="space-y-2 text-sm text-[#FAEEDE]/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-white transition-colors text-[#FF9B36] font-semibold">
                  Explore MAVS
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-white transition-colors">
                  Studio Features
                </Link>
              </li>
              <li>
                <Link to="/script-enhancer" className="hover:text-white transition-colors">
                  Script Enhancer
                </Link>
              </li>
              <li>
                <Link to="/download" className="hover:text-white transition-colors">
                  Downloads (Windows)
                </Link>
              </li>
              <li>
                <Link to="/getting-started" className="hover:text-white transition-colors">
                  Getting Started Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Open Source & Attribution */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#EC5478]">
              Open Source & Credits
            </h3>
            <ul className="space-y-2 text-sm text-[#FAEEDE]/80">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About MAVS & Developer
                </Link>
              </li>
              <li>
                <Link to="/open-source" className="hover:text-white transition-colors">
                  Open Source Philosophy
                </Link>
              </li>
              <li>
                <a
                  href={OFFICIAL_MODEL_HUGGINGFACE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-[#FAEEDE]/90"
                >
                  <span>Mithi v1 Flash (Oomni)</span>
                  <ExternalLink className="w-3 h-3 text-[#FF9B36]" />
                </a>
              </li>
              <li>
                <Link to="/license" className="hover:text-white transition-colors">
                  Licensing & Third-Party
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Developer
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform Availability Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#EC5478]">
              Platform Status
            </h3>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
                <span className="font-medium text-white">Windows 10/11</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  <CheckCircle2 className="w-3 h-3" />
                  Available
                </span>
              </li>
              <li className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
                <span className="font-medium text-white/70">macOS (ARM/Intel)</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#FF9B36] bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-500/30">
                  <Clock className="w-3 h-3" />
                  Coming Soon
                </span>
              </li>
              <li className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
                <span className="font-medium text-white/70">Android App</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#FF9B36] bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-500/30">
                  <Clock className="w-3 h-3" />
                  Coming Soon
                </span>
              </li>
              <li className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
                <span className="font-medium text-white/70">iOS App</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#FF9B36] bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-500/30">
                  <Clock className="w-3 h-3" />
                  Coming Soon
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Model Attribution & Copyright Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAEEDE]/60">
          <div className="flex flex-wrap items-center gap-2 text-center md:text-left">
            <span>Powered by <strong>Mithi v1 Flash</strong>, created and trained by <strong>Oomni</strong>.</span>
            <span className="hidden md:inline">•</span>
            <span>MAVS independently developed by <strong>Krish Bhanderi</strong>.</span>
          </div>

          <div className="flex items-center gap-1 text-center md:text-right">
            <span>© {new Date().getFullYear()} MAVS. Built with</span>
            <Heart className="w-3.5 h-3.5 text-[#EC5478] fill-[#EC5478] inline mx-0.5" />
            <span>for Indian language creators.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

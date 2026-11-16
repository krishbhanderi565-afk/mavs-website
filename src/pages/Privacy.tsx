import React from 'react';
import { ShieldCheck, Lock, EyeOff, ServerOff } from 'lucide-react';
import { OFFICIAL_CONTACT_EMAIL } from '../data/platforms';

export const Privacy: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-[#FAEEDE] min-h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9DDE2] border border-[#EC5478]/30 text-xs font-bold text-[#EC5478] mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>Data Protection & Privacy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#2C1030] tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-[#806C80]">
            Transparent, zero-tracking, and private by design. Here is how your data is handled on both our website and desktop software.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <div className="p-6 rounded-3xl bg-white/90 border border-[#2C1030]/10 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
              <ServerOff className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#2C1030]">No Backend Storage</h3>
            <p className="text-xs text-[#806C80] leading-relaxed">
              We operate no user database, cloud storage, or script repository. Your text never enters any MAVS server.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/90 border border-[#2C1030]/10 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#F9DDE2] text-[#EC5478] flex items-center justify-center mb-2">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#2C1030]">In-Browser Script Enhancer</h3>
            <p className="text-xs text-[#806C80] leading-relaxed">
              The Script Enhancer prepares prompts entirely in your local browser memory via JavaScript. No API key is transmitted.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/90 border border-[#2C1030]/10 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#FAEEDE] text-[#FF9B36] flex items-center justify-center mb-2">
              <EyeOff className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#2C1030]">Zero Tracking & Ads</h3>
            <p className="text-xs text-[#806C80] leading-relaxed">
              We do not embed third-party advertising trackers, cross-site cookies, or surveillance telemetry scripts.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/90 border border-[#2C1030]/10 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-2">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#2C1030]">100% Offline Desktop Inference</h3>
            <p className="text-xs text-[#806C80] leading-relaxed">
              The MAVS desktop app runs on your own CPU. Voice synthesis and WAV generation occur locally without internet queries.
            </p>
          </div>
        </div>

        {/* Detailed Policy Text */}
        <div className="bg-white/90 rounded-3xl p-8 sm:p-10 border border-[#2C1030]/10 shadow-xs space-y-6 text-xs sm:text-sm text-[#806C80] leading-relaxed">
          <section className="space-y-2">
            <h3 className="text-base font-bold text-[#2C1030]">1. Website Visitor Data</h3>
            <p>
              When you browse this website, your browser communicates with our static hosting provider (Netlify). Standard web server logs (such as your IP address, browser user-agent, and requested file path) may be retained by the hosting provider for operational security and traffic routing. MAVS does not analyze, sell, or profile visitor logs.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-[#2C1030]">2. Script Enhancer Usage</h3>
            <p>
              The Script Enhancer tool available on <code>/script-enhancer</code> runs entirely client-side inside your browser session. Text typed into the script area remains exclusively in browser RAM. It is never transmitted to any MAVS API or external endpoint. When you click &quot;Open ChatGPT&quot;, you are navigated to OpenAI&apos;s external website, which is governed by OpenAI&apos;s own privacy policy.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-[#2C1030]">3. Desktop Application Telemetry</h3>
            <p>
              The official MAVS Windows desktop installer does not bundle telemetry, usage beacons, or analytics collectors. The only external network connection initiated by the desktop software occurs during first launch when downloading the open-source Mithi v1 Flash model weights from Hugging Face. Once downloaded, the application works completely offline.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-[#2C1030]">4. User Accounts & Payments</h3>
            <p>
              MAVS V1 requires no account creation, passwords, usernames, phone numbers, or billing details. There are no paid subscription tiers or payment gateways on this site.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[#2C1030]/10">
            <h3 className="text-base font-bold text-[#2C1030]">5. Questions & Data Inquiries</h3>
            <p>
              If you have any questions regarding privacy or data handling, please contact Krish Bhanderi directly at{' '}
              <a href={`mailto:${OFFICIAL_CONTACT_EMAIL}`} className="font-bold text-[#EC5478] hover:underline">
                {OFFICIAL_CONTACT_EMAIL}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

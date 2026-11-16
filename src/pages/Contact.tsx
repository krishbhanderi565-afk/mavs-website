import React, { useState } from 'react';
import { Mail, Copy, Check, MessageSquare, Bug, Sparkles, Handshake, HelpCircle, Send } from 'lucide-react';
import { OFFICIAL_CONTACT_EMAIL } from '../data/platforms';
import { copyToClipboard } from '../lib/clipboard';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedPurpose, setSelectedPurpose] = useState('Feedback and Suggestions');
  const [userNote, setUserNote] = useState('');

  const purposes = [
    { label: 'Product Enquiries', icon: Sparkles },
    { label: 'Feedback and Suggestions', icon: MessageSquare },
    { label: 'Bug Reports', icon: Bug },
    { label: 'Collaboration Opportunities', icon: Handshake },
    { label: 'Developer Discussions', icon: HelpCircle },
    { label: 'General Questions', icon: Mail }
  ];

  const handleCopy = async () => {
    const success = await copyToClipboard(OFFICIAL_CONTACT_EMAIL);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  // Build a custom mailto link with prefilled subject
  const subject = encodeURIComponent(`[MAVS] ${selectedPurpose}`);
  const body = encodeURIComponent(
    userNote.trim()
      ? `${userNote}\n\n---\nSent regarding MAVS — Mithi AI Voice Studio`
      : `Hi Krish,\n\nI am reaching out regarding ${selectedPurpose} for MAVS.\n\n`
  );
  const mailtoUrl = `mailto:${OFFICIAL_CONTACT_EMAIL}?subject=${subject}&body=${body}`;

  return (
    <div className="py-12 md:py-20 bg-[#FAEEDE] min-h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9DDE2] border border-[#EC5478]/30 text-xs font-bold text-[#EC5478] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Developer Communication</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#2C1030] tracking-tight">
            Contact the Developer
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#806C80] leading-relaxed">
            Have a question or want to connect? Whether you have feedback, a collaboration idea, a technical question, or simply want to discuss MAVS, feel free to reach out.
          </p>
        </div>

        {/* Primary Contact Card */}
        <div className="bg-white/90 rounded-3xl p-8 sm:p-12 border-2 border-[#2C1030]/20 shadow-lg text-center mb-12">
          <div className="w-16 h-16 rounded-3xl bg-[#2C1030] text-[#FF9B36] flex items-center justify-center mx-auto mb-5 shadow-xs">
            <Mail className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-[#EC5478]">
            Official Contact Channel
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2C1030] mt-1 mb-2">
            Krish Bhanderi
          </h2>
          <p className="text-xs text-[#806C80] mb-6">
            Founder & Developer of MAVS — Mithi AI Voice Studio
          </p>

          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-2 bg-[#FAEEDE]/60 rounded-2xl border border-[#2C1030]/10 max-w-lg mx-auto">
            <a
              href={`mailto:${OFFICIAL_CONTACT_EMAIL}`}
              className="text-base sm:text-lg font-bold text-[#2C1030] hover:text-[#EC5478] px-4 py-2 font-mono transition-colors"
            >
              {OFFICIAL_CONTACT_EMAIL}
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-[#2C1030] hover:bg-gray-50 border border-[#2C1030]/10 text-xs font-bold shadow-2xs transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#806C80]" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href={mailtoUrl}
              className="inline-flex items-center gap-2 bg-[#2C1030] hover:bg-[#431B48] text-white text-sm font-bold px-7 py-3.5 rounded-full shadow-md transition-all active:scale-95"
            >
              <Send className="w-4 h-4 text-[#FF9B36]" />
              <span>Launch Default Email Client</span>
            </a>
          </div>
        </div>

        {/* Message Intent Helper */}
        <div className="bg-white/90 rounded-3xl p-8 border border-[#2C1030]/10 shadow-xs">
          <h3 className="text-lg font-bold text-[#2C1030] mb-2">
            What are you contacting us about?
          </h3>
          <p className="text-xs text-[#806C80] mb-6">
            Select a purpose to automatically generate your email topic template:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {purposes.map((p, i) => {
              const Icon = p.icon;
              const isSelected = selectedPurpose === p.label;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedPurpose(p.label)}
                  className={`p-3.5 rounded-2xl text-left border flex items-center gap-3 transition-all ${
                    isSelected
                      ? 'bg-[#2C1030] text-white border-[#2C1030] shadow-xs'
                      : 'bg-white text-[#2C1030] border-[#2C1030]/10 hover:border-[#EC5478]/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#FF9B36]' : 'text-[#EC5478]'}`} />
                  <span className="text-xs font-semibold">{p.label}</span>
                </button>
              );
            })}
          </div>

          <div>
            <label htmlFor="userMessage" className="block text-xs font-bold uppercase tracking-wider text-[#2C1030] mb-1.5">
              Draft a quick note (Optional):
            </label>
            <textarea
              id="userMessage"
              rows={3}
              value={userNote}
              onChange={(e) => setUserNote(e.target.value)}
              placeholder="Write a brief overview of your query or suggestion..."
              className="w-full p-3.5 rounded-2xl bg-[#FAEEDE]/40 border border-[#2C1030]/15 text-xs text-[#2C1030] placeholder-[#806C80]/60 focus:outline-none focus:ring-2 focus:ring-[#EC5478]"
            />
          </div>

          <div className="mt-4 flex justify-end">
            <a
              href={mailtoUrl}
              className="inline-flex items-center gap-2 bg-[#EC5478] hover:bg-[#d84366] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors"
            >
              <span>Compose with this Template</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Clapperboard, Video, BookOpen, GraduationCap, Globe, Mic } from 'lucide-react';

interface UseCaseItem {
  icon: React.ElementType;
  title: string;
  tag: string;
  description: string;
  suggestedVoice: string;
  recommendedLanguages: string;
}

const USE_CASES: UseCaseItem[] = [
  {
    icon: Clapperboard,
    title: 'Instagram Reels & YouTube Shorts',
    tag: 'Short-Form Social',
    description: 'Fast, engaging voiceovers that hook audiences in the first 3 seconds without expensive microphones or studio acoustics.',
    suggestedVoice: 'Charvi (Expressive & Melodic)',
    recommendedLanguages: 'Hindi, English, Gujarati, Tamil'
  },
  {
    icon: Video,
    title: 'YouTube Long-Form Documentaries',
    tag: 'Video Production',
    description: 'Deep, steady narration for history, science, tech explainers, and cinema retrospectives that keeps viewers engaged for 20+ minutes.',
    suggestedVoice: 'Satvik (Grounded & Authoritative)',
    recommendedLanguages: 'Hindi, Bengali, Marathi, Telugu'
  },
  {
    icon: GraduationCap,
    title: 'Educational & Digital Learning',
    tag: 'E-Learning & Academia',
    description: 'Clear, articulate voice instruction for vernacular school lessons, college lectures, and tutorial courses with accurate numeral pronunciation.',
    suggestedVoice: 'Satvik or Charvi',
    recommendedLanguages: 'All 11 Supported Indic Languages'
  },
  {
    icon: BookOpen,
    title: 'Audiobooks & Regional Storytelling',
    tag: 'Narrative Storytelling',
    description: 'Bring folk tales, historical sagas, and children\'s literature to life in native regional tongues with emotional nuance and pacing.',
    suggestedVoice: 'Charvi (Conversational & Warm)',
    recommendedLanguages: 'Kannada, Malayalam, Odia, Punjabi'
  },
  {
    icon: Globe,
    title: 'Multilingual Regional Dubbing',
    tag: 'Content Localization',
    description: 'Adapt single-language video content into 11 Indian languages to expand reach from 10 million to over 800 million regional speakers.',
    suggestedVoice: 'Satvik & Charvi Dual Casting',
    recommendedLanguages: 'Hindi, Bengali, Tamil, Telugu, Gujarati'
  },
  {
    icon: Mic,
    title: 'Independent Creator Voiceovers',
    tag: 'Freelance & Agency',
    description: 'Produce high-quality commercial spots, product demo voiceovers, and explainer narration without subscription credit limits or recurring SaaS costs.',
    suggestedVoice: 'Satvik (Narration) / Charvi (Commercial)',
    recommendedLanguages: 'English (Indian Accent), Hindi, Marathi'
  }
];

export const UseCaseShowcase: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white/70 border-b border-[#2C1030]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF9B36] bg-[#2C1030] px-3.5 py-1 rounded-full">
            Real-World Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C1030] tracking-tight mt-4 font-['DM_Sans',sans-serif]">
            What Can You{' '}
            <span className="text-[#EC5478]">Create With MAVS?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#806C80] leading-relaxed">
            From viral social media clips to immersive regional audiobooks, MAVS powers content across diverse creative disciplines with zero cloud subscriptions.
          </p>
        </div>

        {/* 6 Use Case Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {USE_CASES.map((uc, idx) => {
            const Icon = uc.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAEEDE]/80 rounded-3xl p-6 sm:p-7 border border-[#2C1030]/10 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white text-[#2C1030] group-hover:bg-[#2C1030] group-hover:text-[#FF9B36] flex items-center justify-center transition-colors shadow-2xs border border-[#2C1030]/10">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#EC5478] bg-[#F9DDE2] px-2.5 py-1 rounded-full">
                      {uc.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#2C1030] mb-2.5">
                    {uc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#806C80] leading-relaxed mb-4">
                    {uc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2C1030]/10 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-[#2C1030]">
                    <span className="text-[#806C80]">Ideal Persona:</span>
                    <span className="font-semibold">{uc.suggestedVoice}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#2C1030]">
                    <span className="text-[#806C80]">Languages:</span>
                    <span className="font-semibold truncate max-w-[150px]">{uc.recommendedLanguages}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

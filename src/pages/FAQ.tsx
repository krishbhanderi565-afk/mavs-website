import React, { useState, useMemo } from 'react';
import { FAQ_ITEMS } from '../data/faq';
import { HelpCircle, ChevronDown, Search, Mail } from 'lucide-react';
import { OFFICIAL_CONTACT_EMAIL } from '../data/platforms';

export const FAQ: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'what-is-mavs': true,
    'model-vs-app': true
  });

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General & Attribution' },
    { id: 'audio', label: 'Audio & Voices' },
    { id: 'technical', label: 'Technical & Offline' },
    { id: 'platforms', label: 'Platforms & Releases' }
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="py-12 md:py-20 bg-[#FAEEDE] min-h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9DDE2] border border-[#EC5478]/30 text-xs font-bold text-[#EC5478] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Questions & Answers</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#2C1030] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base text-[#806C80]">
            Everything you need to know about MAVS, the Mithi v1 Flash speech model, supported platforms, and audio export.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="w-5 h-5 text-[#806C80] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. offline, voices, macOS, audio format)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-[#2C1030]/15 text-[#2C1030] text-sm placeholder-[#806C80]/60 shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#EC5478]"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#2C1030] text-white shadow-xs'
                  : 'bg-white/70 text-[#806C80] hover:text-[#2C1030] border border-[#2C1030]/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item) => {
              const isOpen = !!openIds[item.id];
              return (
                <div
                  key={item.id}
                  className="rounded-2xl bg-white/90 border border-[#2C1030]/10 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-[#F9DDE2]/40 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-sm sm:text-base text-[#2C1030]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#806C80] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#EC5478]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#806C80] leading-relaxed border-t border-[#2C1030]/5">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white/50 rounded-2xl border border-[#2C1030]/10">
              <p className="text-sm font-semibold text-[#2C1030]">No matching questions found</p>
              <p className="text-xs text-[#806C80] mt-1">Try another search term or select All Questions</p>
            </div>
          )}
        </div>

        {/* Still have questions banner */}
        <div className="rounded-3xl p-8 bg-gradient-to-r from-white to-[#F9DDE2]/50 border border-[#2C1030]/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-bold text-base text-[#2C1030]">Still have questions?</h3>
            <p className="text-xs text-[#806C80]">
              Feel free to reach out directly to the developer for feedback, questions, or bug reports.
            </p>
          </div>
          <a
            href={`mailto:${OFFICIAL_CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 bg-[#2C1030] text-white text-xs font-bold px-5 py-3 rounded-full hover:bg-[#431B48] transition-colors flex-shrink-0"
          >
            <Mail className="w-4 h-4 text-[#FF9B36]" />
            <span>Email Krish Bhanderi</span>
          </a>
        </div>
      </div>
    </div>
  );
};

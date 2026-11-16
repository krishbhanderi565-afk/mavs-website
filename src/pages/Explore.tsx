import React, { useState } from 'react';
import { ExploreHero } from '../components/explore/ExploreHero';
import { WhyMavs } from '../components/explore/WhyMavs';
import { ContributionPanels } from '../components/explore/ContributionPanels';
import { HowMavsWorks } from '../components/explore/HowMavsWorks';
import { TutorialSection } from '../components/explore/TutorialSection';
import { UseCaseShowcase } from '../components/explore/UseCaseShowcase';
import { OpenSourceCredits } from '../components/explore/OpenSourceCredits';
import { ExploreCta } from '../components/explore/ExploreCta';
import { TutorialLightbox } from '../components/explore/TutorialLightbox';
import { ScreenshotChecklistModal } from '../components/explore/ScreenshotChecklistModal';

export const Explore: React.FC = () => {
  // Lightbox state
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imgSrc: string;
    title: string;
    caption: string;
  }>({
    isOpen: false,
    imgSrc: '',
    title: '',
    caption: ''
  });

  // Developer Checklist Modal state
  const [checklistOpen, setChecklistOpen] = useState(false);

  const handleOpenLightbox = (imgSrc: string, title: string, caption: string) => {
    setLightboxState({
      isOpen: true,
      imgSrc,
      title,
      caption
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero: Discover MAVS */}
      <ExploreHero />

      {/* 2. Why MAVS Was Created (The Problem & Motivation) */}
      <WhyMavs />

      {/* 3. Understanding the Contributions (Oomni vs Krish Bhanderi) */}
      <ContributionPanels />

      {/* 4. How MAVS Works (7-Step Interactive Architecture) */}
      <HowMavsWorks onOpenLightbox={handleOpenLightbox} />

      {/* 5. Complete Screenshot-Based Tutorial (13-Step Windows Onboarding) */}
      <TutorialSection
        onOpenLightbox={handleOpenLightbox}
        onOpenChecklist={() => setChecklistOpen(true)}
      />

      {/* 6. What Can You Create? (Creator Use Cases) */}
      <UseCaseShowcase />

      {/* 7. Open Source & Credits (Licensing Integrity) */}
      <OpenSourceCredits />

      {/* 8. Final Call to Action */}
      <ExploreCta />

      {/* Interactive Lightbox Modal */}
      <TutorialLightbox
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        imgSrc={lightboxState.imgSrc}
        title={lightboxState.title}
        caption={lightboxState.caption}
      />

      {/* Developer Screenshot Capture Checklist Modal */}
      <ScreenshotChecklistModal
        isOpen={checklistOpen}
        onClose={() => setChecklistOpen(false)}
      />
    </div>
  );
};

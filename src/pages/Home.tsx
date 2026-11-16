import React from 'react';
import { Hero } from '../components/home/Hero';
import { LanguageMarquee } from '../components/home/LanguageMarquee';
import { WhatIsMavs } from '../components/home/WhatIsMavs';
import { WorkflowSteps } from '../components/home/WorkflowSteps';
import { ProductShowcase } from '../components/home/ProductShowcase';
import { OpenSourcePreview } from '../components/home/OpenSourcePreview';
import { OomniCreditBanner } from '../components/home/OomniCreditBanner';
import { FinalCta } from '../components/home/FinalCta';

export const Home: React.FC = () => {
  return (
    <div>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Multilingual Language Showcase (Opposing Marquee Tracks) */}
      <LanguageMarquee />

      {/* 3. What is MAVS? (Purpose, Audience, Problem vs Solution) */}
      <WhatIsMavs />

      {/* 4. How it works (4-step Visual Workflow) */}
      <WorkflowSteps />

      {/* 5. Product Showcase (Actual Application Interface) */}
      <ProductShowcase />

      {/* 6. Open Source Philosophy */}
      <OpenSourcePreview />

      {/* 7. Dedicated Oomni Model Acknowledgement */}
      <OomniCreditBanner />

      {/* 8. Final CTA */}
      <FinalCta />
    </div>
  );
};

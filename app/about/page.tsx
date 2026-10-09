import React from 'react';
import { OnlineCourseTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { AboutMission } from '@/components/sections/AboutMission';
import { AboutVision } from '@/components/sections/AboutVision';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { WhatWeDoSection } from '@/components/sections/WhatWeDoSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Page() {
  const templateData: OnlineCourseTemplateData = rawData;
  const sectionData = templateData?.categories?.OnlineCourse?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">

      <Header data={sectionData.Header?.variants?.OnlineCourseHeader1} />
      <Breadcrumb data={commonData.aboutBreadcrumb} />

      {/* About Us Section */}
      <AboutUsSection data={sectionData.AboutUs?.variants?.OnlineCourseAboutUs1} hideButton={true} />

      {/* Mission Section */}
      <AboutMission data={sectionData.Mission?.variants?.OnlineCourseMission1} />

      {/* Vision Section */}
      <AboutVision data={sectionData.Vision?.variants?.OnlineCourseVision1} />

      {/* Achievements Section */}
      <AchievementsSection data={sectionData.Achievements?.variants?.OnlineCourseAchievements1} />

      {/* What We Do Section */}
      <WhatWeDoSection data={sectionData.WhatWeDo?.variants?.OnlineCourseWhatWeDo1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}


import React from 'react';
import { OnlineCourseTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutPageSection } from '@/components/sections/AboutPageSection';

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

      {/* About Page Content Section */}
      <AboutPageSection data={sectionData.AboutPage?.variants?.OnlineCourseAboutPage1} />

      {/* What We Do Section */}
      <WhatWeDoSection data={sectionData.WhatWeDo?.variants?.OnlineCourseWhatWeDo1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}


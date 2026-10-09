import React from 'react';
import { OnlineCourseTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { InstructorsPageContent } from '@/components/sections/InstructorsPageContent';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function InstructorsPage() {
  const templateData: OnlineCourseTemplateData = rawData;
  const sectionData = templateData?.categories?.OnlineCourse?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <Header data={sectionData.Header?.variants?.OnlineCourseHeader1} />
      <Breadcrumb data={commonData.instructorsBreadcrumb} />
      <InstructorsPageContent data={sectionData.InstructorsPage?.variants?.OnlineCourseInstructorsPage1} />
      <CtaSection data={sectionData.Cta?.variants?.OnlineCourseCta1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}

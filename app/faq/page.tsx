import React from 'react';
import { OnlineCourseTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { FaqPageSection } from '@/components/sections/FaqPageSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function FaqPage() {
  const templateData: OnlineCourseTemplateData = rawData;
  const sectionData = templateData?.categories?.OnlineCourse?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-white">
      <Header data={sectionData.Header?.variants?.OnlineCourseHeader1} />

      <Breadcrumb data={{
        title: 'FAQ',
        paths: [{ label: 'Home', url: '/' }, { label: 'FAQ' }]
      }} />

      <div className="bg-[#fdfaf6]">
        <FaqPageSection data={sectionData.Faq?.variants?.OnlineCourseFaq1} />
      </div>

      <Footer data={commonData.Footer} />
    </main>
  );
}

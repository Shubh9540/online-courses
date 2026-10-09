import React from 'react';
import { OnlineCourseTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { ThankYouPageContent } from '@/components/sections/ThankYouPageContent';

export const dynamic = 'force-dynamic';

export default function ThankYouPage() {
  const templateData: OnlineCourseTemplateData = rawData;
  const sectionData = templateData?.categories?.OnlineCourse?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-white">
      <Header data={sectionData.Header?.variants?.OnlineCourseHeader1} />
      
      <ThankYouPageContent data={sectionData.ThankYouPage?.variants?.OnlineCourseThankYou1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}

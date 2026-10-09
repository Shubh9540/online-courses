import React from 'react';
import { OnlineCourseTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { InstructorDetailContent } from '@/components/sections/InstructorDetailContent';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default async function InstructorDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const templateData: OnlineCourseTemplateData = rawData;
  const sectionData = templateData?.categories?.OnlineCourse?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  const allInstructors = sectionData.InstructorsPage?.variants?.OnlineCourseInstructorsPage1?.instructors || [];
  const instructor = allInstructors.find(i => i.id === id) || allInstructors[0];

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <Header data={sectionData.Header?.variants?.OnlineCourseHeader1} />
      <Breadcrumb data={{
        title: instructor?.name || 'Instructor',
        paths: [
          { label: 'Home', url: '/' },
          { label: 'Instructors', url: '/instructors' },
          { label: instructor?.name || 'Detail' }
        ],
        bgImage: '/main logo/breadcrumb.webp'
      }} />
      <InstructorDetailContent data={instructor} />
      <CtaSection data={sectionData.Cta?.variants?.OnlineCourseCta1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}

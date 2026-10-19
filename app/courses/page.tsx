import React from 'react';
import { OnlineCourseTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { CoursePageSection } from '@/components/sections/CoursePageSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function CoursesPage() {
  const templateData: OnlineCourseTemplateData = rawData;
  const sectionData = templateData?.categories?.OnlineCourse?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <Header data={sectionData.Header?.variants?.OnlineCourseHeader1} />
      <Breadcrumb data={commonData.coursesBreadcrumb} />
      
      <CoursePageSection data={sectionData.CoursePage?.variants?.OnlineCoursePage1} />
      
   
      <Footer data={commonData.Footer} />
    </main>
  );
}

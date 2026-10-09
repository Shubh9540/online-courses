import React from 'react';
import { OnlineCourseTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { CoursesSection } from '@/components/sections/CoursesSection';
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
      
      {/* Spacer for header */}
      <div className="pt-24 lg:pt-32"></div>

      <div className="py-10 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">All Courses</h1>
        <p className="text-slate-500">Browse our complete catalog of professional courses.</p>
      </div>

      <CoursesSection data={sectionData.Courses?.variants?.OnlineCourseCourses1} />
      
      <Footer data={commonData.Footer} />
    </main>
  );
}

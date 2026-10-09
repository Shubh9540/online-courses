import React from 'react';
import { OnlineCourseTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { CourseDetailContent } from '@/components/sections/CourseDetailContent';
import { CtaSection } from '@/components/sections/CtaSection';

export const dynamic = 'force-dynamic';

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: OnlineCourseTemplateData = rawData;
  const sectionData = templateData?.categories?.OnlineCourse?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  // Find the specific course from the CoursePage data to pass down
  const allCourses = sectionData.CoursePage?.variants?.OnlineCoursePage1?.courses || [];
  const course = allCourses.find(c => c.id === id) || allCourses[0];

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <Header data={sectionData.Header?.variants?.OnlineCourseHeader1} />
      
      <Breadcrumb data={{
        title: course?.title || 'Course Details',
        paths: [
          { label: 'Home', url: '/' },
          { label: 'Courses', url: '/courses' },
          { label: course?.title || 'Details' }
        ],
        bgImage: '/main logo/breadcrumb.webp'
      }} />
      
      <CourseDetailContent data={course} />
      
      <CtaSection data={sectionData.Cta?.variants?.OnlineCourseCta1} />
      
      <Footer data={commonData.Footer} />
    </main>
  );
}

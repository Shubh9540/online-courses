import React from 'react';
import { OnlineCourseTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { CourseDetailContent } from '@/components/sections/CourseDetailContent';
import { notFound } from 'next/navigation';

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
  const course = allCourses.find(c => c.id === id);
  const detailUI = sectionData.CoursePage?.variants?.OnlineCoursePage1?.detailUI;
  const breadcrumbUI = commonData.globalUI.courseBreadcrumb;

  if (!course || !detailUI) notFound();

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <Header data={sectionData.Header?.variants?.OnlineCourseHeader1} />
      
      <Breadcrumb data={{
        title: course.title,
        paths: [
          { id: 'course-detail-home', label: breadcrumbUI.homeLabel, url: breadcrumbUI.homeUrl },
          { id: 'course-detail-listing', label: breadcrumbUI.listingLabel, url: breadcrumbUI.listingUrl },
          { id: 'course-detail-current', label: course.title }
        ],
        bgImage: breadcrumbUI.bgImage
      }} />
      
      <CourseDetailContent data={course} ui={detailUI} />
      
      
      <Footer data={commonData.Footer} />
    </main>
  );
}

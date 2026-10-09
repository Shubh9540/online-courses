import React from 'react';
import { OnlineCourseTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { CategorySection } from '@/components/sections/CategorySection';
import { CoursesSection } from '@/components/sections/CoursesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { InstructorsSection } from '@/components/sections/InstructorsSection';
import { WhatWeDoSection } from '@/components/sections/WhatWeDoSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { CtaSection } from '@/components/sections/CtaSection';


import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: OnlineCourseTemplateData = rawData;
  const sectionData = templateData?.categories?.OnlineCourse?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">

      <Header data={sectionData.Header?.variants?.OnlineCourseHeader1} />
      <HeroSection data={sectionData.Hero?.variants?.OnlineCourseHero1} />
      <WhatWeDoSection data={sectionData.WhatWeDo?.variants?.OnlineCourseWhatWeDo1} />
      <AboutUsSection data={sectionData.AboutUs?.variants?.OnlineCourseAboutUs1} />
      <CategorySection data={sectionData.Category?.variants?.OnlineCourseCategory1} />
      <CoursesSection data={sectionData.Courses?.variants?.OnlineCourseCourses1} />
      <ProcessSection data={sectionData.Process?.variants?.OnlineCourseProcess1} />
      <InstructorsSection data={sectionData.Instructors?.variants?.OnlineCourseInstructors1} />
      <TestimonialSection data={sectionData.Testimonials?.variants?.OnlineCourseTestimonials1} />
      <CtaSection data={sectionData.Cta?.variants?.OnlineCourseCta1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}


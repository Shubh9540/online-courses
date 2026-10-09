import React from 'react';
import { OnlineCourseTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ContactUsComponent } from '@/components/sections/ContactUsComponent';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const templateData: OnlineCourseTemplateData = rawData;
  const sectionData = templateData?.categories?.OnlineCourse?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-white">
      <Header data={sectionData.Header?.variants?.OnlineCourseHeader1} />
      
      <Breadcrumb data={commonData.contactBreadcrumb} />
      
      <ContactUsComponent data={sectionData.ContactUs?.variants?.OnlineCourseContactUs1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}

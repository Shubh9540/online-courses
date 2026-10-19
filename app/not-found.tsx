import React from 'react';
import Link from 'next/link';
import { OnlineCourseTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { FaArrowLeft } from 'react-icons/fa';

export default function NotFoundPage() {
  const templateData: OnlineCourseTemplateData = rawData;
  const sectionData = templateData?.categories?.OnlineCourse?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;
  const notFoundData = commonData.globalUI.notFound;

  return (
    <main className="bg-[var(--color-white)] min-h-screen flex flex-col">

      <Header data={sectionData.Header?.variants?.OnlineCourseHeader1} />
      
      <section className="w-full flex-grow py-20 md:py-32 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-8xl md:text-9xl font-extrabold text-[var(--color-primary)] mb-4 drop-shadow-sm">{notFoundData.code}</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-[var(--color-heading)] mb-6">{notFoundData.title}</h2>
        <p className="text-[var(--color-gray-500)] mb-10 max-w-lg text-sm md:text-base leading-relaxed">
          {notFoundData.description}
        </p>
        <Link 
          href={notFoundData.buttonUrl}
          className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-[var(--color-white)] font-bold py-4 px-8 rounded-xl transition-colors text-sm shadow-md"
        >
          <FaArrowLeft />
          {notFoundData.buttonText}
        </Link>
      </section>

      <Footer data={commonData.Footer} />
    </main>
  );
}


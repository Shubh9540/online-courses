'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { InstructorPageData } from '@/types/templates.types';

const ITEMS_PER_PAGE = 8;

export const InstructorsPageContent = ({ data }: { data?: InstructorPageData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  if (!data) return null;

  const totalPages = Math.ceil(data.instructors.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paged = data.instructors.slice(start, start + ITEMS_PER_PAGE);

  const goTo = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="w-full py-12 lg:py-16 bg-[var(--color-surface-blue-2)] relative overflow-hidden">

      {/* Decorative arcs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full border-[60px] border-[var(--color-blue-100)]/50 pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full border-[50px] border-[var(--color-blue-100)]/40 pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="mb-3 inline-flex items-center bg-[var(--color-brand-soft)] text-[var(--color-brand)] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            {data.subtitle}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[var(--color-heading)] mb-4 leading-tight">
            {data.title1}<span className="text-[var(--color-brand)]">{data.title2}</span>
          </h1>
          <p className="text-[var(--color-slate-500)] text-[15px] max-w-2xl leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {paged.map((instructor) => (
            <article
              key={instructor.id}
              className="group bg-[var(--color-white)] rounded-2xl overflow-hidden shadow-sm border border-[var(--color-slate-100)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Photo */}
              <div className="relative w-full aspect-[4/4.2] overflow-hidden bg-[var(--color-slate-100)]">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-[16px] font-extrabold text-[var(--color-heading)] group-hover:text-[var(--color-brand)] transition-colors mb-0.5">
                  {instructor.name}
                </h3>
                <p className="text-[12px] text-[var(--color-slate-500)] font-medium mb-2">
                  {instructor.role}
                </p>
                <p className="text-[13px] text-[var(--color-slate-500)] leading-relaxed line-clamp-3">
                  {instructor.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            {/* Prev */}
            <button
              onClick={() => goTo(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--color-slate-200)] bg-[var(--color-white)] text-[var(--color-slate-500)] hover:bg-[var(--color-brand)] hover:text-[var(--color-white)] hover:border-[var(--color-brand)] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
            >
              <FaChevronLeft className="text-[11px]" />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goTo(page)}
                className={`w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold transition-all duration-200 shadow-sm border ${
                  currentPage === page
                    ? 'bg-[var(--color-brand)] text-[var(--color-white)] border-[var(--color-brand)] shadow-md shadow-[var(--color-blue-400)]/30'
                    : 'bg-[var(--color-white)] text-[var(--color-slate-600)] border-[var(--color-slate-200)] hover:bg-[var(--color-brand)] hover:text-[var(--color-white)] hover:border-[var(--color-brand)]'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => goTo(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--color-slate-200)] bg-[var(--color-white)] text-[var(--color-slate-500)] hover:bg-[var(--color-brand)] hover:text-[var(--color-white)] hover:border-[var(--color-brand)] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
            >
              <FaChevronRight className="text-[11px]" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

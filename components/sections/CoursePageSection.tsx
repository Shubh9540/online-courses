'use client';

import React, { useState } from 'react';
import { CoursePageData } from '@/types/templates.types';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaArrowRight,
  FaStar,
  FaRegHeart,
  FaRegFileAlt,
  FaRegClock,
  FaChartBar,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

export const CoursePageSection = ({ data }: { data?: CoursePageData }) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!data) return null;

  const courses = data.courses || [];

  // Pagination (6 per page)
  const itemsPerPage = 6;
  const totalPages = Math.ceil(courses.length / itemsPerPage) || 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedCourses = courses.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${currentPage === i
              ? 'bg-[var(--color-brand)] text-[var(--color-white)] shadow-md'
              : 'bg-[var(--color-white)] text-[var(--color-slate-600)] border border-[var(--color-slate-200)] hover:bg-[var(--color-blue-50)] hover:text-[var(--color-brand)]'
            }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <section className="w-full py-8 lg:py-10 bg-[var(--color-white)] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

        {/* Header - Centered */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="mb-4 inline-flex items-center gap-2 bg-[var(--color-brand-soft)] text-[var(--color-brand)] px-4 py-1.5 rounded-full">
            <span className="text-[12px] font-bold tracking-widest uppercase">{data.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight mb-4 text-[var(--color-slate-900)] tracking-tight">
            {data.title1}
            <span className="text-[var(--color-brand)]">{data.title2}</span>
          </h2>
          <div className="flex gap-2 mb-6">
            <div className="w-8 h-1 bg-[var(--color-brand)] rounded-full"></div>
            <div className="w-4 h-1 bg-[var(--color-slate-300)] rounded-full"></div>
            <div className="w-4 h-1 bg-[var(--color-slate-300)] rounded-full"></div>
          </div>
          <p className="text-[var(--color-slate-500)] text-[15px] leading-relaxed max-w-2xl">
            {data.description}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-[var(--color-white)] rounded-[24px] p-5 border border-[var(--color-slate-100)] shadow-[0_4px_25px_var(--color-shadow-4)] hover:shadow-[0_12px_40px_var(--color-shadow-8)] transition-all duration-300 flex flex-col gap-5 relative"
            >
              {/* Left Image */}
              <div className="w-full shrink-0 relative aspect-[16/10] rounded-2xl overflow-hidden bg-[var(--color-slate-100)]">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Content */}
              <div className="flex-1 flex flex-col justify-center relative py-1">

                {/* Save Heart Icon */}
                <button className="absolute top-0 right-0 w-8 h-8 rounded-full border border-[var(--color-slate-200)] flex items-center justify-center text-[var(--color-blue-500)] hover:bg-[var(--color-blue-50)] hover:border-[var(--color-blue-200)] transition-colors z-10 bg-[var(--color-white)]">
                  <FaRegHeart className="text-[13px]" />
                </button>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-2 pr-10">
                  <span className="text-[14px] font-extrabold text-[var(--color-amber-500)]">{course.rating}</span>
                  <div className="flex text-[var(--color-amber-400)] text-[11px] gap-[2px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="text-[13px] text-[var(--color-slate-400)] font-medium">({course.reviews})</span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-extrabold text-[var(--color-slate-900)] mb-2 leading-tight group-hover:text-[var(--color-brand)] transition-colors pr-8">
                  {course.title}
                </h3>
                <p className="text-[14px] text-[var(--color-slate-500)] leading-relaxed mb-5 line-clamp-2 pr-2">
                  {course.description}
                </p>

                {/* Meta Tags */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-5">
                  <div className="flex items-center gap-2 text-[13px] font-bold text-[var(--color-slate-600)]">
                    <FaRegFileAlt className="text-[var(--color-brand)] text-[15px]" />
                    {course.lessons}
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-bold text-[var(--color-slate-600)]">
                    <FaRegClock className="text-[var(--color-brand)] text-[15px]" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-bold text-[var(--color-slate-600)]">
                    <FaChartBar className="text-[var(--color-brand)] text-[15px]" />
                    {course.level}
                  </div>
                </div>

                {/* Footer: Price & Button */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--color-slate-100)]">
                  <div className="flex items-center gap-2">
                    <span className="text-[22px] font-extrabold text-[var(--color-brand)]">{course.price}</span>
                    <span className="text-[13px] text-[var(--color-slate-400)] line-through font-medium">{course.originalPrice}</span>
                  </div>

                  <Link
                    href={course.url}
                    className="flex items-center gap-2 bg-[var(--color-brand)] text-[var(--color-white)] px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-[var(--color-blue-700)] transition-colors shadow-lg shadow-[var(--color-blue-500)]/25 group-hover:-translate-y-0.5"
                  >
                    {data.viewDetailsText}
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--color-slate-600)] border border-[var(--color-slate-200)] hover:bg-[var(--color-blue-50)] hover:text-[var(--color-brand)] hover:border-[var(--color-blue-200)] transition-all disabled:opacity-50 disabled:pointer-events-none bg-[var(--color-white)]"
            >
              <FaChevronLeft className="text-[12px]" />
            </button>

            {renderPagination()}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--color-slate-600)] border border-[var(--color-slate-200)] hover:bg-[var(--color-blue-50)] hover:text-[var(--color-brand)] hover:border-[var(--color-blue-200)] transition-all disabled:opacity-50 disabled:pointer-events-none bg-[var(--color-white)]"
            >
              <FaChevronRight className="text-[12px]" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

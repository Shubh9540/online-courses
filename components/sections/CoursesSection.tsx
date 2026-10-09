"use client";

import React, { useState } from 'react';
import { CoursesData } from '@/types/templates.types';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaArrowRight,
  FaStar,
  FaRegHeart,
  FaRegFileAlt,
  FaRegClock,
  FaChartBar,
  FaGraduationCap
} from 'react-icons/fa';

export const CoursesSection = ({ data }: { data?: CoursesData }) => {
  const [activeTab, setActiveTab] = useState('All Categories');

  if (!data) return null;

  // Filter courses based on active tab
  const filteredCourses = activeTab === 'All Categories'
    ? data.courses
    : data.courses?.filter(course => course.category === activeTab);

  return (
    <section className="w-full py-20 lg:py-12 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-8 mb-12">

          {/* Left Text */}
          <div className="max-w-2xl">
            {/* Subtitle Badge */}
            <div className="mb-4 inline-flex items-center gap-2 bg-blue-50 text-[#0f62fe] px-3.5 py-1.5 rounded-full">
              <FaGraduationCap className="text-[13px]" />
              <span className="text-[11px] font-bold tracking-widest uppercase">{data.subtitle}</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold leading-tight mb-3 text-slate-900 tracking-tight">
              {data.title1}
              <span className="text-[#0f62fe]">{data.title2}</span>
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-[13px] lg:text-[15px] leading-relaxed max-w-xl">
              {data.description}
            </p>
          </div>

          {/* Right Tabs */}
          <div className="flex items-center flex-wrap lg:justify-end gap-2 w-full lg:w-auto">
            {data.tabs?.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all duration-300 ${activeTab === tab
                    ? 'bg-[#0f62fe] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
              >
                {tab}
              </button>
            ))}

            {/* View All Arrow */}
            {data.viewAllUrl && (
              <Link
                href={data.viewAllUrl}
                className="w-9 h-9 shrink-0 rounded-full bg-blue-50 text-[#0f62fe] flex items-center justify-center hover:bg-[#0f62fe] hover:text-white transition-colors duration-300 ml-1"
              >
                <FaArrowRight className="text-[11px]" />
              </Link>
            )}
          </div>

        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {filteredCourses?.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-3xl p-4 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col sm:flex-row gap-6"
            >
              {/* Left Image */}
              <div className="w-full sm:w-[40%] xl:w-[45%] relative aspect-[4/3] sm:aspect-auto rounded-2xl overflow-hidden shrink-0">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Content */}
              <div className="flex-1 flex flex-col justify-center py-2 relative">

                {/* Save Heart Icon */}
                <button className="absolute top-0 right-0 w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-blue-500 hover:bg-blue-50 transition-colors">
                  <FaRegHeart className="text-sm" />
                </button>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-2.5 pr-10">
                  <span className="text-[13px] font-bold text-slate-700">{course.rating}</span>
                  <div className="flex text-amber-400 text-[11px] gap-0.5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="text-[13px] text-slate-400">({course.reviews})</span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-[var(--color-primary)] transition-colors pr-8">
                  {course.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-2">
                  {course.description}
                </p>

                {/* Meta Tags */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-5">
                  <div className="flex items-center gap-2 text-[13px] font-medium text-slate-600">
                    <FaRegFileAlt className="text-blue-500 text-sm" />
                    {course.lessons}
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-medium text-slate-600">
                    <FaRegClock className="text-blue-500 text-sm" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-medium text-slate-600">
                    <FaChartBar className="text-blue-500 text-sm" />
                    {course.level}
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-slate-100 mb-4"></div>

                {/* Footer: Price & Button */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#0f62fe]">{course.price}</span>
                    <span className="text-[13px] text-slate-400 line-through">{course.originalPrice}</span>
                  </div>

                  <Link
                    href={course.url}
                    className="flex items-center gap-2 bg-[#0f62fe] text-white px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
                  >
                    View Details
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

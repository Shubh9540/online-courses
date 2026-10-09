'use client';

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
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

export const CoursePageSection = ({ data }: { data?: CoursesData }) => {
  const [activeTab, setActiveTab] = useState('All Categories');
  const [sortBy, setSortBy] = useState('Latest Courses');
  const [currentPage, setCurrentPage] = useState(1);

  if (!data) return null;

  // Filter
  const filteredCourses = activeTab === 'All Categories'
    ? data.courses || []
    : (data.courses || []).filter(course => course.category === activeTab);

  // Pagination (6 per page)
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage) || 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedCourses = filteredCourses.slice(startIndex, startIndex + itemsPerPage);

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
              ? 'bg-[#0f62fe] text-white shadow-md'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-blue-50 hover:text-[#0f62fe]'
            }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <section className="w-full py-8 lg:py-10 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

        {/* Header - Centered */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="mb-4 inline-flex items-center gap-2 bg-[#dce9ff] text-[#0f62fe] px-4 py-1.5 rounded-full">
            <span className="text-[12px] font-bold tracking-widest uppercase">{data.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight mb-4 text-slate-900 tracking-tight">
            {data.title1}
            <span className="text-[#0f62fe]">{data.title2}</span>
          </h2>
          <div className="flex gap-2 mb-6">
            <div className="w-8 h-1 bg-[#0f62fe] rounded-full"></div>
            <div className="w-4 h-1 bg-slate-300 rounded-full"></div>
            <div className="w-4 h-1 bg-slate-300 rounded-full"></div>
          </div>
          <p className="text-slate-500 text-[15px] leading-relaxed max-w-2xl">
            {data.description}
          </p>
        </div>

        {/* Filter and Sort Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-6 pb-4 border-b border-slate-100">

          {/* Tabs */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-3">
            {data.tabs?.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => { setActiveTab(tab); setCurrentPage(1); }}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 border ${activeTab === tab
                    ? 'bg-[#0f62fe] text-white border-[#0f62fe] shadow-md shadow-blue-500/20'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-3 w-full lg:w-auto shrink-0">
            <span className="text-[13px] text-slate-500 font-medium">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-slate-200 text-slate-700 text-[13px] font-bold rounded-lg px-4 py-2.5 outline-none focus:border-[#0f62fe] transition-colors cursor-pointer appearance-none pr-10 relative"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem top 50%',
                backgroundSize: '0.65rem auto'
              }}
            >
              <option value="Latest Courses">Latest Courses</option>
              <option value="Most Popular">Most Popular</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
          {displayedCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-[24px] p-5 border border-slate-100 shadow-[0_4px_25px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col sm:flex-row gap-6 relative"
            >
              {/* Left Image */}
              <div className="w-full sm:w-[220px] shrink-0 relative aspect-[4/3] sm:aspect-auto rounded-2xl overflow-hidden bg-slate-100">
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
                <button className="absolute top-0 right-0 w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-blue-500 hover:bg-blue-50 hover:border-blue-200 transition-colors z-10 bg-white">
                  <FaRegHeart className="text-[13px]" />
                </button>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-2 pr-10">
                  <span className="text-[14px] font-extrabold text-amber-500">{course.rating}</span>
                  <div className="flex text-amber-400 text-[11px] gap-[2px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="text-[13px] text-slate-400 font-medium">({course.reviews})</span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-extrabold text-slate-900 mb-2 leading-tight group-hover:text-[#0f62fe] transition-colors pr-8">
                  {course.title}
                </h3>
                <p className="text-[14px] text-slate-500 leading-relaxed mb-5 line-clamp-2 pr-2">
                  {course.description}
                </p>

                {/* Meta Tags */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-5">
                  <div className="flex items-center gap-2 text-[13px] font-bold text-slate-600">
                    <FaRegFileAlt className="text-[#0f62fe] text-[15px]" />
                    {course.lessons}
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-bold text-slate-600">
                    <FaRegClock className="text-[#0f62fe] text-[15px]" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-bold text-slate-600">
                    <FaChartBar className="text-[#0f62fe] text-[15px]" />
                    {course.level}
                  </div>
                </div>

                {/* Footer: Price & Button */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-[22px] font-extrabold text-[#0f62fe]">{course.price}</span>
                    <span className="text-[13px] text-slate-400 line-through font-medium">{course.originalPrice}</span>
                  </div>

                  <Link
                    href={course.url}
                    className="flex items-center gap-2 bg-[#0f62fe] text-white px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25 group-hover:-translate-y-0.5"
                  >
                    View Details
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
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 border border-slate-200 hover:bg-blue-50 hover:text-[#0f62fe] hover:border-blue-200 transition-all disabled:opacity-50 disabled:pointer-events-none bg-white"
            >
              <FaChevronLeft className="text-[12px]" />
            </button>

            {renderPagination()}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 border border-slate-200 hover:bg-blue-50 hover:text-[#0f62fe] hover:border-blue-200 transition-all disabled:opacity-50 disabled:pointer-events-none bg-white"
            >
              <FaChevronRight className="text-[12px]" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

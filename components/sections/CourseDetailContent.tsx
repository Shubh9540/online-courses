'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  FaPlayCircle,
  FaArrowRight,
  FaHeadset,
  FaRegCheckCircle,
  FaFileDownload,
  FaCertificate,
  FaMobileAlt,
  FaChevronDown,
  FaDesktop,
  FaCode,
  FaLayerGroup,
  FaFileAlt,
  FaCog,
  FaBriefcase,
  FaVideo,
  FaUsers
} from 'react-icons/fa';
import { MdOutlineSignalCellularAlt, MdAccessTime } from 'react-icons/md';

export const CourseDetailContent = ({ data }: { data?: any }) => {
  const [openModule, setOpenModule] = useState<number | null>(1);

  if (!data) return null;

  return (
    <section className="w-full py-12 lg:py-12 bg-slate-50 relative">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">

        {/* Top Header Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 mb-10 overflow-hidden flex flex-col-reverse lg:flex-row items-center">
          {/* Left Text */}
          <div className="p-8 lg:p-12 lg:w-[60%] w-full">
            <div className="mb-4 inline-flex items-center bg-blue-50 text-[#0f62fe] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              {data.category}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#051024] mb-4 leading-[1.2]">
              {data.title}
            </h1>
            <p className="text-slate-500 text-[15px] sm:text-[17px] mb-8 leading-relaxed max-w-xl">
              {data.description} Dive into modern technologies from scratch and build real-world projects.
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <div className="text-[#0f62fe] text-2xl"><MdOutlineSignalCellularAlt /></div>
                <div>
                  <div className="text-[13px] font-bold text-slate-900">{data.level}</div>
                  <div className="text-[11px] text-slate-500">Level</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#0f62fe] text-2xl"><FaPlayCircle /></div>
                <div>
                  <div className="text-[13px] font-bold text-slate-900">{data.lessons}</div>
                  <div className="text-[11px] text-slate-500">Self-Paced Learning</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#0f62fe] text-2xl"><MdAccessTime /></div>
                <div>
                  <div className="text-[13px] font-bold text-slate-900">Lifetime Access</div>
                  <div className="text-[11px] text-slate-500">Learn at Your Own Pace</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[40%] h-[300px] lg:h-[350px] relative">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover rounded-tl-3xl lg:rounded-tl-none"
            />
            {/* Dots Decor */}
            <div className="absolute top-8 -left-8 w-16 h-16 opacity-50 hidden lg:block">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="2" fill="#0f62fe" />
                <circle cx="20" cy="5" r="2" fill="#0f62fe" />
                <circle cx="35" cy="5" r="2" fill="#0f62fe" />
                <circle cx="5" cy="20" r="2" fill="#0f62fe" />
                <circle cx="20" cy="20" r="2" fill="#0f62fe" />
                <circle cx="35" cy="20" r="2" fill="#0f62fe" />
                <circle cx="5" cy="35" r="2" fill="#0f62fe" />
                <circle cx="20" cy="35" r="2" fill="#0f62fe" />
                <circle cx="35" cy="35" r="2" fill="#0f62fe" />
              </svg>
            </div>
            {/* Blue Shape Decor */}
            <div className="absolute top-1/2 -left-3 w-6 h-24 bg-[#0f62fe] rounded-r-xl -translate-y-1/2 hidden lg:block"></div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Left Column (Content) */}
          <div className="w-full lg:w-[65%]">

            {/* Course Overview */}
            <div className="mb-12">
              <h2 className="text-[28px] font-extrabold text-[#051024] mb-4">
                Course <span className="text-[#0f62fe]">Overview</span>
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-4">
                This comprehensive course is designed for beginners as well as advanced learners who want to master the skills. You will learn everything through hands-on projects, real-world examples, and expert guidance.
              </p>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                By the end of this course, you will be able to build professional portfolios and take your career to the next level.
              </p>
            </div>

            {/* What You'll Learn */}
            <div className="mb-12">
              <h2 className="text-[28px] font-extrabold text-[#051024] mb-6">
                What You'll <span className="text-[#0f62fe]">Learn</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <FaDesktop />, text: "Create responsive layouts from scratch" },
                  { icon: <FaCode />, text: "Master core concepts and frameworks" },
                  { icon: <FaLayerGroup />, text: "Work with modern tools and libraries" },
                  { icon: <FaFileAlt />, text: "Build real-world complete projects" },
                  { icon: <FaCog />, text: "Understand best practices & optimization" },
                  { icon: <FaBriefcase />, text: "Prepare for freelancing and job opportunities" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 shrink-0 bg-blue-50 text-[#0f62fe] rounded-lg flex items-center justify-center text-lg">
                      {item.icon}
                    </div>
                    <span className="text-[13px] font-medium text-slate-700 leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Curriculum */}
            <div className="mb-12">
              <h2 className="text-[28px] font-extrabold text-[#051024] mb-6">
                Course <span className="text-[#0f62fe]">Curriculum</span>
              </h2>
              <div className="space-y-3">
                {[
                  { num: "01", title: "Introduction and Basics", lessons: "5 Lessons", time: "45 min" },
                  { num: "02", title: "Core Fundamentals", lessons: "8 Lessons", time: "1 hr 20 min" },
                  { num: "03", title: "Advanced Techniques", lessons: "10 Lessons", time: "2 hr 15 min" },
                  { num: "04", title: "Real-world Projects", lessons: "12 Lessons", time: "2 hr 40 min" },
                  { num: "05", title: "Optimization & Best Practices", lessons: "8 Lessons", time: "1 hr 30 min" }
                ].map((mod, idx) => (
                  <div key={idx} className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenModule(openModule === idx ? null : idx)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold ${openModule === idx ? 'bg-[#0f62fe] text-white' : 'bg-blue-50 text-[#0f62fe]'}`}>
                          {mod.num}
                        </div>
                        <span className="font-extrabold text-slate-900 text-[15px]">{mod.title}</span>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="text-[12px] text-slate-500 hidden sm:block">{mod.lessons}</span>
                        <span className="text-[12px] text-slate-500 hidden sm:block w-16 text-right">{mod.time}</span>
                        <FaChevronDown className={`text-slate-400 text-xs transition-transform ${openModule === idx ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    {openModule === idx && (
                      <div className="px-5 pb-5 pt-2 border-t border-slate-50">
                        <div className="space-y-3">
                          {[1, 2, 3].map(lesson => (
                            <div key={lesson} className="flex items-center justify-between text-[13px] text-slate-600 pl-12 pr-4">
                              <div className="flex items-center gap-3">
                                <FaPlayCircle className="text-[#0f62fe] text-[15px]" />
                                <span>{lesson}. Deep dive into the topic {lesson}</span>
                              </div>
                              <span className="font-medium text-slate-400">15:00</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-12">
              <h2 className="text-[28px] font-extrabold text-[#051024] mb-6">
                Requi<span className="text-[#0f62fe]">rements</span>
              </h2>
              <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  <div className="flex items-center gap-3">
                    <FaRegCheckCircle className="text-[#0f62fe] text-[18px]" />
                    <span className="text-[14px] text-slate-600 font-medium">Basic knowledge of using a computer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaRegCheckCircle className="text-[#0f62fe] text-[18px]" />
                    <span className="text-[14px] text-slate-600 font-medium">A passion for learning and exploring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaRegCheckCircle className="text-[#0f62fe] text-[18px]" />
                    <span className="text-[14px] text-slate-600 font-medium">No prior experience required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaRegCheckCircle className="text-[#0f62fe] text-[18px]" />
                    <span className="text-[14px] text-slate-600 font-medium">A laptop/desktop with internet connection</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Sidebar Sticky) */}
          <div className="w-full lg:w-[35%] lg:sticky lg:top-32">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_10px_40px_rgb(0,0,0,0.06)] border border-slate-100">

              {/* Pricing */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[34px] font-extrabold text-[#051024]">{data.price}</span>
                <span className="text-[16px] text-slate-400 line-through font-medium mt-2">{data.originalPrice}</span>
                <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded ml-auto mt-1">50% OFF</span>
              </div>

              {/* Buttons */}
              <button className="w-full bg-[#0f62fe] text-white py-3.5 rounded-xl font-bold text-[15px] hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25 mb-3 flex items-center justify-center gap-2">
                Enroll Now <FaArrowRight className="text-[11px]" />
              </button>
              <button className="w-full bg-white border border-[#0f62fe] text-[#0f62fe] py-3.5 rounded-xl font-bold text-[15px] hover:bg-blue-50 transition-colors mb-8 flex items-center justify-center gap-2">
                <FaHeadset className="text-[16px]" /> Contact Us <FaArrowRight className="text-[11px]" />
              </button>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: <FaRegCheckCircle />, text: "Lifetime Access" },
                  { icon: <FaPlayCircle />, text: data.lessons + " Video Lectures" },
                  { icon: <FaFileDownload />, text: "Downloadable Resources" },
                  { icon: <FaCertificate />, text: "Certificate of Completion" },
                  { icon: <FaHeadset />, text: "Full Lifetime Support" },
                  { icon: <FaMobileAlt />, text: "Access on Mobile & Desktop" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="text-[#0f62fe] text-[16px]">{item.icon}</div>
                    <span className="text-[13px] text-slate-600 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Course Includes */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h4 className="text-[16px] font-extrabold text-[#051024] mb-4">This Course Includes:</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="text-[#0f62fe] text-[16px]"><FaLayerGroup /></div>
                    <span className="text-[13px] text-slate-600 font-medium">12 Modules</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-[#0f62fe] text-[16px]"><FaVideo /></div>
                    <span className="text-[13px] text-slate-600 font-medium">49 Video Lessons</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-[#0f62fe] text-[16px]"><FaCode /></div>
                    <span className="text-[13px] text-slate-600 font-medium">10+ Projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-[#0f62fe] text-[16px]"><FaCertificate /></div>
                    <span className="text-[13px] text-slate-600 font-medium">Certificate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-[#0f62fe] text-[16px]"><FaUsers /></div>
                    <span className="text-[13px] text-slate-600 font-medium">Community Support</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
import { CourseDetailUI, CourseItem } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaDesktop': return <FaDesktop />;
    case 'FaCode': return <FaCode />;
    case 'FaLayerGroup': return <FaLayerGroup />;
    case 'FaFileAlt': return <FaFileAlt />;
    case 'FaCog': return <FaCog />;
    case 'FaBriefcase': return <FaBriefcase />;
    case 'FaRegCheckCircle': return <FaRegCheckCircle />;
    case 'FaPlayCircle': return <FaPlayCircle />;
    case 'FaFileDownload': return <FaFileDownload />;
    case 'FaCertificate': return <FaCertificate />;
    case 'FaHeadset': return <FaHeadset />;
    case 'FaMobileAlt': return <FaMobileAlt />;
    case 'FaVideo': return <FaVideo />;
    case 'FaUsers': return <FaUsers />;
    default: return null;
  }
};

export const CourseDetailContent = ({ data, ui }: { data?: CourseItem; ui?: CourseDetailUI }) => {
  const [openModule, setOpenModule] = useState<number | null>(1);

  if (!data || !ui) return null;

  return (
    <section className="w-full py-12 lg:py-12 bg-[var(--color-slate-50)] relative">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">

        {/* Top Header Card */}
        <div className="bg-[var(--color-white)] rounded-3xl shadow-sm border border-[var(--color-slate-100)] mb-10 overflow-hidden flex flex-col-reverse lg:flex-row items-center">
          {/* Left Text */}
          <div className="p-8 lg:p-12 lg:w-[60%] w-full">
            <div className="mb-4 inline-flex items-center bg-[var(--color-blue-50)] text-[var(--color-brand)] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              {data.category}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[var(--color-heading)] mb-4 leading-[1.2]">
              {data.title}
            </h1>
            <p className="text-[var(--color-slate-500)] text-[15px] sm:text-[17px] mb-8 leading-relaxed max-w-xl">
              {data.description} {ui.introSuffix}
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <div className="text-[var(--color-brand)] text-2xl"><MdOutlineSignalCellularAlt /></div>
                <div>
                  <div className="text-[13px] font-bold text-[var(--color-slate-900)]">{data.level}</div>
                  <div className="text-[11px] text-[var(--color-slate-500)]">{ui.levelLabel}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[var(--color-brand)] text-2xl"><FaPlayCircle /></div>
                <div>
                  <div className="text-[13px] font-bold text-[var(--color-slate-900)]">{data.lessons}</div>
                  <div className="text-[11px] text-[var(--color-slate-500)]">{ui.learningLabel}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[var(--color-brand)] text-2xl"><MdAccessTime /></div>
                <div>
                  <div className="text-[13px] font-bold text-[var(--color-slate-900)]">{ui.accessValue}</div>
                  <div className="text-[11px] text-[var(--color-slate-500)]">{ui.accessLabel}</div>
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
                <circle cx="5" cy="5" r="2" fill="var(--color-brand)" />
                <circle cx="20" cy="5" r="2" fill="var(--color-brand)" />
                <circle cx="35" cy="5" r="2" fill="var(--color-brand)" />
                <circle cx="5" cy="20" r="2" fill="var(--color-brand)" />
                <circle cx="20" cy="20" r="2" fill="var(--color-brand)" />
                <circle cx="35" cy="20" r="2" fill="var(--color-brand)" />
                <circle cx="5" cy="35" r="2" fill="var(--color-brand)" />
                <circle cx="20" cy="35" r="2" fill="var(--color-brand)" />
                <circle cx="35" cy="35" r="2" fill="var(--color-brand)" />
              </svg>
            </div>
            {/* Blue Shape Decor */}
            <div className="absolute top-1/2 -left-3 w-6 h-24 bg-[var(--color-brand)] rounded-r-xl -translate-y-1/2 hidden lg:block"></div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Left Column (Content) */}
          <div className="w-full lg:w-[65%]">

            {/* Course Overview */}
            <div className="mb-12">
              <h2 className="text-[28px] font-extrabold text-[var(--color-heading)] mb-4">
                {ui.overviewTitle1} <span className="text-[var(--color-brand)]">{ui.overviewTitle2}</span>
              </h2>
              <p className="text-[var(--color-slate-600)] text-[15px] leading-relaxed mb-4">
                {ui.overviewParagraphs[0]}
              </p>
              <p className="text-[var(--color-slate-600)] text-[15px] leading-relaxed">
                {ui.overviewParagraphs[1]}
              </p>
            </div>

            {/* What You'll Learn */}
            <div className="mb-12">
              <h2 className="text-[28px] font-extrabold text-[var(--color-heading)] mb-6">
                {ui.learnTitle1} <span className="text-[var(--color-brand)]">{ui.learnTitle2}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ui.learningOutcomes.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 bg-[var(--color-white)] border border-[var(--color-slate-100)] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 shrink-0 bg-[var(--color-blue-50)] text-[var(--color-brand)] rounded-lg flex items-center justify-center text-lg">
                      {renderIcon(item.icon)}
                    </div>
                    <span className="text-[13px] font-medium text-[var(--color-slate-700)] leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Curriculum */}
            <div className="mb-12">
              <h2 className="text-[28px] font-extrabold text-[var(--color-heading)] mb-6">
                {ui.curriculumTitle1} <span className="text-[var(--color-brand)]">{ui.curriculumTitle2}</span>
              </h2>
              <div className="space-y-3">
                {ui.modules.map((mod, idx) => (
                  <div key={mod.id} className="bg-[var(--color-white)] border border-[var(--color-slate-100)] rounded-xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenModule(openModule === idx ? null : idx)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-[var(--color-slate-50)] transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold ${openModule === idx ? 'bg-[var(--color-brand)] text-[var(--color-white)]' : 'bg-[var(--color-blue-50)] text-[var(--color-brand)]'}`}>
                          {mod.number}
                        </div>
                        <span className="font-extrabold text-[var(--color-slate-900)] text-[15px]">{mod.title}</span>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="text-[12px] text-[var(--color-slate-500)] hidden sm:block">{mod.lessons}</span>
                        <span className="text-[12px] text-[var(--color-slate-500)] hidden sm:block w-16 text-right">{mod.time}</span>
                        <FaChevronDown className={`text-[var(--color-slate-400)] text-xs transition-transform ${openModule === idx ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    {openModule === idx && (
                      <div className="px-5 pb-5 pt-2 border-t border-[var(--color-slate-50)]">
                        <div className="space-y-3">
                          {[1, 2, 3].map(lesson => (
                            <div key={lesson} className="flex items-center justify-between text-[13px] text-[var(--color-slate-600)] pl-12 pr-4">
                              <div className="flex items-center gap-3">
                                <FaPlayCircle className="text-[var(--color-brand)] text-[15px]" />
                                <span>{lesson}. {ui.lessonTitle} {lesson}</span>
                              </div>
                              <span className="font-medium text-[var(--color-slate-400)]">{ui.lessonDuration}</span>
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
              <h2 className="text-[28px] font-extrabold text-[var(--color-heading)] mb-6">
                {ui.requirementsTitle1}<span className="text-[var(--color-brand)]">{ui.requirementsTitle2}</span>
              </h2>
              <div className="bg-[var(--color-white)] border border-[var(--color-slate-100)] rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {ui.requirements.map((requirement) => (
                    <div key={requirement} className="flex items-center gap-3">
                      <FaRegCheckCircle className="text-[var(--color-brand)] text-[18px]" />
                      <span className="text-[14px] text-[var(--color-slate-600)] font-medium">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Sidebar Sticky) */}
          <div className="w-full lg:w-[35%] lg:sticky lg:top-32">
            <div className="bg-[var(--color-white)] rounded-3xl p-6 md:p-8 shadow-[0_10px_40px_var(--color-shadow-6)] border border-[var(--color-slate-100)]">

              {/* Pricing */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[34px] font-extrabold text-[var(--color-heading)]">{data.price}</span>
                <span className="text-[16px] text-[var(--color-slate-400)] line-through font-medium mt-2">{data.originalPrice}</span>
                <span className="bg-[var(--color-green-500)] text-[var(--color-white)] text-[10px] font-bold px-2 py-1 rounded ml-auto mt-1">{ui.discountText}</span>
              </div>

              {/* Buttons */}
              <Link href={ui.enrollUrl} className="w-full bg-[var(--color-brand)] text-[var(--color-white)] py-3.5 rounded-xl font-bold text-[15px] hover:bg-[var(--color-blue-700)] transition-colors shadow-lg shadow-[var(--color-blue-500)]/25 mb-3 flex items-center justify-center gap-2">
                {ui.enrollText} <FaArrowRight className="text-[11px]" />
              </Link>
              <Link href={ui.contactUrl} className="w-full bg-[var(--color-white)] border border-[var(--color-brand)] text-[var(--color-brand)] py-3.5 rounded-xl font-bold text-[15px] hover:bg-[var(--color-blue-50)] transition-colors mb-8 flex items-center justify-center gap-2">
                <FaHeadset className="text-[16px]" /> {ui.contactText} <FaArrowRight className="text-[11px]" />
              </Link>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {ui.sidebarFeatures.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="text-[var(--color-brand)] text-[16px]">{renderIcon(item.icon)}</div>
                    <span className="text-[13px] text-[var(--color-slate-600)] font-medium">{item.usesLessonCount ? `${data.lessons} ${item.text}` : item.text}</span>
                  </div>
                ))}
              </div>

              {/* Course Includes */}
              <div className="bg-[var(--color-slate-50)] rounded-xl p-5 border border-[var(--color-slate-100)]">
                <h4 className="text-[16px] font-extrabold text-[var(--color-heading)] mb-4">{ui.includesTitle}</h4>
                <div className="space-y-4">
                  {ui.includes.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <div className="text-[var(--color-brand)] text-[16px]">{renderIcon(item.icon)}</div>
                      <span className="text-[13px] text-[var(--color-slate-600)] font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

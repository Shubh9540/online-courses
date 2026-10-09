import React from 'react';
import { CategoryData } from '@/types/templates.types';
import Link from 'next/link';
import {
  FaCode,
  FaChartLine,
  FaPaintBrush,
  FaDatabase,
  FaRobot,
  FaCog,
  FaBriefcase,
  FaCamera,
  FaGraduationCap,
  FaLanguage,
  FaArrowRight
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaCode': return <FaCode />;
    case 'FaChartLine': return <FaChartLine />;
    case 'FaPaintBrush': return <FaPaintBrush />;
    case 'FaDatabase': return <FaDatabase />;
    case 'FaRobot': return <FaRobot />;
    case 'FaCog': return <FaCog />;
    case 'FaBriefcase': return <FaBriefcase />;
    case 'FaCamera': return <FaCamera />;
    case 'FaGraduationCap': return <FaGraduationCap />;
    case 'FaLanguage': return <FaLanguage />;
    default: return <FaCode />;
  }
};

export const CategorySection = ({ data }: { data?: CategoryData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-12 bg-white relative overflow-hidden">

      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-30">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="3" fill="#2563EB" />
          <circle cx="30" cy="10" r="3" fill="#2563EB" />
          <circle cx="50" cy="10" r="3" fill="#2563EB" />
          <circle cx="70" cy="10" r="3" fill="#2563EB" />
          <circle cx="10" cy="30" r="3" fill="#2563EB" />
          <circle cx="30" cy="30" r="3" fill="#2563EB" />
          <circle cx="50" cy="30" r="3" fill="#2563EB" />
          <circle cx="70" cy="30" r="3" fill="#2563EB" />
          <circle cx="10" cy="50" r="3" fill="#2563EB" />
          <circle cx="30" cy="50" r="3" fill="#2563EB" />
          <circle cx="50" cy="50" r="3" fill="#2563EB" />
          <circle cx="70" cy="50" r="3" fill="#2563EB" />
          <circle cx="10" cy="70" r="3" fill="#2563EB" />
          <circle cx="30" cy="70" r="3" fill="#2563EB" />
          <circle cx="50" cy="70" r="3" fill="#2563EB" />
          <circle cx="70" cy="70" r="3" fill="#2563EB" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">

        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Subtitle Badge */}
          <div className="mb-5 inline-flex items-center gap-2 bg-blue-50 text-[var(--color-primary)] px-4 py-1.5 rounded-full">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            <span className="text-[11px] font-bold tracking-widest uppercase">{data.subtitle}</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.2] mb-6 text-slate-900 tracking-tight">
            {data.title1}
            <span className="text-[var(--color-primary)]">{data.title2}</span>
          </h2>

          {/* Description */}
          <p className="text-slate-500 text-[15px] lg:text-base leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
          {data.categories?.map((category) => (
            <Link
              key={category.id}
              href={category.url}
              className="group bg-white rounded-2xl p-4 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 lg:gap-4"
            >
              {/* Icon */}
              <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-xl lg:text-[22px] shrink-0 ${category.iconBg} ${category.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                {renderIcon(category.icon)}
              </div>

              {/* Text */}
              <div className="flex-1">
                <h4 className="text-[13px] sm:text-[14px] leading-snug font-bold text-slate-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors break-words">
                  {category.title}
                </h4>
                <p className="text-[11px] sm:text-[12px] text-slate-500 font-medium whitespace-nowrap">
                  {category.coursesCount}
                </p>
              </div>

              {/* Arrow */}
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 opacity-100 lg:opacity-0 lg:-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <FaArrowRight className="text-[9px] sm:text-[10px]" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

'use client';
import React from 'react';
import { HeroData } from '@/types/templates.types';
import Link from 'next/link';
import CountUp from 'react-countup';
import { FaPlay, FaUsers, FaCertificate, FaBookOpen, FaUserTie, FaChartBar, FaGraduationCap, FaArrowRight } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPlay': return <FaPlay />;
    case 'FaUsers': return <FaUsers />;
    case 'FaCertificate': return <FaCertificate />;
    case 'FaBookOpen': return <FaBookOpen />;
    case 'FaUserTie': return <FaUserTie />;
    case 'FaChartBar': return <FaChartBar />;
    default: return null;
  }
};

export const HeroSection = ({ data }: { data?: HeroData }) => {
  if (!data) return null;

  return (
    <section className="relative w-full bg-[#f4f9ff] pt-2 lg:pt-4 pb-12 lg:pb-16 overflow-hidden flex flex-col">
      <div className="relative z-10 mx-auto w-full max-w-[1250px] px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          
          {/* Left Content */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left z-20">
            {/* Subtitle Badge */}
            <div className="mb-3 lg:mb-4 flex items-center gap-2 bg-white text-[var(--color-primary)] px-4 py-1.5 rounded-full border border-blue-100 shadow-sm">
              <FaGraduationCap className="text-base lg:text-lg" />
              <span className="text-xs lg:text-sm font-semibold tracking-wide">{data.subtitle}</span>
            </div>

            {/* Title */}
            <h1 className="mb-3 lg:mb-4 text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] leading-[1.1] font-extrabold text-[#0f172a] tracking-tight">
              <span className="block">{data.title1}</span>
              <span className="block mt-1">
                {data.title3}
                <span className="text-[var(--color-primary)] relative whitespace-nowrap inline-block ml-2">
                  {data.title2}
                  {/* Underline SVG */}
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-300" viewBox="0 0 200 20" preserveAspectRatio="none">
                    <path d="M0,15 C50,0 150,0 200,15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="mb-6 text-sm lg:text-[15px] leading-relaxed text-slate-600 max-w-[460px]">
              {data.description}
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-start gap-4 mb-8">
              {data.button1 && (
                <Link 
                  href={data.button1.url} 
                  className="rounded-full bg-[var(--color-primary)] px-6 lg:px-8 py-3 text-sm lg:text-base font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg flex items-center gap-2"
                >
                  {data.button1.text.replace('->', '').trim()}
                  <FaArrowRight className="text-xs lg:text-sm" />
                </Link>
              )}
            </div>

            {/* Bottom Working Counters (Forced Single Line) */}
            {data.bottomStats && (
              <div className="flex flex-nowrap items-center w-full overflow-x-auto lg:overflow-visible pb-2 scrollbar-hide">
                {data.bottomStats.map((stat, index) => {
                  const numberMatch = stat.number.match(/(\d+)/);
                  const suffixMatch = stat.number.match(/[^\d]+$/);
                  const num = numberMatch ? parseInt(numberMatch[0]) : 0;
                  const suffix = suffixMatch ? suffixMatch[0] : '';

                  return (
                    <div key={stat.id} className={`flex items-center gap-2.5 shrink-0 ${index !== data.bottomStats!.length - 1 ? 'border-r border-slate-200 pr-4 mr-4 lg:pr-5 lg:mr-5' : ''}`}>
                      <div 
                        className="w-9 h-9 lg:w-11 lg:h-11 rounded-full flex items-center justify-center text-white shrink-0 text-[14px] lg:text-[17px]"
                        style={{ backgroundColor: stat.bgColor }}
                      >
                        {renderIcon(stat.icon)}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-extrabold text-[#0f172a] text-base lg:text-xl flex items-center leading-none">
                          <CountUp end={num} duration={2.5} enableScrollSpy scrollSpyOnce />
                          {suffix}
                        </span>
                        <span className="text-slate-500 text-[10px] lg:text-xs font-medium whitespace-nowrap mt-0.5">{stat.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Content - Image and Floating Stats */}
          <div className="w-full lg:w-[50%] relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
            {/* Background Dotted Lines / Circles (Centered on Image) */}
            <div className="absolute top-1/2 left-1/2 w-[550px] h-[550px] lg:w-[650px] lg:h-[650px] border border-dashed border-blue-200/80 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60 hidden lg:block pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 w-[750px] h-[750px] lg:w-[850px] lg:h-[850px] border border-dashed border-blue-200/60 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60 hidden lg:block pointer-events-none" />

            {/* Big Blue Circle behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-[#60a5fa] rounded-full opacity-90" />
            
            {/* Main Image */}
            <img 
              src={data.image1} 
              alt="Hero Banner" 
              className="relative z-10 w-[85%] max-w-[400px] lg:max-w-[550px] h-auto object-contain drop-shadow-2xl lg:-mr-10" 
            />

            {/* Floating Stats */}
            {data.floatingStats?.map((stat, idx) => (
              <div 
                key={stat.id}
                className={`absolute z-20 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-2 lg:p-3 flex items-center gap-2 lg:gap-3 transition-transform hover:-translate-y-1 ${
                  idx === 0 ? 'top-[10%] left-[0%] lg:-left-[5%]' :
                  idx === 1 ? 'top-[45%] left-[-5%] lg:-left-[10%]' :
                  idx === 2 ? 'top-[25%] right-[-5%] lg:right-[0%]' :
                  'bottom-[15%] right-[-5%] lg:right-[5%]'
                }`}
              >
                {stat.icon && (
                  <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-white shrink-0 text-sm lg:text-base ${
                    idx === 0 ? 'bg-blue-500' : idx === 1 ? 'bg-orange-500' : 'bg-green-500'
                  }`}>
                    {renderIcon(stat.icon)}
                  </div>
                )}
                
                <div className="flex flex-col">
                  {stat.avatars ? (
                    <div className="flex items-center mb-1">
                      {stat.avatars.map((av, i) => (
                        <img key={i} src={av} alt="avatar" className="w-4 h-4 lg:w-6 lg:h-6 rounded-full border-2 border-white -ml-2 first:ml-0" />
                      ))}
                    </div>
                  ) : null}
                  <span className="font-bold text-slate-800 text-[11px] lg:text-[14px] leading-tight">{stat.text1}</span>
                  {stat.text2 && <span className="text-[9px] lg:text-[11px] text-slate-500 mt-0.5">{stat.text2}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

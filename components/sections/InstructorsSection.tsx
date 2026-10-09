import React from 'react';
import { InstructorsData } from '@/types/templates.types';
import Image from 'next/image';
import Link from 'next/link';

export const InstructorsSection = ({ data }: { data?: InstructorsData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-12 bg-white relative overflow-hidden">

      {/* Background Decor: Giant Arc */}
      <div className="absolute -bottom-1/4 -left-32 w-[800px] h-[800px] rounded-full border-[80px] border-[#f0f5ff] opacity-50 pointer-events-none"></div>

      {/* Background Decor: Dots Pattern */}
      <div className="absolute bottom-20 left-10 opacity-30 pointer-events-none hidden lg:block">
        <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0, 15, 30, 45, 60, 75, 90].map((x) =>
            [0, 15, 30, 45].map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="#0f62fe" />
            ))
          )}
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 max-w-xl lg:-translate-y-6">

            {/* Subtitle Badge */}
            <div className="mb-5 inline-flex items-center bg-[#f0f5ff] text-[#051024] px-4 py-1.5 rounded-full">
              <span className="text-[12px] font-bold tracking-widest uppercase">{data.subtitle}</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.15] mb-6 text-[#051024] tracking-tight">
              {data.title1.split('\\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i === 0 && <br className="hidden sm:block" />}
                </React.Fragment>
              ))}
              <span className="text-[#0f62fe]">{data.title2}</span>
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-[15px] lg:text-[16px] leading-relaxed mb-8">
              {data.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={data.viewMoreUrl}
                className="bg-[#0f62fe] text-white px-8 py-3 rounded-full text-[14px] font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
              >
                View More
              </Link>
              <Link
                href={data.contactUrl}
                className="bg-white border-2 border-[#0f62fe] text-[#0f62fe] px-8 py-3 rounded-full text-[14px] font-bold hover:bg-[#0f62fe] hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>

          </div>

          {/* Right Column: Instructors Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 relative">
            {data.instructors?.map((instructor) => (
              <Link
                key={instructor.id}
                href={instructor.url}
                className="bg-white rounded-[10px] border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Image */}
                <div className="w-full relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4 bg-white">
                  <h4 className="text-[16px] font-bold text-[#051024] mb-0.5 group-hover:text-[#0f62fe] transition-colors">
                    {instructor.name}
                  </h4>
                  <p className="text-[12px] text-slate-500 font-medium">
                    {instructor.role}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

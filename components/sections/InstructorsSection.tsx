import React from 'react';
import { InstructorsData } from '@/types/templates.types';
import Image from 'next/image';
import Link from 'next/link';

export const InstructorsSection = ({ data }: { data?: InstructorsData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-12 bg-[var(--color-white)] relative overflow-hidden">

      {/* Background Decor: Giant Arc */}
      <div className="absolute -bottom-1/4 -left-32 w-[800px] h-[800px] rounded-full border-[80px] border-[var(--color-surface-blue-3)] opacity-50 pointer-events-none"></div>

      {/* Background Decor: Dots Pattern */}
      <div className="absolute bottom-20 left-10 opacity-30 pointer-events-none hidden lg:block">
        <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0, 15, 30, 45, 60, 75, 90].map((x) =>
            [0, 15, 30, 45].map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="var(--color-brand)" />
            ))
          )}
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 max-w-xl lg:-translate-y-6">

            {/* Subtitle Badge */}
            <div className="mb-5 inline-flex items-center bg-[var(--color-surface-blue-3)] text-[var(--color-heading)] px-4 py-1.5 rounded-full">
              <span className="text-[12px] font-bold tracking-widest uppercase">{data.subtitle}</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.15] mb-6 text-[var(--color-heading)] tracking-tight">
              {data.title1.split('\\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i === 0 && <br className="hidden sm:block" />}
                </React.Fragment>
              ))}
              <span className="text-[var(--color-brand)]">{data.title2}</span>
            </h2>

            {/* Description */}
            <p className="text-[var(--color-slate-500)] text-[15px] lg:text-[16px] leading-relaxed mb-8">
              {data.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={data.viewMoreUrl}
                className="bg-[var(--color-brand)] text-[var(--color-white)] px-8 py-3 rounded-full text-[14px] font-bold hover:bg-[var(--color-blue-700)] transition-colors shadow-md shadow-[var(--color-blue-500)]/20"
              >
                {data.viewMoreText}
              </Link>
              <Link
                href={data.contactUrl}
                className="bg-[var(--color-white)] border-2 border-[var(--color-brand)] text-[var(--color-brand)] px-8 py-3 rounded-full text-[14px] font-bold hover:bg-[var(--color-brand)] hover:text-[var(--color-white)] transition-colors"
              >
                {data.contactText}
              </Link>
            </div>

          </div>

          {/* Right Column: Instructors Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 relative">
            {data.instructors?.map((instructor) => (
              <article
                key={instructor.id}
                className="bg-[var(--color-white)] rounded-[10px] border border-[var(--color-slate-100)] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Image */}
                <div className="w-full relative aspect-[16/9] overflow-hidden bg-[var(--color-slate-100)]">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4 bg-[var(--color-white)]">
                  <h4 className="text-[16px] font-bold text-[var(--color-heading)] mb-0.5 group-hover:text-[var(--color-brand)] transition-colors">
                    {instructor.name}
                  </h4>
                  <p className="text-[12px] text-[var(--color-slate-500)] font-medium">
                    {instructor.role}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-slate-500)] line-clamp-2">
                    {instructor.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

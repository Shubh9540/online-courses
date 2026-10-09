import React from 'react';
import { CtaData } from '@/types/templates.types';
import Link from 'next/link';

export const CtaSection = ({ data }: { data?: CtaData }) => {
  if (!data) return null;

  return (
    <section className="bg-white py-8 lg:py-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

        {/* Compact CTA Banner */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-r from-[#031d4e] via-[#0b337c] to-[#0f62fe] px-8 lg:px-16 py-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_10px_40px_rgb(15,98,254,0.3)]">

          {/* Background Decor */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            {/* Wave lines svg */}
            <svg className="absolute w-full h-full object-cover" viewBox="0 0 1400 300" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0 300C300 300 400 0 700 0C1000 0 1100 300 1400 300V0H0V300Z" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
              <path d="M0 200C400 200 500 -100 800 -100C1100 -100 1200 200 1400 200V0H0V200Z" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
              <path d="M0 250C250 250 350 -50 700 -50C1050 -50 1150 250 1400 250V0H0V250Z" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
            </svg>
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0f62fe]/40 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
          </div>

          {/* Left Side: Text */}
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white leading-tight mb-3">
              {data.title1} <span className="text-[#a8c7ff]">{data.title2}</span>
            </h2>
            <p className="text-white/80 text-[16px]">
              {data.description}
            </p>
          </div>

          {/* Right Side: Button */}
          <div className="relative z-10 shrink-0">
            <Link
              href={data.buttonUrl}
              className="inline-flex items-center justify-center bg-white text-[#0f62fe] px-10 py-4 rounded-full text-[16px] font-bold hover:bg-slate-50 transition-colors shadow-lg"
            >
              {data.buttonText}
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

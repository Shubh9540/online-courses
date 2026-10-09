import React from 'react';
import { WhatWeDoData } from '@/types/templates.types';
import { TbUsers, TbDeviceLaptop, TbCertificate, TbTrendingUp } from 'react-icons/tb';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'TbUsers': return <TbUsers />;
    case 'TbDeviceLaptop': return <TbDeviceLaptop />;
    case 'TbCertificate': return <TbCertificate />;
    case 'TbTrendingUp': return <TbTrendingUp />;
    default: return null;
  }
};

export const WhatWeDoSection = ({ data }: { data?: WhatWeDoData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-16 lg:py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">

        {/* Subtitle Badge */}
        <div className="mb-4 inline-flex items-center bg-blue-50 text-[var(--color-primary)] px-4 py-1.5 rounded-full">
          <span className="text-xs lg:text-sm font-semibold tracking-wide">{data.subtitle}</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight mb-4 text-slate-900">
          {data.title1}
          <span className="text-[var(--color-primary)]">{data.title2}</span>
        </h2>

        {/* Description */}
        <p className="text-slate-500 text-base lg:text-lg mb-16 leading-relaxed max-w-2xl">
          {data.description}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 w-full">
          {(data.features || []).map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="w-28 h-28 lg:w-[130px] lg:h-[130px] shrink-0 rounded-full bg-white shadow-[0_10px_40px_rgba(37,99,235,0.08)] text-[var(--color-primary)] flex items-center justify-center text-5xl lg:text-[60px] mb-6 transition-transform hover:-translate-y-2">
                {renderIcon(feature.icon)}
              </div>

              {/* Text Content */}
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-slate-500 text-[15px] leading-relaxed max-w-[280px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

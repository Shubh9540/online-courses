'use client';
import React from 'react';
import { AchievementsData } from '@/types/templates.types';
import { FaUsers, FaGraduationCap, FaChalkboardTeacher, FaGlobe } from 'react-icons/fa';
import CountUp from 'react-countup';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUsers': return <FaUsers size={32} />;
    case 'FaGraduationCap': return <FaGraduationCap size={32} />;
    case 'FaChalkboardTeacher': return <FaChalkboardTeacher size={32} />;
    case 'FaGlobe': return <FaGlobe size={32} />;
    default: return null;
  }
};

export const AchievementsSection = ({ data }: { data?: AchievementsData }) => {
  if (!data) return null;

  return (
    <section
      className="relative w-full py-12 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: data.bgImage ? `url('${data.bgImage}')` : undefined }}
    >
      {/* Deep Blue Overlay */}
      <div className="absolute inset-0 bg-[var(--color-achievements-overlay)] z-0"></div>

      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[var(--color-brand)] text-[var(--color-white)] px-5 py-1.5 rounded-full text-sm font-bold mb-5 shadow-lg">
            {data.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-white)] mb-6">
            {data.title1} <span className="text-[var(--color-brand)]">{data.title2}</span>
          </h2>
          <div className="h-1 w-16 bg-[var(--color-brand)] mx-auto mb-6 rounded-full"></div>
          <p className="text-[var(--color-gray-300)] text-[16px] max-w-2xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-white)]/20">
          {data.counters?.map((counter) => (
            <div key={counter.id} className="flex flex-col items-center justify-center text-center pt-8 sm:pt-0">

              {/* Dotted Circle with Icon */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full border-2 border-dotted border-[var(--color-brand)] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-brand)] flex items-center justify-center text-[var(--color-white)] shadow-xl hover:scale-110 transition-transform duration-300">
                    {renderIcon(counter.icon)}
                  </div>
                </div>
              </div>

              {/* Numbers and Label */}
              <h3 className="text-4xl font-extrabold text-[var(--color-white)] mb-2 tracking-tight">
                <CountUp
                  end={parseInt(counter.number.replace(/\D/g, ''), 10)}
                  duration={2.5}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                />
                {counter.number.includes('+') ? '+' : ''}
              </h3>
              <p className="text-[var(--color-gray-300)] text-[15px] font-medium">
                {counter.label}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

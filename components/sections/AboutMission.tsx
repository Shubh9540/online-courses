import React from 'react';
import { MissionVisionData } from '@/types/templates.types';
import { FaGraduationCap, FaBookOpen, FaUsers, FaChartBar, FaLightbulb, FaBullseye } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaGraduationCap': return <FaGraduationCap size={24} />;
    case 'FaBookOpen': return <FaBookOpen size={24} />;
    case 'FaUsers': return <FaUsers size={24} />;
    case 'FaChartBar': return <FaChartBar size={24} />;
    case 'FaLightbulb': return <FaLightbulb size={24} />;
    case 'FaBullseye': return <FaBullseye size={24} />;
    default: return null;
  }
};

export const AboutMission = ({ data }: { data?: MissionVisionData }) => {
  if (!data) return null;

  return (
    <section className="bg-[#f4f7fc] py-16 lg:py-12 overflow-hidden relative">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* Left Side: Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <div className="bg-[#dce9ff] text-[#0f62fe] px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            {data.badge}
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            {data.title1} <span className="text-[#0f62fe]">{data.title2}</span>
          </h2>

          <p className="text-slate-600 text-[16px] md:text-[17px] leading-relaxed mb-10">
            {data.description}
          </p>

          <div className="flex items-start gap-8 md:gap-12 w-full">
            {data.features?.map(feature => (
              <div key={feature.id} className="flex flex-col items-start gap-3">
                <div className="w-14 h-14 rounded-full bg-[#dce9ff] flex items-center justify-center text-[#0f62fe]">
                  {renderIcon(feature.icon)}
                </div>
                <h4 className="text-slate-900 font-bold text-sm leading-snug whitespace-pre-line">
                  {feature.title.replace('\\n', '\n')}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 relative">
          {/* Blue decorative shape */}
          <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-[80%] h-[80%] bg-[#0f62fe] rounded-[40px] rounded-br-[100px] z-0"></div>

          {/* Image */}
          <div className="relative z-10 rounded-[30px] rounded-br-[80px] overflow-hidden shadow-2xl aspect-[4/3] border-8 border-white">
            <img src={data.image} alt={data.imageAlt} className="w-full h-full object-cover" />
          </div>

          {/* Dotted pattern */}
          <div className="absolute -bottom-8 -right-8 z-20 flex gap-2">
            {[...Array(4)].map((_, col) => (
              <div key={col} className="flex flex-col gap-2">
                {[...Array(4)].map((_, row) => (
                  <div key={row} className="w-2 h-2 rounded-full bg-[#dce9ff]"></div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

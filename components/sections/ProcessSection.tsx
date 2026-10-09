import React from 'react';
import { ProcessData } from '@/types/templates.types';
import { 
  FaCog, 
  FaDesktop, 
  FaFileAlt, 
  FaLaptop, 
  FaAward 
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaDesktop': return <FaDesktop />;
    case 'FaFileAlt': return <FaFileAlt />;
    case 'FaLaptop': return <FaLaptop />;
    case 'FaAward': return <FaAward />;
    default: return <FaDesktop />;
  }
};

export const ProcessSection = ({ data }: { data?: ProcessData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-24 bg-[#f8fbff] relative overflow-hidden">
      
      {/* Background Decor: Dots (Top Left) */}
      <div className="absolute top-10 left-10 lg:left-20 opacity-40">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="5" r="2" fill="#0f62fe" />
          <circle cx="20" cy="5" r="2" fill="#0f62fe" />
          <circle cx="35" cy="5" r="2" fill="#0f62fe" />
          <circle cx="50" cy="5" r="2" fill="#0f62fe" />
          <circle cx="5" cy="20" r="2" fill="#0f62fe" />
          <circle cx="20" cy="20" r="2" fill="#0f62fe" />
          <circle cx="35" cy="20" r="2" fill="#0f62fe" />
          <circle cx="50" cy="20" r="2" fill="#0f62fe" />
          <circle cx="5" cy="35" r="2" fill="#0f62fe" />
          <circle cx="20" cy="35" r="2" fill="#0f62fe" />
          <circle cx="35" cy="35" r="2" fill="#0f62fe" />
          <circle cx="50" cy="35" r="2" fill="#0f62fe" />
        </svg>
      </div>

      {/* Background Decor: Paper Plane (Top Right) */}
      <div className="absolute top-12 right-10 lg:right-20 hidden lg:block opacity-70">
        <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20 L40 10 L30 40 Z" stroke="#0f62fe" strokeWidth="2" fill="none" strokeLinejoin="round" />
          <path d="M40 10 C 60 0, 80 30, 90 60" stroke="#0f62fe" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 bg-blue-100 text-[#0f62fe] px-4 py-1.5 rounded-full">
            <FaCog className="text-[13px]" />
            <span className="text-[11px] font-bold tracking-widest uppercase">{data.subtitle}</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight mb-4 text-[#051024]">
            {data.title1}
            <span className="text-[#0f62fe]">{data.title2}</span>
          </h2>

          {/* Description */}
          <p className="text-slate-500 text-[14px] lg:text-[15px] leading-relaxed max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {data.items?.map((item, index) => (
            <div key={item.id} className="relative group">
              
              {/* The Card */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center text-center relative overflow-hidden">
                
                {/* Step Number Badge */}
                <div className={`absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md ${item.colorClass.replace('text-', 'bg-')}`}>
                  {item.step}
                </div>

                {/* Center Icon */}
                <div className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl mb-6 mt-8 transition-transform duration-500 group-hover:scale-110 ${item.bgClass} ${item.colorClass}`}>
                  {renderIcon(item.icon)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0f62fe] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Bottom Dash */}
                <div className={`w-8 h-1 mt-auto rounded-full ${item.colorClass.replace('text-', 'bg-')}`}></div>
              </div>

              {/* Connecting Arrow (Desktop only, except last item) */}
              {index < data.items.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-8 w-10 transform -translate-y-1/2 z-0 opacity-40">
                  <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10 C 15 -5, 25 25, 40 10" stroke="#0f62fe" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                    <path d="M35 5 L40 10 L35 15" stroke="#0f62fe" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

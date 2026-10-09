import React from 'react';
import { AboutUsData } from '@/types/templates.types';
import { FaGraduationCap, FaUsers, FaCheckCircle, FaPhoneAlt, FaArrowRight, FaShieldAlt, FaBookOpen } from 'react-icons/fa';
import Link from 'next/link';

export const AboutUsSection = ({ data }: { data?: AboutUsData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-16 lg:py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left Side: Bento Grid Images */}
        <div className="w-full lg:w-1/2 flex gap-4 sm:gap-6">
          {/* First Column */}
          <div className="flex flex-col gap-4 sm:gap-6 w-1/2">
            <div className="w-full rounded-2xl overflow-hidden aspect-[3/4] shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <img src={data.image1} alt="About Us" className="w-full h-full object-cover" />
            </div>
            {data.stats && (
              <div className="w-full bg-[#f8fbff] rounded-2xl p-5 sm:p-6 shadow-sm flex flex-row items-center justify-start gap-3 sm:gap-4">
                <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] bg-blue-100 text-[var(--color-primary)] rounded-full flex items-center justify-center text-3xl sm:text-[34px] shrink-0">
                  <FaUsers />
                </div>
                <div className="w-px h-14 bg-blue-100 shrink-0 mx-1 sm:mx-2" />
                <div className="flex flex-col text-left">
                  <h3 className="text-3xl sm:text-[34px] leading-none font-extrabold text-[var(--color-primary)] mb-1.5">{data.stats.experience}</h3>
                  <p className="text-slate-600 text-[13px] sm:text-sm font-medium leading-snug w-20">{data.stats.experienceLabel}</p>
                </div>
              </div>
            )}
          </div>
          {/* Second Column */}
          <div className="flex flex-col gap-4 sm:gap-6 w-1/2 pt-10">
            {data.stats && (
              <div className="w-full bg-[var(--color-primary)] rounded-2xl p-6 shadow-lg flex flex-col sm:flex-row items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl shrink-0">
                  <FaGraduationCap />
                </div>
                <h3 className="text-[17px] font-bold leading-snug">{data.stats.badgeText}</h3>
              </div>
            )}
            <div className="w-full rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[4/5.5] shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              {data.image2 && (
                <img src={data.image2} alt="About Us Learners" className="w-full h-full object-cover" />
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col">

          {/* Subtitle Badge */}
          <div className="mb-5 inline-flex items-center gap-2 bg-blue-50 text-[var(--color-primary)] px-4 py-1.5 rounded-full w-max">
            <FaBookOpen className="text-xs" />
            <span className="text-[11px] font-bold tracking-widest uppercase">{data.subtitle}</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.15] mb-6 text-slate-900 tracking-tight">
            {data.title1}
            <span className="text-[var(--color-primary)]">{data.title2}</span>
            {data.title3}
          </h2>

          {/* Description */}
          <p className="text-slate-500 text-[15px] lg:text-base mb-8 leading-relaxed max-w-[95%]">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-8 lg:gap-6">
            {/* Left Inner Content */}
            <div className="flex-1 flex flex-col">
              {/* Features List */}
              <ul className="flex flex-col gap-3.5 mb-8">
                {data.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="text-[var(--color-primary)] shrink-0">
                      <FaCheckCircle className="text-[17px]" />
                    </div>
                    <span className="text-slate-800 font-bold text-[14px]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Contact Block */}
              {data.contactPhone && (
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[var(--color-primary)] flex items-center justify-center text-xl shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-slate-900">{data.contactPhone}</h4>
                    <p className="text-slate-500 text-sm font-medium">{data.contactText}</p>
                  </div>
                </div>
              )}

              {/* Button */}
              {data.button && (
                <div>
                  <Link
                    href={data.button.url}
                    className="inline-flex items-center justify-center bg-[var(--color-primary)] hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_25px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 w-max text-sm"
                  >
                    {data.button.text.replace('->', '').trim()}
                    <FaArrowRight className="ml-2 text-xs" />
                  </Link>
                </div>
              )}
            </div>

            {/* Right Inner Box (Trusted Box) */}
            {data.stats && (
              <div className="w-full sm:w-[240px] bg-[#f8fbff] rounded-[24px] p-6 sm:p-8 flex flex-col justify-center border border-blue-50">
                <div className="w-11 h-11 bg-[var(--color-primary)] rounded-[14px] text-white flex items-center justify-center text-xl mb-6 shadow-md">
                  <FaShieldAlt />
                </div>
                <h4 className="text-[17px] font-extrabold text-slate-900 mb-4 leading-snug">
                  {data.stats.trustedTitle}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  {data.stats.trustedDesc}
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

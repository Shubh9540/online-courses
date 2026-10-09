'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaqData } from '@/types/templates.types';
import { FaPlus, FaMinus, FaPhoneAlt, FaEnvelope, FaClock, FaArrowRight, FaQuestion } from 'react-icons/fa';
import Link from 'next/link';

export const FaqPageSection = ({ data }: { data?: FaqData }) => {
  const [openId, setOpenId] = useState<string | null>(data?.faqs?.[0]?.id || null);

  if (!data || !data.faqs) return null;

  return (
    <section className="w-full bg-[#f4f8ff] py-16 lg:py-12 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#eef5fc] rounded-full mix-blend-multiply opacity-70 -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-20 right-10 opacity-30 pointer-events-none hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#0f62fe" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Centered */}
        <div className="mb-16 text-center flex flex-col items-center max-w-3xl mx-auto">
          <div className="inline-flex items-center bg-[#e4f1fe] text-[#0f62fe] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            {data.subtitle}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#051024] mb-4 tracking-tight leading-[1.1]">
            {data.title1} <span className="text-[#0f62fe]">{data.title2}</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-[15px] max-w-2xl mx-auto leading-relaxed font-medium">
            {data.description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

          {/* Left Column - Image & Contact Info (Smaller Width) */}
          <div className="w-full lg:w-[38%] relative shrink-0">
            {/* Image Box */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-[32px] overflow-hidden mb-4 lg:mb-0 shadow-sm border border-white/50">
              <Image
                src={data.image}
                alt="FAQ Support"
                fill
                className="object-cover"
              />
            </div>

            {/* Contact Info Card - Overlapping Image on Desktop, Stacked on Mobile */}
            <div className="lg:absolute lg:-bottom-12 lg:left-1/2 lg:-translate-x-1/2 w-[95%] lg:w-[85%] mx-auto bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex flex-col gap-5 z-20 -mt-8 lg:mt-0 relative">

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0f62fe] text-white flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="text-[14px]" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#051024]">{data.contactInfo?.phoneTitle}</h4>
                  <p className="text-[13px] text-slate-600 font-medium">{data.contactInfo?.phone}</p>
                </div>
              </div>

              <div className="w-full h-px bg-slate-100" />

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0f62fe] text-white flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-[14px]" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#051024]">{data.contactInfo?.emailTitle}</h4>
                  <p className="text-[13px] text-slate-600 font-medium">{data.contactInfo?.email}</p>
                </div>
              </div>

              <div className="w-full h-px bg-slate-100" />

              {/* Hours */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0f62fe] text-white flex items-center justify-center shrink-0">
                  <FaClock className="text-[14px]" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#051024]">{data.contactInfo?.hoursTitle}</h4>
                  <p className="text-[12px] text-slate-600 leading-tight">
                    {data.contactInfo?.hoursLine1}<br />
                    {data.contactInfo?.hoursLine2}
                  </p>
                </div>
              </div>

              {/* Button */}
              <Link href={data.contactInfo?.buttonUrl || '#'} className="w-full mt-2 bg-[#0f62fe] text-white py-3.5 rounded-2xl font-bold text-[13px] hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group">
                {data.contactInfo?.buttonText} <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
              </Link>

            </div>
          </div>

          {/* Right Column - FAQ Content (Larger Width) */}
          <div className="w-full lg:w-[62%] flex flex-col gap-3 lg:pl-4 xl:pl-10 lg:pb-20">
            {data.faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="w-full rounded-[20px] shadow-[0_2px_15px_rgb(0,0,0,0.02)] overflow-hidden transition-all duration-300 border border-slate-100"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className={`w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors duration-300 ${isOpen ? 'bg-[#004aad] text-white' : 'bg-white hover:bg-slate-50'
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Question Icon */}
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 font-bold transition-colors text-[13px] ${isOpen ? 'bg-white text-[#004aad]' : 'bg-[#0f62fe] text-white'
                        }`}>
                        <FaQuestion />
                      </div>
                      <span className={`font-extrabold text-[13px] sm:text-[14px] ${isOpen ? 'text-white' : 'text-[#051024]'}`}>
                        {faq.question}
                      </span>
                    </div>
                    {/* Plus/Minus Icon */}
                    <div className={`shrink-0 ml-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[11px] font-bold transition-colors ${isOpen ? 'bg-white text-[#004aad]' : 'bg-[#e4f1fe] text-[#0f62fe]'
                      }`}>
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="bg-[#f2f7fc] px-6 py-6 text-slate-600 text-[13px] sm:text-[14px] leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

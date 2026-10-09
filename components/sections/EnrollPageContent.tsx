'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  FaRegUser, FaRegEnvelope, FaPhoneAlt, FaRegCalendarAlt,
  FaDesktop, FaRegCommentDots, FaArrowRight, FaLock,
  FaGraduationCap, FaBullseye, FaUsers, FaChartLine
} from 'react-icons/fa';
import { LuBookOpen } from 'react-icons/lu';
import { EnrollData } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaGraduationCap': return <FaGraduationCap />;
    case 'FaBullseye': return <FaBullseye />;
    case 'FaUsers': return <FaUsers />;
    case 'FaChartLine': return <FaChartLine />;
    default: return null;
  }
};

export const EnrollPageContent = ({ data }: { data?: EnrollData }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!data) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section className="w-full py-12 lg:py-12 bg-[#f4f8ff] relative">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* Left Column - Image & Text */}
          <div className="w-full lg:w-[45%] bg-[#eef5fc] rounded-3xl p-10 lg:p-12 pb-0 relative overflow-hidden flex flex-col min-h-[650px] border border-blue-50/50">
            {/* Background Decor Arcs */}
            <div className="absolute top-[30%] -right-20 w-[400px] h-[400px] bg-[#d7e9fa] rounded-full mix-blend-multiply opacity-50 z-0 pointer-events-none" />
            <div className="absolute -bottom-20 -left-10 w-[500px] h-[500px] bg-[#dbebfc] rounded-full mix-blend-multiply opacity-50 z-0 pointer-events-none" />

            {/* Text Content (Top) */}
            <div className="relative z-10 max-w-[320px]">
              <p className="text-[14px] font-bold text-slate-500 mb-2">{data.leftSubtitle}</p>
              <h1 className="text-[54px] lg:text-[72px] font-black leading-[0.9] uppercase tracking-tight mb-2">
                <span className="text-[#051024] block">{data.leftTitle1}</span>
                <span className="text-[#0f62fe] block">{data.leftTitle2}</span>
              </h1>
              <div className="w-12 h-1 bg-[#0f62fe] rounded mb-5" />
              <p className="text-[15px] text-slate-700 leading-relaxed font-medium max-w-[280px]">
                {data.leftDescription}
              </p>
            </div>

            {/* Image (Right Side of Left Column) */}
            <div className="absolute top-0 right-0 w-[110%] lg:w-[125%] h-full z-20 pointer-events-none">
              <Image
                src={data.image}
                alt={data.leftTitle1}
                fill
                className="object-contain object-right lg:object-right scale-[1.1] origin-right translate-x-4 translate-y-12"
                priority
              />
            </div>
          </div>

          {/* Right Column - Form Area */}
          <div className="w-full lg:w-[55%] flex flex-col relative z-30">

            {/* Form Card */}
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 overflow-hidden flex flex-col flex-1">

              {/* Header inside card - Changed to Bright Blue to match design */}
              <div className="bg-[#0f62fe] pt-10 pb-8 px-8 lg:px-12 text-center relative shrink-0">
                <h2 className="text-3xl sm:text-[36px] font-black text-white mb-2 relative z-10 tracking-tight">
                  {data.form.headerTitle1}
                  <span className="text-[#ffb800]">{data.form.headerTitle2}</span>
                </h2>
                <p className="text-white/90 text-[13px] relative z-10 font-medium">
                  {data.form.headerDescription}
                </p>
              </div>

              {/* Form Body */}
              <div className="p-8 lg:p-10 flex-1 bg-white">
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[12px] font-extrabold text-[#051024] mb-2">{data.form.nameLabel}</label>
                      <div className="relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400"><FaRegUser className="text-[13px]" /></div>
                        <input type="text" required placeholder={data.form.namePlaceholder} className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-[13px] text-slate-700 outline-none focus:border-[#0f62fe] transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[12px] font-extrabold text-[#051024] mb-2">{data.form.emailLabel}</label>
                      <div className="relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400"><FaRegEnvelope className="text-[13px]" /></div>
                        <input type="email" required placeholder={data.form.emailPlaceholder} className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-[13px] text-slate-700 outline-none focus:border-[#0f62fe] transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[12px] font-extrabold text-[#051024] mb-2">{data.form.phoneLabel}</label>
                      <div className="relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400"><FaPhoneAlt className="text-[13px]" /></div>
                        <input type="tel" required placeholder={data.form.phonePlaceholder} className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-[13px] text-slate-700 outline-none focus:border-[#0f62fe] transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[12px] font-extrabold text-[#051024] mb-2">{data.form.courseLabel}</label>
                      <div className="relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400"><LuBookOpen className="text-[14px]" /></div>
                        <select required className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-[13px] text-slate-700 outline-none focus:border-[#0f62fe] transition-colors appearance-none cursor-pointer" defaultValue="">
                          <option value="" disabled>{data.form.coursePlaceholder}</option>
                          {data.form.coursesList?.map((course, idx) => (
                            <option key={idx} value={course}>{course}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[12px] font-extrabold text-[#051024] mb-2">{data.form.batchLabel}</label>
                      <div className="relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400"><FaRegCalendarAlt className="text-[13px]" /></div>
                        <select required className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-[13px] text-slate-700 outline-none focus:border-[#0f62fe] transition-colors appearance-none cursor-pointer" defaultValue="">
                          <option value="" disabled>{data.form.batchPlaceholder}</option>
                          {data.form.batchesList?.map((batch, idx) => (
                            <option key={idx} value={batch}>{batch}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[12px] font-extrabold text-[#051024] mb-2">{data.form.modeLabel}</label>
                      <div className="relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400"><FaDesktop className="text-[13px]" /></div>
                        <select required className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-[13px] text-slate-700 outline-none focus:border-[#0f62fe] transition-colors appearance-none cursor-pointer" defaultValue="">
                          <option value="" disabled>{data.form.modePlaceholder}</option>
                          {data.form.modesList?.map((mode, idx) => (
                            <option key={idx} value={mode}>{mode}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div>
                    <label className="block text-[12px] font-extrabold text-[#051024] mb-2">{data.form.messageLabel}</label>
                    <div className="relative">
                      <div className="absolute top-4 left-4 text-slate-400"><FaRegCommentDots className="text-[14px]" /></div>
                      <textarea rows={3} placeholder={data.form.messagePlaceholder} className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-[13px] text-slate-700 outline-none focus:border-[#0f62fe] transition-colors resize-none" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button type="submit" disabled={isSubmitting} className="w-full bg-[#0f62fe] text-white py-4 rounded-xl font-bold text-[14px] hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-blue-500/20">
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">Processing...</span>
                      ) : isSubmitted ? (
                        <span className="flex items-center gap-2">Application Submitted!</span>
                      ) : (
                        <>
                          {data.form.buttonText} <FaArrowRight className="text-[11px]" />
                        </>
                      )}
                    </button>

                    {/* Secure Info */}
                    <div className="flex items-center justify-center gap-2 mt-5">
                      <FaLock className="text-[11px] text-slate-500" />
                      <span className="text-[12px] text-slate-500 font-medium">{data.form.secureText}</span>
                    </div>
                  </div>

                </form>
              </div>
            </div>

            {/* Info Boxes Below Form */}
            <div className="flex bg-[#f0f7ff] rounded-2xl p-4 sm:p-6 mt-6 border border-blue-100">
              {data.infoBoxes.map((box, index) => (
                <div
                  key={box.id}
                  className={`flex flex-col items-center text-center px-2 flex-1 ${index !== data.infoBoxes.length - 1 ? 'border-r border-blue-200/70' : ''
                    }`}
                >
                  <div className="text-[#0f62fe] text-[24px] mb-3">
                    {renderIcon(box.icon)}
                  </div>
                  <h4 className="text-[12px] sm:text-[13px] font-extrabold text-[#051024] mb-1.5 leading-tight">{box.title}</h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-snug hidden sm:block px-1">
                    {box.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

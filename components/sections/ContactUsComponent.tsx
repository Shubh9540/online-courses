'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ContactUsData } from '@/types/templates.types';
import {
  FaUser, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt,
  FaArrowRight, FaCommentDots, FaClock, FaCheckCircle,
  FaGraduationCap, FaBookOpen, FaUsers
} from 'react-icons/fa';
import { LuBookOpen } from 'react-icons/lu';
import { BsChatDotsFill } from 'react-icons/bs';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaGraduationCap': return <FaGraduationCap />;
    case 'FaBookOpen': return <FaBookOpen />;
    case 'FaUsers': return <FaUsers />;
    case 'FaCommentDots': return <BsChatDotsFill />;
    default: return null;
  }
};

export const ContactUsComponent = ({ data }: { data?: ContactUsData }) => {
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
    <section className="w-full bg-[#fdfaf6] py-16 lg:py-12 relative">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-[#0f62fe] font-bold text-xs tracking-[0.2em] uppercase mb-4">
            {data.subtitle}
          </h4>
          <h2 className="text-4xl md:text-[54px] font-black text-[#051024] mb-5 tracking-tight">
            {data.title1} <span className="text-[#0f62fe]">{data.title2}</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-[15px] max-w-2xl mx-auto leading-relaxed font-medium">
            {data.description}
          </p>
          {/* Decorative small lines under header */}
          <div className="flex items-center justify-center gap-1 mt-6">
            <div className="w-8 h-1 bg-[#051024] rounded-full" />
            <div className="w-2 h-1 bg-[#0f62fe] rounded-full" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-6 items-stretch">

          {/* Left Column - Form */}
          <div className="w-full lg:w-1/2 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 lg:p-12 flex flex-col justify-between min-h-full relative overflow-hidden">
            {/* Background subtle curve */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-3xl font-black text-[#051024] mb-2 tracking-tight">
                {data.form?.title1} <span className="text-[#0f62fe]">{data.form?.title2}</span>
              </h3>
              <p className="text-slate-500 text-[13px] mb-8 font-medium">
                {data.form?.description}
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                    <input type="text" placeholder={data.form?.namePlaceholder} required className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-[13px] text-slate-700 outline-none focus:border-[#0f62fe] focus:ring-1 focus:ring-[#0f62fe] transition-all" />
                  </div>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                    <input type="email" placeholder={data.form?.emailPlaceholder} required className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-[13px] text-slate-700 outline-none focus:border-[#0f62fe] focus:ring-1 focus:ring-[#0f62fe] transition-all" />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                    <input type="tel" placeholder={data.form?.phonePlaceholder} required className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-[13px] text-slate-700 outline-none focus:border-[#0f62fe] focus:ring-1 focus:ring-[#0f62fe] transition-all" />
                  </div>
                  <div className="relative">
                    <LuBookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[15px]" />
                    <select required className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-[13px] text-slate-700 outline-none focus:border-[#0f62fe] focus:ring-1 focus:ring-[#0f62fe] transition-all appearance-none cursor-pointer" defaultValue="">
                      <option value="" disabled>Select Course</option>
                      {data.form?.servicesList?.map((course, idx) => (
                        <option key={idx} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div className="relative">
                  <FaCommentDots className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[15px]" />
                  <input type="text" placeholder={data.form?.subjectPlaceholder} required className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-[13px] text-slate-700 outline-none focus:border-[#0f62fe] focus:ring-1 focus:ring-[#0f62fe] transition-all" />
                </div>

                {/* Message */}
                <div className="relative">
                  <FaCommentDots className="absolute left-4 top-4 text-slate-400 text-[15px]" />
                  <textarea placeholder={data.form?.messagePlaceholder} rows={4} required className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-[13px] text-slate-700 outline-none focus:border-[#0f62fe] focus:ring-1 focus:ring-[#0f62fe] transition-all resize-none"></textarea>
                </div>

                {/* Submit Row */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                  <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto shrink-0 bg-[#0f62fe] text-white font-bold py-3.5 px-8 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Sending...' : isSubmitted ? 'Sent!' : (
                      <>
                        <FaArrowRight className="text-white text-[12px] -rotate-45" /> {data.form?.buttonText}
                      </>
                    )}
                  </button>
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0f62fe] flex items-center justify-center shrink-0">
                      <FaCheckCircle className="text-[12px]" />
                    </div>
                    {data.form?.privacyText}
                  </div>
                </div>

              </form>
            </div>
          </div>

          {/* Right Column - Contact Details & Map */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">

            {/* Dark Blue Info Card */}
            <div className="bg-[#051024] rounded-3xl p-8 lg:p-10 relative overflow-hidden flex-1 flex flex-col justify-center">
              {/* Image inside right side of the card */}
              <div className="absolute top-0 right-0 w-[45%] h-full z-0 opacity-90 hidden sm:block">
                <Image
                  src={data.image || '/faq.webp'}
                  alt="Contact Details"
                  fill
                  className="object-cover object-left-top scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#051024] via-[#051024]/80 to-transparent" />
              </div>

              <div className="relative z-10 max-w-sm">
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
                  {data.contactInfo?.title1} <span className="text-[#0f62fe]">{data.contactInfo?.title2}</span>
                </h3>
                <p className="text-slate-300 text-[13px] mb-8 leading-relaxed max-w-[280px]">
                  {data.contactInfo?.description}
                </p>

                <div className="flex flex-col gap-5">
                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0f62fe] text-white flex items-center justify-center shrink-0">
                      <FaMapMarkerAlt className="text-[14px]" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-white mb-0.5">{data.contactInfo?.addressTitle}</h4>
                      <p className="text-[12px] text-slate-300 leading-tight">
                        {data.contactInfo?.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0f62fe] text-white flex items-center justify-center shrink-0">
                      <FaPhoneAlt className="text-[13px]" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-white mb-0.5">{data.contactInfo?.phoneTitle}</h4>
                      <p className="text-[12px] text-slate-300 leading-tight">
                        {data.contactInfo?.phone}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0f62fe] text-white flex items-center justify-center shrink-0">
                      <FaEnvelope className="text-[13px]" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-white mb-0.5">{data.contactInfo?.emailTitle}</h4>
                      <p className="text-[12px] text-slate-300 leading-tight">
                        {data.contactInfo?.email}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0f62fe] text-white flex items-center justify-center shrink-0">
                      <FaClock className="text-[14px]" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-white mb-0.5">{data.contactInfo?.hoursTitle}</h4>
                      <p className="text-[12px] text-slate-300 leading-tight">
                        {data.contactInfo?.hoursLine1}<br />
                        {data.contactInfo?.hoursLine2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="h-[220px] rounded-3xl overflow-hidden shadow-sm shrink-0">
              <iframe
                src={data.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>

        {/* Bottom Info Boxes */}
        {data.infoBoxes && (
          <div className="w-full bg-[#f2f7fd] rounded-[24px] p-6 lg:p-8 flex flex-col md:flex-row flex-wrap items-center justify-between gap-6 border border-blue-50">
            {data.infoBoxes.map((box, index) => (
              <div key={box.id} className={`flex items-start gap-4 flex-1 min-w-[200px] ${index !== data.infoBoxes!.length - 1 ? 'md:border-r border-blue-100/70 md:pr-4' : ''}`}>
                <div className="w-12 h-12 rounded-full bg-white text-[#0f62fe] flex items-center justify-center shrink-0 text-xl shadow-sm">
                  {renderIcon(box.icon)}
                </div>
                <div className="pt-1">
                  <h4 className="text-[13px] font-extrabold text-[#051024] mb-1">{box.title}</h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-snug">
                    {box.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

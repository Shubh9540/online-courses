import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaStar, FaStarHalfAlt, FaRegStar,
  FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube, FaGithub,
  FaUsers, FaBook, FaBriefcase, FaChalkboardTeacher, FaArrowLeft
} from 'react-icons/fa';
import { InstructorItem } from '@/types/templates.types';

const renderStars = (rating: number) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span className="flex items-center gap-0.5 text-amber-400 text-[15px]">
      {Array.from({ length: full }).map((_, i) => <FaStar key={`f-${i}`} />)}
      {half && <FaStarHalfAlt />}
      {Array.from({ length: empty }).map((_, i) => <FaRegStar key={`e-${i}`} />)}
    </span>
  );
};

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    case 'FaTwitter': return <FaTwitter />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaYoutube': return <FaYoutube />;
    case 'FaGithub': return <FaGithub />;
    default: return null;
  }
};

export const InstructorDetailContent = ({ data }: { data?: InstructorItem }) => {
  if (!data) return null;

  return (
    <section className="w-full py-12 bg-[#f4f8ff] relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Link */}
        <Link
          href="/instructors"
          className="inline-flex items-center gap-2 text-[#0f62fe] font-semibold text-sm mb-8 hover:gap-3 transition-all"
        >
          <FaArrowLeft className="text-[12px]" />
          Back to Instructors
        </Link>

        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Left Sidebar */}
          <div className="w-full lg:w-[320px] shrink-0">

            {/* Profile Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 mb-5">
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={data.image}
                  alt={data.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h1 className="text-[22px] font-extrabold text-[#051024] mb-1">{data.name}</h1>
                <p className="text-[13px] text-[#0f62fe] font-semibold mb-4">{data.role}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-5">
                  {renderStars(data.rating)}
                  <span className="text-[13px] font-bold text-slate-700">{data.rating}</span>
                  <span className="text-[12px] text-slate-500">({data.reviews} Reviews)</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-[#f0f5ff] rounded-xl p-3 flex flex-col items-center text-center">
                    <FaUsers className="text-[#0f62fe] mb-1 text-[16px]" />
                    <span className="text-[15px] font-extrabold text-[#051024]">{data.students}</span>
                    <span className="text-[10px] text-slate-500 font-medium">Students</span>
                  </div>
                  <div className="bg-[#f0f5ff] rounded-xl p-3 flex flex-col items-center text-center">
                    <FaBook className="text-[#0f62fe] mb-1 text-[16px]" />
                    <span className="text-[15px] font-extrabold text-[#051024]">{data.courses}</span>
                    <span className="text-[10px] text-slate-500 font-medium">Courses</span>
                  </div>
                  <div className="bg-[#f0f5ff] rounded-xl p-3 flex flex-col items-center text-center">
                    <FaBriefcase className="text-[#0f62fe] mb-1 text-[16px]" />
                    <span className="text-[15px] font-extrabold text-[#051024]">{data.experience}</span>
                    <span className="text-[10px] text-slate-500 font-medium">Experience</span>
                  </div>
                  <div className="bg-[#f0f5ff] rounded-xl p-3 flex flex-col items-center text-center">
                    <FaChalkboardTeacher className="text-[#0f62fe] mb-1 text-[16px]" />
                    <span className="text-[15px] font-extrabold text-[#051024]">{data.reviews}</span>
                    <span className="text-[10px] text-slate-500 font-medium">Reviews</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-2">
                  {data.socialLinks.map((link) => (
                    <Link
                      key={link.id}
                      href={link.url}
                      className="w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-500 flex items-center justify-center text-[14px] hover:bg-[#0f62fe] hover:text-white hover:border-[#0f62fe] transition-all duration-200"
                    >
                      {renderSocialIcon(link.icon)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Expertise Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-[15px] font-extrabold text-[#051024] mb-4">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {data.expertise.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-[#dce9ff] text-[#0f62fe] text-[12px] font-bold px-3 py-1.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Main Content */}
          <div className="flex-1 min-w-0">

            {/* About */}
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100 mb-6">
              <h2 className="text-[22px] font-extrabold text-[#051024] mb-1">
                About <span className="text-[#0f62fe]">{data.name.split(' ')[0]}</span>
              </h2>
              <div className="w-12 h-1 bg-[#0f62fe] rounded-full mb-4" />
              <p className="text-slate-600 text-[15px] leading-relaxed">{data.bio}</p>
            </div>

            {/* What You'll Learn From This Instructor */}
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100 mb-6">
              <h2 className="text-[22px] font-extrabold text-[#051024] mb-1">
                Why Learn From <span className="text-[#0f62fe]">This Instructor?</span>
              </h2>
              <div className="w-12 h-1 bg-[#0f62fe] rounded-full mb-5" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Real-World Projects', desc: 'Learn through practical, industry-relevant hands-on projects.' },
                  { title: 'Expert Guidance', desc: 'Get mentored by someone who has lived the professional experience.' },
                  { title: 'Structured Curriculum', desc: 'Well-organized modules that take you from basics to advanced.' },
                  { title: 'Community Support', desc: 'Join a growing community of learners and get your doubts resolved.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-[#f4f8ff] rounded-xl p-4 border border-blue-50">
                    <div className="w-8 h-8 rounded-full bg-[#0f62fe] text-white flex items-center justify-center text-[13px] font-extrabold shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h4 className="text-[14px] font-extrabold text-[#051024] mb-1">{item.title}</h4>
                      <p className="text-[12px] text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Banner */}
            <div className="bg-gradient-to-r from-[#051024] to-[#0f3d8c] rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-white text-[20px] font-extrabold mb-1">Ready to start learning?</h3>
                <p className="text-blue-200 text-[13px]">Explore all courses by {data.name} and begin your journey today.</p>
              </div>
              <Link
                href="/courses"
                className="shrink-0 bg-[#0f62fe] text-white px-7 py-3 rounded-full font-bold text-[14px] hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/30 whitespace-nowrap"
              >
                Browse Courses →
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

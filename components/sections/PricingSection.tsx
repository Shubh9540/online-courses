'use client';

import React from 'react';
import { PricingData } from '@/types/templates.types';
import Link from 'next/link';
import {
  FaUser,
  FaCrown,
  FaGem,
  FaUsers,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUser': return <FaUser />;
    case 'FaCrown': return <FaCrown />;
    case 'FaGem': return <FaGem />;
    case 'FaUsers': return <FaUsers />;
    default: return <FaUser />;
  }
};

export const PricingSection = ({ data }: { data?: PricingData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-16 lg:py-12 bg-slate-50 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-4 inline-flex items-center bg-[#dce9ff] text-[#0f62fe] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            {data.subtitle}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#051024] mb-4 leading-tight">
            {data.title1} <span className="text-[#0f62fe]">{data.title2}</span>
          </h2>
          <p className="text-slate-500 text-[15px] max-w-2xl leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.plans?.map((plan) => (
            <div
              key={plan.id}
              className="group relative rounded-3xl bg-white border border-slate-100 hover:border-transparent hover:shadow-[0_15px_40px_rgb(15,98,254,0.15)] transition-all duration-300 flex flex-col pt-10"
            >
              {/* Badge on Hover (if plan is popular) */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0f62fe] text-white px-5 py-1.5 rounded-full text-[12px] font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  Most Popular
                </div>
              )}

              {/* Hover Blue Top Background */}
              <div className="absolute top-0 left-0 w-full h-[170px] bg-[#0f62fe] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

              {/* Hover White Bottom Background (creates the rounded arch) */}
              <div className="absolute top-[140px] left-0 w-full h-[calc(100%-140px)] bg-white rounded-t-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

              <div className="px-6 flex flex-col flex-1 relative z-10">
                {/* Icon & Title Row */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-blue-50 text-[#0f62fe] flex items-center justify-center text-[22px] group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                    {renderIcon(plan.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#051024] group-hover:text-white transition-colors duration-300 mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-[13px] text-slate-500 group-hover:text-blue-100 transition-colors duration-300 leading-snug">
                      {plan.description}
                    </p>
                  </div>
                </div>

                {/* Price Box */}
                <div className="bg-slate-50 group-hover:bg-white text-center py-4 rounded-2xl mb-8 transition-colors duration-300 shadow-sm border border-slate-100 group-hover:border-transparent group-hover:shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                  <span className="text-[32px] font-extrabold text-[#051024]">{plan.price}</span>
                  <span className="text-[14px] font-medium text-slate-500">{plan.period}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-[#0f62fe] text-[16px] shrink-0 mt-[2px]" />
                      <span className="text-[14px] text-slate-600 font-medium leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Link
                  href={plan.buttonUrl}
                  className="w-full flex items-center justify-center gap-2 rounded-full py-3.5 border border-[#0f62fe] text-[#0f62fe] font-bold text-[14px] hover:bg-blue-50 group-hover:bg-[#0f62fe] group-hover:text-white group-hover:border-[#0f62fe] transition-colors shadow-sm group-hover:shadow-lg group-hover:shadow-blue-500/30 mb-6"
                >
                  {plan.buttonText} <FaArrowRight className="text-[10px] mt-[1px]" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

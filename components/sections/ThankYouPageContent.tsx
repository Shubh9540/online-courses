import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThankYouData } from '@/types/templates.types';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

export const ThankYouPageContent = ({ data }: { data?: ThankYouData }) => {
  if (!data) return null;

  return (
    <section className="w-full bg-[#fdfaf6] py-8 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      <div className="max-w-[1250px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="bg-white rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden relative">

          {/* Decorative Corner Graphics */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50/60 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center p-8 md:p-16 relative z-10">

            {/* Left Image */}
            <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0 relative">
              <div className="relative w-full max-w-[350px] aspect-square">
                <Image
                  src={data.image || '/choose/thank_you.webp'}
                  alt="Thank You"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 flex flex-col items-center text-center px-4">

              <div className="w-20 h-20 bg-green-100 text-[#00b341] rounded-full flex items-center justify-center mb-6 relative">
                <FaCheckCircle className="text-5xl relative z-10" />
                {/* Decorative dots around checkmark */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-1.5 h-1.5 bg-orange-400 rounded-full" />
                <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-1.5 h-1.5 bg-orange-400 rounded-full" />
                <div className="absolute -top-1.5 -left-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <div className="absolute -top-1.5 -right-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full" />
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-[#051024] mb-3 tracking-tight">
                {data.title1} <span className="text-[#0f62fe]">{data.title2}</span>
              </h2>

              <h3 className="text-xl md:text-2xl font-bold text-[#051024] mb-4">
                {data.subtitle}
              </h3>

              <p className="text-slate-500 text-sm md:text-[15px] font-medium leading-relaxed mb-8 max-w-[400px]">
                {data.description}
              </p>

              <Link
                href={data.buttonUrl}
                className="bg-[#0f62fe] hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg shadow-blue-500/20"
              >
                <FaArrowLeft className="text-sm" /> {data.buttonText}
              </Link>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

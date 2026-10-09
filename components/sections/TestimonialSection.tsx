'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { TestimonialsData } from '@/types/templates.types';
import useEmblaCarousel from 'embla-carousel-react';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

export const TestimonialSection = ({ data }: { data?: TestimonialsData }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    const init = () => {
      onSelect();
    };

    Promise.resolve().then(init);

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', init);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', init);
    };
  }, [emblaApi]);

  if (!data || !data.testimonials) return null;

  // Create enough dummy slides for loop to work perfectly
  const displayTestimonials = data.testimonials.length >= 5 
    ? data.testimonials 
    : [...data.testimonials, ...data.testimonials, ...data.testimonials, ...data.testimonials].slice(0, 9);

  return (
    <section className="bg-[#f8fbff] py-20 lg:py-12 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-10 right-10 opacity-30 pointer-events-none hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0, 15, 30, 45, 60, 75].map((x) =>
            [0, 15, 30, 45, 60, 75].map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="#0f62fe" />
            ))
          )}
        </svg>
      </div>
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full border-[60px] border-white opacity-50 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">

        {/* Top Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10 bg-blue-300" />
            <h4 className="text-[#0f62fe] font-bold text-[13px] tracking-widest uppercase">
              {data.subtitle}
            </h4>
            <div className="h-px w-10 bg-blue-300" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#051024] leading-tight">
            {data.title1} <span className="text-[#0f62fe]">{data.title2}</span>
          </h2>
        </div>

        {/* Embla Carousel */}
        <div className="overflow-hidden py-8" ref={emblaRef}>
          <div className="flex touch-pan-y -ml-4 items-center">
            {displayTestimonials.map((testi, index) => (
              <div
                key={`${testi.id}-${index}`}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4"
              >
                <div
                  className={`transition-all duration-500 p-8 flex flex-col justify-between h-full ${index === selectedIndex
                      ? 'bg-white rounded-[24px] shadow-[0_10px_40px_rgb(0,0,0,0.06)] scale-100 opacity-100'
                      : 'bg-transparent scale-95 opacity-60'
                    }`}
                >
                  {/* Header: Avatar + Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden bg-slate-200 border-2 border-white shadow-sm">
                      <Image
                        src={testi.avatar}
                        alt={testi.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#051024] text-[18px]">
                        {testi.name}
                      </h4>
                      <p className="text-[#0f62fe] text-[13px] font-medium">
                        {testi.location}
                      </p>
                    </div>
                  </div>

                  {/* Quote Text */}
                  <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                    {testi.quote}
                  </p>

                  {/* Large Quote Icon */}
                  <FaQuoteLeft className="text-[#0f62fe] text-5xl opacity-80" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-4 relative z-20">
          <button
            type="button"
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-[#051024] text-[#051024] flex items-center justify-center hover:bg-[#051024] hover:text-white transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            <FaArrowLeft className="text-sm" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="w-12 h-12 rounded-full bg-[#0f62fe] text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20 cursor-pointer"
            aria-label="Next testimonial"
          >
            <FaArrowRight className="text-sm" />
          </button>
        </div>

      </div>
    </section>
  );
};

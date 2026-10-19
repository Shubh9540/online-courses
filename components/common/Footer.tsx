'use client';
import React, { useEffect, useState } from 'react';
import { FooterData } from '@/types/templates.types';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaChevronRight, FaArrowUp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaRegClock } from 'react-icons/fa';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF size={16} />;
    case 'FaInstagram': return <FaInstagram size={16} />;
    case 'FaLinkedinIn': return <FaLinkedinIn size={16} />;
    case 'FaYoutube': return <FaYoutube size={16} />;
    default: return <FaFacebookF size={16} />;
  }
};

const getSocialBgColor = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return 'bg-[var(--color-facebook)] hover:bg-[var(--color-facebook-hover)]';
    case 'FaInstagram': return 'bg-gradient-to-tr from-[var(--color-instagram-start)] via-[var(--color-instagram-middle)] to-[var(--color-instagram-end)] hover:opacity-90';
    case 'FaLinkedinIn': return 'bg-[var(--color-linkedin)] hover:bg-[var(--color-linkedin-hover)]';
    case 'FaYoutube': return 'bg-[var(--color-youtube)] hover:bg-[var(--color-youtube-hover)]';
    default: return 'bg-[var(--color-blue-600)]';
  }
};

export const Footer = ({ data }: { data?: FooterData }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!data) return null;

  return (
    <footer 
      className="w-full relative pt-16 pb-6 mt-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: data.bgImage ? `url('${data.bgImage}')` : 'none' }}
    >
      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-[var(--color-footer-overlay)]"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Social */}
          <div>
            <Link href={data.homeUrl}>
              <img src={data.logo} alt={data.logoAlt} className="h-16 object-contain mb-6" />
            </Link>
            
            <p className="text-[var(--color-gray-300)] text-[15px] leading-relaxed mb-8 pr-4">
              {data.description}
            </p>
            
            <div className="flex items-center gap-3">
              {data.socialLinks?.map(social => (
                <Link
                  key={social.id}
                  href={social.url}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-[var(--color-white)] transition-all shadow-md ${getSocialBgColor(social.icon)}`}
                >
                  {renderSocialIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-[20px] font-bold text-[var(--color-white)] mb-2">{data.col2Title}</h3>
            <div className="h-[2px] w-12 bg-[var(--color-brand)] mb-6"></div>
            <ul className="flex flex-col gap-3">
              {data.quickLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.url} className="text-[var(--color-gray-300)] text-[15px] hover:text-[var(--color-brand)] transition-colors flex items-center gap-2">
                    <FaChevronRight className="text-[var(--color-brand)] text-xs" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Courses */}
          <div className="lg:pl-4">
            <h3 className="text-[20px] font-bold text-[var(--color-white)] mb-2">{data.col3Title}</h3>
            <div className="h-[2px] w-12 bg-[var(--color-brand)] mb-6"></div>
            <ul className="flex flex-col gap-3">
              {data.servicesLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.url} className="text-[var(--color-gray-300)] text-[15px] hover:text-[var(--color-brand)] transition-colors flex items-center gap-2">
                    <FaChevronRight className="text-[var(--color-brand)] text-xs" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h3 className="text-[20px] font-bold text-[var(--color-white)] mb-2">{data.col4Title}</h3>
            <div className="h-[2px] w-12 bg-[var(--color-brand)] mb-6"></div>
            <ul className="flex flex-col gap-6">
              
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[var(--color-brand)] flex items-center justify-center text-[var(--color-white)] text-lg shadow-md">
                  <FaMapMarkerAlt />
                </div>
                <div className="flex flex-col">
                  <span className="text-[var(--color-white)] font-bold text-[15px] mb-0.5">{data.contactInfo?.addressTitle}</span>
                  <span className="text-[var(--color-gray-300)] text-[14px] leading-snug">{data.contactInfo?.address}</span>
                </div>
              </li>
              
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[var(--color-brand)] flex items-center justify-center text-[var(--color-white)] text-lg shadow-md">
                  <FaPhoneAlt />
                </div>
                <div className="flex flex-col">
                  <span className="text-[var(--color-white)] font-bold text-[15px] mb-0.5">{data.contactInfo?.phoneTitle}</span>
                  <span className="text-[var(--color-gray-300)] text-[14px] leading-snug">{data.contactInfo?.phone}</span>
                </div>
              </li>
              
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[var(--color-brand)] flex items-center justify-center text-[var(--color-white)] text-lg shadow-md">
                  <FaEnvelope />
                </div>
                <div className="flex flex-col">
                  <span className="text-[var(--color-white)] font-bold text-[15px] mb-0.5">{data.contactInfo?.emailTitle}</span>
                  <span className="text-[var(--color-gray-300)] text-[14px] leading-snug">{data.contactInfo?.email}</span>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[var(--color-brand)] flex items-center justify-center text-[var(--color-white)] text-lg shadow-md">
                  <FaRegClock />
                </div>
                <div className="flex flex-col">
                  <span className="text-[var(--color-white)] font-bold text-[15px] mb-0.5">{data.contactInfo?.hoursTitle}</span>
                  <span className="text-[var(--color-gray-300)] text-[14px] leading-snug">
                    {data.contactInfo?.hours}<br/>
                    {data.contactInfo?.hoursDays}
                  </span>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="mt-12 mb-6 h-[1px] w-full bg-[var(--color-white)]/20"></div>

        {/* Copyright */}
        <div className="text-center text-[var(--color-gray-300)] text-[14px]">
          {data.copyrightText}
        </div>

      </div>

      {/* Fixed Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[var(--color-brand)] text-[var(--color-white)] flex items-center justify-center shadow-lg hover:bg-[var(--color-blue-700)] hover:-translate-y-1 transition-all duration-300"
          aria-label={data.scrollTopLabel}
        >
          <FaArrowUp />
        </button>
      )}

    </footer>
  );
};

'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderData } from '@/types/templates.types';
import { FaArrowRight, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

export const Header = ({ data }: { data?: HeaderData }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!data) return null;

  return (
    <header className="sticky top-0 left-0 z-40 w-full bg-[var(--color-white)] shadow-sm">
      <div className="max-w-[1250px] mx-auto w-full flex min-h-[80px] lg:min-h-[90px] items-center px-4 lg:px-8 gap-6 justify-between">
        
        {/* Logo */}
        <Link href={data.logoUrl} className="flex items-center shrink-0">
          <img src={data.logo} alt={data.logoAlt} className="h-12 md:h-16 lg:h-20 object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {data.navLinks?.map((link) => {
            const isActive = pathname === link.url;
            return (
              <Link 
                key={link.id} 
                href={link.url} 
                className={`relative flex items-center gap-1.5 whitespace-nowrap text-[15px] xl:text-[16px] font-semibold py-7 transition-colors duration-300 after:absolute after:left-0 after:bottom-5 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[var(--color-primary)] after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  isActive 
                    ? 'text-[var(--color-primary)] after:scale-x-100' 
                    : 'text-[var(--color-heading-soft)] hover:text-[var(--color-primary)]'
                }`}
              >
                {link.label}
                {link.hasDropdown && <FaChevronDown className="text-[10px]" />}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu */}
        <div className="flex items-center gap-4 shrink-0">
          {data.contactButton && (
            <Link 
              href={data.contactButton.url} 
              className="hidden lg:flex items-center justify-center gap-2 bg-[var(--color-primary)] px-6 py-2.5 rounded-lg text-sm xl:text-[15px] font-medium text-[var(--color-white)] transition-colors hover:bg-[var(--color-blue-700)]"
            >
              {data.contactButton.text.replace('->', '').trim()}
              {data.contactButton.text.includes('->') && <FaArrowRight className="text-sm" />}
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="flex h-10 w-10 items-center justify-center rounded-md text-2xl text-[var(--color-primary)] lg:hidden"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-full flex max-h-[calc(100vh-80px)] w-full flex-col overflow-y-auto border-t border-[var(--color-gray-100)] bg-[var(--color-white)] p-4 shadow-lg lg:hidden">
          {data.navLinks?.map((link) => {
            const isActive = pathname === link.url;
            return (
              <Link 
                key={link.id} 
                href={link.url} 
                onClick={() => setMobileMenuOpen(false)} 
                className={`flex items-center justify-between border-b border-[var(--color-gray-100)] px-4 py-3 text-base font-semibold ${
                  isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-slate-700)]'
                }`}
              >
                {link.label}
                {link.hasDropdown && <FaChevronDown className="text-sm" />}
              </Link>
            );
          })}
          {data.contactButton && (
            <Link 
              href={data.contactButton.url} 
              onClick={() => setMobileMenuOpen(false)} 
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 py-3 text-base font-semibold text-[var(--color-white)]"
            >
              {data.contactButton.text.replace('->', '').trim()}
              {data.contactButton.text.includes('->') && <FaArrowRight className="text-sm" />}
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

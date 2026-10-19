import React from 'react';
import Link from 'next/link';
import { BreadcrumbData } from '@/types/templates.types';

export const Breadcrumb = ({ data }: { data?: BreadcrumbData }) => {
  if (!data) return null;

  return (
    <section 
      className="w-full relative min-h-[400px] md:min-h-[450px] flex flex-col items-center justify-center bg-cover bg-center -mt-[100px] pt-[100px]"
      style={{ backgroundImage: data.bgImage ? `url('${data.bgImage}')` : undefined }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[var(--color-breadcrumb-overlay-rgba)] z-0"></div>

      <div className="relative z-10 text-center w-full px-4 flex flex-col items-center mt-10">
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[var(--color-white)] mb-4 uppercase tracking-wide">
          {data.title}
        </h1>
        
        <div className="flex items-center gap-2 text-[15px] md:text-[16px] font-bold text-[var(--color-white)]">
          {data.paths.map((path, index) => (
            <React.Fragment key={path.id}>
              {path.url ? (
                <Link href={path.url} className="hover:text-[var(--color-blue-300)] transition-colors">
                  {path.label}
                </Link>
              ) : (
                <span>{path.label}</span>
              )}
              
              {index < data.paths.length - 1 && (
                <span className="mx-1 text-[var(--color-white)]/80">{'//'}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};


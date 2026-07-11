import React from 'react';
import { Marquee } from '@/components/ui/Marquee';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { siteContent } from '@/content';

export function Brands() {
  const { brands } = siteContent;

  return (
    <section className="py-24 bg-neutral-100 text-black overflow-hidden border-y border-neutral-200">
      <div className="container mx-auto px-6 mb-16 text-center">
        <AnimatedSection>
          <SectionTitle as="h3" className="text-2xl md:text-3xl max-w-2xl mx-auto tracking-normal">
            {brands.title}
          </SectionTitle>
        </AnimatedSection>
      </div>

      <div className="flex flex-col gap-8">
        {/* Row 1: Left */}
        <Marquee speed={0.8} direction="left">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`row1-${i}`} className="mx-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
              <img src={`https://placehold.co/160x80/ffffff/000000?text=BRAND+${i+1}`} alt={`Brand ${i+1}`} className="h-12 md:h-16 object-contain" />
            </div>
          ))}
        </Marquee>

        {/* Row 2: Right */}
        <Marquee speed={0.8} direction="right">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`row2-${i}`} className="mx-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
              <img src={`https://placehold.co/160x80/ffffff/000000?text=PARTNER+${i+1}`} alt={`Partner ${i+1}`} className="h-12 md:h-16 object-contain" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

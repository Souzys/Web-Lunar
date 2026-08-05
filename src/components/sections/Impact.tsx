import React from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Counter } from '@/components/ui/Counter';
import { ScrollRevealText } from '@/components/ui/ScrollRevealText';
import { Marquee } from '@/components/ui/Marquee';
import { siteContent } from '@/content';

const COLORS = ['bg-neutral-300', 'bg-primary', 'bg-neutral-300', 'bg-primary'];

export function Impact() {
  const { impact } = siteContent;

  return (
    <section className="bg-white text-black overflow-hidden border-t border-black/5">

      {/* === IMPACT STATS === */}
      <div className="py-20 border-b border-black/5">
        <div className="container mx-auto max-w-[1440px] px-6 flex flex-col items-center text-center">

          {/* Tag */}
          <AnimatedSection as="div">
            <div className="mb-8">
              <span className="text-primary font-sans text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 font-semibold inline-block">
                {impact.tag}
              </span>
            </div>
          </AnimatedSection>

          {/* Large description with scroll reveal */}
          <div className="mb-16 max-w-5xl">
            <ScrollRevealText
              text={`${impact.descriptionBold}${impact.descriptionFade}`}
              variant="light"
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-snug tracking-tight text-black"
            />
          </div>

          {/* Stats Row — centered */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 border-t border-black/5 pt-10 w-full">
            {impact.stats.map((stat, index) => (
              <AnimatedSection
                key={index}
                as="div"
                options={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Square indicator */}
                <span className={`w-3 h-3 mb-6 ${COLORS[index]} transition-transform duration-300 group-hover:scale-125 shadow-sm`} />

                {/* Number */}
                <div className="font-display text-4xl md:text-5xl font-black tracking-tighter mb-3 leading-none text-black group-hover:text-primary transition-colors duration-300">
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    duration={2.5}
                  />
                </div>

                {/* Label */}
                <span className="text-sm text-neutral-500 font-mono uppercase tracking-widest transition-colors duration-300 group-hover:text-neutral-800">
                  {stat.label}
                </span>
              </AnimatedSection>
            ))}
          </div>

          {/* === BRANDS MARQUEE === */}
          <div className="mt-16 border-t border-black/5 pt-12 relative overflow-hidden w-full">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <Marquee speed={0.4} direction="left">
              {[
                '/White-min.png',
                '/Ativo-1-1.png',
                '/Group-1.png',
                '/Group-13-8.png',
                '/image-1.png',
                '/Logo-Savage-Week-Negativo.png',
                '/White-min.png',
                '/Ativo-1-1.png',
                '/Group-1.png',
                '/Group-13-8.png',
                '/image-1.png',
                '/Logo-Savage-Week-Negativo.png',
              ].map((src, i) => (
                <div key={i} className="mx-10 flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Logo parceiro ${i + 1}`}
                    style={{ height: 36, objectFit: 'contain', opacity: 0.25, filter: 'brightness(0)' }}
                    className="hover:opacity-70 transition-all duration-300 cursor-pointer"
                    loading="lazy"
                  />
                </div>
              ))}
            </Marquee>
          </div>

        </div>
      </div>

    </section>
  );
}

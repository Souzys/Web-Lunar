'use client';

import { IntroSlider } from "@/components/sections/IntroSlider";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { Impact } from "@/components/sections/Impact";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Blog } from "@/components/sections/Blog";
import { useLenis } from "@/hooks/useLenis";

export function HomeClient() {
  useLenis();

  return (
    <>
      <IntroSlider />
      <div className="relative z-10">
        <Portfolio />
        <Services />
        <TechStack />
        <Impact />
        <Testimonials />
        <FAQ />
        <Blog />
      </div>
    </>
  );
}

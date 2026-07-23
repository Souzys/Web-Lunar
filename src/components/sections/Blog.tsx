'use client';

import React from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { siteContent } from '@/content';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { ArrowUpRight } from 'lucide-react';

export function Blog() {
  const { blog } = siteContent;

  return (
    <section id="blog" className="py-24 bg-white text-neutral-900 border-t border-black/5 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="mb-6">
                <span className="text-primary font-sans text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 font-semibold inline-block">
                  {blog.tag}
                </span>
              </div>
            </AnimatedSection>
            <AnimatedSection options={{ delay: 0.1 }}>
              <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tight text-neutral-900">
                {blog.title}
              </h2>
            </AnimatedSection>
          </div>
          
          <AnimatedSection options={{ delay: 0.2 }}>
            <PrimaryButton className="bg-transparent text-neutral-900 border border-black/10 hover:bg-neutral-100 px-8 py-4 rounded-full text-sm shadow-sm hover:shadow-md">
              {blog.buttonText}
            </PrimaryButton>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blog.posts.map((post, index) => (
            <AnimatedSection key={index} options={{ delay: index * 0.1 }} className="group cursor-pointer">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#FAFAFA] rounded-2xl mb-6 relative border border-black/5 group-hover:border-primary/30 group-hover:shadow-md transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="text-xs font-mono text-primary mb-4 tracking-widest uppercase">{post.date}</div>
              <h3 className="font-sans text-2xl font-black mb-3 tracking-tight text-neutral-900 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {post.excerpt}
              </p>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}

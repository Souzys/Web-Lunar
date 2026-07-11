'use client';

import React, { useState, useRef } from 'react';
import { Minus, Plus } from 'lucide-react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut',
      });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-black/10">
      <button
        className="flex w-full items-center justify-between py-6 text-left group"
        onClick={onClick}
      >
        <span className="font-display text-xl md:text-2xl font-bold text-neutral-900 group-hover:text-primary transition-colors duration-300 uppercase tracking-tight">{question}</span>
        <span className="ml-4 flex-shrink-0 transition-transform duration-300 w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-primary group-hover:bg-primary/10 bg-white shadow-sm">
          {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </span>
      </button>
      <div
        ref={contentRef}
        className="h-0 overflow-hidden opacity-0"
      >
        <p className="pb-6 text-neutral-600 text-lg font-light leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { q: string; a: string }[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first

  return (
    <div className={cn("w-full", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.q}
          answer={item.a}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

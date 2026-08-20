'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Typography } from '@/components/ui/Typography';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: 'What products does Crystal Metal Industry manufacture?',
      answer:
        'We manufacture Aluminum Deoxidizer (Deox), aluminum ingots, notch bars, and cubes, with Deox as our flagship product for steelmaking applications.',
    },
    {
      question: 'What is your current production capacity?',
      answer:
        'Our current installed production capacity is 1,000 MT per month, equivalent to 12,000 MT per annum.',
    },
    {
      question: 'Where do you source your aluminum scrap?',
      answer:
        'A significant portion of our aluminum scrap is sourced from international markets outside India, supporting a reliable and diverse raw-material supply chain.',
    },
    {
      question: 'Where is Crystal Metal Industry located?',
      answer:
        'We are based in Jamshedpur, Jharkhand, strategically located in the heart of India’s steel belt for efficient service to steel and industrial customers.',
    },
    {
      question: 'Do you supply products for steelmaking applications?',
      answer:
        'Yes. Our primary focus is Aluminum Deoxidizer (Deox), manufactured from recycled aluminum scrap for use in steelmaking applications.',
    },
    {
      question: 'What experience does Crystal Metal Industry have?',
      answer:
        'Crystal Metal Industry is backed by a group with more than 15 years of experience across manufacturing and international trade.',
    },
    {
      question: 'What are your future expansion plans?',
      answer:
        'We plan to expand into additional value-added aluminum products, including aluminum wire and aluminum extrusion products.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='w-full max-w-4xl mx-auto flex flex-col gap-8'>
      <div className='text-center mb-4'>
        <Typography variant='accentLabel' className='mb-2 block'>
          Support
        </Typography>
        <Typography variant='h2' className='relative inline-block mb-3'>
          Frequently Asked Questions
          <span className='absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-12 h-0.5 bg-amber-500 rounded' />
        </Typography>
      </div>

      <div className='flex flex-col gap-4'>
        {faqs.map((faq, idx) => {
          const isOpen = activeIndex === idx;
          return (
            <div
              key={idx}
              className='rounded bg-[#121826] border border-slate-800 overflow-hidden transition-all'
            >
              <button
                onClick={() => toggleAccordion(idx)}
                type='button'
                className='w-full flex justify-between items-center p-6 text-left hover:bg-slate-900/40 transition-colors focus:outline-none'
              >
                <span className='font-bold text-sm md:text-base text-white pr-4'>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-amber-500 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen
                    ? 'max-h-60 border-t border-slate-800/60 opacity-100'
                    : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <div className='p-6 text-sm text-slate-400 leading-relaxed bg-[#0F1420]/30'>
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

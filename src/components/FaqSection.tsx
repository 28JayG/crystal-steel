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
      question: 'What is your typical lead time?',
      answer: 'Standard catalogue products (plates, coils, seamless pipes) ship within 5-7 business days. Custom metal fabrication, castings, and machined components depend on blueprint complexity, typically averaging 3-6 weeks.',
    },
    {
      question: 'Do you offer custom alloy formulations?',
      answer: 'Yes. Our in-house metallurgy laboratory allows us to design, analyze, and test custom chemical compositions to meet specific weight, load tolerances, corrosion resistance, or high-temperature needs.',
    },
    {
      question: 'Are all products ISO certified?',
      answer: 'Yes. All products manufactured by Crystal Metal Industry conform to ISO 9001:2015 standards. We provide complete Mill Test Reports (MTR), heat code tracking, and material certification documentation with every delivery.',
    },
    {
      question: 'Do you handle international shipping and customs?',
      answer: 'Absolutely. We manage global distribution directly. We coordinate with shipping carriers, prepare customs documentation, verify compliance codes, and provide certificates of origin to facilitate smooth deliveries across 50+ countries.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
      <div className="text-center mb-4">
        <Typography variant="accentLabel" className="mb-2 block">
          Support
        </Typography>
        <Typography variant="h2" className="relative inline-block mb-3">
          Frequently Asked Questions
          <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-12 h-0.5 bg-amber-500 rounded" />
        </Typography>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => {
          const isOpen = activeIndex === idx;
          return (
            <div
              key={idx}
              className="rounded bg-[#121826] border border-slate-800 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                type="button"
                className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-900/40 transition-colors focus:outline-none"
              >
                <span className="font-bold text-sm md:text-base text-white pr-4">
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
                  isOpen ? 'max-h-60 border-t border-slate-800/60 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <div className="p-6 text-sm text-slate-400 leading-relaxed bg-[#0F1420]/30">
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

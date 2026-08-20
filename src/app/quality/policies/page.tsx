import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ShieldCheck,
  Leaf,
  HeartPulse,
  FlameKindling,
  Award,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Typography } from '@/components/ui/Typography';

export const metadata = {
  title: 'Quality Policies | Crystal Metal Industry',
  description:
    'Explore our Quality Assurance Policy and Health, Safety & Environment (HSE) Policy committed to manufacturing excellence, worker safety, and environmental stewardship.',
};

export default function QualityPoliciesPage() {
  const hsePillars = [
    {
      icon: Leaf,
      title: 'Renewable Energy & Environmental Stewardship',
      description:
        'We actively work towards meeting energy demands through clean and renewable energy sources while optimizing resource consumption across our manufacturing lines.',
      points: [
        'Adoption of renewable energy across operational facilities',
        'Advanced waste recycling and sustainable reuse technologies',
        'Targeted pollution control and carbon footprint reduction',
      ],
    },
    {
      icon: HeartPulse,
      title: 'Occupational Health & Hazard Prevention',
      description:
        'The safety and physical well-being of our workforce is our foremost operating priority through proactive risk mitigation and hazard control.',
      points: [
        'Regular hazard identification and workplace risk assessments',
        'Active Safety Committee overseeing plant operations',
        'Thorough incident investigation and preventive governance',
      ],
    },
    {
      icon: FlameKindling,
      title: 'Emergency Preparedness & Care',
      description:
        'Robust emergency response protocols and ready medical facilities ensure maximum preparedness against operational risks and contingencies.',
      points: [
        'Continual drills and up-to-date emergency action plans',
        'Dedicated on-site medical assistance and health checks',
        'Well-equipped rapid response gear and certified personnel',
      ],
    },
    {
      icon: Award,
      title: 'Compliance & HSE Culture',
      description:
        'We adhere stringently to statutory HSE regulations while cultivating a deep-rooted organizational safety culture.',
      points: [
        'Full compliance with national and global safety norms',
        'Continuous monitoring, audits, and corrective action loops',
        'Ongoing stakeholder collaboration for HSE system enhancements',
      ],
    },
  ];

  return (
    <div className='min-h-screen bg-white pt-14 md:pt-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 md:pb-20'>
        {/* Breadcrumbs */}
        <nav className='flex items-center gap-2 mb-8 text-xs sm:text-sm font-semibold text-[#718096]'>
          <Link href='/' className='hover:text-amber-500 transition-colors'>
            Home
          </Link>
          <ChevronRight className='h-4 w-4 text-[#718096] shrink-0' />
          <span className='text-[#526176]'>Quality</span>
          <ChevronRight className='h-4 w-4 text-[#718096] shrink-0' />
          <span className='text-[#0B1628] font-bold'>Policies</span>
        </nav>

        {/* Page Header */}
        <div className='max-w-3xl mb-16'>
          <Typography variant='accentLabel' className='mb-2 block'>
            Our Commitments
          </Typography>
          <h1 className='mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1628] tracking-tight'>
            Quality & HSE Policies
          </h1>
          <p className='text-base sm:text-lg text-[#526176] leading-relaxed'>
            We uphold the highest benchmarks of metallurgical precision,
            environmental responsibility, and workplace health and safety across
            all secondary aluminum processing operations.
          </p>
        </div>

        {/* 1. Quality Policy Section (Contained Dark Navy Banner) */}
        <section className='mb-20 rounded-3xl bg-[#0B1628] border border-[#1E293B] p-8 sm:p-12 md:p-16 shadow-2xl text-white'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center'>
            <div className='lg:col-span-7 flex flex-col gap-5'>
              <div className='inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 self-start'>
                <ShieldCheck className='h-4 w-4 text-amber-500' />
                <span className='text-xs font-bold uppercase tracking-wider text-amber-400'>
                  Core Quality Mandate
                </span>
              </div>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight'>
                Our Quality Policy
              </h2>
              <p className='text-sm sm:text-base text-[#CBD5E1] leading-relaxed'>
                At Crystal Metal Industry, we are dedicated to achieving total
                customer satisfaction by delivering secondary aluminum products
                and services of uncompromised quality. We are committed to
                continually enhancing every facet of our operations through
                teamwork, advanced metallurgy, and unwavering dedication.
              </p>
              <p className='text-sm sm:text-base text-[#CBD5E1] leading-relaxed'>
                Our goal is to deliver excellence in both product specification
                and customer support, ensuring we consistently meet and exceed
                the expectations of steelmakers and industrial clients.
              </p>
            </div>

            <div className='lg:col-span-5 bg-[#162236] border border-[#24334A] rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-lg'>
              <h3 className='text-base sm:text-lg font-bold text-white mb-1'>
                Quality Objectives
              </h3>
              {[
                'Strict adherence to chemical & physical specifications',
                'Zero-defect mindset across casting and finishing lots',
                'Rapid metallurgical testing with calibrated spectrometers',
                'Continuous employee training and skill upgrades',
                'Dependable, on-time industrial delivery schedules',
              ].map((item, idx) => (
                <div key={idx} className='flex items-start gap-3'>
                  <CheckCircle2 className='h-5 w-5 text-amber-500 shrink-0 mt-0.5' />
                  <span className='text-xs sm:text-sm text-[#CBD5E1] leading-relaxed'>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Health, Safety & Environment (HSE) Policy Section */}
        <section className='mb-12'>
          <div className='text-center max-w-3xl mx-auto mb-14'>
            <Typography variant='accentLabel' className='mb-2 block'>
              Sustainable & Safe Operations
            </Typography>
            <h2 className='text-3xl sm:text-4xl font-extrabold text-[#0B1628] tracking-tight relative inline-block mb-4'>
              Health, Safety & Environment (HSE) Policy
              <span className='absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-amber-500 rounded-full' />
            </h2>
            <p className='text-sm sm:text-base text-[#526176] mt-4 leading-relaxed'>
              We are dedicated to being a responsible corporate citizen by
              upholding rigorous standards of environmental protection and
              fostering an accident-free, healthy workplace for our people and
              surrounding communities.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {hsePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className='flex flex-col p-8 rounded-2xl bg-white border border-[#DDE3EA] hover:border-amber-500 hover:shadow-xl transition-all duration-300 group'
                >
                  <div className='flex items-center gap-4 mb-6'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300 shrink-0'>
                      <Icon className='h-6 w-6' />
                    </div>
                    <h3 className='text-lg font-bold text-[#0B1628] group-hover:text-amber-600 transition-colors'>
                      {pillar.title}
                    </h3>
                  </div>

                  <p className='text-sm text-[#526176] leading-relaxed mb-6'>
                    {pillar.description}
                  </p>

                  <div className='mt-auto pt-4 border-t border-[#DDE3EA]/60 flex flex-col gap-2.5'>
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className='flex items-start gap-2.5'>
                        <span className='h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0 mt-2' />
                        <span className='text-xs sm:text-sm text-[#526176]'>
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Full-Width Bottom CTA Section */}
      <section className='w-full bg-[#EEF2F6] py-20 md:py-28 text-center'>
        <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col gap-6 items-center'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-[#0B1628] tracking-tight'>
            Committed to Quality in Every Batch
          </h2>
          <p className='text-base sm:text-lg text-[#526176] max-w-xl leading-relaxed'>
            Have specific quality, chemical composition, or HSE requirements for
            your procurement? Reach out to our metallurgical specialists.
          </p>
          <div className='mt-2 flex flex-col sm:flex-row gap-4 items-center justify-center'>
            <Link
              href='/contact'
              className='inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-500 px-8 text-sm font-bold text-slate-950 transition-all hover:bg-amber-600 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/20'
            >
              Contact Quality Team
              <ArrowRight className='h-4 w-4' />
            </Link>
            <Link
              href='/quality/test-equipment'
              className='inline-flex h-12 items-center justify-center rounded-lg border border-slate-950 bg-transparent px-8 text-sm font-bold text-slate-950 transition-all hover:bg-slate-950/10 active:scale-[0.98]'
            >
              View Test & Equipment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

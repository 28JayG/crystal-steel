import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ShieldCheck,
  FileCheck2,
  GitBranch,
  Layers,
  Sparkles,
  Users2,
  ArrowRight,
  CheckCircle2,
  FileText,
} from 'lucide-react';
import { Typography } from '@/components/ui/Typography';

export const metadata = {
  title: 'Quality Certification | Crystal Metal Industry',
  description:
    'Learn about our ISO-aligned defect prevention processes, heat & batch number traceability, qualified inspector protocols, and spectrometer verification.',
};

export default function QualityCertificationPage() {
  const qualityPillars = [
    {
      icon: ShieldCheck,
      title: 'ISO-Aligned Defect Prevention',
      description:
        'We manage operations on defect-prevention principles rather than post-production detection, minimizing variance at every step of melting and casting.',
    },
    {
      icon: FileCheck2,
      title: 'Reputed Sourcing & Certified Raw Materials',
      description:
        'All aluminum scrap and raw materials are purchased strictly from reputed domestic and international suppliers accompanied by authentic Test Certificates.',
    },
    {
      icon: GitBranch,
      title: 'Heat & Batch Traceability',
      description:
        'Every production lot is assigned a unique Heat Number and Batch Number, ensuring complete end-to-end traceability from raw scrap receipt to final dispatch.',
    },
    {
      icon: Layers,
      title: 'In-Process Inspection & Calibrated Gauges',
      description:
        'Continuous in-process inspections are conducted by qualified metallurgical technicians utilizing periodically calibrated precision gauges.',
    },
    {
      icon: Sparkles,
      title: 'Dual Spectrometer Final Verification',
      description:
        'Final lot inspections are performed with state-of-the-art optical emission spectrometers to guarantee total chemical conformance before shipping.',
    },
    {
      icon: Users2,
      title: 'Third-Party Inspections on Demand',
      description:
        'We facilitate independent third-party inspections and testing upon client request to satisfy specialized industrial and institutional requirements.',
    },
  ];

  const traceabilitySteps = [
    {
      step: '01',
      title: 'Material Ingestion',
      detail: 'Supplier MTC verification, scrap categorization & initial spectrometry',
    },
    {
      step: '02',
      title: 'Heat Tagging',
      detail: 'Furnace charge assignment with distinct Heat and Melt numbers',
    },
    {
      step: '03',
      title: 'In-Process QA',
      detail: 'Molten sampling, vacuum hydrogen check & calibrated gauge testing',
    },
    {
      step: '04',
      title: 'Final Dispatch & MTC',
      detail: 'Certified final spectrometer report & batch-coded packaging',
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
          <span className='text-[#0B1628] font-bold'>Quality Certification</span>
        </nav>

        {/* Page Header */}
        <div className='max-w-3xl mb-16'>
          <Typography variant='accentLabel' className='mb-2 block'>
            Standards & Assurance
          </Typography>
          <h1 className='mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1628] tracking-tight'>
            Quality Assurance & Traceability
          </h1>
          <p className='text-base sm:text-lg text-[#526176] leading-relaxed'>
            We engineer precision into every production run. Rooted in
            defect-prevention principles, strict raw material validation, and
            rigorous batch traceability, our quality systems deliver consistent
            reliability for demanding steelmakers.
          </p>
        </div>

        {/* Core Principles Grid */}
        <section className='mb-24'>
          <div className='text-center max-w-3xl mx-auto mb-14'>
            <Typography variant='accentLabel' className='mb-2 block'>
              Our Pillars
            </Typography>
            <h2 className='text-3xl sm:text-4xl font-extrabold text-[#0B1628] tracking-tight relative inline-block mb-4'>
              Six Pillars of Quality Management
              <span className='absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-amber-500 rounded-full' />
            </h2>
            <p className='text-sm sm:text-base text-[#526176] mt-4 leading-relaxed'>
              Every stage of our manufacturing process is governed by stringent
              testing protocols to ensure uncompromising metal integrity.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {qualityPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className='flex flex-col p-8 rounded-2xl bg-white border border-[#DDE3EA] hover:border-amber-500 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1'
                >
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300'>
                    <Icon className='h-6 w-6' />
                  </div>
                  <h3 className='text-lg font-bold text-[#0B1628] mb-3 group-hover:text-amber-600 transition-colors'>
                    {pillar.title}
                  </h3>
                  <p className='text-sm text-[#526176] leading-relaxed'>
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Traceability Flow Section (Navy Background) */}
        <section className='mb-24 rounded-3xl bg-[#0B1628] border border-[#1E293B] p-8 sm:p-12 md:p-16 shadow-2xl text-white'>
          <div className='max-w-3xl mb-12'>
            <span className='text-xs font-bold uppercase tracking-wider text-amber-500 mb-2 block'>
              End-to-End Governance
            </span>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4'>
              Heat & Batch Traceability Protocol
            </h2>
            <p className='text-sm sm:text-base text-[#CBD5E1] leading-relaxed'>
              In-process materials are identified by unique Heat Numbers and
              Batch Numbers. This guarantees transparent, two-way traceability
              so any technical query can be traced back to its specific furnace
              melt parameters and raw scrap origin.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {traceabilitySteps.map((step, idx) => (
              <div
                key={idx}
                className='flex flex-col p-6 rounded-2xl bg-[#162236] border border-[#24334A] relative'
              >
                <div className='flex items-center justify-between mb-4'>
                  <span className='text-xs font-bold uppercase tracking-widest text-amber-500'>
                    Phase
                  </span>
                  <span className='text-2xl font-black text-[#24334A]'>
                    {step.step}
                  </span>
                </div>
                <h3 className='text-base font-bold text-white mb-2'>
                  {step.title}
                </h3>
                <p className='text-xs sm:text-sm text-[#CBD5E1] leading-relaxed'>
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certification & Compliance Documents Showcase */}
        <section className='mb-12'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F5F7FA] border border-[#DDE3EA] rounded-3xl p-8 sm:p-12'>
            <div className='lg:col-span-7 flex flex-col gap-5'>
              <Typography variant='accentLabel' className='block'>
                Certification & Verification
              </Typography>
              <h2 className='text-2xl sm:text-3xl font-extrabold text-[#0B1628] tracking-tight'>
                Standardized Documentation & Mill Test Certificates
              </h2>
              <p className='text-sm sm:text-base text-[#526176] leading-relaxed'>
                Every consignment shipped from Crystal Metal Industry includes
                an official Mill Test Certificate (MTC) detailing complete
                chemical spectroscopy, lot weight, heat identification, and
                physical dimensions.
              </p>
              <div className='flex flex-col gap-3 pt-2'>
                {[
                  'Comprehensive 14-element spectrometric chemical analysis report',
                  'Batch number and heat code verification certificates',
                  'ISO-aligned quality management and safety documentation',
                  'Third-party inspection documentation available on request',
                ].map((item, idx) => (
                  <div key={idx} className='flex items-start gap-3'>
                    <CheckCircle2 className='h-5 w-5 text-amber-500 shrink-0 mt-0.5' />
                    <span className='text-xs sm:text-sm text-[#0B1628] font-medium'>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Document Placeholder & Showcase Card */}
            <div className='lg:col-span-5 bg-white border border-[#DDE3EA] rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-md'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 mb-4'>
                <FileText className='h-8 w-8' />
              </div>
              <h3 className='text-base font-bold text-[#0B1628] mb-1'>
                Mill Test Certificate (MTC)
              </h3>
              <p className='text-xs text-[#718096] mb-6'>
                Standard chemical & metallurgical documentation provided with
                every shipment lot.
              </p>
              <Link
                href='/contact'
                className='inline-flex h-10 w-full items-center justify-center rounded-lg bg-[#0B1628] text-white text-xs font-bold hover:bg-slate-900 transition-colors shadow-xs'
              >
                Inquire for Sample Certificate
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Full-Width Bottom CTA Section */}
      <section className='w-full bg-[#EEF2F6] py-20 md:py-28 text-center'>
        <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col gap-6 items-center'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-[#0B1628] tracking-tight'>
            Partner with a Quality-First Manufacturer
          </h2>
          <p className='text-base sm:text-lg text-[#526176] max-w-xl leading-relaxed'>
            We deliver secondary aluminum products that strictly adhere to your
            industrial metallurgical standards. Let’s discuss your requirements.
          </p>
          <div className='mt-2 flex flex-col sm:flex-row gap-4 items-center justify-center'>
            <Link
              href='/contact'
              className='inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-500 px-8 text-sm font-bold text-slate-950 transition-all hover:bg-amber-600 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/20'
            >
              Contact Our Engineers
              <ArrowRight className='h-4 w-4' />
            </Link>
            <Link
              href='/products'
              className='inline-flex h-12 items-center justify-center rounded-lg border border-slate-950 bg-transparent px-8 text-sm font-bold text-slate-950 transition-all hover:bg-slate-950/10 active:scale-[0.98]'
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  TestTube,
  Flame,
  SearchCheck,
  Cpu,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Typography } from '@/components/ui/Typography';
import equipmentData from '@/data/equipment.json';

export const metadata = {
  title: 'Test & Equipment | Crystal Metal Industry',
  description:
    'Discover our in-house metallurgical testing equipment, optical emission spectrometer, vacuum gas analysis, and rigorous lab processes for secondary aluminum alloys.',
};

export default function TestEquipmentPage() {
  const testingWorkflows = [
    {
      step: '01',
      icon: SearchCheck,
      title: 'Incoming Scrap & Raw Material Testing',
      description:
        'Every inbound lot of aluminum scrap is categorized, inspected, and spectrally sampled to verify purity and ensure optimal melt charge composition.',
    },
    {
      step: '02',
      icon: Flame,
      title: 'Molten Furnace In-Process Controls',
      description:
        'Continuous vacuum gas analysis and pin hole testing to monitor dissolved hydrogen and alloy density before casting into final product shapes.',
    },
    {
      step: '03',
      icon: TestTube,
      title: 'Final Optical Emission Spectrometry',
      description:
        'Precision optical emission spectrometry verifies multi-element chemistry on final casts, generating certified metallurgical test reports with each batch.',
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
          <span className='text-[#0B1628] font-bold'>Test & Equipment</span>
        </nav>

        {/* Page Header */}
        <div className='max-w-3xl mb-16'>
          <Typography variant='accentLabel' className='mb-2 block'>
            Quality Assurance & Laboratory
          </Typography>
          <h1 className='mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1628] tracking-tight'>
            Test & Laboratory Equipment
          </h1>
          <p className='text-base sm:text-lg text-[#526176] leading-relaxed'>
            Quality is the top priority at Crystal Metal Industry. Our stringent
            process controls, fully equipped metallurgical testing laboratory,
            and expert quality engineering team work in tandem to ensure
            immaculate purity and physical integrity across all finished
            products.
          </p>
        </div>

        {/* Laboratory Capabilities Highlights */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-20'>
          <div className='p-6 rounded-2xl bg-[#F5F7FA] border border-[#DDE3EA] flex items-center gap-4'>
            <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 shrink-0'>
              <Cpu className='h-6 w-6' />
            </div>
            <div>
              <h3 className='text-sm font-bold text-[#0B1628]'>
                Advanced Instrumentation
              </h3>
              <p className='text-xs text-[#526176] mt-0.5'>
                Calibrated optical emission spectrometers & vacuum analyzers
              </p>
            </div>
          </div>

          <div className='p-6 rounded-2xl bg-[#F5F7FA] border border-[#DDE3EA] flex items-center gap-4'>
            <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 shrink-0'>
              <Sparkles className='h-6 w-6' />
            </div>
            <div>
              <h3 className='text-sm font-bold text-[#0B1628]'>
                Multi-Stage Verification
              </h3>
              <p className='text-xs text-[#526176] mt-0.5'>
                Incoming raw material, in-process molten bath, & final lot
                checks
              </p>
            </div>
          </div>

          <div className='p-6 rounded-2xl bg-[#F5F7FA] border border-[#DDE3EA] flex items-center gap-4'>
            <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 shrink-0'>
              <TestTube className='h-6 w-6' />
            </div>
            <div>
              <h3 className='text-sm font-bold text-[#0B1628]'>
                Batch Traceability
              </h3>
              <p className='text-xs text-[#526176] mt-0.5'>
                Traceable heat numbers and certified test certificates (MTC)
              </p>
            </div>
          </div>
        </div>

        {/* Equipment & Measurement Table Section */}
        <section className='mb-24'>
          <div className='mb-10'>
            <Typography variant='accentLabel' className='mb-2 block'>
              Laboratory Apparatus
            </Typography>
            <h2 className='text-2xl sm:text-3xl font-extrabold text-[#0B1628] tracking-tight'>
              Testing Equipment & Measurement Capabilities
            </h2>
            <p className='text-sm sm:text-base text-[#526176] mt-2'>
              Our laboratory is equipped with precision testing systems to
              guarantee alloy chemistry, density, and thermal consistency.
            </p>
          </div>

          {/* Responsive Table Container */}
          <div className='overflow-hidden rounded-2xl border border-[#DDE3EA] bg-white shadow-xs w-full'>
            {/* Desktop / Tablet Table View */}
            <div className='hidden md:block overflow-x-auto w-full'>
              <table className='w-full text-left border-collapse'>
                <thead>
                  <tr className='border-b border-[#DDE3EA] bg-[#0B1628] text-white'>
                    <th className='py-4 px-6 text-xs font-bold uppercase tracking-wider w-1/2'>
                      Equipment / Method
                    </th>
                    <th className='py-4 px-6 text-xs font-bold uppercase tracking-wider w-1/2'>
                      Test Performed & Measurement
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-[#DDE3EA] text-sm'>
                  {equipmentData.map((item, idx) => (
                    <tr
                      key={item.id}
                      className={`transition-colors hover:bg-amber-500/5 ${
                        idx % 2 === 1 ? 'bg-[#F5F7FA]/50' : 'bg-white'
                      }`}
                    >
                      <td className='py-5 px-6 font-bold text-[#0B1628]'>
                        <div className='flex items-center gap-2.5'>
                          <span className='h-2 w-2 rounded-full bg-amber-500 shrink-0' />
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td className='py-5 px-6 font-medium text-[#526176]'>
                        {item.measurement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card List View (For ultra-smooth mobile UX) */}
            <div className='block md:hidden divide-y divide-[#DDE3EA]'>
              {equipmentData.map((item) => (
                <div key={item.id} className='p-5 flex flex-col gap-2'>
                  <div className='flex items-center gap-2'>
                    <span className='h-2 w-2 rounded-full bg-amber-500 shrink-0' />
                    <h3 className='font-bold text-[#0B1628] text-sm'>
                      {item.name}
                    </h3>
                  </div>

                  <div className='pl-4'>
                    <span className='text-[10px] font-bold text-[#718096] uppercase tracking-wider block mb-0.5'>
                      Test Performed & Measurement
                    </span>
                    <p className='text-xs font-medium text-[#526176]'>
                      {item.measurement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Full-Width Bottom CTA Section */}
      <section className='w-full bg-[#EEF2F6] py-20 md:py-28 text-center'>
        <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col gap-6 items-center'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-[#0B1628] tracking-tight'>
            Require Custom Metallurgical Testing?
          </h2>
          <p className='text-base sm:text-lg text-[#526176] max-w-xl leading-relaxed'>
            We supply certified test reports (MTC) and accommodate custom
            spectrometric chemistry tolerances for steelmaking and casting
            demands.
          </p>
          <div className='mt-2 flex flex-col sm:flex-row gap-4 items-center justify-center'>
            <Link
              href='/contact'
              className='inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-500 px-8 text-sm font-bold text-slate-950 transition-all hover:bg-amber-600 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/20'
            >
              Request Test Specifications
              <ArrowRight className='h-4 w-4' />
            </Link>
            <Link
              href='/quality/certification'
              className='inline-flex h-12 items-center justify-center rounded-lg border border-slate-950 bg-transparent px-8 text-sm font-bold text-slate-950 transition-all hover:bg-slate-950/10 active:scale-[0.98]'
            >
              Quality Certification
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

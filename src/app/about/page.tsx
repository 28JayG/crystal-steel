import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  ShieldCheck,
  Target,
  Zap,
  Milestone,
} from 'lucide-react';
import { Typography } from '@/components/ui/Typography';

export const metadata = {
  title: 'About Us | Crystal Metal Industry',
  description:
    'Learn about our journey, core values, manufacturing milestones, and the experienced leadership team driving secondary aluminum manufacturing.',
};

export default function AboutPage() {
  const coreValues = [
    {
      icon: ShieldCheck,
      title: 'Uncompromising Quality',
      description:
        'We focus on consistent product quality, dependable supply, and long-term customer relationships.',
    },
    {
      icon: Target,
      title: 'Responsible Recycling',
      description:
        'We transform aluminum scrap into valuable products while supporting resource conservation and circularity.',
    },
    {
      icon: Zap,
      title: 'Customer Commitment',
      description:
        'We work closely with industrial customers to provide responsive service and reliable product supply.',
    },
  ];

  const milestones = [
    {
      year: '2026',
      title: 'Crystal Metal Industry Established',
      description:
        'Crystal Metal Industry was established in Jamshedpur, Jharkhand, with a focus on aluminum scrap recycling and secondary aluminum products.',
    },
    {
      year: '2026',
      title: '1,000 MT/Month Capacity',
      description:
        'The company operates with an installed production capacity of 1,000 MT per month, equivalent to 12,000 MTPA.',
    },
    {
      year: 'Ongoing',
      title: 'International Scrap Sourcing',
      description:
        'We source a significant portion of our aluminum scrap from international markets, strengthening our raw-material supply chain.',
    },
    {
      year: 'Future',
      title: 'Expanding Value-Added Products',
      description:
        'Our growth plans include expansion into aluminum wire and extrusion products.',
    },
  ];

  const team = [
    {
      name: 'Shivam Poddar',
      role: 'Director',
      imageLetter: 'S',
    },
    {
      name: 'Vijay Mittal',
      role: 'Director',
      imageLetter: 'V',
    },
    {
      name: 'Navin Poddar',
      role: 'Director',
      imageLetter: 'N',
    },
  ];

  return (
    <div className='min-h-screen bg-white py-14 md:py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Breadcrumbs */}
        <nav className='flex items-center gap-2 mb-8 text-xs sm:text-sm font-semibold text-[#718096]'>
          <Link href='/' className='hover:text-amber-500 transition-colors'>
            Home
          </Link>
          <ChevronRight className='h-4 w-4 text-[#718096] shrink-0' />
          <span className='text-[#0B1628] font-bold'>About</span>
        </nav>

        {/* Page Header */}
        <div className='max-w-3xl mb-16'>
          <Typography variant='accentLabel' className='mb-2 block'>
            Our Journey
          </Typography>
          <h1 className='mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1628] tracking-tight'>
            About Us
          </h1>
          <p className='text-base sm:text-lg text-[#526176] leading-relaxed'>
            Building a responsible future through aluminum recycling, secondary
            aluminum products, and strong industrial partnerships.
          </p>
        </div>

        {/* Who We Are Story Section */}
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24'>
          <div className='flex flex-col gap-5'>
            <h2 className='text-2xl sm:text-3xl font-extrabold text-[#0B1628] tracking-tight'>
              Who We Are
            </h2>
            <p className='text-sm sm:text-base text-[#526176] leading-relaxed'>
              Crystal Metal Industry is an aluminum scrap recycling company
              based in Jamshedpur, Jharkhand. Established in 2026, we specialize
              in converting aluminum scrap into high-quality secondary aluminum
              products for industrial applications.
            </p>
            <p className='text-sm sm:text-base text-[#526176] leading-relaxed'>
              Our flagship product is Aluminum Deoxidizer (Deox), manufactured
              primarily for steelmaking applications. Our product portfolio also
              includes aluminum ingots, notch bars, and cubes.
            </p>
            <p className='text-sm sm:text-base text-[#526176] leading-relaxed'>
              We are backed by a group with more than 15 years of experience
              across manufacturing and international trade. This foundation
              provides us with strong commercial expertise, industry
              relationships, operational knowledge, and international sourcing
              capabilities.
            </p>
          </div>
          <div className='relative h-[280px] sm:h-[380px] rounded-2xl overflow-hidden shadow-xl border border-[#DDE3EA]'>
            <Image
              src='/images/about_workspace.png'
              alt='Crystal Metal Industry workspace and manufacturing facility'
              fill
              sizes='(max-width: 1024px) 100vw, 50vw'
              className='object-cover'
            />
          </div>
        </section>

        {/* Core Values Section */}
        <section className='mb-24 bg-[#F5F7FA] p-8 sm:p-12 md:p-16 rounded-3xl border border-[#DDE3EA] text-center'>
          <Typography variant='accentLabel' className='mb-2 block'>
            Our Core Values
          </Typography>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-[#0B1628] tracking-tight mb-12 relative inline-block'>
            Built on Integrity
            <span className='absolute -bottom-3 left-1/2 -translate-x-1/2 w-14 h-1 bg-amber-500 rounded-full' />
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className='flex flex-col items-center p-8 rounded-2xl bg-white border border-[#DDE3EA] hover:border-amber-500 shadow-xs hover:shadow-lg transition-all text-center'
                >
                  <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 mb-6'>
                    <Icon className='h-7 w-7' />
                  </div>
                  <h3 className='mb-3 text-lg font-bold text-[#0B1628]'>
                    {val.title}
                  </h3>
                  <p className='text-sm text-[#526176] leading-relaxed'>
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Timeline Section (Milestones on clean white background) */}
        <section className='mb-24'>
          <div className='text-center mb-16'>
            <Typography variant='accentLabel' className='mb-2 block'>
              Our History
            </Typography>
            <h2 className='text-3xl sm:text-4xl font-extrabold text-[#0B1628] tracking-tight relative inline-block'>
              Key Milestones
              <span className='absolute -bottom-3 left-1/2 -translate-x-1/2 w-14 h-1 bg-amber-500 rounded-full' />
            </h2>
          </div>

          {/* Timeline Tree Layout */}
          <div className='relative border-l-2 border-[#DDE3EA] ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 max-w-2xl mx-auto py-4 space-y-10'>
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className='relative flex flex-col md:flex-row items-start md:items-center'
              >
                {/* Timeline node */}
                <div className='absolute left-[-21px] md:left-[-11px] md:-translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white border-2 border-amber-500 text-amber-500 shadow-sm z-10'>
                  <Milestone className='h-4 w-4' />
                </div>

                {/* Timeline card container */}
                <div className='ml-8 md:ml-12 p-6 rounded-2xl bg-white border border-[#DDE3EA] hover:border-amber-500 shadow-xs hover:shadow-md transition-all w-full'>
                  <span className='text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1'>
                    {m.year}
                  </span>
                  <h3 className='mb-2 text-base md:text-lg font-bold text-[#0B1628]'>
                    {m.title}
                  </h3>
                  <p className='text-xs sm:text-sm text-[#526176] leading-relaxed'>
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Section */}
        <section className='mb-24 bg-[#F5F7FA] p-8 sm:p-12 md:p-16 rounded-3xl border border-[#DDE3EA] text-center'>
          <div className='mb-14'>
            <Typography variant='accentLabel' className='mb-2 block'>
              Our Leadership
            </Typography>
            <h2 className='text-3xl sm:text-4xl font-extrabold text-[#0B1628] tracking-tight relative inline-block'>
              Meet Our Leadership Team
              <span className='absolute -bottom-3 left-1/2 -translate-x-1/2 w-14 h-1 bg-amber-500 rounded-full' />
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {team.map((member, idx) => (
              <div
                key={idx}
                className='flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-[#DDE3EA] hover:border-amber-500 hover:shadow-lg transition-all duration-200 group'
              >
                {/* Avatar Graphic */}
                <div className='flex h-20 w-20 items-center justify-center rounded-full bg-amber-50 border-2 border-amber-200 text-2xl font-extrabold text-amber-600 mb-6 group-hover:border-amber-500 group-hover:scale-105 transition-all shadow-xs'>
                  {member.imageLetter}
                </div>
                <h3 className='mb-1 text-lg font-bold text-[#0B1628]'>
                  {member.name}
                </h3>
                <span className='text-xs font-bold text-amber-600 uppercase tracking-wider block'>
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner (Contained Navy Panel) */}
        <div className='rounded-2xl bg-[#0B1628] border border-[#1E293B] p-8 md:p-12 text-center max-w-4xl mx-auto flex flex-col items-center gap-6 shadow-2xl text-white'>
          <h2 className='text-2xl md:text-3xl font-extrabold text-white'>
            Partner with Crystal Metal Industry
          </h2>
          <p className='max-w-xl text-[#CBD5E1] text-sm md:text-base leading-relaxed'>
            Whether you require Aluminum Deoxidizer or other secondary aluminum
            products, we are ready to build reliable, long-term industrial
            partnerships.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center mt-2 w-full sm:w-auto'>
            <Link
              href='/contact'
              className='inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg bg-amber-500 px-8 text-sm font-bold text-slate-950 transition-all hover:bg-amber-600 active:scale-[0.98] shadow-md'
            >
              Contact Us Today
            </Link>
            <Link
              href='/products'
              className='inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-white/40 bg-transparent px-8 text-sm font-bold text-white transition-all hover:bg-white/10 active:scale-[0.98]'
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

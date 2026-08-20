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
    'Learn about our journey, core values, manufacturing milestones, and the expert engineering team driving precision in metallurgy and custom metal fabrication.',
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
      name: 'Marcus Vance',
      role: 'CEO & Founder',
      bio: 'Over 30 years of industrial metal industry experience, guiding Crystal Metal from foundation to global export.',
      imageLetter: 'M',
    },
    {
      name: 'Elena Rostova',
      role: 'Chief Metallurgical Engineer',
      bio: 'Leads our material testing lab, ensuring chemical integrity and stress tolerances for custom alloy blends.',
      imageLetter: 'E',
    },
    {
      name: 'David Miller',
      role: 'Head of CNC Operations',
      bio: 'Manages our automated fabrication lines, translating complex blueprints into precision machined parts.',
      imageLetter: 'D',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Director of Global Logistics',
      bio: 'Oversees global distribution, managing customs clearance and shipping coordinates to over 50 countries.',
      imageLetter: 'S',
    },
  ];

  return (
    <div className='min-h-screen bg-slate-50 py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Breadcrumbs */}
        <nav className='flex items-center gap-2 mb-8 text-xs sm:text-sm font-semibold text-slate-500'>
          <Link href='/' className='hover:text-amber-600 transition-colors'>
            Home
          </Link>
          <ChevronRight className='h-4 w-4 text-slate-400 shrink-0' />
          <span className='text-slate-800'>About</span>
        </nav>

        {/* Page Header */}
        <div className='max-w-3xl mb-16'>
          <Typography variant='accentLabel' className='mb-2 block'>
            Our Journey
          </Typography>
          <Typography
            variant='h1'
            className='mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900'
          >
            About Us
          </Typography>
          <Typography
            variant='body'
            className='text-base sm:text-lg text-slate-600'
          >
            Building a responsible future through aluminum recycling, secondary
            aluminum products, and strong industrial partnerships.
          </Typography>
        </div>

        {/* Who We Are Story Section */}
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24'>
          <div className='flex flex-col gap-5'>
            <Typography variant='h2' className='text-xl md:text-2xl font-bold'>
              Who We Are
            </Typography>
            <Typography variant='body' className='text-slate-600'>
              Crystal Metal Industry is an aluminum scrap recycling company
              based in Jamshedpur, Jharkhand. Established in 2026, we specialize
              in converting aluminum scrap into high-quality secondary aluminum
              products for industrial applications.
            </Typography>
            <Typography variant='body' className='text-slate-600'>
              Our flagship product is Aluminum Deoxidizer (Deox), manufactured
              primarily for steelmaking applications. Our product portfolio also
              includes aluminum ingots, notch bars, and cubes.
            </Typography>
            <Typography variant='body' className='text-slate-600'>
              We are backed by a group with more than 15 years of experience
              across manufacturing and international trade. This foundation
              provides us with strong commercial expertise, industry
              relationships, operational knowledge, and international sourcing
              capabilities.
            </Typography>
          </div>
          <div className='relative h-[250px] sm:h-[350px] rounded-xl overflow-hidden shadow-md border border-slate-200'>
            <Image
              src='/images/about_workspace.png'
              alt='Automated CNC shop workspace'
              fill
              sizes='(max-width: 1024px) 100vw, 50vw'
              className='object-cover'
            />
          </div>
        </section>

        {/* Core Values Section */}
        <section className='mb-24 text-center'>
          <Typography variant='accentLabel' className='mb-2 block'>
            Our Core Values
          </Typography>
          <Typography variant='h2' className='mb-12 relative inline-block'>
            Built on Integrity
            <span className='absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-12 h-0.5 bg-amber-500 rounded' />
          </Typography>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className='flex flex-col items-center p-8 rounded-xl bg-white border border-slate-200 hover:border-amber-500/40 hover:shadow-md transition-all duration-200 group shadow-xs'
                >
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors'>
                    <Icon className='h-6 w-6' />
                  </div>
                  <Typography variant='h3' className='mb-3 text-lg font-bold'>
                    {val.title}
                  </Typography>
                  <Typography variant='body' className='text-sm text-slate-600'>
                    {val.description}
                  </Typography>
                </div>
              );
            })}
          </div>
        </section>

        {/* Timeline Section */}
        <section className='mb-24'>
          <div className='text-center mb-16'>
            <Typography variant='accentLabel' className='mb-2 block'>
              Our History
            </Typography>
            <Typography variant='h2' className='relative inline-block'>
              Key Milestones
              <span className='absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-12 h-0.5 bg-amber-500 rounded' />
            </Typography>
          </div>

          {/* Timeline Tree Layout */}
          <div className='relative border-l border-slate-200 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 max-w-2xl mx-auto py-4 space-y-12'>
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className='relative flex flex-col md:flex-row items-start md:items-center'
              >
                {/* Timeline node */}
                <div className='absolute left-[-21px] md:left-[-11px] md:-translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white border-2 border-amber-500 text-amber-600 shadow-xs z-10'>
                  <Milestone className='h-4 w-4' />
                </div>

                {/* Timeline card container */}
                <div className='ml-8 md:ml-12 p-6 rounded-xl bg-white border border-slate-200 shadow-sm w-full'>
                  <span className='text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1'>
                    {m.year}
                  </span>
                  <Typography variant='h3' className='mb-2 text-base font-bold'>
                    {m.title}
                  </Typography>
                  <Typography
                    variant='body'
                    className='text-xs sm:text-sm text-slate-600'
                  >
                    {m.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Section */}
        <section className='mb-24 text-center'>
          <div className='mb-16'>
            <Typography variant='accentLabel' className='mb-2 block'>
              Our Leadership
            </Typography>
            <Typography variant='h2' className='relative inline-block'>
              Meet Our Leadership Team
              <span className='absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-12 h-0.5 bg-amber-500 rounded' />
            </Typography>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {team.map((member, idx) => (
              <div
                key={idx}
                className='flex flex-col items-center text-center p-8 rounded-xl bg-white border border-slate-200 hover:border-amber-500/40 hover:shadow-md transition-all duration-200 group shadow-xs'
              >
                {/* Avatar Graphic placeholder */}
                <div className='flex h-20 w-20 items-center justify-center rounded-full bg-amber-50 border-2 border-amber-200 text-2xl font-extrabold text-amber-700 mb-6 group-hover:border-amber-500 group-hover:scale-105 transition-all shadow-2xs'>
                  {member.imageLetter}
                </div>
                <Typography
                  variant='h3'
                  className='mb-1 text-base font-bold text-slate-900'
                >
                  {member.name}
                </Typography>
                <span className='text-xs font-bold text-amber-600 uppercase tracking-wider block mb-4'>
                  {member.role}
                </span>
                <Typography
                  variant='body'
                  className='text-xs text-slate-600 leading-relaxed'
                >
                  {member.bio}
                </Typography>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <div className='rounded-2xl bg-white border border-slate-200 p-8 md:p-12 text-center max-w-4xl mx-auto flex flex-col items-center gap-6 shadow-md'>
          <Typography variant='h2' className='text-2xl md:text-3xl font-bold'>
            Partner with Crystal Metal Industry
          </Typography>
          <Typography
            variant='body'
            className='max-w-xl text-slate-600 text-sm md:text-base'
          >
            Whether you require Aluminum Deoxidizer or other secondary aluminum
            products, we are ready to build reliable, long-term industrial
            partnerships.
          </Typography>
          <div className='flex flex-col sm:flex-row gap-4 justify-center mt-2 w-full sm:w-auto'>
            <Link
              href='/contact'
              className='inline-flex h-12 w-full sm:w-auto items-center justify-center rounded bg-amber-500 px-8 text-sm font-bold text-slate-950 transition-all hover:bg-amber-600 active:scale-[0.98] shadow-sm'
            >
              Contact Us Today
            </Link>
            <Link
              href='/products'
              className='inline-flex h-12 w-full sm:w-auto items-center justify-center rounded border border-slate-300 bg-white px-8 text-sm font-bold text-slate-800 transition-all hover:bg-slate-50 active:scale-[0.98] shadow-2xs'
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

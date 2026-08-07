import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ShieldCheck, Target, Zap, Milestone } from 'lucide-react';
import { Typography } from '@/components/ui/Typography';

export const metadata = {
  title: 'About Us | Crystal Metal Industry',
  description: 'Learn about our journey, core values, manufacturing milestones, and the expert engineering team driving precision in metallurgy and custom metal fabrication.',
};

export default function AboutPage() {
  const coreValues = [
    {
      icon: ShieldCheck,
      title: 'Uncompromising Quality',
      description: 'Every component conforms to absolute ISO standards, verified by rigorous testing and certifications.',
    },
    {
      icon: Target,
      title: 'Engineering Excellence',
      description: 'Utilizing advanced metallurgy, precision CNC machining, and state-of-the-art tooling technology.',
    },
    {
      icon: Zap,
      title: 'Customer Centricity',
      description: 'Committed to on-time shipping, flexible production runs, and transparent global logistics support.',
    },
  ];

  const milestones = [
    {
      year: '2000',
      title: 'Company Founded',
      description: 'Crystal Metal Industry was established in the Steel District with a single steel sheet processing line.',
    },
    {
      year: '2008',
      title: 'ISO 9001 Certification',
      description: 'Successfully standardized operations and earned our first ISO 9001 quality management system certification.',
    },
    {
      year: '2015',
      title: 'Global Export Operations',
      description: 'Expanded manufacturing capabilities and launched global distribution, exporting products to over 50 countries.',
    },
    {
      year: '2023',
      title: 'CNC Automation Upgrade',
      description: 'Installed state-of-the-art automated CNC lines, increasing custom fabrication speed and tolerance accuracy.',
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
    <div className="min-h-screen bg-[#0B0F19] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-8 text-xs sm:text-sm font-semibold text-slate-500">
          <Link href="/" className="hover:text-amber-500 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-slate-600 shrink-0" />
          <span className="text-slate-300">About</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <Typography variant="accentLabel" className="mb-2 block">
            Our Journey
          </Typography>
          <Typography variant="h1" className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            About Us
          </Typography>
          <Typography variant="body" className="text-base sm:text-lg text-slate-400">
            Strength Behind the Metal. Leading provider of metal fabrication, alloy supply, and engineering solutions since 2000.
          </Typography>
        </div>

        {/* Who We Are Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="flex flex-col gap-5">
            <Typography variant="h2" className="text-xl md:text-2xl font-bold">
              Who We Are
            </Typography>
            <Typography variant="body" className="text-slate-300">
              For over two decades, Crystal Metal Industry has stood at the intersection of metallurgy and machinery. We specialize in producing raw steel products, custom flanges, seamless structural pipes, and bespoke machinery components that power industrial growth.
            </Typography>
            <Typography variant="body" className="text-slate-300">
              Our state-of-the-art facilities in the Steel District are equipped with CNC machining, laser cutting, and full testing laboratories. This enables us to maintain tight tolerances and guarantee that every order conforms strictly to international standards.
            </Typography>
          </div>
          <div className="relative h-[250px] sm:h-[350px] rounded overflow-hidden shadow-xl border border-slate-800">
            <Image
              src="/images/about_workspace.png"
              alt="Automated CNC shop workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-24 text-center">
          <Typography variant="accentLabel" className="mb-2 block">
            Our Core Values
          </Typography>
          <Typography variant="h2" className="mb-12 relative inline-block">
            Built on Integrity
            <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-12 h-0.5 bg-amber-500 rounded" />
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center p-8 rounded bg-[#121826] border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded bg-amber-500/10 text-amber-500 mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <Typography variant="h3" className="mb-3 text-lg font-bold">
                    {val.title}
                  </Typography>
                  <Typography variant="body" className="text-sm">
                    {val.description}
                  </Typography>
                </div>
              );
            })}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <Typography variant="accentLabel" className="mb-2 block">
              Our History
            </Typography>
            <Typography variant="h2" className="relative inline-block">
              Key Milestones
              <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-12 h-0.5 bg-amber-500 rounded" />
            </Typography>
          </div>

          {/* Timeline Tree Layout */}
          <div className="relative border-l border-slate-800 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 max-w-2xl mx-auto py-4 space-y-12">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center">
                {/* Timeline node */}
                <div className="absolute left-[-21px] md:left-[-11px] md:-translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 border-2 border-amber-500 text-amber-500 z-10">
                  <Milestone className="h-4 w-4" />
                </div>

                {/* Timeline card container */}
                <div className="ml-8 md:ml-12 p-6 rounded bg-[#121826] border border-slate-800 w-full">
                  <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block mb-1">
                    {m.year}
                  </span>
                  <Typography variant="h3" className="mb-2 text-base font-bold">
                    {m.title}
                  </Typography>
                  <Typography variant="body" className="text-xs sm:text-sm text-slate-400">
                    {m.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-24 text-center">
          <div className="mb-16">
            <Typography variant="accentLabel" className="mb-2 block">
              Our Leadership
            </Typography>
            <Typography variant="h2" className="relative inline-block">
              Meet Our Leadership Team
              <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-12 h-0.5 bg-amber-500 rounded" />
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-8 rounded bg-[#121826] border border-slate-800 hover:border-slate-700 transition-all duration-200 group"
              >
                {/* Avatar Graphic placeholder (initial) */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-900 border-2 border-slate-800 text-2xl font-extrabold text-amber-500 mb-6 group-hover:border-amber-500/50 group-hover:scale-105 transition-all">
                  {member.imageLetter}
                </div>
                <Typography variant="h3" className="mb-1 text-base font-bold text-white">
                  {member.name}
                </Typography>
                <span className="text-xs font-bold text-amber-500 uppercase tracking-wider block mb-4">
                  {member.role}
                </span>
                <Typography variant="body" className="text-xs text-slate-400 leading-relaxed">
                  {member.bio}
                </Typography>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <div className="rounded bg-[#121826] border border-slate-800 p-8 md:p-12 text-center max-w-4xl mx-auto flex flex-col items-center gap-6 shadow-xl">
          <Typography variant="h2" className="text-2xl md:text-3xl font-bold">
            Partner with Metal Engineering Experts
          </Typography>
          <Typography variant="body" className="max-w-xl text-slate-400 text-sm md:text-base">
            Whether you need bulk steel bars, seamless structural pipes, or bespoke fabrication, our team is equipped to deliver. Let us quote your project specs.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded bg-amber-500 px-8 text-sm font-bold text-slate-950 transition-all hover:bg-amber-600 active:scale-[0.98]"
            >
              Contact Us Today
            </Link>
            <Link
              href="/products"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded border border-slate-700 bg-slate-900/50 px-8 text-sm font-bold text-white transition-all hover:bg-slate-800 active:scale-[0.98]"
            >
              Explore Products
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

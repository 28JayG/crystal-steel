import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Clock,
  Award,
  Users,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Typography } from '@/components/ui/Typography';
import { MetricsBar } from '@/components/MetricsBar';
import productsData from '@/data/products.json';

export default function Home() {
  // We'll show the first 3 products as "Featured Products"
  const featuredProducts = productsData.slice(0, 3);

  const features = [
    {
      icon: ShieldCheck,
      title: '15+ Years of Group Experience',
      description:
        'Backed by an established group with more than 15 years of experience across manufacturing and international trade.',
    },
    {
      icon: Clock,
      title: 'International Scrap Sourcing',
      description:
        'We source a significant portion of our aluminum scrap from international markets, supporting a reliable raw-material supply chain.',
    },
    {
      icon: Award,
      title: '1,000 MT/Month Capacity',
      description:
        'Our current installed capacity of 1,000 MT per month supports consistent production of Deox and other secondary aluminum products.',
    },
    {
      icon: Users,
      title: 'Strategic Jamshedpur Location',
      description: `Located in the heart of India's steel belt, we are strategically positioned to serve steel manufacturers and industrial customers.`,
    },
  ];

  return (
    <div className='flex flex-col min-h-screen bg-white'>
      {/* 1. Hero Section (Predominantly LIGHT / WHITE) */}
      <section className='relative bg-white py-16 md:py-24 border-b border-[#DDE3EA] overflow-hidden'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center'>
            {/* Left Column: Text Content */}
            <div className='lg:col-span-7 flex flex-col gap-6 text-left'>
              <div className='inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-50 px-4 py-1.5 self-start'>
                <span className='h-2 w-2 rounded-full bg-amber-500 animate-pulse' />
                <span className='text-xs font-bold uppercase tracking-wider text-amber-600'>
                  PREMIUM SECONDARY ALUMINUM
                </span>
              </div>

              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1628] leading-[1.1]'>
                Turning Scrap Into <br />
                <span className='text-amber-500 underline decoration-amber-500/40 decoration-4 underline-offset-8'>
                  Industrial Value
                </span>
              </h1>

              <p className='text-base sm:text-lg text-[#526176] max-w-2xl leading-relaxed'>
                Crystal Metal Industry recycles aluminum scrap into high-quality
                secondary aluminum products, with a strong focus on Aluminum
                Deoxidizer for the steel industry.
              </p>

              <div className='mt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4'>
                <Link
                  href='/products'
                  className='inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-500 px-8 text-sm font-bold text-slate-950 transition-all hover:bg-amber-600 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-amber-500/20'
                >
                  Explore Products
                  <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/contact'
                  className='inline-flex h-12 items-center justify-center rounded-lg border-2 border-[#0B1628] bg-white px-8 text-sm font-bold text-[#0B1628] transition-all hover:bg-[#0B1628] hover:text-white active:scale-[0.98]'
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Right Column: Industrial Visual Card */}
            <div className='lg:col-span-5 relative'>
              <div className='relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden border border-[#DDE3EA] shadow-xl group'>
                <Image
                  src='/images/hero_bg.png'
                  alt='Industrial metal processing facility'
                  fill
                  priority
                  sizes='(max-width: 1024px) 100vw, 45vw'
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#0B1628]/80 via-[#0B1628]/20 to-transparent' />
                <div className='absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg text-left'>
                  <span className='text-[10px] font-bold text-amber-600 uppercase tracking-widest block mb-0.5'>
                    Certified Manufacturing
                  </span>
                  <p className='text-xs sm:text-sm font-bold text-[#0B1628]'>
                    1,000 MT/Month Secondary Aluminum Capacity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Metrics Bar (Orange Strip) */}
      <MetricsBar />

      {/* 3. Why Choose Us Section (LIGHT GRAY #F5F7FA) */}
      <section className='w-full bg-[#F5F7FA] py-20 md:py-28 border-b border-[#DDE3EA]'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center'>
          <Typography variant='accentLabel' className='mb-3 block'>
            Why Choose Us
          </Typography>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-[#0B1628] tracking-tight mb-16 relative inline-block'>
            Built on Experience. Driven by Reliability
            <span className='absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-amber-500 rounded-full' />
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className='flex flex-col items-center sm:items-start text-center sm:text-left p-8 rounded-2xl bg-[#0B1628] border border-[#1E293B] hover:border-amber-500 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1'
                >
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300'>
                    <Icon className='h-6 w-6' />
                  </div>
                  <h3 className='text-lg font-bold text-white mb-2'>
                    {feature.title}
                  </h3>
                  <p className='text-sm text-[#CBD5E1] leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Featured Products Section (WHITE CANVAS #FFFFFF) */}
      <section className='w-full bg-white py-20 md:py-28 border-b border-[#DDE3EA]'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col sm:flex-row justify-between items-center mb-14 gap-4'>
            <div className='text-center sm:text-left'>
              <Typography variant='accentLabel' className='mb-2 block'>
                Our Range
              </Typography>
              <h2 className='text-3xl sm:text-4xl font-extrabold text-[#0B1628] tracking-tight'>
                Featured Products
              </h2>
            </div>
            <Link
              href='/products'
              className='inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-500 transition-colors group'
            >
              View All Products
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className='flex flex-col overflow-hidden rounded-2xl bg-white border border-[#DDE3EA] hover:border-amber-500 transition-all duration-300 group hover:-translate-y-1 shadow-xs hover:shadow-xl'
              >
                <div className='relative h-60 overflow-hidden bg-slate-50 border-b border-[#DDE3EA]'>
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    sizes='(max-width: 768px) 100vw, 33vw'
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                </div>
                <div className='flex flex-col p-7 flex-grow'>
                  <h3 className='text-lg font-bold text-[#0B1628] mb-2'>
                    {product.title}
                  </h3>
                  <p className='text-sm text-[#526176] leading-relaxed mb-6 flex-grow'>
                    {product.description}
                  </p>
                  <Link
                    href={`/products?id=${product.id}`}
                    className='inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-500 transition-colors group/link'
                  >
                    Learn more
                    <ArrowRight className='h-4 w-4 transition-transform group-hover/link:translate-x-1' />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Precision Commitment Section (Light Section with Contained Navy Feature Panel) */}
      <section className='w-full bg-[#F5F7FA] py-20 md:py-28 border-b border-[#DDE3EA]'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center'>
            {/* Left: Molten Metal Pouring Imagery with ISO Badge */}
            <div className='lg:col-span-5 relative h-[320px] sm:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-[#DDE3EA]'>
              <Image
                src='/images/precision_commitment.png'
                alt='Molten metal pouring in secondary aluminum facility'
                fill
                sizes='(max-width: 1024px) 100vw, 40vw'
                className='object-cover'
              />
              {/* <div className='absolute bottom-6 left-6 rounded-xl bg-amber-500 px-6 py-3.5 text-slate-950 font-bold shadow-xl flex flex-col justify-center'>
                <span className='text-base font-extrabold tracking-wider leading-none'>
                  ISO 9001
                </span>
                <span className='text-[10px] uppercase font-bold tracking-widest text-slate-900 mt-1'>
                  Certified
                </span>
              </div> */}
            </div>

            {/* Right: Contained Navy Brand Feature Panel */}
            <div className='lg:col-span-7 bg-[#0B1628] rounded-2xl p-8 sm:p-12 text-white shadow-2xl flex flex-col gap-6'>
              <div>
                <span className='text-xs font-bold uppercase tracking-wider text-amber-500 mb-2 block'>
                  Our Commitment
                </span>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4'>
                  Responsible Recycling. Reliable Products
                </h2>
                <p className='text-sm sm:text-base text-[#CBD5E1] leading-relaxed'>
                  At Crystal Metal Industry, we are committed to responsibly
                  sourcing and recycling aluminum scrap into valuable industrial
                  products. Our focus is on consistent quality, reliable supply,
                  resource efficiency, and long-term customer relationships.
                </p>
              </div>

              <ul className='flex flex-col gap-3.5 my-1'>
                {[
                  'Responsible aluminum scrap recycling',
                  'Reliable supply and consistent product quality',
                  'Strong focus on steelmaking applications',
                  'Sustainable resource-efficient industrial growth',
                ].map((item, idx) => (
                  <li key={idx} className='flex items-center gap-3'>
                    <CheckCircle2 className='h-5 w-5 text-amber-500 shrink-0' />
                    <span className='text-sm md:text-base text-[#CBD5E1]'>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className='mt-2'>
                <Link
                  href='/about'
                  className='inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-500 px-8 text-sm font-bold text-slate-950 transition-all hover:bg-amber-600 hover:scale-[1.02] active:scale-[0.98] shadow-md'
                >
                  Learn About Us
                  <ArrowRight className='h-4 w-4' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section (LIGHT GRAY #EEF2F6 / #F5F7FA) */}
      <section className='w-full bg-[#EEF2F6] py-20 md:py-28 text-center'>
        <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col gap-6 items-center'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-[#0B1628] tracking-tight'>
            Ready to Start Your Project?
          </h2>
          <p className='text-base sm:text-lg text-[#526176] max-w-xl leading-relaxed'>
            Contact our sales and engineering team today to get a customized
            quote for your specific metal fabrication or alloy requirements.
          </p>
          <div className='mt-2'>
            <Link
              href='/contact'
              className='inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-500 px-8 text-sm font-bold text-slate-950 transition-all hover:bg-amber-600 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/20'
            >
              Contact Us Now
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

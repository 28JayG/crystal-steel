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
    <div className='flex flex-col min-h-screen'>
      {/* 1. Hero Section */}
      <section className='relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-slate-50 py-24 md:py-32'>
        {/* Background Image with overlay */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/hero_bg.png'
            alt='Steel mill foundry background'
            fill
            priority
            className='object-cover opacity-15'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent' />
        </div>

        <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full'>
          <div className='max-w-3xl flex flex-col gap-6'>
            <div className='inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-50 px-4 py-1.5 self-center sm:self-start shadow-2xs'>
              <span className='h-2 w-2 rounded-full bg-amber-500 animate-pulse' />
              <Typography variant='accentLabel' className='text-xs text-amber-700'>
                PREMIUM SECONDARY ALUMINUM
              </Typography>
            </div>

            <Typography
              variant='h1'
              className='text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900'
            >
              Turning Scrap Into <br />
              <span className='text-amber-600 underline decoration-amber-500/40 decoration-4 underline-offset-8'>
                Industrial Value
              </span>
            </Typography>

            <Typography
              variant='body'
              className='text-lg text-slate-600 max-w-2xl'
            >
              Crystal Metal Industry recycles aluminum scrap into high-quality
              secondary aluminum products, with a strong focus on Aluminum
              Deoxidizer for the steel industry.
            </Typography>

            <div className='mt-4 flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start'>
              <Link
                href='/products'
                className='inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded bg-amber-500 px-8 text-sm font-bold text-slate-950 transition-all hover:bg-amber-600 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md'
              >
                Explore Products
                <ArrowRight className='h-4 w-4' />
              </Link>
              <Link
                href='/contact'
                className='inline-flex h-12 w-full sm:w-auto items-center justify-center rounded border border-slate-300 bg-white px-8 text-sm font-bold text-slate-800 transition-all hover:bg-slate-100 hover:border-slate-400 active:scale-[0.98] shadow-2xs'
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Metrics Bar */}
      <MetricsBar />

      {/* 3. Why Choose Us Section */}
      <section className='w-full bg-white py-24 md:py-32 border-t border-slate-100'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center'>
          <Typography variant='accentLabel' className='mb-3 block'>
            Why Choose Us
          </Typography>
          <Typography variant='h2' className='mb-16 relative inline-block'>
            Built on Experience. Driven by Reliability
            <span className='absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-16 h-1 bg-amber-500 rounded' />
          </Typography>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className='flex flex-col items-center sm:items-start text-center sm:text-left p-8 rounded-lg bg-slate-50/70 border border-slate-200 hover:border-amber-500/40 hover:bg-white transition-all duration-300 group hover:-translate-y-1 shadow-2xs hover:shadow-md'
                >
                  <div className='flex h-12 w-12 items-center justify-center rounded bg-amber-500/10 text-amber-600 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300'>
                    <Icon className='h-6 w-6' />
                  </div>
                  <Typography
                    variant='h3'
                    className='mb-3 text-slate-900 font-bold'
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant='body' className='text-sm text-slate-600'>
                    {feature.description}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Featured Products Section */}
      <section className='w-full bg-slate-50 py-24 md:py-32 border-t border-slate-200'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col sm:flex-row justify-between items-center mb-16 gap-4'>
            <div className='text-center sm:text-left'>
              <Typography variant='accentLabel' className='mb-2 block'>
                Our Range
              </Typography>
              <Typography variant='h2'>Featured Products</Typography>
            </div>
            <Link
              href='/products'
              className='inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors group'
            >
              View All Products
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className='flex flex-col overflow-hidden rounded-lg bg-white border border-slate-200 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-md'
              >
                <div className='relative h-64 overflow-hidden bg-slate-100'>
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    sizes='(max-width: 768px) 100vw, 33vw'
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent' />
                </div>
                <div className='flex flex-col p-8 flex-grow'>
                  <Typography variant='h3' className='mb-3 text-slate-900 group-hover:text-amber-600 transition-colors'>
                    {product.title}
                  </Typography>
                  <Typography variant='body' className='text-sm text-slate-600 mb-6 flex-grow'>
                    {product.description}
                  </Typography>
                  <Link
                    href={`/products?id=${product.id}`}
                    className='inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors group/link'
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

      {/* 5. Precision Commitment Section */}
      <section className='w-full bg-white py-24 md:py-32 border-t border-slate-200'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            {/* Image block with ISO badge */}
            <div className='relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg border border-slate-200'>
              <Image
                src='/images/precision_commitment.png'
                alt='Molten metal pouring in forge'
                fill
                sizes='(max-width: 1024px) 100vw, 50vw'
                className='object-cover'
              />
              <div className='absolute bottom-6 left-6 rounded bg-amber-500 px-6 py-3 text-slate-950 font-bold shadow-md flex flex-col justify-center'>
                <span className='text-base font-extrabold tracking-wider leading-none'>
                  ISO 9001
                </span>
                <span className='text-[10px] uppercase font-bold tracking-widest text-slate-900 mt-1'>
                  Certified
                </span>
              </div>
            </div>

            {/* Content block */}
            <div className='flex flex-col gap-6'>
              <div>
                <Typography variant='accentLabel' className='mb-2 block'>
                  Our Commitment
                </Typography>
                <Typography variant='h2' className='mb-4'>
                  Responsible Recycling. Reliable Products
                </Typography>
                <Typography variant='body' className='text-slate-600'>
                  At Crystal Metal Industry, we are committed to responsibly
                  sourcing and recycling aluminum scrap into valuable industrial
                  products. Our focus is on consistent quality, reliable supply,
                  resource efficiency, and long-term customer relationships.
                </Typography>
              </div>

              <ul className='flex flex-col gap-3.5 my-2'>
                {[
                  'Responsible aluminum scrap recycling',
                  'Reliable supply and consistent product quality',
                  'Strong focus on steelmaking applications',
                  'Sustainable resource-efficient industrial growth',
                ].map((item, idx) => (
                  <li key={idx} className='flex items-center gap-3'>
                    <CheckCircle2 className='h-5 w-5 text-amber-600 shrink-0' />
                    <span className='text-sm md:text-base text-slate-700 font-medium'>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className='mt-2'>
                <Link
                  href='/about'
                  className='inline-flex h-12 items-center justify-center gap-2 rounded bg-amber-500 px-8 text-sm font-bold text-slate-950 transition-all hover:bg-amber-600 hover:scale-[1.02] active:scale-[0.98] shadow-sm'
                >
                  Learn About Us
                  <ArrowRight className='h-4 w-4' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className='relative w-full bg-slate-900 py-24 text-center overflow-hidden'>
        {/* Background Overlay */}
        <div className='absolute inset-0 z-0 opacity-10'>
          <Image
            src='/images/hero_bg.png'
            alt='Steel factory workspace'
            fill
            className='object-cover'
          />
        </div>

        <div className='relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col gap-6 items-center'>
          <Typography
            variant='h2'
            className='text-3xl md:text-4xl font-extrabold text-white'
          >
            Ready to Start Your Project?
          </Typography>
          <Typography
            variant='body'
            className='text-lg text-slate-300 max-w-xl'
          >
            Contact our sales and engineering team today to get a customized
            quote for your specific metal fabrication or alloy requirements.
          </Typography>
          <div className='mt-4'>
            <Link
              href='/contact'
              className='inline-flex h-12 items-center justify-center gap-2 rounded bg-amber-500 px-8 text-sm font-bold text-slate-950 transition-all hover:bg-amber-600 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-amber-500/20'
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

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Typography } from '@/components/ui/Typography';
import { ProductList } from '@/components/ProductList';
import productsData from '@/data/products.json';

export const metadata = {
  title: 'Metal Products Catalogue | Crystal Metal Industry',
  description:
    'Browse our range of precision metal products, including aluminum deoxidizer, shots, ingots, notch bars, and cubes.',
};

export default function ProductsPage() {
  return (
    <div className='min-h-screen bg-white py-14 md:py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Breadcrumbs */}
        <nav className='flex items-center gap-2 mb-8 text-xs sm:text-sm font-semibold text-[#718096]'>
          <Link href='/' className='hover:text-amber-500 transition-colors'>
            Home
          </Link>
          <ChevronRight className='h-4 w-4 text-[#718096] shrink-0' />
          <span className='text-[#0B1628] font-bold'>Products</span>
        </nav>

        {/* Page Header */}
        <div className='max-w-3xl mb-14'>
          <Typography variant='accentLabel' className='mb-2 block'>
            Our Catalogue
          </Typography>
          <h1 className='mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1628] tracking-tight'>
            Metal Products
          </h1>
          <p className='text-base sm:text-lg text-[#526176] leading-relaxed'>
            A comprehensive range of secondary aluminum products manufactured
            for steelmaking and industrial applications.
          </p>
        </div>

        {/* Product List Component */}
        <ProductList initialProducts={productsData} />

        {/* Custom Order CTA Banner (Contained Navy Panel) */}
        <div className='mt-20 rounded-2xl bg-[#0B1628] border border-[#1E293B] p-8 md:p-12 text-center max-w-4xl mx-auto flex flex-col items-center gap-6 shadow-2xl text-white'>
          <h2 className='text-2xl md:text-3xl font-extrabold text-white'>
            Don&apos;t See What You Need?
          </h2>
          <p className='max-w-xl text-[#CBD5E1] text-sm md:text-base leading-relaxed'>
            We offer fully custom fabrication. Tell us your specifications and
            our team of metallurgical engineers will deliver a solution tailored
            to your project.
          </p>
          <div className='mt-2'>
            <Link
              href='/contact?product=custom'
              className='inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-500 px-8 text-sm font-bold text-slate-950 transition-all hover:bg-amber-600 hover:scale-[1.02] active:scale-[0.98] shadow-md'
            >
              Request Custom Order
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

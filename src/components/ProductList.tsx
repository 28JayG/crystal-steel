'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowRight, Search } from 'lucide-react';
import { Typography } from '@/components/ui/Typography';

interface Spec {
  name: string;
  value: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  specs: Spec[];
}

interface ProductListProps {
  initialProducts: Product[];
  category?: string;
}

const categoryToSlug: Record<string, string> = {
  Deoxidizer: 'deoxidizer',
  Shots: 'shots',
  Ingots: 'ingots',
  'Notch Bars': 'notch-bars',
  Cubes: 'cubes',
};

const ProductListContent: React.FC<ProductListProps> = ({
  initialProducts,
  category = 'All',
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [clearedHighlight, setClearedHighlight] = useState(false);

  const categories = ['All', 'Deoxidizer', 'Shots', 'Ingots', 'Notch Bars', 'Cubes'];
  const highlightId = searchParams.get('id');

  // Handle scrolling and highlight timeout from query parameters
  useEffect(() => {
    if (highlightId) {
      const element = document.getElementById(highlightId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      const timer = setTimeout(() => setClearedHighlight(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [highlightId]);

  const handleCategoryChange = (cat: string) => {
    if (cat === 'All') {
      router.push('/products');
    } else {
      const slug = categoryToSlug[cat];
      if (slug) {
        router.push(`/products/${slug}`);
      }
    }
  };

  // Filter products based on category and search query
  const filteredProducts = initialProducts.filter((product) => {
    const matchesCategory =
      category === 'All' || product.category === category;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className='w-full flex flex-col gap-12'>
      {/* Search and Filters Section */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-800 pb-8'>
        {/* Category Tabs */}
        <div className='flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              type='button'
              className={`px-5 py-2.5 rounded text-sm font-semibold transition-all cursor-pointer ${
                category === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/10'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className='relative w-full md:w-80'>
          <input
            type='text'
            placeholder='Search products...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full h-11 bg-slate-900/60 border border-slate-800 rounded pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors'
          />
          <Search className='absolute left-3.5 top-3.5 h-4 w-4 text-slate-500' />
        </div>
      </div>

      {/* Grid of Product Cards */}
      {filteredProducts.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredProducts.map((product) => {
            const isCardHighlighted =
              !clearedHighlight && highlightId === product.id;
            return (
              <div
                key={product.id}
                id={product.id}
                className={`flex flex-col overflow-hidden rounded bg-[#121826] border transition-all duration-300 group hover:-translate-y-1 ${
                  isCardHighlighted
                    ? 'border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)] ring-1 ring-amber-500'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Product Image */}
                <div className='relative h-48 overflow-hidden bg-slate-900'>
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                  <div className='absolute top-3 left-3 rounded bg-amber-500/10 border border-amber-500/20 backdrop-blur px-2.5 py-0.5 text-[10px] font-bold text-amber-500 uppercase tracking-wide'>
                    {product.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className='flex flex-col p-6 flex-grow'>
                  <Typography
                    variant='h3'
                    className='mb-2 text-base md:text-lg font-bold group-hover:text-amber-400 transition-colors'
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant='body'
                    className='text-xs md:text-sm text-slate-400 leading-relaxed mb-6 flex-grow'
                  >
                    {product.description}
                  </Typography>

                  {/* Specifications Table */}
                  <div className='border-t border-slate-800/80 pt-4 mb-6'>
                    <Typography
                      variant='small'
                      className='text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2'
                    >
                      Technical Specifications
                    </Typography>
                    <div className='space-y-1.5'>
                      {product.specs.map((spec, specIdx) => (
                        <div
                          key={specIdx}
                          className='flex justify-between text-xs border-b border-slate-800/40 pb-1 last:border-0'
                        >
                          <span className='text-slate-500 font-medium'>
                            {spec.name}
                          </span>
                          <span className='text-slate-300 font-semibold text-right'>
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Request Quote Button */}
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.id)}`}
                    className='inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-amber-500/30 bg-amber-500/5 text-xs font-bold text-amber-500 transition-all hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 active:scale-[0.98] group/btn'
                  >
                    Request Quote
                    <ArrowRight className='h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5' />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className='text-center py-20 border border-dashed border-slate-800 rounded bg-slate-900/10'>
          <Typography variant='h3' className='text-slate-400 mb-2'>
            No products found
          </Typography>
          <Typography variant='body' className='text-slate-600'>
            Try adjusting your search query or filter category.
          </Typography>
        </div>
      )}
    </div>
  );
};

export const ProductList: React.FC<ProductListProps> = (props) => (
  <Suspense
    fallback={
      <div className='text-center py-12 text-slate-400'>
        Loading products list...
      </div>
    }
  >
    <ProductListContent {...props} />
  </Suspense>
);

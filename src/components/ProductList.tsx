'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowRight, Search } from 'lucide-react';

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
      <div className='flex flex-col md:flex-row justify-between items-center gap-6 border-b border-[#E5EAF0] pb-8'>
        {/* Category Tabs */}
        <div className='flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              type='button'
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                category === cat
                  ? 'bg-[#FFA500] text-[#0B1628] border border-[#FFA500] font-bold shadow-xs'
                  : 'bg-white border border-[#DDE3EA] text-[#0B1628] hover:bg-[#FFF4D6] hover:border-[#FFA500]'
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
            className='w-full h-11 bg-white border border-[#DDE3EA] rounded-lg pl-10 pr-4 text-sm text-[#0B1628] placeholder-[#718096] focus:outline-none focus:border-[#FFA500] focus:ring-1 focus:ring-[#FFA500] transition-colors shadow-2xs'
          />
          <Search className='absolute left-3.5 top-3.5 h-4 w-4 text-[#526176]' />
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
                className={`flex flex-col overflow-hidden rounded-2xl bg-white border transition-all duration-300 group hover:-translate-y-1 ${
                  isCardHighlighted
                    ? 'border-[#FFA500] shadow-xl ring-2 ring-[#FFA500]'
                    : 'border-[#DDE3EA] hover:border-[#FFA500] shadow-xs hover:shadow-lg'
                }`}
              >
                {/* Product Image */}
                <div className='relative h-52 overflow-hidden bg-[#F8FAFC] border-b border-[#E5EAF0]'>
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                  <div className='absolute top-3 left-3 rounded-md bg-amber-50/95 border border-amber-200 backdrop-blur px-2.5 py-0.5 text-[10px] font-bold text-amber-700 uppercase tracking-wide'>
                    {product.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className='flex flex-col p-6 flex-grow'>
                  <h3 className='mb-2 text-base md:text-lg font-bold text-[#0B1628] group-hover:text-amber-600 transition-colors'>
                    {product.title}
                  </h3>
                  <p className='text-xs md:text-sm text-[#526176] leading-relaxed mb-6 flex-grow'>
                    {product.description}
                  </p>

                  {/* Specifications Table */}
                  <div className='border-t border-[#E5EAF0] pt-4 mb-6'>
                    <span className='text-[10px] font-bold text-[#526176] uppercase tracking-widest block mb-2'>
                      Technical Specifications
                    </span>
                    <div className='space-y-1.5'>
                      {product.specs.map((spec, specIdx) => (
                        <div
                          key={specIdx}
                          className='flex justify-between text-xs border-b border-[#E5EAF0] pb-1.5 last:border-0'
                        >
                          <span className='text-[#718096] font-medium'>
                            {spec.name}
                          </span>
                          <span className='text-[#0B1628] font-semibold text-right'>
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Request Quote Button */}
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.id)}`}
                    className='inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-amber-400 bg-amber-50 text-xs font-bold text-[#0B1628] transition-all hover:bg-[#FFA500] hover:text-slate-950 hover:border-[#FFA500] active:scale-[0.98] group/btn'
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
        <div className='text-center py-20 border border-dashed border-[#DDE3EA] rounded-2xl bg-[#F8FAFC]'>
          <h3 className='text-base font-bold text-[#0B1628] mb-1'>
            No products found
          </h3>
          <p className='text-sm text-[#718096]'>
            Try adjusting your search query or filter category.
          </p>
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

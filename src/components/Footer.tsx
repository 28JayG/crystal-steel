import React from 'react';
import Link from 'next/link';
import { Hammer, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full bg-[#0B1628] border-t border-[#1E293B] text-[#CBD5E1] py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Top Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
          {/* Column 1: Company Profile */}
          <div className='flex flex-col gap-5'>
            <Link href='/' className='flex items-center gap-3 group'>
              <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-slate-950 font-bold'>
                <Hammer className='h-4.5 w-4.5' />
              </div>
              <div className='flex flex-col'>
                <span className='font-extrabold text-base tracking-wider text-white uppercase leading-none'>
                  Crystal
                </span>
                <span className='text-[9px] font-bold tracking-widest text-amber-500 uppercase'>
                  Metal Industry
                </span>
              </div>
            </Link>
            <p className='text-sm text-[#CBD5E1] leading-relaxed max-w-xs'>
              Recycling aluminum scrap into high-quality secondary aluminum
              products for the steel and industrial sectors, with a focus on
              reliability, sustainability, and long-term value.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-white text-sm font-bold tracking-wider uppercase'>
              Quick Links
            </h4>
            <ul className='flex flex-col gap-3 text-sm'>
              <li>
                <Link
                  href='/'
                  className='hover:text-amber-500 transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/products'
                  className='hover:text-amber-500 transition-colors'
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='hover:text-amber-500 transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='hover:text-amber-500 transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-white text-sm font-bold tracking-wider uppercase'>
              Products
            </h4>
            <ul className='flex flex-col gap-3 text-sm'>
              <li>
                <Link
                  href='/products/deoxidizer'
                  className='hover:text-amber-500 transition-colors'
                >
                  Aluminum Deoxidizer
                </Link>
              </li>
              <li>
                <Link
                  href='/products/shots'
                  className='hover:text-amber-500 transition-colors'
                >
                  Aluminum Shots
                </Link>
              </li>
              <li>
                <Link
                  href='/products/ingots'
                  className='hover:text-amber-500 transition-colors'
                >
                  Aluminum Ingots
                </Link>
              </li>
              <li>
                <Link
                  href='/products/notch-bars'
                  className='hover:text-amber-500 transition-colors'
                >
                  Aluminum Notch Bars
                </Link>
              </li>
              <li>
                <Link
                  href='/products/cubes'
                  className='hover:text-amber-500 transition-colors'
                >
                  Aluminum Cubes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-white text-sm font-bold tracking-wider uppercase'>
              Contact
            </h4>
            <ul className='flex flex-col gap-4 text-sm'>
              <li className='flex items-start gap-3'>
                <MapPin className='h-5 w-5 text-amber-500 shrink-0 mt-0.5' />
                <span className='leading-relaxed'>
                  1/1 Awas Crystal, Road No.1, Contractors Area, Bistupur,
                  Jamshedpur, Jharkhand, India - 831001
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <Phone className='h-4 w-4 text-amber-500 shrink-0' />
                <a
                  href='tel:+917004602074'
                  className='hover:text-amber-500 transition-colors'
                >
                  +91 70046 02074
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-[#1E293B] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]'>
          <p>© {currentYear} Crystal Metal Industry. All rights reserved.</p>
          <p className='text-[#64748B] tracking-wide'>
            Built for strength. Engineered for excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import Link from 'next/link';
import { Hammer, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full bg-[#070A11] border-t border-slate-900 text-slate-400 py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Top Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
          {/* Column 1: Company Profile */}
          <div className='flex flex-col gap-5'>
            <Link href='/' className='flex items-center gap-3'>
              <div className='flex h-9 w-9 items-center justify-center rounded bg-amber-500 text-slate-950 font-bold'>
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
            <p className='text-sm text-slate-400 leading-relaxed max-w-xs'>
              Recycling aluminum scrap into high-quality secondary aluminum
              products for the steel and industrial sectors, with a focus on
              reliability, sustainability, and long-term value.
            </p>
            {/* Social Icons */}
            <div className='flex gap-4'>
              <a
                href='#'
                className='flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-white transition-all duration-200'
                aria-label='Facebook'
              >
                <svg
                  className='h-4 w-4 fill-current'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
              <a
                href='#'
                className='flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-white transition-all duration-200'
                aria-label='LinkedIn'
              >
                <svg
                  className='h-4 w-4 fill-current'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
              <a
                href='#'
                className='flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-white transition-all duration-200'
                aria-label='Twitter / X'
              >
                <svg
                  className='h-4 w-4 fill-current'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
                </svg>
              </a>
            </div>
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
                  Jamshedpur, Jharkhand, India
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
              {/* <li className='flex items-center gap-3'>
                <Mail className='h-4 w-4 text-amber-500 shrink-0' />
                <a
                  href='mailto:info@crystalmetal.com'
                  className='hover:text-amber-500 transition-colors'
                >
                  info@crystalmetal.com
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs'>
          <p>© {currentYear} Crystal Metal Industry. All rights reserved.</p>
          <p className='text-slate-500 tracking-wide'>
            Built for strength. Engineered for excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

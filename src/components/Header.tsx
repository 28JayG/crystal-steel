'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Hammer, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isQualityOpen, setIsQualityOpen] = useState(false);
  const [mobileQualityOpen, setMobileQualityOpen] = useState(true);
  const pathname = usePathname();

  const qualityLinks = [
    {
      name: 'Policies',
      href: '/quality/policies',
      description: 'Quality standards & HSE policies',
    },
    {
      name: 'Test & Equipment',
      href: '/quality/test-equipment',
      description: 'Laboratory testing & instrumentation',
    },
    {
      name: 'Quality Certification',
      href: '/quality/certification',
      description: 'Defect prevention & traceability',
    },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const isQualityActive = pathname.startsWith('/quality');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#DDE3EA] bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-amber-500 text-slate-950 font-bold transition-transform group-hover:scale-105 shadow-xs">
              <Hammer className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-wider text-[#0B1628] uppercase leading-none">
                Crystal
              </span>
              <span className="text-[10px] font-bold tracking-widest text-amber-500 uppercase">
                Metal Industry
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors duration-200 ${
                isActive('/') && pathname === '/'
                  ? 'text-amber-500 font-bold'
                  : 'text-[#526176] hover:text-[#0B1628]'
              }`}
            >
              Home
            </Link>

            <Link
              href="/products"
              className={`text-sm font-semibold transition-colors duration-200 ${
                isActive('/products')
                  ? 'text-amber-500 font-bold'
                  : 'text-[#526176] hover:text-[#0B1628]'
              }`}
            >
              Products
            </Link>

            {/* Quality Dropdown Menu */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setIsQualityOpen(true)}
              onMouseLeave={() => setIsQualityOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsQualityOpen(!isQualityOpen)}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 focus:outline-none cursor-pointer ${
                  isQualityActive
                    ? 'text-amber-500 font-bold'
                    : 'text-[#526176] hover:text-[#0B1628]'
                }`}
                aria-expanded={isQualityOpen}
                aria-haspopup="true"
              >
                <span>Quality</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isQualityOpen ? 'rotate-180 text-amber-500' : 'group-hover:rotate-180'
                  }`}
                />
              </button>

              {/* Dropdown Container with hover bridge padding */}
              <div
                className={`absolute top-full left-0 pt-2 w-64 z-50 transition-all duration-200 ${
                  isQualityOpen
                    ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                    : 'opacity-0 invisible -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto'
                }`}
              >
                <div className="rounded-xl border border-[#DDE3EA] bg-white p-2 shadow-xl">
                  <div className="flex flex-col gap-1">
                    {qualityLinks.map((subItem) => {
                      const isSubActive = pathname === subItem.href;
                      return (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsQualityOpen(false)}
                          className={`flex flex-col rounded-lg px-3.5 py-2.5 transition-colors ${
                            isSubActive
                              ? 'bg-amber-50 text-amber-600 font-bold'
                              : 'hover:bg-slate-50 text-[#0B1628]'
                          }`}
                        >
                          <span className="text-sm font-bold">
                            {subItem.name}
                          </span>
                          <span className="text-xs text-[#718096] font-normal mt-0.5">
                            {subItem.description}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className={`text-sm font-semibold transition-colors duration-200 ${
                isActive('/about')
                  ? 'text-amber-500 font-bold'
                  : 'text-[#526176] hover:text-[#0B1628]'
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-semibold transition-colors duration-200 ${
                isActive('/contact')
                  ? 'text-amber-500 font-bold'
                  : 'text-[#526176] hover:text-[#0B1628]'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Get a Quote Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-amber-500 px-6 text-sm font-bold text-slate-950 transition-all hover:bg-amber-600 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-[#0B1628] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-[#DDE3EA] bg-white shadow-lg">
          <div className="space-y-1 px-4 py-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-3 py-2.5 text-base font-semibold transition-colors ${
                pathname === '/'
                  ? 'bg-amber-50 text-amber-500 font-bold'
                  : 'text-[#526176] hover:bg-slate-50 hover:text-[#0B1628]'
              }`}
            >
              Home
            </Link>

            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-3 py-2.5 text-base font-semibold transition-colors ${
                isActive('/products')
                  ? 'bg-amber-50 text-amber-500 font-bold'
                  : 'text-[#526176] hover:bg-slate-50 hover:text-[#0B1628]'
              }`}
            >
              Products
            </Link>

            {/* Mobile Quality Accordion */}
            <div className="rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileQualityOpen(!mobileQualityOpen)}
                className={`flex w-full items-center justify-between px-3 py-2.5 text-base font-semibold transition-colors ${
                  isQualityActive
                    ? 'text-amber-600 font-bold'
                    : 'text-[#526176] hover:bg-slate-50 hover:text-[#0B1628]'
                }`}
              >
                <span>Quality</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileQualityOpen ? 'rotate-180 text-amber-500' : ''
                  }`}
                />
              </button>

              {mobileQualityOpen && (
                <div className="pl-4 pr-2 pb-2 space-y-1 bg-slate-50/70 rounded-lg my-1">
                  {qualityLinks.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        pathname === subItem.href
                          ? 'bg-amber-100/70 text-amber-700 font-bold'
                          : 'text-[#526176] hover:bg-white hover:text-[#0B1628]'
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-3 py-2.5 text-base font-semibold transition-colors ${
                isActive('/about')
                  ? 'bg-amber-50 text-amber-500 font-bold'
                  : 'text-[#526176] hover:bg-slate-50 hover:text-[#0B1628]'
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-3 py-2.5 text-base font-semibold transition-colors ${
                isActive('/contact')
                  ? 'bg-amber-50 text-amber-500 font-bold'
                  : 'text-[#526176] hover:bg-slate-50 hover:text-[#0B1628]'
              }`}
            >
              Contact Us
            </Link>

            <div className="pt-4 px-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex w-full h-11 items-center justify-center rounded-lg bg-amber-500 text-sm font-bold text-slate-950 transition-all hover:bg-amber-600 shadow-sm"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};


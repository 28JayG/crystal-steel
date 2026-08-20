'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Hammer } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

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
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-amber-500 font-bold'
                    : 'text-[#526176] hover:text-[#0B1628]'
                }`}
              >
                {item.name}
              </Link>
            ))}
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

          {/* Mobile Hamburguer Toggle */}
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
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-base font-semibold transition-colors ${
                  isActive(item.href)
                    ? 'bg-amber-50 text-amber-500 font-bold'
                    : 'text-[#526176] hover:bg-slate-50 hover:text-[#0B1628]'
                }`}
              >
                {item.name}
              </Link>
            ))}
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

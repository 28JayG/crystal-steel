import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';
import { Typography } from '@/components/ui/Typography';
import { ContactForm } from '@/components/ContactForm';
import { FaqSection } from '@/components/FaqSection';

export const metadata = {
  title: 'Contact Us | Crystal Metal Industry',
  description:
    'Request a custom fabrication quote, inquire about steel orders, or contact our metallurgy and CNC machining experts directly.',
};

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-slate-50 py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Breadcrumbs */}
        <nav className='flex items-center gap-2 mb-8 text-xs sm:text-sm font-semibold text-slate-500'>
          <Link href='/' className='hover:text-amber-600 transition-colors'>
            Home
          </Link>
          <ChevronRight className='h-4 w-4 text-slate-400 shrink-0' />
          <span className='text-slate-800'>Contact Us</span>
        </nav>

        {/* Page Header */}
        <div className='max-w-3xl mb-16'>
          <Typography variant='accentLabel' className='mb-2 block'>
            Get in Touch
          </Typography>
          <Typography
            variant='h1'
            className='mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900'
          >
            Contact Us
          </Typography>
          <Typography
            variant='body'
            className='text-base sm:text-lg text-slate-600'
          >
            Let’s build a reliable partnership. Get in touch with Crystal Metal
            Industry for aluminum products and industrial requirements.
          </Typography>
        </div>

        {/* Main Grid: Info + Form */}
        <section className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24'>
          {/* Left Column: Coordinates & Factory card */}
          <div className='lg:col-span-5 flex flex-col gap-8'>
            {/* Contact Details Card */}
            <div className='p-8 rounded-xl bg-white border border-slate-200 shadow-md flex flex-col gap-6'>
              <Typography
                variant='h3'
                className='font-bold border-b border-slate-100 pb-3 text-slate-900'
              >
                Connect With Us
              </Typography>

              <ul className='flex flex-col gap-5 text-sm'>
                <li className='flex items-start gap-4'>
                  <MapPin className='h-5 w-5 text-amber-600 shrink-0 mt-0.5' />
                  <div className='flex flex-col'>
                    <span className='font-bold text-slate-900 mb-0.5'>
                      Physical Address
                    </span>
                    <span className='text-slate-600'>
                      Jamshedpur, Jharkhand, India
                    </span>
                  </div>
                </li>

                <li className='flex items-start gap-4'>
                  <Phone className='h-5 w-5 text-amber-600 shrink-0 mt-0.5' />
                  <div className='flex flex-col'>
                    <span className='font-bold text-slate-900 mb-0.5'>
                      Phone Line
                    </span>
                    <a
                      href='tel:+917004602074'
                      className='text-slate-600 hover:text-amber-600 transition-colors'
                    >
                      +91 70046 02074
                    </a>
                  </div>
                </li>

                <li className='flex items-start gap-4'>
                  <Mail className='h-5 w-5 text-amber-600 shrink-0 mt-0.5' />
                  <div className='flex flex-col'>
                    <span className='font-bold text-slate-900 mb-0.5'>
                      Email Support
                    </span>
                    <a
                      href='mailto:info@crystalmetal.com'
                      className='text-slate-600 hover:text-amber-600 transition-colors'
                    >
                      info@crystalmetal.com
                    </a>
                  </div>
                </li>

                <li className='flex items-start gap-4'>
                  <Clock className='h-5 w-5 text-amber-600 shrink-0 mt-0.5' />
                  <div className='flex flex-col'>
                    <span className='font-bold text-slate-900 mb-0.5'>
                      Business Hours
                    </span>
                    <span className='text-slate-600'>
                      Monday - Friday: 8:00 AM - 5:00 PM EST
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Factory Image mockup */}
            <div className='relative h-60 rounded-xl overflow-hidden border border-slate-200 shadow-md'>
              <Image
                src='/images/hero_bg.png'
                alt='Crystal Metal Industry steel processing facility'
                fill
                sizes='(max-width: 1024px) 100vw, 40vw'
                className='object-cover opacity-80'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent' />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className='lg:col-span-7 h-full'>
            <ContactForm />
          </div>
        </section>

        {/* FAQs Accordion Section */}
        <section className='border-t border-slate-200 pt-20'>
          <FaqSection />
        </section>
      </div>
    </div>
  );
}

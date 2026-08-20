import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { Typography } from '@/components/ui/Typography';
import { ContactForm } from '@/components/ContactForm';
import { FaqSection } from '@/components/FaqSection';

export const metadata = {
  title: 'Contact Us | Crystal Metal Industry',
  description:
    'Request a custom quote, inquire about secondary aluminum orders, or contact our metallurgy and engineering specialists directly.',
};

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-white py-14 md:py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Breadcrumbs */}
        <nav className='flex items-center gap-2 mb-8 text-xs sm:text-sm font-semibold text-[#718096]'>
          <Link href='/' className='hover:text-amber-500 transition-colors'>
            Home
          </Link>
          <ChevronRight className='h-4 w-4 text-[#718096] shrink-0' />
          <span className='text-[#0B1628] font-bold'>Contact Us</span>
        </nav>

        {/* Page Header */}
        <div className='max-w-3xl mb-14'>
          <Typography variant='accentLabel' className='mb-2 block'>
            Get in Touch
          </Typography>
          <h1 className='mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1628] tracking-tight'>
            Contact Us
          </h1>
          <p className='text-base sm:text-lg text-[#526176] leading-relaxed'>
            Let’s build a reliable partnership. Get in touch with Crystal Metal
            Industry for secondary aluminum products and industrial requirements.
          </p>
        </div>

        {/* Main Grid: Info + Form */}
        <section className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24'>
          {/* Left Column: Coordinates & Google Map */}
          <div className='lg:col-span-5 flex flex-col gap-8'>
            {/* Contact Details Card (Light Gray #F5F7FA) */}
            <div className='p-8 rounded-2xl bg-[#F5F7FA] border border-[#DDE3EA] shadow-xs flex flex-col gap-6'>
              <h2 className='text-xl font-bold border-b border-[#DDE3EA] pb-3 text-[#0B1628]'>
                Connect With Us
              </h2>

              <ul className='flex flex-col gap-5 text-sm'>
                <li className='flex items-start gap-4'>
                  <MapPin className='h-5 w-5 text-amber-500 shrink-0 mt-0.5' />
                  <div className='flex flex-col'>
                    <span className='font-bold text-[#0B1628] mb-0.5'>
                      Physical Address
                    </span>
                    <span className='text-[#526176] leading-relaxed'>
                      1/1 Awas Crystal, Road No.1, Contractors Area, Bistupur,
                      Jamshedpur, Jharkhand, India - 831001
                    </span>
                  </div>
                </li>

                <li className='flex items-start gap-4'>
                  <Phone className='h-5 w-5 text-amber-500 shrink-0 mt-0.5' />
                  <div className='flex flex-col'>
                    <span className='font-bold text-[#0B1628] mb-0.5'>
                      Phone Line
                    </span>
                    <a
                      href='tel:+917004602074'
                      className='text-[#526176] hover:text-amber-600 transition-colors font-medium'
                    >
                      +91 70046 02074
                    </a>
                  </div>
                </li>

                <li className='flex items-start gap-4'>
                  <Mail className='h-5 w-5 text-amber-500 shrink-0 mt-0.5' />
                  <div className='flex flex-col'>
                    <span className='font-bold text-[#0B1628] mb-0.5'>
                      Email Support
                    </span>
                    <a
                      href='mailto:info@crystalmetalindustry.com'
                      className='text-[#526176] hover:text-amber-600 transition-colors'
                    >
                      info@crystalmetalindustry.com
                    </a>
                    <a
                      href='mailto:shivam@crystalmetalindustry.com'
                      className='text-[#526176] hover:text-amber-600 transition-colors'
                    >
                      shivam@crystalmetalindustry.com
                    </a>
                  </div>
                </li>

                <li className='flex items-start gap-4'>
                  <Clock className='h-5 w-5 text-amber-500 shrink-0 mt-0.5' />
                  <div className='flex flex-col'>
                    <span className='font-bold text-[#0B1628] mb-0.5'>
                      Business Hours
                    </span>
                    <span className='text-[#526176]'>
                      Monday - Saturday: 9:00 AM - 7:00 PM IST
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Embedded Google Map */}
            <div className='relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-[#DDE3EA] shadow-md bg-[#F5F7FA] flex flex-col group'>
              <iframe
                title='Crystal Metal Industry Location Map'
                src='https://maps.google.com/maps?q=22.7983664,86.1826412&hl=en&z=16&output=embed'
                className='w-full h-full border-0'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
              <div className='p-3.5 bg-white border-t border-[#DDE3EA] flex items-center justify-between'>
                <div className='flex items-center gap-2 text-xs font-semibold text-[#0B1628]'>
                  <MapPin className='h-4 w-4 text-amber-500 shrink-0' />
                  <span>Awas Crystal, Bistupur, Jamshedpur</span>
                </div>
                <a
                  href='https://maps.app.goo.gl/wLsRH5EULqXtfatr8'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors'
                >
                  <span>Open in Maps</span>
                  <ExternalLink className='h-3.5 w-3.5' />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className='lg:col-span-7 h-full'>
            <ContactForm />
          </div>
        </section>

        {/* FAQs Accordion Section */}
        <section className='border-t border-[#DDE3EA] pt-20'>
          <FaqSection />
        </section>
      </div>
    </div>
  );
}

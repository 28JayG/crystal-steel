import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { Typography } from '@/components/ui/Typography';
import { ContactForm } from '@/components/ContactForm';
import { FaqSection } from '@/components/FaqSection';

export const metadata = {
  title: 'Contact Us | Crystal Metal Industry',
  description: 'Request a custom fabrication quote, inquire about steel orders, or contact our metallurgy and CNC machining experts directly.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0B0F19] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-8 text-xs sm:text-sm font-semibold text-slate-500">
          <Link href="/" className="hover:text-amber-500 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-slate-600 shrink-0" />
          <span className="text-slate-300">Contact Us</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <Typography variant="accentLabel" className="mb-2 block">
            Get in Touch
          </Typography>
          <Typography variant="h1" className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Contact Us
          </Typography>
          <Typography variant="body" className="text-base sm:text-lg text-slate-400">
            Let's Build Together. Reach out to our metallurgical specialists, request mill certifications, or receive custom pricing for your industrial specs.
          </Typography>
        </div>

        {/* Main Grid: Info + Form */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left Column: Coordinates & Factory card */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Contact Details Card */}
            <div className="p-8 rounded-lg bg-[#121826] border border-slate-800 flex flex-col gap-6">
              <Typography variant="h3" className="font-bold border-b border-slate-800 pb-3">
                Global Operations Headquarter
              </Typography>
              
              <ul className="flex flex-col gap-5 text-sm">
                <li className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-bold text-white mb-0.5">Physical Address</span>
                    <span className="text-slate-400">123 Industrial Park, Steel District, SD 45678</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-bold text-white mb-0.5">Phone Line</span>
                    <a href="tel:+15551234567" className="text-slate-400 hover:text-amber-500 transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-bold text-white mb-0.5">Email Support</span>
                    <a href="mailto:info@crystalmetal.com" className="text-slate-400 hover:text-amber-500 transition-colors">
                      info@crystalmetal.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-bold text-white mb-0.5">Business Hours</span>
                    <span className="text-slate-400">Monday - Friday: 8:00 AM - 5:00 PM EST</span>
                  </div>
                </li>
              </ul>

              {/* ISO check icon */}
              <div className="flex items-center gap-3 p-4 bg-amber-500/5 border border-amber-500/20 rounded text-amber-500 text-xs mt-2">
                <ShieldCheck className="h-5 w-5 shrink-0" />
                <span className="font-semibold uppercase tracking-wide">Registered ISO 9001:2015 Manufacturer</span>
              </div>
            </div>

            {/* Factory Image mockup */}
            <div className="relative h-60 rounded-lg overflow-hidden border border-slate-800 shadow-md">
              <Image
                src="/images/hero_bg.png"
                alt="Crystal Metal Industry steel processing facility"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block mb-0.5">
                  Factory Location
                </span>
                <span className="text-white font-bold text-sm">
                  Plant Area #3, Casting & Milling Shop
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 h-full">
            <ContactForm />
          </div>

        </section>

        {/* FAQs Accordion Section */}
        <section className="border-t border-slate-900 pt-20">
          <FaqSection />
        </section>

      </div>
    </div>
  );
}

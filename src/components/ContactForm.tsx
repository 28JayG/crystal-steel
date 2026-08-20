'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const ContactFormContent: React.FC = () => {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    interest: 'Deox products',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Auto-populate product interest based on query parameter
  useEffect(() => {
    const productParam = searchParams.get('product');
    if (productParam) {
      const productMap: Record<string, string> = {
        'deox-notch-bars': 'Deox products',
        'deox-cubes': 'Deox products',
        'deox-shots': 'Deox products',
        'aluminum-ingots': 'Ingots',
        custom: 'Others',
      };

      const matchedInterest = productMap[productParam];
      if (matchedInterest) {
        setFormData((prev) => ({ ...prev, interest: matchedInterest }));
      }
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus('error');
      setErrorMessage(
        'Please fill in all required fields (Name, Email, and Message).',
      );
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) {
        throw new Error('Failed to send message try again later.');
      }

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || 'Failed to send message try again later.',
        );
      }

      // Success feedback
      setStatus('success');

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        company: '',
        phone: '',
        interest: 'Deox products',
        message: '',
      });
    } catch (err: unknown) {
      console.error('Contact form submission error:', err);
      const failMsg = 'Failed to send message try again later.';
      setStatus('error');
      setErrorMessage(failMsg);
    }
  };

  if (status === 'success') {
    return (
      <div className='flex flex-col items-center justify-center p-8 bg-[#F5F7FA] border border-emerald-500/30 rounded-2xl text-center h-full shadow-md'>
        <CheckCircle2 className='h-16 w-16 text-emerald-500 mb-6 animate-bounce' />
        <h3 className='text-xl font-extrabold text-[#0B1628] mb-3'>
          Message Sent Successfully!
        </h3>
        <p className='text-sm text-[#526176] max-w-sm mb-6 leading-relaxed'>
          Thank you for reaching out. A Crystal Metal specialist will review
          your specifications and get in touch with you within 24 business
          hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          type='button'
          className='inline-flex h-10 items-center justify-center rounded-lg bg-amber-500 px-6 text-xs font-bold text-slate-950 hover:bg-amber-600 transition-colors shadow-xs cursor-pointer'
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-5 p-8 rounded-2xl bg-white border border-[#DDE3EA] shadow-xl'
    >
      <div className='text-center sm:text-left mb-2'>
        <h3 className='text-2xl font-extrabold text-[#0B1628] mb-1'>
          Request a Quote / Contact Us
        </h3>
        <p className='text-sm text-[#526176]'>
          Fill out the form below and our engineers will reply shortly.
        </p>
      </div>

      {status === 'error' && (
        <div className='flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-lg text-rose-700 text-xs'>
          <AlertCircle className='h-5 w-5 shrink-0' />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {/* Full Name */}
        <div className='flex flex-col gap-1.5'>
          <label
            htmlFor='fullName'
            className='text-xs font-bold text-[#0B1628] uppercase tracking-wider'
          >
            Full Name <span className='text-amber-500'>*</span>
          </label>
          <input
            type='text'
            id='fullName'
            name='fullName'
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder='John Doe'
            className='h-11 bg-[#F8FAFC] border border-[#DDE3EA] rounded-lg px-4 text-sm text-[#0B1628] placeholder-[#718096] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors'
          />
        </div>

        {/* Email Address */}
        <div className='flex flex-col gap-1.5'>
          <label
            htmlFor='email'
            className='text-xs font-bold text-[#0B1628] uppercase tracking-wider'
          >
            Email Address <span className='text-amber-500'>*</span>
          </label>
          <input
            type='email'
            id='email'
            name='email'
            required
            value={formData.email}
            onChange={handleChange}
            placeholder='johndoe@company.com'
            className='h-11 bg-[#F8FAFC] border border-[#DDE3EA] rounded-lg px-4 text-sm text-[#0B1628] placeholder-[#718096] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors'
          />
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {/* Company Name */}
        <div className='flex flex-col gap-1.5'>
          <label
            htmlFor='company'
            className='text-xs font-bold text-[#0B1628] uppercase tracking-wider'
          >
            Company Name
          </label>
          <input
            type='text'
            id='company'
            name='company'
            value={formData.company}
            onChange={handleChange}
            placeholder='Industries Inc.'
            className='h-11 bg-[#F8FAFC] border border-[#DDE3EA] rounded-lg px-4 text-sm text-[#0B1628] placeholder-[#718096] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors'
          />
        </div>

        {/* Phone Number */}
        <div className='flex flex-col gap-1.5'>
          <label
            htmlFor='phone'
            className='text-xs font-bold text-[#0B1628] uppercase tracking-wider'
          >
            Phone Number
          </label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='+91 00000 00000'
            className='h-11 bg-[#F8FAFC] border border-[#DDE3EA] rounded-lg px-4 text-sm text-[#0B1628] placeholder-[#718096] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors'
          />
        </div>
      </div>

      {/* Product Interest Dropdown */}
      <div className='flex flex-col gap-1.5'>
        <label
          htmlFor='interest'
          className='text-xs font-bold text-[#0B1628] uppercase tracking-wider'
        >
          Product / Service of Interest
        </label>
        <select
          id='interest'
          name='interest'
          value={formData.interest}
          onChange={handleChange}
          className='h-11 bg-[#F8FAFC] border border-[#DDE3EA] rounded-lg px-4 text-sm text-[#0B1628] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors appearance-none cursor-pointer'
        >
          <option value='Deox products'>Deox products</option>
          <option value='Ingots'>Ingots</option>
          <option value='Scrap'>Scrap</option>
          <option value='Others'>Others</option>
        </select>
      </div>

      {/* Message Requirements */}
      <div className='flex flex-col gap-1.5'>
        <label
          htmlFor='message'
          className='text-xs font-bold text-[#0B1628] uppercase tracking-wider'
        >
          Project Specifications / Message{' '}
          <span className='text-amber-500'>*</span>
        </label>
        <textarea
          id='message'
          name='message'
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder='Please describe dimensions, quantity, alloys, standards, or other project needs...'
          className='bg-[#F8FAFC] border border-[#DDE3EA] rounded-lg p-4 text-sm text-[#0B1628] placeholder-[#718096] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none'
        />
      </div>

      {/* Submit Button */}
      <button
        type='submit'
        disabled={status === 'submitting'}
        className='inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-amber-500 text-sm font-bold text-slate-950 transition-all hover:bg-amber-600 active:scale-[0.98] disabled:opacity-55 disabled:cursor-not-allowed shadow-md cursor-pointer mt-2'
      >
        {status === 'submitting' ? (
          <span>Sending Request...</span>
        ) : (
          <>
            <span>Send Message</span>
            <Send className='h-4 w-4' />
          </>
        )}
      </button>
    </form>
  );
};

export const ContactForm: React.FC = () => (
  <Suspense
    fallback={
      <div className='p-8 text-center text-[#526176]'>
        Loading contact form...
      </div>
    }
  >
    <ContactFormContent />
  </Suspense>
);

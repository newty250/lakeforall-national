'use client';

import { useState } from 'react';
import type { ChapterApplication } from '@/types';

const initialState: ChapterApplication = {
  lakeName: '',
  location: '',
  contactName: '',
  email: '',
  reason: '',
};

export default function StartChapterForm() {
  const [form, setForm] = useState<ChapterApplication>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    try {
      const res = await fetch('/api/contact/chapter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Submission failed');
      }

      setStatus('success');
      setForm(initialState);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong sending your request. Please email us directly at info@lakeforall.org and we\'ll get back to you shortly.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Application Received!</h3>
        <p className="text-gray-600">
          Thank you for your interest in starting a Lake For All chapter. We&apos;ll be in touch
          within 5 business days to discuss next steps. Check your inbox for a confirmation email.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-sky-blue text-sm font-semibold hover:underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="lakeName" className="block text-sm font-semibold text-navy mb-1.5">
            Lake Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lakeName"
            name="lakeName"
            type="text"
            required
            value={form.lakeName}
            onChange={handleChange}
            placeholder="e.g., Lake Tahoe"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-semibold text-navy mb-1.5">
            Location (City, State) <span className="text-red-500">*</span>
          </label>
          <input
            id="location"
            name="location"
            type="text"
            required
            value={form.location}
            onChange={handleChange}
            placeholder="e.g., South Lake Tahoe, CA"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="contactName" className="block text-sm font-semibold text-navy mb-1.5">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            required
            value={form.contactName}
            onChange={handleChange}
            placeholder="Full name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-semibold text-navy mb-1.5">
          Why do you want to start a chapter? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="reason"
          name="reason"
          rows={4}
          required
          value={form.reason}
          onChange={handleChange}
          placeholder="Tell us about the lake access challenges in your area and what you hope to accomplish..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-navy text-white font-semibold py-3 rounded-lg hover:bg-navy-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Submitting...' : 'Submit Chapter Application'}
      </button>
    </form>
  );
}

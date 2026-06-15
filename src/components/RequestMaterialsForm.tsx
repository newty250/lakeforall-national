'use client';

import { useState } from 'react';
import type { MaterialsRequest } from '@/types';

const initialState: MaterialsRequest = {
  name: '',
  email: '',
  chapterLake: '',
  materials: 'both',
  message: '',
};

export default function RequestMaterialsForm() {
  const [form, setForm] = useState<MaterialsRequest>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    try {
      const res = await fetch('/api/contact/materials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error || 'Submission failed');
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
        <h3 className="text-xl font-bold text-navy mb-2">Request Received!</h3>
        <p className="text-gray-600">
          Thank you. Our team will follow up within 5 business days with your print-ready materials.
          Check your inbox for a confirmation email.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-sky-blue text-sm font-semibold hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1.5">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
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
        <label htmlFor="chapterLake" className="block text-sm font-semibold text-navy mb-1.5">
          Chapter / Lake Name <span className="text-red-500">*</span>
        </label>
        <input
          id="chapterLake"
          name="chapterLake"
          type="text"
          required
          value={form.chapterLake}
          onChange={handleChange}
          placeholder="e.g., Lake Tahoe 4 All or Lake Tahoe"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="materials" className="block text-sm font-semibold text-navy mb-1.5">
          Materials Needed <span className="text-red-500">*</span>
        </label>
        <select
          id="materials"
          name="materials"
          required
          value={form.materials}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent bg-white"
        >
          <option value="both">Both — WAVE Cards + Lake Responsibly Signs</option>
          <option value="wave-cards">WAVE Cards only</option>
          <option value="signs">Lake Responsibly Signs only</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
          Tell us about your lake and situation <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          placeholder="What lake are you working at? What access issues are you facing? How many marinas or launch sites do you need to cover?"
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
        {status === 'submitting' ? 'Submitting...' : 'Request Materials'}
      </button>
    </form>
  );
}

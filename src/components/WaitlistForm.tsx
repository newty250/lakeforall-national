'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error || 'Submission failed');
      }

      setStatus('success');
      setEmail('');
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong sending your request. Please email us directly at info@lakeforall.org and we'll get back to you shortly."
      );
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl p-6 text-center">
        <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-white font-semibold">You&apos;re on the list!</p>
        <p className="text-gray-300 text-sm mt-1">
          We&apos;ll notify you when the shop launches. Check your inbox for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="your@email.com"
          className="flex-1 px-4 py-3 rounded-lg text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="bg-sky-blue text-white font-semibold px-6 py-3 rounded-lg hover:bg-sky-blue-dark transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Joining...' : 'Notify Me'}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-red-300 text-sm mt-3 text-left">{errorMsg}</p>
      )}
    </div>
  );
}

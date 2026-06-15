'use client';

export default function WaitlistForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col sm:flex-row gap-3"
    >
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 px-4 py-3 rounded-lg text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue"
      />
      <button
        type="submit"
        className="bg-sky-blue text-white font-semibold px-6 py-3 rounded-lg hover:bg-sky-blue-dark transition-colors whitespace-nowrap"
      >
        Notify Me
      </button>
    </form>
  );
}

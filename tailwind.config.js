/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B3A6B',
          light: '#254d8f',
          dark: '#122849',
        },
        'sky-blue': {
          DEFAULT: '#4A9FD4',
          light: '#6bb5e0',
          dark: '#3385b5',
        },
      },
    },
  },
  plugins: [],
};

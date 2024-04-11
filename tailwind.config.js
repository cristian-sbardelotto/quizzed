/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#161A24',
      },
      fontFamily: {
        sora: 'Sora, sans-serif',
      },
    },
  },
  plugins: [],
};

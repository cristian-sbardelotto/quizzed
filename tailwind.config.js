/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#161A24',
      },
      boxShadow: {
        card: '3px 3px 0 #4b5563',
      },
      fontFamily: {
        sora: 'Sora, sans-serif',
      },
    },
  },
  plugins: [],
};

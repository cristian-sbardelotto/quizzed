/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': {
            transform: 'translateY(-25px)',
            opacity: '0',
            pointerEvents: 'none',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
            pointerEvents: 'auto',
          },
        },
      },
      animation: {
        appear: 'appear 0.7s',
      },
      colors: {
        background: '#161A24',
      },
      boxShadow: {
        option: '3px 3px 0 #4b5563',
        'correct-option': '3px 3px 0 #10b981',
        'wrong-option': '3px 3px 0 #dc2626',
      },
      fontFamily: {
        sora: 'Sora, sans-serif',
      },
    },
  },
  plugins: [],
};

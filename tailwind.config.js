/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
      },
      keyframes: {
        shiftUp: {
          '0%': {
            maxHeight: 0,
            opacity: 0,
            transform: 'translateY(-200%) rotate(-180deg)',
          },
          '75%': {
            maxHeight: '100%',
            opacity: 1,
            transform: 'translateY(20%) rotate(-180deg)',
          },
          '100%': {
            transform: 'translateY(0) rotate(-180deg)',
          },
        },
      },
    },
  },
  plugins: [],
};

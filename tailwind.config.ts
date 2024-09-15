/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      keyframes: {
        around: {
          '0%, 100%': { 'clip-path': 'inset(0 0 98% 0)' },
          '25%': { 'clip-path': 'inset(0 98% 0 0)' },
          '50%': { 'clip-path': 'inset(98% 0 0 0)' },
          '75%': { 'clip-path': 'inset(0 0 0 98%)' },
        },
      },
      animation: {
        around: 'around 3s infinite linear',
        'around-delay': 'around 3s infinite -1.5s linear',
      },
      backgroundImage: {
        marble: 'url("/marble.jpg")',
        parchment: 'url("/parchment.jpg")',
        border: 'url(/border.png)',
      },
      fontFamily: {
        cursive: ['ChenYuluoyan', 'DancingScript', 'Yozai'],
        icon: 'Material Icons',
      },
      transitionDuration: {
        900: '900ms',
        2000: '2000ms',
        3000: '3000ms',
      },
    },
  },
  plugins: [],
};

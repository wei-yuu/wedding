/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#FD59CF',
        },
        blue: {
          DEFAULT: '#029cfb',
        },
      },
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
        flower: 'url(/images/hua3.jpg)',
        hydrangeas:
          'linear-gradient(rgba(2, 156, 251, 0.572), rgba(253, 89, 207, 0.645))',
        'hydrangeas-t':
          'linear-gradient(to top, rgba(2, 156, 251, 0.572) 20%, rgba(253, 89, 207, 0.645) 60%)',
      },
      fontFamily: {
        cursive: ['ChenYuluoyan', 'DancingScript', 'Yozai'],
        icon: 'Material Icons',
        yozai: 'Yozai',
      },
      transitionDuration: {
        900: '900ms',
        2000: '2000ms',
        3000: '3000ms',
      },
      boxShadow: {
        button:
          'inset 2px 2px 2px rgba(255, 255, 255, 0.5), 7px 7px 20px rgba(0, 0, 0, 0.1), 4px 4px 5px rgba(0, 0, 0, 0.1)',
      },
      dropShadow: {
        button: [
          '-7px -7px 20px rgba(255, 255, 255, 0.9)',
          '-4px -4px 2px rgba(255, 255, 255, 0.9)',
          '7px 7px 20px rgba(0, 0, 0, 0.2)',
          '4px 4px 2px rgba(0, 0, 0, 0.3)',
        ],
      },
    },
  },
  plugins: [],
};

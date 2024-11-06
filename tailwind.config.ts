/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#029CFB',
          50: '#E6F5FF',
          100: '#CCEBFF',
          200: '#9AD8FE',
          300: '#67C4FE',
          400: '#35B0FD',
          500: '#029CFB',
          600: '#027DCA',
          700: '#015E98',
          800: '#013F65',
          900: '#001F33',
        },
        pink: {
          DEFAULT: '#FD59CF',
          50: '#FFF0FB',
          100: '#FFDCF5',
          200: '#FEBDEC',
          300: '#FE9AE2',
          400: '#FD7CD9',
          500: '#FD59CF',
          600: '#FC17BB',
          700: '#CA0291',
          800: '#880262',
          900: '#42012F',
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

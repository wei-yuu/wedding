/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['DancingScript', 'ChenYuluoyan', 'Yozai'],
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

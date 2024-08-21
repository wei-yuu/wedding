/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,vue}'],
  theme: {
    fontFamily: {
      handwriting: [],
    },
    extend: {
      backgroundImage: {
        marble: 'url("/marble.jpg")',
        parchment: 'url("/parchment.jpg")',
        border: 'url(/border.png)',
      },
      fontFamily: {
        cursive: ['DancingScript', 'ChenYuluoyan', 'Yozai'],
      },
    },
  },
  plugins: [],
};

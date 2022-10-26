/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // 自訂顏色
      colors: {
        primary: '#E6553B',
        secondary: '#808080',
        backound: '#F0F0F0',
      },
    },
    container: {
      center: true,
      screens: {
        '2xl': '1300px',
      },
      padding: {
        DEFAULT: '12px',
      },
    },
  },
  plugins: [],
}

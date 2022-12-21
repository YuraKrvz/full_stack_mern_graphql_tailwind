/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm2: { max: '639px' },
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1080px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}

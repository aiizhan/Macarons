/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        proxima: ['Proxima Nova', 'sans-serif'],
      },
      screens: {
        s: '320px',
      }
    },

  },
  plugins: [],
}
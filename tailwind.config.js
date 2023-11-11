/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#fff',
      main: '#1F2937',
      sub: '#BB8506',
      black: '#000',
      third: '#E8E8E8',
    },
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        sub: "'Cinzel', serif",
      }
    },
  },
  plugins: [require("daisyui")],
}
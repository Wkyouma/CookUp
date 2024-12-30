/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'laranja': {
          'claro': '#FFB168',
          'escuro': '#FF8C38',
        },
        'noturno': {
          'bg': '#1A1A1A',
          'card': '#2D2D2D',
        }
      }
    },
  },
  plugins: [],
}

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
        },
        // Adicionando outras cores se necessário
        'slate': {
          100: '#f1f5f9',
          300: '#cbd5e1',
        },
        'orange': {
          700: '#9c4b00',
        },
        'gray': {
          800: '#2d3748',
          100: '#f7fafc',
        },
        'white': '#ffffff',
      }
    },
  },
  plugins: [],
}

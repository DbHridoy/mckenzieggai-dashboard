var require = createRequire(import.meta.url);
var module = { exports: {} };

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F378B',
          light: '#EADDFF',
          dark: '#21005D',
        },
        secondary: {
          DEFAULT: '#625B71',
          light: '#E8DEF8',
        },
        surface: {
          DEFAULT: '#FEF7FF',
          container: '#F3EDF7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

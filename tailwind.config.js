/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-bg": "#FFFFFF",
        "light-gray": "#D3D6DA",
        "light-eval-absent": "#787C7E",
        "light-eval-present": "#C9B458",
        "light-eval-correct": "#6AAA64",
        "dark-bg": "#121213",
        "dark-gray": "#3A3A3C",
        "dark-eval-absent": "#3A3A3C",
        "dark-eval-present": "#B59F3B",
        "dark-eval-correct": "#538D4E",
      },
      animation: {
        'drift-slow': 'drift 3s linear infinite',
        'drift-reverse': 'drift-reverse 4s linear infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'rotate(-3deg) translate(3px, 4px)' },
          '50%': { transform: 'rotate(3deg) translate(-4px, -3px)' },
        },
        'drift-reverse': {
          '0%, 100%': { transform: 'rotate(3deg) translate(-3px, 4px)' },
          '50%': { transform: 'rotate(-3deg) translate(4px, -3px)' },
        }
      }
    },
  },
  plugins: [],
};

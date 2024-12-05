/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "selector",
  theme: {
    extend: {
      height: {
        '500px': '500px'
      },
      fontFamily: {
        tradewinds: ['Trade Winds', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  darkMode: ['selector', '[data-theme="dark"]']
}


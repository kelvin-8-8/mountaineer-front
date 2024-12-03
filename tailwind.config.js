const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  darkMode: "selector",
  theme: {
    extend: {
      height: {
        '500px': '500px'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}


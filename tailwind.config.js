/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "dark_primary": "#2A254B",
      "primary" : "#4E4D93",
      "light_grey" : "#F9F9F9",
      "border_grey" : "#EBE8F4",
      "white" : "#FFFFFF",
      "border_dark" : "#CAC6DA"
    },
    extend: {},
  },
  plugins: [],
}


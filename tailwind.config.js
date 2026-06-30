/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   caudex: ["Caudex", "serif"],
      //   caveat: ["Caveat", "cursive"],
      //   poppins: ["Poppins", "sans-serif"],
      //   jost: ["Jost", "sans-serif"],
      //   dangrek: ["Dangrek", "cursive"],
      //   outfit: ["Outfit", "sans-serif"], // Added Outfit
      // },
    },
  },
  plugins: [],
};
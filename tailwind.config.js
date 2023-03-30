/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          1: "#4b6584",
          2: "#778ca3",
          3: "#a5b1c2",
          4: "#d1d8e0",
        },
        purple:{
          1 :"#8854d0",
          2 :"#a55eea",
        },
        blue: {
          1: "#3867d6",
          2: "#4b7bec",
          3: "#2d98da",
          4: "#45aaf2",
        },
        turquoise: {
          1: "#0fb9b1",
          2: "#2bcbba",

        },
        green: {
          1: "#20bf6b",
          2: "#26de81",
        },
        yellow: {
          1: "#f7b731",
          2: "#fed330",
        },
        orange: {
          1: "#fa8231",
          2: "#fa8231",
        },
        red: {
          1: "#eb3b5a",
          2: "#eb3b5a",
        },
      }
    },
  },
  plugins: [],
}
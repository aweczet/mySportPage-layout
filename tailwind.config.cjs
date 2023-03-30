/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontSize: {
        12: '1.2rem',
        20: '2.0rem',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '10px',
      screens: {
        sm: '600px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      }
    },
    extend: {},
  },
  plugins: [],
}
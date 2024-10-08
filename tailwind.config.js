/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './assets/**/*.{css,scss}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#257180',   // Azul
        secondary: '#f2e5bf', // Beige claro
        accent: '#fd8b51',    // Naranja
        danger: '#cb6040',    // Rojo
      },
    },
  },
  plugins: [],
}

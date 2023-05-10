/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-page': "url('./assets/landingimage.jpg')",
        'landing': "url('./assets/landing.png')"
      }
    },
  // fontFamily: {
  //   sans: ['Satoshi', 'sans-serif'],
  //   serif: ['Satoshi', 'serif'],
  //   mono: ['Satoshi', 'monospace'],
  // }
  },
  plugins: [],
}

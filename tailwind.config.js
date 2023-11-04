/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#E65540',
    },
    textColor:{
      'custom-text-color': '#E65540',

    }
  },
},
  plugins: [],
}
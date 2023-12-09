/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#E65540',
        'second-color':'#F2F2F2'
      },
      textColor: {
        'custom-text-color': '#E65540',

        'second-text-color':'#999999'
      },
      borderColor: {
        'custom-border-color': '#DBDBDB', 
      },
    },
  },
  plugins: [],

  
};
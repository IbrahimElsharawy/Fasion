/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#E65540',
        'second-color':'#F2F2F2',
        'third-color':'#9fa8b7'

      },
      textColor: {
        'custom-text-color': '#E65540',

        'second-text-color':'#999999',
        'third-text-color':'#9fa8b7'
      },
      borderColor: {
        'custom-border-color': '#DBDBDB', 
        'second-border-color':'#E65540',
        'third-border-color':'#9fa8b7'


      },
    },
  },
  plugins: [],

  
};
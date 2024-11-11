/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        screens: {
          'iphone-5-se': '320px',
          'iphone-6-8': '375px',   
          'iphone-x': '375px',     
          'iphone-xr': '414px',    
          'iphone-12-mini': '360px',
          'iphone-12': '390px',   
          'iphone-13': '390px',    
          'iphone-14': '430px',    
          'iphone-15': '430px',   
          'iphone-15-pro': '430px', 
          'iphone-15-pro-max': '430px',
        },     
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

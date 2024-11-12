/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'iphoneSE1': { 'raw': '(max-width: 320px)' },
        'iphone678': { 'raw': '(max-width: 375px)' },
        'iphoneX': { 'raw': '(max-width: 375px) and (min-height: 812px)' },
        'iphoneXR': { 'raw': '(max-width: 414px)' },
        'iphone12mini': { 'raw': '(max-width: 375px) and (min-height: 812px)' },
        'iphone12': { 'raw': '(max-width: 390px)' },
        'iphone12promax': { 'raw': '(max-width: 428px)' },
        'iphone14pro': { 'raw': '(max-width: 393px)' },
        'iphone14promax': { 'raw': '(max-width: 430px)' },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

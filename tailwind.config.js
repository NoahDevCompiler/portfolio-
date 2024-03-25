/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        descriptionText: '#CCCCCC', 
        customGreen: {
          DEFAULT: '#00FF00', 
          dark: '#009900',   
        }
      }
    },
  },
  plugins: [],
}


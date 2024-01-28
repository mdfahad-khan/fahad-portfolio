/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        'marcelle-script': ['Marcelle Script', 'cursive'],
        
      },
      fontFamily:{
        'sangharia': ['Shangharia', 'cursive'],
      },
      screens: {
        'mp': {'min': '400px', 'max': '640px'}, // Custom breakpoint range
      },
    },
  },
  plugins: [],
}


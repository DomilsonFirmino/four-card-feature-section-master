/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        red: 'hsl(0, 78%, 62%)',
        cyan: 'hsl(180, 62%, 55%)',
        orange: 'hsl(34, 97%, 64%)',
        blue: 'hsl(212, 86%, 64%)',
        darkBlue: 'hsl(234, 12%, 34%)',
        grayishBlue: 'hsl(229, 6%, 66%)',
        lightGray: 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
}


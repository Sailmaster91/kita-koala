/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand','ui-sans-serif','system-ui','sans-serif'],
        secondary: ['Fredoka','ui-sans-serif','system-ui','sans-serif']
      },
      colors: {
        koala: {
          blue: '#7498bdff',   // ola / bloques
		  blue_gray: '#384153',
          green: '#CFE9D9',  // tarjeta verde
          yellow: '#F3E8B5', // tarjeta amarilla
          salmon: '#E9B6A5', // tarjeta salmón
          slate: '#4A5560',  // footer gris
          cream: '#F6F0E7'   // hero crema
        }
      },
      borderRadius: { '2xl': '1.25rem', '3xl': '1.75rem' },
      boxShadow: { soft: '0 6px 18px rgba(16,24,40,0.06)' }
    }
  },
  plugins: []
}
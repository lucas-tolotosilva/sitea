/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Raleway'],
        },
        colors: {
            'whiteT': 'rgba(242,242,242,0.10)',
            'whitee': '#F2F2F2',
            'yelowT': 'rgba(252,211,7,0.50)',
            'grayT': 'rgba(107,104,91, 0.5)',
            'gray2': '#5B5B5B',
            'blackk': '#2A2720'
        }
    },
},
screens: {
    'sm': '320px',
    // => @media (min-width: 640px) { ... }

    'md': '760px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }
  },
  plugins: [],
}


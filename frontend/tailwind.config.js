// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '500px',
      'md': [
        {'min': '668px', 'max': '767px'},
        {'min': '868px'}
      ],
      'lg': '1100px',
      'xl': '1400px',
    },
    extend: {
      gridTemplateColumns: {
        'custom': '1fr 1.5fr 1fr 1fr 1fr 0.5fr',
      },
      fontFamily: {
        sans: ['Outfit'], 
      },
      fontSize: {
        'responsive': ['4.5vw', '22px'], 
      },
      keyframes:{
        fadeInimg:{
          '0':{opacity:'0'},
          '100':{opacity:'100'}
        }
      },
      animation: {
        fadeIn: 'fadeIn 1.25s ease-in-out', 
      },
    
    },
  },
  plugins: [],
};

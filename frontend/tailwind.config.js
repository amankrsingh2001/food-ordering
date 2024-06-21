// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit'], // Custom font family definition
      },
      fontSize: {
        'responsive': ['4.5vw', '22px'], // Custom responsive font sizes
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' }, // Custom keyframes animation
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out', // Add this line
      },
    },
  },
  plugins: [],
};

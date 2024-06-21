/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit"],
      },
      backgroundImage: {
        "hero-pattern": "url('public/header_img.png')",
      },
    },
  },
  plugins: [],
};

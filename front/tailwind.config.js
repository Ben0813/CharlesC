/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          700: "#4a4a4a",
          800: "#393939",
          900: "#2a2a2a",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Playfair Display",
          fontWeight: "400",
          fontStyle: "normal",
          src: `
            url('/src/assets/fonts/PlayfairDisplay-Regular.ttf') format('truetype')
          `,
        },
      });
    },
  ],
};

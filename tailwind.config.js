/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FBFAF5",
          100: "#F4F1E8",
        },
        ink: {
          50: "#F7F7F4",
          100: "#E8E6DC",
          200: "#D7D3C5",
          400: "#8A8678",
          500: "#696558",
          600: "#4F4B40",
          700: "#363229",
          900: "#171812",
        },
        forest: {
          50: "#EEF5ED",
          200: "#C9DCC8",
          300: "#9FBE9D",
          400: "#6F966F",
          500: "#2F4F33",
          600: "#243E28",
        },
        gold: {
          400: "#D9B86F",
          500: "#B99045",
          600: "#8F6F32",
        },
      },
      letterSpacing: {
        tightish: "-0.03em",
        tightest: "-0.06em",
      },
    },
  },
  plugins: [],
};
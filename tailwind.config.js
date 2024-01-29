const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1100px",
      },
    },
    extend: {
      colors: {
        primary: "#07913C",
        "primary-light-50": "#fceeed",
        "primary-light-100": "#f7cbc9",
        "primary-deep": "#732926",
        color1: "#0a0d46",
        secondary: colors.coolGray["700"],
        ascent: "#E25D00",
        "ascent-light": "#e58546",
      },
      fontFamily: {
        brand: ["nunito", "helvetica", "sans-serif"],
      },
      backgroundImage: {
        book: `url('/assets/images/bg_img.jpg')`,
        senateBuilding: `url('/assets/images/senate_building.jpg')`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

const { colors } = require("@mui/material");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
      },
      padding: {
        DEFAULT: "2rem",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const globalPadding = {
        ".global-padding": {
          padding: "2rem",
        },

        ".global-padding-y": {
          "padding-left": "2rem",
          "padding-right": "2rem",
        },

        ".global-padding-t": {
          "padding-top": "2rem",
        },

        ".global-padding-b": {
          "padding-bottom": "2rem",
        },
      };
      addUtilities(globalPadding, ["responsive"]); // Enables breakpoints
    },
  ],
};

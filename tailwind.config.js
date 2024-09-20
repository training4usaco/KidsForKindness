/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#FFFFFF",
          2: "#DCC0A6",
          3: "#1E008f",
          4: "#000000",
          5: "#AAAAAA",
        }
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        text: "var(--font-family)",
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 0% 100%, rgba(255, 233, 213, 1) 0%, rgba(255, 233, 213, 1) 0%, rgba(220, 192, 166, 1) 50%, rgba(220, 192, 166, 1) 100%)',
        'black-gradient': 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(17, 17, 17, 0) 100%)',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".h1": {
          "@apply font-text text-center font-normal text-[44.8px]":
            {},
        },

        ".h2": {
          "@apply font-text text-center font-normal text-[36px]":
            {},
        },

        ".h3": {
          "@apply font-text text-center font-normal text-[28px]":
            {},
        },

        ".h4": {
          "@apply font-text text-center font-normal text-[16px]":
            {},
        },

        ".h5": {
          "@apply font-text text-center font-normal text-[64px]":
            {},
        },

        ".h6": {
          "@apply font-text text-center font-normal text-[24px]":
            {},
        },

        ".body-1": {
          "@apply font-text text-center font-light text-[16px]":
            {},
        },

        ".body-2": {
          "@apply font-text text-left font-light text-[16px]":
            {},
        },

        ".title-1": {
          "@apply font-text font-medium text-[32px] capitalize":
            {},
        }
      });
    }),
  ],
}
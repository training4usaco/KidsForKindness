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
        }
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        text: "var(--font-family)",
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 0% 100%, rgba(255, 233, 213, 1) 0%, rgba(255, 233, 213, 1) 0%, rgba(220, 192, 166, 1) 50%, rgba(220, 192, 166, 1) 100%)',
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

        ".body-1": {
          "@apply font-text text-center font-light text-[16px]":
            {},
        },

        ".title-1": {
          "@apply font-text text-center font-medium text-[32px] capitalize":
            {},
        }
      });
    }),
  ],
}
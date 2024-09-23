/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "3xl": "32px",
        "4xl": "38px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: {
          primary: "#272727",
          secondary: "#686868",
          tertiary: "#b7b7b7",
          grey: "#C4C4C4",
          white: "#FEFEFE",
          grey2: "#E4E4E4",
        },
        primary: {
          50: "#F4F4FF",
          100: "#E9E8FE",
          200: "#D2D1FD",
          300: "#BCBBFD",
          400: "#A5A4FC",
          500: "#8F8DFB",
          600: "#7371DB",
          700: "#5856BC",
          800: "#3C3A9C",
          900: "#1A3108",
        },
        secondary: {
          50: "#FBFBFB",
          100: "#f8f8f8",
          200: "#f4f4f4",
          300: "#f0f0f0",
          400: "#ededed",
          500: "#e9e9e9",
          600: "#e5e5e5",
          700: "#e1e1e1",
          800: "#dedede",
          900: "#dadada",
        },
        tertiary: {
          50: "#e8e8e8",
          100: "#d0d0d0",
          200: "#b9b9b9",
          300: "#a1a1a1",
          400: "#8a8a8a",
          500: "#737373",
          600: "#5b5b5b",
          700: "#444444",
          800: "#2c2c2c",
          900: "#151515",
        },
        other : {
          "alto" : "#D9D9D9",
          "woodsmoke" : "#131313",
          "royalBlue" : "#4A5BF2",
          "lavenderMagenta" : "#FF7DEA",
          "cyan" : "#58FEFE",
          "screaminGreen" : "#75FC5F",
          "lemon" :"#FFE923",
          "carnation" : "#FF6161"
        }
      },
      fontFamily: {
        overusedMedium: ["var(--font-overused-medium)"],
        dmsans: ["var(--font-dmsans)"],
      },
      backgroundImage: {
        backgroundGradient:
          "linear-gradient(to right, #f8f8ff 4%, #fcfaf7 42%, #fff4f4 95%)",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".heading-1": {
          "@apply text-3xl lg:text-5xl font-medium leading-tight font-overusedMedium text-text-primary":
            {},
        },
        ".heading-2": {
          "@apply text-2xl lg:text-4xl font-medium leading-tight font-overusedMedium text-text-primary":
            {},
        },
        ".heading-3": {
          "@apply text-xl lg:text-3xl font-medium leading-tight font-overusedMedium text-text-primary":
            {},
        },
        ".heading-4": {
          "@apply text-2xl font-medium leading-tight font-overusedMedium text-text-primary":
            {},
        },
        ".heading-5": {
          "@apply text-xl font-medium leading-tight font-overusedMedium text-text-primary":
            {},
        },
        ".heading-6": {
          "@apply text-lg font-medium leading-tight font-overusedMedium text-text-primary":
            {},
        },
        ".nav": {
          "@apply text-base font-medium leading-tight font-overusedMedium text-text-primary":
            {},
        },
        ".button-1": {
          "@apply text-xl font-medium leading-none font-overusedMedium text-text-primary":
            {},
        },
        ".button-2": {
          "@apply text-lg font-medium leading-none font-overusedMedium text-text-primary":
            {},
        },
        ".button-3": {
          "@apply text-base font-medium leading-none font-overusedMedium text-text-primary":
            {},
        },
        ".button-4": {
          "@apply text-sm font-medium leading-none font-overusedMedium text-text-primary":
            {},
        },
        ".button-5": {
          "@apply text-xs font-medium leading-none font-overusedMedium text-text-primary":
            {},
        },
        ".body-1": {
          "@apply text-base font-normal leading-normal font-dmsans text-text-secondary":
            {},
        },
        ".body-2": {
          "@apply text-sm font-normal leading-[1.3] font-dmsans text-text-secondary":
            {},
        },
        ".body-3": {
          "@apply text-[10px] font-normal leading-[1.4] font-dmsans text-text-secondary":
            {},
        },
      });
    },
  ],
};

import plugin from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sandal: {
          DEFAULT: "#b59570",
          50: "#f7f4ef",
          100: "#eae4d7",
          200: "#d7c9b1",
          300: "#c0a784",
          400: "#b59570",
          500: "#9e7954",
          600: "#886246",
          700: "#6e4b3a",
          800: "#5d4136",
          900: "#513932",
          950: "#2e1e1a",
        },
        alto: {
          DEFAULT: "#dfdfdf",
          50: "#f7f7f7",
          100: "#ededed",
          200: "#dfdfdf",
          300: "#c8c8c8",
          400: "#adadad",
          500: "#999999",
          600: "#888888",
          700: "#7b7b7b",
          800: "#676767",
          900: "#545454",
          950: "#363636",
        },
        blue: {
          DEFAULT: "#777da7",
          50: "#f4f6f9",
          100: "#ebeff4",
          200: "#dbe1ea",
          300: "#c4cddd",
          400: "#acb5cd",
          500: "#969ebe",
          600: "#777da7",
          700: "#6c7196",
          800: "#595d7a",
          900: "#4c4f63",
          950: "#2c2e3a",
        },
        asphalt: {
          DEFAULT: "#191516",
          50: "#f8f7f8",
          100: "#f1edee",
          200: "#dfd8db",
          300: "#c3b6ba",
          400: "#a28e95",
          500: "#877078",
          600: "#6f5a61",
          700: "#5b494e",
          800: "#4d3f43",
          900: "#42383b",
          950: "#191516",
        },
        jet: {
          DEFAULT: "#2f2f2f",
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#2f2f2f",
        },
        green: {
          DEFAULT: "#00b295",
          50: "#effefa",
          100: "#c7fff0",
          200: "#90ffe1",
          300: "#51f7d1",
          400: "#1de4bc",
          500: "#04c8a3",
          600: "#00b295",
          700: "#05806d",
          800: "#0a6558",
          900: "#0d544a",
          950: "#00332e",
        },
        red: {
          DEFAULT: "#cc2936",
          50: "#fef2f3",
          100: "#fde3e5",
          200: "#fcccd0",
          300: "#f9a8ae",
          400: "#f37680",
          500: "#e84b58",
          600: "#cc2936",
          700: "#b3222e",
          800: "#942029",
          900: "#7b2128",
          950: "#430c10",
        },
        lime: {
          DEFAULT: "#ceff1a",
          50: "#fcffe4",
          100: "#f8ffc4",
          200: "#efff90",
          300: "#e0ff50",
          400: "#ceff1a",
          500: "#afe600",
          600: "#87b800",
          700: "#668b00",
          800: "#516d07",
          900: "#445c0b",
          950: "#233400",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "Roboto",
          "Helvetica Neue",
          "Arial Nova",
          "Nimbus Sans",
          "Arial",
          ...defaultTheme.fontFamily.sans,
        ],
        heading: [
          "Fira Sans",
          "Seravek",
          "Gill Sans Nova",
          "Ubuntu",
          "Calibri",
          "DejaVu Sans",
          "source-sans-pro",
          ...defaultTheme.fontFamily.sans,
        ],
        mono: [
          "FFXIV Lodestone",
          "FFXIV_Lodestone_SSF",
          "Fira Code",
          ...defaultTheme.fontFamily.mono,
        ],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("all-child", "& *");
    }),
  ],
};

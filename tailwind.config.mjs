/**
 * @format
 * @type {import('tailwindcss').Config}
 */

const { Oswald } = require('next/font/google');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0px 20px 0px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        monument: ["Monument Extended"],
        neutralFace: ["Neutral Face"],
        segoe: ["Segoe UI"],
        Oswald:["Oswald"],
        montserrat:["Montserrat"],
      },
    },
  },
  plugins: [],
};
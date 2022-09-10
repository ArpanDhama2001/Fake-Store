/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto"],
        secondary: ["Poppins"],
      },
      colors: {
        primary: "#112D4E",
        secondary: "#F9F7F7",
        accent: "#3F72AF",
        accentHover: "#DBE2EF",
        gradient1: "#ea580c",
        gradient2: "#ca8a04",
      },
      animation: {
        pulse: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        pulse: {
          "0%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};

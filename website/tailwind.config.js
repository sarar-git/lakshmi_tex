/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        manrope: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        // Superly-inspired palette (sample request page)
        forest: "#245D32",
        deep: "#164A2A",
        lime: {
          DEFAULT: "#D2EF50",
          dark: "#BEE23F",
        },
        navy: "#242044",
        light: "#D6D5D9",
        // Editorial poster palette (products catalogue)
        steel: "#8999A8",
        mist: "#DCE4EB",
        ink: "#172333",
        graphite: "#687989",
        haze: "#E4EAEF",
        // Original site tokens
        primary: {
          DEFAULT: "#0579eb",
          dark: "#0259b8",
        },
        secondary: "#1a1a1a",
        text: {
          DEFAULT: "#333333",
          light: "#666666",
        },
        "bg-light": "#f9f9f9",
        "bg-dark": "#1a1a1a",
        border: "#dddddd",
      },
    },
  },
  plugins: [],
};

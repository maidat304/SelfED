/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        balloon: "url('./src/assets/welcome-bg.webp')",
        "custom-gradient":
          "linear-gradient(193deg, #6C8BC5 2.78%, #581C83 99.77%)",
        "ornament-color":
          "linear-gradient(225deg, #D69BFD 14.43%, #9672FF 83.78%)",
      },
    },
  },
  plugins: [],
};

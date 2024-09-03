/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        balloon: "url('./src/assets/welcome-bg.webp')",
      },
    },
  },
  plugins: [],
};

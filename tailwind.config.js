/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-custom": "#5E5E5E",
        "red-custom": "#D00B2C",
        "gray-D9D9D9": "#D9D9D9",
        "gray-4B4D4F": "#4B4D4F",
      },
      fontSize: {
        "text-54px": "54px",
      },
    },
  },
  plugins: [],
};

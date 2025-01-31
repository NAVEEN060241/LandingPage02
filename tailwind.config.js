/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        customHeight: "85vh",
      },
      fontWeight: {
        customBold: "900",
      },
      lineHeight: {
        customLh: "4rem",
      },
      colors: {
        customOrange: "#f95427",
      },
    },
  },
  plugins: [],
};

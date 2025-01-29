/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        slideLeft: "slideLeft 1s ease-in-out forwards",
        fadeIn: "fadeIn 1s ease-in-out forwards",
      },
    },
  },
  plugins: [require("daisyui")],
};

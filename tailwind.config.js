/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        moveLine1: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100px)' },
        }

      },
      animation: {
        moveLine1: "moveLine1 4s inifinite"
      },
      colors: {
        "primary": "#2B2EFF",
        "primary-dark": "#000121",
        "primaryCardColor": "#00011E",
        "secondary": "#C407F3"
      }
    },
  },
  plugins: [],
}


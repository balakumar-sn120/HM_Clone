/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        "2/4": "638px",
      },
    },
    fontFamily: {
      sans: ["HMSansHebrew-Regular"],
    },
  },
  plugins: [],
};

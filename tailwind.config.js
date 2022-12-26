/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          100: "#e0e5ec",
          200: "#003545",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

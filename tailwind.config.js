/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/app/**/*.{html,ts}",
    "src/app/*.{html,ts}",
    "src/app/card-details/*.{html,ts}",
    "src/app/card-details/card-input/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'p-blue':"#6448FE",
        'p-violet':"#600594"
      }
    },
  },
  plugins: [],
}

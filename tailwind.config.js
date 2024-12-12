/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      fontFamily: {
        "inter": ["'Inter'", "sans-serif"]
      },

      colors: {

        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",

        "facebook": "hsl(208, 92%, 53%)",
        "twitter": "hsl(203, 89%, 53%)",
        "ig-gradient-start": "hsl(37, 97%, 70%)",
        "ig-gradient-end": " hsl(329, 70%, 58%)",
        "youtube": "hsl(348, 97%, 39%)",

        "toggle-dark": "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
        "toggle-light": "hsl(230, 22%, 74%)",

        "dt-vdb-bg": "hsl(230, 17%, 14%)",
        "dt-vdb-top-bg": "hsl(232, 19%, 15%)",
        "dt-dsb-card-bg": "hsl(228, 28%, 20%)",
        "dt-dsb-text": "hsl(228, 34%, 66%)",

        "lt-vpb-top-bg": "hsl(225, 100%, 98%)",
        "lt-lgb-card-bg": "hsl(227, 47%, 96%)",
        "lt-dgb-text": "hsl(228, 12%, 44%)",
        "lt-vdb-text": "hsl(230, 17%, 14%)",
      },

    },
  },
  plugins: [],
  darkMode: 'class'
}


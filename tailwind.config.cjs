/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        blue: "#001738",
        pumpkin: "#FF7200",
      },
      fontFamily: {
        Barlow: ["Barlow Condensed", "sans-serif"],
        Karla: ["Karla", "sans-serif"],
      },
      fontSize: {
        xs: "16px",
        xl: "20px",
        l: "16px",
        tiny: "10px",
        headingOne: "32px",
      },
    },
  },

  plugins: [],
};

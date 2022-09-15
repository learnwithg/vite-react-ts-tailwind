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
        danger: "#d72c0d",
        pressed: "#fff4eb",
      },
      fontFamily: {
        Barlow: ["Barlow Condensed", "sans-serif"],
        Karla: ["Karla", "sans-serif"],
      },
      fontSize: {
        tiny: "10px",
        xs: "16px",
        xl: "20px",
        l: "16px",
        leading: "14px",
        headingOne: "32px",
        helper: "12px",
      },
    },
  },

  plugins: [],
};

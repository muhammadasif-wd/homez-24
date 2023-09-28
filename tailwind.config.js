const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      // 320px for our most small device
      sm: "375px",
      // 375 px for our regular mobile device
      sml: "500px",
      // 500px for our large mobile device
      md: "667px",
      // 667px for our regular tablet device
      mdl: "768px",
      // 768px for our large tablet device
      lg: "960px",
      // 960px for our small laptop device
      lgl: "1024px",
      // 1024px for our extra laptop device
      xl: "1280px",
      // 1280px for our small desktop monitor size
      xxl: "1366px",
      // 1366px for our medium desktop monitor size
      exl: "1440px",
      // 1440px for our regular desktop device size
    },
    colors: {
      primary: "#EF5A1E",
      secondary: "#005faa",
      black: "#222222",
      dark: "#414141",
      natural: "#697177",
      success: "#17C964",
      warning: "#F5A524",
      error: "#F31260",
    },
    extend: {},
  },
  plugins: [],
});

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      md: "868px",
      // => @media (min-width: 768px) { ... }
    },
  },
};

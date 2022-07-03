module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFF1E1",
        secondary: "#D2601A",
        tertiary: "#FFECD6",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      margin: {
        26: "100px",
      },
    },
  },
  plugins: [],
};

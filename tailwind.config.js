export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        harry: ["HarryP", "serif"], // Ensure this matches the @font-face in CSS
      },
      colors: {
        gryffindor: "#740001",
        slytherin: "#1A472A",
        ravenclaw: "#0E1A40",
        hufflepuff: "#FFDB00",
        parchment: "#F1E5C3",
        darkMagic: "#191919",
      },
    },
  },
  plugins: [],
};

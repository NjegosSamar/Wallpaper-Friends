/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-box1": "#FC5185",
        "color-box2": "#522546",
        "color-box3": "#0D9276",
        "color-box4": "#F9ED69",
        "color-box5": "#A91D3A",
        "color-box6": "#B1B2FF",
        "color-box7": "#153448",
        "color-box8": "#FF7878",
        "color-box9": "#3F4E4F",
        about: "#153448",
      },
      fontFamily: {
        "Poetsen-One": ["Poetsen One", "sans-serif"],
      },
      spacing: {
        130: "30rem",
        140: "35rem",
      },
    },
  },
  plugins: [],
};

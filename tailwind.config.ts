import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F1F3FF",   // page background
        ink: "#16133D",     // text, dark sections
        coral: "#FF4B6E",   // primary action
        cobalt: "#3355FF",  // secondary accent
        sun: "#FFD43B",     // sticker highlight
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(40px) rotate(var(--r, 0deg))" },
          "100%": { opacity: "1", transform: "translateY(0) rotate(var(--r, 0deg))" },
        },
      },
      animation: { rise: "rise .9s cubic-bezier(.2,.8,.2,1) both" },
    },
  },
  plugins: [],
};
export default config;

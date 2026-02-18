import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",  
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },

  plugins: [],
};

export default config;

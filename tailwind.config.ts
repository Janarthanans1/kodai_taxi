import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255, 255, 255, 0.3)", 
        color_1: "#ffffff", 
        color_2: "#000000", 
        color_3: "#facc15", 
       },
    },
  },
  plugins: [],
} satisfies Config;

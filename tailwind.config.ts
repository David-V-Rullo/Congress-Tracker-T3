import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      fontFamily: {
        sans: ["Gotham", "sans-serif"],
      },
      textShadow: {
        'md': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [require("tailwindcss-textshadow")],
} satisfies Config;

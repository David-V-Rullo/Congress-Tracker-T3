import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      fontFamily: {
        sans: ["Gotham", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

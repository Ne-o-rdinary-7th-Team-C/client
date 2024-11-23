import type { Config } from "tailwindcss";
import { colors } from "./src/colors";
import { borderRaidus } from "./src/borderRadius";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      borderRadius: {
        ...borderRaidus,
      },
    },
  },
  plugins: [],
} satisfies Config;

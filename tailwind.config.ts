import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: "#449965",
        greenContrast: "#214A31",
        orange: "#F86624",
        greenPale: "#B5D4C1",
        greenBlue: "#43BCCD",
        yellow: "#F9C80E",
        blue: "#39B6FF",
      },
    },
  },
  plugins: [],
};
export default config;

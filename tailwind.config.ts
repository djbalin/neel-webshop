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
        green: "#26744E",
        greenContrast: "#214A31",
        orange: "#F86624",
        greenPale: "#449965",
        greenBlue: "#43BCCD",
        yellow: "#F9C80E",
        blueCustom: "#39B6FF",
      },
    },
  },
  plugins: [],
};
export default config;

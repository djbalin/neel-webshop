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
        brandLightBlue: "#DBF0FF",
        brandLightBlue2: "#A9DBFF",
        brandGreen: "#38B822",
        brandOrange: "#F59E0B",
      },
      keyframes: {
        customBounce: {
          "0%, 100%": {
            transform: "none",
            // "animation-timing-function": "cubic-bezier(0.91,0.1,0.83,0.67)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.6, 1)",
          },
          "50%": {
            scale: "1.3",
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.91,0.1,0.83,0.67)",
            // "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
      },
      animation: {
        customBounce: "customBounce 1s", // Define the custom animation
      },
    },
  },
  plugins: [],
};
export default config;

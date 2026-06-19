import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#eef7fb",
          100: "#d4ecf6",
          200: "#a9d8ed",
          300: "#6fbde0",
          400: "#369cce",
          500: "#1d7fb3",
          600: "#176490",
          700: "#155576",
          800: "#0f3d54",
          900: "#0a2a3b",
          950: "#061a27",
        },
        seafoam: {
          300: "#7fe7d4",
          400: "#43d6bd",
          500: "#1bbfa3",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        wave: "wave 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "rgb(var(--sand) / <alpha-value>)",
        terracotta: "rgb(var(--terracotta) / <alpha-value>)",
        olive: "rgb(var(--olive) / <alpha-value>)",
        charcoal: "rgb(var(--charcoal) / <alpha-value>)",
        linen: "rgb(var(--linen) / <alpha-value>)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"]
      },
      keyframes: {
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        riseIn: "riseIn 700ms ease-out both"
      }
    }
  },
  plugins: []
};

export default config;

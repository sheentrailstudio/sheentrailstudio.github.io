import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#faf7ef",
          soft: "#f3efe3",
          deep: "#ece7d6",
        },
        ink: {
          DEFAULT: "#10130f",
          soft: "#2a2e29",
          muted: "#5a5f57",
          subtle: "#8a8f84",
          hair: "rgba(16,19,15,0.12)",
        },
        moss: {
          50: "#eef3ec",
          100: "#d9e3d4",
          200: "#b2c3a9",
          300: "#7e977d",
          400: "#4e6d52",
          500: "#315440",
          600: "#264433",
          700: "#1d3727",
          800: "#172b1f",
          900: "#0f1d15",
        },
        ember: {
          50: "#fbf1e8",
          100: "#f5dcc3",
          200: "#ecbc90",
          300: "#e09a5f",
          400: "#d07537",
          500: "#b35a26",
          600: "#8d431d",
        },
        med: {
          50: "#eef4f6",
          100: "#d3e3e7",
          200: "#a6c5cc",
          500: "#3a7a86",
          700: "#26525b",
          900: "#162d32",
        },
        garden: {
          50: "#f5ede8",
          100: "#ecdacd",
          200: "#d9b6a0",
          300: "#bc8a72",
          500: "#805645",
          700: "#4d2f25",
        },
      },
      fontFamily: {
        serif: [
          "var(--font-serif)",
          "Fraunces",
          "var(--font-serif-tc)",
          "Noto Serif TC",
          "ui-serif",
          "Georgia",
          "serif",
        ],
        sans: [
          "var(--font-sans)",
          "Inter",
          "var(--font-sans-tc)",
          "Noto Sans TC",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
      letterSpacing: {
        display: "-0.012em",
      },
      maxWidth: {
        shell: "78rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

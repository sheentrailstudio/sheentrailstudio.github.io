import type { Config } from "tailwindcss";

/**
 * Light system: white surfaces, ink type, gold only for lines and small signals.
 * `gold` is 3.2:1 on white, so text that needs gold uses `gold-text`.
 */
const sans = [
  "var(--font-sans)",
  "var(--font-sans-tc)",
  "ui-sans-serif",
  "system-ui",
  "sans-serif",
];

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#ffffff",
        "surface-alt": "#f4f5f7",
        ink: "#16181d",
        "ink-muted": "#5a606b",
        line: "#e3e5e9",
        gold: "#b08a3e",
        "gold-text": "#7a5f2a",
      },
      fontFamily: {
        sans,
        display: sans,
      },
      letterSpacing: {
        display: "-0.02em",
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

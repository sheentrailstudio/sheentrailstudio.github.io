import type { Config } from "tailwindcss";

/**
 * Cosmic / metallic direction.
 *
 * `void` is the deep-space ground, `chrome` the light foreground. Surface
 * treatments (brushed type, machined edges) live in globals.css as `metal-*`.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Deep space, not flat black — there is blue in the dark. */
        void: {
          DEFAULT: "#04060e",
          soft: "#0a0f1f",
          deep: "#141b31",
        },
        /* Chrome. Foreground reads as brushed metal against the void. */
        chrome: {
          DEFAULT: "#e9edf6",
          soft: "#c2cbdc",
          muted: "#8c96ac",
          subtle: "#69738a",
          hair: "rgba(233,237,246,0.14)",
        },
        /* The primary accent. An uncommon green-cyan, not the usual blue. */
        aurora: {
          50: "#0b1f1a",
          100: "#0f2f27",
          200: "#164839",
          300: "#8ef7d4",
          400: "#6ef2c4",
          500: "#5ceec0",
          600: "#3ad9a6",
          700: "#25b98a",
          800: "#178964",
          900: "#0d5540",
        },
        /* Morning star: pale gold, for star marks and rare highlights. Note the
           ramp runs dark-to-light like the rest of the dark system — 50 is the
           deepest, not the palest. */
        star: {
          50: "#1c1708",
          100: "#2b230e",
          200: "#8a7440",
          300: "#e8cf9a",
          400: "#efdcb4",
          500: "#e2c187",
          600: "#c9a86a",
        },
        /* Dose Mate. */
        plasma: {
          50: "#08202b",
          100: "#0d3242",
          200: "#155066",
          500: "#4fd0e8",
          700: "#9ae6f5",
          900: "#d3f4fb",
        },
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "Space Grotesk",
          "var(--font-sans-tc)",
          "Noto Sans TC",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
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

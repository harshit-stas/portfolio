import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14181C",
        paper: "#F7F7F4",
        muted: "#565D63",
        rule: "#D8D6CE",
        gold: "#A9822E",
        signal: "#2B4C6F",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        report: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;

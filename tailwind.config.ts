import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        olive: {
          DEFAULT: "#8A9A5B",
          dark: "#6b7a44",
          light: "#a8b87a",
        },
        ivory: "#F3EFEA",
        sand: {
          DEFAULT: "#B08968",
          dark: "#8a6a4e",
          light: "#cba98a",
        },
        slate: {
          cf: "#4A5D6A",
          "cf-dark": "#36444e",
        },
        charcoal: "#262626",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider: "0.08em",
        widest: "0.15em",
      },
      lineHeight: {
        relaxed: "1.75",
        loose: "2",
      },
    },
  },
  plugins: [],
};

export default config;

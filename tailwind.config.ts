/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./slices/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amble: ["var(--font-amble)"],
        questa: ["var(--font-questa)"],
      },
      colors: {
        black: "#1B1B1B",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".about-text": {
          background: "#8C8C8C",
          fontSize: "0.875rem",
          backgroundSize: "200% 100%",
          backgroundPositionX: "100%",
          color: "transparent",
          backgroundClip: "text",
          webkitBackgroundClip: "text",

          "@screen lg": {
            fontSize: "2rem",
          },
        },

        ".about-first-text": {
          background: "#8C8C8C",
          backgroundSize: "200% 100%",
          backgroundPositionX: "100%",
          color: "transparent",
          backgroundClip: "text",
          webkitBackgroundClip: "text",
        },
      });
    }),
  ],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-questaSans)"],
      },
      colors: {
        black: "#1B1B1B"
      },
    },
  },
  plugins: [
    //   plugin(function ({ addComponents }) {
    //     addComponents({
    //       ".noise": {
    //          width: "100%",
    // height: "100%",
    // filter: "contrast(240%) brightness(450%)",
    // background: "linear-gradient(69deg, rgba(27,27,27,1), rgba(89,41,77,0.47)), url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4.3' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")",
    //       },
    //     });
    //   }),
  ],
} satisfies Config;

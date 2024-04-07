import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "ekc-b1": "#4DB9E3",
        "ekc-b2": "#023B51",
        "ekc-b3": "#10AEEC",
        "ekc-b4": "#0E9FD7",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "text-base": "#191919",
        success: "#49A569",
        "green-500": "#243831",
        "green-300": "#2B5F44",
        "green-100": "#D8E9E4",
        golden: "#C5A365",
        "grey-100": "#BBC2C0",
        "grey-300": "#939494",
      },
    },
  },
  plugins: [daisyui],
};
export default config;

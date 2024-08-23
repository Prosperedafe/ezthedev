import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lsm': '320px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primaryBg": "#F4F3EE",
        "primaryText": "#3D403C",
        "light-200": "hsla(210, 17%, 98%, 1)",
        "light-300": "hsla(208, 50%, 98%, 1)",
        "dark-200": "hsla(0, 0%, 31%, 1)",
        "text-disabled": "hsla(228, 3%, 66%, 1)",
      },
      fontFamily: {
        Trial: ['Trial', 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;

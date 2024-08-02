import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxl': '1350px',
        'xl': '1280px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
        'ssm': '420px',
        'lsm': '320px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "hsla(208, 50%, 41%, 1)",
        "light-100": "#fff",
        "light-200": "hsla(210, 17%, 98%, 1)",
        "light-300": "hsla(208, 50%, 98%, 1)",
        "dark-200": "hsla(0, 0%, 31%, 1)",
        "text-disabled": "hsla(228, 3%, 66%, 1)",
      },
      fontFamily: {
        montserrat: ['Inter', 'sans-serif'],
        proxima: ['Proxima', 'sans-serif'],
        Sans: ['Source Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;

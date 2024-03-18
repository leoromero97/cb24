import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeInLeft: {
          '0%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(0)'},
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeInLeft: 'fadeInLeft 1s ease-in',
      },
    },
  },
  plugins: [],
};
export default config;

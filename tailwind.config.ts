import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Oswald:["var(--font-oswald)"] ,
        pixel:["var(--font-pixel)"], 
      },
      backgroundImage:{
        "grain": "url('/Assets/images/Grain.gif')",
      },
      animation:{
        "noisy-bag": "noise 1s step(2) infinite",
      },
      keyframes:{
        noise:{
          "0%": {
            transform: "translate3d(0,9rem, 0)",
          },
          "10%": {
            transform: "translate3d(-1rem,-4rem, 0)",
          },
          "20%": {
            transform: "translate3d(-8rem,2rem, 0)",
          },
          "30%": {
            transform: "translate3d(9rem, -9rem ,0)",
          },
          "40%": {
            transform: "translate3d(-2rem,6rem,0)",
          },
          "50%": {
            transform: "translate3d(-9rem,-6rem,0)",
          },
          "60%": {
            transform: "translate3d(2rem , 9rem, 0)",
          },
          "70%": {
            transform: "translate3d(7rem ,-8rem , 0)",
          },
          "80%": {
            transform: "translate3d(-9rem, 1rem, 0)",
          },
          "90%": {
            transform: "translate3d(6rem , -5rem, 0)",
          },
          "100%": {
            transform: "translate3d(-7rem , 0,0)",
          },
        }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;

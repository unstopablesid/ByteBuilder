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
        "noisy-bag": "noisy-bag 1s step(2) infinite linear",
      },
      keyframes:{
        noise:{
          "0%": {
            transform: "translate(0, 0)",
          },
          "10%": {
            transform: "translate(-5%, -5%)",
          },
          "20%": {
            transform: "translate(-10%, 5%)",
          },
          "30%": {
            transform: "translate(5%, -10%)",
          },
          "40%": {
            transform: "translate(-5%, 15%)",
          },
          "50%": {
            transform: "translate(-10%, 5%)",
          },
          "60%": {
            transform: "translate(15%, 0)",
          },
          "70%": {
            transform: "translate(0, 10%)",
          },
          "80%": {
            transform: "translate(-15%, 0)",
          },
          "90%": {
            transform: "translate(10%, 5%)",
          },
          "100%": {
            transform: "translate(5%, -5%)",
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
